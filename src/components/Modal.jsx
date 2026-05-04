import { useRef, useEffect } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import News from "../assets/images/BG.png"
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  useOutsideClick(modalRef, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    const checkbox = document.getElementById("dontShow");
    if (checkbox?.checked) {
      localStorage.setItem("hideNewsletter", "true");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
      <div
        ref={modalRef}
        className="bg-[#FFFFFF] min-w-218 rounded-lg shadow-lg flex items-center overflow-hidden relative"
      >
        <button
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 text-gray-500 hover:text-black"
        >
          <IoCloseOutline size={24} />
        </button>
        <div className="w-1/2 p-2.5 rounded-sm">
          <img
            src={News}
            alt="newsletter"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-1/2 px-10 relative text-center">
          <h2 className="text-[40px] font-pop font-semibold text-[#1A1A1A] w-full leading-[120%] mb-3">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-[#999999] font-pop font-normal text-sm leading-[150%] pb-6 px-4">
            Subscribe to our newlletter and Save your <span className="text-[#FF8A00] text-[16px] font-semibold">20% money</span> with discount code today.

          </p>

          <div className="flex gap-2 relative">
            <input
              type="email"
              placeholder="Enter your email"
              className=" w-full border rounded-[46px] px-6 py-3.5 leading-[150%] font-pop  border-gry outline-none"
            />
            <button className="bg-green-600 font-pop font-semibold text-sm leading-[20px] text-white px-9.5 py-[15px] rounded-[43px] hover:bg-green-700 absolute top-0.5 right-0.5 cursor-pointer">
              Subscribe
            </button>
          </div>

          <div className="mt-12.5 font-pop font-normal leading-[150%] flex items-center justify-center gap-2 text-sm text-gray-500">
            <input id="dontShow" type="checkbox" />
            <span>Do not show this window</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;