import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Container } from '../App/App.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container>
            <Outlet />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
