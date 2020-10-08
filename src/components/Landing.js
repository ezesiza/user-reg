// @ts-nocheck
import React, { Component } from "react";
import { Link } from "react-router-dom";


class Landing extends Component {

  render () {
    return (
      <div className="landing">
        <div >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Click to Register</h1>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default Landing ;
