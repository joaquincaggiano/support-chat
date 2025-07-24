import { Form, NavLink } from "react-router";
import type { Route } from "./+types/testing-page";

export async function action({ request }: Route.ActionArgs) {
  const data = await request.formData();
  console.log({ data });

  return { message: "Hello, world! from action" };
}

export async function clientAction({ serverAction }: Route.ClientActionArgs) {
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

export default function MyRouteComponent({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
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
        <button className="bg-blue-500 text-white rounded-md p-2" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}
