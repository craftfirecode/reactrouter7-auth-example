import type { Session, User } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";
import { supabaseClient } from "./supabaseClient";

type AuthState = {
  user: User | null | undefined;
  session: Session | null | undefined;
  isAuthenticating: boolean;
};

export const SupabaseAuthContext = createContext<AuthState>({
  user: null,
  session: null,
  isAuthenticating: true,
});

const SupabaseAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(null);
  const [session, setSession] = useState<Session | null | undefined>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    const { data } = supabaseClient.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          setSession(session);
        }
        setIsAuthenticating(false);
      }
    );

    return () => data.subscription.unsubscribe();
  }, [user, session]);

  return (
    <SupabaseAuthContext.Provider value={{ user, session, isAuthenticating }}>
      {children}
    </SupabaseAuthContext.Provider>
  );
};

export { SupabaseAuthProvider };
