import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-auto px-5 md:px-24 pt-16 pb-72">
      <button className="brand-button">About Us</button>
        <section className="pt-14">
          <h1 className="text-center py-4 text-primary font-bold font-poppins text-[32px]">
            Founder&#900;s Message
          </h1>
          <div className="pt-[30px] grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="h-[300px] md:h-full w-full bg-white shadow-lg rounded-[10px]"></div>
            <div className="font-poppins font-normal text-[21px]">
              <p className="pb-5">
                I have always valued certain principles to be extremely
                important for all. These include the values of fairness
                transparency and honesty.
              </p>
              <p className="pb-5">
                Unfortunately, when it comes to the car workshop and automotive
                spare parts industries, the sector has become synonymous with
                unfair practices and unreliable workmanship. Due to the monopoly
                created by a select few, an unbalanced pricing and costs
                mechanism has become the norm in the sector.
              </p>
              <p className="pb-5">
                Having experienced this personally, I set out to develop
                Mekaniku, an app through which we wish to disrupt this sector by
                democratising the industry to ensure fair and open processes for
                the public to gain access to car workshops and spare parts.
              </p>
              <p className="pb-5">
                I believe that there are values that Mekaniku shares which will
                resonate with all who interact with us in any way, while staying
                close to our principles.
              </p>
              <p>Best Regards, Dr Abdul Khaliq Rasheed Founder</p>
            </div>
          </div>
        </section>
        <section className="py-14 md:py-[150px]">
          <h1 className="text-center py-4 text-primary font-bold font-poppins text-[32px]">
            Our Vision
          </h1>
          <div className="flex flex-col md:flex-row md:items-center md:gap-[101px] md:pt-[30px]">
            <div className="font-poppins font-normal text-[20px] md:w-1/2 px-4 md:px-0 py-[20px] ">
              <p>
                To be the leader in providing car owners convenient and low-cost
                access to reliable, honest, and transparent car repair workshops
                who meet the expected high-quality standards as set by Mekaniku.
              </p>
            </div>
            <div className="md:w-1/2 h-[300px] md:h-[529px] w-full bg-white rounded-[10px] shadow-lg"></div>
          </div>
        </section>
        <section>
          <h1 className="text-center py-4 text-primary font-bold font-poppins text-[32px]">
            Our Mission
          </h1>
          <div className="flex flex-col md:flex-row md:items-center md:gap-[101px] md:pt-[30px]">
            <div className="md:w-1/2 h-[300px] md:h-[529px] w-full bg-white rounded-[10px] shadow-lg"></div>
            <div className="font-poppins font-normal text-[20px] md:w-1/2 px-4 md:px-0 py-[20px]">
              <p>
                To dedicate our business to be technologically equipped and
                agile in providing high standards of service with efficiency and
                without compromise.
              </p>
              <p className="py-5">
                To narrow the gap between principles and practice of providing
                access to workshops, whilst making fairness, honesty, and
                transparency part of our daily lives.
              </p>
              <p>
                To balance the needs of all our stakeholders: employees,
                partners, customers, suppliers, and shareholders.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
