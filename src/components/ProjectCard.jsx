
import PropTypes from 'prop-types'

const ProjectCard = ({title, body, date, tagList }) => {
    return (
        <div className="project-card">
            <div className="project-description">
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="skill-list">
                    <ul>
                        {tagList.map( (tag) => <li>{tag}</li> )}
                    </ul>
                </div>
            </div>
            <p className="date">{date}</p>
        </div>
    )
}

ProjectCard.defaultProps = {
    title: 'Project Title',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ratione quisquam, eaque ut vero laboriosam consequatur sunt corporis qui excepturi illo totam minima culpa tempora reprehenderit dolore ipsam est amet. Itaque fugiat velit quibusdam corrupti ullam optio nemo minima cumque maxime repellat, at, odio sunt dolor exercitationem est, animi reprehenderit!',
    date: 'May - June, 2019' ,
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
    tagList: PropTypes.array
}



export default ProjectCard