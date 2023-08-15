import './contact-box.styles.scss';
import pdfResume from '../../resume/CV-Alvaro-Morales-Front-End-Developer(English).pdf';

const ContactBox = () => {
    return (
        <div className='contact-box'>
            <p className='contact-text'>
                If you are interesting in design or redesign your property please fill the form bellow to get in touch.
                Want to check my work click on <a className='access-link' href='#PortfolioSection'>porfolio</a> and <a className='access-link' tabIndex='0' href={pdfResume} target='_blank'>resume</a>.
            </p>
            <div className='thin-line'/>
        </div>
    )
}

export default ContactBox;