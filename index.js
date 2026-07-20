import { execSync } from 'node:child_process'

const command = process.env.INPUT_COMMAND
const version = process.env.INPUT_VERSION || 'latest'

try {
  console.log(`⚙️ rolecraft-action: installing rolecraft@${version}...`)
  execSync(`npm install -g rolecraft@${version}`, { stdio: 'inherit' })

  console.log(`⚙️ rolecraft-action: running "rolecraft ${command}"...`)
  execSync(`npx rolecraft ${command}`, { stdio: 'inherit' })

  console.log('✅ rolecraft-action completed successfully.')
} catch (err) {
  console.error(`❌ rolecraft-action failed: ${err.message}`)
  process.exit(1)
}
