var index = {
    "soccer:match:id": 0,
    "soccer:matches": new Set()
};

var MatchManager = {
    add: function() {
        var id = index["soccer:match:id"]++;
        var match = {
            id
        };

        index["soccer:matches"].add(match);
        index[`soccer:matches:${id}:players:events`] = new Set();
        index[`soccer:matches:${id}:espontaneos:events`] = new Set();

        return match;
    },

    getEventsByActor: function(matchId, actorType) {
        switch (actorType.toLowerCase()) {
            case "player":
                actorType = "players";
                break;
            case "espontaneo":
                actorType = "espontaneos";
                break;
        }

        var key = `soccer:matches:${matchId}:${actorType}:events`;

        return index[key];
    }
};

var matchManager = Object.create(MatchManager);
var match = matchManager.add();
match.name = "Barça vs Madrid";
