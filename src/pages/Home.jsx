// src/pages/Home.jsx
import Reviews from "../components/reviews/Reviews.jsx";
import FAQ from "../components/infoSection/FAQ.jsx";

function Home() {
  return (
    <>
      <h1>Smuk Nu</h1>
      {/* hero / intro kan komme her senere */}
      <Reviews />
      <FAQ />
    </>
  );
}

export default Home;
