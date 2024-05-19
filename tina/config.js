import { defineConfig } from "tinacms";
const heroTemplate = {
  name: "hero",
  label: "Hero Section",
  fields: [{ name: "heading", label: "Heading", type: "string" }],
};

const featuresTemplate = {
  name: "features",
  label: "Features Section",
  fields: [
    { name: "heading", label: "Heading", type: "string" },
    { name: "buttonText", label: "Button Text", type: "string" },
  ],
};
// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // post
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // blog
      {
        name: "blog",
        label: "Blogs",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // about
      {
        name: "about",
        label: "About",
        path: "src/content/home",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "about") {
              return `/`;
            }
            if (document._sys.filename === "connect-with-me") {
              return `/`;
            }
            return undefined;
          },
        },
        fields: [
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // sections
      {
        name: "section",
        label: "section-pages",
        path: "src/content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "sections",
            label: "Sections",
            list: true,
            templates: [
              {
                label: "Hero",
                name: "textSection",
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                    required: true,
                  },
                  {
                    type: "rich-text",
                    name: "content",
                    label: "Content",
                  },
                ],
              },
              {
                label: "Image Section",
                name: "imageSection",
                fields: [
                  {
                    type: "string",
                    name: "imageSrc",
                    label: "Image Source",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "caption",
                    label: "Caption",
                  },
                ],
              },
            ],
          },
        ],
      },
      // new page-section
      {
        name: "sectionpage",
        label: "my-section",
        path: "src/content/demo",
        ui: {
          router: () => {
            return `/demo`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "sections",
            label: "Sections",
            list: true,
            templates: [
              {
                label: "Hero",
                name: "heroSection",
                fields: [
                  {
                    type: "string",
                    name: "tagline",
                    label: "Tagline",
                  },
                  {
                    type: "string",
                    name: "headline",
                    label: "Headline",
                    required: true,
                    isTitle: true,
                  },
                  {
                    type: "rich-text",
                    name: "text",
                    label: "Text",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image Upload",
                  },
                  {
                    type: "string",
                    name: "color",
                    label: "Color",
                    options: ["red", "blue", "green", "yellow"],
                  },
                  {
                    type: "object",
                    name: "actionSection",
                    label: "Actions",
                    list: true,
                    templates: [
                      {
                        label: "Action Label",
                        name: "actionLabel",
                        fields: [
                          {
                            type: "string",
                            name: "heading",
                            label: "Label",
                            required: true,
                            isTitle: true,
                          },
                          {
                            type: "string",
                            name: "type",
                            label: "Button",
                            options: ["button", "link"],
                            default: "button",
                          },
                          {
                            type: "boolean",
                            name: "toggle",
                            label: "Icon",
                            default: false,
                            default: "false",
                          },
                          {
                            type: "string",
                            name: "filePath",
                            label: "Link",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: "Feature",
                name: "featureSection",
                fields: [
                  {
                    name: "featureItems",
                    label: "Feature Items",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: `${item?.title}` };
                      },
                    },
                    defaultItem: {
                      title: "Here's Another Feature",
                      featureText:
                        "This is where you might talk about the feature, if this wasn't just filler text.",
                    },
                    fields: [
                      {
                        name: "title",
                        label: "Title",
                        type: "string",
                        isTitle: true,
                        required: true,
                      },
                      {
                        label: "Text",
                        name: "featureText",
                        type: "string",
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                label: "Testimonial",
                name: "testimonialSection",
                type: "object",
                list: true,
                defaultItem: {
                  testimonialQuote: "Phil Karlton",
                  testimonialAuthor:
                    "There are only two hard things in Computer Science: cache invalidation and naming things.",
                },
                fields: [
                  {
                    label: "Quote",
                    name: "testimonialQuote",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    name: "testimonialAuthor",
                    label: "Author",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
      //
      {
        name: "chat",
        label: "chat-gpt",
        path: "src/content/chat",
        format: "md",
        fields: [
          { name: "title", label: "Title", type: "string" },
          {
            name: "sections",
            label: "Sections",
            type: "object",
            list: true,
            templates: [heroTemplate, featuresTemplate],
          },
        ],
      },
    ],
  },
});
