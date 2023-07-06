import React from 'react';
import cn from 'classnames';

const PanelComponent = ({
  categories,
  users,
  selectedUsers,
  setSelectedUsers,
  selectedCategories,
  setSelectedCategories,
  searchQuery,
  setSearchQuery,
}) => {
  const handleClickUser = (event) => {
    const copyUsers = Object.assign([], selectedUsers);

    if (!copyUsers.includes(event.target.text)) {
      copyUsers.push(event.target.text);
    }

    setSelectedUsers(copyUsers);
  };

  const handleClickCategories = (event) => {
    event.preventDefault();
    let copyCategories = Object.assign([], selectedCategories);

    if (!copyCategories.includes(event.target.text)) {
      copyCategories.push(event.target.text);
    } else {
      copyCategories = copyCategories.filter(category => (
        category !== event.target.text
      ));
    }

    setSelectedCategories(copyCategories);
  };

  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <p className="panel-tabs has-text-weight-bold">
          <a
            className={cn(
              { 'is-active': selectedUsers.length === 0 },
            )}
            data-cy="FilterAllUsers"
            href="#/"
            onClick={() => {
              setSelectedUsers([]);
            }}
          >
            All
          </a>
          {users.map(user => (
            <a
              className={cn(
                { 'is-active': selectedUsers.includes(user.name) },
              )}
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
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
              }}
            />

            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>
            {searchQuery.length > 0
              && (
                <span className="icon is-right">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    onClick={() => {
                      setSearchQuery('');
                    }}
                    data-cy="ClearButton"
                    type="button"
                    className="delete"
                  />
                </span>
              )}
          </p>
        </div>

        <div className="panel-block is-flex-wrap-wrap">
          <a
            href="#/"
            data-cy="AllCategories"
            className={cn(
              'button mr-6 is-success',
              { 'is-outlined': selectedCategories.length !== 0 },
            )}
            onClick={() => {
              setSelectedCategories([]);
            }}
          >
            All
          </a>
          {categories.map(category => (
            <a
              data-cy="Category"
              className={cn(
                'button mr-2 my-1',
                { 'is-info': selectedCategories.includes(category.title) },
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
            onClick={() => {
              setSelectedCategories([]);
              setSelectedUsers([]);
              setSearchQuery('');
            }}
          >
            Reset all filters
          </a>
        </div>
      </nav>
    </div>
  );
};

export default PanelComponent;
