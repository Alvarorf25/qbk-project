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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus suscipit hic veritatis quos.
                    </li>
                    <li>
                        <span className='arrow-icon' />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam laboriosam optio dicta ullam.
                    </li>
                    <li>
                        <span className='arrow-icon'/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dolor illo.
                    </li>
                    <li>
                        <span className='arrow-icon' />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laboriosam.
                    </li>
                </div>
            </div>

            <div className='info-container'>
                <div className='resume-title'>Resumé</div>
                <div className='resume-content'>
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