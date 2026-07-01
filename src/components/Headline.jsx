import React from "react";
import Container from "../components/Container";

import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const LogoMarquee = () => {
  return (
    <section className="py-15 bg-white">
      <Container>
        <div className="overflow-hidden relative">

          <div className="flex w-max marquee">

            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[220px] px-10 border-r border-gray-200"
              >
                <img
                  src={logo}
                  alt=""
                  className="h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
};

export default LogoMarquee;