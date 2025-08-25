export interface ApiResponse {
  ok: boolean;
  code?: string;
  message?: string;
}

export interface MeResponse extends ApiResponse {
  user: { id: number; email: string };
  token?: string;
}
