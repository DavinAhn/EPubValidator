import config from './package.json';
import release from './internal/release';

release({
  win32metadata: {
    CompanyName: config.author.name,
    FileDescription: config.description,
    OriginalFilename: config.productName,
    ProductName: config.productName,
    InternalName: config.name,
  },
  platform: 'win32',
  arch: 'ia32',
});
