import './PageHolder.scss';

export default function PageHolder({sectionName = "", label = "", title = "", children = {}, innerRef = 0}) {
  return(
    <section 
      id={sectionName} 
      data-label={label}
      ref={innerRef} 
      className='holder-base'>
      {
        title !== "" && (
          <div className='section-title'>
            <h1>{title}</h1>
          </div>
        )
      }
      <div className='section-content'>
        {children}
      </div>
    </section>
  )
}