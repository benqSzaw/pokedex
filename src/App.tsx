import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer"
import Stats from './components/Stats/Stats';
import Main from './components/Main/Main';

import pokedex from "./common/data/pokedex.json"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          {pokedex.map((pokemon) => {
            return <Route key={pokemon.id} path={`/${pokemon.name.english}`} element={<Stats id={pokemon.id} />} />
          })}
        </Routes>
      </Router>


      <Footer />
    </>
  )
}

export default App