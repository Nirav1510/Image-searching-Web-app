import React from "react";
import Unsplash from "../Api/unsplash";
import SearchBar from "./searchBar";
import ImageList from "./imageList";

class App extends React.Component {
  state = { img: [] };
  onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ img: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.img}/>
      </div>
    );
  }
}

export default App;
