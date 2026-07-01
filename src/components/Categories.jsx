import React from "react";


import fruit from "../assets/images/fruit.png";
import vegetable from "../assets/images/vegetable.png";
import meat from "../assets/images/meat.png";
import snacks from "../assets/images/snacks.png";
import beverage from "../assets/images/beverage.png";
import beauty from "../assets/images/beauty.png";
import bakery from "../assets/images/bakery.png";
import baking from "../assets/images/baking.png";
import cooking from "../assets/images/cooking.png";
import diabetic from "../assets/images/diabetic.png";
import detergent from "../assets/images/detergent.png";
import oil from "../assets/images/oil.png";

const categories = [
  { name: "Fresh Fruit", img: fruit },
  { name: "Fresh Vegetables", img: vegetable, active: true },
  { name: "Meat & Fish", img: meat },
  { name: "Snacks", img: snacks },
  { name: "Beverages", img: beverage },
  { name: "Beauty & Health", img: beauty },
  { name: "Bread & Bakery", img: bakery },
  { name: "Baking Needs", img: baking },
  { name: "Cooking", img: cooking },
  { name: "Diabetic Food", img: diabetic },
  { name: "Dish Detergents", img: detergent },
  { name: "Oil", img: oil },
];

export default function PopularCategories() {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-xl ">
      
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-hsize leading-[120%] text-[#1A1A1A] font-pop font-semibold">Popular Categories</h2>
        <button className="text-[#00B207] font-pop text-[16px] leading-[150%] font-medium hover:underline">
          View All →
        </button>
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 font-pop font-medium text-[#1A1A1A] leading-[150%]">
  {categories.map((item, index) => (
    <div
      key={index}
      className="rounded-5px pt-4 pb-6 px-5 text-center cursor-pointer transition border border-[#E6E6E6] hover:text-green-500 hover:border-lime-500 hover:shadow-md"
    >
      <img
        src={item.img}
        alt={item.name}
        className="h-32.5 mx-auto object-contain"
      />
      <p className="mt-4 text-sm font-medium">{item.name}</p>
    </div>
  ))}
</div>
    </div>
  );
}