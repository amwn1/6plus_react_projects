import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1> HIGH PERFORMANCE ATHLEISIURE FOR THE BEST </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          earum quibusdam? Quibusdam sapiente rem consequuntur modi doloribus
          repellendus
        </p>

        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-button">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available on</p>
        </div>

        <div className="brand-icons">
          <img src="/images/amazon.png" alt="logo" />
          <img src="/images/flipkart.png" alt="logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};

export default Hero;
