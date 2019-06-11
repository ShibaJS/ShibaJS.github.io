import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { IntlProvider } from "react-intl";
import { renderRoutes } from "react-router-config";
import { BrowserRouter, Switch } from "react-router-dom";
import Root from "./components/Root";
import { getLocalMessage } from "./i18n";
import { routeConfig } from "./router";
import LanguageStore from "./store/LanguageStore";

const App = observer(() => {
    const languageStore = useContext(LanguageStore);
    return (
        <IntlProvider locale={languageStore.language} messages={getLocalMessage(languageStore.language)}>
            <BrowserRouter>
                <Root>
                    <Switch>
                        {renderRoutes(routeConfig)}
                    </Switch>
                </Root>
            </BrowserRouter>
        </IntlProvider>
    );
});

export default App;
