import './heading.styles.scss';

const Heading = ({ title }) => {
    return (
        <div className='portfolio-heading'>
            <span className="portfolio-title">{title}</span>
            <div className='underlined'/>                
        </div>
    )
};

export default Heading;