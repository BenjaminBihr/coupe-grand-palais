// File: app/compenents/form.tsx
import { neon } from "@neondatabase/serverless";

export default function Form() {
  async function create(formData: FormData) {
    "use server";
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const email = formData.get("email");
    const message = formData.get("message");
    // Insert the comment from the form into the Postgres database
    await sql("INSERT INTO messages (email, message) VALUES ($1, $2)", [
      email,
      message,
    ]);
  }

  return (
    <div className="flex w-full flex-col items-center w-full gap-8">
      <h1 className="text-2xl font-semibold">Nous contacter </h1>
      <form className="max-w-sm mx-auto w-full" action={create}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-xs-light"
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="mb-5"></div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Send it
        </button>
      </form>
    </div>
  );
}
