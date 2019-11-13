import React from "react";
import {Row, Col, Icon } from 'antd';
const Filter = ({companies, suppliers, setCompany}) => {
    return (
        <div id='bcrm_supplier_filter_additional' className="container-fluid compare-suppliers">
            <Row className="row compare-row">
                <Col span={24} className="list">
                    <span className="nav-btn left bcrm_filter_supplier_prev swiper-button-disabled">
                        <a title="left" className="scroll left">
                            <Icon type="left" className="icon-angle-left"/>
                        </a>
                    </span>
                    <div className="bcrm_filter_supplier_list swiper-container-horizontal swiper-container-wp8-horizontal">
                        <div className="swiper-wrapper"> 
                        {suppliers.map( supplier => (
                            <span className="company bcrm_filter_supplier_item swiper-slide" key={supplier.id} >
                                <span className="border    bcrm_checkbox bcrm_results_filter_additional " key={supplier.id} onClick={() => { setCompany({name: supplier.name, delete: false})
                            }}>
                                    <img key={supplier.id} src={supplier.logo} className="img-responsive" alt={supplier.name}/>
                                </span>
                            </span>
                        ))}
                        </div>     
                    </div>
                    <span className="nav-btn right bcrm_filter_supplier_next">
                        <a title="Right" className="scroll right">
                            <Icon type="right" className="icon-angle-right"/>
                        </a>
                    </span>
                </Col>
            </Row>
            {Array.isArray(companies) && companies.length > 0 &&
            <Row className="row   bcrm_filter_top_selected_list">
                   <Col span={20} className="remove-filters">
                       <span className="title"> Filters applied: </span>
                       {companies.map(company => (
                           <span className="selected    bcrm_checkbox bcrm_results_filter_additional  bcrm_checked" key={company} onClick={() => setCompany({name: company, delete: true})}>
                            {company}
                            <span className="circle">
                                <Icon type="close" />
                            </span>
                           </span>
                       ))}
                    </Col>
                    <Col span={4} className="clear-all-filters">
                        <a href="#">
                        <span className="clear-all   bcrm_results_filter_remove_all_additional" title="none" onClick={() => setCompany({name: null, delete: true})}>
                            Clear All
                        </span>
                        </a>
                    </Col>         
            </Row>
            }
        </div>
    );
}

export default Filter