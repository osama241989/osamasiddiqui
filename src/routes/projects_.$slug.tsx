import { createFileRoute, notFound } from "@tanstack/react-router";
import { systemProjects } from "@/data/systemProjects";
import { SystemCaseStudy } from "@/components/SystemCaseStudy";

export const Route = createFileRoute("/projects_/$slug")({
  loader: ({params}) => {
    const project = systemProjects.find(item => item.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({loaderData}) => {
    const title = loaderData ? `${loaderData.name} | Osama Siddiqui` : "Project unavailable | Osama Siddiqui";
    const description = loaderData?.summary ?? "Explore automation and digital system case studies by Osama Siddiqui.";
    return {meta: [{title}, {name:"description",content:description}, {property:"og:title",content:title}, {property:"og:description",content:description}, {property:"og:type",content:"article"}, {name:"twitter:card",content:"summary_large_image"}]};
  },
  component: CaseStudyPage,
});

function CaseStudyPage() { return <SystemCaseStudy project={Route.useLoaderData()} />; }