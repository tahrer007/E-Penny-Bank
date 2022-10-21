import SvgLogo from "components/Svg/SvgLogo";
import { useNavigate } from "react-router-dom";
import useUserInfo from "hooks/useUserInfo";
import "./public.scss";
const Public = () => {
  const { theme } = useUserInfo();
  const navigate = useNavigate();

  return (
    <section className={`public ${theme}`}>
      <header>
        <SvgLogo />
      </header>
      <main>
        <h1 className="text">Welcome to E-Penny Bank</h1>
        like real penny bank, Start saving now and get surprised by how much you
        save :)
        <br />
        Don't forget to share boxes with friends and start saving together.
      </main>
      <footer>
        <div className="twoBtnsContainer">
          <div
            className="mainBtns columnFlex hoverable"
            onClick={() => navigate("Signup")}
          >
            Sign up
          </div>
          <div
            className={` mainBtns columnFlex hoverable  `}
            onClick={() => navigate("Login")}
          >
            Login
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Public;
