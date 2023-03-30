import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Countries from "../Components/Countries/Countries";
import CountryDetails from "../Components/CountryDetails/CountryDetails";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {path: '/', element: <Home></Home>},
    {path: '/home', element: <Home></Home>},
    {path: '/countries', 
    loader: async() => {
        return fetch('https://restcountries.com/v3.1/all')
    },
    element: <Countries></Countries>},
    {path: '/about', element: <About></About>},
    {
        path: '/countries/:name', 
        loader: async({params}) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
        },
        element: <CountryDetails></CountryDetails>}
])