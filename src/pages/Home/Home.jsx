import './Home.css'
import { HOME } from '../../data/TextData'

export default function Home() {
  return (
    <div class='home-base'>
      <p class='home-title'>{HOME.title}</p>
      <p class='home-subtitle'>{HOME.subtitle}</p>
      <br />
      <p class='home-bio'>{HOME.bio}</p>
      <div class='home-contact'>
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