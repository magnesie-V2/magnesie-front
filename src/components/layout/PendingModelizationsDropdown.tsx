import { Dropdown, Menu } from "antd";
import React from "react";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getPendingModelizations } from "../../services";

const PendingModelizationsDropdown = () => {
  const { data: response, isLoading } = useQuery(
    "pendingModelizations",
    getPendingModelizations,
    {
      refetchInterval: 10000,
      refetchIntervalInBackground: true,
    }
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
        <Menu className="p-0 rounded-md">
          {isLoading ? (
            <Menu.Item>Chargement...</Menu.Item>
          ) : response?.data.length === 0 ? (
            <Menu.Item>Aucune modélisation en cours</Menu.Item>
          ) : (
            response?.data.map((pendingModelization, index) => (
              <Menu.Item
                key={index}
                className="border-b text-center font-bold py-3 text-base"
              >
                <Link
                  to={`/pending-modelization/${pendingModelization.id}/${pendingModelization.name}`}
                >
                  {pendingModelization.name}
                </Link>
              </Menu.Item>
            ))
          )}
        </Menu>
      }
    />
  );
};

export default PendingModelizationsDropdown;
