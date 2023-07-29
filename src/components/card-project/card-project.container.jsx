import './card-project.styles.scss';

const CardProject = ({title, img, description}) => {
    return (
        <div className='card-container'>
            <div className='image-box'>
                <img className='image' src={img} alt={title} />
            </div>
            <div className='info-project'>
                <h3 className='project-title'>{title}</h3>
                <p className='description'>{description}</p>
            </div>
        </div>
    )
}

export default CardProject;