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
      const res = await fetch("/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      console.log(res, "res");

      if (!res.ok) {
        state.error = res.statusText || "Failed to subscribe.";

        return { ...state, loading: false };
      }

      // const data = await res.json();

      state.success = true;
    } catch (err) {
      state.error = (err as Error).message || "Unknown error";
    }

    state.loading = false;
    return { ...state };
  };

  return { subscribe };
}
