import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostCard from "./PostCard";

describe("PostCard Component", () => {
  const fakePost = {
    title: "Getting paid on the Wall of Death in Rajkot, India",
    upvotes: 35800,
    image: "path/to/image.jpg",
    username: "mohiemen",
    time: "7 hours ago",
    comments: 689,
  };

  test("renders all post details correctly", () => {
    render(
      <PostCard
        title={fakePost.title}
        upvotes={fakePost.upvotes}
        image={fakePost.image}
        username={fakePost.username}
        time={fakePost.time}
        comments={fakePost.comments}
      />
    );

    expect(screen.getByText(fakePost.title)).toBeInTheDocument();
    expect(screen.getByText(fakePost.upvotes.toString())).toBeInTheDocument();
    expect(screen.getByAltText(fakePost.title)).toBeInTheDocument();
    expect(screen.getByText(fakePost.username)).toBeInTheDocument();
    expect(screen.getByText(fakePost.time)).toBeInTheDocument();
    expect(
      screen.getByText(`${fakePost.comments} comments`)
    ).toBeInTheDocument();
  });

  test("does not render an image if none is provided", () => {
    render(
      <PostCard
        title={fakePost.title}
        upvotes={fakePost.upvotes}
        username={fakePost.username}
        time={fakePost.time}
        comments={fakePost.comments}
      />
    );

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
