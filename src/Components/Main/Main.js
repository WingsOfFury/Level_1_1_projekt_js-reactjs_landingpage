import './Main.css';

const Main = () => {
    return (
        <main className="Main">

            <section>
                <h2>What We Do</h2>
                <h1>We've got everything you need to launch and grow your business</h1>
            </section>

            <section className="MainFourTextColumns1">
                <article className="MainText1">
                    <img className="Brush" alt="brush" src="./img/brush.svg"></img><h3 className="h3">Brand Identity</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu
                    </p>
                </article>

                <article className="MainText1">
                <img className="ObjectSelect" alt="object-select" src="./img/object-select.svg"></img>
                    <h3>Illustration</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
                </article>
                </section>

                <section className="MainFourTextColumns2">
                <article className="MainText2">
                    <img className="Megaphone" alt="megaphone" src="./img/megaphone.svg"></img>
                    <h3>Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu
                    </p>
                </article>

                <article className="MainText2">
                <img className="GlobeLine"alt="globe-line" src="./img/globe-line.svg"></img>
                    <h3>Web Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
                </article>
                </section>
        </main>

    );
}







export default Main;