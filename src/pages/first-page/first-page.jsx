import './first-page.styles.scss';

import image1 from '../images/ds-png.png';
import image2 from '../images/qbk-img.png';

const FirstPage = () => {
    return (
        <div className='page-container'>      
            <div className='prueba'>
                <img src={image2} className='image2' />
                <div className='line'/>
                <img src={image1} className='image1' />
                <span className='subtitle'>in process...</span>
            </div>
        </div>
    );
}
export default FirstPage;