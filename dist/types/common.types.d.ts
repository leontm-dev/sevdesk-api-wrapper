export type RequestOptions = Omit<RequestInit, "method">;
export type TypeSafeRequestInit = RequestInit & {
    method: "POST" | "GET" | "PUT" | "DELETE";
    headers?: {
        "Content-Type": "application/json";
    };
};
