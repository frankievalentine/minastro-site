export interface PostFixture {
  slug: string;
  title: string;
  description: string;
  content: string[];
  tags: string[];
  featuredImage?: { src: string; alt: string };
  publishedAt?: string;
}

export interface ProjectFixture {
  slug: string;
  title: string;
  description: string;
  content: string[];
  tags: string[];
  status: "active" | "wip" | "archived";
  featured: boolean;
  featuredImage?: { src: string; alt: string };
  github?: string;
  url?: string;
}

export const site = {
  name: "Your Name",
  title: "Your Name",
  tagline: "Your title",
  description: "Your Name's personal website — engineer, maker, writer.",
  avatar: "/avatar.svg",
  location: "Your City",
  roles: ["Software Engineer", "Open Source", "Builder"],
  bio: "I'm a software engineer who loves building things on the web. I write about what I'm learning, projects I'm working on, and ideas worth sharing.",
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://x.com/yourusername",
    email: "hello@your-domain.com",
  },
} as const;

export const navigation = [
  { label: "About", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Projects", href: "/projects" },
  { label: "Newsletter", href: "/newsletter" },
] as const;

export const posts: PostFixture[] = [
  {
    slug: "welcome-to-your-site",
    title: "Welcome to your site",
    description: "Your first EmDash-powered post is already published and ready to edit.",
    content: [
      "This template starts with EmDash as its only content source. Open the admin to replace this post with your own writing. Powered by EmDash.",
    ],
    tags: ["Getting started"],
    featuredImage: {
      src: "/featured-post.svg",
      alt: "Abstract editorial lines and shapes representing a published article",
    },
  },
  {
    slug: "writing-in-public",
    title: "Writing in public",
    description: "A small note about making progress visible before the work feels finished.",
    content: [
      "Use this second post to explore the editor, preview flow, tags, and publishing controls.",
    ],
    tags: ["Notes"],
  },
];

export const projects: ProjectFixture[] = [
  {
    slug: "personal-site",
    title: "Personal site",
    description: "A focused home for writing, projects, and an evolving body of work.",
    content: [
      "This sample project demonstrates the project fields, featured placement, and Portable Text content.",
    ],
    tags: ["Astro", "EmDash"],
    status: "active",
    featured: true,
    featuredImage: {
      src: "/featured-project.svg",
      alt: "Abstract mountain-like lines representing a finished software project",
    },
    github: "https://github.com/yourusername/minastro",
    url: "https://your-domain.com",
  },
  {
    slug: "open-source-tool",
    title: "Open-source tool",
    description: "A placeholder project for experimenting with links, status, and tags.",
    content: [
      "Edit this project in EmDash, or delete it when you are ready to publish your own work.",
    ],
    tags: ["Open source"],
    status: "wip",
    featured: true,
  },
];

export const examplePost: PostFixture = {
  slug: "example",
  title: "Designing a calmer publishing workflow",
  description:
    "A practical look at organizing drafts, revisions, images, and publishing without moving content into the codebase.",
  content: [],
  tags: ["EmDash", "Workflow"],
  publishedAt: "2026-08-12",
  featuredImage: {
    src: "/featured-post.svg",
    alt: "Abstract editorial lines and shapes representing a published article",
  },
};

export const exampleProject: ProjectFixture = {
  slug: "example",
  title: "Release notes dashboard",
  description:
    "A small dashboard that turns repository activity into readable release notes for product teams.",
  content: [],
  tags: ["Astro", "TypeScript", "Cloudflare"],
  status: "active",
  featured: true,
  featuredImage: {
    src: "/featured-project.svg",
    alt: "Abstract mountain-like lines representing a finished software project",
  },
  github: "https://github.com/yourusername/minastro",
  url: "https://your-domain.com",
};

export const searchEntries = [
  ...posts.map((post) => ({
    title: post.title,
    description: post.description,
    type: "Post",
    href: `/posts/${post.slug}`,
  })),
  { title: examplePost.title, description: examplePost.description, type: "Post", href: "/posts/example" },
  ...projects.map((project) => ({
    title: project.title,
    description: project.description,
    type: "Project",
    href: `/projects/${project.slug}`,
  })),
  { title: exampleProject.title, description: exampleProject.description, type: "Project", href: "/projects/example" },
];
