import React from "react";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import classes from "./SSOButtons.module.scss";

type Props = {
  onSuccess: (response: GoogleLoginResponse) => void;
  onFailure: (response: any) => void;
};

const GoogleLoginButton: React.FC<Props> = ({ onSuccess, onFailure }) => {
  const clientId = "YOUR_GOOGLE_CLIENT_ID";

  const handleGoogleResponse = (response: GoogleLoginResponse) => {
    onSuccess(response);
  };

  const handleGoogleFailure = (error: any) => {
    onFailure(error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={() => handleGoogleResponse}
      onFailure={handleGoogleFailure}
      className={classes.googleButton}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
