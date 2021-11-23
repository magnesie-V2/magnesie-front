import { Tooltip as AntTooltip } from "antd";
import { ReactNode } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
};

const Tooltip = ({ text, children }: TooltipProps) => (
  <AntTooltip color="black" placement="bottom" title={text}>
    {children}
  </AntTooltip>
);
export default Tooltip;
