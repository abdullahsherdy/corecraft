export const COURSES_QUERY = `
  *[_type == "course" && !(_id in path("drafts.**"))] | order(order asc) {
    _id, title, slug, track, level, duration, excerpt, isFeatured
  }
`;

export const COURSE_SLUGS_QUERY = `
  *[_type == "course" && !(_id in path("drafts.**"))] {
    "slug": slug.current
  }
`;

export const COURSE_BY_SLUG_QUERY = `
  *[_type == "course" && slug.current == $slug][0] {
    _id, title, slug, track, level, duration, excerpt, description,
    syllabus, prerequisites, isFeatured
  }
`;

export const POSTS_QUERY = `
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id, title, slug, publishedAt, excerpt
  }
`;

export const POST_SLUGS_QUERY = `
  *[_type == "post" && !(_id in path("drafts.**"))] {
    "slug": slug.current
  }
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, publishedAt, excerpt, body
  }
`;

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    heroHeadline, heroSubline, ctaLabel, email
  }
`;
