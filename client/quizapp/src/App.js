
import Home from './Components/Home';
import Quiz from './Components/Quiz'
import Result from './Components/Result'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}></Route>
  <Route path='/quiz' element={<Quiz/>}></Route>
  <Route path='/result' element={<Result/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
