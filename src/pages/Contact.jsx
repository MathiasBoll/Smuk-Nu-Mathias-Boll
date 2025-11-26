// src/pages/Contact.jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { createMember } from "../services/api";

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
    <section>
      <h1>Kontakt os</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="name">Navn</label>
          <input id="name" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="content">Besked</label>
          <textarea id="content" rows={4} {...register("content")} />
          {errors.content && <p>{errors.content.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sender..." : "Send besked"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
