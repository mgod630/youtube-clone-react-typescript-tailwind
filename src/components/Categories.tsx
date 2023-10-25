import Button from "./Button";

type CategoriesProps = {
    categories: string[];
    selectedCategory: string;
    onSelect: (category: string) => void;
};
const Categories = ({
    categories,
    selectedCategory,
    onSelect,
}: CategoriesProps) => {
    return (
        <div className="flex ml-2">
            {categories.map((item) => {
                return (
                    <Button
                        onClick={() => onSelect(item)}
                        className={`text-sm mx-1 px-4 rounded-lg w-max ${
                            selectedCategory === item
                                ? "bg-slate-600 text-white hover:bg-slate-600"
                                : ""
                        }`}
                        key={item}
                        title={item}
                    />
                );
            })}
        </div>
    );
};
export default Categories;
