"use client";
import { useState, useEffect, useRef } from "react";

const Page = () => {
  const [iframeWidth, setIframeWidth] = useState(0);
  const [iframeHeight, setIframeHeight] = useState(496);

  const textRef = useRef(null);

  useEffect(() => {
    const updateIframeDimensions = () => {
      const textWidth = textRef.current.offsetWidth;
      setIframeWidth(textWidth);

      const windowHeight = window.innerHeight;
      if (window.innerWidth < 768) {
        setIframeHeight(windowHeight / 3);
      } else {
        setIframeHeight(496);
      }
    };

    updateIframeDimensions();

    window.addEventListener("resize", updateIframeDimensions);

    return () => window.removeEventListener("resize", updateIframeDimensions);
  }, []);

  return (
    <div className="container mx-auto px-5 lg:px-24 pt-20 pb-56">
      <button className="brand-button">Contact Us</button>
      <section className="mt-8 relative sm:mt-[50px] bg-white rounded-[20px] pb-6 shadow-lg">
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 ">
          <div
            className="flex justify-center w-full pb-4 md:pb-0"
            ref={textRef}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.68785497993!2d101.6869895!3d3.1385058999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1713382552462!5m2!1sen!2s"
              width={iframeWidth}
              height={iframeHeight}
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-[22px] font-poppins md:px-5">
            <h2 className="font-bold pb-6">
              Mekaniku - KL Motoren Werke Sdn Bhd
            </h2>
            <div className="pb-6">
              <p>Address:</p>
              <p>
                9, Jalan Seri Rejang 4, Pusat Industri Taman Sri Rampai, Setapak
                Jaya, 53300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur.
              </p>
            </div>
            <div className="pb-6">
              <p>Email Address:</p>
              <p>info@mekaniku.com</p>
            </div>
            <p>Contact Number:</p>
            <p>+60142500457</p>
          </div>
        </div>
        <div className="absolute -bottom-7 left-0 w-full flex justify-center">
          <button className="h-[56px] w-[400px] bg-primary text-white text-[24px] font-semibold font-poppins rounded-[30px] hover:bg-white hover:text-primary hover:border-[3px] hover:border-primary">
            Our Location
          </button>
        </div>
      </section>
      <section className="mt-32">
        <h1 className="text-primary font-poppins font-bold text-[32px] pt-5 pb-8">
          Contact Us Form
        </h1>
        <div className="bg-white rounded-[20px] shadow-lg px-8 py-10">
          <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div className="col-span-full">
                <label htmlFor="name" className="input-label">
                  Name:
                </label>
                <div className="mt-3">
                  <div className="input-text">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full pt-3">
                <label htmlFor="phoneNumber" className="input-label">
                  Phone Number:
                </label>
                <div className="mt-3">
                  <div className="input-text">
                    <input
                      type="number"
                      name="phoneNumber"
                      id="phoneNumber"
                      autoComplete="phoneNumber"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full pt-3">
                <label htmlFor="emailAddress" className="input-label">
                  Email Address:
                </label>
                <div className="mt-3">
                  <div className="input-text">
                    <input
                      type="email"
                      name="emailAddress"
                      id="emailAddress"
                      autoComplete="emailAddress"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full pt-3">
                <div>
                  <label
                    htmlFor="role"
                    className="input-label"
                  >
                    Your Role:
                  </label>
                  <div className="mt-3">
                    <select
                      id="role"
                      name="role"
                      autoComplete="role-name"
                      className="w-full form-input custom-select"
                    >
                      <option>Car Owner</option>
                      <option>Spare Parts</option>
                      <option>Supplier Workshop</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="col-span-full pb-3">
                <label htmlFor="comments" className="input-label">
                  Feedbacks / Comments
                </label>
                <div className="mt-3">
                  <textarea
                    id="comments"
                    name="comments"
                    rows={3}
                    className="w-full h-[311px] bg-light-grey p-4 font-poppins leading-6 border-[1px] border-gray-200 text-dark-grey text:[18px] font-light focus:outline-none rounded-[20px] sm:leading-6"
                    defaultValue={""}
                    placeholder="Type your Message:"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <button className="h-[53px] w-full bg-primary text-Makeniku-yellow text-[22px] font-medium font-poppins rounded-[20px] hover:bg-white hover:text-Makeniku-yellow hover:border-[2px] hover:border-primary">
                  Submit Form
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Page;
