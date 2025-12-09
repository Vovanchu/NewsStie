type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  signal?: AbortSignal;
  body?: unknown;
}

const BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_API_URL
  : import.meta.env.VITE_API_URL;

export const apiClient = {
  async request<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<T | null> {
    const { method = "GET", signal, body } = options;

    try {
      const res = await fetch(`${BASE_URL}${url}`, {
        method,
        signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} — ${res.statusText}`);
      }

      return await res.json();
    } catch (err) {
      // Abort
      if (err instanceof DOMException && err.name === "AbortError") {
        console.log(`Request aborted: ${url}`);
        return null;
      }

      console.error(`API Error (${url}):`, err);
      return null;
    }
  },
};
