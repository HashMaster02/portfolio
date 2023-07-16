import heroImage from '../assets/images/others/profile pic.jpg'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Hello, <br /> I'm <span>Hashir Shah</span></h1>
                <h2>Computer Science Major and Software Engineer</h2>
                <div className="hero-btns">
                    <a href="#contact" className="btn btn-primary">Contact</a>
                    <a href="#projects" className="btn btn-secondary">Projects</a>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="hashir shah" />
            </div>
        </div>
    )
}
export default Hero