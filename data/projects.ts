export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  cover: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "quings",
    number: "01",
    title: "QUINGS",
    category: "Brand Identity",
    description:
      "A visual identity built around bold expression, confident energy and a distinctive sense of style.",
    cover: "/images/brand-one-01.jpg",
    images: [
      "/images/brand-one-01.jpg",
      "/images/brand-one-02.jpg",
      "/images/brand-one-03.jpg",
      "/images/brand-one-04.jpg",
      "/images/brand-one-05.jpg",
      "/images/brand-one-06.jpg",
      "/images/brand-one-07.jpg",
      "/images/brand-one-08.jpg",
      "/images/brand-one-09.jpg",
    ],
  },

  {
    slug: "krova",
    number: "02",
    title: "KROVA",
    category: "Brand Identity",
    description:
      "A distinctive visual identity shaped through thoughtful design, expressive details and a strong contemporary presence.",
    cover: "/images/krova-01.jpg",
    images: [
      "/images/krova-01.jpg",
      "/images/krova-02.jpg",
      "/images/krova-03.jpg",
      "/images/krova-04.jpg",
      "/images/krova-05.jpg",
      "/images/krova-06.jpg",
      "/images/krova-07.jpg",
      "/images/krova-08.jpg",
      "/images/krova-09.jpg",
    ],
  },

  {
    slug: "uron",
    number: "03",
    title: "URON",
    category: "Brand Identity",
    description:
      "A considered visual identity built to give URON a distinctive presence through strong composition, expressive visuals and a refined design language.",
    cover: "/images/uron-01.jpg",
    images: [
      "/images/uron-01.jpg",
      "/images/uron-02.jpg",
      "/images/uron-03.jpg",
      "/images/uron-04.jpg",
      "/images/uron-05.jpg",
      "/images/uron-06.jpg",
      "/images/uron-07.jpg",
      "/images/uron-08.jpg",
      "/images/uron-09.jpg",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}