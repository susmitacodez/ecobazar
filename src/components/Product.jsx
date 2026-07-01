import { FaHeart,FaRegEye, FaShoppingCart,FaStar,} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import apple from "../assets/images/apple.jpg";
import orange from "../assets/images/orange.png";
import cabbage from "../assets/images/cabbage.jpg";
import lettuce from "../assets/images/lettuce.jpg";
import eggplant from "../assets/images/eggplant.jpg";
import potato from "../assets/images/potato.jpg";
import corn from "../assets/images/corn.jpg";
import cauliflower from "../assets/images/cauliflowers.png";
import capsicum from "../assets/images/capsicum.jpg";
import chili from "../assets/images/chili.jpg";

const products = [
  {
    name: "Green Apple",
    image: apple,
    price: 14.99,
    oldPrice: 20.99,
    sale: true,
  },
  {
    name: "Fresh Indian Malta",
    image: orange,
    price: 20,
  },
  {
    name: "Chinese Cabbage",
    image: cabbage,
    price: 12,
    featured: true,
  },
  {
    name: "Green Lettuce",
    image: lettuce,
    price: 9,
  },
  {
    name: "Eggplant",
    image: eggplant,
    price: 34,
  },
  {
    name: "Big Potatoes",
    image: potato,
    price: 20,
  },
  {
    name: "Corn",
    image: corn,
    price: 20,
  },
  {
    name: "Fresh Cauliflower",
    image: cauliflower,
    price: 12,
  },
  {
    name: "Green Capsicum",
    image: capsicum,
    price: 9,
    oldPrice: 20.99,
    sale: true,
  },
  {
    name: "Green Chili",
    image: chili,
    price: 34,
  },
];

export default function PopularProducts() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Popular Products</h2>

          <button className="flex items-center gap-2 text-[#2C742F] font-semibold hover:gap-3 transition-all">
            View All <FiArrowRight size={18} />
          </button>
        </div>

       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {products.map((item, index) => (
            <div
              key={index}
              className="relative border border-[#E6E6E6] p-4 group transition-all duration-300 hover:border-green-500 hover:shadow-lg"
            >
              
              {item.sale && (
                <span className="absolute top-3 left-3 bg-[#EA4B48] text-white text-xs px-2 py-1 rounded">
                  Sale 50%
                </span>
              )}

             
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-white p-2 rounded-full shadow border border-[#E6E6E6] hover:bg-[#2C742F] hover:text-white transition-all">
                  <FaHeart size={14} />
                </button>

                <button className="bg-white p-2 rounded-full shadow border border-[#E6E6E6] hover:bg-[#2C742F] hover:text-white transition-all">
                  <FaRegEye size={14} />
                </button>
              </div>

            
              <div className="flex justify-center items-center h-60">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-44 object-contain"
                />
              </div>

              
              <h3 className="font-pop font-medium text-[14px] leading-[150%] text-[#4D4D4D] transition-colors duration-300 group-hover:text-[#2C742F]">
                {item.name}
              </h3>

            
              <div className="flex items-center gap-2 mt-1">
                <span className="font-pop font-semibold text-[16px] text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#2C742F]">
                  ${item.price}
                </span>

                {item.oldPrice && (
                  <span className="text-[#999999] line-through">
                    ${item.oldPrice}
                  </span>
                )}
              </div>

              
              <div className="flex items-center text-[#FF8A00] mt-2">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
                <FaStar size={14} className="text-[#CCCCCC]" />
              </div>

              
              <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-[#F2F2F2] text-[#1A1A1A] transition-all duration-300 group-hover:bg-[#2C742F] group-hover:text-white">
                <FaShoppingCart size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}