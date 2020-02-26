import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>This is Container</h1>
        {this.state.loading ? "loading..." : "ready"}
      </div>
    );
  }
}

export default App;
