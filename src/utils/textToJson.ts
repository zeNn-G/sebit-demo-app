import { Root } from "@/types/endpoint";

export const textToJson = (text: string) => {
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  const jsonString = text.substring(jsonStart, jsonEnd + 1);
  const tumblr_api_read = JSON.parse(jsonString) as Root;

  return tumblr_api_read;
};
