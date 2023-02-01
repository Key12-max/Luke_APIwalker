import './App.css';
import Form from './components/Form';
import Peoples from './components/Peoples';
import Planet from './components/Planets';
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Form/>}/>
                <Route path="/people/:id" element ={<Peoples/>}/>
                <Route path="/planets/:id" element ={<Planet/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
