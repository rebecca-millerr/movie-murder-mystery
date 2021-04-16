import Animals from './clues/Animals';
import Header from './clues/Header';
import SocialMedia from './clues/SocialMedia';
import Diary from './clues/Diary';
import Morse from './clues/Morse';
import Semaphore from './clues/Semaphore';
import Divider from './components/Divider';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Divider />
      <SocialMedia />
      <Divider />
      <Morse />
      <Divider />
      <Animals />
      <Divider />
      <Diary />
      <Divider />
      <Semaphore />
    </div>
  );
}

export default App;
