import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import "../styles/demo.css";
import "../styles/global.css";
import CardComponent from "./CardComponent";
import Testimonial from "./Testimonial";
export const DemoPage = (props) => {
  const { data } = useTina(props);
  const { sectionpage } = data;
  const { title, sections } = sectionpage;

  return (
    <div className="mx-auto max-w-screen-sm">
      <div className="">
        {sections.map((section) => {
          switch (section.__typename) {
            case "SectionpageSectionsHeroSection":
              return (
                <div className="card-container">
                  <div className="">
                    {section.tagline && (
                      <span className="inline-block px-3 py-1 mb-8 text-md font-bold tracking-wide title-font z-20">
                        {section.tagline}
                      </span>
                    )}
                    {section?.headline && (
                      <h1
                        className="title text-xxl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
                        data-tina-field={tinaField(section, "headline")}
                      >
                        {section?.headline}
                      </h1>
                    )}
                    {section.text && (
                      <p
                        className="paragraph"
                        data-tina-field={tinaField(section, "text")}
                      >
                        <TinaMarkdown content={section?.text} />
                      </p>
                    )}
                    {section.image && (
                      <div>
                        <img src={section.image} className="ihw" />
                      </div>
                    )}
                  </div>
                  <div className="">
                    {section?.actionSection?.map((section2) => (
                      <div className="dfc">
                        {section2.type === "button" ? (
                          <button
                            className="button"
                            data-tina-field={tinaField(section2, "heading")}
                          >
                            {section2.heading} {section2.toggle && "icon"}
                          </button>
                        ) : (
                          <a
                            className="link"
                            href={`${section2.filePath}`}
                            data-tina-field={tinaField(section2, "actionLabel")}
                          >
                            {section2.heading}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            case "SectionpageSectionsFeatureSection":
              return (
                <div className="card-container">
                  {section.featureItems.map((featue) => (
                    <CardComponent
                      title={featue.title}
                      description={featue.featureText}
                      featue={featue}
                    />
                  ))}
                </div>
              );
            case "SectionpageSectionsTestimonialSection":
              return (
                <Testimonial
                  quote={section.testimonialQuote}
                  author={section.testimonialAuthor}
                  section={section}
                />
              );
            // carse
          }
        })}
      </div>
    </div>
  );
};
