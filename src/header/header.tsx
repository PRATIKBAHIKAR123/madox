
import { Button } from '@/components/ui/button';
import { List } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white md:bg-transparent text-white fixed w-full top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          
            
            <img src="src/assets/Images/logo.png" alt="Logo" className="hidden md:block h-[94px] w-[75px]" />
            <img src="src/assets/Images/logo-dark.png" alt="Logo" className="block md:hidden h-[66px] w-[53px]" />
            <div className="hidden md:flex space-x-6">
              <a  className="nav-link">Home</a>
              <a className="nav-link">Properties</a>
              <a className="nav-link">Agents</a>
              <a className="nav-link">About</a>
              <a className="nav-link">Blog</a>
              <a className="nav-link">Contact</a>
            </div>
          <div>
            <Button className="hidden md:block text-[#0070ae] h-12 text-base font-semibold font-['Plus_Jakarta_Sans'] bg-white rounded-[34px] hover:bg-blue-800 px-[18px] py-[10px]">
            Contact Us
            </Button>
          </div>
          <div className="block md:hidden p-2.5 bg-[#0070ae] rounded-[5px] inline-flex justify-start items-start gap-2.5">
  <div className="w-6 h-6 relative overflow-hidden">
    <List/>
  </div>
</div>
        </nav>
      </header>
  )
}
export default Header;