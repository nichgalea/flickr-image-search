export const LoadingActionTypes = {
  SET: "loading/set"
};

export function setLoading(isLoading) {
  return {
    type: LoadingActionTypes.SET,
    isLoading
  };
}
