import React from 'react'


import Logo from "../../assets/images/logo.PNG";


export const Header = () => {

  return (
    <div className="header">

      <section className="top">

        <div className="top_logo">
          <img className="img-logo" src={Logo} alt="logo" />
        </div>

        <div className="top_question">
          <h4>¿Qué es berrysafe?</h4>
        </div>

      </section>

    </div>

  )
}



