import './Home.css'
import { HOME } from '../data/TextData'

export default function Home() {
  return (
    <div className='home-base'>
      <p id='title'>{HOME.title}</p>
      <p id='subtitle'>{HOME.subtitle}</p>
      <br />
      <p id='bio'>{HOME.bio}</p>
      <div id='contact'>
        <a href={HOME.contact.github} target="_blank" rel="external noreferrer">
          <img src={HOME.contact.githubIcon} alt="GitHub" />
        </a>
        <a href={HOME.contact.linkedin} target="_blank" rel="external noreferrer">
          <img src={HOME.contact.linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  )
}