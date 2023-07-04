import { ReactComponent as Logo } from '../../logo.svg';

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <div className='navigation-container'>            
            <Logo className='logo'/>            
            <div className='navigation-link-container'>
                <a className='nav-link'>HOME</a>
                <a className='nav-link'>ABOUT</a>
                <a className='nav-link'>PORTFOLIO</a>
                <a className='nav-link'>CONTACT</a>
            </div>
        </div>
    )
}

export default Navigation;