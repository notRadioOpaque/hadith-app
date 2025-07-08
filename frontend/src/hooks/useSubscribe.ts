type SubscribeState = {
  loading: boolean;
  error: string | null;
  success: boolean;
};

export function useSubscribe() {
  let state: SubscribeState = {
    loading: false,
    error: null,
    success: false,
  };

  const subscribe = async (email: string): Promise<SubscribeState> => {
    state.loading = true;
    state.error = null;
    state.success = false;

    try {
      const res = await fetch("http://localhost:3000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      state.success = true;
    } catch (err: any) {
      state.error = err.message || "Failed to subscribe.";

      return { ...state, loading: false };
    }

    state.loading = false;
    return { ...state };
  };

  return { subscribe };
}
