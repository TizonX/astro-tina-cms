import { defineConfig } from "tinacms";

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
            name: "sections_1",
            label: "Sections",
            list: true,
            templates: [
              {
                label: "Hero",
                name: "textSection",
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
                  },
                  {
                    type: "rich-text",
                    name: "text",
                    label: "Text",
                  },
                  //
                  {
                    type: "object",
                    name: "sections_2",
                    label: "Sections",
                    list: true,
                    templates: [
                      {
                        label: "Get Started",
                        name: "textSection",
                        fields: [
                          {
                            type: "string",
                            name: "heading",
                            label: "Label",
                            required: true,
                          },
                          {
                            type: "string",
                            name: "Type",
                            label: "Option",
                            options: ["button", "link"],
                          },
                          {
                            type: "boolean",
                            name: "toggle",
                            label: "Icon",
                            default: false,
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
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
