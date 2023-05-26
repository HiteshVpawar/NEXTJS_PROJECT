"use client";
// import Sidebar from '@/app/fetch/sidebar'
import Link from "next/link";
import React from "react";

export default function Navb() {
  const handlelogout = () => {
    alert("logout successfuly");
  };

  return (
    <div>
      <div className="nav">
        {/* <Sidebar/> */}
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="register">
          <span>Register</span>
        </Link>
        <Link href="Login">
          <span>Login</span>
        </Link>
        <Link href="fetch">
          <span>Products</span>
        </Link>
        <input
          style={{ marginLeft: "800px", height: "40px" }}
          type="text"
          placeholder="search"
        ></input>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "8px",
            borderRadius: "5px",
          }}
        >
          Search
        </button>
        <h3 className="vote-up-off logout" title="logout">
          <Link href={"/"} onClick={handlelogout} className="mt-3 ml-5 ">
            <div>
              <svg
                className="h-6 w-6 text-red-400"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>
            </div>
          </Link>
        </h3>
      </div>
    </div>
  );
}

// "use client"
// import { useState, useEffect } from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";

// export default function Example() {
//   const [openNav, setOpenNav] = useState(false);

//   useEffect(() => {
//     window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
//   }, []);

//   const navList = (
//     <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center" style={{color:"black"}}>
//           Pages
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center" style={{color:"black"}}>
//           Account
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center" style={{color:"black"}}>
//           Blocks
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center" style={{color:"black"}}>
//           Docs
//         </a>
//       </Typography>
//     </ul>
//   );

//   return (
//     <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
//       <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           className="mr-4 cursor-pointer py-1.5 font-medium"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">{navList}</div>
//         <Button variant="gradient" size="sm" className="hidden lg:inline-block">
//           <span>Buy Now</span>
//         </Button>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               className="h-6 w-6"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </IconButton>
//       </div>
//       <MobileNav open={openNav}>
//         <div className="container mx-auto">
//           {navList}
//           <Button variant="gradient" size="sm" fullWidth className="mb-2">
//             <span>Buy Now</span>
//           </Button>
//         </div>
//       </MobileNav>
//     </Navbar>
//   );
// }
