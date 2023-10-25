import classNames from "classnames";

type ButtonProps = {
    title?: string;
    className?: string;
    onClick?: React.MouseEventHandler;
    children?: React.ReactNode;
};

const Button = ({ children, title, className, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={classNames(
                "p-2 rounded-full bg-slate-100 hover:bg-slate-200 duration-300 whitespace-nowrap",
                className
            )}
        >
            {title} {children}
        </button>
    );
};
export default Button;
