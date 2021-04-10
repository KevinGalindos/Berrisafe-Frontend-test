import React from 'react';
import { TabComp } from './Tabs/Tabs';

import Vectorcar from "../../assets/images/Vectorcar-icon.png";
import Diadema from "../../assets/images/Vectordiadema.png";
import CornerArrow from "../../assets/images/Vectorarrow.png";
import Sponsor1 from "../../assets/images/sponsor1.png";
import Sponsor2 from "../../assets/images/sponsor2.png";


export const Products = () => {
  return (
    <div>
      <section className="products-services">

        <div className="products-services_products-box">

          <div className="products-box title">
            <h3>Productos</h3>
          </div>

          <div className="products-box main-banner">

            <div className="banner-title">
              <h4>Seguro de autos</h4>
              <img src={Vectorcar} alt="Vcar" />
            </div>

            <div className="banner-text">
              <p>Felis at blandit sed semper. Ullamcorper velit imperdiet quis ullamcorper nisl lectus facilisis erat maecenas. Blandit in vitae commodo tellus volutpat sed. </p>
            </div>

            <div className="banner-line-bottom">

              <button><img src={Diadema} alt="user-atention" /> Quiero saber más de este producto</button>

              <div className="corner-arrow">
                <img src={CornerArrow} alt="arrow" />
              </div>

            </div>

          </div>

          <div className="shoping-time">
            <h4>+10 Años vendiendo seguros de Autos</h4>
          </div>

          <div className="sponsored-by">

            <h3>Patrocinado por</h3>

            <div className="sponsor1">
              <img src={Sponsor1} alt="spo1" />
            </div>

            <div className="sponsor2">
              <img src={Sponsor2} alt="spo2" />
            </div>

          </div>

        </div>

        <div className="mini-services">

          <div className="box-services">
            <div className="services-fam">
              <h6>Familiar</h6>
            </div>

            <div className="services-health">
              <h6>Salud</h6>
            </div>

            <div className="services-life">
              <h6>Vida</h6>
            </div>

            <div className="services-travel">
              <h6>Viajes</h6>
            </div>
          </div>

          <div className="botton-box">
            <button>Ver más...</button>
          </div>

        </div>

        
      </section>
      <TabComp/>
    </div>
  )
}