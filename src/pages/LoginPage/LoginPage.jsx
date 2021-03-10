import { loginUrl } from "../../utilities/spotify";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      {/* login with spotify button */}
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
}
