import React, { Dispatch, SetStateAction, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import classes from "./SideDrawer.module.scss";
import Hamburger from "hamburger-react";
import { Image, ListGroup } from "react-bootstrap";
import {
  DrawerCategoryType,
  drawerSubCategory,
} from "@src/constants/drawerCategory";
import Link from "next/link";

interface SideDrawerProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}
const SideDrawer: React.FC<SideDrawerProps> = ({ setOpen, isOpen }) => {
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={() => setOpen}
        direction="left"
        className={classes.drawer}
      >
        <>
          <div className="d-flex justify-content-end">
            <Hamburger toggled={isOpen} toggle={setOpen} duration={1.5} />
          </div>
          <div className="w-50 mx-auto">
            <Image
              src="./logo/tesoroLogoTransparent.png"
              alt="tesoro logo"
              className="img-fluid"
            />
          </div>
          <div>
            <ListGroup horizontal className="mb-3">
              <ListGroup.Item className={classes.mainCategory}>{DrawerCategoryType.MAN}</ListGroup.Item>
              <ListGroup.Item className={classes.mainCategory}>{DrawerCategoryType.WOMAN}</ListGroup.Item>
              <ListGroup.Item className={classes.mainCategory}>{DrawerCategoryType.KIDS}</ListGroup.Item>
              <ListGroup.Item className={classes.mainCategory}>{DrawerCategoryType.BEAUTY}</ListGroup.Item>
            </ListGroup>
            <ListGroup>
              {drawerSubCategory.map((item) => (
                <ListGroup.Item className={classes.categoryItems}>
                  <Link href="/Listing">{item}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </>
      </Drawer>
    </>
  );
};

export default SideDrawer;
