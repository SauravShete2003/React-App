import { Component } from "react"
import ReactDom from "react-dom/client"
import Home from "./viwes/Home/Home"
import About from "./viwes/About/About"
import Contact from "./viwes/Contact/Contact"

import {
    createBrowserRouter,
    RouterProvider
    } from "react-router-dom";


const root = ReactDom.createRoot(document.getElementById("root"))

const Router =createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
    {
        path : "/about",
        element:<About/>
    },
    {
        path : "/contact",
        element:<Contact/>
    }
])

root.render(<RouterProvider router={Router}/>)

