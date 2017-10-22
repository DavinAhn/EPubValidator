import del from 'del';

del(['build', 'release', 'index.*', 'public/**', '!public', '!public/index.html']).then((paths) => {
  console.log('Deleted files and folders:\n', paths.join('\n')); // eslint-disable-line no-console
});
