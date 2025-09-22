import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts, deleteProduct } from '../api/productsApi';
import Pagination from './Pagination';
import Filters from './Filters';
import ProductModal from './ProductModal';

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState({ total:0, page:1, limit:8, totalPages:0 });
  const [loading, setLoading] = useState(false);

  // query state
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [sortBy, setSortBy] = useState(''); // 'price' or 'name'
  const [sortOrder, setSortOrder] = useState('asc');
  const [filters, setFilters] = useState({ brand: '', category:'', minPrice:'', maxPrice:'' });
  const [modal, setModal] = useState({ open:false, mode:'add', product:null });

  async function load() {
    setLoading(true);
    try {
      const params = {
        page, limit, sortBy, sortOrder,
        brand: filters.brand || undefined,
        category: filters.category || undefined,
        minPrice: filters.minPrice || undefined,
        maxPrice: filters.maxPrice || undefined
      };
      const res = await fetchProducts(params);
      setProducts(res.data);
      setMeta({ total: res.total, page: res.page, limit: res.limit, totalPages: res.totalPages });
    } catch(err) {
      console.error(err);
    } finally { setLoading(false); }
  }

  useEffect(() => { load(); }, [page, limit, sortBy, sortOrder, filters]);

  const handleDelete = async (product) => {
    if (!window.confirm(`Delete ${product.name}?`)) return;
    await deleteProduct(product.id);
    load();
  };

  const openAdd = () => setModal({ open:true, mode:'add', product:null });
  const openEdit = (product) => setModal({ open:true, mode:'edit', product });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <Filters
          filters={filters}
          onChange={setFilters}
          onSortChange={(sBy,sOrder) => { setSortBy(sBy); setSortOrder(sOrder); }}
          onLimitChange={(l) => setLimit(l)}
          onSearch={(q) => setFilters(prev=>({...prev, search:q}))}
        />
        <button onClick={openAdd} className="bg-amber-600 text-white px-4 py-2 rounded">Add Product</button>
      </div>

      {loading ? <div>Loading...</div> : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} onEdit={openEdit} onDelete={handleDelete} />
            ))}
          </div>

          <div className="mt-6">
            <Pagination page={meta.page} totalPages={meta.totalPages} onPageChange={setPage} />
          </div>
        </>
      )}

      {modal.open && (
        <ProductModal
          mode={modal.mode}
          product={modal.product}
          onClose={() => setModal({open:false,mode:'add',product:null})}
          onSaved={() => { setModal({open:false,mode:'add',product:null}); load(); }}
        />
      )}
    </div>
  );
}
