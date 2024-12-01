import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDrug } from '../services/drugService';

const AddDrug = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [drug, setDrug] = useState({
    name: '',
    manufacturer: '',
    price: '',
    expiryDate: '',
    stock: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      await addDrug({
        ...drug,
        price: Number(drug.price),
        stock: Number(drug.stock)
      });
      navigate('/drugs');
    } catch (error) {
      setError('Failed to add drug. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDrug({ ...drug, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h2>Add New Drug</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={drug.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Manufacturer</label>
          <input
            type="text"
            className="form-control"
            name="manufacturer"
            value={drug.manufacturer}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={drug.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Expiry Date</label>
          <input
            type="date"
            className="form-control"
            name="expiryDate"
            value={drug.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            name="stock"
            value={drug.stock}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Drug</button>
      </form>
    </div>
  );
};

export default AddDrug;