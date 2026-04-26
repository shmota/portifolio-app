import './Home.scss'
import { HOME } from '../../data/HomeData'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='home-base'>
      <p className='home-title'>{HOME.title}</p>
      <p className='home-subtitle'>{HOME.subtitle}</p>
      <br />
      <p className='home-bio'>{HOME.bio}</p>
      <div className='home-contact'>
        <a href={HOME.contact.github} target="_blank" rel="external noreferrer">
          <FaGithub />
        </a>
        <a href={HOME.contact.linkedin} target="_blank" rel="external noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}