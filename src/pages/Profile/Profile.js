import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron bg-light border-0 rounded-0">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-sm-4 col-sm-4">
              <AccountCircleIcon color="primary" fontSize="large"/>
              <p className="h5">Protected Profile section</p>
              <Link to={"/"}><small>home</small></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}