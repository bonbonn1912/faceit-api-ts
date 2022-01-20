export function UsernameParameters(request: string | undefined): boolean {
    return request === undefined;
}

export function LimitParameter(request: any) : boolean{
    return isNaN(request);
}
