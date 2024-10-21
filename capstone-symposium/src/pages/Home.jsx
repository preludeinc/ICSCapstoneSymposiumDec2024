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
      <section>
        <div className="container mx-auto flex md:flex-row flex-col mt-24 md:mt-0">
          <div className="md:flex items-center justify-center mb-10">
            <div className="md:w-[750px] pt-2 md:pr-40 md:py-[10rem] md:mt-10">
              <div className="text-xl md:text-3xl text-center text-semibold text-black inline-flex border border-[#222]/10 px-5 py-2 my-1 md:px-4 md:mx-12 md:mt-24 rounded-lg tracking-tight">
                Information & Computer Systems
              </div>
              <h1 className="text-transparent bg-clip-text my-4 px-5 md:my-10 md:px-10 text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] justify-center">
                Join our Capstone
              </h1>
              <p className="font-sans text-3xl px-4 md:text-4xl md:my-12 md:px-10 text-[#010D3E]">{intro}</p>
              <div className="flex gap-1 mt-8 md:mt-10 mx-5 text-black my-4 md:px-6 md:py-4">
                {siteConfig.homeButtons.map((button) => (
                  <div
                    class="inline-flex rounded-sm shadow-sm md:rounded-md button-group"
                    role="group"
                  >
                    <Button
                      key={button.href}
                      as={Link}
                      variant="flat"
                      className="text-2xl md:text-4xl font-helvetica m-2"
                      href={button.href}
                    >
                      {button.label}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:h-[1450px] justify-center items-center md:py-8 md:flex-1 relative">
              <img className="md:absolute md:h-full md:w-auto md:max-w-none my-2" src={HeroImage} alt="hero"></img>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
