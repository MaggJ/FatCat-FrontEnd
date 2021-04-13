import React from 'react';
import './index.less'

const Header = ()=> {
  return(
  <div className='cat-header-container'>
    <div className="cat-header-logo">FatCat</div>
    <div className="cat-header-nav">
      <ul className="cat-header-nav-list">
        <li className="cat-header-nav-list-item"> HOME</li>
        <li className="cat-header-nav-list-item"> BLOG</li>
        <li className="cat-header-nav-list-item"> WEALTH</li>
      </ul>
    </div>
    <div className="cat-header-user">
      登 录
    </div>

  </div>);
}

export default Header;