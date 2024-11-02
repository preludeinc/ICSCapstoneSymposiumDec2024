import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollBanner } from "../components/ScrollBanner";
import { siteConfig } from "../config/site";
import HeroImageOne from "/images/hero/cube-closeup.jpg";
import HeroImageTwo from "/images/hero/cube.jpg";

export const Home = () => {
  let intro = `The Information & Computer Systems Technology (ICS), winter graduating class, is excited to welcome \
  you to the Dec 2024 ICS Capstone Symposium!`;

  return (
    <>
      <Navbar />
      <section className="pb-20 md:pt-3 md:pb-10 overflow-x-clip">
        <div className="container flex justify-center pt-8 md:pt-5">
          <div className="md:flex items-center">
            <div className="mt-8 md:h-[60em] md:flex-1 relative pb-8">
              <img className="hero-one md:right-6" src={HeroImageOne} alt="hero" />
            </div>
      
            <div className="md:w-[30em] mx-2">
              <div className="ics-box-heading mb-10">
                Information & Computer Systems
              </div>
              <h1>
                <span className="text-slate-950 mt-10 text-5xl md:text-6xl font-bold tracking-tighter justify-start">
                Join Our Capstone
                </span>
              </h1>
              <h3 className="capstone-subheading mt-6">
                Dec. 12
              </h3>
              <h3 className="capstone-subheading mt-1">
                4:00pm - 7:00pm
              </h3>
              <h3 className="capstone-subheading mt-1">
                777 Fort Street
              </h3>
              <p className="intro-text">{intro}</p>
              <div className="flex gap-1 items-center mt-[2em] text-black">
                {siteConfig.homeButtons.map((button) => (
                  <div
                    className="inline-flex rounded-md shadow-sm button-group"
                    role="group"
                  >
                    <Button
                      key={button.href}
                      as={Link}
                      className="text-lg lg:text-xl"
                      variant="flat"
                      href={button.href}
                    >
                      {button.label}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 md:h-[60em] md:flex-1 relative pb-10">
              <img className="hero-two md:left-6" src={HeroImageTwo} alt="hero" /> 
            </div>
          </div>
        </div>
        <div className="scroll-container mt-2 lg:mt-4">
        <ScrollBanner />
        </div>
      </section>
      <Footer />
    </>
  );
}