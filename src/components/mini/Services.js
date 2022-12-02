import React from 'react';
import phonendoscopeIcon from "../../assets/phonendoscope.png";
import scissorsIcon from "../../assets/scissors.png";
import arrows from "../../assets/arrows.png";


const Services = () => {
  return (
    <>
      <div className="services__item services__item-left">
        <div className="services__circle">
          <img src={phonendoscopeIcon} />
        </div>
        <h4 className="services__item-title">Pharmacy</h4>
        <p className="services__item-desc">
          Apoquel is an oral tablet that works differently than other allergy
          medications. It goes straight to the source to help relieve itch and
          inflammation at its core—addressing the underlying cause of irritation
        </p>
        <button>Explore</button>
      </div>

      <div className="services__item services__item-right">
        <div className="services__circle-right">
          <img src={scissorsIcon} />

        </div>
        <h4 className="services__item-title">Breed-specific Haircuts</h4>
        <p className="services__item-desc">
          Regular grooming is essential to your pet's health as it helps prevent
          skin issues such as matting.
        </p>
        <button>Explore</button>
      </div>
      <div className='services__right-arrows'>
        <img src={arrows} />
      </div>
    </>
  );
}

export default Services
