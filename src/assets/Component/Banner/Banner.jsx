import React, { useEffect, useState } from "react";
import NetflixBannerLogo from "../../image/logo.png";
import { Play, Info } from "lucide-react";
import Styles from "../Banner/Banner.module.css";
import { movieInstance } from "../../../Utility/MovieInstance";
import requests from "../../../Utility/requestURL";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await movieInstance.get(requests.fetchNetflixOriginals);

      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }

    fetchBannerImage();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className={Styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
      }}>
      <div className={Styles.contents}>
        <img
          className={Styles.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix logo"
        />

        <h1 className={Styles.title}>{bannerImage?.original_name}</h1>

        <h1 className={Styles.description}>
          {truncate(bannerImage?.overview, 120)}
        </h1>

        {/* buttons */}
        <div className={Styles.buttonContainer}>
          <button className={Styles.button}>
            <Play size={30} />
            Play
          </button>

          <button className={Styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      <div className={Styles.fadeButton}></div>
    </div>
  );
}

export default Banner;
