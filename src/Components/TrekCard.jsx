import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ name, id, imageSrc, title, trekname, subtitle, description }) => {

  const tourORtrek = name;

  return (
    <Link className="projects__card" to={`/${tourORtrek}/${id}`}>
      <div className="projects__image">
        <img src={imageSrc} alt="project" className="projects__img" />
      </div>
      <div className="projects__content">
        <h3 className="projects__subtitle">{trekname}</h3>
        <h2 className="projects__title">Book Now</h2>
        {/* <h2 className="projects__title"> DO DHAM, UTTARAKHAND</h2> */}
        <p className="projects__description">{description}</p>
      </div>
      {/* <div className="projects__buttons">
        <a
          href="https://github.com/"
          target="_blank"
          className="projects__link"
        >
          <i className="ri-github-line"></i> Source Code
        </a>
        <a
          href="https://dribbble.com/"
          target="_blank"
          className="projects__link"
        >
          <i className="ri-dribbble-line"></i> View
        </a>
      </div> */}
    </Link>
  );
};

export default Card