import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {ping} from './epic';

interface AppProps {
  isPinging: boolean;
  ping: () => {};
}
class App extends React.Component<AppProps, {}> {
  render() {
    const {isPinging, ping} = this.props;
    return (
      <div>
      <h1>is pinging: {isPinging.toString()}</h1>
      <button onClick={ping}>Start PING</button>
  </div>
    );
  }
}

export default connect(({ isPinging }) => ({ isPinging }), {ping})(App);
