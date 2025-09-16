import ReduxProvider from "@/store/ReduxProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import "./globals.css";
import { MyTheme } from "./theme";

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
