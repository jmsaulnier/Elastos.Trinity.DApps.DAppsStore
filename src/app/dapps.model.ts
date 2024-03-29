export class Dapp {
  constructor(
    public _id: string,
    public versionCode: number,
    public versionName: string,
    public authorEmail: string,
    public authorName: string,
    public authorWebsite: string,
    public appName: string,
    public createdAt: string,
    public appShortDescription: string,
    public appDescription: string,
    public packageName: string,
    public category: string,
    public downloadsCount: number,
    public imageUrl: string,
  ) {}
}
