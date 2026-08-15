export function splitCommand(command) {
	const tokens = []
	let current = ''
	let quote = null
	for (let i = 0; i < command.length; i++) {
		const ch = command[i]
		if (quote) {
			if (ch === quote) {
				tokens.push(current)
				current = ''
				quote = null
			} else {
				current += ch
			}
		} else if (ch === '"' || ch === "'") {
			if (current) {
				tokens.push(current)
				current = ''
			}
			quote = ch
		} else if (/\s/.test(ch)) {
			if (current) {
				tokens.push(current)
				current = ''
			}
		} else {
			current += ch
		}
	}
	if (current) tokens.push(current)
	return tokens
}
