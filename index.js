import { execSync, execFileSync } from 'node:child_process'
import { splitCommand } from './split-command.js'

const command = process.env.INPUT_COMMAND
const version = process.env.INPUT_VERSION || 'latest'
const script = process.env.INPUT_SCRIPT

if (!command && !script) {
	console.error(
		'❌ rolecraft-action: either "command" or "script" input is required.',
	)
	process.exit(1)
}

try {
	console.log(`⚙️ rolecraft-action: installing rolecraft@${version}...`)
	execFileSync('npm', ['install', '-g', `rolecraft@${version}`], {
		stdio: 'inherit',
	})

	if (script) {
		console.log('⚙️ rolecraft-action: running script...')
		// script input intentionally uses shell features (IFS, loops, etc.)
		execSync(script, { stdio: 'inherit', shell: '/bin/bash' })
	} else {
		console.log(`⚙️ rolecraft-action: running "rolecraft ${command}"...`)
		// Split command string into argv, respecting quoted strings
		const argv = splitCommand(command)
		execFileSync('npx', ['rolecraft', ...argv], { stdio: 'inherit' })
	}

	console.log('✅ rolecraft-action completed successfully.')
} catch (err) {
	console.error(`❌ rolecraft-action failed: ${err.message}`)
	process.exit(1)
}
