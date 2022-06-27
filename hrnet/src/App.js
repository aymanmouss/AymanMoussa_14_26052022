import "./App.css";
import AddForm from "./conponents/AddForm";
import Table from "./conponents/Table/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddForm />} />
          <Route path='table' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
