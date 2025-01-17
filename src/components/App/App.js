import "./App.css";
import Header from "../Header/Header";
import PostList from "../PostList/PostList";
import Subreddits from "../Subreddits/Subreddits";

// const fakePosts = [
//   {
//     id: 1,
//     title: "Getting paid on the Wall of Death in Rajkot, India",
//     ups: 35800,
//     url: "reddit-logo-removebg-preview.png",
//     author: "mohiemen",
//     created_utc: 1704825600,
//     num_comments: 6890,
//     showingComments: true,
//     comments: [
//       {
//         id: 1,
//         author: "commentor",
//         created_utc: 1704825600,
//         body: "This is my comment",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "A stunning sunset over the Grand Canyon",
//     ups: 15000,
//     url: "reddit-logo-removebg-preview.png",
//     author: "nature_lover",
//     created_utc: 1704825600,
//     num_comments: 32000,
//     showingComments: false,
//   },
// ];

const App = () => {
  return (
    <>
      <Header />
      <main>
        <PostList />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
};

export default App;
