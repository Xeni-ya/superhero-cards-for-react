import './App.css'
import Card from './components/Card';
import CardList from './components/CardList';

function App() {
  return (
    <>
      <h1 className="title">Карточки с супергероями</h1>
      <Card />
      <CardList />
    </>
  );
}

export default App;
