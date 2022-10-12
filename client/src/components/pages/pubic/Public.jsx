import { Link } from "react-router-dom";
import "./public.scss";

const Public = () => {
  const content = (
    <section className="public">
      <header>
       {/*logo */}
      </header>
      <main>
      <h1>Welcome to penny Box!</h1>
        Start saving your money with the same cash experience, get surprised by
        how much you save. Start saving with your family and friends.
      </main>
      <footer>
        already have an account ?<Link to="/login">Login</Link>
        Need an Account?<Link to="/login">Signup </Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
