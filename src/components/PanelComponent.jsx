import React from 'react';
import cn from 'classnames';

const PanelComponent = ({
  categories,
  users,
  selectedUsers,
  setSelectedUsers,
  selectedCategories,
  setSelectedCategories,
}) => {
  const handleClickUser = () => { };

  const handleClickCategories = () => { };

  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <p className="panel-tabs has-text-weight-bold">
          <a
            data-cy="FilterAllUsers"
            href="#/"
            onClick={() => {
              setSelectedCategories([]);
              setSelectedUsers([]);
            }}
          >
            All
          </a>
          {users.map(user => (
            <a
              data-cy="FilterUser"
              href="#/"
              key={user.name}
              onClick={handleClickUser}
            >
              {user.name}
            </a>
          ))}
        </p>

        <div className="panel-block">
          <p className="control has-icons-left has-icons-right">
            <input
              data-cy="SearchField"
              type="search"
              className="input"
              placeholder="Search"
              value=""
            />

            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>

            <span className="icon is-right">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete"
              />
            </span>
          </p>
        </div>

        <div className="panel-block is-flex-wrap-wrap">
          <a
            href="#/"
            data-cy="AllCategories"
            className="button is-success mr-6 is-outlined"
          >
            All
          </a>
          {categories.map(category => (
            <a
              data-cy="Category"
              className={cn(
                'button mr-2 my-1',
                { 'is-info': false },
              )}
              href="#/"
              key={category.title}
              onClick={handleClickCategories}
            >
              {category.title}
            </a>
          ))}
        </div>

        <div className="panel-block">
          <a
            data-cy="ResetAllButton"
            href="#/"
            className="button is-link is-outlined is-fullwidth"
          >
            Reset all filters
          </a>
        </div>
      </nav>
    </div>
  );
};

export default PanelComponent;
