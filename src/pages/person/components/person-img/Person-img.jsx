import { Image, PersonImgWrapper } from "../../../../styles/PersonImg";
import AVATAR from "../../../../assets/avatar.jpg";

export const PersonImg = () => {
  return (
    <>
      <PersonImgWrapper>
        <Image src={AVATAR} alt="Your Name" />
      </PersonImgWrapper>
    </>
  );
};
