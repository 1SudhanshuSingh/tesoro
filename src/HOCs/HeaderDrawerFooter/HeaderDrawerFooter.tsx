import React, { FunctionComponent, useState } from "react";
import { Header, SideDrawer } from "@src/components/";

type HeaderDrawerHOCProps = {
  // Props for the component being wrapped
};

const HeaderDrawerHOC = <P extends HeaderDrawerHOCProps>(
  WrappedComponent: FunctionComponent<P>
): FunctionComponent<P> => {
  const HeaderDrawerHOC: FunctionComponent<P> = (props) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    return (
      <>
        <Header setOpen={setOpen} isOpen={isOpen} />
        <SideDrawer isOpen={isOpen} setOpen={setOpen} />
        <WrappedComponent {...props} />
      </>
    );
  };

  return HeaderDrawerHOC;
};

export default HeaderDrawerHOC;
