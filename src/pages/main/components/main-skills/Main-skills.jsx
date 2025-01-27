import { useState } from "react";
import { skillsData } from "../../../../data/skillsData";
import {
  SkillBox,
  SkillDetails,
  SkillsContainer,
  SkillsGrid,
} from "../../../../styles/MainSkills";

export const MainSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill((prev) => (prev === skill ? null : skill));
  };
  return (
    <SkillsContainer>
      <h2>Hard & Soft Skills</h2>
      <h4>(нажми на скилл, чтобы узнать подробнее)</h4>
      <SkillsGrid>
        {skillsData.map((skill) => (
          <SkillBox key={skill.name} onClick={() => handleSkillClick(skill)}>
            {skill.name}
          </SkillBox>
        ))}
      </SkillsGrid>
      {selectedSkill && (
        <SkillDetails>
          <h3>{selectedSkill.name}</h3>
          <p>{selectedSkill.details}</p>
        </SkillDetails>
      )}
    </SkillsContainer>
  );
};
