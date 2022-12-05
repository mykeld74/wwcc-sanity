import { FaYoutube } from "react-icons/fa";

export default {
  name: "currentseries",
  title: "YouTube Current Series",
  type: "document",
  icon: FaYoutube,
  fields: [
    {
      name: "linkid",
      title: "YouTube Link ID",
      description: "https://www.youtube.com/embed/videoseries?list=",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "linkid",
      subtitle: "linkid",
    },
    prepare({ title, subtitle }) {
      return {
        title: "YouTube Link ID",
        subtitle: title,
      };
    },
  },
};
