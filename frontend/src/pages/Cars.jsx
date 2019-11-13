
import React, { useState, useCallback } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { getCars } from '../graphql/queries/getCars';
import { getSuppliers } from '../graphql/queries/getSuppliers';

const Cars = (props) => {
    const ITEMS_PER_PAGE = 10;
    const getRequest = {offset: ITEMS_PER_PAGE * 1, limit: ITEMS_PER_PAGE},
    { data: dataR, loading: loadingR } = useQuery(getSuppliers, {
      onCompleted: data => {
        console.log(data.suppliers)
      }
    }),
    { data, loading, error, refetch } = useQuery(getCars, {
      variables: { req: getRequest, sort: 'ASC', companies: [] },
      onCompleted: data => {
        console.log(data);
      }
    })


    return (
        <div></div>
    )
}
export default Cars;