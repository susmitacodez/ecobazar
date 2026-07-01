import apple from "../assets/images/apple1.png";
import orange from "../assets/images/orange.png";
import cabbage from "../assets/images/cabbage.jpg";
import lettuce from "../assets/images/lettuce.jpg";
import eggplant from "../assets/images/eggplant.jpg";

import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaArrowRight, FaStar } from "react-icons/fa";

const products = [
  {
    img: apple,
    name: "Green Apple",
    price: "$14.99",
    oldPrice: "$20.99",
    sale: true,
  },
  {
    img: orange,
    name: "Fresh Indian Malta",
    price: "$20.00",
  },
  {
    img: cabbage,
    name: "Chinese cabbage",
    price: "$12.00",
  },
  {
    img: lettuce,
    name: "Green Lettuce",
    price: "$9.00",
  },
  {
    img: eggplant,
    name: "Eggplant",
    price: "$34.00",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-hsize text-[#1A1A1A] font-semibold font-pop leading-[120%]">Featured Products</h2>

        <button className="flex items-center gap-2 text-green-600 font-medium font-pop text-[16px] leading-[150%] hover:gap-3 transition-all">
          View All
          <FaArrowRight />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-gray-200">

        {products.map((item, index) => (
          <div
            key={index}
            className="group relative border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-green-500 hover:shadow-xl"
          >
            {/* Sale Badge */}
            {item.sale && (
              <span className="absolute top-3 left-3 z-20 rounded bg-red-500 px-2 py-1 text-xs text-white">
                Sale 50%
              </span>
            )}

            {/* Heart & Eye */}
            <div className="absolute right-3 top-3 z-30 flex translate-x-3 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:bg-green-500 hover:text-white">
                <AiOutlineHeart size={20} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:bg-green-500 hover:text-white">
                <AiOutlineEye size={20} />
              </button>

            </div>

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto h-44 w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Name */}
            <h3 className="mt-3  text-[#4D4D4D] font-medium font-pop text-[14px] leading-[150%] transition group-hover:text-green-600">
              {item.name}
            </h3>

            {/* Price */}
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[16px] font-pop font-medium  leading-[150%] ">{item.price}</span>

              {item.oldPrice && (
                <span className="text-gray-400 line-through">
                  {item.oldPrice}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="mt-2 flex gap-1 text-xs text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>

            {/* Cart */}
            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all duration-300 hover:bg-green-600 hover:text-white group-hover:bg-green-600 group-hover:text-white">
              <HiOutlineShoppingBag size={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;