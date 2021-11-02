import React from 'react'
import './Contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'

const Contact = () => {
  return(
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
            Let's discuss your project
          </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <p>+1 212 389 6654</p>
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              <p>info@johnsondesign.com</p>
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              <p>22 Main Street, NYC, USA</p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b><br />
            Get in touch. Always ready for freelancing
            if the right project comes along.
          </p>
          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea row="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
