import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchAndFilterFriends } from '../actions';
import SearchFilterForm from '../components/searchFilterForm';

let uniqueCity = [];
let uniqueWork = [];
class SearchFilterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    uniqueCity = [...new Set(this.props.friendlist.map(item => item.city))];
    uniqueWork = [...new Set(this.props.friendlist.map(item => item.work))];
  }

  handleSubmit(searchFilterData) {
    this.props.OnsearchAndFilterFriends(searchFilterData);
  }

  render() {
    return (
      <SearchFilterForm
        onSubmit={this.handleSubmit}
        uniqueCityList={uniqueCity}
        uniqueWorkList={uniqueWork}
        language={this.props.language}
      />
    );
  }
}

SearchFilterContainer.propTypes = {
  friendlist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.shape.isRequired,
    email: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  })).isRequired,
  OnsearchAndFilterFriends: PropTypes.func.isRequired,
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
  OnsearchAndFilterFriends: searchAndFilterFriends,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilterContainer);
