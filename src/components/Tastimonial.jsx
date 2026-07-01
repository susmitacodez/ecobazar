import { useState } from "react";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
import client4 from "../assets/images/client4.png";

const testimonials = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Customer",
    image: client1,
    review:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum.",
  },
  {
    id: 2,
    name: "Dianne Russell",
    role: "Customer",
    image: client2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum beatae molestiae.",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "Customer",
    image: client3,
    review:
      "Donec sed neque eget lorem bibendum cursus velit sodales. Integer vitae justo quis.",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    role: "Customer",
    image: client5,
    review:
      "Vivamus pharetra sem ut libero malesuada, vel malesuada nisi luctus.",
  },
  {
    id: 5,
    name: "Kristin Watson",
    role: "Customer",
    image: client6,
    review:
      "Curabitur interdum tortor sit amet ipsum fermentum, nec vulputate urna feugiat.",
  },
  {
    id: 6,
    name: "Devon Lane",
    role: "Customer",
    image: client4,
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
];

export default function ClientTestimonials() {
  const [start, setStart] = useState(0);

  const next = () => {
    setStart((prev) => (prev + 3) % testimonials.length);
  };

  const prev = () => {
    setStart((prev) =>
      prev - 3 < 0 ? testimonials.length - 3 : prev - 3
    );
  };

  const visible = [
    testimonials[start],
    testimonials[(start + 1) % testimonials.length],
    testimonials[(start + 2) % testimonials.length],
  ];

  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex justify-between items-center mb-12">

          <h2 className="text-hsize font-semibold font-pop leading-[120%] text-[#1A1A1A]">
            Client Testimonials
          </h2>

          <div className="flex gap-3">

            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-green-600 hover:text-white duration-300"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center"
            >
              <FaArrowRight />
            </button>

          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {visible.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl duration-300"
            >

              <FaQuoteLeft className="text-4xl text-green-300 mb-6" />

              <p className="text-[#4D4D4D] font-normal font-pop text-[14px] leading-7 mb-4">
                {item.review}
              </p>

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt=""
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-pop font-medium text-[16px] leading-[150%] text-[#1A1A1A]">
                      {item.name}
                    </h3>

                    <p className="text-[#999999] font-normal font-pop leading-[150%] text-sm">
                      {item.role}
                    </p>
                  </div>

                </div>

                <div className="flex text-yellow-400">

                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}