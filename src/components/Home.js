import React from 'react';
import { NavLink } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';
import PropTypes from 'prop-types';
import SearchFilterContainer from '../container/searchFilterContainer';
import Strings from '../localization/strings';

const Home = (props) => {
  const { onImportant, onsort, onDelete, isSearch, searchList, friendlist } = props;
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="">
          <div className="center-align form-latter custom-padding table-bottom header-font header-color">{Strings.FriendDataTable}</div>
          <SearchFilterContainer />
          <div className="col-xs-12 custom-padding table-top table-responsive">
            <table className="table table-striped">
              <thead className="thead-brown">
                <tr>
                  <th onClick={() => onsort('name')}>{Strings.Name} <span className="glyphicon glyphicon-sort" /></th>
                  <th onClick={() => onsort('email')}>{Strings.Email} <span className="glyphicon glyphicon-sort" /></th>
                  <th onClick={() => onsort('phone')}>{Strings.Phone} <span className="glyphicon glyphicon-sort" /></th>
                  <th onClick={() => onsort('work')}>{Strings.Work} <span className="glyphicon glyphicon-sort" /></th>
                  <th onClick={() => onsort('city')}>{Strings.City} <span className="glyphicon glyphicon-sort" /></th>
                  <th>{Strings.Important}</th>
                  <th>{Strings.Edit}</th>
                  <th>{Strings.Delete}</th>
                </tr>
              </thead>
              <tbody>
                {(isSearch ?
                   searchList :
                   friendlist).map(user =>
                  (<tr key={user.id}>
                    <th scope="row">{user.name}</th>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.work}</td>
                    <td>{user.city}</td>
                    <td>{user.important ? <a><span role="link" tabIndex={-1} onClick={() => onImportant(user.id)} className="glyphicon glyphicon-star" /></a> : <a><span role="link" tabIndex={-1} onClick={() => onImportant(user.id)} className="glyphicon glyphicon-star-empty" /></a>}</td>
                    <td><NavLink activeClassName="active" to={`/Submit/${user.id}`} ><span className="glyphicon glyphicon-edit" /></NavLink></td>
                    <td><a><span role="link" tabIndex={-1} onClick={() => onDelete(user.id)} className="glyphicon glyphicon-trash" /></a></td>
                  </tr>),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  friendlist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.shape.isRequired,
    email: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  })).isRequired,
  isSearch: PropTypes.bool.isRequired,
  onsort: PropTypes.func.isRequired,
  searchList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.shape.isRequired,
    email: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  })).isRequired,
  onImportant: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Home;
