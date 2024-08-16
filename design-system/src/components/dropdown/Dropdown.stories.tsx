import React, { useState } from "react";
import {
  Dropdown,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from ".";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);

  return (
    <Dropdown
      open={open}
      onOpenChange={handleOpen}
      trigger={<>Open Dropdown</>}
    >
      <DropdownMenuItem onClick={() => console.log("Item 1 clicked")}>
        Item 1
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log("Item 1 clicked")}>
        Item 2
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log("Item 1 clicked")}>
        Item 3
      </DropdownMenuItem>
    </Dropdown>
  );
};

export const WithLabel = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);

  return (
    <Dropdown
      open={open}
      onOpenChange={handleOpen}
      trigger={<>Open Dropdown</>}
      label="Dropdown Label"
    >
      <DropdownMenuItem onClick={() => console.log("Item 1 clicked")}>
        Item 1
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log("Item 1 clicked")}>
        Item 2
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log("Item 1 clicked")}>
        Item 3
      </DropdownMenuItem>
    </Dropdown>
  );
};

export const WithCheckbox = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    item1: false,
    item2: false,
    item3: false,
  });
  const handleOpen = () => setOpen((prev) => !prev);
  const handleCheckboxChange = (value: string) => {
    console.log(value);
    setSelected((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };
  return (
    <Dropdown
      open={open}
      onOpenChange={handleOpen}
      trigger={<>Open Dropdown</>}
      label="Dropdown Label"
    >
      <DropdownMenuCheckboxItem
        checked={selected.item1}
        onChecked={handleCheckboxChange}
        value="item1"
      >
        Item 1
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={selected.item2}
        onChecked={handleCheckboxChange}
        value="item2"
      >
        Item 2
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={selected.item3}
        onChecked={handleCheckboxChange}
        value="item3"
      >
        Item 3
      </DropdownMenuCheckboxItem>
    </Dropdown>
  );
};

export const WithRadioGroup = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const handleOpen = () => setOpen((prev) => !prev);
  const handleOnChange = (value: string) => {
    setSelected(value);
  };
  return (
    <Dropdown
      open={open}
      onOpenChange={handleOpen}
      trigger={<>Open Dropdown</>}
      label="Dropdown Label"
    >
      <DropdownMenuRadioGroup value={selected} onValueChange={handleOnChange}>
        <DropdownMenuRadioItem value="item1">Item 1</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="item2">Item 2</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="item3">Item 3</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </Dropdown>
  );
};
