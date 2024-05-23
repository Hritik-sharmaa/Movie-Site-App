import Heading from "./Heading";

const Navigation = ({ value, setSearchValue, searchValue }) => {

  return (
    <>
      <div className="w-full h-16 shadow-2xl flex justify-between items-center">
        <Heading label="MoviesJunk" textSize="text-2xl" />
        <input
          type="text"
          placeholder="Search a movie..."
          className=" border-none outline-none rounded-full text-center mr-[5rem] text-sm w-[15rem] h-8 text-black"
          value={value}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default Navigation;
