import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import BgImage3 from "../Assets/BgImage3.jpg";
// require("dotenv").config();
// import 'dotenv/config'

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("yo yo,", process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_PUBLIC_KEY )

    // const serviceId = process.env.REACT_APP_SERVICE_ID ;
    // const templateId = process.env.REACT_APP_TEMPLATE_ID ;
    // const publicKey = process.env.REACT_APP_PUBLIC_KEY ;

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_czzou0h";
    const templateId = "template_gztebvj";
    const publicKey = "RloxIE8dzgtwH_CUf";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phoneNumber,
      total_people: number,
      to_name: "TheSpiritOfHimalayas",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setNumber("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div
      className="contactus_outer"
//       style={{
//         background: `linear-gradient(
// rgba(0, 0, 0, 0.7), 
// rgba(0, 0, 0, 0.7)
// ),url(${BgImage3})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
    >
      <div class="app__sections_right" style={{ maxWidth: "500px" }}>
      <div class="one">
          <h1>Reach out to Us</h1>
        </div>
        <form onSubmit={handleSubmit} class="app__form" id="form">
          {/* <form class="app__form" id="form"> */}
          <div class="app__input__wrapper">
            <input
              required
              className="app__form__fields"
              type="text"
              placeholder="Full Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span class="app__form__input__erro">
              your name must be between 2 and 100 characters and only contain
              letters
            </span>
          </div>
          <div class="app__input__wrapper">
            <input
              required
              class="app__form__fields"
              type="email"
              placeholder="Email-Id*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span class="app__form__input__erro">
              Email address must be valid
            </span>
          </div>
          <div class="app__input__wrapper">
            <input
              class="app__form__fields"
              type="tel"
              placeholder="Phone-Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <span class="app__form__input__erro">
              Phone number must be 10 digit
            </span>
          </div>
          <div class="app__input__wrapper">
            <input
              class="app__form__fields"
              type="number"
              placeholder="People"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <span class="app__form__input__erro">Number of people</span>
          </div>
          <div class="app__input__wrapper">
            <textarea
              required
              class="app__form__fields"
              cols="30"
              rows="10"
              placeholder="Description*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <span class="app__form__input__erro">Add some discription</span>
          </div>
          {/* <button type="submit"></button> */}

          <button type="submit" class="app__form__button">
            Send Email
          </button>
          {/* <p class="app__form__term">
            By clicking the button, you are agreeing to our{" "}
            <a href="#">Terms and Services</a>
          </p>  */}
        </form>

        {/* <form onSubmit={handleSubmit} className="emailForm">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send Email</button>
        </form> */}
      </div>
    </div>
  );
};

export default ContactUs;
