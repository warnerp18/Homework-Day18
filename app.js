_.templateSettings.interpolate = /{([\s\S]+?)}/g;

function Homework-Day18(githubUsername) {
    this.username = githubUsername;

    this.init();
}


Homework-Day18.prototype.addProfileInfo = function() {
    return $.get('https://api.github.com/users/warnerp18').then(function(data) {
    	return data;
    });
};

Homework-Day18.prototype.loadTemplateFile = function(templateName) {
    return $.get('./templates/' + templateName + '.html').then(function(htmlstring) {
        return htmlstring;
    });
};


Homework-Day18.prototype.putProfileDataOnPage = function(profileHtml, profile) {
    var d = new Date(profile.created_at);
    profile.joined = ["Joined on ", d.toDateString()].join("");
    document.querySelector('.left').innerHTML = _.template(profileHtml, profile);
};


Homework-Day18.prototype.init = function() {
        var self = this;
        $.when(
            this.addProfileInfo(),
            this.loadTemplateFile('profile')


        ).then(function(profile, repos, profileHtml, repoHtml) {
            self.putProfileDataOnPage(profileHtml, profile)

        })
    }:

    window.onload = app;

function app() {
    var myRepo = new Homework-Day18('warnerp18');

}
