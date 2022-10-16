import { Link } from "react-router-dom";
import "./public.scss";
import SvgLogo from "components/Svg/SvgLogo";
import { useNavigate } from "react-router-dom";

const Public = () => {
  const navigate = useNavigate();
  const content = (
    <div className="public">
      <section>
        <header>
          <SvgLogo />
        </header>
        <main>
          <h1 className="text">Welcome to E-Penny Bank</h1>
          like real penny bank, Start saving now and get surprised by how much
          you save :)
          <br />
          Don't forget to share boxes with friends and start saving together.
        </main>
        <footer>
          <p> Already have an account?</p>

          <button onClick={()=>navigate("login")}>
            Login
          
          </button>
          <p> Need an account?</p>

          <button onClick={()=>navigate("Signup")}>
          Signup
          
          </button>
        </footer>
      </section>
    </div>
  );
  return content;
};
export default Public;
