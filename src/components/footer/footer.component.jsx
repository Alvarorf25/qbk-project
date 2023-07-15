import './footer.styles.scss';

const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <a className='arrow-box' href='/#'>
                <img className='footer-arrow' width="20" height="20" src="https://img.icons8.com/water-color/50/000000/chevron.png" alt="chevron"/>
            </a>
            <p className='name'>rafael partidas <span className='copyrights'>©{currentYear}</span></p>
        </footer>
    )
}

export default FooterSection;