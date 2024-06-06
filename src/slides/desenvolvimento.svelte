<script lang="ts">
	import { Slide, Notes, Step, Media } from '@components'
	import resolveConfig from 'tailwindcss/resolveConfig'
	import tailwindConfig from '../../tailwind.config.js'

	const fullConfig = resolveConfig(tailwindConfig)
	const { theme } = fullConfig
</script>

<Slide>
	<h2 class="my-title">Problema</h2>
	<ul class="my-list">
		{#each ['Preocupações com a privacidade', 'Uso excessivo das redes sociais', 'É fácil guardar memórias, mas não recordá-las...'] as problem}
			<Step><li>{problem}</li></Step>
		{/each}
	</ul>
	<Notes
		>Discute as preocupações com a privacidade e o impacto das redes sociais na
		saúde mental.</Notes
	>
</Slide>

<Slide animate>
	<h2 class="my-title">Solução</h2>
	<h3 class="text-start mb-6">
		Uma rede social <strong>REALMENTE</strong> social:
	</h3>
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

<Slide animate>
	<h2 class="my-title">Solução</h2>
	<h2 class="text-3xl -mt-2 italic">Onde...</h2>
	<ul class="my-list">
		{#each ['Guardar memórias;', 'Partilhá-las com quem realmente importa;', 'Recordá-las...'] as solution}
			<Step><li>{solution}</li></Step>
		{/each}
	</ul>
	<Step class="animate-scale">
		<strong
			class="text-6xl text-red-500 outline outline-2 px-4 py-2 shadow-xl shadow-foreground outline-foreground"
			>É trivial</strong
		></Step
	>
</Slide>

<Slide animate>
	<h2 class="my-title">Solução</h2>
	<Step>
		<h2 class="text-6xl font-bold -mt-2">The Actual World</h2>
	</Step>
</Slide>

<Slide>
	<h2 class="text-6xl font-bold animate-scale">Aplicação Móvel</h2>
</Slide>

<Slide animate
	><h2 class="my-title">Autenticação e autorização</h2>
	<ul class="my-list">
		<li>Registo com verificação de email</li>
		<li>Recuperação e alteração de palavra-passe</li>
		<li>Alteração de endereço de email com verificação de ambos os emails</li>
		<li>
			Pagamentos para compra de <span data-id="creditos" class="animate-pulse"
				>créditos</span
			> e utilização da aplicação (utilizando Stripe)
		</li>
	</ul>
</Slide>
<Slide>
	<h2 class="my-title">Como assim, créditos!</h2>
	<ul class="my-list">
		<Step>
			<li>Não vendemos os dados dos nossos utilizadores</li>
		</Step>
		<Step>
			<li>Os utilizadores pagam para usar a aplicação</li>
		</Step>
		<Step>
			<li>
				Pagam por aquilo que usam, utilizando os tais <strong>créditos</strong>!
			</li>
		</Step>
	</ul></Slide
>
<Slide
	><h2 class="my-title">Amigos</h2>
	<ul class="my-list">
		<li>Códigos de amigo (QR codes)</li>
		<li>Adição privada de amigos</li>
	</ul>
</Slide>
<Slide
	><h2 class="my-title">Página de Utilizador</h2>
	<ul class="my-list">
		<li>Feed de publicações</li>
		<li>Grelha com os anexos do utilizador (imagens)</li>
	</ul>
</Slide>
<Slide
	><h2 class="my-title">Chat Individual e em Grupo</h2>
	<ul class="my-list">
		<li>Deslizar infinito</li>
		<li>Notificações em tempo real</li>
		<li>Suporte para texto e imagem</li>
		<li>Pré-visualização de links</li>
		<li>Divisões entre mensagens de diferentes dias</li>
		<li>Deslizar para ver a hora de envio da mensagem</li>
		<li>Administradores e membros de grupo - gestão de membros</li>
		<li>Seleção de membros para grupos</li>
	</ul>
</Slide>
<Slide
	><h2 class="my-title">Publicações</h2>
	<ul class="my-list">
		<li>Ausência de likes e visualizações</li>
		<li>Suporte para texto e imagem</li>
		<li>Pré-visualização de links</li>
		<li>Adição de localização com preenchimento automático</li>
		<li>
			Comentários com níveis infinitos de respostas, privados e por amigos
		</li>
		<li>Legendagem automática de anexos</li>
	</ul>
</Slide>
<Slide
	><h2 class="my-title">Recordar</h2>
	<ul class="my-list">
		<li>Notas pessoais sobre cada dia do passado (estilo diário)</li>
		<li>Resumo dos acontecimentos dos dias anteriores com IA</li>
		<li>Mapa para visualização de publicações com localizações</li>
		<li>Agrupamento com número de localizações e de publicações</li>
		<li>
			Seleção de uma área e pesquisa de publicações a partir dessa mesma área
		</li>
	</ul>
</Slide>

<Slide background={theme.colors.gray['100']}>
	<Media
		type="img"
		src="/outros/tabelas_website.svg"
		alt="Tabelas do website"
	/>
</Slide>

<Slide>
	<h2 class="my-title">Ferramentas Utilizadas na Aplicação</h2>

	<ul class="my-list">
		{#each ['Node.js & TypeScript', 'React Native & Expo', 'PostgreSQL & Supabase', 'PHP & MySQL'] as tool}
			<li>{tool}</li>
		{/each}
	</ul>
	<Notes></Notes>
</Slide>
