import Animals from './clues/Animals';
import SocialMedia from './clues/SocialMedia';
import Diary from './clues/Diary';
import Morse from './clues/Morse';
import Divider from './components/Divider';
import './App.css';

function App() {
  return (
    <div className="App">
      <SocialMedia />
      <Divider />
      <Animals />
      <Divider />
      <Diary />
      <Divider />
      <Morse />
    </div>
  );
}

export default App;
