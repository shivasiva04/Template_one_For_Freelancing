import React from "react";
import Navbar from "./component/layout/navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services"; 
import { ThemeProvider } from "./component/context/ThemeContext"; 
import Process from "./sections/Process/Process"; 
import Membership from "./sections/Membership/Membership";
import Technology from "./sections/Technology/Technology";
import Authority from "./sections/Authority/Authority";
import Footer from "./component/layout/footer/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <main className="relative w-full overflow-hidden transition-colors duration-500 bg-[var(--bg-core)]">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Technology />
        <Authority />
        <Membership />
        <Footer/>

      </main>
    </ThemeProvider>
  );
};

export default App;