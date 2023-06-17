import Mainposts from "./Mainposts";
import NotFound from "./NotFound.js";

import About from "./About.js";
import Posts from "./Posts";

let Routes = [
    { path:"/posts" ,element:<Posts />},
    {path:"/post/:id" ,element:<Mainposts />},
    {path:"/about/*" ,element : <About /> ,children:[
        {path:"setting" ,element:<h1> setting </h1>},
        {path:"dashboard" ,element:<h1>dashboard</h1>}
    ]},
    {path:"*" ,element:<NotFound />},
    
]
export default Routes