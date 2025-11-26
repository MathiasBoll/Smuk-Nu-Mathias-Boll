// src/pages/Treatments.jsx

// Lige nu har vi ikke et /treatments-endpoint i API'et,
// så vi bruger statiske data. Senere kan du flytte dem
// til en separat fil, hvis du vil.

const treatments = [
  {
    id: 1,
    name: "Ansigtsbehandling Deluxe",
    shortDescription: "Dybt rensende ansigtsbehandling med massage.",
    price: 799,
  },
  {
    id: 2,
    name: "Kropsmassage",
    shortDescription: "Afslappende helkropsmassage med varme olier.",
    price: 649,
  },
  {
    id: 3,
    name: "Vipper & Bryn",
    shortDescription: "Retning og farvning af vipper og bryn.",
    price: 349,
  },
];

function Treatments() {
  return (
    <section>
      <h1>Behandlinger</h1>

      <ul>
        {treatments.map((t) => (
          <li key={t.id}>
            <h2>{t.name}</h2>
            <p>{t.shortDescription}</p>
            <p>{t.price} kr.</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Treatments;
