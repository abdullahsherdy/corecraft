import { defineField, defineType } from 'sanity';

export const postSchema = defineType({
  name: 'post',
  title: 'Blog post',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string', title: 'Title',        validation: (R) => R.required() }),
    defineField({ name: 'slug',        type: 'slug',   title: 'Slug',         options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'publishedAt', type: 'date',   title: 'Published at', validation: (R) => R.required() }),
    defineField({ name: 'excerpt',     type: 'text',   title: 'Excerpt',      rows: 3 }),
    defineField({ name: 'body',        type: 'array',  title: 'Body',         of: [{ type: 'block' }] }),
  ],
});
