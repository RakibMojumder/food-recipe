import AddButton from "./AddButton";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <div className="border-b shadow sticky top-0 backdrop-blur-xl backdrop-saturate-150">
      <div className="h-14 w-[90%] mx-auto flex justify-between items-center">
        <Logo />
        <SearchBox />
        <AddButton />
      </div>
    </div>
  );
};

export default Navbar;
