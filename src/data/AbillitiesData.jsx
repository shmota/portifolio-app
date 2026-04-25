import { FaCode, FaTools } from 'react-icons/fa'
import { SiFramework } from 'react-icons/si'
import { FiDatabase } from 'react-icons/fi'
import { CiCloud } from 'react-icons/ci'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'

const TYPE = "secondary"

export const ABILITIES = [
  {
    "title": "Linguagens",
    "tags": ["Python", "JavaScript", "Java", "HTML", "CSS"],
    "type": TYPE,
    "icon": <FaCode />
  },
  {
    "title": "Frameworks",
    "tags": ["React", "Flask", "Express"],
    "type": TYPE,
    "icon": <SiFramework />
  },
  {
    "title": "Banco de Dados",
    "tags": ["MySQL", "PostgreSQL"],
    "type": TYPE,
    "icon": <FiDatabase />
  },
  {
    "title": "Nuvem",
    "tags": ["AWS", "Azure"],
    "type": TYPE,
    "icon": <CiCloud />
  },
  {
    "title": "Ferramentas",
    "tags": ["Postman", "Git"],
    "type": TYPE,
    "icon": <FaTools />
  },
  {
    "title": "Padrões e boas práticas",
    "tags": ["RestAPI", "Clean Code", "SOLID"],
    "type": TYPE,
    "icon": <AiOutlineAppstoreAdd />
  }
]