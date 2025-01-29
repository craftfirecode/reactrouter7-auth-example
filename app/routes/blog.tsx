import type { Route } from "./+types/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog" },
    { name: "description", content: "Stuff we write" },
  ];
}

export default function BlogPage() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        Blog.
      </div>
    </main>
  );
}
