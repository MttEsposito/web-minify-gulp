class Message {
    flashMessage:string;
    constructor(public message: string) {
        this.flashMessage = message;
    }
    
    alertMessage():void{
        alert(`hello from browser alert \n Message: ${this.flashMessage}`);
    }
    logMessage():void{
        console.log(`hello from browser console \n Message: ${this.flashMessage}`);
    }
}

const message = new Message("hello :)");

message.alertMessage();
message.logMessage();