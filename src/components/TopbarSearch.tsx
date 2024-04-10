import { Link } from "react-router-dom";

import Avatar2 from "../assets/images/users/user-2.jpg";
import Avatar5 from "../assets/images/users/user-5.jpg";

interface SearchResultItem {
  id: number;
  title: string;
  redirectTo: string;
  icon: string;
}

interface TopbarSearchProps {
  items: Array<SearchResultItem>;
}

const TopbarSearch = (props: TopbarSearchProps) => {
  const showSearchOptions = () => {
    document.getElementById("search-dropdown")!.classList.add("d-block");
  };

  const hideSearchOptions = () => {
    document.getElementById("search-dropdown")!.classList.remove("d-block");
  };

  return (
    <>
      <form>
        <input
          type="search"
          className="form-control rounded-pill"
          placeholder="Search..."
          id="top-search"
          onFocus={showSearchOptions}
          onBlur={hideSearchOptions}
        />
        <span className="mdi mdi-magnify search-icon font-22"></span>
      </form>

      <div
        className="dropdown-menu dropdown-menu-animated dropdown-lg"
        id="search-dropdown"
      >
        <div className="dropdown-header noti-title">
          <h5 className="text-overflow mb-2">Found 22 results</h5>
        </div>

        <Link to="#" className="dropdown-item notify-item">
          <i className="fe-home me-1"></i>
          <span>Analytics Report</span>
        </Link>

        <Link to="#" className="dropdown-item notify-item">
          <i className="fe-aperture me-1"></i>
          <span>How can I help you?</span>
        </Link>

        <Link to="#" className="dropdown-item notify-item">
          <i className="fe-settings me-1"></i>
          <span>User profile settings</span>
        </Link>

        <div className="dropdown-header noti-title">
          <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
        </div>

        <div className="notification-list">
          <Link to="#" className="dropdown-item notify-item">
            <div className="d-flex align-items-start">
              <img
                className="d-flex me-2 rounded-circle"
                src={Avatar2}
                alt="Generic placeholder"
                height="32"
              />
              <div className="w-100">
                <h5 className="m-0 font-14">Erwin E. Brown</h5>
                <span className="font-12 mb-0">UI Designer</span>
              </div>
            </div>
          </Link>

          <Link to="#" className="dropdown-item notify-item">
            <div className="d-flex align-items-start">
              <img
                className="d-flex me-2 rounded-circle"
                src={Avatar5}
                alt="Generic placeholder"
                height="32"
              />
              <div className="w-100">
                <h5 className="m-0 font-14">Jacob Deo</h5>
                <span className="font-12 mb-0">Developer</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* <Select
        {...props}
        components={{ IndicatorsContainer, MenuList }}
        placeholder={'Search...'}
        options={formateOptions(options)}
        formatOptionLabel={handleFormatOptionLabel}
        isOptionDisabled={(option) => option.type === 'title'}
        maxMenuHeight={350}
        handleClick={onClick}
        isSearchable
        isClearable
        name="search-app"
        className="app-search dropdown"
        classNamePrefix="react-select"
      /> */}
    </>
  );
};

export default TopbarSearch;
