import { PersonContact, PersonImg } from "./components";
import { PersonWrapper } from "../../styles/Person";

export const Person = () => {
  return (
    <>
      <PersonWrapper>
        <PersonImg />
        <PersonContact />
      </PersonWrapper>
    </>
  );
};
