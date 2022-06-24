import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Шапка для блога</h3>
            <p>Что-нибудь мотивирующее!</p>
            <p>Что-то нужное!</p>
            <p>Что-то надежное!</p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Ваше имя</label>
                <input type="text" name="name" id="name"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">Ваш email</label>
                <input type="text" name="email" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">Сообщение</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Отправить
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
