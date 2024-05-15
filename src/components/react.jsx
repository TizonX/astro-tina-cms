import { useTina } from "tinacms/dist/react";

export const MyComponent = (props) => {
  const { data } = useTina(props);
  const { post } = data;
  const { title } = post;
  return (
    <pre style={{ margin: "100px auto", width: "1000px" }}>
      <h1>{title}</h1>
      {JSON.stringify(data?.post?.body, null, 2)}
    </pre>
  );
};
