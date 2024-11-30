import React from 'react'

import { infoimg1 } from '../../assest'
import { infoimg2 } from '../../assest'
import { infoimg3 } from '../../assest'
import { infoimg4 } from '../../assest'
import { infoimg5 } from '../../assest'
import { infoimg6 } from '../../assest'

import './info.css'

const Info = () => {
  return (
    <section id="info">
        <div className="infodetails_wrapper">
            <div className="infodetails">
                <div className="infodetail" >
                    <img src={infoimg1} alt="" />
                    <h2 className="infodetailhead">clinically studied</h2>
                    <p className="infodetailpara">All product that we offer have undergone lab and safty test</p>
                </div>
                <div className="infodetail">
                    <img src={infoimg2} alt="" />
                    <h2 className="infodetailhead">Vegetarian Friendly</h2>
                    <p className="infodetailpara">We have a wide selection of vegetarian products to meet your needs</p>
                </div>
                <div className="infodetail">
                    <img src={infoimg3} alt="" />
                    <h2 className="infodetailhead">Made in India</h2>
                    <p className="infodetailpara">Shop local and explore health products made right here in India</p>
                </div>
                <div className="infodetail">
                    <img src={infoimg4} alt="" />
                    <h2 className="infodetailhead">Free shipping</h2>
                    <p className="infodetailpara">We deliver to your door with no shipping costs on your orders</p>
                </div>
                <div className="infodetail">
                    <img src={infoimg5} alt="" />
                    <h2 className="infodetailhead">No Risk</h2>
                    <p className="infodetailpara">We ensure that all products are safe and within their use-by date</p>
                </div>
                <div className="infodetail">
                    <img src={infoimg6} alt="" />
                    <h2 className="infodetailhead">GMO free</h2>
                    <p className="infodetailpara">Natural, no modified products and derivatives for those who need it</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Info