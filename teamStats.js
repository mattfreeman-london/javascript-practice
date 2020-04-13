/// set up the team object
const team = {
  /// set up player objects
  _players: [
    {
      firstName: 'Harry',
      lastName: 'Kane',
      age: 26
    },
    {
      firstName: 'Jan',
      lastName: 'Vertongen',
      age: 31
    },
    {
      firstName: 'Dele',
      lastName: 'Alli',
      age: 22
    }
  ],
  /// set up game objects
  _games: [
    {
      opponent: 'Chelsea',
      teamPoints: 3,
      opponentPoints: 1
    },
    {
      opponent: 'Arsenal',
      teamPoints: 4,
      opponentPoints: 2
    },
    {
      opponent: 'Lindfield',
      teamPoints: 10,
      opponentsPoints: 0
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  /// to add new players to the team object
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  /// to add games to the team object
  addGame(opponent, teamPoints, opponentsPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentsPoints: opponentsPoints
    };
    this.games.push(game);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

/// display list of players in the team
console.log(team.players);

/// Output:
/// [ { firstName: 'Harry', lastName: 'Kane', age: 26 },
///  { firstName: 'Jan', lastName: 'Vertongen', age: 31 },
///  { firstName: 'Dele', lastName: 'Alli', age: 22 },
///  { firstName: 'Steph', lastName: 'Curry', age: 28 },
///  { firstName: 'Lisa', lastName: 'Leslie', age: 44 },
///  { firstName: 'Bugs', lastName: 'Bunny', age: 76 } ]

team.addGame('Daffy Duck', 101, 27);
team.addGame('Yosemite Same', 25, 24);
team.addGame('Man Utd', 2, 1);

/// display array of games played
console.log(team.games);

/// Output:
/// [ { opponent: 'Chelsea', teamPoints: 3, opponentPoints: 1 },
///  { opponent: 'Arsenal', teamPoints: 4, opponentPoints: 2 },
///  { opponent: 'Lindfield', teamPoints: 10, opponentsPoints: 0 },
///  { opponent: 'Daffy Duck', teamPoints: 101, opponentsPoints: 27 },
///  { opponent: 'Yosemite Same', teamPoints: 25, opponentsPoints: 24 },
///  { opponent: 'Man Utd', teamPoints: 2, opponentsPoints: 1 } ]
