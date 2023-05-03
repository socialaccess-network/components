export function ConstructComponentResolver(name: string) {
	if (name.startsWith('Construct')) return { name, from: '@sa-net/components' }
}
