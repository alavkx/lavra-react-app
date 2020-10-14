export const HOST = "https://alavkx.builtwithdark.com";
export const apiFetch = (path: string, config: Record<string, unknown>) => fetch(`${HOST}${path}`, config);
