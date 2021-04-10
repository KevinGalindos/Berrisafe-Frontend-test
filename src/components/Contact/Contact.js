import React from 'react';

import { WhatsAppOutlined,
    MailOutlined,
    PhoneFilled,
    VideoCameraFilled } from '@ant-design/icons';

import FtrMail from "../../assets/images/ftrmail.png";


export const Contact = () => {

  return (
    <div>

      <div className="bg-contact-wapp">
        <div className="contact_wa">
          <div className="wa-title">
            <h3>¡Contactame ya!</h3>
          </div>
          <div className="wa-button">
            <button>
              <div className="wa-icon">
                <WhatsAppOutlined />
              </div>
              Escribeme por Whastapp
            </button>
          </div>
        </div>
      </div>

      <div className="state-box">
        <div className="schedule-call">
          <div className="content-box">
            <div className="content-title">
              <span></span>
              <h2>¡Estoy disponible!</h2>
            </div>
            <div className="icon-videocall">
              <VideoCameraFilled />
            </div>
            <div className="divider">
              <span></span>
            </div>
            <div className="icon-phone">
              <PhoneFilled />
            </div>

          </div>

          <div className="call-box">
            <h3>¿Quieres agendar una llamada?</h3>
          </div>

        </div>

      </div>

      <div className="contact_mail">
        <div className="content-mail">
            <div className="write-mail">
              <h3>Escribeme un correo</h3>
            </div>
            <div className="btn-mail">
              <button><MailOutlined /></button>
            </div>
        </div>

        <div className="text-mail">
          <p>Vestibulum, amet, urna sit lorem. Tempor malesuada eleifend sodales quis et dui pulvinar. Urna, velit volutpat, nunc, augue scelerisque suscipit. Maecenas amet nibh sed faucibus blandit donec sed penatibus. Fringilla ultrices nisl adipiscing leo placerat. Non semper malesuada</p>
        </div>

        <div className="ftr-mail">
          <img src={FtrMail} alt="mail" />
        </div>

      </div>

    </div>
  )
}

