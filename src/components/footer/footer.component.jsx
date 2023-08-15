import './footer.styles.scss';

const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    return (
        <footer className='footer'>
            <div className='arrow-box' onClick={scrollToTop}>
                <img className='footer-arrow' width="20" height="20" src="https://img.icons8.com/water-color/50/000000/chevron.png" alt="chevron"/>
            </div>
            <p className='name'>rafael partidas <span className='copyrights'>©{currentYear}</span></p>
        </footer>
    )
}

export default FooterSection;