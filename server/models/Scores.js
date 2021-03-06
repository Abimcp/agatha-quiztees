const db = require("../dbConfig");

class Score {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.category = data.category;
    // this.difficulty = data.difficulty
    this.score = data.score;
  }

  // Getting Top 10 leaderboard
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const scoreData = await db.query(`SELECT * FROM scores
                                                  ORDER BY score DESC LIMIT 10;`);
        // const scores = scoreData.rows.map(s => new Score({ ...s, id: s._id }))
        const scores = scoreData.rows.map((s) => new Score(s));
        resolve(scores);
      } catch (err) {
        reject("No scores for you!" + err);
      }
    });
  }

  // Finding score info by Username
  static findByUsername(username) {
    return new Promise(async (resolve, reject) => {
      try {
        const scoreData = await db.query(
          `SELECT * FROM scores WHERE username = $1;`,
          [username]
        );
        const scoresByUserName = scoreData.rows.map((s) => new Score(s));
        //let scoresByUserName = new Score(scoreData.rows[0]);
        resolve(scoresByUserName);
      } catch (err) {
        reject("Sorry! Couldn't get that Username!" + err);
      }
    });
  }

  // creating a new score entry
  static create(username, category, score) {
    return new Promise(async (resolve, reject) => {
      try {
        //const { username, category, score } = scoreEntry;
        const scoreData = await db.query(
          `INSERT INTO scores (username, category, score) VALUES ($1, $2, $3) RETURNING *;`,
          [username, category, score]
        );
        let newScore = new Score(scoreData.rows[0]);
        resolve(newScore);
        console.log("Data Saved to Database");
      } catch (err) {
        reject("Error adding new scores" + err);
      }
    });
  }
}

module.exports = Score;
