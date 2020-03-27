import axios from 'axios';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: token
        }
    });
};



export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render = {props => {
                return(
                    window.localStorage.getItem('token') ? <Component {...props} /> : <Redirect to='/login' />
                )
            }} 
        />
    )
}