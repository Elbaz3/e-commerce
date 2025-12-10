import ButtonPrim from "@components/common/ButtonPrim/ButtonPrim";
import SmallNav from "@components/common/SmallNav/SmallNav";

const Error = () => {
  return (
    <div className="error-page pt-20 pb-[140px]">
      <div className="container">
        <SmallNav items={["Home", "Error"]} />
      </div>
      <div className="container flex flex-col gap-20 items-center h-screen  pt-60">
        <div className="error-head text-center">
          <h1 className="text-[110px] font-medium">404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
        </div>

        <ButtonPrim value="Back to home page" to="/" />
      </div>
    </div>
  );
};

export default Error;
