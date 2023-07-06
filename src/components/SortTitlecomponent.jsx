/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import cn from 'classnames';

const titles = ['ID', 'Product', 'Category', 'User'];

const SortTitlecomponent = ({
  sort,
  setSort,
}) => (
  titles.map(title => (
    <th key={title}>
      <span className={cn('is-flex is-flex-wrap-nowrap')}>
        {title}

        <a href="#/">
          <span className="icon">
            {sort[0] !== title && (
              <i
                data-cy="SortIcon"
                className="fas fa-sort"
                onClick={event => setSort([title, 'up'])}
                key={title}
              />
            )}
            {sort[0] === title && sort[1] === 'down' && (
              <i
                data-cy="SortIcon"
                className="fas fa-sort-down"
                onClick={event => setSort([])}
                key={title}
              />
            )}
            {sort[0] === title && sort[1] === 'up' && (
              <i
                data-cy="SortIcon"
                className="fas fa-sort-up"
                onClick={event => setSort([title, 'down'])}
                key={title}
              />
            )}
          </span>
        </a>
      </span>
    </th>
  ))
);

export default SortTitlecomponent;
