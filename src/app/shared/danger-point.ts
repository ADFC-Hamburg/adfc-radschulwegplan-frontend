export class DangerPoint {
       constructor(
           public lat: number,
           public lon: number,
           public title: string,
           public description: string,
           public typeId: number,
           public editable: boolean,
           public opened: boolean,
           public glyphIcon: string,
       ) {}
}
