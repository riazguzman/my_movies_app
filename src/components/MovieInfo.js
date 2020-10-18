import React from "react";


class MovieInfoGet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: " ",
      movieImage: " ",
      moviePlot: false,
      movieRating: " ",
      movieVotes: " ",
      movieLength: " ",
    };
  }

  async ApiRequest(title) {
    let movieInfo = await fetch(
      `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${title}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "imdb-internet-movie-database-unofficial.p.rapidapi.com",
          "x-rapidapi-key":
            "429e25e66fmsh61927d98fae25adp1e283fjsn91e660eadb7a",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
    console.log(movieInfo);

    const movieTitle = movieInfo.title,
      movieImage = movieInfo.poster,
      moviePlot = movieInfo.plot,
      movieRating = movieInfo.rating,
      movieLength = movieInfo.length,
      movieVotes = movieInfo.rating_votes;

    this.setState({
      movieTitle: movieTitle,
      movieImage: movieImage,
      moviePlot: moviePlot,
      movieRating: movieRating,
      movieLength: movieLength,
      movieVotes: movieVotes,
    });
    console.log(this.state);
  }

  handleSubmit = (event) => {
    const title = this.state.search;
    this.ApiRequest(title);
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
    console.log(this.state);
  };

  render() {
    const movie = this.state.moviePlot;
    if (!movie) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Enter Movie Title Here!"
              type="text"
              onChange={this.handleChange}
            ></input>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Enter Movie Here!"
              className="form__search"
              type="text"
              onChange={this.handleChange}
            ></input>
          </form>
          <div className="form__title">{this.state.movieTitle}</div>
          <div className="info">
            <img
              className="info__image"
              src={this.state.movieImage}
              style={{ height: "500px" }}
              alt="Harry Potter"
            />
            <div className="verticalflex">
              <div className="verticalflex__title">Rating</div>
              <div className="rating">{this.state.movieRating}</div>
              <div className="verticalflex__title">Number of Votes</div>
              <div className="votes">{this.state.movieVotes}</div>
              <div className="verticalflex__title">Movie length</div>
              <div className="length">{this.state.movieLength}</div>
            </div>
            <div className="info__plot">{this.state.moviePlot}</div>
          </div>
        </div>
      );
    }
  }
}

export default MovieInfoGet;
