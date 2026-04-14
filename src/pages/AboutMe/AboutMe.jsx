import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className='about-me-base'>
      <div className="about-me-text">
        <p className='about-me-title'>About Me</p>
        <p className='about-me-bio'>I am a software developer with a passion for creating innovative solutions to complex problems. 
          I have experience in a variety of programming languages and frameworks, and I am always eager to learn new technologies. 
          In my free time, I enjoy hiking, cooking, and spending time with my family.</p>
      </div>

      <div className="about-me-image">
        <img src="https://avatars.githubusercontent.com/u/105419441?v=4" alt="Profile" className='profile-image' />
      </div>
      
    </div>
  )
}