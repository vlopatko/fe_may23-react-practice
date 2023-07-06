import React, { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

import PanelComponent from './components/PanelComponent';
import TableComponent from './components/TableComponent';

export const App = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const products = productsFromServer.map((product) => {
    const correctCategory = categoriesFromServer.find(category => (
      category.id === product.categoryId
    ));

    const correctUser = usersFromServer.find(user => (
      user.id === correctCategory.ownerId
    ));

    return { ...product, category: correctCategory, user: correctUser };
  });

  // console.dir(products);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <PanelComponent
          categories={categoriesFromServer}
          users={usersFromServer}
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <TableComponent
          products={products}
          selectedUsers={selectedUsers}
          selectedCategories={selectedCategories}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};
