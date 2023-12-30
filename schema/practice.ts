export const Practice = {
  name: "practice",
  title: "Practice",
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
        //   name: 'imagesZip',
        //   title: 'refrences ZIP',
        //   type: 'file',
        //   options: {
        //     accept: '.zip', // Restrict to ZIP files
        //   },
        // },
    {
      name: "publicationDate",
      title: "Publication Date",
      type: "datetime",
    },
  ],
};
