import React from "react";
import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";

type Props = {
  onSuccess: (response: ReactFacebookLoginInfo) => void;
  onFailure: (response: ReactFacebookLoginInfo) => void;
};

const FacebookLoginButton: React.FC<Props> = ({ onSuccess, onFailure }) => {
  const appId = "YOUR_FACEBOOK_APP_ID";

  const handleFacebookResponse = (response: ReactFacebookLoginInfo) => {
    if (response.accessToken) {
      onSuccess(response);
    } else {
      onFailure(response);
    }
  };

  return (
    <FacebookLogin
      appId={appId}
      fields="name,email,picture"
      callback={handleFacebookResponse}
      buttonStyle={{ width: "100%", padding: "1rem 0.75rem", fontSize: "16px" }}
      containerStyle={{ display: "block" }}
    />
  );
};

export default FacebookLoginButton;
