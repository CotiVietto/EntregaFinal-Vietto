import './App.css';
import NavBar from '../src/components/NavBar';
import ItemListContainer from '../src/components/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenid@s'}/>
    </div>
  )
}

export default App;

