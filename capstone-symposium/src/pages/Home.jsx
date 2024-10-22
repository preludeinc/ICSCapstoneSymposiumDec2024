import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import HeroImage from "../assets/images/mechanical_keyboard.jpg";
import { siteConfig } from "../config/site";

export const Home = () => {
  let intro = `The ICS graduating class is excited to welcome \
  you to the Winter 2024 Information and Computer Systems (ICS) Capstone Symposium!`;

  return (
    <>
      <Navbar />
      <section className="">
        <div className="container mx-auto flex md:flex-row flex-col mt-24 md:mt-0">
          <div className="md:flex items-center justify-center mt-10 mx-4 md:m4-10 md:mb-10">
            <div className="w-[550px] md:w-[800px] pt-2 m-4 md:pr-40 md:py-[10rem] md:mt-10">
              <div className="text-2xl md:text-3xl text-center text-semibold text-black inline-flex border border-[#222]/10 px-5 py-2 my-1 md:px-4 md:mx-12 md:mt-24 rounded-lg tracking-tight">
                Information & Computer Systems
              </div>
              <h1 className="text-transparent bg-clip-text text-6xl md:text-8xl my-4 px-4 md:my-10 md:px-10 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] justify-center">
                Join our Capstone
              </h1>
              <div className="px-2 md:px-12 text-[#010D3E]">
                <p className="font-sans text-4xl mb-1 font-semibold px-2">Dec. 12th</p>
                <p className="font-sans text-4xl px-2">4:30 - 6:30pm</p>
                <p className="font-sans text-3xl md:text-3xl md:mt-8">{intro}</p>
              <div className="flex gap-1 mb-2 md:mt-10 mx-2 text-black my-4 md:px-6 md:py-4">
              </div>
                {siteConfig.homeButtons.map((button) => (
                  <div
                    className="inline-flex rounded-sm shadow-sm md:rounded-md button-group"
                    role="group"
                  >
                    <Button
                      key={button.href}
                      as={Link}
                      variant="flat"
                      className="text-2xl md:text-4xl font-helvetica m-1 md:m-2"
                      href={button.href}
                    >
                      {button.label}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:scale-x-100 md:scale-y-100 lg:md:h-[1250px] justify-center items-center md:flex-1 relative">
              <img className="md:h-full md:w-auto md:max-w-none m-4 md:m-0" src={HeroImage} alt="hero"></img>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
