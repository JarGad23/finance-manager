import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "List of books" });
});

export default app;
