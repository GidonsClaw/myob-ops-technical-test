'use strict';

exports.getCurrentGitBranchHash = function() {
    try {
        var fs = require('fs');
        const rev = fs.readFileSync('./.git/HEAD').toString();
        var gitCommitHash = ''
        if (rev.indexOf(':') === -1) {
            gitCommitHash = rev;
        } else {
            gitCommitHash = fs.readFileSync('./.git/' + rev.substring(5).replace('\n', ''))
                .toString()
                .replace('\n', '')
                .slice(0, 7);
        }
        return gitCommitHash;
    }
    catch (e) {
        return 'No branch information'
    }
}