import chalk from 'chalk';

export default (expectedEnv) => {
  if (process.env.NODE_ENV !== expectedEnv) {
    console.log(chalk.whiteBright.bgRed.bold(`"process.env.NODE_ENV" must be "${expectedEnv}" to use this webpack config`)); // eslint-disable-line no-console
    process.exit(2);
  }
};
