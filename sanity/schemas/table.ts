export default {
  name: "table",
  title: "Table",
  type: "object",
  fields: [
    {
      name: "rows",
      title: "Rows",
      type: "array",
      validation: (Rule: any) => Rule.required().min(1), // Ensure at least 1 row
      of: [
        {
          type: "object",
          fields: [
            {
              name: "cells",
              title: "Cells",
              type: "array",
              validation: (Rule: any) => Rule.required().min(1), // Ensure at least 1 cell (column)
              of: [
                {
                  type: "object",
                  name: "cell",
                  title: "Cell",
                  fields: [
                    {
                      name: "content",
                      title: "Content",
                      type: "array",
                      of: [{ type: "block" }], // Each cell can now contain rich text
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
