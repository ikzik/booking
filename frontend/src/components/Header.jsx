import React from "react";
import { PageHeader,Row, Col,  } from 'antd';
import {Link} from 'react-router-dom';

const Header = () => {
        return (
            <div className="header">
                <div className="container-fluid">
                    <Row className="row">
                        <Col span={4} className="logo">
                            <Link to="/" className="navlink" title="EconomyBookings"/>
                        </Col>
                        <Col span={8}>
                            
                        </Col>
                    </Row>
                </div>
            </div>
        );
}

export default Header