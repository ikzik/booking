
import React, { useState, useCallback } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { getCars } from '../graphql/queries/getCars';
import { getSuppliers } from '../graphql/queries/getSuppliers';

import {connect} from 'react-redux';
import { updateCars } from '../redux/reducers/carsReducer';
import { updateSuppliers } from '../redux/reducers/suppliersReducer';


const Cars = (props) => {
    const ITEMS_PER_PAGE = 10;
    const getRequest = {offset: ITEMS_PER_PAGE * 1, limit: ITEMS_PER_PAGE},
    { data: dataR, loading: loadingR } = useQuery(getSuppliers, {
      onCompleted: data => {
        console.log(data.suppliers);
        props.updateSuppliers(data.suppliers);
      }
    }),
    { data, loading, error, refetch } = useQuery(getCars, {
      variables: { req: getRequest, sort: 'ASC', companies: [] },
      onCompleted: data => {
        console.log(data);
        props.updateCars(data);
      }
    })


    console.log(props.cars);
    console.log(props.suppliers);
    return (
        <div></div>
    )
}

const MapStateToProps = (state) => {
    return {
    cars: state.cars,
    suppliers: state.suppliers
  };
  };

export default connect(MapStateToProps, {updateCars, updateSuppliers})(Cars);