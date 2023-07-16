import ProjectCard from "./ProjectCard"

const ProjectCardFrame = () => {
  return (
    <div className="project-frame">

      <ProjectCard
        title='Portfolio Website'
        body={<p>This portfolio website is a testament to my experience in front-end web development. Designed by me using Figma, the site showcases the skills I possess, as well as the projects I have worked on. It was put together using React.js, using CSS for styling. The repository is hosted on GitHub, and the site is deployed using Netlify. The link to the repository can be found <a href="https://github.com/HashMaster02/portfolio">here</a> </p>}
        date="July, 2023"
        tagList={['React', 'Node', 'CSS', 'Figma']}
      />

    </div>
  )
}
export default ProjectCardFrame
