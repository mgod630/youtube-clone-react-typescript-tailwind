import classNames from "classnames";

type InputProps = {
    className?: string;
    placeholder?: string;
};

const Input = ({ className, placeholder }: InputProps) => {
    return (
        <input
            type="text"
            className={classNames(
                "w-full max-w-md border-r px-3 py-1 border rounded-l-3xl outline-none focus:shadow-searchInput",
                className
            )}
            placeholder={placeholder}
        />
    );
};
export default Input;
