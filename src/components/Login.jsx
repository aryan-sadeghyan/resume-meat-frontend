import { useState } from "react";
import { API } from "../lib";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [showerror, setShowerror] = useState("");
  const { setToken } = useOutletContext();

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch(`${API}/users/Login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const info = await res.json();
    console.log(info);

    if (!info.success) {
      return setShowerror(info.error);
    }
    setToken(info.token);
    localStorage.setItem("token", info.token);
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          value={username}
          className='border border-6 border-black'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type='password'
          value={password}
          className='border border-6 border-black m-4'
          onChange={(e) => {
            setPasword(e.target.value);
          }}
        />
        <button type='submit' className='border border-1 border-gray-600 p-1'>
          Login
        </button>
      </form>
      <p>{showerror}</p>
    </div>
  );
}
