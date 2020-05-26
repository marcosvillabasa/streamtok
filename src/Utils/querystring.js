// query parser. takes strings 'true' and 'false' as booleans
export function queryParamParse(locationSearch, whitelist) {
  const search = new URLSearchParams(locationSearch)
  const queryData = {}
  whitelist.forEach((param) => {
    let searchParam = search.get(param)
    if (searchParam) {
      if (searchParam === "true") {
        searchParam = true
      }
      if (searchParam === "false") {
        searchParam = false
      }
      queryData[param] = searchParam
    }
  })

  return queryData
}

export function stringifyQueryString(object, whitelist) {
  if (whitelist) {
    const params = []
    whitelist.forEach((param) => {
      if (object[param] != null && object[param] !== "") {
        // not null, not undefined
        params.push([param, object[param]])
      }
    })
    return "?" + params.map(([key, value]) => `${key}=${value}`).join("&")
  } else {
    return (
      "?" +
      Object.entries(object)
        .filter(
          ([_, value]) =>
            (typeof value === "string" && value.length > 0) ||
            typeof value === "number" ||
            typeof value === "boolean"
        )
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
    )
  }
}
