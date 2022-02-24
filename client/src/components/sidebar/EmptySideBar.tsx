import { SideBarWidth } from "./SideBar";

export const EmptySideBar = (): JSX.Element => {
  return (
    <div
      style={{
        /*to center the main content, we need side bars with the same width on both sides*/
        width: SideBarWidth,
      }}
    ></div>
  );
};
