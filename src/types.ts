/* types from libgitsta */
export type FileChange = (
  | {
      type: "create";
      filename: string;
      contents: string;
    }
  | {
      type: "update";
      filename: string;
      contents: string;
    }
  | {
      type: "delete";
      filename: string;
    }
) & {
  repo: string;
};

export type ChangeFunc = (change: FileChange) => boolean;

export type CommitOptions = {
  author: string;
  date: string;
  message: string;
};

export type CommitFunc = (
  repo: string,
  files: FileChange[],
  options: CommitOptions
) => Promise<void>;

export type CreateRepositoryOptions = {
  publicKey: string;
};

export type GitstaProvider = {
  subscribe: (repo: string, change: ChangeFunc) => void;
  unsubscribe: (repo: string, func: ChangeFunc) => void;
  commit: CommitFunc;
  initRepository: (name: string) => Promise<void>;
  cloneRepository: (remote: string) => Promise<void>;
  deleteRepository: (name: string) => Promise<void>;
};
