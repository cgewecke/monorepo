import { Dictionary } from "ts-essentials";

type AsyncOrSync<T> = Promise<T> | T;

export type CiProvider = {
  isCurrentlyRunning(): AsyncOrSync<boolean>;
  getCurrentSha(): AsyncOrSync<string>;
  isFork(): AsyncOrSync<boolean>;
  getPullRequestID(): AsyncOrSync<number | undefined>;
  getProjectSlug(): AsyncOrSync<string>;
};

export type Env = Dictionary<string | undefined>;
