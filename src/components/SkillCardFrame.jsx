import SkillCard from './SkillCard'
import cssImage from '../assets/images/skill icons/css.svg'
import htmlImage from '../assets/images/skill icons/html.svg'
import jsImage from '../assets/images/skill icons/javascript.svg'
import javaImage from '../assets/images/skill icons/java.svg'
import pythonImage from '../assets/images/skill icons/python.svg'
import reactImage from '../assets/images/skill icons/react.svg'
import nodeImage from '../assets/images/skill icons/nodejs.svg'

const SkillCardFrame = () => {
  return (
    <div className="skill-frame">
        <SkillCard icon={javaImage} skillName='java' />
        <SkillCard icon={pythonImage} skillName='python' />
        <SkillCard icon={reactImage} skillName='react' />
        <SkillCard icon={nodeImage} skillName='node' />
        <SkillCard icon={jsImage} skillName='JavaScript' />
        <SkillCard icon={htmlImage} skillName='HTML' />
        <SkillCard icon={cssImage} skillName='CSS' />
    </div>
  )
}
export default SkillCardFrame