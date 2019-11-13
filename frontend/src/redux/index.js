import {createStore, combineReducers, compose, applyMiddleware} from 'redux';

import CarsReducer from './reducers/carsReducer';
import SupplierReducer from './reducers/suppliersReducer';

import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    cars: CarsReducer,
    suppliers: SupplierReducer});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;