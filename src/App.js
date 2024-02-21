import './App.css';
import {
 BrowserRouter,Routes,Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home  from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState'
// import { Alert } from './components/Alert';

export default function App() {

  return (
    <>
    <NoteState>
    <BrowserRouter>
    
    <Navbar/>
    
    {/* <Alert message={"this is alert"}/> */}
    <div className="container my-3">
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </NoteState>

    </>
  );
}