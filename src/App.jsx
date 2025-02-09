import { useState } from 'react'
import Perfil from './components/Perfil'
import ReposList from './components/ReposList'
import { IoSearch } from "react-icons/io5";
import './global.css'

function App() {
  const [username, setUsername] = useState('');

  return (
    <div>
      < div className="searchBar" >
        <input className="searchInput" type="text" placeholder="Digite seu usuário do GitHub..." onBlur={(e) => setUsername(e.target.value)} />
        <a href="#!" className="searchButton">
          <IoSearch size={32} />

        </a>
      </div >

      {
        username.length > 4 && (
          <>
            <Perfil username={username} />
            <ReposList username={username} />
          </>
        )
      }
    </div>
  )
}

export default App
