import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Footer = (props) => {
  const { data } = useTina(props);
  return (
    <div class="mx-auto max-w-screen-sm">
      <div class="space-y-16">
        <section class="animate space-y-4 show">
          <h5 class="font-semibold text-black dark:text-white">
            {data.about.author}
          </h5>
          <article>
            <p>
              <TinaMarkdown content={data.about.body} />
            </p>
          </article>
          <ul class="flex flex-wrap gap-2">
            <li class="flex gap-x-2 text-nowrap">
              <a
                href="https://twitter.com/markhorn_dev"
                target="_blank"
                class="inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2"
                aria-label="Astro Nano on twitter-x"
              >
                twitter-x
              </a>{" "}
              /
            </li>
            <li class="flex gap-x-2 text-nowrap">
              <a
                href="https://github.com/markhorn-dev"
                target="_blank"
                class="inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2"
                aria-label="Astro Nano on github"
              >
                github
              </a>{" "}
              /
            </li>
            <li class="flex gap-x-2 text-nowrap">
              <a
                href="https://www.linkedin.com/in/markhorn-dev"
                target="_blank"
                class="inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2"
                aria-label="Astro Nano on linkedin"
              >
                linkedin
              </a>{" "}
              /
            </li>
            <li class="line-clamp-1">
              <a
                href="mailto:markhorn.dev@gmail.com"
                target="_self"
                class="inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2"
                aria-label="Email Astro Nano"
              >
                markhorn.dev@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
