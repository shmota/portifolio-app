import './AboutMe.scss'
import { ABOUT_ME as data } from '../../data/AboutMeData'
import { useEffect, useRef, useState } from 'react'


export default function AboutMe() {
  
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const refs = useRef([]);
  
  useEffect(() => {
    refs.current.forEach((el, index) => {
      if (!el) return;
  
      if (index === openIndex) {
        el.style.height = el.scrollHeight + 'px';
      } else {
        el.style.height = '0px';
      }
    });
  }, [openIndex]);

  return (
    <div className='about-me-base'>
      <div className='about-me-bio'>
        {
          data.map((item, index) => (
            <div className='about-me-section' key={item.title}>
              <p className='about-me-title' onClick={() => toggle(index)}>{item.title}</p>
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