import './AboutMe.scss'
import { ABOUT_ME as data } from '../../data/AboutMeData'
import { useEffect, useRef, useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md';


export default function AboutMe() {
  
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const refs = useRef([]);

  return (
    <div className='about-me-base'>
      <div className='about-me-bio'>
        {
          data.map((item, index) => (
            <div className='about-me-section' key={item.title}>
              <div className='about-me-header'>
                <MdArrowForwardIos className={`about-me-arrow ${openIndex === index ? 'active' : ''}`} alt="Arrow" />
                <p className='about-me-title' onClick={() => toggle(index)}>{item.title}</p>
              </div>
              <p
                ref={(el) => (refs.current[index] = el)}
                className='about-me-text'
                style={{
                  height: openIndex === index
                    ? `${refs.current[index]?.scrollHeight}px`
                    : '0px'
                }}
              >
                {item.text}
              </p>
            </div>
          ))
        }
      </div>

      <div className='about-me-image'>
        <img src="https://avatars.githubusercontent.com/u/47679684?v=4" alt="Profile" className='profile-image' />
      </div>

    </div>
  )
}