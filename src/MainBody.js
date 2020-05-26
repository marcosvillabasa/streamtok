import React from "react"
import { Switch, Route, useLocation } from "react-router-dom"
import LandingPage from "./LandingPage/LandingPage.js"
import { Loading } from "./Components/LazyComponentLoading.js"
import TabCanales from "./Views/Canales/Canales.js"
import TabVivo from "./Views/Vivo/Vivo.js"
import TabEventos from "./Views/Eventos/Eventos.js"
import TabTV from "./Views/TV/TV.js"

export default function MainBody(props) {
  const location = useLocation()
  return (
    <main id="main-content">
      <Switch>
        <div className="fadein" key={location.key}>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <React.Suspense fallback={<Loading className="fadein" />}>
            <Route path="/vivo">
              <TabVivo />
            </Route>
            <Route path="/canales">
              <TabCanales />
            </Route>
            <Route path="/eventos">
              <TabEventos />
            </Route>
            <Route path="/tv">
              <TabTV />
            </Route>
          </React.Suspense>
        </div>
      </Switch>
    </main>
  )
}
