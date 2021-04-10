import React from 'react';

import { Progress, Rate } from 'antd';

import { StarFilled } from '@ant-design/icons';



export const Ratings = () => {

  return (
    <div className="Ratings">

      <div className="content">

        <div className="content_rater">

          <div className="content_rater_title">
            <h3>Calificaciones de Usuarios</h3>
          </div>

          <div className="rating-stars">

            <div className="avg">
              <h4><span>128 </span>calificaciones</h4>
              <h2>4.6</h2>

              <div className="stars">
                <Rate allowHalf defaultValue={4.5} />
              </div>

            </div>

            <div className="scale">
              <div style={{ width: 200 }}>
                <span>5 </span><StarFilled /><Progress percent={93} size="small" />
                <span>4 </span><StarFilled /><Progress percent={25} size="small" />
                <span>3 </span><StarFilled /><Progress percent={10} size="small" />
                <span>2 </span><StarFilled /><Progress percent={0} size="small" />
                <span>1 </span><StarFilled /><Progress percent={0} size="small" />
              </div>
            </div>

          </div>

          <div className="btn-rate">
            <button>Calificar agente</button>
          </div>

        </div>

        <div className="content_best-worst">

        </div>

      </div>
    </div>
  )
}