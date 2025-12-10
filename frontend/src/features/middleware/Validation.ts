export type ValidationErrorResponse = {
  type: string;
  title: string;
  status: number;
  errors: Record<string, string[]>;
};

export function isValidationError(
  data: unknown
): data is ValidationErrorResponse {
  return typeof data === "object" && data !== null && "errors" in data;
}

export type ServerErrorResponse = {
  title: string;
  status: number;
  detail: string;
};

export function isServerError(data: unknown): data is ServerErrorResponse {
  return (
    typeof data === "object" &&
    data !== null &&
    "title" in data &&
    "detail" in data
  );
}