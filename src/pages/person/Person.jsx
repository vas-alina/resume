import { PersonContact, PersonImg } from "./components";
import { PersonWrapper } from "../../styles/Person";

export const Person = () => {
  return (
    <>
      <PersonWrapper>
        <PersonImg />
        <h2>Васько Алина</h2>
        <PersonContact />
      </PersonWrapper>
    </>
  );
};
