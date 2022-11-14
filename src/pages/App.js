import './App.css'
import HomePage from './homePage';
import LoginPage from './loginPage';
import ProfilePage from './profilePage';
import StoryPage from './storiesPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header/header';
const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={ <HomePage /> } />
          <Route path='/login' element={ <LoginPage /> } />
          <Route path='/stories' element={ <StoryPage /> } />
          <Route path='/profile' element={ <ProfilePage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
