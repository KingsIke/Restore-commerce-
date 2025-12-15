import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";
import { Catalog } from "../../features/catalog/Catalog";
import { ProductDetail } from "../../features/catalog/ProductDetail";
import { HomePage } from "../../features/home/HomePage";
import { AboutPage } from "../../features/about/AboutPage";
import { ContagePage } from "../../features/contact/ContagePage";
import { ErrorPage } from "../../features/about/ErrorPage";
import { ServerError } from "../error/ServerError";
import { Error404 } from "../error/Error404";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
             {path: '/catalog', element: <Catalog />},
             {path: '/catalog/:id', element: <ProductDetail />},   
             {path: '/about', element: <AboutPage />},
             {path: '/contact', element: <ContagePage />},
             {path: '/error', element: <ErrorPage />},
             {path: '/server-error', element: <ServerError />},
             {path: '/not-found', element: <Error404 />},
             {path: '*', element: <Navigate replace to= '/not-found' />},
        ]
    }
])