export default function checkPostBody(body: any): boolean {
    if(body.meta.cmd != undefined && body.meta.statusMessage != undefined && body.meta.env != undefined && body.players != undefined){ 
    return true;
    }else{
        return false;
    }
}

