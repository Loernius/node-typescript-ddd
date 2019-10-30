import { MailDomain } from './../../Domain/mail.domain';
import { Request, Response } from 'express';
import { MailService } from '../../Application/Services/mail.service';
import bootstrapper from '../../Infra/CrossCutting/BootStrapper';

class MailController {

  public _service: MailService;

  constructor() {
    this._service = bootstrapper.resolve<MailService>(MailService);
  }

  public async send(req: Request, res: Response): Promise<Response> {
    const mail: MailDomain = new MailDomain(req.body)
    const service = this._service.create(mail);
    return res.json(service)
  }
}

export default new MailController();