import { Link } from "react-router-dom";
import "./public.scss";
import SvgLogo from "components/Svg/logo/SvgLogo";

const Public = () => {
  const content = (
    <div className="public">
      <section>
        <header>
          <SvgLogo />
        </header>
        <main>
          <h1 className="text">Welcome to penny Box!</h1>
          like real penny bank, Start saving now and get surprised by how much
          you save :)
          <br />
          Don't forget to share boxes with friends and start saving together.
        </main>
        <footer>
          <p> already have an account?</p>

          <button>
            <Link to="/login">Login</Link>
          </button>
          <p> Need an Account?</p>

          <button>
            <Link to="/login">Signup</Link>
          </button>
        </footer>
      </section>
    </div>
  );
  return content;
};
export default Public;
