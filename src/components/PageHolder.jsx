import './PageHolder.css';

export default function PageHolder({sectionName = "", title = "", children = {}}) {
  return(
    <section id={sectionName}>
      {
        title !== "" && (
          <div className='title'>
            <h1>{title}</h1>
          </div>
        )
      }
      <div className='content'>
        {children}
      </div>
    </section>
  )
}