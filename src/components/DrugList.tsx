import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Drug } from '../types/drug';
import { getDrugs, deleteDrug } from '../services/drugService';
import DrugTable from './DrugTable';

const DrugList = () => {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pageSize = 10;

  const fetchDrugs = async (page: number) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getDrugs(page, pageSize);
      setDrugs(response.content);
      setPageCount(response.totalPages);
    } catch (error) {
      setError('Failed to fetch drugs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrugs(currentPage);
  }, [currentPage]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this drug?')) {
      try {
        await deleteDrug(id);
        fetchDrugs(currentPage);
      } catch (error) {
        setError('Failed to delete drug. Please try again later.');
      }
    }
  };

  if (loading) {
    return <div className="container mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mt-4 alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Drug Inventory</h2>
      <DrugTable drugs={drugs} onDelete={handleDelete} />
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
};

export default DrugList;