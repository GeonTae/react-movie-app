import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, year }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={coverImg} alt={title} />
      <h2 className={styles.movie__title}>
        {/* <a href="/movie">{title}</a> */}
        <Link to={`/movie/${id}`}>{title}</Link>
        {/* Link to : doesn't reload a page => make it faster*/}
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      {/* <p>{summary}</p> */}
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
