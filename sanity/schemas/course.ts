import { defineField, defineType } from 'sanity';

export const courseSchema = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({ name: 'title',         type: 'string',  title: 'Title',            validation: (R) => R.required() }),
    defineField({ name: 'slug',          type: 'slug',    title: 'Slug',             options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'track',         type: 'string',  title: 'Track',            options: { list: ['foundations', 'backend', 'frontend'] } }),
    defineField({ name: 'level',         type: 'string',  title: 'Level',            options: { list: ['beginner', 'intermediate', 'advanced'] } }),
    defineField({ name: 'duration',      type: 'string',  title: 'Duration',         description: 'e.g. "8 weeks"' }),
    defineField({ name: 'excerpt',       type: 'text',    title: 'Short description', rows: 3 }),
    defineField({ name: 'description',   type: 'array',   title: 'Full description', of: [{ type: 'block' }] }),
    defineField({ name: 'syllabus',      type: 'array',   title: 'Syllabus topics',  of: [{ type: 'string' }] }),
    defineField({ name: 'prerequisites', type: 'array',   title: 'Prerequisites',    of: [{ type: 'string' }] }),
    defineField({ name: 'isFeatured',    type: 'boolean', title: 'Featured?',        initialValue: false }),
    defineField({ name: 'order',         type: 'number',  title: 'Display order' }),
  ],
});
