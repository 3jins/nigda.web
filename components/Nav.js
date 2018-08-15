import Link from 'next/link';
import nigdaLogo from '../res/imgs/nigda-logo.png';

const renderNavMenu = () => {
  const menuList = ['Home', 'Gallery', 'Story'];
  return menuList.map((menuItem) => {
    const menuItemNameLowerCase = menuItem.toLowerCase();
    return (
      <div key={menuItemNameLowerCase} className="menu-item">
        <Link href={`/${menuItemNameLowerCase}`}>
          <p>{menuItem}</p>
        </Link>
      </div>
    );
  });
};

const Nav = () => (
  <div className="nav">
    <div className="logo">
      <img src={nigdaLogo} alt="a logo of Nigda" />
    </div>
    <div className="menu">
      {renderNavMenu()}
    </div>
  </div>
);

export default Nav;
