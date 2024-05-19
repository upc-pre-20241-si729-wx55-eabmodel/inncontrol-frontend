export class Messages {



  messages: [
    {
      id: number;
      from: number;
      to: number;
      subject: string;
      text: string;
      date: string;
      state: string;
      sender: string;
      receiver: string;
    }
  ] ;



  constructor(messageId: number, from: number, to: number, subject: string, text: string, date: string, state: string) {
    this.messages = [
      {
        id: messageId,
        from: from,
        to: to,
        subject: subject,
        text: text,
        date: date,
        state: state,
        sender: ' ',
        receiver: ' ',
      }
    ];

  }

  changeState(messageId: number, state: string) {
    this.messages?.forEach((message) => {
      if (message.id === messageId) {
        message.state = state;
      }
    });
  }

  deleteMessage(messageId: number) {

    const deletedMesage:any = [];
    this.messages?.forEach((message) => {
      if (message.id === messageId) {

      }else {
        deletedMesage.push(message);
      }
    });

    this.messages = deletedMesage;


  }

  getMessages() {
    return this.messages;
  }

  getMessageByUnreadStatus() {
    let unreadMessages:any = [];
   unreadMessages = this.messages.filter((message) => message.state === "unread");

   this.messages.forEach((message) => {
      if (message.state === "read") {
        unreadMessages.push(message);
      }
   })


   console.log('Unread Messages', unreadMessages);

   this.messages = unreadMessages;

   return this.messages;
  }

  getUnreadSize()
  {
    let unreadMessages:any = [];
    unreadMessages = this.messages.filter((message) => message.state === "unread");
    return unreadMessages.length;
  }


  setSenderReciever(userid: string, name: string) {


    this.messages.forEach((message: any) => {

      if (message.from.toString() === userid.toString()) {
        message.sender = name;
        console.log('Sender', message.sender);

      }else if (message.to.toString() === userid.toString()) {
        message.receiver = name;
        console.log('Receiver', message.receiver);

      }
    });
    console.log('Messages', this.messages);
    return this.messages;
  }

  getMessageBySenderId(userId: number) {
    const sentMessages:any = [];
    this.messages?.forEach((message) => {
      if (message.from === userId) {
        sentMessages.push(message);

      }else if(sentMessages.length === 0) {
        console.log('No messages found');
      }
    });

    this.messages = sentMessages;

    return this.messages;
  }

}
