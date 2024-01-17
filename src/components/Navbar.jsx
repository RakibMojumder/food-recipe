import AddButton from "./button/AddButton";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <div className="border-b shadow sticky top-0 backdrop-blur-xl backdrop-saturate-150">
      <div className="h-14 w-[90%] mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-x-5 sm:gap-x-10">
          <SearchBox className={"hidden sm:flex"} />
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
