import React from "react";
import DragAndDrop from "./DragAndDrop";
import "./Form.scss";

const Form = (props) => {
  const sendData = () => {
    console.log('the data was sent 200');
  };

  return (
    <form
      className="form" 
      id="test_form"
      method="POST"
      action="https://beryl-boggy-ceiling.glitch.me/email"
    >
      <div className="form__wrapper">
        <div className="form__left-side-wrp">
          <label for="name">
            <input
              className="form__input-text"
              type="text"
              name="test_name"
              id="name"
              placeholder="Name*"
              required
            />
          </label>
          <label for="email">
            <input
              className="form__input-text"
              type="email"
              name="test_email"
              id="email"
              placeholder="Email Address*"
              required
            />
          </label>
          <textarea
            className="form__textarea"
            name="test_message"
            placeholder="Your Message*"
            required
          ></textarea>
        </div>
        <DragAndDrop />
      </div>

      <button className="form__btn" type="submit" onClick={sendData}>
        Send
      </button>
    </form>
  );
};

export default Form;
