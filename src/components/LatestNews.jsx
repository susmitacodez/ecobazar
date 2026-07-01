import React from "react";
import {
  FiTag,
  FiUser,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";

import news1 from "../assets/images/news1.jpg";
import news2 from "../assets/images/news2.jpg";
import news3 from "../assets/images/news3.jpg";

const newsData = [
  {
    id: 1,
    image: news1,
    day: "18",
    month: "NOV",
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
  {
    id: 2,
    image: news2,
    day: "29",
    month: "JAN",
    title:
      "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
  },
  {
    id: 3,
    image: news3,
    day: "21",
    month: "FEB",
    title:
      "Maecenas blandit risus elementum mauris malesuada.",
  },
];

const LatestNews = () => {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Title */}
        <h2 className="text-4xl font-semibold font-pop text-hsize text-[#1A1A1A] leading-[120%] text-center mb-12">
          Latest News
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {newsData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg border border-gray-200 overflow-hidden transition duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Date */}
                <div className="absolute bottom-4 left-4 bg-white rounded-md px-4 py-2 shadow">
                  <h3 className="text-2xl font-bold leading-none">
                    {item.day}
                  </h3>

                  <p className="text-xs uppercase text-gray-500">
                    {item.month}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Meta */}
                <div className="flex flex-wrap font-normal pt-6 font-pop text-[14px] leading-[150%] items-center gap-5 text-gray-500 text-sm mb-4">

                  <div className="flex items-center gap-1">
                    <FiTag size={15} />
                    Food
                  </div>

                  <div className="flex items-center gap-1">
                    <FiUser size={15} />
                    By Admin
                  </div>

                  <div className="flex items-center gap-1">
                    <FiMessageSquare size={15} />
                    65 Comments
                  </div>

                </div>

                {/* Title */}
                <h3 className="text-[16px] leading-[150%] pt-5 pb-2 font-medium font-pop text-[#1A1A1A] mb-6 group-hover:text-green-600 transition">
                  {item.title}
                </h3>

                {/* Button */}
                <button className="flex items-center gap-2 font-pop text-[16px] leading-[120%] font-semibold text-green-600 hover:gap-3 transition-all">
                  Read More
                  <FiArrowRight />
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LatestNews;