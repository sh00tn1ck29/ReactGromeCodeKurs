import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false,
  };

  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText,
    });
  };

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly: inStockOnly,
    });
  };

  render() {
    const products = this.props.products;
    const filterText = this.state.filterText;
    const inStockOnly = this.state.inStockOnly;

    const filteredProducts = products.filter(product => {
      const nameMatches = product.name.toLowerCase().includes(filterText.toLowerCase());
      const stockMatches = !inStockOnly || product.stocked;
      return nameMatches && stockMatches;
    });

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
