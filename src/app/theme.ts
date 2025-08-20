import { theme, ThemeConfig } from "antd";

const COLORS = {
  primary: "#1d1d1dff",
  primaryHover: "#ea2725",
  primaryActive: "#ff0400ff",
  borderColor: "#e9e9e9ff",
  bgContainer: "#fffcfcff",
};

const data = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
  Button: {
    colorPrimary: "#ea2725",
    buttonText: "#000000ff",
  },
};

export const MyTheme: ThemeConfig = {
  token: {
    // Seed Token
    colorPrimary: COLORS.primary,
    colorPrimaryHover: COLORS.primaryHover,
    colorPrimaryActive: COLORS.primaryActive,
    colorBorder: COLORS.borderColor,
    colorLink: COLORS.primary,
    colorLinkHover: COLORS.primaryHover,
    colorLinkActive: COLORS.primaryActive,
    colorBgContainer: COLORS.bgContainer,
  },


  components: {
    Button: {
        colorPrimary: data.Button?.colorPrimary,
        colorTextLightSolid: data.Button?.buttonText,
    },
    Input: {
      colorBorder: COLORS.borderColor,
      activeShadow: "none",
    },
    Card: {
      borderRadius: 0,
      bodyPadding: 14,
    },
    Upload: {
      colorBorder: COLORS.borderColor,
    },
    
  },
};
