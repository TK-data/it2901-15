import { combineReducers } from 'redux';
import nav from './navigation';
import auth from './auth';
import { loginMail, loginOptions } from './form';
import form from './redux-form';
import { carFetch } from './registerCar';
import modals from './modals';
import fuelRefill from './fuelRefill';
import fuelRefillForm from './fuelRefillForm';
import { registerUserModalVisible, registerUserModalTransparent, options, values } from './registerUser';

const AppReducer = combineReducers({
  nav,
  auth,
  loginMail,
  loginOptions,
  form,
  carFetch,
  registerUserModalVisible,
  registerUserModalTransparent,
  options,
  values,
  fuelRefill,
  fuelRefillForm,
  modals,
});

export default AppReducer;
