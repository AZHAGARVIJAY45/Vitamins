import React from 'react'
import './contact.css'
import { elbirth } from '../../assest'
import { locationimage } from '../../assest'
import { emailimage } from '../../assest'
import { phoneimage } from '../../assest'
const Contact = () => {
  return (
    <section id="contact">
        <div className="contacts">
            <div className="contactss">
               <div className="phone">
                  <img src={phoneimage}alt="" className="phoneimg" />
                  <p className="phonepara">Phone Number <br />+974 3118 1843</p>
               </div>
               <div className="email">
                   <img src={emailimage}alt="" className="emailimg" />
                   <p className="emailpara">Email Address <br />elbrithcqhr@gmail.com</p>
               </div>
               <div className="location">
                   <img src={locationimage} alt="" className="locationimg" />
                   <p className="locationpara">Office Location <br />Ambassdor street,Zone 61</p>
               </div>
            </div>
            <div className="detials">
               <div className="elbirth">
                  <img src={elbirth} alt="" className="elbirthimg" />
               </div>
               <div className="contactpara">
                   Your health, physical and emotional well-being is important to us. <br /> We are always by your side and have made it even easier for <br /> you to find the necessary vitamins.
               </div>
            </div>
        </div>

    </section>
  )
}

export default Contact