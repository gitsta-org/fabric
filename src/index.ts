import { ChangeFunc, FileChange, GitstaProvider } from "@gitsta/types";

let provider: GitstaProvider;

export async function setup(provider: GitstaProvider) {}

export async function subscribe(onChange: ChangeFunc) {
  return await provider.subscribe(onChange);
}

export async function unsubscribe(onChange: ChangeFunc) {
  return await provider.unsubscribe(onChange);
}

export async function commit(repo: string, files: FileChange[]) {
  return await provider.commit(repo, files);
}

