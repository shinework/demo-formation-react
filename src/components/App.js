import React, { useContext } from "react";
import { IntlProvider } from "react-intl";
import { RouterProvider } from "react-router-dom";
import router from "../core/router";
import store from "../core/store";
import { Provider } from "react-redux";

import messagesFr from "../core/i18n/fr";
import messagesEn from "../core/i18n/en";
import { AppContext } from "../core/contexts/app-context";

const messages = { fr: messagesFr, en: messagesEn };

const App = () => {
  const { locale } = useContext(AppContext);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      defaultLocale="en"
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </IntlProvider>
  );
};

export default App;
