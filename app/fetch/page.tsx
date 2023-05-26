import React from "react";
import { CardComponent } from "./cart";

export const getData = async () => {
  let data;
  // console.log("********* 0",data )
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("erroe in  fetch data");
  } else {
    data = res;
  }
  return data.json();
};

export default async function FetchPage() {
  const data = await getData();

  // console.log("****** 1",data)

  return (
    <div className="product">
      {data.products.map((curElement: any, index: number) => (
        <div key={index} className="carddiv">
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img className="img" src={curElement.images[0]} />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {curElement.title}
                <br></br>₹{curElement.price}
              </h5>
            </div>
            <div className=" cart">
              <CardComponent description={curElement.description} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
