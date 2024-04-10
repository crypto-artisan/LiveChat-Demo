import { useEffect, useState, useMemo } from "react";

import { APICore } from "../helpers/api/apiCore";

const useUser = (): { user: any | void } => {
  const api = useMemo(() => new APICore(), []);

  const [user, setuser] = useState();

  useEffect(() => {
    if (api.isUserAuthenticated()) {
      setuser(api.getLoggedInUser());
    }
  }, [api]);

  return { user };
};

export default useUser;
