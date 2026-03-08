"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useSearchParams } from "next/navigation";

const STORAGE_KEY = "domus_agent";
const DEFAULT_AGENT = "DomusBcn (Admin)";

interface AgentContextValue {
  agentName: string;
}

const AgentContext = createContext<AgentContextValue>({
  agentName: DEFAULT_AGENT,
});

/**
 * Hook to access the current agent name.
 * Returns the agent detected from ?agent=name or persisted in sessionStorage.
 */
export function useAgent(): AgentContextValue {
  return useContext(AgentContext);
}

/**
 * AgentProvider — Detects ?agent=name from URL, persists in sessionStorage.
 * If no param is present, falls back to the stored value or "DomusBcn (Admin)".
 * Persists ONLY for the current browser tab session.
 */
export default function AgentProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const [agentName, setAgentName] = useState<string>(DEFAULT_AGENT);

  useEffect(() => {
    const paramAgent = searchParams.get("agent");

    if (paramAgent) {
      // New agent detected from URL — persist it for the session
      const capitalized =
        paramAgent.charAt(0).toUpperCase() + paramAgent.slice(1);
      setAgentName(capitalized);
      try {
        sessionStorage.setItem(STORAGE_KEY, capitalized);
      } catch {
        // SSR or sessionStorage unavailable — silent fallback
      }
    } else {
      // No URL param — try to recover from sessionStorage
      try {
        const stored = sessionStorage.getItem(STORAGE_KEY);
        if (stored) {
          setAgentName(stored);
        }
      } catch {
        // SSR or sessionStorage unavailable — keep default
      }
    }
  }, [searchParams]);

  return (
    <AgentContext.Provider value={{ agentName }}>
      {children}
    </AgentContext.Provider>
  );
}
