//const API_URL = 'http://localhost:8000'
const API_URL = 'api/v1'

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  try {
    const response = await fetch(`${API_URL}/planets`)
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const res = await response.json()
    //console.log(res);
    return res
    //return await response.json()
  } catch (error) {
    console.log(error)
  }
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  try {
    const response = await fetch(`${API_URL}/launches`)
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const fetchedLaunches = await response.json()
    return fetchedLaunches.sort((a,b)=>{
      return b.flightNumber - a.flightNumber
    })
  } catch (error) {
    console.log(error)
  }
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(launch)
    })
    
  } catch (error) {
    console.log(error)
    return {ok: false}
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "DELETE"
    })
    
  } catch (error) {
    console.log(error)
    return {ok: false}
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};