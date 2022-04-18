import logo from './logo.svg';
//import Navigation from '../src/components/navigation/navigation.component.jsx';
//import Presentation from './components/presentation/presentation.component';

//import ConstructionPage from './construction-page/construction-page.component';

import './App.scss';

import image1 from './images/ds-png.png';
import image2 from './images/qbk-img.png';



function App() {
  return (
    <div className='App'>      
      <div className='prueba'>
        <img src={image2} className='image2' />
        <div className='line'/>
        <img src={image1} className='image1' />
        <span className='subtitle'>in process...</span>
      </div>
    </div>
  );
}

export default App;

/*
  <Navigation />
  <Presentation />
*/