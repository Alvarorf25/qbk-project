import house from '../../images/house1.jpg';

import './card-project.styles.scss';

const CardProject = () => {
    return (
        <div className='card-container'>
            <div className='image-box'>
                <img className='image' src={house} alt='house'/>
            </div>
            <div className='info-project'>
                <h3 className='project-title'>Project Name</h3>
                <p className='description'>project information to be specified</p>
            </div>
        </div>
    )
}

export default CardProject;