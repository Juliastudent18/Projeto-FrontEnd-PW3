import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Container from './components/layout/Container'

import Home from './components/pages/Home'
import CreateCharacter from './components/pages/CreateCharacter.jsx'
import ListCharacter from './components/pages/ListCharacter.jsx'
import Details from './components/pages/Details.jsx'
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
                <Route path='/details/:id' element={<Details />} />

              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App
