module.exports = {
  getRandFirst: (context, events, done) => {
    context.vars.id = Math.floor(Math.random() * 5e6) + 1;
    return done();
  },
  getRandSecond: (context, events, done) => {
    context.vars.id = Math.floor(Math.random() * 5e6) + 5e6;
    return done();
  },
  getRandTenPercent: (context, events, done) => {
    context.vars.id = Math.floor(Math.random() * 1e6) + 1;
    return done();
  },
};