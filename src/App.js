import './App.css';
import Logo from './componentes/Logo'
import ListaHeader from './componentes/ListaHeader';
import IconesHeader from './componentes/IconesHeader'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ListaHeader></ListaHeader>
        <IconesHeader></IconesHeader>
      </header>
    </div>
  );
}

export default App;
