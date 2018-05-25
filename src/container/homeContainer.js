import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { connect } from 'react-redux';
import { deleteFriend, importantFriend, sortfriendlist } from '../actions';
import Home from '../components/Home';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.handleImportant = this.handleImportant.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }
  onDelete(index) {
    confirmAlert({
      title: 'Deletion',
      message: 'Are you sure you like to delete ?',
      confirmLabel: 'Confirm',
      cancelLabel: 'Cancel',
      onConfirm: () => this.props.OndeleteFriend(index),
      onCancel: () => {},
    });
    // this.props.OndeleteFriend(index);
  }

  handleImportant = (id) => {
    this.props.OnimportantFriend(id);
  }
  handleSort = (key) => {
    const descKind = !this.props.ascSortKind;
    this.props.Onsortfriendlist(key, descKind);
  }

  render() {
    return (
      <Home
        onImportant={this.handleImportant}
        onsort={this.handleSort}
        onDelete={this.onDelete}
        friendlist={this.props.friendlist}
        searchList={this.props.searchList}
        isSearch={this.props.isSearch}
        ascSortKind={this.props.ascSortKind}
        language={this.props.language}
      />
    );
  }
}

HomeContainer.propTypes = {
  friendlist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.shape.isRequired,
    email: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  })).isRequired,
  searchList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.shape.isRequired,
    email: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  })).isRequired,
  OndeleteFriend: PropTypes.func.isRequired,
  isSearch: PropTypes.bool.isRequired,
  ascSortKind: PropTypes.bool.isRequired,
  OnimportantFriend: PropTypes.func.isRequired,
  Onsortfriendlist: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  friendlist: state.friendlist.friendlist,
  searchList: state.friendlist.searchList,
  isSearch: state.friendlist.isSearch,
  ascSortKind: state.friendlist.ascSortKind,
  language: state.friendlist.language,
});

const mapDispatchToProps = {
  OndeleteFriend: deleteFriend,
  OnimportantFriend: importantFriend,
  Onsortfriendlist: sortfriendlist,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
