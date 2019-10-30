import {
  controller, httpGet, httpPost, httpPut, httpDelete
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { Request } from 'express';

import TYPES from '../../Infra/CrossCutting/Types';

import { MailService } from '../../Application/Services/mail.service';
import { MailDomain } from '../../Domain/mail.domain';

@controller('/mail')
export class UserController {

  constructor(@inject(TYPES.MailService) private mailService: MailService) { }

  @httpPost('/send')
  public send(request: Request): Promise<boolean> {
    const mail: MailDomain = new MailDomain(request.body)
    return this.mailService.insertNewMail(mail);
  }
}