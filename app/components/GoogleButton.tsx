import { useEffect, useState } from "react";
import { supabaseClient } from "../lib/supabaseClient";

export function GoogleButton() {
  const [from, setFrom] = useState("");
  useEffect(() => {
    setFrom(localStorage.getItem("from") || "");
  }, []);

  const signIn = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: from },
    });
  };

  return (
    <button
      className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
      onClick={signIn}
    >
      Sign in with Google
    </button>
  );
}
