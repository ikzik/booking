import {createStore, combineReducers, compose, applyMiddleware} from 'redux';

import CarsReducer from './reducers/carsReducer';
import SupplierReducer from './reducers/suppliersReducer';
import CompaniesReducer from './reducers/companiesReducer';
import PriceSortReducer from './reducers/priceSortReducer';

import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    cars: CarsReducer,
    suppliers: SupplierReducer,
    companies: CompaniesReducer,
    priceSort: PriceSortReducer});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;