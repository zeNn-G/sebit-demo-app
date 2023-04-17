import { Post } from "@/types/endpoint";
import dayjs from "dayjs";
import "dayjs/locale/tr";

type Props = {
  day: number;
  month: number;
  year: number;
  posts: Post[];
};

const DateWithPosts = ({ day, month, year, posts }: Props) => {
  const fullDate = dayjs(`${year}-${month}-${day}`);

  const dayOfMonth = fullDate.format("DD");
  const monthName = fullDate.format("MMMM");
  const weekdayName = fullDate.locale("tr").format("dddd");

  return (
    <div className="flex ">
      <p>{dayOfMonth}</p>
      <p>{monthName}</p>
      <p>{weekdayName}</p>
    </div>
  );
};

export default DateWithPosts;
