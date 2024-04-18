import Workshop from "@/components/Workshop";

const Page = () => {
  return (
    <div className="container mx-auto px-5 lg:px-24 pt-20 pb-56">
      <button className="brand-button">Contact Us</button>
      <Workshop />
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
                  <label htmlFor="role" className="input-label">
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
