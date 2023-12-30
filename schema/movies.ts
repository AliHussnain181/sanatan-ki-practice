export const Movies = {
  name: "movies",
  title: "Movies",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "link",
      type: "string",
      title: "Link",
    },
    {
      name: "image",
      type: "image",
      title: "Image Section",
    },
    // {
    //   title: "Refrences",
    //   name: "gallery",
    //   type: "array",
    //   of: [{ type: "image" }],
    //   options: {
    //     layout: "grid",
    //   },
    // },
    {
      name: "publicationDate",
      title: "Publication Date",
      type: "datetime",
    },
  ],
};
