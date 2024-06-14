import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Projects from "./components/projects";
import Register from "./components/register";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { API } from "./lib";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, name: "react-1" },
    { id: 2, name: "react-2" },
    { id: 3, name: "react-3" },
  ]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  console.log(user);
  console.log(token);

  async function fetchUser() {
    const localToken = localStorage.getItem("token");

    if (localToken) {
      setToken(localToken);
    }
    if (!token) {
      return;
    }
    const res = await fetch(`${API}/users/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    console.log(info);
    if (info.success) {
      setUser(info.user);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [token]);

  return (
    <div className='m-5 '>
      <Navbar user={user} setUser={setUser} setToken={setToken} />
      app
      <Outlet context={{ projects, setToken }} />
    </div>
  );
}

export default App;
