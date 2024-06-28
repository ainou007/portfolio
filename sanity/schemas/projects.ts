import { urlRegex } from '@/lib/utils';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    // label field
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

    // description field
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

    // gallery field
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'gallery',
      of: [{ type: 'image' }],
    }),

    // tags field
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
    }),

    //demo link field
    defineField({
      name: 'demoLink',
      type: 'url',
      title: 'Demo Link',
      validation: (Rule) =>
        // @ts-ignore
        Rule.regex(urlRegex).optional(),
    }),

    // repo link field
    defineField({
      name: 'repoLink',
      type: 'url',
      title: 'Github repository',
      validation: (Rule) =>
        // @ts-ignore
        Rule.regex(urlRegex).optional(),
    }),

    // isCompleted field
    defineField({
      name: 'isCompleted',
      type: 'boolean',
      title: 'Is Completed',
      initialValue: false,
    }),

    // isResponsive field
    defineField({
      name: 'isResponsive',
      type: 'boolean',
      title: 'Is Responsive',
      initialValue: true,
    }),
  ],
});
