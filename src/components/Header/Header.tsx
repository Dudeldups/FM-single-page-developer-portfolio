import "./Header.less";
import Navbar from "./Navbar/Navbar";
import Introduction from "./Introduction/Introduction";

export default function Header() {
  return (
    <header className="header">
      <Navbar />
      <Introduction />
    </header>
  );
}
