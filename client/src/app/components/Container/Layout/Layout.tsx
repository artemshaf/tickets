import { BrowserRouter } from "react-router-dom";
import { FunctionComponent } from "react";
import { ILayoutInterface } from "./Layout.interface";
import { LeftBar } from "../LeftBar";
import { RightBar } from "../RightBar";
import styles from "./Layout.module.scss";

export const Layout = ({ children, ...props }: ILayoutInterface) => {
  return (
    <div className={styles.wrapper}>
      <LeftBar />
      <main {...props}>{children}</main>
      <RightBar />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <BrowserRouter>
        <Layout>
          <Component {...props} />
        </Layout>
      </BrowserRouter>
    );
  };
};
