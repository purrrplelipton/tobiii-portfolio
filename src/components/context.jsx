import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const Contexts = createContext(null);

export const Provider = ({ children }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <Contexts.Provider value={{ drawerIsOpen, setDrawerIsOpen }}>
      {children}
    </Contexts.Provider>
  );
};

Provider.propTypes = { children: PropTypes.node.isRequired };
