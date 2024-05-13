import { Meta } from "@storybook/react";
import React, { useState } from "react";
import { Pagination } from ".";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
};
export default meta;

export const Component = () => {
  const [value, setValue] = useState({
    index: 1,
    limit: 1,
  });
  const handleChange = (value: number) => {
    setValue((prev) => ({
      ...prev,
      index: value,
    }));
  };
  return (
    <Pagination
      totalCount={100}
      currentLimit={value.limit}
      currentIndex={value.index}
      onClick={handleChange}
    />
  );
};
