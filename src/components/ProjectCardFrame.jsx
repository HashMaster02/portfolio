import ProjectCard from './ProjectCard';

const ProjectCardFrame = () => {
    return (
        <div className="project-frame">
            <ProjectCard
                title="Pinboard"
                body={
                    <p>
                        <a href="https://project-pinboard.netlify.app/">
                            Pinboard
                        </a>{' '}
                        helps college students keep track of their assignments
                        in one place and ensure they never miss a deadline.
                        React's component-based architecture made it easy to
                        quickly implement the UI of the application, shrinking
                        development time. Its state management features meant I
                        could handle state change in a predictable manner
                        leading to a more maintainable and robust app. It's rich
                        ecosystem of libraries allowed me to implement routing,
                        quickly import icons, and integrate with Firebase much
                        faster. Tailwind was used due to its declarative,
                        utility-first nature, allowing rapid prototyping of
                        responsive UI elements. Tailwind generates an optimized
                        CSS output file resulting in increased performance over
                        the web. Firestore's real-time capabilities allows for
                        instantly updating app state upon user interaction
                        resulting in a fluid user experience. The NoSQL cloud
                        database automatically scales to handle large amounts of
                        data and concurrent users if needed and can efficiently
                        handle read and write operations without manual sharding
                        or configuration. Firebase authentication provides a way
                        to authenticate users using multiple services including
                        Google, Github or simple email and password, and
                        integrates seamlessly with Firestore. The link to the
                        repo can be found{' '}
                        <a href="https://github.com/HashMaster02/pinboard">
                            here
                        </a>
                        .
                    </p>
                }
                date="December, 2023"
                tagList={['React', 'Tailwind', 'Firebase', 'Node']}
            />

            <ProjectCard
                title="Learners Loft"
                body={
                    <p>
                        Through the fusion of Firebase, React.js, and Node.js,
                        I've sculpted a dynamic and engaging blog website called{' '}
                        <a href="http://www.learnersloft.org">Learners Loft</a>,
                        that stands as a testament to my skill set in full-stack
                        development. The user experience is at the forefront,
                        manifested through a meticulously crafted design in
                        Figma, and a front-end developed with React. This design
                        ensures seamless navigation, regardless of device,
                        accessibility, and user satisfaction. CSS is used to
                        make the site responsive and performant on various
                        browsers and devices. The backend is built using Node.js
                        using Google Firebase Firestore as the primary storage
                        solution, guaranteeing efficient data management. The
                        site is deployed using Netlify directly from GitHub,
                        where the{' '}
                        <a href="https://github.com/HashMaster02/learners-loft-website">
                            code
                        </a>{' '}
                        can be found.
                    </p>
                }
                date="June, 2023 - August, 2023"
                tagList={[
                    'React',
                    'Node',
                    'CSS',
                    'Firebase',
                    'Netlify',
                    'Figma',
                ]}
            />

            <ProjectCard
                title="Portfolio Website"
                body={
                    <p>
                        This portfolio website is a testament to my experience
                        in front-end web development. Designed by me using
                        Figma, the site showcases the skills I possess, as well
                        as the projects I have worked on. It was put together
                        using React.js, using CSS for styling. The repository is
                        hosted on GitHub, and the site is deployed using
                        Netlify. The link to the repository can be found{' '}
                        <a href="https://github.com/HashMaster02/portfolio">
                            here
                        </a>{' '}
                    </p>
                }
                date="July, 2023"
                tagList={['React', 'Node', 'CSS', 'Figma']}
            />
        </div>
    );
};
export default ProjectCardFrame;
