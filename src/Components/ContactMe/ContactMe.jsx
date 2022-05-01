import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./ContactMe.css";

function ContactMe({ setIsOpenForm }) {
  const [buttonMessage, setButtonMessage] = useState("SEND MESSAGE");
  const [colorButton, setColorButton] = useState({ background: "#09629e" });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonMessage("SENDING MESSAGE...");
    setColorButton({ background: "#ff9100" });
    setTimeout(() => {
      emailjs
        .sendForm(
          "service_pj1lv8f",
          "template_g2co93b",
          form.current,
          "KBl4qyBNbOFQsPsTF"
        )
        .then(
          (result) => {
            console.log(result.text);
            setButtonMessage("MESSAGE SENT!");
            setColorButton({ background: "green" });
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
            setButtonMessage("SOMETHING WENT GRONG!");
            setColorButton({ background: "red" });
          }
        );
      setTimeout(() => {
        setColorButton({ background: "#b8037c" });
        setButtonMessage("THANKS FOR YOUR TIME!");
        setTimeout(() => {
          setIsOpenForm(false);
        }, 3000);
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <div
        className="app__main__contactme__background--blurred"
        onClick={() => setIsOpenForm(false)}
      ></div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="app__main__contact__form"
      >
        <label>NAME</label>
        <input
          type="text"
          name="name"
          className="app__main__contact__form__input--text"
          required
        />
        <label>EMAIL</label>
        <input
          type="email"
          name="email"
          className="app__main__contact__form__input--email"
          required
        />
        <label>MESSAGE</label>
        <textarea name="message" />
        <input
          type="submit"
          value={buttonMessage}
          className="app__main__contact__form__input--submit"
          style={colorButton}
        />
      </form>
    </>
  );
}

export default ContactMe;
