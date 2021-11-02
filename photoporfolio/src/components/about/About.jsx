import React from 'react'
import './About.css'
import Photographer from '../../img/photographer.jpg'
import Award from '../../img/award.png'


const About = () => {
  return(
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Photographer} alt="photographer" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Here for the creativity and fun
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc in enim molestie, gravida ipsum sodales, ultrices nisi.
          Duis ac quam sit amet erat sollicitudin tempor. Cras ac congue
          erat, id viverra risus. Praesent hendrerit dictum nisl, sit
          amet laoreet elit. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </p>
        <div className="a-award">
          <img src={Award} alt="award" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Award</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc in enim molestie, gravida ipsum sodales, ultrices nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
