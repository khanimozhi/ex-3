//import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Test from './test';
import Sample from './sample';
//import Two from './test';
import Home from './home';
//import Egfun from './fun';
//import Lan from './ClassTest';
import Todo from './Todo';

function App() {
    return(
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Todo'} element={<Todo/>}/>
        <Route path={'/two'} element={<two/>}/>
        <Route path={'/test'} element={<Test/>}/>
        <Route path={'/sample'} element={<Sample/>}/>
     
      </Routes>
    </BrowserRouter>  
    ); 
}

export default App;
