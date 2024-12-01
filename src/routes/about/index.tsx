import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  beforeLoad: ({ context }) => {
    console.log("🚀 ~ Route ~ context:", context);
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about/"!</div>;
}
