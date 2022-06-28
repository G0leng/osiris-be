'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

 module.exports = {
    /**
     * Simple examples.
     */
    '*/5 * * * * *': () => {
      console.log("🚀 ~ file: cron.js ~ executing action ~Every 5sec");
    },  
    '*/10 * * * * *': () => {
      console.log("🚀 ~ file: cron.js ~ executing action ~Every 10sec");
    },
    '* */5 * * * *': () => {
      console.log("🚀 ~ file: cron.js ~ executing action ~Every 5min");
    },
    '* * */5 * * *': () => {
      console.log("🚀 ~ file: cron.js ~ executing action ~Every 5hour");
    },   
  };
