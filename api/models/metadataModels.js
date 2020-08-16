'use strict';

class AppMetaData {
    constructor(appName, appVersion, appDescription, gitHash) {
        this.name = appName;
        this.version = appVersion;
        this.description = appDescription;
        this.sha = gitHash;
    }

    getJsonObject() {
        var metaData = {};
        metaData[this.name] = [];
        metaData[this.name].push({
            version: this.version,
            description: this.description,
            lastcommitsha: this.sha
        });
        
        return metaData;
    }
}

module.exports = AppMetaData;