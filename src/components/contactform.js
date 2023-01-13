import React from "react";

const ContactForm = () => {
  return (
    <div className="book__form">
      <form action="#" className="form">
        <div className="u-margin-bottom-medium">
          <h2 className="heading-tertiary">Submit your inquiry</h2>
        </div>

        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Full name"
            id="name"
            required=""
          />
          <label htmlFor="name" className="form__label">
            Full name
          </label>
        </div>

        <div className="form__group">
          <input
            type="email"
            className="form__input"
            placeholder="Email address"
            id="email"
            required=""
          />
          <label htmlFor="email" className="form__label">
            Email address
          </label>
        </div>

        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Subject"
            id="subject"
            required=""
          />
          <label htmlFor="subject" className="form__label">
            Subject
          </label>
        </div>

        <div className="form__group">
          <textarea
            className="form__input"
            placeholder="Content"
            id="content"
            required=""
          ></textarea>
          <label htmlFor="content" className="form__label">
            Content
          </label>
        </div>

        <div className="form__group">
          <button className="btn btn--red">Send message →</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
