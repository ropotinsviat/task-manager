import { withDynamicHeight } from "../../hocs/withDynamicHeight";

export const Loading = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent 
                align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite] text-[#29AB87] ${props.className}`}
    />
  );
};

export default withDynamicHeight(Loading);
