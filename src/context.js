import React, { Component } from "react";

const AppContext = React.createContext();
class AppProvider extends Component {
  state = {
    isLogin: false,
    userData: {},
  };
  render() {
    return (
      <AppContext.Provider context={{ appState: this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppContext, AppConsumer, AppProvider };
