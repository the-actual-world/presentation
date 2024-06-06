<script lang="ts">
	import { Presentation, Slide } from '@components'
	import { signal } from '@motion'
	import Introducao from './slides/introducao.svelte'
	import Desenvolvimento from './slides/desenvolvimento.svelte'

	import './global.css'
	import Screenshots from './slides/screenshots.svelte'
</script>

<Presentation>
	<Introducao />
	<Desenvolvimento />
	<Screenshots />
</Presentation>
