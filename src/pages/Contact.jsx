// src/pages/Contact.jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { createMember } from "../services/api";
import styles from "./contact.module.css"; // <- vigtig

const schema = yup.object({
  name: yup.string().required("Skriv dit navn"),
  email: yup
    .string()
    .email("Skriv en gyldig email")
    .required("Email er påkrævet"),
  content: yup.string().required("Skriv en besked"),
});

function Contact() {
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
      await createMember(data);

      Swal.fire({
        icon: "success",
        title: "Tak for din besked!",
        text: "Vi vender tilbage hurtigst muligt.",
      });

      reset();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Noget gik galt",
        text: "Din besked kunne ikke sendes. Prøv igen senere.",
      });
    }
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Kontakt os</h1>

      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={styles.group}>
          <label className={styles.label} htmlFor="name">
            Fulde navn
          </label>
          <input
            id="name"
            className={styles.input}
            {...register("name")}
          />
          {errors.name && (
            <p className={styles.error}>{errors.name.message}</p>
          )}
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className={styles.input}
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="content">
            Ris og/eller ros
          </label>
          <textarea
            id="content"
            rows={4}
            className={styles.textarea}
            {...register("content")}
          />
          {errors.content && (
            <p className={styles.error}>{errors.content.message}</p>
          )}
        </div>

        <button
          className={styles.button}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sender..." : "Send besked"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
