import fs from 'fs';
import path from 'path';
import { app } from 'electron';
import { spawn } from 'child_process';
import Validator from './Validator';

class EPubValidator extends Validator {
  get name() { return 'epub'; }

  run(callback) {
    const tempPath = app.getPath('temp');
    const jarPath = path.join(__dirname, 'libs', 'epubcheck', 'epubcheck.jar');
    const targetPath = this.filePath;
    const outputPath = path.join(tempPath, '.epubcheck_result.json');
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

export default EPubValidator;
