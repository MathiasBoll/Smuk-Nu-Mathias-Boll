// src/pages/Join.jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { createMember } from "../services/api";
import PageHeader from "../components/pageheader/PageHeader.jsx";
import styles from "./join.module.css";

const schema = yup.object({
  name: yup.string().required("Skriv dit navn"),
  email: yup
    .string()
    .email("Skriv en gyldig email")
    .required("Email er påkrævet"),
  note: yup.string().optional(),
});

function Join() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    try {
      await createMember({
        name: data.name,
        email: data.email,
        content: data.note || "Bliv medlem formular",
      });

      Swal.fire({
        icon: "success",
        title: "Tak!",
        text: "Du er nu tilmeldt som medlem.",
      });
      reset();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Noget gik galt",
        text: "Vi kunne ikke gemme din tilmelding. Prøv igen senere.",
      });
    }
  }

  return (
    <>
      {/* Hero med hvid variant som i Figma */}
      <PageHeader
        variant="white"
        title="BLIV MEDLEM"
        subtitle="Herunder har vi samlet særlige fordele til medlemmer af vores kundeklub. Tilmeld dig og få nyheder, rabatter og meget mere."
      />

      {/* Formular-del */}
      <main className={styles.page}>
        <section className={styles.formSection}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.field}>
              <label htmlFor="name">Fulde navn</label>
              <input id="name" {...register("name")} />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" {...register("email")} />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="note">Ris og/eller ros</label>
              <textarea id="note" rows="3" {...register("note")} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sender..." : "Opret"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Join;
