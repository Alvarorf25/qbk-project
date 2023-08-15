import CardProject from '../card-project/card-project.container';
import Heading from '../heading/heading.component';
import data from '../../data';

import './portfolio.styles.scss'

const PortfolioSection = () => {
    

    const title = 'Portfolio';
    return (
        <section className='portfolio-section' id='PortfolioSection'>
            <Heading title={title} />
            {
                data.map(project => {
                    return (
                        <CardProject key={project.id} {...project} />
                    )
                })
            }         
        </section>
    )
};

export default PortfolioSection;