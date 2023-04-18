import WhatsAppLogo from '@public/icons/whatsapp-logo.svg'
import TelegramLogo from '@public/icons/telegram-logo.svg'
import EmailIcon from '@public/icons/email-icon.svg'
import LinkedinLogo from '@public/icons/linkedin-plain.svg'
import GithubLogo from '@public/icons/github-original.svg'

export function Contacts() {
  return (
    <section
      id="contact"
      className="bg-secondary border-t border-sky-400 pt-16 pb-20 px-6 text-white text-center"
    >
      <h2 className="text-2xl uppercase font-bold drop-shadow">Contato</h2>
      <div className="md:flex md:flex-wrap grid xxs:grid-cols-2 grid-cols-1 text-xs place-content-stretch md:justify-center mt-12 gap-6">
        <div className="contact-group cursor-pointer flex flex-col items-center">
          <div className="flex text-lime-400 justify-center">
            <WhatsAppLogo className="w-11 h-11 fill-current" />
            <TelegramLogo className="w-11 h-11 fill-current" />
          </div>
          <span className="text-lime-400 md:text-sm text-xs font-semibold">
            Whatsapp/Telegram
          </span>
          <span className="text-white">(74) 98827-0231</span>
        </div>
        <a
          className="contact-group flex flex-col items-center"
          href="mailto://contato@supra-dev.com"
          rel="external nofollow noreferrer"
          target="blank"
        >
          <div className="text-lime-400">
            <EmailIcon className="w-11 h-11 fill-current" />
          </div>
          <span className="text-lime-400 md:text-sm text-xs font-semibold">
            e-mail
          </span>
          <span className="text-white">contato@supra-dev.com</span>
        </a>
        <a
          className="contact-group flex flex-col items-center"
          href="https://www.linkedin.com/in/rogersanctus"
          rel="external nofollow noreferrer"
          target="blank"
        >
          <div className="text-lime-400">
            <LinkedinLogo className="w-11 h-11 fill-current" />
          </div>
          <span className="text-lime-400 md:text-sm text-xs font-semibold">
            Linkedin
          </span>
        </a>
        <a
          className="contact-group flex flex-col items-center"
          href="https://github.com/rogersanctus"
          rel="external nofollow noreferrer"
          target="blank"
        >
          <div className="text-lime-400">
            <GithubLogo className="w-11 h-11 fill-current" />
          </div>
          <span className="text-lime-400 md:text-sm text-xs font-semibold">
            Github
          </span>
        </a>
      </div>
    </section>
  )
}
