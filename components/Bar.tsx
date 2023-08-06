import { FunctionComponent } from "react";
import { ISkill } from "../type";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, name, level },
}) => {
  const barWidth = `${level}%`;
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-700">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: barWidth }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
