'use strict';
const metaModel = require('../models/metadataModels');
const gitFS = require('../lib/filesystem_git');

exports.show_app_metadata = function(request, response) {
    // Send a json object providing details as captured in package.json
    
    // Retrieve short sha using value stored by Git on file system
    var gitCommitHash = gitFS.getCurrentGitBranchHash();

    const metaData = new metaModel(process.env.npm_package_name,
        process.env.npm_package_version,
        process.env.npm_package_description,
        gitCommitHash);

    // Return JSON object
    response.json(metaData.getJsonObject());
}