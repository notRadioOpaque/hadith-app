export type Success<T> = { data: T; error: null };
export type Failure = { data: null; error: string };
export type Result<T> = Success<T> | Failure;
