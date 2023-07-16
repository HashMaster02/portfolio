import PropTypes from 'prop-types'

const SkillCard = ({icon, skillName}) => {
    return (
        <div className="skill-card">
            <div className="skill-logo">
                <img src={icon} alt="skill logo" />
            </div>
            <p>{skillName}</p>
        </div>
    )
}

SkillCard.propTypes = {
    skillName: PropTypes.string.isRequired,
}

export default SkillCard