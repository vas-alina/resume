import {
    PetProject,
  PortfolioContainer,
  Project,
  ProjectDescription,
  ProjectLink,
  ProjectTitle,
} from "../../../../styles/MainPortfolio";

export const MainPortfolio = () => {
    return (
        <PortfolioContainer>
          <h2>Портфолио</h2>
          <Project>
            <ProjectTitle>
              Коммерческий опыт: Интернет магазин для компании Еврострой
            </ProjectTitle>
            <ProjectDescription>
              Так как проект в разработке, его код является собственностью компании.
              Ниже я привела примеры кода
            </ProjectDescription>
          </Project>
          <Project>
            <ProjectTitle>Пет проекты:</ProjectTitle>
            <ProjectDescription>
              Разработка различных проектов для обкатывания VanillaJS и ReactJS
            </ProjectDescription>
            <PetProject>
              <h3>Блог</h3>
              <h4>
                Полноценное Fullstack-приложение для ведения личного блога.
                Использовано: React, Redux, Node.js, Docker, Sequelize, Postgres.
              </h4>
              <ProjectLink
                href="https://github.com/vas-alina/blog-full.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ссылка на GitHub
              </ProjectLink>
            </PetProject>
            <PetProject>
              <h3>TODO LIST</h3>
              <h4>Простое приложение для управления задачами. React, Redux.</h4>
              <ProjectLink
                href="https://github.com/vas-alina/TodoList-react-redux.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ссылка на GitHub
              </ProjectLink>
            </PetProject>
            <PetProject>
              <h3>Лендинг для мед.клиники</h3>
              <h4>Современный лендинг. Использовано: React, Redux, Node.js, Postgres.</h4>
              <ProjectLink
                href="https://github.com/vas-alina/med_clinic.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ссылка на GitHub
              </ProjectLink>
            </PetProject>
            <PetProject>
              <h3>Игра крестики-нолики</h3>
              <h4>Классическая игра, реализованная на React и React + Redux.</h4>
              <ProjectLink
                href="https://github.com/vas-alina/game-app-react-redux.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Версия React + Redux
              </ProjectLink>
              <br />
              <ProjectLink
                href="https://github.com/vas-alina/game-app.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Версия React
              </ProjectLink>
            </PetProject>
          </Project>
        </PortfolioContainer>
      );
//   return (
//     <PortfolioContainer>
//       <h2>Портфолио</h2>
//       <Project>
//         <ProjectTitle>
//           Коммерческий опыт: Интернет магазин для компании Еврострой
//         </ProjectTitle>
//         <ProjectDescription>
//           Так как проект в разработке, его код является собственностью компании.
//           Ниже я привела примеры кода
//         </ProjectDescription>
//       </Project>
//       <Project>
//         <ProjectTitle>Пет проекты:</ProjectTitle>
//         <ProjectDescription>
//           Разработка различных проектов для обкатывания VanillaJS и ReactJS
//         </ProjectDescription>
//         <div>
//             <h3>Блог</h3>
//             <h4>Полноценное fullstack приложения для ведения своего блога. Использованно: react redux nodejs docker sequalize postgres</h4>
//             <a href="https://github.com/vas-alina/blog-full.git">Ссылка на github</a>
//         </div>
//         <div>
//             <h3>TODO LIST</h3>
//             <h4>React redux</h4>
//             <a href="https://github.com/vas-alina/TodoList-react-redux.git">ссылка</a>
//         </div>
//         <div>
//             <h3>Лендинг для мед.клиники</h3>
//             <h4>Технологии React Redux Nodejs Postgres</h4>
//             <a href="https://github.com/vas-alina/med_clinic.git">ссылка</a>
//         </div>
//         <div>
//             <h3>Игра крестики-нолики</h3>
//             <h4>Реализация на React и на React + Redux</h4>
//             <a href="https://github.com/vas-alina/game-app-react-redux.git">ссылка</a>
//             <a href="https://github.com/vas-alina/game-app.git">ссылка</a>
//         </div>
//       </Project>
//     </PortfolioContainer>
//   );
};
