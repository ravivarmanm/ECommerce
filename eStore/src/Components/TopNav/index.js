import { useSelector } from "react-redux";
import "./_top-nav.scss";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useState } from "react";
import { gapi } from "gapi-script";

const TopNav = () => {
  const cartItemCount = useSelector((state) => state.cr.totalItems);

  const [userDetails, setUserDetails] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [client_id, setClient_id] = useState(
    "350090437454-ed5agfe844o98jmuj2gmhf8178qbs337.apps.googleusercontent.com"
  );

  const successHandler = async (res) => {
    setUserDetails(res.profileObj);
    console.log(res);
    setIsLoggedIn(true);
  };
  const logoutHandler = (res) => {
    console.log("Logged out successfully");
    console.log(res);
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div className="header bg-dark">
        <div className="row top-nav-row">
          <div className="brand my-1">
            <h1> eStore </h1>
          </div>
          <div className="inp-container p-0 my-4 w-50 h-25 bg-white">
            <div className="dropdown m-0 p-0">
              <select className="select-btn w-100 p-0 m-0">
                <option> Men </option>
                <option> Women </option>
                <option> Kids </option>
              </select>
            </div>
            <input className="form-control " placeholder="Search..." />
            <button>
              {" "}
              <i className="fa fa-search" />{" "}
            </button>
          </div>
          <div className="login-container p-0">
            <i className="fa fa-user-circle user-icon" />
            <h5>
              {isLoggedIn ? (
                <>
                  {userDetails?.name}
                  <GoogleLogout
                    clientId={client_id}
                    buttonText="Logout"
                    onLogoutSuccess={logoutHandler}
                  />
                </>
              ) : (
                <GoogleLogin
                  clientId={client_id}
                  buttonText="Login"
                  onSuccess={successHandler}
                  cookiePolicy="single_host_origin"
                />
              )}
            </h5>
          </div>
          <div className="cart-wishlist">
            <ul className="p-0">
              <li className="list-icon">
                <i className="fa fa-heart" />
              </li>
              <Link to="/cart">
                <li className="list-icon">
                  <i className="fa fa-shopping-cart" />
                  {cartItemCount !== 0 ? (
                    <div id="cart-item-count">
                      <p> {cartItemCount} </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
