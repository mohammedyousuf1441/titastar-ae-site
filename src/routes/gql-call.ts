export function gqlCall<T> (
    url: string,
    body: string,
    controller?: AbortController
): Promise<{ data?: T; errors?: unknown[] }>{
    return fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({query: body}),
        signal: controller?.signal,
    })
    .then( (r)=> {
        if( r.status === 200 ){
            const value = r.json();
            return value;
        }

        return r.body
        ?.getReader()
        .read()
        .then((v => {
            throw new Error(`An error occurred: , /n ${r.statusText} /n${String.fromCodePoint(...(v.value ?? []))}`);
        }))
    } )
    .catch((e)=> console.log(e));
}