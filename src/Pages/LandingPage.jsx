import React from "react";
import TreksList, { treks } from "../Components/TrekList";
import TrekCard from "../Components/TrekCard";
import BgImage from "../Assets/BgImage2.jpg";

const LandingPage = () => {
  return (
    <>
      <section className="hero">
        <div
          className="background-image"
          // style={{
          //   backgroundImage:
          //     "url(https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c2d910abcc9bb04fcb180f6a45e407&dpr=2&auto=format&fit=crop&w=767&h=485&q=60&cs=tinysrgb)",
          // }}
          style={{
            background: `linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ),url(${BgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            //  filter: "brightness(50%)",
          }}
        ></div>
        <div className="hero-content-area">
          <h1>The Spirit Of Himalayas</h1>
          <h3>
            Chardham Yatra is a spiritual pilgrimage journey that includes
            visiting four holy shrines in the Himalayas — Yamunotri, Gangotri,
            Kedarnath, and Badrinath.
          </h3>
          <a href="#" className="btn" style={{ color: "white" }}>
            Contact Us Now
          </a>
        </div>
      </section>
      <section className="projects section" id="projects">
        <h2 className="section__title-1">
          <span>PROJECTS</span>
        </h2>
        <div className="projects__container container grid">
          {treks.map((trek, key) => {
            return (
              <>
                <TrekCard
                  id={trek.id}
                  imageSrc={trek.image}
                  trekname={trek.trekname}
                  title="Restaurant Website"
                  subtitle="Website"
                  description={trek.description}
                />
              </>
            );
          })}
        </div>
      </section>
      <section className="projects section" id="projects">
        <h2 className="section__title-1">
          <span>Treks</span>
        </h2>
        <div className="projects__container container grid">
          {treks.map((trek) => {
            return (
              <>
                <TrekCard
                  imageSrc={trek.image}
                  title="Restaurant Website"
                  subtitle="Website"
                  description="Project that you carry out in the design and structure of the layout, showing the design at the client's request."
                />
              </>
            );
          })}
        </div>
      </section>

      {/* <section className="destinations">
        <h3 className="title">Some of our destinations:</h3>
        <p>
          Tired of the ocean? Are the plains too plain? Come along with us on
          one of our mountain adventures. Here are some pictures from people who
          have had elevated experiences with us.
        </p>

        <ul className="grid">
          <li
            className="small"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1454418447879-455f6fc7c64d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d271f82e52bcca8ce13c13382c2850c1&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></li>
          <li
            className="large"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-0.3.5&s=4d11e95a31535716d145de648f6963ff&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></li>
          <li
            className="large"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-0.3.5&s=686088406d96c0af9c41563807620fc1&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></li>
          <li
            className="small"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-0.3.5&s=b2ff98e46a093cc975556c9e95d6e182&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></li>
        </ul>
      </section> */}

      {/* <section className="packages">
        <h3 className="title">Tour Packages</h3>
        <p>
          We offer a variety of moutaineering packages. Wheter you've climbed
          Everest, or don't even know what a mountain is, we've got the perfect
          vacation for you.
        </p>

        <ul className="grid">
          <li>
            <i className="fa fa-compass fa-4x"></i>
            <h4>Guided Trips</h4>
            <p>
              Lokking for the complete experience? Take a tour with one of our
              experts. They'll show you secrets that you're likely to miss
              otherwise.
            </p>
          </li>
          <li>
            <i className="fa fa-camera-retro fa-4x"></i>
            <h4>Photo Trips</h4>
            <p>
              Want to experience nature's beauty without all of that annoying
              exercise? Take a photo tour on one of our mountain buses.
            </p>
          </li>
          <li>
            <i className="fa fa-bicycle fa-4x"></i>
            <h4>Racing Trips</h4>
            <p>
              If bicycles are more your speed, consider taking a tour through
              one of our mountain bike paths. We'll provide the bikes, and
              lunch, too!
            </p>
          </li>
          <li>
            <i className="fa fa-flag-checkered fa-4x"></i>
            <h4>Racing Trips</h4>
            <p>
              Got a competitive spirit? Sign up for one of our mountain
              marathons! Try to reach the summit before anyone else.
            </p>
          </li>
        </ul>
      </section> */}

      {/* <section className="testimonials">
        <h3 className="title">Testimonials from our adventurers:</h3>
        <p className="quote">I now love mountains</p>
        <p className="author">-John Doe</p>
        <p className="quote">Mountains are, like, way cooler than I thought.</p>
        <p className="author">-Jane Doe</p>
        <p className="quote">Wow. Mountains are high.</p>
        <p className="author">-Mike Tombor</p>
      </section> */}
    </>
  );
};

export default LandingPage;
