import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <Button text={"Log Out"} onClick={() => console.log("Logged Out")} />
    </header>
  );
};

export default Header;
