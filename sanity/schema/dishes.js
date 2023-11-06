import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dishes',
  title: 'Les Plats',
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
    defineField({
      name: 'price',
      title: 'Prix du plat',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Category du plat',
      type: 'reference',
      to: [{ type: 'categories' }],
    }),
    defineField({
      name: 'description',
      title: 'Description du plat',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'ingredients',
      title: 'Les ingredients du plat',
      type: 'array',
      of: [{ type: 'ingredients' }],
    }),
  ],
});
