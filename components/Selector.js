import React, { useState, useEffect } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import {
  Eth,
  USDT,
  BNB,
  USD,
  STETH,
  TRON,
  MATIC,
  SHIBA,
  UNISWAP,
  DEFAULT_VALUE,
} from "@/utils/saleToken";

const Selector = ({ defaultValue, ignoreValue, setToken, id }) => {
  const menu = [
    { key: Eth, name: Eth },
    { key: USDT, name: USDT },
    { key: BNB, name: BNB },
    { key: USD, name: USD },
    { key: STETH, name: STETH },
    { key: TRON, name: TRON },
    { key: MATIC, name: MATIC },
    { key: SHIBA, name: SHIBA },
    { key: UNISWAP, name: UNISWAP },
  ];

  const [selectedItem, setSelectedItem] = useState();

  const getFilteredItems = (ignoreValue) => {
    return menu.filter((item) => item["key"] != ignoreValue);
  };

  const [menuItems, setMenuItems] = useState(getFilteredItems(ignoreValue));

  useEffect(() => {
    setSelectedItem(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setMenuItems(getFilteredItems(ignoreValue));
  }, [ignoreValue]);

  return (
    <Dropdown className="bg-[#2c2f36]">
      <DropdownTrigger>
        <Button
          className="font-bold text-sm py-4 px-8 text-white"
          style={{
            backgroundColor:
              selectedItem === DEFAULT_VALUE ? "#2c3e50" : "#2c2f36",
          }}
        >
          {selectedItem}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="text-black bg-[#2c2f36]"
        aria-label="Dynamic Actions"
        items={menuItems}
        onAction={(key) => {
          setSelectedItem(key);
          setToken(key);
        }}
      >
        {(item) => (
          <DropdownItem
            className="font-bold px-2 text-white"
            aria-label={id}
            key={item.key}
            color={item.key === "delete" ? "error" : "default"}
          >
            {item.name}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Selector;
