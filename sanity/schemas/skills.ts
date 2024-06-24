import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  type: "document",
  title: "Skills",
  fields: [
    defineField({
      name: "label",
      type: "string",
      title: "Label",
      validation: (Rule) => {
        return [Rule.required()];
      },
    }),
    defineField({
      name: "purcentage_value",
      title: "Purcentage",
      type: "number",
      validation: (Rule) => [
        Rule.required().error("Purcentage is required !"),
        Rule.min(20).error("Purcentage must be greater than 10"),
        Rule.max(100).error("Purcentage must be less than or equal 100"),
      ],
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      initialValue: "frontend",
      options: {
        list: [
          { title: "Front-End", value: "frontend" },
          { title: "Back End", value: "backend" },
          { title: "Tools", value: "tools" },
        ],
      },
      validation: (Rule) => {
        return [Rule.required()];
      },
    }),
  ],
});
