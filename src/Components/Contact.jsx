import { IoMailSharp } from "react-icons/io5"
import { FaGithub, FaLinkedin, FaPhone, FaInstagramSquare} from "react-icons/fa"
import Layout from "./Layout"
import "./Contact.css"

function Contact () {
    return (
        <Layout>
            <form id="contact" action="" className="contact_main_container">
                <section className="form_left_container">
                    <article className="form_subtitle_container">
                        <h2 className="form_subtitle">Let's connect!</h2>
                    </article>
                    <article className="email_phone_contact_container">
                        <p>Feel free to contact me if you require my services, have any concerns, or need assistance.</p>
                        <section className="email_phone_contact">
                            <IoMailSharp /> 
                            bernardoantoniod@gmail.com
                        </section>
                        <section className="email_phone_contact">
                            < FaPhone /> 
                            +56977545456
                        </section>
                        <section className="social_icons">
                            <a className="social_icons_anchor" href="https://github.com/Bernullys" target="_blank" >
                                < FaGithub />
                            </a>
                            <a className="social_icons_anchor" href="https://www.linkedin.com/in/bernardodavilarondon/" target="_blank" >
                                < FaLinkedin />
                            </a>
                            <a className="social_icons_anchor" href="https://www.instagram.com/bernardo_antonio_/" target="_blank" >
                                < FaInstagramSquare />
                            </a>
                        </section>
                    </article>
                </section>
                <section className="form_right_container">
                    <input type="text" name="name" id="name_input" placeholder="name" />
                    <input type="email" name="email" id="mail_input" placeholder="email" />
                    <textarea type="text" name="message" id="message_input" placeholder="message"/>
                    <button className="form_send_button">Send</button>
                </section>
            </form>
        </Layout>
    )
}

export default Contact