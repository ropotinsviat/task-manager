import Loading from "../components/shared/Loading";

export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & { loading: boolean }> => {
  return ({ loading, ...props }: P & { loading: boolean }) => {
    if (loading) return <Loading />;

    return <WrappedComponent {...(props as P)} />;
  };
};
