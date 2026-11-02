export interface FilterableProject { industry: string; services: string[] }

export function filterProjects<T extends FilterableProject>(projects: T[], industry: string, service: string): T[] {
  return projects.filter(project => (industry === "all" || project.industry === industry) && (service === "all" || project.services.includes(service)));
}

export const projectServices: Record<string, string[]> = {
  realestate: ["Paid Advertising", "Websites & E-commerce", "CRM & Digital Systems"],
  mattress: ["Branding & Design", "Social Media", "Websites & E-commerce"],
  fnb: ["Branding & Design", "Photography & Video", "Social Media"],
  aceco: ["Paid Advertising", "SEO & Search", "Websites & E-commerce"],
  berain: ["Paid Advertising", "Social Media", "Branding & Design"],
  daffah: ["Branding & Design", "Social Media"],
  modasafi: ["Websites & E-commerce", "Social Media", "Branding & Design"],
  carwash: ["Branding & Design", "Social Media"],
  dates: ["Paid Advertising", "Branding & Design"],
  menu: ["Branding & Design"],
  itqan: ["Social Media", "Branding & Design", "Photography & Video"],
  gfsa: ["Social Media", "Branding & Design"],
  interior: ["Paid Advertising", "Social Media", "Branding & Design"],
  video: ["Photography & Video"],
  aldaam: ["Social Media", "Branding & Design"],
  biryaniking: ["Social Media", "Branding & Design"],
  marhaba: ["Branding & Design", "Social Media"],
  dessert: ["Branding & Design", "Social Media"],
  foodphoto: ["Photography & Video"],
  foodposts: ["Branding & Design", "Social Media"],
};