import { StandardErrorFormat } from "@/utils/error/types";

export type AsyncApiRequestFn<R, P = unknown> = (params?: P) => Promise<R>;
