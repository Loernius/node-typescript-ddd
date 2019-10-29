import { MailDomain } from './../../Domain/mail.domain';
import { BaseRepository } from "./base/base.repository";

export class MailRepository extends BaseRepository<MailDomain>{
    insertNewMail(mail: MailDomain){
        return this.create(mail);
    }

    updateMail(mail: MailDomain){
        return this.update(mail.id, mail);
    }
}