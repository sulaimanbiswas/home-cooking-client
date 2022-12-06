import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Routes/router";

function App() {
  return (
    <div className="" data-theme="homeCooking">
      <div className="max-w-6xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
