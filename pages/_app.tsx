import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 xl:px-36 lg:px-8 my-14 sm:px-20 md:px-24">
        <div className="h-full col-span-12 px-2 py-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
          <Sidebar />
        </div>
        <div className="relative flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
