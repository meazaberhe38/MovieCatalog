import React from "react";
import Styles from "../MovieCard/MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
function MovieCard({ movie }) {
  let geners = ["Adventure", "Action", "Thriller"];

  return (
    <div className={Styles.cardWrapper}>
      {/* poster image */}
      <img
        className={Styles.poster}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt="Poster image"
      />

      {/* hover card */}
      <div className={Styles.hoverCard}>
        <img
          className={Styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt="hover image"
        />

        {/* badge */}
        <div className={Styles.badge}>Recently added</div>

        <div className={Styles.buttonRow}>
          <FaCirclePlay color="white" size={40} />
          <BsPlusCircle color="white" size={40} />
          <GoCheckCircleFill color="white" size={40} />

          <IoIosArrowDropdownCircle
            className={Styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        {/* metadata row */}
        <div className={Styles.metaRow}>
          <span>U/A 16+</span>
          <span>Movie</span>
          <span>HD</span>
        </div>

        {/* genres */}
        <div className={Styles.genreRow}>
          {geners.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < geners.length - 1 && <span> • </span>}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
