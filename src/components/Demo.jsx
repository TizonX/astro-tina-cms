import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import "../styles/global.css";
export const Demo = (props) => {
  const { data } = useTina(props);
  const { sectionpage } = data;
  const { title, sections_1 } = sectionpage;
  console.log(sections_1);

  return (
    <div className="mx-auto max-w-screen-sm">
      <h1 className="text-lg">hell demo: {title}</h1>
      {sections_1.map((section) => (
        <div className="">
          <div className="dfc bor">
            <span>{section.tagline}</span>
            <h1>{section.headline}</h1>
            <TinaMarkdown content={section.text} />
            <div>
              <img src={section.image} className="ihw" />
            </div>
          </div>
          {/*  */}
          <div>
            {section.sections_2.map((section2) => (
              <div className="dfc">
                {section2.Type === "button" ? (
                  <button>{section2.heading}</button>
                ) : (
                  <a href={`${section2.filePath}`}>{section2.heading}</a>
                )}
                {section2.toggle && <span className="mx-5 px-3">icon</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
