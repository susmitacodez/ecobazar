import React from 'react'
import Container from './Container'
import { FaFacebookF, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import footer from "../assets/images/footer.png"
import { Link } from 'react-router';
import imgo from "../assets/images/imgo.png"
import img2 from "../assets/images/img2.png"
import img3 from "../assets/images/img3.png"
import img4 from "../assets/images/img4.png"
import img5 from "../assets/images/img5.png"

const Footer = () => {

    const menu = [
        {
            title: "My Account",
            links: ["My Account", "Order History", "Shoping Cart", "Wishlist"],
        },
        {
            title: "Helps",
            links: ["Contact", "Faqs", "Terms & Condition", "Privacy Policy"],
        },
        {
            title: "Proxy",
            links: ["About", "Shop", "Product", "Track Order"]
        },
        {
            title: "Categories",
            links: [
                "Fruit & Vegetables",
                "Meat & Fish",
                "Bread & Bakery",
                "Beauty & Health"
            ],
        },
    ];

    const socialLinks = [
        {
            icon: <FaFacebookF />,
            url: "https://www.facebook.com/abanti.mayabati",
        },
        {
            icon: <FaGithub />,
            url: "https://github.com/susmitacodez",
        },
        {
            icon: <FaInstagram />,
            url: "https://www.instagram.com/abanti.mayabati/",
        },
        {
            icon: <FaWhatsapp />,
            url: "https://wa.me/8801305359520",
        },
    ];

    return (
        <>
            
            <div className='bg-[#F7F7F7] py-10'>
                <Container>

                    <div className='flex items-center justify-between'>

                        
                        <div className='w-[35%]'>
                            <h3 className='font-pop font-semibold text-[24px] leading-[150%] text-[#1A1A1A] pb-1'>
                                Subscribe our Newsletter
                            </h3>

                            <p className='font-pop font-normal text-[14px] leading-[150%] text-[#999999] pr-1.5'>
                                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                                Phasellus imperdiet elit eu magna.
                            </p>
                        </div>

                     
                        <div className='w-[35%] relative'>
                            <input
                                type="text"
                                placeholder="Your email address"
                                className="w-full text-[#808080] bg-[#ffffff] font-pop font-normal text-[15px] rounded-[46px] py-3.5 px-6 outline-none"
                            />

                            <button className="bg-green-500 hover:bg-green-600 text-white font-pop px-6 py-3.5 font-medium absolute top-0 right-0 rounded-[43px] duration-300">
                                Subscribe
                            </button>
                        </div>

                        <div className='flex gap-x-2 items-center'>
                            {socialLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#4D4D4D] hover:bg-hgreen hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition duration-300"
                                >
                                    <span className="text-[18px]">
                                        {item.icon}
                                    </span>
                                </a>
                            ))}
                        </div>

                    </div>

                </Container>
            </div>

            <div className='bg-[#1A1A1A] py-15'>
                <Container>

                    <div className='flex justify-between gap-10'>
                        <div className='w-[35%]'>
                            <img src={footer} alt="Footer Logo" />

                            <p className='font-pop font-normal text-[14px] leading-[150%] text-[#808080] py-4 pr-30'>
                                Morbi cursus porttitor enim lobortis molestie.
                                Duis gravida turpis dui, eget bibendum magna congue nec.
                            </p>

                            <div className="flex items-center gap-4 ">

                                <Link
                                    className='font-pop font-medium text-[14px] text-white border-b border-[#00b207] pb-1'
                                    to="tel:+8801305359520"
                                >
                                    +8801305359520
                                </Link>

                                <span className='text-[#808080]'>or</span>

                                <Link
                                    className='font-pop font-medium text-[14px] text-white border-b border-[#00b207] pb-1'
                                    to="mailto:susmitafarhana972@gmail.com"
                                >
                                    susmitafarhana972@gmail.com
                                </Link>

                            </div>
                        </div>
                        <div className='flex justify-between items-center w-[65%]'>

                            {menu.map((item, index) => (
                                <div key={index}>

                                    <h2 className='font-pop font-medium text-[18px] text-white mb-5'>
                                        {item.title}
                                    </h2>

                                    <ul className='gap-3 flex flex-col'>
                                        {item.links.map((link, i) => (
                                            <li
                                                key={i}
                                                className='font-pop font-normal text-[15px] text-[#808080] hover:text-white duration-300 cursor-pointer'
                                            >
                                                {link}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className='border-b border-[#4D4D4D] pt-15'></div>

                   <div className="flex items-center justify-between pt-6">
                     <p className='font-pop font-normal text-[14px] text-[#808080] py-5'>
                        Ecobazar eCommerce © 2021. All Rights Reserved
                    </p>
                    <div className='flex items-center gap-x-2'>
                        <img src={imgo} alt="Payment Methods" />
                        <img src={img2} alt="Payment Methods" />
                        <img src={img3} alt="Payment Methods" />
                        <img src={img4} alt="Payment Methods" />
                        <img src={img5} alt="Payment Methods" />
                    </div>
                   </div>

                </Container>
            </div>
        </>
    )
}

export default Footer;