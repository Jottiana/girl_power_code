import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Heroines from "./pages/Heroines";
import Metiers from "./pages/Metiers";
import Apprendre from "./pages/Apprendre";
import Blog from "./pages/Blog";
import Communaute from "./pages/Communaute";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />, // Utilisation de Layout comme structure principale
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/heroines",
				element: <Heroines />,
			},
			{
				path: "/metiers",
				element: <Metiers />,
			},
			{
				path: "/apprendre",
				element: <Apprendre />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/communaute",
				element: <Communaute />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
