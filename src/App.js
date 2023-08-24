import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './DetailsPage';
import MainPage from './MainPage';
import WebtoonPage from './WebtoonPage';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/details' element={<DetailsPage />}/>
        <Route path='/webtoon' element={<WebtoonPage />} />
        <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
} 

export default App;
