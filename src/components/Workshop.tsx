"use client";

import React, { useEffect, useRef, useState } from "react";

const Workshop = () => {
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
    <>
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
    </>
  );
};

export default Workshop;
