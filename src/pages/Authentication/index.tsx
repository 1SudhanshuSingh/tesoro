import { LoginPage, SignupPage } from "@src/components";
import { useState } from "react";
import { HeaderDrawerHOC } from "@src/HOCs/";
import classes from "./Authentication.module.scss";

const Authentication: React.FC = () => {
  const [isSignupVisible, setIsSignupVisible] = useState<boolean>(false);
  return (
    <>
      <div className={classes.authContainer}>
        {!isSignupVisible && <LoginPage onClickShow={setIsSignupVisible} />}
        {isSignupVisible && <SignupPage onClickShow={setIsSignupVisible} />}
      </div>
    </>
  );
};

export default HeaderDrawerHOC(Authentication);
