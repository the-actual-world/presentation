<script lang="ts">
	import { Slide, Notes, Step } from '@components'

	const features = {
		'Aplicação Mobile': {
			'Autenticação e autorização': [
				'Registo com verificação de email',
				'Recuperação e alteração de palavra-passe',
				'Alteração de endereço de email com verificação de ambos os emails',
			],
			Pagamentos: [
				'Pagamentos para compra de créditos e utilização da aplicação (utilizando Stripe)',
			],
			Amigos: ['Códigos de amigo (QR codes)', 'Adição privada de amigos'],
			'Página de Utilizador': [
				'Feed de publicações',
				'Grelha com os anexos do utilizador (imagens)',
			],
			'Chat Individual e em Grupo': [
				'Deslizar infinito',
				'Notificações em tempo real',
				'Suporte para texto e imagem',
				'Pré-visualização de links',
				'Divisões entre mensagens de diferentes dias',
				'Deslizar para ver a hora de envio da mensagem',
				'Administradores e membros de grupo - gestão de membros',
				'Seleção de membros para grupos',
			],
			Publicações: [
				'Ausência de likes e visualizações',
				'Suporte para texto e imagem',
				'Pré-visualização de links',
				'Adição de localização com preenchimento automático',
				'Comentários com níveis infinitos de respostas, privados e por amigos',
				'Legendagem automática de anexos',
			],
			Rebobinar: [
				'Notas pessoais sobre cada dia do passado (estilo diário)',
				'Resumo dos acontecimentos dos dias anteriores com IA',
				'Mapa para visualização de publicações com localizações',
				'Agrupamento com número de localizações e de publicações',
				'Seleção de uma área e pesquisa de publicações a partir dessa mesma área',
			],
		},
	}
</script>

<Slide>
	<h2 class="my-title">Problema</h2>
	<ul class="my-list">
		{#each ['Preocupações com a privacidade', 'Uso excessivo das redes sociais'] as problem}
			<Step><li>{problem}</li></Step>
		{/each}
	</ul>
	<Notes
		>Discute as preocupações com a privacidade e o impacto das redes sociais na
		saúde mental.</Notes
	>
</Slide>

<Slide>
	<h2 class="my-title">Solução</h2>
	<h3 class="text-start mb-6">Uma rede <strong>REALMENTE</strong> social:</h3>
	<ul class="my-list">
		{#each ['De código aberto', 'Privada', 'Com gestão de tempo', 'Que fortalece relações existentes'] as solution}
			<Step><li>{solution}</li></Step>
		{/each}
	</ul>
	<Notes
		>Apresenta a tua solução como uma rede social que prioriza a privacidade e
		conexões significativas.</Notes
	>
</Slide>

<Slide>
	<h2 class="my-title">Competidores e Inspirações</h2>
	<ul class="my-list">
		{#each ['BeReal', 'PixelFed', 'Mastodon'] as competitor}
			<Step><li>{competitor}</li></Step>
		{/each}
	</ul>
	<Notes
		>Faz uma comparação com outras redes sociais e explica como The Actual World
		se destaca.</Notes
	>
</Slide>

{#each Object.entries(features) as [feature, subfeatures]}
	<Slide>
		<h2 class="my-title">{feature}</h2>
	</Slide>
	{#each Object.entries(subfeatures) as [subfeature, details]}
		<Slide>
			<h2 class="my-title">{subfeature}</h2>
			<ul class="my-list">
				{#each details as detail}
					<Step><li>{detail}</li></Step>
				{/each}
			</ul>
		</Slide>
	{/each}
{/each}

<Slide>
	<h2 class="my-title">Ferramentas Utilizadas na Aplicação</h2>

	<ul class="my-list">
		{#each ['Node.js & TypeScript', 'React Native & Expo', 'PostgreSQL & Supabase'] as tool}
			<Step><li>{tool}</li></Step>
		{/each}
	</ul>
	<Notes></Notes>
</Slide>
