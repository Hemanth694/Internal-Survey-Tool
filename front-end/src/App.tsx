import './App.css';
import Header from './Header';
import UserHomePage from './UserHomePage';
import SurveyPage from './SurveyPage';

function App() {
  return (
    <div> 
      <Header />      
      <UserHomePage />
      <Header />
      <SurveyPage />
    </div>
  );
}

export default App;
