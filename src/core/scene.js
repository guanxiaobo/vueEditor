export default class eqxScene {
    constructor(sceneJson) {
        this.sceneJson = sceneJson;
        this.eqxPages = []
    }

    addPage(eqxPage) {
        this.eqxPages.push(eqxPage);
    }

    deletePage(eqxPage) {
        let index = this.eqxPages.indexOf(eqxPage);
        if (index >= 0) {
            this.eqxPages.splice(index, 1);
        }
    }
}