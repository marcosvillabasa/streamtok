import React from "react"
import { Switch, Route, useLocation } from "react-router-dom"
import LandingPage from "./LandingPage/LandingPage.js"
import ListaCanales from "./Views/Canales/ListaCanales.js"
import TabCanales from "./Views/Canales/Canales.js"
import TabVivo from "./Views/Vivo/Vivo.js"
import TabEventos from "./Views/Eventos/Eventos.js"
import TabTV from "./Views/TV/TV.js"
import { NotFound } from "./Views/Redirects/NotFound.js"

export default function MainBody(props) {
  const location = useLocation()
  return (
    <main id="main-content" className="fadein">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/vivo" component={TabVivo} />
        <Route path="/canales/lista" component={ListaCanales} />
        <Route path="/canales/:id" component={TabCanales} />
        <Route path="/eventos" component={TabEventos} />
        <Route path="/tv" component={TabTV} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  )
}
