import React from "react";
import styles from "./loadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles["loading-spinner"]}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
