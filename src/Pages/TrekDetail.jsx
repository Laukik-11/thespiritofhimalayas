import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { treks } from "../Components/TrekList";

const TrekDetail = () => {
  const { id } = useParams();
  const [trek, setTrek] = useState(null);
  useEffect(() => {
    const trek = treks.find((trek) => trek.id === parseInt(id));
    setTrek(trek);
  }, [id]);

  if (!trek) {
    return <div>Loading...</div>;
  }
  return (
    <main class="app">
      <div class="app__sections">
        <div className="projects__image">
          <img
            src={trek.image}
            alt="Image"
            style={{ maxHeight: "500px", objectFit: "contain", width: "100%" }}
          />
        </div>
        <h1 class="app__title">{trek.trekname}</h1>
        <p class="app__text">{trek.description}</p>
      </div>
      <div class="app__sections" style={{ maxWidth: "500px" }}>
        {/* <h2 class="app__price">
          Try it free 7 days
          
        </h2> */}
        <form class="app__form" id="form">
          <div class="app__input__wrapper">
            <input
              class="app__form__fields"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <span class="app__form__input__erro">
              First name must be between 2 and 100 characters and only contain
              letters
            </span>
          </div>
          <div class="app__input__wrapper">
            <input
              class="app__form__fields"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
            <span class="app__form__input__erro">
              First name must be between 2 and 100 characters and only contain
              letters
            </span>
          </div>
          <div class="app__input__wrapper">
            <input
              class="app__form__fields"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <span class="app__form__input__erro">
              Email address must be valid
            </span>
          </div>
          <div class="app__input__wrapper">
            <input
              class="app__form__fields"
              type="password"
              name="password"
              placeholder="Password"
            />
            <span class="app__form__input__erro">
              Password must only contain letters and numbers
            </span>
          </div>
          <button type="submit" class="app__form__button">
            Claim your free trial
          </button>
          <p class="app__form__term">
            By clicking the button, you are agreeing to our{" "}
            <a href="#">Terms and Services</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default TrekDetail;
