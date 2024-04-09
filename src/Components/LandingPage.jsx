import React from "react";

const LandingPage = () => {
  return (
    <>
      <header>
        <h2>
          <a href="#">The Spirit Of Himalayas</a>
        </h2>
        <nav>
          <li>
            <a href="#">Tours</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </nav>
      </header>
      <section class="hero">
        <div
          class="background-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c2d910abcc9bb04fcb180f6a45e407&dpr=2&auto=format&fit=crop&w=767&h=485&q=60&cs=tinysrgb)",
          }}
        ></div>
        <div class="hero-content-area">
          <h1>The Spirit Of Himalayas</h1>
          <h3>Unmissable Adventure Tours Around The Uttarakhand</h3>
          <a href="#" class="btn">
            Contact Us Now
          </a>
        </div>
      </section>

      <section class="destinations">
        <h3 class="title">Some of our destinations:</h3>
        <p>
          Tired of the ocean? Are the plains too plain? Come along with us on
          one of our mountain adventures. Here are some pictures from people who
          have had elevated experiences with us.
        </p>

        <ul class="grid">
          <li
            class="small"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1454418447879-455f6fc7c64d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d271f82e52bcca8ce13c13382c2850c1&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></li>
          <li
            class="large"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-0.3.5&s=4d11e95a31535716d145de648f6963ff&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></li>
          <li
            class="large"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-0.3.5&s=686088406d96c0af9c41563807620fc1&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></li>
          <li
            class="small"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-0.3.5&s=b2ff98e46a093cc975556c9e95d6e182&auto=format&fit=crop&w=1950&q=80)",
            }}
          ></li>
        </ul>
      </section>

      <section class="packages">
        <h3 class="title">Tour Packages</h3>
        <p>
          We offer a variety of moutaineering packages. Wheter you've climbed
          Everest, or don't even know what a mountain is, we've got the perfect
          vacation for you.
        </p>

        <ul class="grid">
          <li>
            <i class="fa fa-compass fa-4x"></i>
            <h4>Guided Trips</h4>
            <p>
              Lokking for the complete experience? Take a tour with one of our
              experts. They'll show you secrets that you're likely to miss
              otherwise.
            </p>
          </li>
          <li>
            <i class="fa fa-camera-retro fa-4x"></i>
            <h4>Photo Trips</h4>
            <p>
              Want to experience nature's beauty without all of that annoying
              exercise? Take a photo tour on one of our mountain buses.
            </p>
          </li>
          <li>
            <i class="fa fa-bicycle fa-4x"></i>
            <h4>Racing Trips</h4>
            <p>
              If bicycles are more your speed, consider taking a tour through
              one of our mountain bike paths. We'll provide the bikes, and
              lunch, too!
            </p>
          </li>
          <li>
            <i class="fa fa-flag-checkered fa-4x"></i>
            <h4>Racing Trips</h4>
            <p>
              Got a competitive spirit? Sign up for one of our mountain
              marathons! Try to reach the summit before anyone else.
            </p>
          </li>
        </ul>
      </section>

      <section class="testimonials">
        <h3 class="title">Testimonials from our adventurers:</h3>
        <p class="quote">I now love mountains</p>
        <p class="author">-John Doe</p>
        <p class="quote">Mountains are, like, way cooler than I thought.</p>
        <p class="author">-Jane Doe</p>
        <p class="quote">Wow. Mountains are high.</p>
        <p class="author">-Mike Tombor</p>
      </section>

      <section class="contact">
        <h3 class="title">Learn More</h3>
        <p>
          Want to learn more about our upcoming mountain-related events? Just
          sign up for our mailing list. No spam, we promise! Only quality
          offers, and information to keep you outdoors.
        </p>
        <form>
          <input type="email" placeholder="Email" />
          <a href="#" class="btn">
            Subscribe Now
          </a>
        </form>
      </section>

      <footer>
        <p>Images Courtesy of unsplash</p>
        <p>2018 Mountain Adventures site</p>
        <ul>
          <li>
            <a href="#">
              <i class="fa fa-twitter-square fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-facebook-square fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-snapchat-square fa-2x"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default LandingPage;
