import "reflect-metadata";
import { Container, injectable, decorate } from "inversify";
import { BaseRepository } from "../Repository/base/base.repository";
import { IMailService } from "../../Application/Services/Interfaces/IMail.service";
import TYPES from "./Types";
import { MailRepository } from "../Repository/mail.repository";
import { MailService } from "../../Application/Services/mail.service";

decorate(injectable(), BaseRepository);

var bootstrapper = new Container();

//Repository
bootstrapper.bind<MailRepository>(TYPES.MailRepository).to(MailRepository);

//Service
bootstrapper.bind<MailService>(TYPES.MailService).to(MailService);

// bootstrapper.bind<any>(BaseRepository).toConstantValue({ objectMode: true })

export default bootstrapper;
