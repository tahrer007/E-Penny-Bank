import { Link } from "react-router-dom";
import "./public.scss";

import { ReactComponent as Logo } from "assets/images/logo.svg";
const Public = () => {
  const content = (
    <div className="background columnFlex publicLayouts">
      <section className="public">
        <header>
          <Logo />
        </header>
        <main>
          <h1 className="text">Welcome to penny Box!</h1>
          Start saving your money with the same cash experience, get surprised
          by how much you save. Start saving with your family and friends.
        </main>
        <footer>
          already have an account ?
          <button>
            <Link to="/login">Login</Link>
          </button>
          Need an Account?
          <button>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Signup{" "}
            </Link>
          </button>
        </footer>
      </section>
    </div>
  );
  return content;
};
export default Public;
