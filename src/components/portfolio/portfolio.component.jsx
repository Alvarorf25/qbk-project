import CardProject from '../card-project/card-project.container';
import Heading from '../heading/heading.component';
import data from '../../data';

import './portfolio.styles.scss'

const PortfolioSection = () => {
    

    const title = 'Portfolio';
    return (
        <section className='portfolio-section'>
            <Heading title={title} />
            {
                data.map(project => {
                    return (
                        <CardProject id={project.id} {...project} />
                    )
                })
            }         
        </section>
    )
};

export default PortfolioSection;