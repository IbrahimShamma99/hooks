import { useStateWithHistory } from "use-state-with-history";

interface GPTMessages {
  content: string;
  role: 'user' | 'bot' | 'system';
}

type GPTHookReturn = [
  GPTMessages[],
  (message: GPTMessages) => void
]


export function useGPTMessages() : GPTHookReturn {
  const [_, pushMessage, { history }] =
    useStateWithHistory<GPTMessages>();

  return [history, pushMessage ];
}

export default useGPTMessages;
