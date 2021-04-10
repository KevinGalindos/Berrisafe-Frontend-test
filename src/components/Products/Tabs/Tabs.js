import React from 'react';
import { Tabs } from 'antd';
//import { ArrowLeftOutlined } from '@ant-design/icons';

import Diadema from "../../../assets/images/Vectordiadema.png";

import Card1 from '../../../assets/images/card1.png';
import Card2 from '../../../assets/images/card2.png';
import Card3 from '../../../assets/images/card3.png';
import Card4 from '../../../assets/images/card4.png';



const { TabPane } = Tabs;

//MAPEAR LAS CARDS 


export const TabComp = () => {

    const callback = (key) => {
        console.log(key);
    }


    return (

        <div className="content-tabs">
            <div className="Tabs-insuranse">
                <Tabs defaultActiveKey="1" onChange={callback}>

                    <TabPane tab="Seguro de Autos Clásico" key="1">
                        <div className="classic">
                            <div className="classic_title">
                                <h3>Seguro de Autos Clásico</h3>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Id lectus odio elit egestas faucibus , Massa molestie in tincidunt mattis.
                                     Aliquet cursus proin gravida ut elementum volutpat nunc, et.</p>
                            </div>
                            <div className="classic_mid-info">
                                <div className="mid-name">
                                    <h3>Purus libero dictumst lorem</h3>
                                </div>
                                <div className="cards">
                                    <div className="cards_1">
                                        <div className="img-card1">
                                            <img src={Card1} alt="Card-1" />
                                        </div>
                                        <div className="text-card1">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                    <div className="cards_1">
                                        <div className="img-card2">
                                            <img src={Card2} alt="Card-2" />
                                        </div>
                                        <div className="text-card2">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                    <div className="cards_1">
                                        <div className="img-card3">
                                            <img src={Card3} alt="Card-3" />
                                        </div>
                                        <div className="text-card3">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                    <div className="cards_1">
                                        <div className="img-card4">
                                            <img src={Card4} alt="Card-4" />
                                        </div>
                                        <div className="text-card4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="ending-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Id lectus odio elit egestas faucibus , Massa molestie in tincidunt mattis.
                                        Aliquet cursus proin gravida ut elementum volutpat nunc, et.</p>
                                </div>

                                <div className="btn-more">
                                    <button> <img src={Diadema} alt="Client"/>Quiero saber mas de este producto</button>
                                </div>
                            </div>

                        </div>
                    </TabPane>
                    <TabPane tab="Seguro de Autos Básico" key="2">
                        <div className="classic">
                            <div className="classic_title">
                                <h3>Seguro de Autos Básico</h3>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Id lectus odio elit egestas faucibus , Massa molestie in tincidunt mattis.
                                     Aliquet cursus proin gravida ut elementum volutpat nunc, et.</p>
                            </div>
                            <div className="classic_mid-info">
                                <div className="mid-name">
                                    <h3>Purus libero dictumst lorem</h3>
                                </div>
                                <div className="cards">
                                    <div className="cards_1">
                                        <div className="img-card1">
                                            <img src={Card1} alt="Card-1" />
                                        </div>
                                        <div className="text-card1">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                    <div className="cards_1">
                                        <div className="img-card2">
                                            <img src={Card2} alt="Card-2" />
                                        </div>
                                        <div className="text-card2">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                    <div className="cards_1">
                                        <div className="img-card3">
                                            <img src={Card3} alt="Card-3" />
                                        </div>
                                        <div className="text-card3">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                    <div className="cards_1">
                                        <div className="img-card4">
                                            <img src={Card4} alt="Card-4" />
                                        </div>
                                        <div className="text-card4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="ending-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Id lectus odio elit egestas faucibus , Massa molestie in tincidunt mattis.
                                        Aliquet cursus proin gravida ut elementum volutpat nunc, et.</p>
                                </div>

                                <div className="btn-more">
                                    <button> <img src={Diadema} alt="Client"/>Quiero saber mas de este producto</button>
                                </div>
                            </div>

                        </div>
                    </TabPane>
                    <TabPane tab="Seguro de Autos Global" key="3">
                    <div className="classic">
                            <div className="classic_title">
                                <h3>Seguro de Autos Global</h3>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Id lectus odio elit egestas faucibus , Massa molestie in tincidunt mattis.
                                     Aliquet cursus proin gravida ut elementum volutpat nunc, et.</p>
                            </div>
                            <div className="classic_mid-info">
                                <div className="mid-name">
                                    <h3>Purus libero dictumst lorem</h3>
                                </div>
                                <div className="cards">
                                    <div className="cards_1">
                                        <div className="img-card1">
                                            <img src={Card1} alt="Card-1" />
                                        </div>
                                        <div className="text-card1">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                    <div className="cards_1">
                                        <div className="img-card2">
                                            <img src={Card2} alt="Card-2" />
                                        </div>
                                        <div className="text-card2">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                    <div className="cards_1">
                                        <div className="img-card3">
                                            <img src={Card3} alt="Card-3" />
                                        </div>
                                        <div className="text-card3">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                    <div className="cards_1">
                                        <div className="img-card4">
                                            <img src={Card4} alt="Card-4" />
                                        </div>
                                        <div className="text-card4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Egestas dignissim a sagittis vestibulum, duis. </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="ending-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Id lectus odio elit egestas faucibus , Massa molestie in tincidunt mattis.
                                        Aliquet cursus proin gravida ut elementum volutpat nunc, et.</p>
                                </div>

                                <div className="btn-more">
                                    <button> <img src={Diadema} alt="Client"/>Quiero saber mas de este producto</button>
                                </div>
                            </div>

                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );

}


