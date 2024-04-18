import { followUsLinks, quickLinks } from "@/fake-db/footerData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="body-font bg-primary text-white">
        <div className="container px-4 lg:px-7 py-7 lg:py-10 mx-auto ">
          <div className="pb-[50px]">
            <Image
              src={"/images/footer-logo.png"}
              alt="footer logo"
              className="h-[29px] w-[158px] lg:w-[285px] lg:h-[56px] ps-4 lg:ps-0"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-wrap md:text-left order-first font-inter font-medium text-sm">
            <div className="lg:w-1/4 lg:pb-0 w-full pl-4 pr-10 lg:px-0 text-[15px] lg:text-[20px] font-semibold">
              <nav className="list-none mb-0 ">
                <p className="pb-7 hidden lg:block leading-7">
                  Business Address: No. 9-1, Jalan Seri Rejang 4, Pusat
                  Industri, Taman Sri Rampai, 53300 Kuala Lumpur, Malaysia
                </p>
                <p className="pb-[10px] lg:pb-7 lg:pt-[10px] lg:hidden leading-5">
                  Business Address: <br />
                  No. 9, Jalan Seri Rejang 4, Pusat Industri, Taman Sri Rampai,
                  53300, Kuala Lumpur, Malaysia.
                </p>
                <p className="py-[10px] lg:pb-5 lg:pt-[10px]">
                  General Inquiries: +60 111 611 99644
                </p>
                <p>Customer Care: info@mekaniku.com</p>
              </nav>
            </div>
            <div className="lg:w-1/4 py-[50px] lg:py-0 w-1/2 pl-4 lg:pl-[100px] text-[15px] lg:text-[20px] font-semibold ">
              <h2 className=" tracking-widest pb-[5px]">Quick Links:</h2>
              <nav className="list-none mb-0">
                {quickLinks.map((link, index) => (
                  <li key={index} className="py-[5px]">
                    <Link
                      href={link.href}
                      className="underline underline-offset-4"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
            <div className="lg:w-1/4 py-[50px] lg:py-0 w-1/2 pl-6 lg:pl-20 text-[15px] lg:text-[20px] font-semibold ">
              <h2 className="tracking-widest pb-[5px]">Follow Us:</h2>
              <nav className="list-none mb-0">
                {followUsLinks.map((link, index) => (
                  <li key={index} className="py-[5px]">
                    <Link
                      href={link.href}
                      className="underline underline-offset-4"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
            <div className="lg:w-1/4 w-full px-4 lg:px-0">
              <h2 className="title-font hidden lg:block text-[24px] font-semibold tracking-widest leading-7">
                Sign up to get the latest news on our services and products!
              </h2>

              <h2 className="lg:hidden text-[15px] font-semibold tracking-widest">
                Sign up to get the latest news on our services and products!
              </h2>

              <button className="w-full h-[42px] text-center my-[20px] text-primary bg-white border border-white py-2 px-6 focus:outline-none rounded-3xl text-[18px] font-semibold">
                Email Address
              </button>
              <button className="w-full h-[42px] text-center text-white bg-primary border border-white py-2 px-6 focus:outline-none rounded-3xl text-[18px] font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
