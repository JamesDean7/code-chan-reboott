import type {
  ErrorTypeOptions,
  StandardErrorFormat,
} from "@/utils/error/types";

export class StandardError extends Error {
  name: "StandardError";
  message: string;
  type: ErrorTypeOptions;
  original: any;
  code?: string;

  constructor({ code, message, original, type }: StandardErrorFormat) {
    super();
    this.message = message;
    this.code = code;
    this.original = original;
    this.type = type;
    this.name = "StandardError";
  }
}
