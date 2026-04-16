import './Home.css'
import { HOME } from '../../data/TextData'

export default function Home() {
  return (
    <div className='home-base'>
      <p className='home-title'>{HOME.title}</p>
      <p className='home-subtitle'>{HOME.subtitle}</p>
      <br />
      <p className='home-bio'>{HOME.bio}</p>
      <div className='home-contact'>
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