import { ReactComponent as Logo } from '../../logo.svg';

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <div className='navigation-container'>            
            <Logo className='logo'/>            
            <div className='navigation-link-container'>
                <a>HOME</a>
                <a>ABOUT</a>
                <a>PORTFOLIO</a>
                <a>CONTACT</a>
            </div>
        </div>
    )
}

export default Navigation;