import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DrugList from './components/DrugList';
import AddDrug from './components/AddDrug';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/drugs" element={<DrugList />} />
            <Route path="/drugs/add" element={<AddDrug />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;