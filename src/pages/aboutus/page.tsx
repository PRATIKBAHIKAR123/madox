import Header from "@/header/header";
import { motion } from "framer-motion";
import DigitalExperienceSection from "./skills";
import ContactUs from "../homepage/contactUs";
import JoinUsBanner from "./banner";
import TeamSection from "./team";
import Footer from "@/header/footer";

const AboutUsPage = () => {
    return (
        <><Header/>
            <div className="flex flex-col min-h-screen gap-[100px]">
                <section
                    className="relative h-[180px] md:h-[508px] bg-cover bg-center flex items-center mt-20 md:mt-0"
                    style={{ backgroundImage: "url('/assets/Images/Banners/aboutus-banner.jpg')" }}
                >
                    <div className="container mx-auto px-4 relative z-10 text-white text-center">
                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 3 }}
                        ><div className="justify-center text-white text-[25px] md:text-[40px] font-extrabold font-['Mulish'] leading-[30px] md:leading-[60px] animate-fade-in-down px-4">About Us</div></motion.p>

                    </div>
                </section>
                <DigitalExperienceSection/>
                <ContactUs/>
                <JoinUsBanner title={`Join us today and let us help you to grow your
business.`} imageUrl={`"/assets/Images/Banners/image (4).png"`}/>
<TeamSection/>
<Footer/>
            </div>
            
        </>
    )
}

export default AboutUsPage;