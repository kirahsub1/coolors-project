import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero-sec">
      <div className="tagline">
        <h1>The Super fast Color palettes generator!</h1>
        <p>
          Create the perfect palette or get inspired by <br /> thousands of
          beautiful color Schemes.
        </p>
        <section className="hero-btns">
          <button className="hero-btn1">Start the generator!</button>
          <button className="hero-btn2">Explore trending palettes</button>
        </section> 
      </div>
      <img
        className="hero-img"
        src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1729512261/Coolors1_ijwfun.png"
        alt=""
      />
    </div>
  );
}

export default Hero