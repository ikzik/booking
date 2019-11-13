import {createStore, combineReducers, compose, applyMiddleware} from 'redux';

import CurrentPageReducer from './reducers/currentPageReducer';
import CarsReducer from './reducers/carsReducer';
import CompaniesReducer from './reducers/companiesReducer';
import SupplierReducer from './reducers/suppliersReducer';
import PriceSortReducer from './reducers/priceSortReducer';

import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    currentPage: CurrentPageReducer,
    cars: CarsReducer,
    companies: CompaniesReducer,
    suppliers: SupplierReducer,
    priceSort: PriceSortReducer});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;