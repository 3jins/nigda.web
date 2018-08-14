import Link from 'next/link';

const renderNavMenu = () => {
  const menuList = ['Home', 'Gallery', 'Story'];
  return menuList.map((menuItem) => {
    const menuItemNameLowerCase = menuItem.toLowerCase();
    return (
      <div key={menuItemNameLowerCase} className={menuItemNameLowerCase}>
        <Link href={`/${menuItemNameLowerCase}`}>
          <p>{menuItem}</p>
        </Link>
      </div>
    );
  });
};

const Nav = () => (
  <div className="nav">
    {renderNavMenu()}
  </div>
);

export default Nav;
