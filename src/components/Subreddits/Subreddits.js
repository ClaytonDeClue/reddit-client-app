import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from "../Card/Card";
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditSlice';
import "./Subreddits.css";
import {
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from '../../store/redditSlice';

// const subreddits = [
//   {
//     id: 1,
//     url: "reddit-logo-removebg-preview.png",
//     display_name: "Home",
//     primary_color: "black",
//     selected: true,
//   },
//   {
//     id: 1,
//     url: "reddit-logo-removebg-preview.png",
//     display_name: "Other",
//     primary_color: "red",
//     selected: false,
//   },
// ];

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <Card className="subreddit-card">
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${
              selectedSubreddit === subreddit.url && `selected-subreddit`
            }`}
          >
            <button
              type="button"
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
            >
              <img
                src={
                  subreddit.icon_img ||
                  `https://api.dicebear.com/7.x/identicon/svg?seed=${subreddit.display_name}`
                }
                alt={`${subreddit.display_name}`}
                className="subreddit-icon"
                style={{ border: `3px solid ${subreddit.primary_color}` }}
              />
              {subreddit.display_name}
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Subreddits;
