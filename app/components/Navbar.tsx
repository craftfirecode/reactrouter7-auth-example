import { useContext } from "react";
import { Link } from "react-router";
import { SupabaseAuthContext } from "../lib/supabaseAuthProvider";

export function Navbar() {
  const { user } = useContext(SupabaseAuthContext);

  const navbuttons = (
    <>
      <Link className="text-center" to="/">
        Home
      </Link>
      <Link className="text-center" to="/blog">
        Blog
      </Link>
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-800 dark:text-white">
      <div className="flex justify-between mx-auto items-center py-2 px-24">
        {/* nav links */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex ml-10 items-baseline space-x-5">
            {navbuttons}
          </div>

          <div className="ml-10">
            {/* Login Button */}
            {!user && (
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link className="text-center" to="/account">
                  Login
                </Link>
              </button>
            )}

            {/* Profile Button */}
            {user && (
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/account">Your Account</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
