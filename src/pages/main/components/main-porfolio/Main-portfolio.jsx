import { codeExamplesData } from "../../../../data/codeExamplesData";
import {
    PetProject,
  PortfolioContainer,
  Project,
  ProjectDescription,
  ProjectLink,
  ProjectTitle,
} from "../../../../styles/MainPortfolio";
import { BurgerComponent } from "./component/BurgerComponent";

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
              Ниже я привела примеры кода, написанного мной в рамках проекта
            </ProjectDescription>
            <BurgerComponent title="Store" code={codeExamplesData.store} />
            <BurgerComponent title="Логика авторизации" code={codeExamplesData.auth} />
            <BurgerComponent title="Утилита для выполнения запросов" code={codeExamplesData.request} />
            <BurgerComponent title="Один из переиспользуемых компонентов" code={codeExamplesData.icon} />
            <BurgerComponent title="Action creator с асинхронной логикой" code={codeExamplesData.addProduct} />
            <BurgerComponent title="Модель корзины для БД" code={codeExamplesData.cart} />
            <BurgerComponent title="Route handler для API-сервера, написанного на Node.js с использованием фреймворка Express" code={codeExamplesData.login} />
          </Project>
          <Project>
            <ProjectTitle>Пет проекты:</ProjectTitle>
            <ProjectDescription>
              Разработка различных проектов для обкатывания VanillaJS и ReactJS
            </ProjectDescription>
            <PetProject>
              <h3>Этот сайт</h3>
              <h4>
                Использовала React и его хуки
              </h4>
              <ProjectLink
                href="https://github.com/vas-alina/blog-full.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ссылка на GitHub
              </ProjectLink>
            </PetProject>
            <hr></hr>
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
            <hr></hr>
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
            <hr></hr>
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
            <hr></hr>
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
};
