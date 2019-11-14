
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import {Row, Col} from 'antd';

import { getCars } from '../graphql/queries/getCars';
import { getSuppliers } from '../graphql/queries/getSuppliers';

import {connect} from 'react-redux';
import { updateCars } from '../redux/reducers/carsReducer';
import { updateSuppliers } from '../redux/reducers/suppliersReducer';
import { updateCompanies } from '../redux/reducers/companiesReducer';
import { updatePriceSort } from '../redux/reducers/priceSortReducer';
import { updateCurrentPage } from '../redux/reducers/currentPageReducer';


import Header from '../components/Header.jsx';
import Filter from '../components/Filter.jsx';
import Found from '../components/Found.jsx';
import CarInfo from '../components/CarInfo.jsx';
import Pagination from '../components/Pagination.jsx';


const Cars = (props) => {
    const ITEMS_PER_PAGE = 10;
    const getRequest = {offset: ITEMS_PER_PAGE * (props.page-1), limit: ITEMS_PER_PAGE},
    { data: dataR, loading: loadingR } = useQuery(getSuppliers, {
      onCompleted: data => {
        props.updateSuppliers(data.suppliers)
      }
    }),
    { data, loading, error, refetch } = useQuery(getCars, {
      variables: { req: getRequest, sort: props.priceSort, companies: props.companies },
      onCompleted: data => {
        props.updateCurrentPage(data.cars.page);
        props.updateCars(data);
      }
    })

    const setCompany = (res) => {
        var a = props.companies.indexOf(res.name);
        props.updateCurrentPage(1);
        localStorage.setItem('page', 1);
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

    const setPage = (res) =>{
          localStorage.setItem('page', res);
          props.updateCurrentPage(res);
      };

    const setFilter = (res) => {
        props.updateCurrentPage(1);
        localStorage.setItem('page', 1);
        props.updatePriceSort(res);
        localStorage.setItem('sort', res);
      };   

    if(props.cars.cars === undefined || loadingR || loading) {return <p>Loading...</p>}
    if(error) return <button onClick={() => refetch()}>Retry</button>
    return (
        <React.Fragment>
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
                            <Pagination data={props.cars.cars} pages={ITEMS_PER_PAGE} page={props.page} setPage={setPage}/>
                       </Col>
                    </Row>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const MapStateToProps = (state) => {
    return {
    cars: state.cars,
    suppliers: state.suppliers,
    companies: state.companies.companies,
    priceSort: state.priceSort.sort,
    page: state.currentPage.page
  };
  };

export default connect(MapStateToProps, {updateCars, updateSuppliers, updateCompanies, updatePriceSort, updateCurrentPage})(Cars);