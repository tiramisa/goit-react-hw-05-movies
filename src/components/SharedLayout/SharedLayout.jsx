import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import { Container } from '../App/AppStyled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
