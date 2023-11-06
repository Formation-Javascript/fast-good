import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'categories',
  title: 'Les Catégories',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Nom du plat',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Nom de la categorie',
      type: 'string',
    }),
  ],
});
