import React from 'react';


import { Header } from "../../components/Header/Header"
import { Profile } from "../../components/Profile/Profile"
import { Products } from "../../components/Products/Products"
import { Contact } from "../../components/Contact/Contact"
import { Ratings } from "../../components/Ratings/Ratings"
import { MoreOptions } from "../../components/MoreOptions/MoreOptions"
import { Map } from "../../components/Map/Map"



export const Home = () => {

    return (

        <div className="Home">
            <Header />

            <div className="container-box">

                <div className="adjust-box">

                    <div className="central-box">
                        <Profile/>
                        <Products/>
                        <Ratings/>
                        <MoreOptions/>
                        <Map/>                      
                    </div>

                    <section className="contact">
                        <Contact />
                    </section>

                </div>

            </div>





        </div>
    );


}