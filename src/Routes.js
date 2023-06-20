// import Mainposts from "./Mainposts";
import About from "./About.js";
import Posts from "./Posts";
import Panel from "./Panel";
import Privetroute from "./Privetroute";
let Routes = [
  { path: "/posts", element: <Posts /> },
  // { path: "/post/:id", element: <Mainposts /> },

  {
    path: "/about/*",
    element: <About />,
    children: [
      { path: "setting", element: <h1> setting </h1> },
      { path: "dashboard", element: <h1>dashboard</h1> },
    ],
  },
  {
    path: "/*",
    element: <Privetroute></Privetroute>,
    children: [{ path: "panel", element: <Panel></Panel> }],
  },
];
export default Routes;
