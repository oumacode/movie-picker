import "./style.css";
import Footer from "@/app/Components/Footer";

export default function Home() {
  return (
    <div className="app">
      <h1 className="title">Movie Picker</h1>

      <div className="film-strip">
        <div className="film-holes"></div>

        <div className="movies-container">
          <img src="/movies/inglourious.jpg" alt="Movie 1" />
          <img src="/movies/inglourious.jpg" alt="Movie 2" />
          <img src="/movies/inglourious.jpg" alt="Movie 3" />
        </div>

        <div className="film-holes bottom"></div>
      </div>

      <div className="button-container">
        <button>Click to pick a movie</button>
      </div>
      <Footer />
    </div>
  );
}
