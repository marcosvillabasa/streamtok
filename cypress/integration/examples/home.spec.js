/* eslint-disable no-undef */
describe('a user who visits home page under url "/"', () => {
  it('should be able to see Home headline and the url should equal with "/"', () => {
    cy.visit("/")

    cy.contains("h1", "Disfrutá del mejor streaming")
    cy.url().should("include", "/")
  })
})

describe('a user who visits contact page under url "/contact"', () => {
  it('should be able to see About headline and the url should equal with "/contact"', () => {
    cy.visit("/vivo")

    cy.contains("p", "EN VIVO")
    cy.url().should("include", "/vivo")
  })
})

describe('a user who visits contact page under url "/contact"', () => {
  it('should be able to see About headline and the url should equal with "/contact"', () => {
    cy.visit("/canales")

    cy.contains("h2", "LISTA DE CANALES")
    cy.url().should("include", "/canales")
    cy.get(".lista-canales")
      .children()
      .then(($children) => {
        $children.each((index, $anchor) => {
          if (index === 0) {
            $anchor.click()
            cy.get(".container a")
              .should("to.have.length.of.at.least", 5)
              .then(($TRACKS) => {
                console.log("$TRACKS", $TRACKS)
                const randomIndex = Math.round($TRACKS.length * Math.random())
                // $TRACKS[randomIndex]
                console.log("$TRACKS[randomIndex]", $TRACKS[randomIndex].search)
                $TRACKS[randomIndex].click()

                return $TRACKS[randomIndex]
              })
              .then((index) => {
                console.log("COSO!" + index.pathname)
              })
            // .then(($COSOS) => {
            //   cy.wait(100)
            //     .get(".track-artist")
            //     .then(($el) => {
            //       console.log("track:", $el.text())
            //     })
            // })
            // cy.wait(2000)
            // cy.get(".track-artist").then(($el) => {
            //   console.log("track:", $el.text())
            // })
          }
        })
      })
  })
})
