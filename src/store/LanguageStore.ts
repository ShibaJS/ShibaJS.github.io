import { observable } from "mobx";
import { createContext } from "react";

export class Language {
    @observable
    public language = navigator.language;
}

export default createContext(new Language());
