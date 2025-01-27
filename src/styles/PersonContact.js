import styled from "styled-components";

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 15px; 
`;

export const ContactLink = styled.a`
    color: #555; 
    font-size: 24px; 
    transition: color 0.3s;

    &:hover {
        color: #0073e6; 
    }
`;