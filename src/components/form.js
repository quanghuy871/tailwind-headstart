import React from "react";
import ContactForm from "./contact-form";
import Agent from "./agent";

const Form = () => {
  return (
    <section className="form-block" id="contact">
      <div
        className="form-block__inner"
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <h2>ENQUIRE</h2>
        <p>
          Enquire now for more your introduction to Canyon Ridge. <br />A member
          of our team will be in touch shortly to assist with your enquiry.
        </p>
        <div className="form-block__form">
          <ContactForm />
        </div>
        <div className="form-blok__agent">
            <Agent/>
        </div>
      </div>
    </section>
  );
};

export default Form;