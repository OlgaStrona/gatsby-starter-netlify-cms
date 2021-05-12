import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Olga Grączeska</h1>
              <p>
              Gabinet psychoterapii "Centrum Psychologiczne Dobra Przestrzeń", ul. Drzymały 18/24, 02-495 Warszawa
              </p>
              <p>
              Tel: 600149241 lub 600701241
              </p>
              <br/>
              <br/>
              <h1>Współpracuję także z:</h1>
              
              <ul>
                <li>
                SZPZLO Warszawa Ochota, Centrum Zdrowia Psychicznego, ul. Skarżyńskiego 1, 02-377 Warszawa
                </li>
                <li>
                Instytut AMICI, ul. Wronia 45/U1, 00-868 Warszawa
                </li>
                <li>
                Magdalena Konowrocka Optimum Zdrowia, dietetyk, psychodietetyk <br/>
                tel: 607608585
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
