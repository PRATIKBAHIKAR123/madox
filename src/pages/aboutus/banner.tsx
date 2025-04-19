import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface joinUsBannerProps {
  title: string;
  imageUrl: string;
}

export default function JoinUsBanner({ title, imageUrl }: joinUsBannerProps) {
  return (
    <section
    className="join_us-banner relative"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {/* Overlay to make text readable */}
    <div className="absolute inset-0 bg-[#0A6EBD] bg-opacity">
        {/* Content Section */}
    <div className="relative z-10 w-full flex flex-col gap-[40px]">
      <h2 className="text-center justify-center text-white text-[40px] font-bold font-['Public_Sans'] leading-[50px]">{title}</h2>
      <div className="flex gap-2 items-center justify-center">
      <Button className="h-12 bg-white rounded-[65px] shadow-[inset_0px_0px_0px_1px_rgba(246,246,249,1.00)] outline outline-1 outline-offset-[-1px] outline-white hover:bg-gray-100 text-[#0070ae] text-[15px] font-bold font-['Plus_Jakarta_Sans']">
      <Phone/>(00) 123 456 789
      </Button>
      <Button variant={'outline'} className="bg-transparent rounded-[65px] h-12 shadow-[inset_0px_0px_0px_1px_rgba(246,246,249,1.00)] outline outline-1 outline-offset-[-1px] outline-white hover:bg-gray-100 text-[#fff] text-[15px] font-bold font-['Plus_Jakarta_Sans']">
        Contact Us
      </Button>
      </div>
    </div>

    </div>

    
  </section>
  );
}
