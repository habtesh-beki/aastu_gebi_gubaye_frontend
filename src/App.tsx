import { Route, BrowserRouter, Routes } from "react-router";
import routes from "@/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/login";
import { ProtectedRoute } from "./shared/utils/protectedRoute";
import HomePage from "./pages/index";
import { useState } from "react";

function App() {
    const [logedIn, setLogedIn] = useState<boolean>(false);
    // const [firstName, setFirstName] = useState('')
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/login"
                        element={<LoginPage setLogedIn={setLogedIn} />}
                    />
                    <Route element={<ProtectedRoute logedIn={logedIn} />}>
                        <Route path="/home" element={<HomePage />}>
                            {routes.map(({ path, element }) => {
                                return <Route path={path} element={element} />;
                            })}
                        </Route>
                    </Route>
                    <Route path="/" element={<App />}></Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
