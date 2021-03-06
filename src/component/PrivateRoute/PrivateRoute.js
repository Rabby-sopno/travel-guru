import React, { createContext, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { BookingContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {

  const [bookingInfo, setBookingInfo] = useContext(BookingContext)

  return (

    <Route
      {...rest}
      render={({ location }) =>
        (bookingInfo.isSignedIn === true) ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;