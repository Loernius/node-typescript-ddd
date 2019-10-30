import { Container } from "inversify";
import { MailRepository } from "../Repository/mail.repository";

var services = new Container();

//Repository
services.bind<MailRepository>(MailRepository).toSelf();


export default services;
