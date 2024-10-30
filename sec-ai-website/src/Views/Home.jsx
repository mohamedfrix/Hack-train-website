import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Event from "../components/Event";
import FAQ from "../components/FAQ";
import MentorCarousel from "../components/Mentors";
import Footer from "../components/Footer";
import Agenda from "../components/Agenda";

function Home() {
  return (
    <div className="font-fira-code">
      <Navbar />
      <Hero />
      <Event />
      <MentorCarousel />
      <Agenda />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
