import { Layout } from "antd";
import styles from "./AppLayout.module.scss";

const { Header, Footer, Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Layout className={styles.appLayout}>
      <Header className={styles.header}>
        <img src="/starwars-logo.svg" height={65} />
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer} />
    </Layout>
  );
};

export default AppLayout;
