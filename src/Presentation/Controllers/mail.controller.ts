import { MailDomain } from './../../Domain/mail.domain';
import { Request, Response } from 'express';


class MailController {
  public async send (req: Request, res: Response): Promise<Response> {
    const mail: MailDomain = new MailDomain(req.body)
    return res.json(mail)
  }
}

export default new MailController()
