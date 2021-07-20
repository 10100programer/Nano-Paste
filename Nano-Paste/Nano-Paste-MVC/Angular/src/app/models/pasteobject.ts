export class PasteObject{
    constructor(likeCount:number,nanoTrack:string,pasteData:string,pasteID:string,pasteTime:any,pasteUser:string,postTitle:string)
    {
        this.LikeCount = likeCount;
        this.NanoTrack = nanoTrack;
        this.PasteData = pasteData;
        this.PasteID = pasteID;
        this.PasteTime = pasteTime;
        this.PasteUser = pasteUser;
        this.PostTitle = postTitle;
    }
        LikeCount:number = 0;
        NanoTrack:string = "";
        PasteData:string = "";
        PasteID:string = "";
        PasteTime:any;
        PasteUser:string = "";
        PostTitle:string = "";
}