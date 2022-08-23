import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./views.css";

export const Header = () => {
  return (<>

      <header className="siteHeader">
        <FontAwesomeIcon size="xl" icon={faBookmark} />
        <h1>Mybrary</h1>
      </header>

    <div>
    </div>
    </>
  );
};
