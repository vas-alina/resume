import { ContactLink, ContactWrapper } from "../../../../styles/PersonContact";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const PersonContact = () => {
  return (
    <ContactWrapper>
      <ContactLink>Способы связи:</ContactLink>
      <ContactLink
        href="mailto:vasalina93@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosMail /> vasalina93@gmail.com
      </ContactLink>
      <ContactLink
        href="https://github.com/vas-alina"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> vas-alina
      </ContactLink>
      <ContactLink
        href="https://t.me/alinavasalina"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegramPlane /> @alinavasalina
      </ContactLink>
    </ContactWrapper>
  );
};
