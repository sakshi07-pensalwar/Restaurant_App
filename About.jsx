import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Positioned directly opposite Hyde Park and Kensington Palace, The Milestone Hotel & Residences offers exceptional views across 
            the gardens to this most famous of homes. Our wonderfully opulent and intensely charming hotel is a treasure trove of stylish, 
            individually designed rooms, suites and residences laden with rich furnishings and original artworks. Also contained with our hotel’s 
            where guests dine on fine English cuisine,Stable’s Bar, and the elegant Park Lounge, where quintessential British Afternoon Tea is enjoyed daily.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about .png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
