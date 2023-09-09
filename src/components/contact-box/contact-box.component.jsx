import './contact-box.styles.scss';

import pdfResume from '../../resume/CV-Alvaro-Morales-Front-End-Developer(English).pdf';
import profilePicture from '../../images/profile-picture.jpeg';

const ContactBox = () => {
    return (
        <>
            <img className='profile-picture' src={profilePicture} alt='photo' />
            <div className='contact-box'>
                <p className='contact-primary-text'>
                    If you are interesting in design or redesign your property please fill the form bellow to get in touch.
                    Want to check my work click on <a className='access-link' href='#PortfolioSection'>porfolio</a> and <a className='access-link' tabIndex='0' href={pdfResume} target='_blank'>resume</a>.
                </p>
                <div className='thin-line'/>
                <h3 className='contact-secondary-text'>You can also reach me in my channels</h3>
                <div className='container-contact-logos'>
                    <a href='https://www.linkedin.com/in/rafael-partidas-a20162128/' title='LinkedIn'>
                        <img className='contact-logos' src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"/>
                    </a>                                          
                </div>
                
            </div>
        </>
    )
}

export default ContactBox;