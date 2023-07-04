import Heading from '../heading/heading.component';
import FormComponent from '../form/form.component';

import './contact.styles.scss';

const ContactComponent = () => {
    const title = 'Contact';
    return (
        <section className='contact-container'>
            <Heading title={title} />
            <FormComponent />
        </section>
    )
};

export default ContactComponent;