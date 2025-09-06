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
  Dropdown: {
    hoverBG: "#ffc9cd",
    activeBG: "#f62f3f",
  }
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
    controlItemBgHover: data.Dropdown.hoverBG,
    controlItemBgActive: data.Dropdown.activeBG,
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
    Menu: {
      activeBarHeight: 3,
      collapsedIconSize: 18,
      dropdownWidth: 180,
      horizontalLineHeight: 2.5,
    },
    Dropdown: {
      paddingBlock: 5,
    }
  },
};
