import { inject as Inject, injectable as Injectable } from "inversify";
import { MailRepository } from "../../Infra/Repository/mail.repository";
import { MailDomain } from "../../Domain/mail.domain";

@Injectable()
export class MailService {
    
    protected _mailRepository: MailRepository;

    constructor(
        @Inject(MailRepository) mailRepository: MailRepository
    ) {
        this._mailRepository = mailRepository
    }

    public create(domain: MailDomain){
        return this._mailRepository.create(domain)
    }
}