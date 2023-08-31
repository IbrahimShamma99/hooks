import { EventEmitter } from "./emitter";
// import { EventEmitter } from 'node:stream'

const end = Symbol("A symbol to mark the end of the operation");

// eslint-disable-next-line unicorn/prefer-event-target
const messageBus = new EventEmitter();

export async function handleOperation(
  operation: string,
  input: any
): Promise<void> {
  console.log("handleOperation", operation, input);
  const message = {
    ...input,
    [end]: (output: any, error: any) => {
      if (error) {
        console.error(`Error processing ${operation} operation`, error);
        throw error;
      }
    },
  };
  await messageBus.emit(operation, message);
  return;
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export function listen(operation: string, callback: (...args: any) => any) {
  messageBus.on(operation, async (message: any) => {
    const { [end]: endFunction, ...input } = message;
    try {
      const output = await callback(input);
      endFunction(output);
    } catch (error) {
      endFunction(undefined, error);
    }
  });
}
