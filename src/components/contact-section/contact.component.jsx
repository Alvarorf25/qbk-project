import Heading from '../heading/heading.component';
import FormComponent from '../form/form.component';
import ContactBox from '../contact-box/contact-box.component';

import './contact.styles.scss';

const ContactComponent = () => {
    const title = 'Contact';
    return (
        <section className='contact-container' id='ContactSection'>
            <Heading title={title} />
            <ContactBox />
            <FormComponent />
        </section>
    )
};

export default ContactComponent;