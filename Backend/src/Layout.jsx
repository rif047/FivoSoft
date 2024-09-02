import SideMenu from "./Components/SideMenu/SideMenu";
import Footer from "./Components/Footer";
import TopMenu from "./Components/TopMenu/TopMenu";

function Layout({ children }) {
    return (
        <main className="w-full flex">
            <aside className="hidden md:block"><SideMenu /></aside>

            <aside className="w-full">
                <TopMenu />

                <section className="bg-[#F6F7FB] h-[calc(100vh-90px)] overflow-scroll">
                    <div className="container mx-auto py-5 px-2">
                        <main>{children}</main>
                    </div>
                </section>

                <Footer />

            </aside>
        </main>
    );
}

export default Layout;
