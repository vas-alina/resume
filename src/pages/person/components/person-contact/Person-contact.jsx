import { ContactLink, ContactWrapper } from "../../../../styles/PersonContact";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const PersonContact = () => {
  return (
    <ContactWrapper>
      <ContactLink><span>Способы связи:</span></ContactLink>
      <ContactLink
        href="mailto:vasalina93@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosMail /> <span>vasalina93@gmail.com</span>
      </ContactLink>
      <ContactLink
        href="https://github.com/vas-alina"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> <span>vas-alina</span>
      </ContactLink>
      <ContactLink
        href="https://t.me/alinavasalina"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegramPlane /> <span>@alinavasalina</span> 
      </ContactLink>
    </ContactWrapper>
  );
};
