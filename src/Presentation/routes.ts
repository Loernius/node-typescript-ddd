import { Router } from 'express'
import MailController from './Controllers/mail.controller'

const routes = Router()

routes.post('/mail/send', MailController.send)

export default routes
