import { Link } from "react-router";
import type { Route } from "./+types/testing-args-page";
import { sleep } from "~/lib/sleep";

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export function links() {
  return [
    // {
    //   rel: "icon",
    //   href: "/favicon.png",
    //   type: "image/png",
    // },
    // {
    //   rel: "stylesheet",
    //   href: "https://example.com/some/styles.css",
    // },
    // {
    //   rel: "preload",
    //   href: "/images/banner.jpg",
    //   as: "image",
    // },
  ];
}

export async function clientLoader() {
  await sleep(1000);
  return { message: "Hello, world! from client loader" };
}

export function HydrateFallback() {
  return <p>Loading Game...</p>;
}

export default function TestingArgsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div>
      <title>Very cool app</title>
      <meta property="og:title" content="Very cool app" />
      <meta name="description" content="This app is the best" />

      <h1>Welcome to Testing Args Page!</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <Link to="/auth/testing" className="text-blue-500 underline text-2xl">
        Testing Page
      </Link>
    </div>
  );
}
