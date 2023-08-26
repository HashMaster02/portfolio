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

      <ProjectCard
        title='Learners Loft'
        body={<p>Through the fusion of Firebase, React.js, and Node.js, I've sculpted a dynamic and engaging blog website called <a href="http://www.learnersloft.org">Learners Loft</a>, that stands as a testament to my skill set in full-stack development. The user experience is at the forefront, manifested through a meticulously crafted front-end developed with React. This design ensures seamless navigation, regardless of device, accessibility, and user satisfaction. CSS is used to make the site responsive and performant on various browsers and devices. The backend is built using Node.js using Google Firebase Firestore as the primary storage solution, guaranteeing efficient data management. The site is deployed using Netlify directly from GitHub, where the <a href="https://github.com/HashMaster02/learners-loft-website">code</a> can be found.</p>}
        date="July-August, 2023"
        tagList={['React', 'Node', 'CSS', 'Firebase', 'Netlify']}
      />

    </div>
  )
}
export default ProjectCardFrame
