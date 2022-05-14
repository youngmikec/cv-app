import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import data from './assets/json/data.json'


const fetchData = () => {
  // return JSON.parse(data);
  return data;
}

function App() {
  const userData  = fetchData();
  return (
    <div className="App">
      <div style={{flex: 3}}>
        <Sidebar userData={userData} />
      </div>
      <div style={{flex: 9}}>
        <Main userData={userData} />
      </div>
    </div>
  );
}

export default App;
