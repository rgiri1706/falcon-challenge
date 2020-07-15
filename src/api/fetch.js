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
    //  else if (contentType.includes("text/plain")) {
    //   return handleTextResponse(response);
    // } else if (contentType === null) {
    //   return Promise.resolve(null);
    // }
    // Other response types as necessary. I haven't found a need for them yet though.
    throw new Error(`Sorry, content-type ${contentType} not supported`);
  }

  // important params config = { headers: {}, body: {}, method: "GET"}
  // this appends the user auth details
  // this stores user auth details on signin
export default async function _fetch(url,config)
{
    try {
        // Read token from store
        // token = await AsyncStorage.getItem('access-token');
        // uid = await AsyncStorage.getItem('uid');
        // client = await AsyncStorage.getItem('client');
        // make body
        // eslint-disable-next-line no-mixed-operators
        const body = config && config.body || null;
        const configObj = {
            ...config,
           /* headers: {
                "Content-Type": "application/json",
                "access-token": token,
                "uid": uid,
                client: client,
                ...headers
            },*/
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