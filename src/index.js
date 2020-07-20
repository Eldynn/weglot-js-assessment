const fs = require('fs');

const es = require('event-stream');

const TRENDING_WINDOW    = 60; // in minutes
const TRENDING_CONDITION = 40; // in number of hashtag
const HASHTAG_DELAY      = 1;  // in minutes
const NO_TRENDING        = 'Pas de trending topic';

function formatResult(result) {
  return result.size > 0 ? [...result].join('\n') : NO_TRENDING;
}

async function findTrendingTopic(file) {
  const result = new Set(); // Contain each trending topics
  const window = [];        // Contain hashtags in the window
  const hashtagCount = {};  // Contain number of each hashtag in the window
  let time = 0;             // Number of minutes inside the window

  return new Promise(resolve =>
    fs.createReadStream(file, {flags: 'r'})
      .on('end', () => resolve(formatResult(result)))
      .pipe(es.split())
      .pipe(es.map((hashtag, cb) => {
        window.push(hashtag);

        if (hashtagCount[hashtag] !== undefined) {
          ++hashtagCount[hashtag];
        } else {
          hashtagCount[hashtag] = 0;
        }

        if (time > TRENDING_WINDOW) {
          const removed = window.shift();
          --hashtagCount[removed];

          if (hashtagCount[removed] <= 0) {
            delete hashtagCount[removed];
          }

          time -= HASHTAG_DELAY;
        }

        if (hashtagCount[hashtag] >= TRENDING_CONDITION) {
          result.add(hashtag);
        }

        time += HASHTAG_DELAY;
        cb(null, hashtag)
      })));
}

module.exports = findTrendingTopic;
