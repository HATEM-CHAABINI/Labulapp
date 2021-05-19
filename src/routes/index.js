import React from 'react';
import { useSelector } from 'react-redux';
import App from './app-routes'
import Auth from './auth-routes'

export default () => {

  const { profileData } = useSelector((state) => state.profileReducer);

  return (profileData != '' ? <App /> : <Auth />);


};
