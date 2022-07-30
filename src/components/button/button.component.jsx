import {
  NormalButton,
  InvertedButton,
  GoogleSignButton,
} from "./button.styles";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

/**
 *
 * @param {(children: React.ReactElement, buttonType: 'google' | 'inverted' | undefined, ...otherProps: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>)} props {children, buttonType, ...otherProps}
 * @returns JSX.Element
 */
const Button = ({ children, buttonType, ...otherProps }) => {
  if (buttonType === "google") {
    return <GoogleSignButton {...otherProps}>{children}</GoogleSignButton>;
  }

  if (buttonType === "inverted") {
    return <InvertedButton {...otherProps}>{children}</InvertedButton>;
  }

  return <NormalButton {...otherProps}>{children}</NormalButton>;
};

export default Button;
