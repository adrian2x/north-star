import * as React from 'react';

export class Main extends React.PureComponent<{}> {
  state = {
    counter: 1,
  };

  render() {
    return (
      <div>
        <h1>Amount</h1>
        <button onClick={this.minus} disabled={!this.state.counter}>
          -
        </button>
        <span>{this.state.counter}</span>
        <button onClick={this.plus}>+</button>
      </div>
    );
  }

  minus = () => this.setState({counter: this.state.counter - 1});
  plus = () => this.setState({counter: this.state.counter + 1});
}
