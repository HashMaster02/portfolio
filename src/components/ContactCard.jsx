import PropType from 'prop-types'

const ContactCard = ({ icon, children }) => {
    return (
        <div className="contact-card">
            {icon}
            {children.map( (item) => <p>{item}</p> )}
        </div>
    )
}

ContactCard.propType = {
    icon: PropType.element,
    children: PropType.array.isRequired,
}

export default ContactCard