import { useSelector } from 'react-redux';
import './App.css';
import Colors from './components/colors/Colors';
import Counter from './components/counter/Counter';
import Foods from './components/foods/Foods';

function App() {

  const color = useSelector(state => state.color);
  
  return (
    
    <>
      <div style={{ backgroundColor: color }} className="main-container">
        <Counter />
        <Colors />
        <Foods />
      </div>
      
    </>  
  );
}

export default App;
