import styled from "styled-components";

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 15px; 
`;

export const ContactLink = styled.a`
    color: #555; 
    font-size: 20px; 
    transition: color 0.3s;
    text-decoration: none;

    &:hover {
        color: #0073e6; 
    }
`;