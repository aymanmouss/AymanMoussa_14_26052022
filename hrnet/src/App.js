import "./App.css";
import Table from "./conponents/Table/Table";

function App() {
  return (
    <div className='container'>
      <h1 className='dashboard-title'>Current Employees</h1>
      <Table />
      <div className='addData'>
        <button className='addDataBtn'>ADD</button>
      </div>
    </div>
  );
}

export default App;
