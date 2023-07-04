import './information.styles.scss';
import autoCadLogo from '../../images/autocad-logo-100.png';
import sketchupLogo from '../../images/Sketchup-logo.png';
import photoshopLogo from '../../images/photoshop-logo-144.png';

const Information = () => {
    return (
        <section className="section-info">
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
                <div className='title'>Resumé</div>
                <div className='content'>
                    <h3 className='resumen-title'>Check my resumé in the link below.</h3>                                       
                    <div className='resume-link'>
                        resumé
                        <span className='resume-icon'/>
                    </div>                    
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