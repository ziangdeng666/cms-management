import App from 'App'
import {lazy, Suspense} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const router_arr = [
    {path:'/', component: App, children:[
        {path:'list', component: lazy(()=>import("pages/List"))},
        {path:'/edit', component: lazy(()=>import("pages/Edit"))},
        {path:'/warehouse', component: lazy(()=>import("pages/Warehouse"))}
    ]},    
    {path:'/login', component: lazy(()=>import("Login"))},    
    {path:'/register', component: lazy(()=>import("Register"))},

]

const MyRouter = ()=> (
    <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
        <Routes>
             {
                router_arr.map((item, index)=> {
                    return(
                        item.children? 
                        <Route key={index} path={item.path} element={<item.component />}>
                            {
                            item.children.map((e,i)=><Route key={i} path={e.path} element={<e.component />}></Route>)
                            }
                        </Route>  
                        :
                        <Route key={index} path={item.path} element={<item.component />}></Route>
                     )
                   })
              }
            </Routes>
        </Suspense>      
    </BrowserRouter>
)

export default MyRouter;