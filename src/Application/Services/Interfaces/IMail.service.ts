import { MailDomain } from "../../../Domain/mail.domain";

interface IMailService {
    insertNewMail(mail: MailDomain): Promise<boolean>;
}
  
  export { IMailService };