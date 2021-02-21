import React from "react"
import { Switch, Route } from "react-router-dom"
import LandingPage from "./LandingPage/LandingPage.js"
import ListaCanales from "./Views/Canales/ListaCanales.js"
import MediaPlayer from "./Components/MediaPlayer.js"
// import TabVivo from "./Views/Vivo/Vivo.js"
import TabEventos from "./Views/Eventos/Eventos.js"
import TabTV from "./Views/TV/TV.js"
import { NotFound } from "./Views/Redirects/NotFound.js"
import Grid from "./Views/TV/Grid.js"
import { Contacto } from "./Views/Contacto/Contacto.js"
import ContainerChannel from './Admin/Channel/ContainerChannel'

export default function MainBody(props) {
  return (
    <main id="main-content" className="fadein">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        {/* <Route path="/vivo" component={TabVivo} /> */}
        <Route path="/canales" exact component={ListaCanales} />
        <Route path="/canales/:id" component={MediaPlayer} />
        <Route path="/eventos" exact component={TabEventos} />
        <Route path="/eventos/:id" component={MediaPlayer} />
        <Route path="/tv" exact component={Grid} />
        <Route path="/tv/:id" component={TabTV} />
        <Route path="/contacto" exact component={Contacto} />
        <Route path="/admin" exact component={ContainerChannel} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  )
}
