import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <section className="contact">
        <h3 className="title">Learn More</h3>
        <p>
          Want to learn more about our upcoming mountain-related events? Just
          sign up for our mailing list. No spam, we promise! Only quality
          offers, and information to keep you outdoors.
        </p>
        <form>
          <input type="email" placeholder="Email" />
          <a href="#" className="btn">
            Subscribe Now
          </a>
        </form>
      </section> */}
      <footer>
        <p>Images Courtesy of unsplash</p>
        <p>2018 Mountain Adventures site</p>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-twitter-square fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-facebook-square fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-snapchat-square fa-2x"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer