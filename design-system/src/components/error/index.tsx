import { Text } from "../text";

export interface ErrorProps {
  showError?: boolean;
  errorMessage?: string;
}
export const ErrorMessage = ({
  errorMessage,
}: Pick<ErrorProps, "errorMessage">) => (
  <span>
    <Text type="caption" className="text-error-main">
      {errorMessage}
    </Text>
  </span>
);
