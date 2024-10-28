import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import HeroImage1 from "../assets/images/cube-closeup.jpg";
import HeroImage2 from "../assets/images/cube.jpg"
import { siteConfig } from "../config/site";

export const Home = () => {
  let intro = `The ICS graduating class is excited to welcome \
  you to the Winter 2024 Information and Computer Systems (ICS) Capstone Symposium!`;

  return (
    <>
      <Navbar />
      <section className="pb-20 md:pt-0 md:pb-10 overflow-x-clip">
        <div className="container flex justify-center pt-8 md:pt-5">
          <div className="md:flex items-center">
            <div className="mt-8 md:h-[648px] md:flex-1 relative pb-8">
              <img className="md:absolute md:h-full md:w-auto md:max-w-none md:right-6" src={HeroImage1} alt="hero" />
            </div>
            <div className="md:w-[478px]">
              <div className="text-sm text-black inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
                Information & Computer Systems
              </div>
              <h1 className="text-transparent bg-clip-text mt-6 text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80]">
                Join Our Capstone
              </h1>
              <h3 className="text-[#001E80] mt-6 text-2xl md:text-3xl font-bold tracking-tighter">
                Dec. 12
              </h3>
              <h3 className="text-[#001E80] text-2xl md:text-3xl font-bold tracking-tighter">
                4pm - 7pm
              </h3>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">{intro}</p>
              <div className="flex gap-1 items-center mt-[30px] text-black">
                {siteConfig.homeButtons.map((button) => (
                  <div
                    class="inline-flex rounded-md shadow-sm button-group"
                    role="group"
                  >
                    <Button
                      key={button.href}
                      as={Link}
                      className=""
                      variant="flat"
                      href={button.href}
                    >
                      {button.label}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 md:h-[648px] md:flex-1 relative pb-8">
              <img className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6" src={HeroImage2} alt="hero" />
            </div>
          </div>
        </div>
        <div className="md:pt-4 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img className="w-64 h-20" src="../images/camosun_innovates.png" alt="Camosun Innovates" />
            </li>
            <li>
              <img className="w-64 h-20" src="../images/3treeslogo_h.svg" alt="3 Tree logo" />
            </li>
            <li>
              <img className="w-20 h-20" src="../images/arma_automotive.png" alt="Arma Automotive logo" />
            </li>
            <li>
              <img className="w-32 h-20" src="../images/raino_dance_light.png" alt="Raino Dance logo" />
            </li>
            <li>
              <img className="w-28 h-20" src="../images/woo_woo.png" alt="Woo Woo logo" />
            </li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            <li>
              <img className="w-64 h-20" src="../images/camosun_innovates.png" alt="Camosun Innovates" />
            </li>
            <li>
              <img className="w-64 h-20" src="../images/3treeslogo_h.svg" alt="3 Tree logo" />
            </li>
            <li>
              <img className="w-20 h-20" src="../images/arma_automotive.png" alt="Arma Automotive logo" />
            </li>
            <li>
              <img className="w-32 h-20" src="../images/raino_dance_light.png" alt="Raino Dance logo" />
            </li>
            <li>
              <img className="w-28 h-20" src="../images/woo_woo.png" alt="Woo Woo logo" />
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
