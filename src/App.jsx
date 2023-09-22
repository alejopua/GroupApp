import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Form } from './components/Form/Form'
import { Header } from './components/Header/Header'
import { MiOrg } from './components/MiOrg/MiOrg'
import { TeamsApp } from './components/TeamsApp/TeamsApp'
import { Footer } from './components/Footer/Footer'

function App() {
  const [show, setShow] = useState(true)
  const [conPartners, setConPartners] = useState([
      {
        "id": uuid(),
        "like": false,
        "name": "Alejandro Ramirez",
        "position": "Front Developer",
        "photo": "https://i.pravatar.cc/150?img=13",
        "team": "Front-End"
      },
      {
        "id": uuid(),
        "like": false,
        "name": "Emma Johnson",
        "position": "Backend Developer",
        "photo": "https://i.pravatar.cc/150?img=21",
        "team": "Programming"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Daniel Lee",
        "position": "Data Scientist",
        "photo": "https://i.pravatar.cc/150?img=12",
        "team": "Data Science"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Sara Smith",
        "position": "DevOps Engineer",
        "photo": "https://i.pravatar.cc/150?img=20",
        "team": "DevOps"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Jessica Brown",
        "position": "UI Designer",
        "photo": "https://i.pravatar.cc/150?img=22",
        "team": "UX and Design"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Lucas Martinez",
        "position": "Mobile Developer",
        "photo": "https://i.pravatar.cc/150?img=11",
        "team": "Mobile"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Emily Davis",
        "position": "Innovation Manager",
        "photo": "https://i.pravatar.cc/150?img=35",
        "team": "Innovation and Management"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "David Wilson",
        "position": "Front Developer",
        "photo": "https://i.pravatar.cc/150?img=53",
        "team": "Front-End"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Olivia Taylor",
        "position": "Backend Developer",
        "photo": "https://i.pravatar.cc/150?img=48",
        "team": "Programming"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "William Brown",
        "position": "Data Scientist",
        "photo": "https://i.pravatar.cc/150?img=61",
        "team": "Data Science"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Grace Johnson",
        "position": "DevOps Engineer",
        "photo": "https://i.pravatar.cc/150?img=55",
        "team": "DevOps"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Andrew Lee",
        "position": "UI Designer",
        "photo": "https://i.pravatar.cc/150?img=56",
        "team": "UX and Design"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Charlotte Martinez",
        "position": "Mobile Developer",
        "photo": "https://i.pravatar.cc/150?img=1",
        "team": "Mobile"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "James Davis",
        "position": "Innovation Manager",
        "photo": "https://i.pravatar.cc/150?img=6",
        "team": "Innovation and Management"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Amelia Wilson",
        "position": "Front Developer",
        "photo": "https://i.pravatar.cc/150?img=5",
        "team": "Front-End"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Michael Taylor",
        "position": "Backend Developer",
        "photo": "https://i.pravatar.cc/150?img=3",
        "team": "Programming"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Sophia Johnson",
        "position": "Data Scientist",
        "photo": "https://i.pravatar.cc/150?img=9",
        "team": "Data Science"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Alexander Brown",
        "position": "DevOps Engineer",
        "photo": "https://i.pravatar.cc/150?img=7",
        "team": "DevOps"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Isabella Smith",
        "position": "Mobile Developer",
        "photo": "https://i.pravatar.cc/150?img=10",
        "team": "Mobile"
      },
      {
        "id": uuid(),
        "like": true,
        "name": "Mason Wilson",
        "position": "Innovation Manager",
        "photo": "https://i.pravatar.cc/150?img=14",
        "team": "Innovation and Management"
      }
  ])

  const [changeDataTeam, setChangeDataTeam] = useState([
    {
        id: uuid(),
        Titulo: 'Programación',
        Background: '#D9F7E9',
        highlights: '#57C278'
    },
    {
        id: uuid(),
        Titulo: 'Front-End',
        Background: '#E8F8FF',
        highlights: '#82CFFA'
    },
    {
        id: uuid(),
        Titulo: 'Data Science',
        Background: '#F0F8E2',
        highlights: '#A6D157'
    },
    {
        id: uuid(),
        Titulo: 'DevOps',
        Background: '#FDE7E8',
        highlights: '#E06B69'
    },
    {
        id: uuid(),
        Titulo: 'UX y Diseño',
        Background: '#FAE9F5',
        highlights: '#DB6EBF'
    },
    {
        id: uuid(),
        Titulo: 'Mobile',
        Background: '#FFF5D9',
        highlights: '#FFBA05'
    },
    {
        id: uuid(),
        Titulo: 'Innovación y Gestión',
        Background: '#FFEEDF',
        highlights: '#FF8A29'
    }
  ])

  const eventClick = () => {
    setShow(!show)
  }

  const likeState = (id) => {
    console.log("Cambiar estado de like: ", id)
    const likeStatePartner = conPartners.map((change) => {
      if(change.id === id) {
        change.like = !change.like
      }
      return change
    })
    setConPartners(likeStatePartner)
  }


  const deletePartner = (id) => {
    console.log("Eliminar Colaborador: ", id)
    const newPartners = conPartners.filter((partners) => partners.id !== id)
    setConPartners(newPartners)
  }

  const updateColorTeam = (color, id) => {
    console.log("Nuevo color", color, id)
    const newChangeDataTeam = changeDataTeam.map((change) => {
      if(change.id === id) {
        change.highlights = color
      }
      return change
    })
    setChangeDataTeam(newChangeDataTeam)
  }

  const logPartner = (dataPartner) => {
    console.log("Nuevo Colaborador: ", dataPartner)
    setConPartners([...conPartners, dataPartner])
  }

  const logTeam = (createNewTeam) => {
    console.log("Nuevo equipo: ", createNewTeam)
    setChangeDataTeam([...changeDataTeam, createNewTeam])
  }

  return (
    <>
      <Header />
      <MiOrg showHide={eventClick} />
      {show===true ? <Form 
          logPartner={logPartner} 
          logTeam={logTeam}
          teams={changeDataTeam.map((hangeDataTeam) => hangeDataTeam.Titulo)}/> : <> </>}
      {
        changeDataTeam.map((team) => <TeamsApp 
          key={team.Titulo} 
          teams={team} 
          containerPartners={conPartners.filter((partner) => partner.team === team.Titulo)} 
          deletePartner={deletePartner}
          updateColorTeam={updateColorTeam}
          likeState={likeState}
          />)
      }
      <Footer />
    </>
  )
}

export default App