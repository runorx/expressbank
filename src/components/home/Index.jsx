import React, { useEffect, useState } from "react";
import Hero from "./components/home/Hero";
import Features from "./components/home/Motivation";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Testimonials  from "./components/home/Reviews";
import { ScrollToTopBtn } from "./components/home/ScrollToTopBtn";

export const Index = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = (_event) => {
      if (window.scrollY > window.innerHeight && !startAnimation) {
        setStartAnimation(true);
      }

      if (window.scrollY < window.innerHeight && startAnimation) {
        setStartAnimation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startAnimation]);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials  />
      <Footer />
      <ScrollToTopBtn startAnimation={startAnimation} />
    </>
  );
};



//  import Hero from "./components/home/Hero";
// import Features from "./components/home/Motivation";
// import Footer from "./components/layout/Footer";
//  import Navbar from "./components/layout/Navbar";
//  import Testimonials from "./components/home/Reviews";

// export default function Index () {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between bg-white">
//       <Navbar />
//       <Hero />
//       <Features />
//       <Testimonials />
//       <Footer />
//     </main>
//   )
// }

