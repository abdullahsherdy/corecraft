import { defineField, defineType } from 'sanity';

declare module 'sanity' {
  interface DocumentDefinition {
    /** Allow Sanity singleton action override used in some schemas */
    __experimental_actions?: Array<'create' | 'update' | 'delete' | 'publish'>;
  }
}

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'heroHeadline', type: 'string', title: 'Hero headline' }),
    defineField({ name: 'heroSubline',  type: 'text',   title: 'Hero sub-headline', rows: 2 }),
    defineField({ name: 'ctaLabel',     type: 'string', title: 'Hero CTA label', initialValue: 'Explore courses' }),
    defineField({ name: 'email',        type: 'string', title: 'Contact email' }),
  ],
});
