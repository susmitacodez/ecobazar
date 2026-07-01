import { useState, useEffect } from "react";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";

import { FaArrowRight } from "react-icons/fa";

const offers = [
  {
    id: 1,
    image: banner1,
    subtitle: "Best Deals",
    title: "Sale of the Month ",
    timer: true,
    textColor: "text-white",
  },
  {
    id: 2,
    image: banner2,
    subtitle: "85% Fat Free",
    title: "Low-Fat Meat",
    price: "$79.99",
    textColor: "text-white",
  },
  {
    id: 3,
    image: banner3,
    subtitle: "Summer Sale",
    title: "100% Fresh Fruit",
    discount: "64% OFF",
    textColor: "text-white",
  },
];

const Sale = () => {
  const targetDate = new Date("2026-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-15 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {offers.map((item) => (
          <div
            key={item.id}
            className="
              relative rounded-lg overflow-hidden h-[500px]
              group cursor-pointer
              transform transition duration-300
              hover:scale-[1.03] hover:shadow-2xl" >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"/>

           <div className="
              absolute inset-0
              bg-black/40
              flex flex-col items-center text-center pt-10
              transition duration-300
              group-hover:bg-black/60 ">

              <p className={`uppercase text-sm font-medium font-pop text-[#FFFFFF] leading-[100%] tracking-widest ${item.textColor}`}>
                {item.subtitle}
              </p>

             
              <h2 className={`text-[40px] font-medium font-pop leading-[100%] text-[#FFFFFF]  mt-4 ${item.textColor}`}>
                {item.title}
              </h2>

              
              {item.timer && (
                <div className="flex gap-4 mt-6 text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">
                      {String(timeLeft.days).padStart(2, "0")}
                    </h3>
                    <p className="text-xs">DAYS</p>
                  </div>

                  <span>:</span>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </h3>
                    <p className="text-xs">HOURS</p>
                  </div>

                  <span>:</span>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </h3>
                    <p className="text-xs">MINS</p>
                  </div>

                  <span>:</span>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </h3>
                    <p className="text-xs">SECS</p>
                  </div>
                </div>
              )}

              {item.price && (
                <p className="mt-5 text-lg text-white">
                  Started at{" "}
                  <span className="text-[#FF8A00] font-bold">
                    {item.price}
                  </span>
                </p>
              )}

              
              {item.discount && (
                <div className="flex items-center gap-2 mt-5 text-white">
                  <span>Up to</span>
                  <span className="bg-black text-yellow-400 px-3 py-1 rounded font-bold">
                    {item.discount}
                  </span>
                </div>
              )}

             
              <button className="
                mt-8 bg-white text-[#00B207] px-8 py-3.5 rounded-full
                flex items-center gap-2 font-semibold font-pop text-[14px]
                transition duration-300
                group-hover:bg-green-600 group-hover:text-white
              ">
                Shop Now
                <FaArrowRight />
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Sale;