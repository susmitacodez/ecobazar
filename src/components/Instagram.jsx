import React from "react";
import { FaInstagram } from "react-icons/fa";
import Container from "../components/Container";

import insta1 from "../assets/images/insta1.jpg";
import insta2 from "../assets/images/insta2.jpg";
import insta3 from "../assets/images/insta3.jpg";
import insta4 from "../assets/images/insta4.jpg";
import insta5 from "../assets/images/insta5.jpg";
import insta6 from "../assets/images/insta6.jpg";

const images = [
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
];

const InstagramGallery = () => {
  return (
    <section className="py-15 bg-white">
      <Container>
        <h2 className="text-4xl font-semibold font-pop leading-[120%] text-center mb-12">
          Follow us on Instagram
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={img}
                alt=""
                className="w-full h-[220px] object-cover duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#2C742F]/70 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center">

                <FaInstagram
                  size={34}
                  className="text-white scale-50 group-hover:scale-100 duration-300"
                />

              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
};

export default InstagramGallery;