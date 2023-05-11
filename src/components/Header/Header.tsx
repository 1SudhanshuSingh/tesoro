import { Container, Row, Col, Image, Navbar, Button } from "react-bootstrap";
import classes from "./Header.module.scss";
import Hamburger from "hamburger-react";
import { Dispatch, SetStateAction } from "react";
import { CiSearch } from "react-icons/ci";
import {
  IoBagHandleOutline,
  IoHeartOutline,
  IoSearchOutline,
  IoPersonOutline,
} from "react-icons/io5";
import router from "next/router";

interface HeaderProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}
const Header: React.FC<HeaderProps> = ({ setOpen, isOpen }) => {
  return (
    <Navbar fixed="top">
      <Container fluid className={classes.header}>
        <Row className="w-100 py-2">
          <Col xs={3} className="d-flex">
            <Hamburger toggled={isOpen} toggle={setOpen} duration={1.5} />
            <Image
              src="./logo/tesoroLogoTransparent.png"
              alt="tesoro logo"
              className={classes.logo}
              onClick={() => router.push("/")}
            />
          </Col>
          <Col xs={9}>
            <div className="d-flex justify-content-end">
              <div className="d-none d-lg-block">
                <CiSearch size={24} className={classes.searchIcon} />
                <input
                  type="search"
                  placeholder="Search"
                  className={classes.searchInput}
                />
                <Button
                  variant="light"
                  className={classes.headerBtn}
                  onClick={() => router.push("/Authentication")}
                >
                  LOG IN
                </Button>
                <Button variant="light" className={classes.headerBtn}>
                  HELP
                </Button>
              </div>
              <IoSearchOutline
                size={24}
                className={`d-lg-none d-block ${classes.bagBtn}`}
              />
              <IoPersonOutline
                size={24}
                onClick={() => router.push("/Authentication")}
                className={`d-lg-none d-block ${classes.bagBtn}`}
              />
              <IoBagHandleOutline
                size={24}
                className={classes.bagBtn}
                onClick={() => router.push("/Cart")}
              />
              <IoHeartOutline
                size={24}
                className={classes.bagBtn}
                onClick={() => router.push("/WishList")}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
