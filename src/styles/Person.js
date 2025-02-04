import styled from "styled-components";

export const PersonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;  

    @media (max-width: 768px) {
    display: flex;
    align-items: center; 
    width: 100%;
    }
`