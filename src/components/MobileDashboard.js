import React from 'react';
import Login from '../containers/Login';

const MobileDashboard = ({}) => {
  return (
    <div>
        <div style={mobileContainer}>
            Welcome to BEK MOBILE Dashboard
        </div>
        <div>
            <img style={avatar} src="http://bit.ly/2hkiY4s" alt="login"/>
        </div>
        <div>
        </div>
    </div>

    )//end of return
};

export default MobileDashboard;

const mobileContainer = {
    backgroundColor: "lightblue",
    textAlign:"center",
    fontSize:"40px"

    }

const avatar = {
    margin: "30px",
    height: "260px",
    }
const login = {
    marginTop:"40px",
    maxWidth: "300px"

    }
