<script lang="ts">
	import { Slide, Notes, Step, Media } from '@components'

	let screenshots = [
		{
			group_name: 'onboarding',
			title: 'Integração e onboarding',
			images: [
				{ name: 'onboarding_1.jpg', relevance: 3 },
				{ name: 'onboarding_2.jpg', relevance: 1 },
				{ name: 'onboarding_3.jpg', relevance: 1 },
				// { name: 'onboarding_4.jpg', relevance: 1 },
				// { name: 'onboarding_5.jpg', relevance: 1 },
				// { name: 'onboarding_6.jpg', relevance: 1 },
				{ name: 'onboarding_7.jpg', relevance: 1 },
				{ name: 'onboarding_8.jpg', relevance: 2 },
			],
		},
		{
			group_name: 'authentication',
			title: 'Autenticação e autorização',
			images: [
				{ name: 'autenticacao_1.jpg', relevance: 3, legenda: 'Criar conta' },
				{
					name: 'autenticacao_2.jpg',
					relevance: 2,
					legenda: 'Criar conta - validações',
				},
				{
					name: 'autenticacao_3.jpg',
					relevance: 1,
					legenda: 'Entrar em conta',
				},
			],
		},
		{
			group_name: 'publication',
			title: 'Publicações',
			images: [
				{
					name: 'criar_publicacao.jpg',
					relevance: 2,
					legenda: 'Criar publicação',
				},
				{
					name: 'criar_publicacao_inserir_anexo.jpg',
					relevance: 3,
					legenda: 'Inserir anexo na publicação',
				},
				{
					name: 'editar_publicacao.jpg',
					relevance: 1,
					legenda: 'Editar publicação',
				},
				{
					name: 'publicacao_mudar_localizacao.jpg',
					relevance: 2,
					legenda: 'Mudar localização da publicação',
				},
				{
					name: 'visualizacao_imagem.jpg',
					relevance: 3,
					legenda: 'Visualização de imagem',
				},
			],
		},
		{
			group_name: 'feed',
			title: 'Feed de publicações',
			images: [
				{ name: 'feed_global.jpg', relevance: 2, legenda: 'Feed global' },
				{
					name: 'feed_global_menu.jpg',
					relevance: 3,
					legenda: 'Menu do feed global',
				},
				{
					name: 'feed_global_escuro.jpg',
					relevance: 1,
					legenda: 'Tema escuro do feed global',
				},
				{
					name: 'feed_utilizador_publicacoes.jpg',
					relevance: 3,
					legenda: 'Publicações do utilizador no feed',
				},
				{
					name: 'feed_utilizador_midia.jpg',
					relevance: 2,
					legenda: 'Mídia do utilizador no feed',
				},
			],
		},
		{
			group_name: 'conversation_1',
			title: 'Conversas',
			images: [
				{
					name: 'lista_conversas.jpg',
					relevance: 1,
					legenda: 'Lista de conversas',
				},
				{
					name: 'lista_conversas_menu.jpg',
					relevance: 1,
					legenda: 'Menu de configurações de uma conversa',
				},
				{
					name: 'criar_grupo_conversa.jpg',
					relevance: 3,
					legenda: 'Criar grupo',
				},
				{
					name: 'editar_grupo_conversa.jpg',
					relevance: 2,
					legenda: 'Editar grupo',
				},
				{ name: 'ver_grupo_conversa.jpg', relevance: 1, legenda: 'Ver grupo' },
			],
		},
		{
			group_name: 'conversation_2',
			title: 'Mensagens',
			images: [
				{ name: 'ecra_conversa.jpg', relevance: 2, legenda: 'Conversa' },
				{
					name: 'ecra_conversa_anexar.jpg',
					relevance: 3,
					legenda: 'Anexar ficheiros',
				},
				{
					name: 'ecra_conversa_escura.jpg',
					relevance: 1,
					legenda: 'Tema escuro',
				},
			],
		},
		{
			group_name: 'maps',
			title: 'Mapas',
			images: [
				{ name: 'rebobina_mapa_1.jpg', relevance: 3, legenda: 'Mapa' },
				{
					name: 'rebobina_mapa_2.jpg',
					relevance: 2,
					legenda: 'Mapa com marcadores e agrupamentos',
				},
				{ name: 'rebobina_mapa_3.jpg', relevance: 1 },
				{
					name: 'rebobina_mapa_area.jpg',
					relevance: 2,
					legenda: 'Seleção de área',
				},
				{
					name: 'rebobina_mapa_area_resultados.jpg',
					relevance: 3,
					legenda: 'Resultados de pesquisa por área',
				},
			],
		},
		{
			group_name: 'summaries',
			title: 'Resumos',
			images: [
				{
					name: 'rebobina_resumos_editar.jpg',
					relevance: 2,
					legenda: 'Editar resumo',
				},
				{
					name: 'rebobina_resumos_escuro.jpg',
					relevance: 1,
					legenda: 'Ver resumos',
				},
			],
		},
		{
			group_name: 'settings',
			title: 'Definições',
			images: [
				{ name: 'definicoes_1.jpg', relevance: 1, legenda: 'Definições' },
				{
					name: 'definicoes_escuro.jpg',
					relevance: 3,
					legenda: 'Definições tema escuro',
				},
				{ name: 'definicoes_2.jpg', relevance: 2 },
				{
					name: 'definicoes_extra.jpg',
					relevance: 2,
					legenda: 'Definições extra',
				},
				{
					name: 'definicoes_estatisticas.jpg',
					relevance: 1,
					legenda: 'Estatísticas de uso',
				},
			],
		},
		{
			group_name: 'credits_1',
			title: 'Créditos (histórico + comprar)',
			images: [
				{
					name: 'creditos_lista_1.jpg',
					relevance: 2,
					legenda: 'Lista de créditos',
				},
				{
					name: 'creditos_lista_2.jpg',
					relevance: 1,
					legenda: 'Lista de créditos',
				},
				{
					name: 'creditos_comprar_1.jpg',
					relevance: 3,
				},
				{
					name: 'creditos_comprar_stripe.jpg',
					relevance: 1,
				},
			],
		},
		{
			group_name: 'credits_2',
			title: 'Créditos (presentear + explicação)',
			images: [
				{
					name: 'creditos_presentear.jpg',
					relevance: 3,
					legenda: 'Presentear créditos',
				},
				{
					name: 'creditos_presentear_menu.jpg',
					relevance: 1,
					legenda: 'Presentear créditos',
				},
				{
					name: 'creditos_explicacao.jpg',
					relevance: 2,
					legenda: 'Explicação dos créditos',
				},
			],
		},
		{
			group_name: 'friends',
			title: 'Amigos',
			images: [
				{
					name: 'amigos_sem_codigo.jpg',
					relevance: 1,
					legenda: 'Lista de amigos',
				},
				{ name: 'amigos_codigo.jpg', relevance: 2, legenda: 'Código de amigo' },
				{ name: 'amigos_lista.jpg', relevance: 3, legenda: 'Adicionar amigo' },
				{
					name: 'amigos_adicionar.jpg',
					relevance: 1,
					legenda: 'Adicionar amigo',
				},
			],
		},
		{
			group_name: 'security',
			title: 'Segurança',
			images: [
				{ name: 'mudar_senha.jpg', relevance: 3, legenda: 'Alterar senha' },
				{ name: 'mudar_email_1.jpg', relevance: 2, legenda: 'Alterar email 1' },
				{ name: 'mudar_email_2.jpg', relevance: 1, legenda: 'Alterar email 2' },
			],
		},
	]
</script>

<Slide>
	<h2 class="my-title text-6xl">Capturas de Ecrã</h2>
</Slide>

{#each screenshots as { title, images }}
	<Slide image={images[0].name} transition="concave">
		<h2 class="my-title">{title}</h2>
		<div class="flex flex-wrap justify-center gap-3">
			{#each images as { name, legenda, relevance }}
				<Step
					fadeInThenSemiOut
					blur
					growThenShrink
					transform3d
					class={`${
						images.length > 10 ? 'w-1/6' : images.length >= 5 ? 'w-48' : 'w-1/4'
					} flex flex-col items-start`}
				>
					<Media
						type="img"
						src={`/screenshots/${name}`}
						alt={name}
						class="rounded-md"
					/>
					{#if legenda}
						<p class="text-sm text-gray-400 mt-1">{legenda}</p>
					{/if}
				</Step>
			{/each}
		</div>
		<Notes>Apresenta os screenshots da aplicação.</Notes>
	</Slide>
{/each}
