let Routes = [
    {path:"*" ,element:<NotFound />},
    { path:"/posts" ,element:<Posts />},
    {path:"/post/:id" ,element:<Mainposts />},
    {path:"/about/*" ,element : <About /> ,children:[
        {path:"setting" ,element:<Mainposts />},
        {path:"dashboard" ,element:<Mainposts />}
    ]},
    
]