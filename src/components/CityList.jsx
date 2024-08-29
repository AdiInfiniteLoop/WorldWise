import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
import React from "react";
import PropTypes from "prop-types";

CityList.propTypes = {
  cities: PropTypes.object,
  isloading: PropTypes.bool,
};
function CityList({ cities, isloading }) {
  if (isloading) return <Spinner />;
  console.log(cities);
  return <ul className={styles.cityList}>ds</ul>;
}

export default CityList;
