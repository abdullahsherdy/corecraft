export interface Slug {
  current: string;
}

export interface Course {
  _id:           string;
  title:         string;
  slug:          Slug;
  track:         'foundations' | 'backend' | 'frontend';
  level:         'beginner' | 'intermediate' | 'advanced';
  duration:      string;
  excerpt:       string;
  description?:  unknown[];
  syllabus?:     string[];
  prerequisites?: string[];
  isFeatured:    boolean;
  order?:        number;
}

export interface Post {
  _id:         string;
  title:       string;
  slug:        Slug;
  publishedAt: string;
  excerpt:     string;
  body?:       unknown[];
}

export interface SiteSettings {
  heroHeadline?: string;
  heroSubline?:  string;
  ctaLabel?:     string;
  email?:        string;
}
