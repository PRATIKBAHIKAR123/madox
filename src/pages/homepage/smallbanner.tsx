import { Button } from "@/components/ui/button";

interface SmallbannerSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

export default function SmallbannerSection({ title, description, imageUrl, buttonText }: SmallbannerSectionProps) {
  return (
    <section
    className=" small-banner"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {/* Overlay to make text readable */}
    <div className="absolute inset-0 bg-opacity-70"></div>

    {/* Content Section */}
    <div className="relative z-10 max-w-2xl flex flex-col gap-4">
      <h2 className="text-white text-[32px] font-bold font-['Mulish'] leading-[38.40px]">{title}</h2>
      <div className="flex items-center space-x-2">
      <div className="w-4 h-1.5 bg-white rounded-[30px]" />
      <div className="w-[46px] h-1.5 bg-white rounded-[30px]" />
      </div>
      <p className="text-[#f2f2f2] text-base font-medium font-['Mulish'] leading-normal">{description}</p>
      
    </div>
    <Button className="bg-white rounded-[10px] shadow-[inset_0px_0px_0px_1px_rgba(246,246,249,1.00)] outline outline-1 outline-offset-[-1px] outline-white hover:bg-gray-100 text-[#0070ae] text-[15px] font-bold font-['Plus_Jakarta_Sans']">
        {buttonText}
      </Button>
  </section>
  );
}
