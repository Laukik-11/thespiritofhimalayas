import React from "react";
import { Link } from "react-router-dom";
import Dodham from "../Assets/Dodham.jpg";
import Chardham from "../Assets/Chardham.jpg";
import Badrinath from "../Assets/Badrinath.jpg";
import Kedarnath from "../Assets/Kedarnath.jpg";

export const treks = [
  {
    id: 1,
    trekname: "DO DHAM YATRA",
    image: Dodham,
    description:
      "Chardham Yatra is a spiritual pilgrimage journey that includes visiting four holy shrines in the Himalayas — Yamunotri, Gangotri, Kedarnath, and Badrinath. The journey is considered highly sacred by Hindus and is believed to provide spiritual upliftment and liberation from the cycle of birth and death. If you are planning to undertake this journey, it is important to prepare yourself well in advance to ensure a smooth and successful trip. So to have a tension free trip pan your journey with us .We will provide you all the necessary services like food, transportation , accommodation and most important a plan of your journey in advance and all necessary arrangements to avoid any inconveniences",
  },
  {
    id: 2,
    trekname: "CHAR DHAM YATRA",
    image: Chardham,
    description:
      "Chardham Yatra is a spiritual pilgrimage journey that includes visiting four holy shrines in the Himalayas — Yamunotri, Gangotri, Kedarnath, and Badrinath. The journey is considered highly sacred by Hindus and is believed to provide spiritual upliftment and liberation from the cycle of birth and death. If you are planning to undertake this journey, it is important to prepare yourself well in advance to ensure a smooth and successful trip. So to have a tension free trip pan your journey with us .We will provide you all the necessary services like food, transportation , accommodation and most important a plan of your journey in advance and all necessary arrangements to avoid any inconveniences",
  },
  {
    id: 3,
    trekname: "KEDARNATH",
    image: Kedarnath,
    description:
      "Chardham Yatra is a spiritual pilgrimage journey that includes visiting four holy shrines in the Himalayas — Yamunotri, Gangotri, Kedarnath, and Badrinath. The journey is considered highly sacred by Hindus and is believed to provide spiritual upliftment and liberation from the cycle of birth and death. If you are planning to undertake this journey, it is important to prepare yourself well in advance to ensure a smooth and successful trip. So to have a tension free trip pan your journey with us .We will provide you all the necessary services like food, transportation , accommodation and most important a plan of your journey in advance and all necessary arrangements to avoid any inconveniences",
  },
  // {
  //   id: 4,
  //   name: "Trek 4",
  //   image: Badrinath,
  // },
  // {
  //   id: 5,
  //   name: "Trek 5",
  //   image:
  //     "https://images.unsplash.com/photo-1592417817038-d13fd7342605?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NjU5NTV8&ixlib=rb-4.0.3&q=85",
  // },
];

const TreksList = () => {
  return (
    <>
      <h1>List of Treks</h1>
      <ul>
        {treks.map((trek) => (
          <li key={trek.id}>
            <Link to={`/trek/${trek.id}`}>{trek.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TreksList;
