import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Container from "../components/Container";

// Assuming these paths are correct based on your existing code structure
import apple1 from "../assets/images/apple1.png";
import orange from "../assets/images/orange.png";
import cabbage from "../assets/images/cabbage.jpg";
import lettuce from "../assets/images/lettuce.jpg";
import eggplant from "../assets/images/eggplant.jpg";
import potato from "../assets/images/potato.jpg";
import corn from "../assets/images/corn.jpg";
import cauliflower from "../assets/images/Cauliflower.jpg";
import capsicum from "../assets/images/capsicum.jpg";
import chili from "../assets/images/chili.jpg";


// Total 15 Items (5 columns * 3 rows)
const products = [
  {
    id: 1,
    name: "Green Apple",
    image: apple1,
    price: 12,
    oldPrice: 24,
    sale: true,
    bestSale: true,
  },
  {
    id: 2,
    name: "Fresh Indian Malta",
    image: orange,
    price: 20,
  },
  {
    id: 3,
    name: "Chinese cabbage",
    image: cabbage,
    price: 12,
  },
  {
    id: 4,
    name: "Green Lettuce",
    image: lettuce,
    price: 9,
  },
  {
    id: 5,
    name: "Eggplant",
    image: eggplant,
    price: 34,
  },
  {
    id: 6,
    name: "Big Potatoes",
    image: potato,
    price: 20,
  },
  {
    id: 7,
    name: "Corn",
    image: corn,
    price: 20,
  },
  {
    id: 8,
    name: "Fresh Cauliflower",
    image: cauliflower,
    price: 12,
  },
  {
    id: 9,
    name: "Green Capsicum",
    image: capsicum,
    price: 10.5,
    oldPrice: 20.99,
    sale: true,
  },
  {
    id: 10,
    name: "Green Chili",
    image: chili,
    price: 34,
  },
  {
    id: 11,
    name: "Big Potatoes",
    image: potato,
    price: 20,
  },
  {
    id: 12,
    name: "Corn",
    image: corn,
    price: 20,
  },
  {
    id: 13,
    name: "Fresh Cauliflower",
    image: cauliflower,
    price: 12,
  },
  {
    id: 14,
    name: "Green Capsicum",
    image: capsicum,
    price: 10.5,
    oldPrice: 20.99,
    sale: true,
  },
  {
    id: 15,
    name: "Green Chili",
    image: chili,
    price: 34,
  },
];

const HotDeal = () => {
  // Function to calculate where the hover card should expand to keep it inside the grid
  const getHoverPositionClasses = (index) => {
    const row = Math.floor(index / 5); // 0 (Top), 1 (Middle), 2 (Bottom)
    const col = index % 5; // 0 to 4 (Left to Right)

    let classes = "";

    // Vertical Position: Bottom row expands UP, others expand DOWN
    if (row === 2) {
      classes += "bottom-[-1px] ";
    } else {
      classes += "top-[-1px] ";
    }

    // Horizontal Position: 
    // - Rightmost items expand LEFT
    // - Middle items expand from CENTER
    // - Leftmost items expand RIGHT
    if (col === 4 || col === 3) {
      classes += "right-[-1px] ";
    } else if (col === 2) {
      classes += "left-1/2 -translate-x-1/2 ";
    } else {
      classes += "left-[-1px] ";
    }

    return classes;
  };

  return (
    <>
      <section className="py-12 bg-[#F7F7F7]">
        <Container>
          {/* Header Section */}
          <div className="mb-6">
            <h2 className="font-pop font-semibold text-3xl text-gray-900 leading-[120%]">
              All Hot Deals
            </h2>
          </div>

          {/* Grid Section - 5 columns layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pl-px pt-px">
            {products.map((item, index) => (
              <div
                key={item.id}
                className="relative h-[320px] w-full border border-gray-200 -ml-px -mt-px group bg-white"
              >
                {/* 
                EXPANDING CARD OVERLAY 
                Base size: 100% width/height.
                Hover size: 200% width/height (Takes up exactly 4 items worth of space).
                Dynamically positioned based on grid index.
              */}
                <div
                  className={`absolute bg-white border border-brdrtwo transition-all duration-300
w-[calc(100%+2px)] h-[calc(100%+2px)]
lg:group-hover:w-[calc(200%+1px)] lg:group-hover:h-[calc(200%+1px)]
group-hover:border-[#2C742F]
group-hover:shadow-[0_0_20px_rgba(32,181,38,0.25)]
group-hover:z-50
${getHoverPositionClasses(index)}`}
                >

                  {/* Badges */}
                  <div className="absolute top-5 left-5 flex gap-2 z-20">
                    {item.sale && (
                      <span className="bg-[#EA4B48] text-white text-[10px] px-2 py-1 rounded w-max">
                        Sale 50%
                      </span>
                    )}
                    {item.bestSale && (
                      <span className="bg-[#2374E1] text-white text-[10px] px-2 py-1 rounded w-max">
                        Best Sale
                      </span>
                    )}
                  </div>

                  {/* Product Image */}
                  <div className="flex-grow flex items-center justify-center pt-8 transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-36 group-hover:max-h-64 object-contain transition-all duration-300"
                    />
                  </div>

                  {/* ======================================= */}
                  {/* 1. DEFAULT SMALL STATE (Hidden on Hover)*/}
                  {/* ======================================= */}
                  <div className="block group-hover:hidden pb-1 mt-auto">
                    <h3 className="text-gray-600 text-sm mb-1 truncate">
                      {item.name}
                    </h3>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="flex items-center gap-2 font-pop">
                          <span className="font-medium text-gray-900">
                            ${item.price.toFixed(2)}
                          </span>
                          {item.oldPrice && (
                            <span className="line-through text-gray-400 text-xs">
                              ${item.oldPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <div className="text-orange-400 text-xs mt-1">★★★★☆</div>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-[#f2f2f2] text-gray-600 flex items-center justify-center transition-colors">
                        <HiOutlineShoppingBag size={16} />
                      </button>
                    </div>
                  </div>

                  {/* ======================================= */}
                  {/* 2. LARGE EXPANDED STATE (Visible on Hover) */}
                  {/* ======================================= */}
                  <div className="hidden group-hover:flex flex-col transition-all duration-300 w-full animate-fade-in mt-auto">

                    {/* Action Buttons Row */}
                    <div className="flex items-center justify-between gap-4 mb-6 px-4">
                      <button className="w-12 h-12 rounded-full cursor-pointer text-gray-600 bg-[#f2f2f2] flex shrink-0 items-center justify-center hover:bg-[#2C742F] hover:text-white transition-colors">
                        <AiOutlineHeart size={20} />
                      </button>
                      <button className="flex-1 h-12 bg-[#2C742F] text-white rounded-full flex items-center justify-center gap-2 text-base font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-200">
                        <span>Add to Cart</span>
                        <HiOutlineShoppingBag size={18} />
                      </button>
                      <button className="w-12 h-12 rounded-full cursor-pointer text-gray-600 bg-[#f2f2f2] flex shrink-0 items-center justify-center hover:bg-[#2C742F] hover:text-white transition-colors">
                        <AiOutlineEye size={20} />
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="text-center pb-2">
                      <h3 className="text-[#2C742F] text-lg font-medium mb-1">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2 font-pop text-xl mb-2">
                        <span className="font-semibold text-gray-900">
                          ${item.price.toFixed(2)}
                        </span>
                        {item.oldPrice && (
                          <span className="line-through text-gray-400 text-base">
                            ${item.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-5">
                        <div className="text-orange-400 text-sm">★★★★★</div>
                        <span className="text-gray-400 text-sm">(524 Feedback)</span>
                      </div>

                      {/* Countdown Timer */}
                      <div className="border-t border-gray-100 pt-5">
                        <p className="text-gray-500 text-xs uppercase mb-3">
                          Hurry up! Offer ends in:
                        </p>
                        <div className="flex justify-center items-center gap-4">
                          <div className="flex flex-col items-center">
                            <span className="text-xl font-semibold text-gray-900">01</span>
                            <span className="text-[10px] text-gray-400">DAYS</span>
                          </div>
                          <span className="text-xl font-semibold text-gray-400 -mt-3">:</span>
                          <div className="flex flex-col items-center">
                            <span className="text-xl font-semibold text-gray-900">23</span>
                            <span className="text-[10px] text-gray-400">HOURS</span>
                          </div>
                          <span className="text-xl font-semibold text-gray-400 -mt-3">:</span>
                          <div className="flex flex-col items-center">
                            <span className="text-xl font-semibold text-gray-900">34</span>
                            <span className="text-[10px] text-gray-400">MINS</span>
                          </div>
                          <span className="text-xl font-semibold text-gray-400 -mt-3">:</span>
                          <div className="flex flex-col items-center">
                            <span className="text-xl font-semibold text-gray-900">57</span>
                            <span className="text-[10px] text-gray-400">SECS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default HotDeal;