import CodingIcon from '../assets/card-icons/coding-icon.png'
import FrameIcon from '../assets/card-icons/frame-icon.png'
import DatabaseIcon from '../assets/card-icons/database-icon.png'
import CloudIcon from '../assets/card-icons/cloud-icon.png'
import ToolsIcon from '../assets/card-icons/tools-icon.png'
import OthersIcon from '../assets/card-icons/others-icon.png'

const TYPE = "secondary"

export const ABILITIES = [
  {
    "title": "Linguagens",
    "tags": ["Python", "JavaScript", "Java", "HTML", "CSS"],
    "type": TYPE,
    "img": CodingIcon
  },
  {
    "title": "Frameworks",
    "tags": ["React", "Flask", "Express"],
    "type": TYPE,
    "img": FrameIcon
  },
  {
    "title": "Banco de Dados",
    "tags": ["MySQL", "PostgreSQL"],
    "type": TYPE,
    "img": DatabaseIcon
  },
  {
    "title": "Nuvem",
    "tags": ["AWS", "Azure"],
    "type": TYPE,
    "img": CloudIcon
  },
  {
    "title": "Ferramentas",
    "tags": ["Postman", "Git"],
    "type": TYPE,
    "img": ToolsIcon
  },
  {
    "title": "Padrões e boas práticas",
    "tags": ["RestAPI", "Clean Code", "SOLID"],
    "type": TYPE,
    "img": OthersIcon
  }
]