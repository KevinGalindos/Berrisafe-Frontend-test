import React from 'react';


import ProfilePic from "../../assets/images/profile-pic.png";
import VerifiedVector from "../../assets/images/Vectorverified.png";
import InfoVector from "../../assets/images/Vectorinfo.png";
import VectorVerified2 from "../../assets/images/Vectorverified2.png";
import VectorUbication from "../../assets/images/Vectorubication.png";
import VectorInstagram from "../../assets/images/Vectorinstagram.png";
import VectorFacebook from "../../assets/images/Vectorfacebook.png";
import VectorTwitter from "../../assets/images/Vectortwitter.png";
import Certified from "../../assets/images/certified-logo.png";

import Enterprise1 from "../../assets/images/enterprise-1.png";
import Enterprise2 from "../../assets/images/enterprise-2.png";
import Enterprise3 from "../../assets/images/enterprise-3.png";
import Enterprise4 from "../../assets/images/enterprise-4.png";
import Enterprise5 from "../../assets/images/enterprise-5.png";



export const Profile = () => {

  return (
    <div>
      <section className="profile">

        <div className="profile_picture-box">

          <div className="wraper-pic">
            <img className="img-profile" src={ProfilePic} alt="profile" />
          </div>


          <div className="profile-name">

            <div className="icon-verified">
              <img src={VerifiedVector} alt="Verified" />
            </div>

            <h4>Berrymaster</h4>

            <div className="icon-info">
              <img src={InfoVector} alt="info" />
            </div>

          </div>
        </div>

        <div className="profile_personal-info">

          <div className="content-info">

            <div className="title-name">
              <h1>Juan Andrés Ramirez Lopez</h1>
            </div>

            <div className="icon-verified2">
              <img src={VectorVerified2} alt="Verified-profile" />
            </div>

          </div>

          <div className="content-job-ubication">

            <div className="specific-job">
              <h4>Asesor profesional de Seguros</h4>
            </div>

            <div className="job-adress">
              <div className="icon-ubication">
                <img src={VectorUbication} alt="ubication" />
              </div>

              <h4>Avenida Insurgentes Sur, código 2, México</h4>
            </div>
          </div>

          <div className="social-media-line">

            <div className="social-icons">
              <img src={VectorInstagram} alt="instagram" />
              <img src={VectorFacebook} alt="facebook" />
              <img src={VectorTwitter} alt="twitter" />
            </div>

          </div>

          <div className="personal-description">
            <p>Desde hace 16 años pertenecemos al sector afianzador y asegurador, teniendo como especialidad la intermediación, gestión, asesoría y emisión de garantías como fianzas y seguros de caución....<span>Leer más</span></p>
          </div>

        </div>

        <div className="profile_logo-certified">
          <div className="img-logo-cert">
            <img src={Certified} alt="certified" />
          </div>

        </div>

      </section>

      <section className="enterprise">
        <div className="enterprise_brands">

          <div className="logo-1">
            <img src={Enterprise1} alt="ent1" />
          </div>
          <div className="logo-2">
            <img src={Enterprise2} alt="ent2" />
          </div>
          <div className="logo-3">
            <img src={Enterprise3} alt="ent3" />
          </div>
          <div className="logo-4">
            <img src={Enterprise4} alt="ent4" />
          </div>
          <div className="logo-5">
            <img src={Enterprise5} alt="ent5" />
          </div>

        </div>
      </section>

    </div>




  )
}








