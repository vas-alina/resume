
import { Main } from './pages/main/Main'
import { Person } from './pages/person/Person'
import { CiCircleChevUp } from "react-icons/ci";
import { AppWrapper, ButtonScroll } from './styles/App'

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  return(
    <>
    <AppWrapper>
    <Person />
    <Main />
    <ButtonScroll onClick={scrollToTop}><CiCircleChevUp /></ButtonScroll>
    </AppWrapper>
    </>
    
  )
}

export default App
