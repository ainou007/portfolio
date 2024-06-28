import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skills',
  type: 'document',
  title: 'Skills',
  fields: [
    // Label fields string
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => {
        return [Rule.required()];
      },
    }),

    // purcentage fields number
    defineField({
      name: 'purcent',
      title: 'Purcent',
      type: 'number',
      validation: (Rule) => [
        Rule.required().error('Purcentage is required !'),
        Rule.min(20).error('Purcentage must be greater than 10'),
        Rule.max(100).error('Purcentage must be less than or equal 100'),
      ],
    }),

    // Field with accept option set to PNG
    defineField({
      name: 'image',
      type: 'image',
      options: {
        accept: 'image/png',
      },
    }),

    // description fields string
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => {
        return [Rule.required()];
      },
    }),

    // microsysteme fields string
    defineField({
      name: 'microsysteme',
      type: 'array',
      title: 'Microsysteme',
      of: [{ type: 'image' }],
    }),
  ],
});
