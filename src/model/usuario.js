export default class Usuario {
    /**
     * Create a object User from Firebase session
     * 
     * @param {*} data Converted User Auth
     */
    constructor(data) {
        if (typeof data != typeof "asdkfj") {            
            this.displayName = data.displayName;
            this.email = data.email;
            this.photoURL = data.photoURL;
            this.token = data.accessToken;
            this.uid = data.uid;
        } else {
            this.#parse(data);
        }
    }

    /**
     * Convert string JSON to Usuario object
     * 
     * @param {string} param JSON Usuario
     */
    #parse = param => {
        const json = JSON.parse(param);

        this.displayName = json["Display Name"];
        this.email = json["E-mail"]
        this.photoURL = json["Photo URL"];
        this.token = json["Token"];
        this.uid = json["UID"];
    }

    /**
     * 
     * @returns Object convert to String format
     */
    toString() {
        return `{"UID": "${this.uid}", "Display Name": "${this.displayName}", "E-mail": "${this.email}", "Token": "${this.token}", "Photo URL": "${this.photoURL}"}`;
    }
}