import React from 'react'
import './vitamins.css'
import vitamin from'../../assest/vitamin.png'
import {contentimg1} from "../../assest"
import {contentimg2} from "../../assest"
import {contentimg3} from "../../assest"

const Vitamins = () => {
  return (
     <section id="component1">
        <h1 className="title">Essential Vitamins</h1>
        <div className="contents">
            <div className="content1">
                <p className="contentpara">Online Medical Supplies</p>
               <h2 className="contenthead2">Get Your Vitamins <br /> & Minerals</h2>
                <button className="explore">Explore</button>
           </div>
            <div className="vitaminimg">
               <img src={vitamin} alt="" className="vita" />
            </div>
           <div className="contents3">
             <div className="content3">
                <img src={contentimg1} alt="" className="vitamins" />
                   <div className="3rdcontenttext">
                      <h1>vitamins</h1>
                       <p>increase vitamins and <br />minerals in your diet</p>
                  </div>
             </div>
             <div className="content3">
                <img src={contentimg2} alt="" className="vitamins" />
                   <div className="3rdcontenttext">
                      <h1>Weight Loss</h1>
                       <p>Weight Loss <br />Find scientifically proven solution</p>
                  </div>
             </div>
             <div className="content3">
                <img src={contentimg3} alt="" className="vitamins" />
                   <div className="3rdcontenttext">
                      <h1>Functional Foods</h1>
                       <p>Functional Foods <br />increase vitamins and minerals in your diet</p>
                  </div>
             </div>
              
           </div>
        </div>
     </section>

  )
}

export default Vitamins