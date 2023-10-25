import { useState } from "react";
import Categories from "./components/Categories";
import Header from "./layouts/Header";
import { CategoriesItems } from "./static/CategoriesItems";
import { VideosItems } from "./static/VideosItems";
import Video from "./components/Video";
import Sidebar from "./components/Sidebar";

function App() {
    const [selectedCategory, setSelectedCategory] = useState(
        CategoriesItems[0]
    );
    return (
        <div className="max-h-screen flex flex-col">
            <Header />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto py-2">
                <div className="pt-1 hidden md:block">
                    <Sidebar />
                </div>
                <div className="overflow-x-hidden pl-4 px-4">
                    <div className="sticky top-0 bg-white overflow-auto py-2 z-10">
                        <Categories
                            categories={CategoriesItems}
                            selectedCategory={selectedCategory}
                            onSelect={setSelectedCategory}
                        />
                    </div>
                    {/* grid-cols-[repeat(auto-fill, minmax(300px,1fr))] */}
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pt-3">
                        {VideosItems.map((video) => {
                            return <Video key={video.title} video={video} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
