import styled from "styled-components";

export const BurgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
`;


export const BurgerButton = styled.button`
  width: 100%;
  background: #30323a;
  color: #ffffff;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #007bff;
  }
`;


export const CodeContainer = styled.pre`
  margin-top: 10px;
  padding: 15px;
  background: #f4f4f4;
  color: #333;
  border-radius: 8px;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.9rem;
  white-space: pre-wrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;