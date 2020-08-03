
// TYPESCRIPT: the 'window._REGISTRY' assignment below needs to be typed
// TYPESCRIPT: the fetch result needs to be typed so we can access its properties
declare global {
    interface Window { _REGISTRY:any; };
    interface Link { uri:string; href:string; rel:string; method:string; };
}
export default () => {
    console.debug ('calling REST enpoint to get stuffs');
    window._REGISTRY = {};
    fetch('./rest')
        .then(resp => resp.json())
        .then(json => {
            json.links.forEach((link:Link) => {
                // ESLINT: won't allow 'var'; 'let' is not applicable since it doesn't change; 'const' is forced
                const c1:string = link.rel.substr(0,1).toUpperCase();
                const getter:string = 'get'+c1+link.rel.substr(1);
                
                window._REGISTRY[getter] = () => { return {
                    uri:link.uri,
                    rel:link.rel,
                    // TYPESCRIPT: 'data' should probably be an 'object' type, but then the 'const p' complains about not being typed
                    //  but if i type it, then ESLINT complains about having annotations in the variable declaration
                    //  so i avoid it with 'any'
                    [link.method.toLowerCase()]: (data:any) => {
                        let href = link.href;
                        for (const p in data) {
                            href = href.replace(`{${p}}`, data[p]);
                        }
                        
                        return fetch(href, { method:link.method, body:(link.method === 'POST'? JSON.stringify(data):null ) })
                    }
                }};
            });
        });
}
