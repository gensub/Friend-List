import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import { addFriend, editFriend } from '../actions';
import FriendDetailForm from '../components/friendForm';

class FriendFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    let selectedFriend = {};
    if (this.props.match.params.id !== '-1') {
      selectedFriend = this.props.friendlist
      .filter(v => v.id.toString() === this.props.match.params.id.toString());
    }
    this.state = {
      friendDetails: (this.props.match.params.id === '-1') ? {} : {
        name: selectedFriend[0].name,
        email: selectedFriend[0].email,
        phone: selectedFriend[0].phone,
        work: selectedFriend[0].work,
        city: selectedFriend[0].city,
      },
    };
  }

  handleSubmit(friendDetails) {
    if (this.props.match.params.id === '-1') {
      this.props.OnaddFriend(friendDetails, this.props.nextId);
    } else {
      this.props.OneditFriend(friendDetails, this.props.match.params.id);
    }
    this.props.history.push('/');
  }

  render() {
    return (
      <FriendDetailForm
        onSubmit={this.handleSubmit}
        initialValues={this.state.friendDetails}
        language={this.props.language}
      />
    );
  }
}

FriendFormContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  nextId: PropTypes.number.isRequired,
  friendlist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.shape.isRequired,
    email: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  })).isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  OnaddFriend: PropTypes.func.isRequired,
  OneditFriend: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    friendlist: state.friendlist.friendlist,
    nextId: state.friendlist.nextId,
    language: state.friendlist.language,
  };
}

const mapDispatchToProps = {
  OnaddFriend: addFriend,
  OneditFriend: editFriend,
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendFormContainer);
