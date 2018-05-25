import React from 'react';
import Strings from '../localization/strings';

const Header = () => (
  <header className="main-header">
    <a className="logo" data-toggle="push-menu" role="button">
      <span className="logo-mini"><b> {Strings.FriendList} </b></span>
      <span className="logo-lg"><b> {Strings.FriendList} </b></span>
    </a>
  </header>
);
export default Header;
