export interface Slug {
  current: string;
}

export interface SanityBlock {
  _type: string;
  _key:  string;
  [key: string]: unknown;
}

export interface Course {
  _id:            string;
  title:          string;
  slug:           Slug;
  track:          'foundations' | 'backend' | 'frontend';
  level:          'beginner' | 'intermediate' | 'advanced';
  duration:       string;
  excerpt:        string;
  description?:   SanityBlock[];
  outcomes?:      string[];
  syllabus?:      string[];
  prerequisites?: string[];
  audience?:      string;
  isFeatured:     boolean;
  order?:         number;
}

export interface Post {
  _id:         string;
  title:       string;
  slug:        Slug;
  publishedAt: string;
  excerpt:     string;
  body?:       SanityBlock[];
}

export interface SiteSettings {
  heroHeadline?: string;
  heroSubline?:  string;
  ctaLabel?:     string;
  email?:        string;
}
