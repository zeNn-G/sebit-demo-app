import { Root } from "../../types/endpoint";

export const getServerSideProps = async () => {
  const response = await fetch("https://demo.tumblr.com/api/read/json");

  //! conversion of var tumblr_api_read to JSON
  const text = await response.text();
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  const jsonString = text.substring(jsonStart, jsonEnd + 1);
  const tumblr_api_read = JSON.parse(jsonString);

  return {
    props: {
      blog: tumblr_api_read,
    },
  };
};

export default function Home({ blog }: { blog: Root }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Test
    </main>
  );
}
