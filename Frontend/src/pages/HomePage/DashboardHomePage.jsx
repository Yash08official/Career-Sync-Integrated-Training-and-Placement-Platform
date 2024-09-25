import * as React from "react";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
// import Cards from "./Homecards";

const DashboardHomePage = () => {
  const [posts, setPosts] = React.useState(null);

  // React.useEffect(() => {
  //     fetch("http://127.0.0.1:3000/posts")
  //     .then((res) => res.json())
  //     .then((res) => setPosts(res))
  //     .catch((err) => console.log(err))
  // },[]);

  return (
    <>
      {/* <h1>Posts</h1>
        {
            posts && (
                posts.map((post) => (
                    <h1>{post.title}</h1>
                ))
            )
        } */}
      <WelcomeBanner />
    </>
  );
};

export { DashboardHomePage };
