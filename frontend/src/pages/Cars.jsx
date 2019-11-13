
import React, { useState, useCallback } from 'react'
import { useQuery } from '@apollo/react-hooks'
import {Row, Col} from 'antd';

import { getCars } from '../graphql/queries/getCars';
import { getSuppliers } from '../graphql/queries/getSuppliers';

import {connect} from 'react-redux';
import { updateCars } from '../redux/reducers/carsReducer';
import { updateSuppliers } from '../redux/reducers/suppliersReducer';
import { updateCompanies } from '../redux/reducers/companiesReducer';
import { updatePriceSort } from '../redux/reducers/priceSortReducer';

import Header from '../components/Header.jsx';
import Filter from '../components/Filter.jsx';
import Found from '../components/Found.jsx';
import CarInfo from '../components/CarInfo.jsx';

const Cars = (props) => {
    const ITEMS_PER_PAGE = 10;
    const getRequest = {offset: ITEMS_PER_PAGE * 0, limit: ITEMS_PER_PAGE},
    { data: dataR, loading: loadingR } = useQuery(getSuppliers, {
      onCompleted: data => {
        console.log(data.suppliers);
        props.updateSuppliers(data.suppliers);
      }
    }),
    { data, loading, error, refetch } = useQuery(getCars, {
      variables: { req: getRequest, sort: props.priceSort, companies: props.companies },
      onCompleted: data => {
        console.log(data);
        props.updateCars(data);
      }
    })

    const setCompany = (res) => {
        var a = props.companies.indexOf(res.name);
        if(a < 0 && !res.delete) {
          props.updateCompanies([props.companies, res.name].flat());
        localStorage.setItem('companies', JSON.stringify([props.companies, res.name].flat()))
        } else if (res.delete && res.name !== null) {
          props.updateCompanies(props.companies.filter(company => company !== res.name));
          localStorage.setItem('companies', JSON.stringify(props.companies.filter(company => company !== res.name)))
        } else if (res.delete && res.name === null){
          props.updateCompanies([]);
          localStorage.removeItem('companies');
        }
      };

      const setFilter = (res) => {
        props.updatePriceSort(res);
        localStorage.setItem('sort', res);
      };      

    console.log(props.cars);
    console.log(props.suppliers);
    if(props.cars.cars === undefined || loadingR || loading) {return <p>Loading...</p>}
    if(error) return <button onClick={() => refetch()}>Retry</button>
    return (
        <>
            <Header/>
            <div id='bcrm_container'>
                <div id="bcrm_search_result" className="step2"> 
                    <div id="search-results" className="container-fluid booking-content">
                    <Row className="row">
                        <Col span={6}>
                         </Col>
                        <Col span={18} className="search-result ab-pad">
                            <Filter suppliers={dataR.suppliers} companies={props.companies} setCompany={setCompany}></Filter>
                            <Found amount={props.cars.cars} filter={props.priceSort} setFilter={setFilter}/>
                            <div className="grid">
                                <CarInfo data={props.cars.cars} suppliers={dataR.suppliers}/>
                            </div>
                       </Col>
                    </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

const MapStateToProps = (state) => {
    return {
    cars: state.cars,
    suppliers: state.suppliers,
    companies: state.companies.companies,
    priceSort: state.priceSort.sort
  };
  };

export default connect(MapStateToProps, {updateCars, updateSuppliers, updateCompanies, updatePriceSort})(Cars);