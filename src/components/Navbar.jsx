import { Link, Navigate } from "react-router-dom";

export default function Navbar({ user, setUser, setToken }) {
  function handleLogeout() {
    localStorage.removeItem("token");
    setUser({});
    setToken("");
  }
  return (
    <div className='flex justify-between gap-9'>
      <Link to={"/"}>resmew meat</Link>

      {!user.id && (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </>
      )}
      {user.id && (
        <>
          <span>welcom</span>
          <Link onClick={handleLogeout}>Logout</Link>
        </>
      )}

      <Link to={"/home"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
    </div>
  );
}
