import cn from 'classnames';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Nav: React.FC = () => {
  const currLocationLink = useLocation();

  const getLinkClass = (
    { isActive }: { isActive: boolean },
  ) => cn('navbar-item', {
    'has-background-grey-lighter': isActive,
  });

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={cn('navbar-item', {
              'has-background-grey-lighter': currLocationLink.pathname === '/',
            })}
            to="/"
            replace
          >
            Home
          </NavLink>

          <NavLink
            className={getLinkClass}
            to="/people"
            replace
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};