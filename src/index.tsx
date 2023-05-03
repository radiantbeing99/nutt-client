import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./fonts";
import theme from "./theme";
import "./styles/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

import Home from "./pages/Home";
import DietAnalysisPage from "./pages/DietAnalysisPage";
import Chat from "./pages/Chat";

// function PrivateRoute({ element, ...rest }: { element: React.ReactElement }) {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? element : <Navigate to="/login" />}
//     />
//   );
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route index element={<Welcome />} />
      <Route path="Welcome" element={<Welcome />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="home" element={<Home />} />
      <Route path="SignIn" element={<SignIn />} />
      <Route path="analysis" element={<DietAnalysisPage />} />
      <Route path="chat" element={<Chat />} />
    </Route>
  )
);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <ChakraProvider theme={theme}>
    <Fonts />
    <RouterProvider router={router} />
  </ChakraProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
