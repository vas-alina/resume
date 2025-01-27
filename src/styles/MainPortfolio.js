import styled from "styled-components";

export const PortfolioContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Project = styled.div`
  margin-bottom: 20px;
  padding: 20px;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.h4`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`;

export const ProjectLink = styled.a`
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PetProject = styled.div`

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;