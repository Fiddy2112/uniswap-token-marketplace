import React, { useState, useEffect } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
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
    <Dropdown>
      <DropdownTrigger>
        <Button
          css={{
            backgroundColor:
              selectedItem === DEFAULT_VALUE ? "#7765F3" : "#2c2f36",
          }}
        >
          {selectedItem}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dynamic Actions"
        // onAction={(key) => {
        //   setSelectedItem(key);
        //   setToken(key);
        // }}
      >
        {(item) => (
          <DropdownItem
            key={item.key}
            shortcut="⌘C"
            description="Copy the file link"
          >
            hei
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Selector;
