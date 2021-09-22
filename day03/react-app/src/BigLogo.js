import { MessageOutlined, AndroidOutlined } from "@ant-design/icons";
import React from "react";

export const BigLogo = () => {
  const [state, setState] = React.useState(true);
  React.useEffect(() => {
    const id = setInterval(() => {
      setState(!state);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <div id="biglogo">
      <img src="https://gw.alipayobjects.com/zos/antfincdn/6UYtAUYPXE/AntDesign.svg" />
      {state ? <AndroidOutlined id="dot" /> : <MessageOutlined id="dot" />}
    </div>
  );
};
