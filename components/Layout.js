import PropTypes from 'prop-types';
import Nav from './Nav';

const Layout = ({ content }) => (
  <div>
    <Nav />
    <div className="content">
      {content}
    </div>
  </div>
);

Layout.propTypes = {
  content: PropTypes.element.isRequired,
};

export default Layout;
