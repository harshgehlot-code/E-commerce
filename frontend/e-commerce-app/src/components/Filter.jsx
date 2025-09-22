import React, { useState } from 'react';

export default function Filters({ filters, onChange, onSortChange, onLimitChange, onSearch }) {
  const [local, setLocal] = useState(filters || { brand:'', category:'', minPrice:'', maxPrice:'' });
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  function apply() {
    onChange(local);
  }

  function handleSortChange(e) {
    const val = e.target.value;
    setSortBy(val);
    onSortChange(val, sortOrder);
  }

  function handleOrderChange(e) {
    const ord = e.target.value;
    setSortOrder(ord);
    onSortChange(sortBy, ord);
  }

  return (
    <div className="flex items-center gap-4">
      <input placeholder="Search" onChange={(e)=> onSearch && onSearch(e.target.value)} className="border px-3 py-2 rounded"/>
      <input placeholder="Brand" value={local.brand} onChange={(e)=> setLocal({...local,brand:e.target.value})} className="border px-3 py-2 rounded"/>
      <input placeholder="Category" value={local.category} onChange={(e)=> setLocal({...local,category:e.target.value})} className="border px-3 py-2 rounded"/>
      <input placeholder="Min" value={local.minPrice} onChange={(e)=> setLocal({...local,minPrice:e.target.value})} className="border w-20 px-3 py-2 rounded"/>
      <input placeholder="Max" value={local.maxPrice} onChange={(e)=> setLocal({...local,maxPrice:e.target.value})} className="border w-20 px-3 py-2 rounded"/>
      <button onClick={apply} className="px-3 py-2 bg-gray-100 rounded">Apply</button>

      <select value={sortBy} onChange={handleSortChange} className="border px-3 py-2 rounded">
        <option value="">Sort</option>
        <option value="name">Brand / Name</option>
        <option value="price">Price</option>
      </select>

      <select value={sortOrder} onChange={handleOrderChange} className="border px-3 py-2 rounded">
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>

      <select onChange={(e)=> onLimitChange(Number(e.target.value))} className="border px-3 py-2 rounded">
        <option value={8}>8</option>
        <option value={12}>12</option>
        <option value={24}>24</option>
      </select>
    </div>
  );
}
