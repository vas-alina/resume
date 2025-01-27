import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  BurgerButton,
  BurgerWrapper,
  CodeContainer,
} from "../../../../../styles/BurgerComponent";

export const BurgerComponent = ({ title, code }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <BurgerWrapper>
      
      <BurgerButton onClick={toggleMenu}>
        {isOpen ? "Закрыть" : (<><FaPlus /> {title}</>)}
      </BurgerButton>
      {isOpen && <CodeContainer>{code}</CodeContainer>}
    </BurgerWrapper>
  );
};
