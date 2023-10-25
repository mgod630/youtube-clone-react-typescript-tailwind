import { useState } from "react";
import Categories from "./components/Categories";
import Header from "./layouts/Header";
import { CategoriesItems } from "./static/CategoriesItems";

function App() {
    const [selectedCategory, setSelectedCategory] = useState(
        CategoriesItems[0]
    );
    return (
        <div className="max-h-screen flex flex-col">
            <Header />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto p-2">
                <div className="pt-1">Sidebar</div>
                <div className="overflow-x-hidden pl-2">
                    <div className="sticky top-0 bg-white overflow-auto py-2">
                        <Categories
                            categories={CategoriesItems}
                            selectedCategory={selectedCategory}
                            onSelect={setSelectedCategory}
                        />
                    </div>
                    <p className="pt-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsam, facere molestias facilis ex, rerum nam
                        numquam laborum fuga quibusdam mollitia doloremque
                        repudiandae est eius amet, expedita labore modi
                        consectetur vitae architecto minus corrupti odit
                        consequuntur! Voluptatibus quasi rerum sapiente expedita
                        odio. Quas id quia aspernatur? Soluta beatae quo unde
                        esse maiores veniam quia nam mollitia repellat fugit
                        dolorum eius ipsa nobis quos, rem, exercitationem
                        perferendis nulla omnis recusandae assumenda qui?
                        Repudiandae itaque quos saepe et quidem amet qui
                        perspiciatis atque harum ipsam sunt quibusdam
                        repellendus earum illum similique sit, obcaecati
                        blanditiis inventore porro vel ad consectetur animi
                        voluptatum assumenda? Modi reiciendis doloribus et atque
                        labore soluta quod nisi quam nihil corrupti. Esse vitae
                        aliquam quae et nulla quo quis explicabo voluptates
                        dicta, temporibus, praesentium neque provident ex sunt
                        nisi. Minus ab cum eius aspernatur veniam obcaecati,
                        ipsum qui! Pariatur incidunt et illum sapiente ducimus
                        voluptatibus. Repellendus, unde eos! Ipsa illo deserunt
                        iste necessitatibus dolore. Quasi ducimus debitis libero
                        temporibus vero dolore veritatis voluptates tenetur
                        blanditiis natus minima corrupti laboriosam animi ullam
                        necessitatibus eum odit eos, nemo maxime pariatur
                        sapiente! Ex cum commodi provident eveniet suscipit at
                        natus perspiciatis non officiis consequuntur dolorum
                        nobis veritatis asperiores eius quod adipisci, alias
                        ipsa et quia, sequi nihil, minima hic dolor.
                        Voluptatibus tempora est tenetur ipsam. Laboriosam at
                        inventore ipsam. Corporis quidem voluptas beatae eos
                        tempore eius. Debitis, distinctio dolore perspiciatis
                        doloribus commodi blanditiis aperiam eos iusto culpa ab
                        alias, asperiores nesciunt nulla mollitia cumque numquam
                        earum deleniti similique provident. Accusantium
                        doloremque incidunt ab culpa eius quidem atque
                        repudiandae sapiente pariatur repellendus obcaecati
                        commodi vero recusandae rerum sunt odit voluptatum
                        expedita nam et nobis eum, doloribus reiciendis,
                        blanditiis deserunt! Ab, nulla minima! Iusto facere
                        sapiente quos voluptatibus, asperiores corrupti eius
                        blanditiis a similique, unde odio, officiis nam quas
                        debitis! Id fugit quidem eligendi unde sapiente?
                        Suscipit iure a obcaecati neque sit blanditiis laborum
                        saepe quis nobis sunt autem error atque eaque, dolorum
                        voluptatem aliquid minima quos cumque dignissimos culpa
                        facilis! Voluptatibus vero ab similique earum esse.
                        Veniam eum temporibus consequuntur necessitatibus facere
                        quam fuga. Hic voluptates consequuntur debitis nobis
                        maxime porro, assumenda velit fugiat tempora sed
                        voluptatum repellendus architecto, enim sunt iure quod
                        molestiae perspiciatis ratione explicabo tenetur minus
                        corporis ducimus eligendi. Harum iure repudiandae earum
                        tenetur recusandae optio, mollitia, et autem nostrum
                        quia repellat similique explicabo provident animi vitae
                        error? Velit, aperiam obcaecati fugiat, accusantium
                        tenetur earum repellendus iste maxime itaque voluptates
                        doloremque sequi quo atque temporibus perspiciatis! Hic
                        eligendi beatae tenetur optio, dolorum consequatur atque
                        deleniti quidem, reiciendis eaque officia. Cupiditate
                        harum aspernatur voluptatem ad aperiam soluta, corporis
                        quasi nesciunt, odio sunt quidem assumenda explicabo
                        blanditiis commodi inventore rerum dolor error illo
                        consequatur id, suscipit voluptate excepturi! Fugit
                        optio molestiae eligendi nostrum reprehenderit, aliquam
                        ipsum tempore vel quaerat omnis sit dolorum, nulla
                        accusamus dolores facilis! Blanditiis a velit hic
                        asperiores obcaecati, sit magni odit dolor animi et
                        maiores. Deserunt error illum placeat aperiam esse. Non
                        vel quos impedit quibusdam iure. Necessitatibus ipsa
                        excepturi blanditiis maiores repellat. Itaque
                        consectetur nam ab? Velit nihil quia molestiae sint qui,
                        repudiandae cumque neque ab totam voluptate! Magnam eum
                        possimus temporibus voluptatibus voluptatum dignissimos
                        eligendi modi culpa dolore explicabo accusantium
                        repellendus non, asperiores iusto ab, dolores tempora
                        ullam maiores suscipit ducimus veniam dolor adipisci.
                        Magnam, culpa et aperiam illo fuga esse vitae commodi
                        harum dignissimos hic? Cum dignissimos nemo eum facilis
                        est voluptas aperiam, ex consequatur officiis cumque
                        nisi atque repellat perspiciatis? Dolor, eos blanditiis
                        tempora animi id, impedit quidem modi voluptatem
                        accusantium reprehenderit nemo praesentium. Consectetur
                        dolor, illo animi adipisci alias impedit. Nobis
                        reiciendis amet eligendi alias provident vero natus
                        quam, cum veniam placeat asperiores. Perspiciatis
                        obcaecati unde maxime nobis ex? Necessitatibus rerum
                        iure culpa adipisci quisquam magni qui esse optio
                        inventore, corrupti veniam voluptates vel similique
                        harum quibusdam error eius nihil labore nobis tempore.
                        Eius deleniti pariatur error vitae, laboriosam similique
                        libero reiciendis adipisci asperiores, totam quasi
                        veniam possimus distinctio. Earum iusto aliquam ipsa
                        est! Error animi neque corrupti id quo placeat possimus
                        ratione, nobis omnis obcaecati accusamus. Voluptates
                        alias, provident facilis impedit consequatur aut
                        suscipit quo. Quae sunt recusandae animi, repellendus,
                        est ad accusantium corporis laudantium nesciunt
                        molestias dolore fuga, dolor ut explicabo ea ipsam neque
                        architecto. Ipsum eum dolorum consequatur ad atque vel
                        eveniet, porro iste, tenetur aut, vero libero
                        reprehenderit labore sed cum rerum adipisci obcaecati?
                        Iusto, inventore animi eum ex voluptatibus laboriosam
                        neque doloribus unde facere odio minus, similique maxime
                        tempore deleniti reiciendis nemo eius cum voluptate qui
                        eveniet sint est quasi quos. Nobis dicta minus cum harum
                        nesciunt reiciendis facilis pariatur magni laborum
                        veniam quidem fugit, deserunt officiis nemo temporibus
                        quasi? Quasi atque soluta nulla, nobis dolor dolore?
                        Maxime nam est eos repellendus id incidunt itaque sit
                        amet veniam, laboriosam delectus fugit commodi rem,
                        sapiente possimus fugiat, distinctio dolor nihil
                        expedita eligendi ullam et maiores corporis eius. Earum,
                        ab nobis.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
