import { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Mainlayout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Header {...props}/>
      {children}
      <Footer {...props}/>
    </Fragment>
  );
};

export default Mainlayout;
