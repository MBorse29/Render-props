import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class GetMousePositions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: null, y: null };
  }
  handleMouseMove = event =>
    this.setState({ x: event.clientX, y: event.clientY });

  render() {
    return (
      <div>
        {this.props.render({
          ...this.state,
          onMouseMove: this.handleMouseMove
        })}
      </div>
    );
  }
}

function App() {
  return (
    <GetMousePositions
      render={props => (
        <div className="App" onMouseMove={props.onMouseMove}>
          <div>{`x Co-ordinate:${props.x}  & y Co-ordinate:${props.y}`}</div>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      )}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
