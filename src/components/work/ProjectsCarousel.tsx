import { getPosts } from "@/utils/utils";
import { ProjectsCarouselClient } from "./ProjectsCarouselClient";

export function ProjectsCarousel() {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  const sorted = allProjects.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  const projects = sorted.map((p) => ({
    slug: p.slug,
    title: p.metadata.title,
    summary: p.metadata.summary,
    image: p.metadata.images?.[0] ?? "",
  }));

  return <ProjectsCarouselClient projects={projects} />;
}
