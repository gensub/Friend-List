import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Strings from '../localization/strings';

const onChangeSubmit = handleSubmit => () => {
  handleSubmit();
};

const dropDownSelect = dropDownList => (
  <option
    key={dropDownList}
    value={dropDownList}
  >
    {dropDownList}
  </option>
  );

const SearchFilterForm = (props) => {
  const { handleSubmit, uniqueCityList, uniqueWorkList } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="col-xs-12 custom-padding table-top">
        <div className="form-group">
          <label htmlFor="Search">{Strings.Search} :</label>
          <Field name="searchText" className="form-control" component="input" onBlur={onChangeSubmit(handleSubmit)} type="text" placeholder="Search text" />
          <label htmlFor="City">{Strings.City} :</label>
          <Field name="city" className="form-control" onBlur={onChangeSubmit(handleSubmit)} component="select">
            <option value="" >{Strings.PleaseSelectOne}</option>
            {uniqueCityList.map(dropDownSelect)}
          </Field>
          <label htmlFor="Work">{Strings.Work} :</label>
          <Field name="work"className="form-control" onBlur={onChangeSubmit(handleSubmit)} component="select">
            <option value="" >{Strings.PleaseSelectOne}</option>
            {uniqueWorkList.map(dropDownSelect)}
          </Field>
        </div>
      </div>
    </form>
  );
};

SearchFilterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  uniqueWorkList: PropTypes.arrayOf(PropTypes.string).isRequired,
  uniqueCityList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default reduxForm({ form: 'SearchFilterForm' })(SearchFilterForm);
