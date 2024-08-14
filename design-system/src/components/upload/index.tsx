import { FileContentTypeEnum } from "@waitingonalice/utilities";
import { useRef, useState } from "react";
import { Upload as UploadIcon } from "lucide-react";
import { cn } from "../../utils";
import { Button } from "../button";
import { Text } from "../text";

export interface UploadProps {
  onChange: (file: FileList) => void;
  multiple?: boolean;
  text?: string;
  subtext?: string;
  id?: string;
  disabled?: boolean;
  supportedFileTypes?: FileContentTypeEnum[];
}

function Upload({
  id,
  onChange,
  multiple,
  text = "Click or drag file to this area to upload.",
  subtext,
  disabled,
  supportedFileTypes,
}: UploadProps) {
  const [hover, setHover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const handleMouseOver = () => {
    if (disabled) return;
    setHover((prev) => !prev);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && !disabled) onChange(e.target.files);
  };

  const handleOnDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && !disabled) {
      onChange(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (disabled) return;
    setHover(true);
  };

  return (
    <div
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
      onDragOver={handleDragOver}
      onDragLeave={handleMouseOver}
      onDrop={handleOnDrop}
      className={cn(
        "rounded-md border-dashed border bg-secondary-1 border-secondary-4 p-10 flex flex-col items-center justify-center gap-y-4",
        hover && "border-secondary-5",
        disabled && "opacity-50"
      )}
    >
      <UploadIcon className="w-6 h-auto text-secondary-5" />
      <Text type="body">{text}</Text>
      <Button disabled={disabled} size="small" onClick={handleOnClick}>
        Upload File
      </Button>
      {subtext && (
        <Text className="text-secondary-4" type="caption">
          {subtext}
        </Text>
      )}
      <input
        accept={supportedFileTypes?.toString()}
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
