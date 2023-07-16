import PropTypes from 'prop-types'

const Section = ({title, id, children}) => {
    return (
        <section className='section' id={id} >
            <h2 className='section-title'>{title}</h2>
            <div className="section-body">
                {children}
            </div>
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.element.isRequired,
}

export default Section