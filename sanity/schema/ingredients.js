import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ingredients',
  title: 'Les Ingredients',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Nom du plat',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Nom du plat',
      type: 'string',
    }),
  ],
});
