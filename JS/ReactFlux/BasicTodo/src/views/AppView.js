import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const AppView = (props) => {
  return(
    <section>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </section>
  );
}

export default AppView;
