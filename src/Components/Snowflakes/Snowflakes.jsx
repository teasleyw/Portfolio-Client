// Snowflake.js
import React from 'react';
import styled, { keyframes } from 'styled-components';


const fallAnimation = keyframes`
  0% {
    transform: translateY(-10vh) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
  }
`;

const SnowflakeWrapper = styled.div`
  position: absolute;
  top: -5px;
  color: white;
  left: ${props => props.left}px;
  animation: ${fallAnimation} ${props => props.duration}s linear infinite;
`;

const SnowflakeIcon = styled.span`
  font-size: 20px;
`;

const Snowflake = ({ left, duration }) => {
  return (
    <SnowflakeWrapper left={left} duration={duration}>
      <SnowflakeIcon>❅</SnowflakeIcon>
    </SnowflakeWrapper>
  );
};

export default Snowflake;