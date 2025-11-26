import Reviews from "../components/reviews/Reviews.jsx";
import FAQ from "../components/infoSection/FAQ.jsx";
import PageHeader from "../components/pageheader/PageHeader.jsx";

function Home() {
  return (
    <>
      <PageHeader
        variant="pink"
        title="SKØNHED FOR ALLE"
        subtitle="Herunder har vi samlet spørgsmål og svar om sundhed. Se vores udvalgte produkter."
        buttonText="Se udvalgte produkter"
      />

      <Reviews />
      <FAQ />
    </>
  );
}

export default Home;
