import './information.styles.scss';
import pdfResume from '../../resume/CV-Alvaro-Morales-Front-End-Developer(English).pdf';

const Information = () => {
    return (
        <section className="section-info" id='AboutSection'>
            <div className='info-container'>
                <div className='title'>About me</div>
                <div className='content'>
                    <li>
                        <span className='arrow-icon' />
                        Bachelor's degree focused in Architecture from Universidad Central de Venezuela.
                    </li>
                    <li>
                        <span className='arrow-icon' />
                        Experienced Senior Project Designer with a demonstrated history of working in Projects and Construction Site.
                    </li>
                    <li>
                        <span className='arrow-icon'/>
                        Strong program and project management professional.
                    </li>
                    <li>
                        <span className='arrow-icon' />
                        More than 8 years experience in Venezuela and 4 years and so in USA specifically in Florida.
                    </li>
                </div>
            </div>

            <div className='info-container'>
                <div className='title'>Resumé</div>
                <div className='content'>
                    <h3 className='resume-sentence'>Check my resumé in the link below.</h3>                                       
                    <a className='resume-link' tabIndex='0' href={pdfResume} target='_blank'>
                        resumé
                        <span className='resume-icon'/>
                    </a>                    
                </div>
            </div>

            <div className='info-container'>
                <div className='title'>Skills</div>
                <div className='content'>
                    <img className='icon-image' src="https://img.icons8.com/fluency/100/autocad.png" alt="autocad" title='Autocad'/>
                    <img className='icon-image' src="https://img.icons8.com/color/144/google-sketchup.png" alt="Sketchup logo" title='Sketchup'/>
                    <img className='icon-image' src="https://img.icons8.com/color/144/000000/adobe-photoshop--v1.png" alt="Photoshop logo" title='Photoshop'/>                    
                    <img className='icon-image' src="https://img.icons8.com/color/144/adobe-illustrator--v1.png" alt="Illustrator Logo" title='Illustrator'/>
                </div>
            </div>
        </section>
    )
}

export default Information;