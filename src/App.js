import React from "react";
import ListBreed from "./containers/ShowListBreed";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <ListBreed />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
