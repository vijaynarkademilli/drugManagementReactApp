import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Drug } from '../types/drug';

interface DrugTableProps {
  drugs: Drug[];
  onDelete: (id: number) => void;
}

const DrugTable: React.FC<DrugTableProps> = ({ drugs, onDelete }) => {
  return (
    <table className="table table-striped">
      <thead>
      <tr>
          <th>Name</th>
          <th>Batch Number</th>
          <th>Expiry Date</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Amount</th>
          <th>MRP</th>
          <th>GST</th>
          <th>Actions</th>
      </tr>
      </thead>
        <tbody>
        {drugs.map((drug) => (
            <tr key={drug.id}>
                <td>{drug.name}</td>
                <td>{drug.batchNumber}</td>
                <td>{drug.expiryDate}</td>
                <td>{drug.quantity}</td>
                <td>{drug.price}</td>
                <td>{drug.amount}</td>
                <td>{drug.mrp}</td>
                <td>{drug.gst}</td>
                <td>
                    <button className="btn btn-sm btn-primary me-2">
                        <Edit size={16}/>
                    </button>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => onDelete(drug.id)}
                    >
                        <Trash2 size={16}/>
                    </button>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
  );
};

export default DrugTable;