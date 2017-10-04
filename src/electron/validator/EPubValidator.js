const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;
const { Validator } = require('./Validator');

class EPubValidator extends Validator {
  get name() { return 'epub'; }

  run(callback) {
    const jarPath = path.join(process.cwd(), 'libs/epubcheck/epubcheck.jar');
    const targetPath = this.filePath;
    const outputPath = '.epubcheck_result.json';
    const child = spawn('java', [
      '-Duser.country=KO',
      '-Duser.language=kr',
      '-jar',
      jarPath,
      targetPath,
      '-j',
      outputPath,
    ]);

    const timer = setTimeout(() => {
      child.disconnect();
    }, 1000 * 60);
    const onFinish = (result, error) => {
      clearTimeout(timer);
      callback(result, error);
    };

    child.on('disconnect', () => {
      onFinish({}, 'epubcheck was timeout(60s).');
    });
    child.on('close', () => {
      const result = fs.readFileSync(outputPath);
      fs.unlinkSync(outputPath);
      onFinish(JSON.parse(result), null);
    });
  }
}

exports.EPubValidator = EPubValidator;
