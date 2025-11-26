// src/pages/TreatmentDetails.jsx
import { useParams } from "react-router-dom";

function TreatmentDetails() {
  const { id } = useParams();

  return (
    <section>
      <h1>Behandlingsdetaljer</h1>
      <p>Du har åbnet behandling med ID: {id}</p>

      <p>
        Denne side bliver færdig, når vi har API-data eller statiske treatment-data.
      </p>
    </section>
  );
}

export default TreatmentDetails;
