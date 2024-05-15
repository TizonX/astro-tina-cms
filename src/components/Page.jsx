import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const SectionPage = (props) => {
  const { data } = useTina(props);
  console.log(data.section);
  const { section } = data;
  const { title, sections } = section;
  return (
    <div>
      <h1>In-side component: {title}</h1>
      {sections.map((sec, i) => (
        <div key={i}>
          <h3>{sec.heading}</h3>
          <TinaMarkdown content={sec.content}  />
        </div>
      ))}
    </div>
  );
};
