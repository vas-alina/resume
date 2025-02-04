import styled from "styled-components";

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    gap: 15px; 

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
    }
`;

export const ContactLink = styled.a`
    color: #555; 
    font-size: 20px; 
    transition: color 0.3s;
    text-decoration: none;

    &:hover {
        color: #0073e6; 
    }

    @media (max-width: 768px) {
    span {
      display: none; 
    }
  }
`;