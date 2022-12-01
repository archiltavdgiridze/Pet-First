import React from 'react'
import pet1 from "../../assets/pets/pet1.png";
import pet2 from "../../assets/pets/pet2.png";
import pet3 from "../../assets/pets/pet3.png";
import pet4 from "../../assets/pets/pet4.png";
import pet5 from "../../assets/pets/pet5.png";
import pet6 from "../../assets/pets/pet6.png";
import pet7 from "../../assets/pets/pet7.png";
import pet8 from "../../assets/pets/pet8.png";
import pet9 from "../../assets/pets/pet9.png";
import pet10 from "../../assets/pets/pet10.png";
import pet11 from "../../assets/pets/pet11.png";
import petMain from "../../assets/pets/dogJasper.png";

const Pets = () => {
  return (
    <>
      <div className="banner__row">
        <div className="banner__item">
          <img src={pet1} />
        </div>
        <div className="banner__item banner__item-main">
          <p>
            Dog <span>(JASPER)</span>
          </p>
          <img src={petMain} />
        </div>
        <div className="banner__item">
          <img src={pet2} />
        </div>
        <div className="banner__item">
          <img src={pet3} />
        </div>
        <div className="banner__item">
          <img src={pet4} />
        </div>
        <div className="banner__item">
          <img src={pet5} />
        </div>
      </div>

      <div className="banner__row">
        <div className="banner__item">
          <img src={pet6} />
        </div>
        <div className="banner__item banner__op">
          <img src={pet7} />
        </div>
        <div className="banner__item">
          <img src={pet8} />
        </div>
        <div className="banner__item">
          <img src={pet9} />
        </div>
        <div className="banner__item">
          <img src={pet10} />
        </div>
        <div className="banner__item">
          <img src={pet11} />
        </div>
      </div>
    </>
  )
}

export default Pets