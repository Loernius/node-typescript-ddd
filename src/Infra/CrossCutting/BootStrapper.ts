import { Container } from "inversify";
import { MailRepository } from "../Repository/mail.repository";


var bootstrapper = new Container();

//Repository
bootstrapper.bind<MailRepository>(MailRepository).toSelf();

export default bootstrapper;
