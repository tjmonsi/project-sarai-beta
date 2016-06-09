import actions from './v1/actions';
import routes from './v1/routes';

// ADD COMPONENTS HERE
import _Logo from './v1/components/atoms/logo.jsx';
import _Nav from './v1/components/molecules/nav.jsx';
import _NavLink from './v1/components/atoms/nav-link.jsx';

export default {
  actions,
  load: () => null,
  routes
};

export const Logo = _Logo;
export const Nav = _Nav;
export const NavLink = _NavLink;
