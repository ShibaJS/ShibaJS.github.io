import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import React, { useContext } from "react";
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
            <span className="Title 	ms-fontColor-themePrimary">ShibaJS</span>
            <Dropdown
                defaultSelectedKey={checkLanguageName(languageStore.language)}
                options={languages}/>
        </div>
    );
}
