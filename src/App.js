import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import NavBar from './components/navBar/NavBar';

function App() {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path='/' element={<HomePage />} />
         </Routes>
      </>
   );
}

export default App;
