class Global{
    constructor(){
        
    }
    static emailjsId = "user_23yMwwIPxn02dAf8pEFDq";
    static recaptchaSiteKey = "6LfPKdYZAAAAAHCIcpr6B-TbQWYA6cldq4zYMKco";
    static recaptchaSecretKey = "6LfPKdYZAAAAAPHYBgtAmrLrksDSR2UPYtA4mKEi"

    static getEmailJsId(){
        return this.emailjsId;
    }
    static getRecaptchaSiteKey(){
        return this.recaptchaSiteKey;
    }
    static getRecaptchaSecretKey(){
        return this.recaptchaSecretKey;
    }
    
}
export default Global;