import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // 导入 prop-types

const AchorContext = createContext();

export const AchorProvider = ({ children }) => {
  const [achor, setAchor] = useState("@Copyright by tom.riddle.SR");

  return (
    <AchorContext.Provider value={{ achor, setAchor }}>
      {children}
    </AchorContext.Provider>
  );
};

AchorProvider.propTypes = {
  children: PropTypes.node.isRequired // 验证 children 属性的类型
};

export const useAchor = () => {
  return useContext(AchorContext);
};
