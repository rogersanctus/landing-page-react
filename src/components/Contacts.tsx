export function Contacts() {
  return (
    <section
      id="contact"
      className="bg-secondary bg-opacity-70 border-t border-zinc-500/80 backdrop-blur-xs pt-16 pb-20 px-6 text-white text-center"
    >
      <span className="text-2xl uppercase font-bold">Contato</span>
      <div className="md:flex md:flex-wrap grid grid-cols-2 place-content-stretch md:justify-center mt-12 gap-6">
        <div className="contact-group cursor-pointer flex flex-col items-center">
          <div className="flex text-lime-400 justify-center">
            {/*PhoenixInlineSvg.Helpers.svg_image(LandingPageWeb.Endpoint, "whatsapp-logo", "icons", className: "colorize icon-size")
           PhoenixInlineSvg.Helpers.svg_image(LandingPageWeb.Endpoint, "telegram-logo", "icons", className: "colorize icon-size")*/}
          </div>
          <span className="text-lime-400 text-sm font-semibold">
            Whatsapp/Telegram
          </span>
          <span className="text-white">(74) 98827-0231</span>
        </div>
        <a
          className="contact-group flex flex-col items-center"
          href="mailto://rogersanctus@gmail.com"
        >
          <div className="text-lime-400">
            {/*PhoenixInlineSvg.Helpers.svg_image(LandingPageWeb.Endpoint, "email-icon", "icons", className: "colorize icon-size")*/}
          </div>
          <span className="text-lime-400 text-sm font-semibold">e-mail</span>
          <span className="text-white">rogersanctus@gmail.com</span>
        </a>
        <a
          className="contact-group flex flex-col items-center"
          href="https://www.linkedin.com/in/rog%C3%A9rio-santos-6ba631b9"
        >
          <div className="text-lime-400">
            {/*PhoenixInlineSvg.Helpers.svg_image(LandingPageWeb.Endpoint, "linkedin-plain", "icons", className: "colorize icon-size")*/}
          </div>
          <span className="text-lime-400 text-sm font-semibold">Linkedin</span>
        </a>
        <a
          className="contact-group flex flex-col items-center"
          href="https://github.com/rogersanctus"
        >
          <div className="text-lime-400">
            {/*PhoenixInlineSvg.Helpers.svg_image(LandingPageWeb.Endpoint, "github-original", "icons", className: "colorize icon-size")*/}
          </div>
          <span className="text-lime-400 text-sm font-semibold">Github</span>
        </a>
      </div>
    </section>
  )
}
