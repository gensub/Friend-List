import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Strings from '../localization/strings';

const FriendDetailForm = (props) => {
  // console.log(props);
  const { handleSubmit } = props;
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <form onSubmit={handleSubmit}>
          <div className="form-latter table-bottom header-font center-align header-color">{Strings.FriendDataForm}</div>
          <div className="col-xs-12 custom-padding table-top">
            <div className="form-group">
              <label htmlFor="name">{Strings.Name} :</label>
              <Field name="name" className="form-control" component="input" type="text" placeholder="Enter name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{Strings.EmailAddress} :</label>
              <Field name="email" className="form-control" component="input" type="email" placeholder="Enter email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{Strings.MobileNumber} :</label>
              <Field name="phone" className="form-control" pattern="[789][0-9]{9}" title="Mobile Number (Format: 9999999999)" component="input" type="tel" placeholder="Enter mobile number" required />
            </div>
            <div className="form-group">
              <label htmlFor="work">{Strings.Work} :</label>
              <Field name="work" className="form-control" pattern="[A-Za-z]+" title="Numbers and Special charecters are not allowed" component="input" type="text" placeholder="Enter work" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">{Strings.City} :</label>
              <Field name="city" className="form-control" component="input" type="text" placeholder="Enter city" required />
            </div>
            <button type="submit" className="btn btn-default">{Strings.Submit}</button>
          </div>
        </form>
      </section>
    </div>
  );
};

FriendDetailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'FriendDetailForm' })(FriendDetailForm);
