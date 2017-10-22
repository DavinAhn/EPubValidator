import packager from 'electron-packager';
import config from '../package.json';

const release = (opts) => {
  packager(Object.assign({
    dir: 'build',
    out: 'release',
    buildVersion: '1',
    appVersion: config.version,
    appCopyright: `Copyright 2017 ${config.author.name}.`,
    asar: false,
    prune: false,
    overwrite: true,
  }, opts), (err, appPaths) => {
    /* eslint-disable no-console */
    if (err) {
      console.error(`packaging error: ${err}`);
    } else {
      console.log(`packaging done: ${appPaths}`);
    }
    /* eslint-enable no-console */
  });
};

export default release;
