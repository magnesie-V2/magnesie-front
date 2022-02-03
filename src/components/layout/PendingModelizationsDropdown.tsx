import { Dropdown, Menu } from "antd";
import React from "react";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getPendingModelizations } from "../../services";

const PendingModelizationsDropdown = () => {
  const { data: pendingModelizations, isLoading } = useQuery(
    "pendingModelizations",
    getPendingModelizations
  );
  return (
    <Dropdown.Button
      placement="bottomCenter"
      buttonsRender={([_, rightButton]) => [
        null,
        React.cloneElement(rightButton as any, {
          children: "Modélisations en cours",
          icon: <MdOutlineIncompleteCircle className="mr-3" size="26" />,
          className:
            "hover:bg-gray-200 text-black hover:text-black border-none font-bold px-4 inline-flex items-center cursor-default",
        }),
      ]}
      overlay={
        <Menu className="p-0">
          {isLoading ? (
            <Menu.Item>Chargement...</Menu.Item>
          ) : (
            pendingModelizations?.map((pendingModelization, index) => (
              <>
                <Menu.Item
                  key={index}
                  className="border-b text-center font-bold"
                >
                  <Link to={`/pending-modelization/${pendingModelization}`}>
                    {pendingModelization}
                  </Link>
                </Menu.Item>
              </>
            ))
          )}
        </Menu>
      }
    />
  );
};

export default PendingModelizationsDropdown;
