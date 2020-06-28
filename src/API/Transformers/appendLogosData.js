import muniCosquin from "../../assets/municipalidad de cosquin.svg"
import logoCosquin from "../../assets/logo cosquin.svg"
import logoAvicultura from "../../assets/Logo_avicultura2020.png"
import logoMuniPunilla from "../../assets/Logo_SMP_Naranja_PIE.png"

// only two logos at most!

export default function appendLogosData(res) {
  switch (res.title) {
    case "Avicultura":
      res.logo_data = [
        { alt: "logo avicultura", src: logoAvicultura },
        {
          alt: "logo municipalidad santa maria de punilla",
          src: logoMuniPunilla,
        },
      ]
      break
    case "Cosquín":
      res.logo_data = [
        { alt: "logo municipalidad cosquin", src: muniCosquin },
        { alt: "logo festival cosquin", src: logoCosquin },
      ]
      break
    case "Abel Pintos":
      // do nothing
      break
    case "Soledad":
      // do nothing
      break
    case "Eventos":
      // do nothing
      break
    default:
    // do nothing
  }

  return res
}
