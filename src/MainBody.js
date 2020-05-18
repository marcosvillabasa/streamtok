import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Switch, Route, useLocation } from "react-router-dom"
import styled from "styled-components"
import LandingPage from "./LandingPage/LandingPage.js"
const TabCanales = React.lazy(() => import("./TabCanales/TabCanales.js"))
const TabVivo = React.lazy(() => import("./TabVivo/TabVivo.js"))
const TabEventos = React.lazy(() => import("./TabEventos/TabEventos.js"))
const TabTV = React.lazy(() => import("./TabTV/TabTV.js"))

const Main = styled.main`
  min-height: 1080px;
  position: relative;
  margin: 0px 7vw;
`

const Loading = styled.div`
  font-size: 24px;
  color: white;

  &::after {
    content: "Cargando...";
  }
`

export default function MainBody(props) {
  const location = useLocation()
  return (
    <Main id="main-content">
      <Switch>
        <div className="appear" key={location.key}>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <React.Suspense fallback={<Loading />}>
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
    </Main>
  )
}
