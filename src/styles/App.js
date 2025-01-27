import styled from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #202022;
    opacity: 0.8;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;

`
export const ButtonScroll = styled.button`
  position: fixed;
  bottom: 20px; 
  right: 20px; 
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; 
  
  &:hover {
    background-color: #0056b3;
  }
`;