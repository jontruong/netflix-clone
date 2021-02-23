import './App.css';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} ></Row>
    </div>
  );
};

export default App;
