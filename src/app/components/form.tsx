// File: app/compenents/form.tsx
import { neon } from "@neondatabase/serverless";

export default function Form() {
  async function create(formData: FormData) {
    "use server";
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const email = formData.get("email");
    const message = formData.get("message");
    const reason = formData.get("reason");
    const name = formData.get("name");

    // Insert the comment from the form into the Postgres database
    await sql(
      "INSERT INTO messages (email, message, reason, name) VALUES ($1, $2, $3, $4)",
      [email, message, reason, name]
    );
  }

  return (
    <div className="flex w-full flex-col items-center w-full gap-8">
      <h1 className="text-2xl font-semibold">Nous contacter</h1>
      <form className="max-w-xl mx-auto w-full" action={create}>
        <div className="mb-5">
          <label
            htmlFor="reason"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Raison du contact
          </label>
          <select
            defaultValue=""
            id="reason"
            name="reason"
            required
            className="bg-green-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
          >
            <option value="" disabled hidden>
              -- Sélectionnez une raison --
            </option>
            <option value="informations">Demande de renseignements</option>
            <option value="press">Presse</option>
            <option value="others">Autres</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre nom
          </label>
          <input
            type="name"
            id="name"
            name="name"
            className="shadow-xs bg-green-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-xs-light"
            placeholder="Nom"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-xs bg-green-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-xs-light"
            placeholder="email@exemple.fr"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            required
            maxLength={500}
            className="block p-2.5 w-full text-sm text-gray-900 bg-green-50 rounded-lg border border-green-300 focus:ring-green-500 focus:border-green-500 dark:bg-green-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Tapez votre message ici"
          ></textarea>
        </div>
        <div className="mb-5"></div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
