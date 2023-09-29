import { useStateWithHistory } from "use-state-with-history";

interface GPTMessages {
  content: string;
  role: "user" | "bot" | "system";
}

type GPTHookReturn = [GPTMessages[], (message: GPTMessages) => void];

export function useGPTMessages(systemMessage?: string): GPTHookReturn {
  const [_, pushMessage, { history }] = useStateWithHistory<GPTMessages>({
    content: systemMessage ?? "",
    role: "system",
  });

  return [history, pushMessage];
}

export default useGPTMessages;
