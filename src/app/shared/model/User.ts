export class User {
  public buyerId?: number;
  public nickName?: string;
  public mail?: string;
  public password?: string;
  public place?: string;

  constructor(nickName: string, mail: string, password: string, place?: string, buyerId?: number) {
    this.nickName = nickName;
    this.mail = mail;
    this.password = password;
    this.place = place;
    this.buyerId = buyerId;
  }
}
