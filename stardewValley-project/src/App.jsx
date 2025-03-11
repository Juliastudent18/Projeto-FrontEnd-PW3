import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Container from './components/layout/Container'

/* IMPORTS DOS COMPONENTES DE PÁGINAS */
import Home from './components/pages/Home'
import CreateCharacter from './components/pages/CreateCharacter.jsx'
import ListCharacter from './components/pages/ListCharacter.jsx'

/* IMPORTAÇÃO DO NAVBAR */
import NavBar from './components/layout/NavBar'

function App() {

  return (
    <>
    
      <div>

        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />} />
                <Route path='/newCharacter' element={<CreateCharacter />} />
                <Route path='/listCharacter' element={<ListCharacter />} />

              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App
