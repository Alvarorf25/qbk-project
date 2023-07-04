import CardProject from '../card-project/card-project.container';
import Heading from '../heading/heading.component';

import './portfolio.styles.scss'

const PortfolioSection = () => {
    const title = 'Portfolio';
    return (
        <section className='portfolio-section'>
            <Heading title={title} />
            <CardProject />
            <CardProject />  
            <CardProject />           
        </section>
    )
};

export default PortfolioSection;