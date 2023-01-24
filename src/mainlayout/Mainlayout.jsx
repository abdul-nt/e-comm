import Header from "../Header/header";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
    <Header/>
      <div>{children}</div>
    </>
  );
};
export default MainLayout;
