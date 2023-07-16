import { FaEnvelope, FaPhone, FaLinkedin, FaSquareGithub } from 'react-icons/fa6'
import ContactCard from './ContactCard'

const ContactInfo = () => {
    return (
        <div className="contact-frame">
            <ContactCard icon={<FaEnvelope size={40} />} children={['hashirshah222@gmail.com']} />
            <ContactCard icon={<FaPhone size={40} />} children={['US: 312-998-5441', 'UK: 07933 119784']} />

            <div className="contact-links">
                <a href="https://www.linkedin.com/in/hashirshah/" target='_blank'> <FaLinkedin size={80} /> </a>
                <a href="https://github.com/HashMaster02" target='_blank'> <FaSquareGithub size={80} /> </a>
            </div>
        </div>
    )
}
export default ContactInfo