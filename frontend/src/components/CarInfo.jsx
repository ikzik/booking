import React from "react";
import {Col, Card } from 'antd';
import { FaSnowflake, FaCar } from "react-icons/fa";
const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

  var currency_symbols = {
    'USD': '$', // US Dollar
    'EUR': '€', // Euro
    'CRC': '₡', // Costa Rican Colón
    'GBP': '£', // British Pound Sterling
    'ILS': '₪', // Israeli New Sheqel
    'INR': '₹', // Indian Rupee
    'JPY': '¥', // Japanese Yen
    'KRW': '₩', // South Korean Won
    'NGN': '₦', // Nigerian Naira
    'PHP': '₱', // Philippine Peso
    'PLN': 'zł', // Polish Zloty
    'PYG': '₲', // Paraguayan Guarani
    'THB': '฿', // Thai Baht
    'UAH': '₴', // Ukrainian Hryvnia
    'VND': '₫', // Vietnamese Dong
};

const CarInfo = ({data, suppliers}) => {
    return (
        <>
        {data.cars.items.map(car => (
        <Card className="auto       car bcrm_car" key={car.id}>
            <Card.Grid className="main" style={gridStyle} hoverable={false}> 
                <Col span={8} className="pic">
                    <div className="preview">
                        <a href="#" className="bcrm_select_car">
                            <img onError={(e)=>{e.target.onerror = null; e.target.src="/img/no-car-image.png"}} className="img-responsive" src={car.imageUrl !== null ? car.imageUrl : '/img/no-car-image.png'} alt={car.name}/>
                        </a>
                    </div>
                </Col>
                <Col span={10} className="about">
                    <label className="model">
                        <a href="#">
                            {car.name + ' '}
                        </a>
                        <span className="similar">
                            or similar
                        </span>
                    </label>
                    {car.carTypeForWeb !== undefined && car.carTypeForWeb !== null &&
                    <span className="car-class">
                     {car.carTypeForWeb[0]}   
                    </span>
                    }
                    <div className="options">
                       {car.airco !== null && car.airco === true &&
                        <span className="item">
                            <FaSnowflake className="air-cond-icon"/>
                            Air Conditioning
                        </span>
                        } 
                        {car.transmission !== null &&
                            <span className="item">
                            <FaCar className="air-cond-icon"/>
                                {car.transmission === 1 ? 'Automatic Transmission' : 'Manual Transmission'}
                            </span>
                        }
                    </div>
                    <div className="overall">
                        {car.seats !== null &&
                        <>{car.seats + ' '}
                        <span className="title">Seats </span>
                        </>
                        }
                        {(car.doors !== null || car.bigSuitcases !== null) && car.seats !== null &&
                        <i className="separate"/>
                        }
                        {car.doors !== null &&
                        <>{car.doors + ' '}
                        <span className="title">Doors </span>
                        </>
                        }
                        {car.doors !== null && car.bigSuitcases !== null &&
                        <i className="separate"/>
                        }
                        {car.bigSuitcases !== null &&
                        <>{car.bigSuitcases + ' '}
                        <span className="title">Baggage </span>
                        </>
                        }
                    </div>
                </Col>
                <Col span={6} className="price">
                    <span className="amount">{currency_symbols[car.price.currency] + ' ' + car.price.total.toFixed(2)}</span>
                </Col>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false} className="tabs"> 
                <span className="tab supplier">
                     <img border="0" alt="car.supplier.name" src ={
                         suppliers.find(x => x.id === car.supplier.id).logo
                     }  />
                                     <span className="bcrm_review_btn">
                    <span className="score">
                        {car.supplier.rating}
                        <span className="out-of-ten">/10</span>
                    </span>
                </span>
                </span>
            </Card.Grid>
        </Card>
        ))}
        </>
    );
}

export default CarInfo