import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUser } from './redux/action/user'
import './App.css';

class App extends Component {

  onClickGetData = () => {
    this.props.getUserListData()
  }
  render() {
    console.log(this.props.user)

    const data = this.props.user.data.map( user => (
      <div key={Date.now()}>
          <p>Nama : {user ? user.name.first : null } </p>
          <p>Jenkel : {user ? user.gender : null} </p>
          <p>Email : {user ? user.email : null }</p>
      </div>
    ))
    return (
      <div className="App">
        <button onClick={this.onClickGetData.bind(this)}>Get User</button>
        {data}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user : state.user
})

const mapDispatchToProps = dispatch => {
  return {
      getUserListData : () => dispatch(getUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App) 
