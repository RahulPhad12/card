import './App.css';
import data from "./data";
import { Cards } from './components/Card';

function App() {
  const cards = data.map((item) => {
    return <Cards key={item.id} {...item} />;
  });
  return (
    <>
    <h1>React Props Moviecard</h1>
    <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
