import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
export const About = (props) => {
  const { data } = useTina(props);
  return (
    <section>
      <h4 class="animate font-semibold text-black dark:text-white show">
        {data.about.author} <span class="text-xl">👋🏻</span>
      </h4>
      <article class="space-y-4">
        <TinaMarkdown content={data.about.body} />
      </article>
      <div class="animate show">
        <a
          href="https://solvative.com/lets-talk/"
          class="relative group w-fit flex px-5 py-1.5 flex-nowrap rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="absolute top-1/2 right-3 -translate-y-1/2 size-5 stroke-2 fill-none stroke-current"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              class="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
            ></line>
            <polyline
              points="12 5 19 12 12 19"
              class="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
            ></polyline>
          </svg>
          <div class="text-sm">Get in touch</div>
        </a>
      </div>
    </section>
  );
};