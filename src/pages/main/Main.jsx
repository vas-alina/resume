import {
  MainExperience,
  MainInfo,
  MainPortfolio,
  MainSkills,
} from "./components";
import { MainWrapper } from "../../styles/Main";

export const Main = () => {
  return (
    <>
      <MainWrapper>
        <MainInfo />
        <MainSkills />
        <MainExperience />
        <MainPortfolio />
      </MainWrapper>
    </>
  );
};
