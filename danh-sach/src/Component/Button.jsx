import React from "react";
import PropTypes from "prop-types";
/**
 * @typedef ButtonPraps
 * @property {"primary" | "danger"} variant Biến thể của nút
 * 
 */

/***
 * Biến thể một nút 
 * @param {React.PropsWithChildrenButtonProps} props 
 */
const Button = ({variant, children}) => {
    return <button className={`btn btn-${variant}`}>{children}</button>;
};

Button.PropTypes = {
    variant: PropTypes.oneOf(["primary", "danger"]),
    children: PropTypes.node,
};
export default Button;