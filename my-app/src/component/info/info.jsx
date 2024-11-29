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
                    <h2 className="infodetailhead">clinically studied</h2>
                    <p className="infodetailpara">All product that we offer have undergone lab and safty test</p>
                </div>
                <div className="infodetail">
                    <img src={infoimg3} alt="" />
                    <h2 className="infodetailhead">clinically studied</h2>
                    <p className="infodetailpara">All product that we offer have undergone lab and safty test</p>
                </div>
                <div className="infodetail">
                    <img src={infoimg4} alt="" />
                    <h2 className="infodetailhead">clinically studied</h2>
                    <p className="infodetailpara">All product that we offer have undergone lab and safty test</p>
                </div>
                <div className="infodetail">
                    <img src={infoimg5} alt="" />
                    <h2 className="infodetailhead">clinically studied</h2>
                    <p className="infodetailpara">All product that we offer have undergone lab and safty test</p>
                </div>
                <div className="infodetail">
                    <img src={infoimg6} alt="" />
                    <h2 className="infodetailhead">clinically studied</h2>
                    <p className="infodetailpara">All product that we offer have undergone lab and safty test</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Info