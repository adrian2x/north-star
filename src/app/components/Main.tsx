import * as React from 'react';
import {Button} from '../../external/reactify/components/button/Button';

export class Main extends React.PureComponent<{}> {
  state = {
    counter: 1,
  };

  render() {
    return (
      <div>
        <h1>Amount</h1>
        <Button onClick={this.minus} disabled={!this.state.counter}>
          -
        </Button>
        <span>{this.state.counter}</span>
        <Button onClick={this.plus}>+</Button>
      </div>
    );
  }

  minus = () => this.setState({counter: this.state.counter - 1});
  plus = () => this.setState({counter: this.state.counter + 1});
}
