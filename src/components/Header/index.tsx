import { ActionButton } from "office-ui-fabric-react/lib/Button";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import React, { useContext } from "react";
import {FormattedMessage} from "react-intl";
import siteMenu from "../../config/siteMenu";
import { checkLanguageName, getLanguages, getLocalMessage } from "../../i18n";
import LanguageStore from "../../store/LanguageStore";
import "./index.css";

export default function Header() {
    const languageStore = useContext(LanguageStore);
    const languages = getLanguages().map((it) => {
        return {
            key: it,
            text: getLocalMessage(it).languageName,
        };
    });
    return (
        <div className="Header-Background">
            <span className="Site-Title ms-font-su ms-fontColor-themePrimary">ShibaJS</span>
            <div className="Header-Actions">
                {siteMenu.map((it, index) => (
                    <ActionButton
                        key={index}
                        href={it.route}
                        target="_blank"
                    >
                        <FormattedMessage
                            defaultMessage={it.name}
                            id={it.name}
                        />
                    </ActionButton>
                ))}
                <Dropdown
                    className="Header-Language"
                    onChanged={(e) => languageStore.language = e.key.toString()}
                    defaultSelectedKey={checkLanguageName(languageStore.language)}
                    options={languages} />
            </div>
        </div>
    );
}
