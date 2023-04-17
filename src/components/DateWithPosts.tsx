import { Post } from "@/types/endpoint";

type Props = {
  day: number;
  month: number;
  posts: Post[];
};

const DateWithPosts = ({ day, month, posts }: Props) => {
  const monthName = new Date(2023, month - 1).toLocaleString("tr-TR", {
    month: "long",
  });

  return (
    <div className="flex ">
      <p>
        {day} - {monthName}
      </p>
    </div>
  );
};

export default DateWithPosts;
