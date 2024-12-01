import { Link } from 'react-router-dom';
import { PlusCircle, List } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-dark text-white min-vh-100 p-3" style={{ width: '250px' }}>
      <h3 className="text-center mb-4">Drug Management</h3>
      <div className="nav flex-column">
        <Link to="/drugs" className="nav-link text-white d-flex align-items-center mb-3">
          <List className="me-2" size={20} />
          View Drugs
        </Link>
        <Link to="/drugs/add" className="nav-link text-white d-flex align-items-center mb-3">
          <PlusCircle className="me-2" size={20} />
          Add Drug
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;