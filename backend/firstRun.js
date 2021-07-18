const os = require('os')
const { exec } = require('child_process')
const fs = require('fs')

async function commandRun(command) {
    const cmd = new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(new Error(`Error: ${error.message}`))
                return
            }
            if (stderr) {
                reject(new Error(`stderr: ${stderr}`))
                return
            }
            resolve(stdout)
        })
    })
    return cmd
}

function linuxProcess() {
    return
}

async function winProccess() {
    try {
        const install = await commandRun('yarn install')
        console.log(install)
        await commandRun('set DEBUG=app:*')
        const promises = await Promise.all([
            commandRun('node src/utils/seeders/seedApiKeys.js'),
            commandRun('node src/utils/seeders/seedBooks.js'),
            commandRun('node src/utils/seeders/seedUsers.js')
        ])
        console.log(promises)
    } catch (error) {
        console.log(error)
        return
    }
}

async function main() {
    await fs.promises.copyFile('./.env.example', './.env')
    const myOS = os.platform()
    const mySystem = {
        linux: linuxProcess(),
        wind32: winProccess()
    }
    if(mySystem[myOS]) {
        console.log(`Runing in ${mySystem[myOS]}`)
        await mySystem[myOS]
    }
}

main()
