import { useState } from "react";
import Header from "./assets/Component/Header/Header";
import Banner from "./assets/Component/Banner/Banner";
import DisplayRow from "./assets/Component/DisplayRow/DisplayRow";
// import MovieCard from "./assets/Component/MovieCard/MovieCard";
import "./app.css";
import Footer from "./assets/Component/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Banner />
      {/* <MovieCard /> */}
      <DisplayRow />
      <Footer />
    </>
  );
}

export default App;
