import { FileChange, Repo } from "./types";

export type ChangeFunc = (change: FileChange) => boolean;

export function setup() {
  
}

export async function subscribe(repo: Repo, onChange: ChangeFunc) {

}

export async function unsubscribe(repo: Repo, fn: ChangeFunc) {

}

export async function getRepos(name: string): Promise<Repo> {
  return { name };
}

export async function getCommits(repo: Repo): Promise<CommitLogEntry[]> {
  return [];
}

export async function getCommitDetails(id: string): Promise<Commit> {
  return {
    id: "somehash",
    author: "jeswin",
    time: "100",
    files: [],
  };
}

export async function createCommit(commit: CommitData) {}

export async function getFiles() {}

export async function createFile() {}

export async function readFile() {}

export async function updateFile() {}

export async function deleteFile() {}
