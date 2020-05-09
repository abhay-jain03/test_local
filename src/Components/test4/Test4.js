import React from "react";

class Test4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SearchResults: [],
      playlistName: "New Playlist",
      playlistTrack: []
    };
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.update = this.update.bind(this);
  }
}
