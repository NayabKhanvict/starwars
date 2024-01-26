import { Layout } from "antd";
import starwarsLogo from "assets/svgs/starwars-logo.svg";
import styles from "./AppLayout.module.scss";

const { Header, Footer, Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Layout className={styles.appLayout}>
      <Header className={styles.header}>
        <img src={starwarsLogo} height={65} />
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer} />
    </Layout>
  );
};

export default AppLayout;
