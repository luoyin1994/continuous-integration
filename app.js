const shell = require('shelljs');

let name = 'world';
shell.exec(`echo hello ${name}`);
require('shelljs/global');
// mkdir('-p', 'out/Release');
// if (exec('svn branch xxx').code !== 0) {
//     echo('Error: SVN branch failed');
//     exit(1);
// }

mkdir('./test')