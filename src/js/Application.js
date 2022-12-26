import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();
        this._create();
        this._beat = new Beat();
        this._beat.addListener(Beat.events.BIT, this._create);
        this.emit(Application.events.READY);
    }
    _create() {
        const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
        let count = 0;
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerText = lyrics[count];
        count++;
        console.log(count);
        document.querySelector(".main").appendChild(message);
    }
}
