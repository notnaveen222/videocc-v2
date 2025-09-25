import { ConnectButton } from "./Buttons";
import { NavbarAnimation } from "./Framer-actions";

export default function Navbar() {
  return (
    <NavbarAnimation>
      <div className="sticky top-0 w-full flex justify-between items-center px-7 py-5">
        <div className="text-2xl font-medium">VEDIOCC</div>
        <ConnectButton title="Let's Talk" />
      </div>
    </NavbarAnimation>
  );
}
