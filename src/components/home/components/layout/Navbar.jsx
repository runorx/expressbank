// import React, { useRef } from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { AiFillCloseCircle, AiFillHome } from "react-icons/ai";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoLogIn } from "react-icons/io5";
// import { MdReviews } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { Logo } from "../../../shared/Logo";

// const navItems = ["Home", "About", "Reviews"];
// const navIcons = [
//   <AiFillHome size={25} className="mb-1 mr-1" />,
//   <BsInfoCircleFill size={25} className="mb-1 mr-1" />,
//   <MdReviews size={25} className="mr-1" />,
// ];

// export default function Navbar() {
//   //navbar opened/closed state
//   const [isOpen, setIsOpen] = useState(false);
//   //navbar scroll when active state
//   const [navbar, setNavbar] = useState(false);

//   const navRef = useRef(null);
//   const OpenBtnRef = useRef(null);

//   useEffect(() => {
//     //navbar scroll changeBackground function
//     const changeBackground = () => {
//       if (window.scrollY > 100) {
//         setNavbar(true);
//       } else {
//         setNavbar(false);
//       }
//     };
//     window.addEventListener("scroll", changeBackground);

//     return () => {
//       window.removeEventListener("scroll", changeBackground);
//     };
//   }, []);

//   useEffect(() => {
//     //Close Navbar When Click outside it.
//     const closeNavbar = (e) => {
//       if (
//         !navRef?.current?.contains(e.target) &&
//         !OpenBtnRef?.current?.contains(e.target) &&
//         isOpen
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("click", closeNavbar);

//     return () => {
//       document.removeEventListener("click", closeNavbar);
//     };
//   }, [isOpen]);

//   return (
//     <>
//       <div
//         className={`${
//           navbar ? "bg-white-50 shadow-lg " : " bg-transparent "
//         }  fixed z-50 top-0 w-full transition-all duration-300 ease-in-out`}
//         style={{
//           marginBottom: "20px"
//         }}
//       >
//         <nav className="max-w-[1800px] w-full mx-auto px-4 sm:px-10 md:px-12 py-2 md:py-4 flex justify-between items-center z-20">
//           <div className="max-w-[200px]">
//             <Logo bg={false} textSize="text-lg md:text-2xl lg:text-3xl" />
//           </div>

//           <div className="hidden lg:flex justify-center items-center gap-4 px-4 text-lg text-slate-800">
//             {navItems.map((navItem, index) => (
//               <a
//                 key={navItem}
//                 className="flex justify-center items-center   p-3 !font-sans font-bold rounded-lg hover:text-white hover:bg-slate-800"
//                 href={`#${navItem}`}
//               >
//                 {navIcons[index]}
//                 {navItem}
//               </a>
//             ))}
//           </div>

//           <div className="hidden lg:flex justify-end items-center gap-4">
//             <Link
//               to="/register"
//               className="inline-flex font-bold text-xs sm:text-sm bg-teal-800 text-white hover:bg-white px-2 sm:px-3 py-2 hover:text-blue-800 border-2 hover:border-blue-800 items-center rounded-lg
//          shadow transition-all ease-in-out duration-300"
//             >
//               Register
//             </Link>
//             <Link
//               to="/login"
//               className="flex gap-1 justify-center items-center font-bold text-xs sm:text-sm bg-blue-800 text-white hover:bg-white px-2 sm:px-3 py-2 hover:text-blue-800 border-2 hover:border-blue-800  rounded-lg
//          shadow transition-all ease-in-out duration-300"
//             >
//               <IoLogIn size={20} />
//               Login
//             </Link>
//           </div>

//           <button
//             ref={OpenBtnRef}
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden focus:outline-none border-2 border-transparent rounded hover:border-slate-900 active:border-slate-900  focus:border-slate-900"
//           >
//             <GiHamburgerMenu size={30} className="text-slate-900" />
//           </button>
//         </nav>
//       </div>

//       {/* Modal */}
//       <div
//         className={`fixed inset-0 z-[55] flex justify-center items-center p-6 bg-slate-700 bg-opacity-50 transition-all duration-300 ease-in-out delay-500
//      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <nav
//           ref={navRef}
//           className={`w-full bg-white text-blue-900 transition-all duration-300 ease-in-out flex flex-col gap-4 text-center p-4 shadow rounded ${
//             isOpen ? "translate-y-0 scale-100" : "translate-y-[100vh] scale-0"
//           }`}
//         >
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden focus:outline-none ml-auto border-2 border-transparent rounded hover:border-red-500 active:border-red-500  focus:border-red-500"
//           >
//             <AiFillCloseCircle size={35} className="text-red-700" />
//           </button>
//           {navItems.map((navItem, index) => (
//             <a
//               key={navItem}
//               className="nav-links flex justify-center items-center gap-[1px] py-2 !font-sans font-semibold bg-blue-200 border-x-4 border-blue-800 hover:underline focus:underline hover:text-slate-800 focus:text-slate-800"
//               href={`#${navItem}`}
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {navIcons[index]}
//               {navItem}
//             </a>
//           ))}
//           <div className="flex justify-center items-center gap-4">
//             <Link
//               to="/register"
//               className="inline-flex font-bold text-xs sm:text-sm bg-teal-800 text-white hover:bg-white px-4 py-2 hover:text-blue-800 border-2  border-teal-800 hover:border-blue-800 items-center rounded-lg
//          shadow transition-all ease-in-out duration-300"
//             >
//               Register
//             </Link>
//             <Link
//               to="/login"
//               className="flex gap-1 justify-center items-center font-bold text-xs sm:text-sm bg-blue-800 text-white hover:bg-white px-4  py-2 hover:text-blue-800 border-2 border-blue-800 hover:border-blue-800  rounded-lg
//          shadow transition-all ease-in-out duration-300"
//             >
//               <IoLogIn size={16} />
//               Login
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoLogIn } from "react-icons/io5";
// import { Logo } from "../../../shared/Logo";

// export default function Navbar() {
//   const [navbar, setNavbar] = useState(false); // Scroll background change state

//   useEffect(() => {
//     const handleScroll = () => {
//       setNavbar(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
//         navbar ? "bg-navyblue text-white shadow-lg" : "bg-white text-black"
//       }`}
//     >
//       <nav className="max-w-[1800px] mx-auto px-4 sm:px-10 md:px-12 py-2 flex justify-between items-center">
//         {/* Logo */}
//         <div className="max-w-[200px]">
//           <Logo bg={false} textSize="text-lg md:text-2xl lg:text-3xl" />
//         </div>

//         {/* Buttons (visible on all screen sizes) */}
//         <div className="flex gap-4">
//           <Link
//             to="/register"
//             className="inline-flex font-bold text-xs sm:text-sm bg-teal-800 text-white hover:bg-white px-2 sm:px-3 py-2 hover:text-blue-800 border-2 hover:border-blue-800 items-center rounded-lg shadow transition-all duration-300"
//           >
//             Register
//           </Link>
//           <Link
//             to="/login"
//             className="flex gap-1 justify-center items-center font-bold text-xs sm:text-sm bg-blue-800 text-white hover:bg-white px-2 sm:px-3 py-2 hover:text-blue-800 border-2 hover:border-blue-800 rounded-lg shadow transition-all duration-300"
//           >
//             <IoLogIn size={20} />
//             Login
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#003366]">Express Bank</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#003366] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/register"
              className="px-4 py-2 bg-[#006B4D] text-white rounded hover:bg-[#005A41] transition-colors"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-[#003366] text-white rounded hover:bg-[#002347] transition-colors flex items-center"
            >
              <IoLogIn className="mr-2" />
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <GiHamburgerMenu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-2 py-1 text-lg text-gray-700 hover:text-[#003366]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/register"
                className="block px-2 py-1 text-lg text-white bg-[#006B4D] rounded hover:bg-[#005A41]"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
              <Link
                to="/login"
                className="block px-2 py-1 text-lg text-white bg-[#003366] rounded hover:bg-[#002347] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoLogIn className="mr-2" />
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

