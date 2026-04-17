import './Card.css'
import linkIcon from '../../assets/general-icons/linkIcon.png'

export default function Card({ title = "", tags = [], type = "", img = "", link = "", description = "" }) {
  
  return (
    <div className={`card-base ${type}`}>
      <div className={"card-header"}>
        <img src={img} alt={`${title} preview`} loading="lazy" />
        <p>{title}</p>
      </div>
      <div className={`card-body ${type}`}>
        {type === "primary" && (
            <p className='card-description'>{description}</p>
          )
        }
        <div className={`card-tags-holder ${type}`}>
          {tags.map((item) => (
            <div key={item} className={`card-tag`}>
              {item}
            </div>
          ))}
        </div>
        {type === "primary" && (
          <div className={`card-link-holder`}>
            <img src={linkIcon} alt="Link icon" loading="lazy" />
            <a href={link} target="_blank" rel="noreferrer noopener">
              Acessar projeto
            </a>
          </div>
        )}
      </div>
    </div>
  )
}