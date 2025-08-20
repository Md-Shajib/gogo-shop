import { ThemeConfig } from "antd";

const data = {
  bodyBg: "#f3f4f6",
  bgContainer: "#fffcfcff",
  primary: "#f81818ff",
  primaryHover: "#ea2725",
  linkPrimary: "#4B5563",
  Button: {
    colorPrimary: "#ea2725",
    buttonText: "#ffffffff",
    borderColor: "#ddddddff",
  },
  Input: {
    borderColor: "#ddddddff",
  },
};

export const MyTheme: ThemeConfig = {
  token: {
    // Seed Token
    colorBgBase: data.bodyBg,
    colorPrimary: data.primary,
    colorPrimaryHover: data.primaryHover,
    colorBorder: data.Button?.borderColor,
    colorLink: data.linkPrimary,
    colorLinkHover: data.primaryHover,
    colorBgContainer: data.bgContainer,
  },

  components: {
    Button: {
      colorPrimary: data.Button?.colorPrimary,
      colorTextLightSolid: data.Button?.buttonText,
    },
    Input: {
      colorBorder: data.Input?.borderColor,
      activeShadow: "none",
    },
    Card: {
      borderRadius: 0,
      bodyPadding: 14,
    },
  },
};
