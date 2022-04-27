import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}; //Mobx следит за изменениями этих переменных. При изменении этих переменных компоненты будут перерендироваться
        makeAutoObservable(this);
    }

    setIsAuth(bool) {   //action - это функции, которые это состояние как-то изменяют
        this._isAuth = bool
    }

    setUser(user) {
        this._isAuth = user
    }

    get isAuth(){  //gettery нужны, чтобы получать переменные из нашего состояния, к ним обращаемся как к обычным объектам
        return this._isAuth //это так называемые computed функции, которые вызываются только в том случае, если переменная, которая есть внутри, была изменена - это оптимизация
    }

    get user(){
        return this._user
    }
}