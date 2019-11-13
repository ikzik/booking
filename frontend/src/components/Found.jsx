import React from "react";
import {Dropdown, Button, Menu } from 'antd';

const Found = ({amount, filter, setFilter}) => {
    const menu = <Menu onClick={({key}) => setFilter(key)}>
    <Menu.Item key={"ASC"}>Price (low-high)</Menu.Item>
    <Menu.Item key={"DESC"}>Price (high-low)</Menu.Item>
    </Menu>;
    return(

        <div className="found">
            <span className="bcrm_clear_all_filters_cont_except">
                <h1>
                    <span className="amount    bcrm_total_cars">
                        {amount.cars.totalItems }
                    </span>
                    {' '} cars
                </h1>
            </span>
            <div className="sorting">
                <Dropdown overlay={menu} className="drop-menu" placement="bottomRight">
                    <Button className="drop-button">
                    {filter === "ASC"
                          ? "Price (low - high)"
                          : "Price (high - low)"}
                          <i className="arrow"/>
                    </Button>
                </Dropdown>
                <span className="label">Sort: </span>
            </div>
        </div>
    );
}

export default Found