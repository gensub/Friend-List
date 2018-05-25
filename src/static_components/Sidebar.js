import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Strings from '../localization/strings';
import { changeLanguage } from '../actions';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.switchLanguage = this.switchLanguage.bind(this);
  }
  componentDidUpdate() {
    // console.log('Comp Did Up sidebar');
    // console.log(this.props.language);
  }
  switchLanguage() {
    const language = Strings.getLanguage();
    if (language === 'en') {
      Strings.setLanguage('hi');
    } else {
      Strings.setLanguage('en');
    }
    this.props.OnchangeLanguage(Strings.getLanguage());
  }
  render() {
    // console.log('Render called sidebar');
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu" data-widget="tree">
            <li className="treeview menu-open">
              <i className="fa fa-dashboard" /> <span id="one" ><NavLink className="logo-lg glyphicon glyphicon-list" to="/"> {Strings.FriendList} </NavLink></span>
            </li>
            <li className="treeview menu-open">
              <i className="fa fa-dashboard" /> <span id="two" ><NavLink className="logo-lg glyphicon glyphicon-user" to={`/Submit/${-1}`}> {Strings.FriendForm} </NavLink></span>
            </li>
            <li>
              <button className="btn btn-default center-align width-19vh background-yellow upper-case" onClick={this.switchLanguage} >Change Language</button>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  OnchangeLanguage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  language: state.friendlist.language,
});

const mapDispatchToProps = {
  OnchangeLanguage: changeLanguage,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));

// export default Sidebar;
