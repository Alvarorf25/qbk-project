import { useState } from 'react';

import './form.styles.scss';

const FormComponent = () => {

    const [person, setPerson] = useState({ firstName: '', lastName: ''});    

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    };

    return (
        <form className='form' action="https://formsubmit.co/morales.alvarorf@gmail.com" method="POST">
            <input type="hidden" name="_subject" value={`New email from ${person.firstName} ${person.lastName}!`} />
            <input type="hidden" name="_captcha" value="true" />
            <div className='form-names'>
                <input className='input-names' 
                    type="text"
                    name="firstName" 
                    value={person.firstName}
                    onChange={handleChange}
                    placeholder='First Name' required 
                />
                <input className='input-names' 
                    type="text" 
                    name="lastName" 
                    value={person.lastName}
                    onChange={handleChange} 
                    placeholder='Last Name' required 
                />
            </div>
            <input className='input-email' type="email" name="email" placeholder='Email address' required />
            <textarea className='input-message' rows='5' type="text" name="message" placeholder='Message' required />
            <button className='btn' type="submit">Send</button>
        </form>
    )
};

export default FormComponent;