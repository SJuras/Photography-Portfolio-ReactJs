import React from 'react'
import './Intro.css'
import Man from '../../img/man.png'

const Intro = () => {
  return(
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is:</h2>
          <h1 className="i-name">John Connor</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Copywriter</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <div className="i-desc">
            I design and develop services for specializing
            in creative, stylish designs for
            online stores.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Man} alt="portrait" className="i-img" />
      </div>
    </div>
  )
}

export default Intro
