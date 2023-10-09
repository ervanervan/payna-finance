import React from "react";
import contactImg from "../../assets/contact_img.svg";

const Contact = () => {
  return (
    <section>
      <div className="px-6 py-4">
        <img src={contactImg} alt="image contact" />
      </div>
      <div>
        <h4>SAVE MORE TIME</h4>
        <h2>And Boost Productivity</h2>
        <p></p>
      </div>
    </section>
  );
};

export default Contact;
