import React from 'react'
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useHistory,useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({children, ...rest}) => {
    const {AllContexts}= useAuth();
    const {user,loading}= AllContexts;
    if(loading){
        return(
            <div className="my-5 py-5 text-center">
                <Spinner animation="border"  role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
             )
    }

    return (
        <Route
        {...rest}
            render = {({ location })=>
            user.displayName ?(
                 children
             ) : (
            <Redirect
            to={{
                pathname: "/login",
                state:{from:location}
            }}
            
            ></Redirect>)
            }
            >

        </Route>
    )
}

export default PrivateRoute
