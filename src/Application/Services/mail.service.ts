import { inject as Inject, injectable as Injectable } from "inversify";
import { MailRepository } from "../../Infra/Repository/mail.repository";
import { MailDomain } from "../../Domain/mail.domain";
import { IMailService } from "./Interfaces/IMail.service";
import TYPES from "../../Infra/CrossCutting/Types";

@Injectable()
export class MailService implements MailService {
    
    protected _mailRepository: MailRepository;

    constructor(
        @Inject(TYPES.MailRepository) mailRepository: MailRepository
    ) {
        this._mailRepository = mailRepository
    }

    public insertNewMail(domain: MailDomain): Promise<boolean>{
        return this._mailRepository.insertNewMail(domain)
    }
}