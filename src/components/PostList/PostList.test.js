import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostList from "./PostList";

const fakePosts = [
  {
    title: "Getting paid on the Wall of Death in Rajkot, India",
    upvotes: 35800,
    image: "path/to/image1.jpg",
    username: "mohiemen",
    time: "7 hours ago",
    comments: 689,
  },
  {
    title: "A stunning sunset over the Grand Canyon",
    upvotes: 15000,
    image: "path/to/image2.jpg",
    username: "nature_lover",
    time: "3 hours ago",
    comments: 320,
  },
];

describe("PostList Component", () => {
  test("renders the correct number of PostCard components", () => {
    render(<PostList posts={fakePosts} />);

    const postCards = screen.getAllByRole("heading"); // Assuming each post has a title inside an h2
    expect(postCards).toHaveLength(fakePosts.length);
  });

  test("each PostCard receives correct data", () => {
    render(<PostList posts={fakePosts} />);

    fakePosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.username)).toBeInTheDocument();
      expect(screen.getByText(post.time)).toBeInTheDocument();
      expect(screen.getByText(`${post.comments} comments`)).toBeInTheDocument();
    });
  });
});
