import * as React from "react";
import { Button } from "../../external/reactify/components/button/Button";

export class Main extends React.PureComponent<{}> {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <Button>Click me</Button>
      </div>
    );
  }
}
