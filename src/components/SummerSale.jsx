import banner from "../assets/images/banner.jpg";
import { FaArrowRight } from "react-icons/fa6";

const SummerSaleBanner = () => {
  return (
    <section className="max-w-7xl mx-auto  py-10 bg-[#FFFFFF]">
      <div className="relative overflow-hidden rounded-xl">

        {/* Background Image */}
        <img
          src={banner}
          alt="Summer Sale"
          className="w-full  object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Content */}
        <div className="absolute inset-0 flex justify-end items-center">
          <div className="w-full md:w-[42%] px-8 md:px-12 text-white">

            <p className="uppercase tracking-[3px] text-[16px] font-medium font-pop leading-[100%] text-[#FFFFFF] mb-3">
              Summer Sale
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-orange-500 font-semibold font-pop text-[56px] leading-[100%]">37%</span>{" "}
              <span className="font-semibold font-pop text-[56px] leading-[120%] text-[#FFFFFF]">OFF</span>
            </h2>

            <p className="mt-4 text-[#FFFFFF] pr-10 text-sm md:text-base font-pop font-normal  leading-[150%]  ">
              Free on all your order, Free Shipping and 30 days
              money-back guarantee
            </p>

            <button className="mt-8 inline-flex font-pop font-normal text-[16px] items-center gap-3 bg-green-600 hover:bg-green-700 transition px-7 py-3 rounded-full ">
              Shop Now
              <FaArrowRight />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SummerSaleBanner;