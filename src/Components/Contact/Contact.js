import React from "react";
import ContactLower from "./ContactLower";
import Faq from "./Faq";

const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative" >
        <div className="container mx-auto px-5 py-16 flex flex-col md:flex-row gap-10">

          <div className="w-full md:w-2/3 bg-gray-300 rounded-lg overflow-hidden relative h-[350px] md:h-auto">
            <iframe
              className="absolute inset-0 w-full h-full"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d877.2209077768827!2d77.08036!3d28.422768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19142e78d47b%3A0xde577a7e821cd90!2sChefKart!5e0!3m2!1sen!2sin!4v1769257343846!5m2!1sen!2sin" width="600" height="450" loading="lazy"
            ></iframe>
            {/*<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d877.2209077768827!2d77.08036!3d28.422768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19142e78d47b%3A0xde577a7e821cd90!2sChefKart!5e0!3m2!1sen!2sin!4v1769257343846!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div className="bg-white absolute bottom-6 left-6 right-6 md:right-auto md:w-[70%] flex flex-wrap py-6 rounded shadow-md">
              <div className="w-full md:w-1/2 px-6">
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-sm">
                  B-179, Sector 57, Sushant Lok III, Gurugram, Haryana 122011
                </p>
              </div>
              <div className="w-full md:w-1/2 px-6 mt-4 md:mt-0">
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <p className="text-yellow-500">example@email.com</p>
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p>123-456-7890</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-6">
            <h2 className="text-3xl md:text-4xl text-center font-medium text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Fill out the form and get in touch with us.
            </p>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Phone No</label>
              <div className="flex border rounded">
                <div className="flex items-center gap-2 px-3 border-r">
                  <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="India"
                    className="w-5 h-4"
                  />
                  <span className="text-sm">+91</span>
                </div>
                <input
                  type="number"
                  placeholder="Mobile"
                  className="w-full px-3 py-2 outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-600">City</label>
              <select className="w-full border rounded px-3 py-2 outline-none">
                <option value="">Choose your city</option>
                <option>Ahmedabad</option>
                <option>Surat</option>
                <option>Vadodara</option>
                <option>Rajkot</option>
                <option>Bhavnagar</option>
                <option>Jamnagar</option>
                <option>Junagadh</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                placeholder="Please share your message in detail."
                className="w-full h-28 border rounded px-3 py-2 outline-none resize-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded text-lg">
              Submit
            </button>
          </div>

        </div>
      </section>

      <ContactLower />
      <Faq />
    </>
  );
};

export default Contact;
