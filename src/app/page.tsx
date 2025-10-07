import { getLatestPost } from "@/data/blog-posts";
import HomeClient from "./home-client";

export default function Home() {
  const latestPost = getLatestPost();
  
  return (
    <HomeClient latestPost={latestPost} />
  );
}