import { PropsWithChildren } from "react";
import styles from "./Banner.module.css";

interface Props {
  status: string;
}

const Banner = ({ status, children }: PropsWithChildren<Props>) => {
  return <div className={`${styles[status]} ${styles.banner}`}>{children}</div>;
};

export default Banner;
