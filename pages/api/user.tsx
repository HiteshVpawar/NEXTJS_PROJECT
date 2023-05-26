import type { NextApiRequest, NextApiResponse } from "next";

import getDB from "./connection";
import { ObjectId } from "mongodb";

let db: any = undefined;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  db = await getDB();

  const {
    body, //For POST Method
    query: { action: action },

    method,

    headers: {},
  } = request;

  console.log("DB >>>>", request.body.action);

  let data: any;

  switch (action) {
    case "createUser":
      data = await createUser(request, response);

      return response.status(200).json({ action: action, data: data });

      case "loginUser":
      data = await loginUser(request, response);

      return response.status(200).json({ action: action, data: data });


    case "findUser":
      data = await findUser(request, response);

      return response.status(200).json({ action: action, data: data });

    case "deleteUser":
      data = await deleteUser(request, response);

      return response.status(200).json({ action: action, data: data });

    case "updateUser":
      data = await updateUser(request, response);

      return response.status(200).json({ action: action, data: data });

    case "agreegateUser":
      data = await agreegateUser(request, response);

      return response.status(200).json({ action: action, data: data });

    case "getproduct":
      data = await getproduct(request, response);

      return response.status(200).json({ action: action, data: data });

    case "agreegateProduct":
      data = await agreegateProduct(request, response);

      return response.status(200).json({ action: action, data: data });

    case "orderDetails":
      data = await orderDetails(request, response);

      return response.status(200).json({ action: action, data: data });

      case "getallUser":
        
      data=await getallUser(request,response)

      return response.status(200).json({action:action,data:data})

    default:
      return response
        .status(200)
        .json({ data: "No Data Found For : " + action });
  }
}

// export async function createUserTable(
//   request: NextApiRequest,
//   response: NextApiResponse

// ) {
//   const user = await db.collection("Hitesh");

//   const data = await user.find({ }).toArray();

//   return response.status(200).json({ data });
// }

export async function getproduct(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const product = await db.collection("products");
  const data = await product.insertMany(request.body.data);
  return response.status(200).json({ data });
}


export async function createUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection("Hitesh");
  const data = await user.insertOne(JSON.parse(request.body));
  return response.status(200).json({ data });
}

export async function loginUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection("Hitesh");
  const data = await user.find((JSON.parse(request.body))).toArray();
    console.log("user data ------>",data)
    if(!data)
    {
      console.log("data is not present")
    }
  return response.status(200).json({ data });
}

export async function findUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection("Hitesh");
  const data = await user
    .find({ _id: new ObjectId("646e79b43163e32aaeef33e6") })
    .toArray();
  return response.status(200).json({ data });
}

export async function deleteUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection("Hitesh");
  const data = await user.deleteOne({
    _id: new ObjectId("6470c3af94ab564b8946ed32"),
  });
  return response.status(200).json({ data });
}

export async function updateUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection("Hitesh");
  const data = await user.updateOne(
    { firstName: "dinesh" },
    {
      $set: { firstName: "gaurav", lastName: "chauhule" },
    }
  );

  return response.status(200).json({ data });
}

export async function agreegateUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const user = await db.collection("Hitesh");

  const data = await user.aggregate([{ $match: { city: "pune" } }]).toArray();

  return response.status(200).json({ data });
}

export async function agreegateProduct(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const product = await db.collection("order");

  // const data = await product.aggregate([{ $sort: { price: -1 }}]).toArray();
  // const data = await product.aggregate([{ $group: {_id:"$title"}}]).toArray();
  const data = await product
    .aggregate([
      {
        $lookup: {
          from: "products",
          localField: "id",
          foreignField: "id",
          as: "order",
        },
      },
    ])
    .toArray();
  return response.status(200).json({ data });
}

export async function orderDetails(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const product = await db.collection("order");
  const data = await product.insertMany(request.body.data);
  return response.status(200).json({ data });
}

async function getallUser(
  request:NextApiRequest,
  response:NextApiResponse
)
{
  const user=await db.collection("Hitesh");
  const data=await user.find(request.body.data).toArray();
  return response.status(200).json({data})
}