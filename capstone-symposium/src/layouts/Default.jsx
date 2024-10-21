import { Navbar } from "../components/Navbar";

export const Default = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col">
        <div id="main" className="m-0 md:my-10">
          {children}
        </div>
      </div>
      <footer className="w-full flex items-center justify-center py-1">
        <span className="footer-span">© Camosun Class of Dec 2024 </span>
      </footer>
    </>
  );
}
