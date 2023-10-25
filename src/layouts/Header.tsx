import * as Icon from "react-feather";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
const Header = () => {
    const [searchBarFullWidth, setSearchBarFullWidth] = useState(false);
    return (
        <div className="flex justify-between p-3">
            <div
                className={`justify-center items-center ${
                    searchBarFullWidth ? "hidden" : "flex"
                }`}
            >
                <Button className="bg-white">
                    <Icon.AlignJustify size={20} />
                </Button>
                <div className="flex ml-2">
                    <Icon.Play
                        className="bg-red-500 text-white rounded-lg p-2 text-lg mr-1"
                        size={28}
                    />
                    <h2>Youtube</h2>
                </div>
            </div>
            <div
                className={` ${
                    searchBarFullWidth
                        ? "w-full justify-center flex"
                        : "w-1/2 hidden sm:flex justify-end"
                }`}
            >
                {searchBarFullWidth && (
                    <Button
                        onClick={() => setSearchBarFullWidth(false)}
                        className="bg-white mr-1"
                    >
                        <Icon.ArrowLeft size={20} />
                    </Button>
                )}
                <Input placeholder="Search" />
                <Button className="rounded-l-none border border-l-0 px-6">
                    <Icon.Search size={20} />
                </Button>
                <Button className="ml-1">
                    <Icon.Mic size={20} />
                </Button>
            </div>
            <div
                className={`justify-center items-center ${
                    searchBarFullWidth ? "hidden" : "flex"
                }`}
            >
                <Button
                    onClick={() => setSearchBarFullWidth(true)}
                    className="inline sm:hidden bg-white"
                >
                    <Icon.Search size={20} />
                </Button>
                <Button className="inline sm:hidden bg-white ml-1">
                    <Icon.Mic size={20} />
                </Button>
                <Button className="ml-1 bg-white">
                    <Icon.Camera size={20} />
                </Button>
                <Button className="mx-1 bg-white">
                    <Icon.Bell size={20} />
                </Button>
                <div className="cursor-pointer text-white flex justify-center items-center bg-green-600 w-7 h-7 rounded-full">
                    A
                </div>
            </div>
        </div>
    );
};

export default Header;
