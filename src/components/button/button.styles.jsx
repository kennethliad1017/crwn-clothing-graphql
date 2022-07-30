import styled from "styled-components";

export const NormalButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignButton = styled.button`
  display: flex;
  justify-content: center;
  width: auto;
  height: 50px;
  min-width: 165px;
  padding: 0 35px 0 35px;
  background-color: #4285f4;
  font-family: "Open Sans Condensed";
  font-size: 15px;
  font-weight: bolder;
  line-height: 50px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled.button`
  display: flex;
  justify-content: center;
  width: auto;
  height: 50px;
  min-width: 165px;
  padding: 0 35px 0 35px;
  background-color: white;
  font-family: "Open Sans Condensed";
  font-size: 15px;
  font-weight: bolder;
  line-height: 50px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: black;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
