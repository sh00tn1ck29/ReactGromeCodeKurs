import React from 'react';

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockChange }) => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={e => onFilterTextChange(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />

      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={e => onInStockChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
