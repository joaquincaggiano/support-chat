import { Form, NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/testing-page";
import { sleep } from "~/lib/sleep";

export async function action({ request }: Route.ActionArgs) {
  await sleep(1500);
  const data = await request.formData();
  console.log({ data });

  return { message: "Hello, world! from action" };
}

export async function clientAction({ serverAction }: Route.ClientActionArgs) {
  await sleep(1000);
  const serverData = await serverAction();

  return { message: "Hello, world! from client action", serverData };
}

export async function loader() {
  return { message: "Hello, world! from loader" };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  const serverData = await serverLoader();

  return { message: "Hello, world! from client loader", serverData };
}

export default function TestingPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h1>Welcome to My Route with Props!</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <NavLink
        to="/auth/testing-args/abc-123"
        className={({ isPending }) =>
          `text-blue-500 underline text-2xl ${
            isPending ? "opacity-50 cursor-progress" : ""
          }`
        }
      >
        Testing Args Page
      </NavLink>

      <Form className="flex flex-col gap-2 my-10" method="post">
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          name="age"
          placeholder="Age"
        />
        <button
          disabled={isSubmitting}
          className="bg-blue-500 text-white rounded-md p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </Form>
    </div>
  );
}
