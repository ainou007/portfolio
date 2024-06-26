import { urlRegex } from '@/lib/utils';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => {
        return [
          Rule.required().error('Label is required !'),
          Rule.min(10).error('Label must be greater than 10'),
          Rule.max(100).error('Label must be less than or equal 100'),
        ];
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => [
        Rule.required().error('Description is required !'),
        Rule.min(10).error('Description must be greater than 10'),
        Rule.max(1000).error('Description must be less than or equal 1000'),
      ],
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Image',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'demolink',
      type: 'url',
      title: 'Demo Link',
      validation: (Rule) =>
        // @ts-ignore
        Rule.regex(urlRegex).optional(),
    }),
    defineField({
      name: 'repoLink',
      type: 'url',
      title: 'Github repository',
      validation: (Rule) =>
        // @ts-ignore
        Rule.regex(urlRegex).optional(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'date',
      title: 'Published at',
      validation: (Rule) => Rule.max(new Date().toDateString()),
    }),
    defineField({
      name: 'isResponsive',
      type: 'boolean',
      title: 'Is Responsive',
      initialValue: true,
    }),
  ],
});
