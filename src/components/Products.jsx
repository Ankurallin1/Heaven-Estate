import React from "react";
import mobileImg from "../assets/mobile.jpg";
import maecenas from "../assets/maecenas.png";

import company1 from "../assets/company1.svg";
import company2 from "../assets/company2.svg";
import company3 from "../assets/company3.svg";
import company4 from "../assets/company4.svg";
import company5 from "../assets/company5.svg";
import company6 from "../assets/company6.svg";

export const Products = () => {
  return (
    <section>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5 mx-auto">
            <img src={mobileImg} alt="Imagem de sobre" />
          </div>

          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              What we offer?
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8">
            At Heaven Estate, we offer Real Estate Builders and Architects a comprehensive platform designed to enhance their client catering journey. From streamlined project management tools to immersive augmented reality features, we provide the tools and technologies necessary to transform dreams into reality. With our platform, professionals can efficiently showcase property designs, collaborate remotely with clients, and ensure seamless project delivery. Elevate your client experience and exceed expectations with Heaven Estate.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      
    </section>
  );
};
