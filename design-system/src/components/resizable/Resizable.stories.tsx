import { Meta } from "@storybook/react";
import React from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from ".";

const meta: Meta = {
  title: "Components/Resizable",
  component: ResizableHandle,
};
export default meta;

function Template(args: any) {
  const { direction } = args;
  return (
    <ResizablePanelGroup
      direction={direction}
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full  items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center  justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export const Description = () => (
  <a
    className="text-blue-500 w-full flex items-center justify-center h-screen"
    href="https://www.npmjs.com/package/react-resizable-panels"
  >
    This component uses react-resizable-panels
  </a>
);
export const TemplateHorizontal = (args: any) => <Template {...args} />;
TemplateHorizontal.args = {
  direction: "horizontal",
};

export const TemplateVertical = (args: any) => <Template {...args} />;
TemplateVertical.args = {
  direction: "vertical",
};

export function ThreeGridHorizontal() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center  justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center  justify-center p-6">
          <span className="font-semibold">Three</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export function ThreeGridMixed() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50} className="border-r">
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25} className="border-b">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
