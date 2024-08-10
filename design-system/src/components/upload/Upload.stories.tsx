import { Meta } from "@storybook/react";
import React, { useState } from "react";
import { Upload } from ".";

const meta: Meta = {
  title: "Components/Upload",
  component: Upload,
};
export default meta;

export const Default = () => {
  const [file, setFile] = useState<File[]>([]);

  const handleFileChange = (file: FileList) => {
    if (file.length === 0) return;
    setFile((prev) => [...prev, ...file]);
  };

  return (
    <>
      <Upload
        onChange={handleFileChange}
        multiple
        label="Label"
        required
        showError
        errorMessage="Test ErrorMessage"
        subLabel="Sublabel"
        subtext="Subtext"
      />
      {file && file.map((f) => <p key={f.name}>{f.name}</p>)}
    </>
  );
};