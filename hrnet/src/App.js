import "./App.css";
import Modal from "./conponents/Modal/Modal";
import Table from "./conponents/Table/Table";

function App() {
  return (
    <div className='container'>
      <Modal />
      <h1 className='dashboard-title'>Current Employees</h1>
      <Table />
    </div>
  );
}

export default App;
