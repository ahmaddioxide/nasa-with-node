
// const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
 const response= await fetch('http://localhost:8000/planets');
  return await response.json();

  // Load planets and return as JSON.
}

async function httpGetLaunches() {

  const response= await fetch('http://localhost:8000/launches');
  const fetchedLaunches= await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
  
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
 try{
  return await fetch('http://localhost:8000/launches', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(launch),
  });
  }
  catch(error){
    return {
      ok: false,
    };
  }

 // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // Delete launch with given ID.
  try {
    return await fetch(`http://localhost:8000/launches/${id}`, {
    method: 'delete',
  });
  
  } catch (err) {
    console.log(err);
    return {
      ok: false,
    };
    
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};