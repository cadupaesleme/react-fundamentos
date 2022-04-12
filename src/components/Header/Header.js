import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import styled from "styled-components";

import { ThemeContext } from "../../context/ThemeContext";

const Title = styled.h1`
  color: #637BF3;
`;

export default function Header(props) {
  const { onToogleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
      {props.children}
      <Button onClick={onToogleTheme}>Trocar Tema</Button>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `Blog`,
};
