import PropTypes from 'prop-types';
import Nav from './Nav';

const Layout = ({ content }) => (
  <div>
    <Nav />
    {content}
  </div>
);

Layout.propTypes = {
  content: PropTypes.element.isRequired,
};

export default Layout;
