import { Post } from "@/types/endpoint";

export interface groupedDate {
  day: number;
  month: number;
  year: number;
  posts: Post[];
}

export function groupByDate(posts: Post[]): groupedDate[] {
  const groupedPostsByDate = posts.reduce((acc, post) => {
    const date = new Date(post.date);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const key = `${day}-${month}-${year}`;
    if (acc[key]) {
      acc[key].push(post);
    } else {
      acc[key] = [post];
    }
    return acc;
  }, {} as { [key: string]: Post[] });

  const result = Object.entries(groupedPostsByDate).map(([key, posts]) => {
    const [dayStr, monthStr, yearStr] = key.split("-");
    const day = parseInt(dayStr, 10);
    const month = parseInt(monthStr, 10);
    const year = parseInt(yearStr, 10);
    return { day, month, year, posts };
  });

  return result;
}
