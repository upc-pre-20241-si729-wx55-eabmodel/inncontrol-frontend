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
    }
  ] | undefined;



  constructor(messageId: number, from: number, to: number, subject: string, text: string, date: string, state: string) {
    this.messages = [
      {
        id: messageId,
        from: from,
        to: to,
        subject: subject,
        text: text,
        date: date,
        state: state
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

  newMessage(messageId: number, from: number, to: number, subject: string, text: string, date: string, state: string) {
    this.messages?.push({
      id: messageId,
      from: from,
      to: to,
      subject: subject,
      text: text,
      date: date,
      state: state
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

    return deletedMesage;


  }

  getMessages() {
    return this.messages;
  }

  getMessageByUnreadStatus() {
    return this.messages?.filter((message) => message.state === 'unread');
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
    return sentMessages;
  }

}
