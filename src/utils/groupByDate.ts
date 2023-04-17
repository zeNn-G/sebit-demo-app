import { Post } from "@/types/endpoint";

export interface groupedDate {
  day: number;
  month: number;
  posts: Post[];
}

export function groupByDate(posts: Post[]): groupedDate[] {
  const groupedPostsByDate = posts.reduce((acc, post) => {
    const date = new Date(post.date);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const key = `${month}-${day}`;
    if (acc[key]) {
      acc[key].push(post);
    } else {
      acc[key] = [post];
    }
    return acc;
  }, {} as { [key: string]: Post[] });

  const result = Object.entries(groupedPostsByDate).map(([key, posts]) => {
    const [monthStr, dayStr] = key.split("-");
    const day = parseInt(dayStr, 10);
    const month = parseInt(monthStr, 10);
    return { day, month, posts };
  });

  return result;
}
