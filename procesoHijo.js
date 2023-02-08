const { exec } = require('child_process');

let processes = [
    'dir',
    'node consola.js'
]

exec(processes[1], (err, stdout, sterr) => {
    if (err) {
        console.error(err)
        return false
    }
    console.log(stdout);
})

