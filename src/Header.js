import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import styles from "./Header.scss";

import { ThemeContext } from "./ThemeContext";

export default function Header(props) {
  const { onToogleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
      {props.children}
      <Button onClick={onToogleTheme}>Trocar Tema</Button>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `Blog`,
};
