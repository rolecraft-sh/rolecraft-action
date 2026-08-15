import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { splitCommand } from './split-command.js'

describe('splitCommand', () => {
	it('splits a simple multi-word command into argv', () => {
		assert.deepEqual(splitCommand('ci --yes'), ['ci', '--yes'])
	})

	it('splits commands with quoted arguments containing spaces', () => {
		assert.deepEqual(splitCommand('install "my skill" --project'), [
			'install',
			'my skill',
			'--project',
		])
	})

	it('splits commands with single-quoted arguments', () => {
		assert.deepEqual(splitCommand("use 'owner/repo'"), ['use', 'owner/repo'])
	})

	it('splits a single-token command', () => {
		assert.deepEqual(splitCommand('--version'), ['--version'])
	})

	it('handles a command with only whitespace', () => {
		assert.deepEqual(splitCommand('   '), [])
	})

	it('splits a command mixing quoted and unquoted tokens', () => {
		assert.deepEqual(splitCommand('setup --skill "react rules" -y'), [
			'setup',
			'--skill',
			'react rules',
			'-y',
		])
	})
})
