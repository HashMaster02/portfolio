import resume from '../assets/resources/Resume.pdf';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <a href={resume}>
                        <li className="btn-nav">Resume</li>
                    </a>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
