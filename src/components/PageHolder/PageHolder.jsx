import './PageHolder.css';

export default function PageHolder({sectionName = "", title = "", children = {}}) {
  return(
    <section id={sectionName} className='holder-base'>
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