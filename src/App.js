import Section from "./components/Section"
import Header from "./components/Header"
import Hero from "./components/Hero"
import TextBlock from "./components/TextBlock"
import SkillCardFrame from "./components/SkillCardFrame"
import ProjectCardFrame from "./components/ProjectCardFrame"
import ContactInfo from './components/ContactInfo'

function App() {
  return (
    <>
      <Header />
      <div className="container">

        <Section children={<Hero />} />
        <Section title='About' id='about' children={
          <TextBlock children={
          ['Dedicated prospective software engineer with a burning passion for learning. I dedicate my time and energy to being as informed and up to date about the tools and practices in my field by studying intensely and mastering my ability to consume, assimilate and apply new information in short periods of time.',
          'Additionally, I have a deep-rooted interest in productivity and consider myself a philomath. I have helped countless people in my life achieve academic success and unlock their potential to learn and grow their skillset and adopt a growth mindset.',
          'I am currently studying at Illinois Institute of Technology in Chicago and am available for internships in summer in both the US and the UK.']}/>
        } />
        <Section title='Skills' id='skills' children={<SkillCardFrame />} />
        <Section title='Projects' id='projects' children={<ProjectCardFrame />} />
        <Section title='Contact' id='contact' children={<ContactInfo />} />

      </div>
    </>
  )
}
export default App
