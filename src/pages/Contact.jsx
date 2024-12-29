import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.formEntries(formData.entries());
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact us</h2>
      <div className="contact-wrapper container">
        <form action="">
          <input
            type="text"
            required
            autoComplete="false"
            placeholder="Enter your Name"
            name="username"
            className="form-control"
          />
          <input
            type="email"
            required
            autoComplete="false"
            placeholder="Enter your email"
            name="email"
            className="form-control"
          />
          <textarea
            name="message"
            className="form-control"
            required
            autoComplete="false"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
