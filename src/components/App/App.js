import './App.css';
import Header from '../Header/Header';
import PostList from '../PostList/PostList';

const fakePosts = [
  {
    id: 1,
    title: "Getting paid on the Wall of Death in Rajkot, India",
    ups: 35800,
    url: "reddit-logo-removebg-preview.png",
    author: "mohiemen",
    created_utc: "7 hours ago",
    num_comments: 689,
    showingComments: false,
  },
  {
    id: 2,
    title: "A stunning sunset over the Grand Canyon",
    ups: 15000,
    url: "reddit-logo-removebg-preview.png",
    author: "nature_lover",
    created_utc: "3 hours ago",
    num_comments: 320,
    showingComments: false,
  },
];

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <PostList posts={fakePosts} />
      </main>
    </div>
  );
}

export default App;
