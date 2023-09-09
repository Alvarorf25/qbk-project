import logo from './logo.svg';
import Navigation from '../src/components/navigation/navigation.component.jsx';
import Presentation from './components/presentation/presentation.component';

import Information from './components/information/information.component';
import PortfolioSection from './components/portfolio/portfolio.component';
import ContactComponent from './components/contact-section/contact.component';
import FooterSection from './components/footer/footer.component';

import './index.scss';


//import FirstPage from './pages/first-page/first-page.jsx';

function App() {
  return (
    <div>      
      <Navigation />
      <Presentation />
      <Information />
      <PortfolioSection />
      <ContactComponent />
      <FooterSection />
    </div>
  );
}

export default App;

/*  
  <FirstPage />  
*/