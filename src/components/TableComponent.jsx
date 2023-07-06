/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import cn from 'classnames';
import SortTitlecomponent from './SortTitlecomponent';

const TableComponent = ({
  products,
  selectedUsers,
  selectedCategories,
  searchQuery,
}) => {
  const [sort, setSort] = useState([]);

  const getPreparedProducts = (
    allProducts,
    users,
    categories,
    sorting,
    query,
  ) => {
    let copyProducts = Object.assign([], allProducts);

    if (categories.length > 0) {
      copyProducts = copyProducts.filter(product => (
        categories.includes(product.category.title)
      ));
    }

    if (users.length > 0) {
      copyProducts = copyProducts.filter(product => (
        users.includes(product.user.name)
      ));
    }

    if (query.length > 0) {
      copyProducts = copyProducts.filter(product => (
        product.name.toLowerCase().includes(query.toLowerCase())
      ));
    }

    if (sorting.length > 0) {
      switch (sort[0]) {
        case 'ID':
          copyProducts.sort((a, b) => (
            sort[1] === 'up' ? a.id - b.id : b.id - a.id
          ));
          break;
        case 'Product':
          copyProducts.sort((a, b) => (sort[1] === 'up'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
          ));
          break;
        case 'Category':
          copyProducts.sort((a, b) => (sort[1] === 'up'
            ? a.category.title.localeCompare(b.category.title)
            : b.category.title.localeCompare(a.category.title)
          ));
          break;
        case 'User':
          copyProducts.sort((a, b) => (sort[1] === 'up'
            ? a.user.name.localeCompare(b.user.name)
            : b.user.name.localeCompare(a.user.name)
          ));
          break;
        default: return 0;
      }
    }

    return copyProducts;
  };

  const visibleProducts = getPreparedProducts(
    products,
    selectedUsers,
    selectedCategories,
    sort,
    searchQuery,
  );

  return (
    <div className="box table-container">
      {visibleProducts.length > 0
        ? (
          <table
            data-cy="ProductTable"
            className="table is-striped is-narrow is-fullwidth"
          >
            <thead>
              <tr>
                <SortTitlecomponent
                  visibleProducts={visibleProducts}
                  sort={sort}
                  setSort={setSort}
                />
              </tr>
            </thead>

            <tbody>
              {visibleProducts.map(product => (
                <tr data-cy="Product">
                  <td className="has-text-weight-bold" data-cy="ProductId">
                    {product.id}
                  </td>

                  <td data-cy="ProductName">{product.name}</td>
                  <td data-cy="ProductCategory">
                    {`${product.category.icon} - ${product.category.title}`}
                  </td>

                  <td
                    data-cy="ProductUser"
                    className={cn(
                      { 'has-text-link': product.user.sex === 'm' },
                      { 'has-text-danger': product.user.sex === 'f' },
                    )}
                  >
                    {product.user.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p data-cy="NoMatchingMessage">
            No products matching selected criteria
          </p>
        )}

    </div>
  );
};

export default TableComponent;
