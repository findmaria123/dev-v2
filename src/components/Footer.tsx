import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="body-font bg-primary text-white">
        <div className="container px-5 py-6 lg:py-10 mx-auto">
          <div className="pb-10">
          <Image src={'/images/footer-logo.png'} alt="footer logo" className="h-[29px] w-[158px] lg:w-44 lg:h-9 ps-4 lg:ps-0" width={200} height={200}/>
          </div>
          <div className="flex flex-wrap md:text-left order-first font-medium text-sm font-sans">
            <div className="lg:w-1/4 lg:pb-0 w-10/12 px-4 lg:px-0">
              <nav className="list-none mb-0">
                <p className="pb-7 hidden lg:block pe-16">
                  Business Address: No. 9-1, Jalan Seri Rejang 4, Pusat Industri,
                  Taman Sri Rampai, 53300 Kuala Lumpur, Malaysia
                </p>
                <p className="pb-5 lg:pb-7 lg:hidden">
                  Business Address: <br />No. 9, Jalan Seri Rejang 4, Pusat Industri,
                  Taman Sri Rampai, 53300, Kuala Lumpur, Malaysia.
                </p>
                <p className="pb-2 lg:pb-4">General Inquiries: +60 111 611 99644</p>
                <p>Customer Care: info@mekaniku.com</p>
              </nav>
            </div>
            <div className="lg:w-1/4 py-12 lg:py-0 w-1/2 px-4 lg:pl-28 lg:pr-4">
              <h2 className="title-font tracking-widest mb-1">Quick Links:</h2>
              <nav className="list-none mb-0">
                <li className="pb-1">
                  <Link href="/" className="underline underline-offset-4">
                    About Us
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="/" className="underline underline-offset-4">
                    Contact Us
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="/" className="underline underline-offset-4">
                    FAQs
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="/" className="underline underline-offset-4">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="">
                  <Link href="/" className="underline underline-offset-4">
                    Privacy Policy
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 py-12 lg:py-0 w-1/2 px-4 lg:pl-20 lg:pr-4">
              <h2 className="title-font tracking-widest mb-1">Follow Us:</h2>
              <nav className="list-none mb-0">
                <li className="pb-1">
                  <Link href="/" className="underline underline-offset-4">
                    Facebook
                  </Link>
                </li>
                <li className="pb-1">
                  <Link href="/" className="underline underline-offset-4">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="/" className="underline underline-offset-4">
                    LinkedIn
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 w-full px-4 lg:px-0">
              <h2 className="title-font mb-1 tracking-widest ">
                Sign up to get the latest news on our services and products!
              </h2>

              <button className="w-full text-center my-3 text-primary bg-white border border-primary py-2 px-6 focus:outline-none rounded-3xl text-base ">
                Email Address
              </button>
              <button className="w-full text-center mt-2 text-white bg-primary border border-white py-2 px-6 focus:outline-none rounded-3xl text-base ">
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
