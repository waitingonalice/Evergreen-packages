import { useRef, useState } from "react";
import { Upload as UploadIcon } from "lucide-react";
import { cn } from "../../utils";
import { Text } from "../text";

export interface UploadProps {
  onChange: (file: FileList) => void;
  multiple?: boolean;
  text?: string;
  subtext?: string;
  id?: string;
}

function Upload({
  id,
  onChange,
  multiple,
  text = "Click or drag file to upload",
  subtext,
}: UploadProps) {
  const [hover, setHover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    inputRef.current?.click();
  };

  const handleMouseOver = () => {
    setHover((prev) => !prev);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) onChange(e.target.files);
  };

  const handleOnDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      onChange(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    setHover(true);
    e.preventDefault();
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
      onDragOver={handleDragOver}
      onDragLeave={handleMouseOver}
      onDrop={handleOnDrop}
      onClick={handleOnClick}
      onKeyDown={handleOnClick}
      className={cn(
        "rounded-md border-dashed border bg-secondary-1 border-secondary-4 p-10 flex flex-col items-center justify-center gap-y-4",
        hover && "border-secondary-5"
      )}
    >
      <Text type="body">{text}</Text>
      <UploadIcon className="w-6 h-auto text-secondary-5" />
      {subtext && (
        <Text className="text-secondary-4" type="caption">
          {subtext}
        </Text>
      )}
      <input
        id={id}
        onChange={handleOnChange}
        ref={inputRef}
        type="file"
        multiple={multiple}
        className="hidden"
      />
    </div>
  );
}

export { Upload };
