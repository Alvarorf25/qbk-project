import logo from './logo.svg';
import Navigation from '../src/components/navigation/navigation.component.jsx';
import Presentation from './components/presentation/presentation.component';

import Information from './components/information/information.component';
import PortfolioSection from './components/portfolio/portfolio.component';
import ContactComponent from './components/contact-section/contact.component';



//import FirstPage from './first-page/first-page';

function App() {
  return (
    <div>      
      <Navigation />
      <Presentation />
      <Information />
      <PortfolioSection />
      <ContactComponent />
    </div>
  );
}

export default App;

/*
  <Navigation />
  <Presentation />
  <FirstPage />  
*/