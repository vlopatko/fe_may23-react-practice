/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import cn from 'classnames';

const TableComponent = ({
  products,
  selectedUsers,
  selectedCategories,
  searchQuery,
}) => {
  const getPreparedProducts = (
    allProducts,
    users,
    categories,
  ) => {
    // const copyProducts = Object.assign([], allProducts);
    let copyProducts = [...allProducts];

    if (categories.length > 0) {
      copyProducts = copyProducts.filter(product => (
        categories.join('-').includes(product.category.title)
      ));
    }

    if (users.length > 0) {
      copyProducts = copyProducts.filter(product => (
        users.join('-').includes(product.user.name)
      ));
    }

    return copyProducts;
  };

  const visibleProducts = getPreparedProducts(
    products,
    selectedUsers,
    selectedCategories,
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
                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    ID

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    Product

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort-down" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    Category

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort-up" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    User

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort" />
                      </span>
                    </a>
                  </span>
                </th>
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
