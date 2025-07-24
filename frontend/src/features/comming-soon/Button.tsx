import React from 'react'
type ButtonProps = {
  onClick?: () => void;
};
const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <>
            <button className=" px-16 py-3 text-white rounded-full text-lg font-semibold transition relative z-10"
                style={{
                    backgroundColor: "#1c7a80",
                    "boxShadow": "#1c7a80 0px 0px 15px 5px"
                }}
                 onClick={onClick}
                >
                Get 25% Discount
            </button>
        </>
    )
}
export default Button