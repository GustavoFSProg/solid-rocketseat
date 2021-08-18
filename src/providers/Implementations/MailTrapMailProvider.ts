import { IMailProvider, IMessage } from '../IMailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '9073b518e6b8a6',
        pass: '87df1368f90387',
      },
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.to.name,
        address: message.to.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}
