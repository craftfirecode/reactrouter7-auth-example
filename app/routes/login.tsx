import { GoogleButton } from "app/components/GoogleButton";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { SupabaseAuthContext } from "../lib/supabaseAuthProvider";
import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }, { name: "description", content: "login" }];
}

export default function LoginPage() {
  const { user, isAuthenticating } = useContext(SupabaseAuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && !isAuthenticating) {
      navigate("/account");
    }
  }, [user, isAuthenticating]);
  return (
    !user &&
    !isAuthenticating && (
      <main className="flex items-center justify-center pt-16 pb-4">
        <div className="flex-1 flex flex-col items-center gap-5 min-h-0">
          <h1>Sign in</h1>
          <div>
            <GoogleButton />
          </div>
        </div>
      </main>
    )
  );
}
