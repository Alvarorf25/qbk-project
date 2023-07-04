import './form.styles.scss';

const FormComponent = () => {
    return (
        <form className='form' action="https://formsubmit.co/your@email.com" method="POST">
            <div className='form-names'>
                <input className='input-names' type="text" name="firstName" placeholder='First Name' required />
                <input className='input-names' type="text" name="lastName" placeholder='Last Name' required />
            </div>
            <input className='input-email' type="email" name="email" placeholder='Email address' required />
            <textarea rows='5' className='input-message' type="text" name="message" placeholder='Message' required />
            <button type="submit">Send</button>
        </form>
    )
};

export default FormComponent;