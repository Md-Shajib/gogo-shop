import TopHeader from "@/components/Header/TopHeader";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import { App, ConfigProvider } from "antd";
import { MyTheme } from "./theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import SearchHeader from "@/components/Header/SearchHeader";
import CategoryNav from "@/components/Header/CategoryNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{backgroundColor: MyTheme.token?.colorBgBase}}>
        <ReduxProvider>
          <ConfigProvider theme={MyTheme}>
            <AntdRegistry>
              <App>
                {children}
              </App>
            </AntdRegistry>
          </ConfigProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
