import styled from "styled-components";

export const SkillsContainer = styled.div`
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SkillsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;


`;

export const SkillBox = styled.div`
    border-radius: 12px;
    padding: 10px 15px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #e0e0e0;
        transform: scale(1.05);
    }

`;

export const SkillDetails = styled.div`
    margin-top: 10px;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;