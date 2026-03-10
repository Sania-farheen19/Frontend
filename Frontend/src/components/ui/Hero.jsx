import React from "react";
import "../../style/hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>Welcome to Origin</h1>

        <p>
          Discover amazing products and manage everything
          easily with our platform.
        </p>

        <button className="hero-btn">Explore Now</button>
      </div>

    </section>
  );
};

export default Hero;