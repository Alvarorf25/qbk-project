import { ReactComponent as Logo } from '../../logo.svg';

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <div className='navigation-container'>            
            <Logo className='logo'/>            
            <div className='navigation-link-container'>
                <a className='nav-link' href='#'>HOME</a>
                <a className='nav-link' href='#AboutSection'>ABOUT</a>
                <a className='nav-link' href='#PortfolioSection'>PORTFOLIO</a>
                <a className='nav-link' href='#ContactSection'>CONTACT</a>
            </div>
        </div>
    )
}

export default Navigation;