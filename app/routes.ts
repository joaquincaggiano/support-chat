import {
  type RouteConfig,
  index,
  layout,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  // Home
  index("routes/home.tsx"),

  // Auth
  ...prefix("/auth", [
    layout("layouts/auth-layout.tsx", [
      route("login", "routes/auth/login-page.tsx"),
      route("register", "routes/auth/register-page.tsx"),
    ]),
  ]),

  // Chat
  ...prefix("/chat", [
    layout("layouts/chat-layout.tsx", [
      index("routes/chat/no-chat-selected-page.tsx"),
      route("abc", "routes/chat/client-chat-page.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
