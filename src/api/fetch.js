    function handleJSONResponse(response) {
        return response.json().then(json => {
        if (response.ok) {
            return json;
        }
        return Promise.reject(
            Object.assign({}, json, {
            status: response.status,
            statusText: response.statusText
            })
        );
        });
    }

    function handleTextResponse(response) {
        return response.text().then(text => {
        if (response.ok) {
            return text;
        }
        return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            err: text
        });
        });
    }

   async function handleResponse(response) {
    const contentType = response.headers.get("content-type");

    if (contentType.includes("application/json")) {
      return handleJSONResponse(response);
    }
    else if (contentType.includes("text/html")) {
      return handleTextResponse(response);
    }
    throw new Error(`Sorry, content-type ${contentType} not supported`);
  }
export default async function _fetch(url,config)
{
    try {
        // eslint-disable-next-line no-mixed-operators
        const body = config && config.body || null;
        const configObj = {
            ...config,
            body: body ? JSON.stringify(body) : null
        }
        // more manupulations
        return fetch(url,configObj)
        .then(handleResponse)
        .then(data => data)
        .catch(error => error);

    }
    catch(error) {
        //failed request
        console.log(error);
    }
}

export  async function _fetchToken(url,config)
{
    try {
        // eslint-disable-next-line no-mixed-operators
        const body = config && config.body || null;
        const configObj = {
            ...config,
           headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: body ? JSON.stringify(body) : null
        }
        // more manupulations
        return fetch(url,configObj)
        .then(handleResponse)
        .then(data => data)
        .catch(error => error);

    }
    catch(error) {
        //failed request
        console.log(error);
    }
}