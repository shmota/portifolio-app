import './PageHolder.scss';

export default function PageHolder({sectionName = "", label = "", labelIsTitle = "", children = {}, innerRef = 0}) {
  return(
    <section 
      id={sectionName} 
      data-label={label}
      ref={innerRef} 
      className={`holder-base`}>
      {
        (labelIsTitle === true) && (
          <div className='section-title'>
            <p>{label}</p>
          </div>
        )
      }
      <div className='section-content'>
        {children}
      </div>
    </section>
  )
}