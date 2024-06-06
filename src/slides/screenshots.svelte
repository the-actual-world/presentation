<script lang="ts">
	import { Slide, Notes, Step, Media } from '@components'

	let screenshots = [
		{
			group_name: 'onboarding',
			title: 'Integração e onboarding',
			images: [
				{ name: 'onboarding_1.jpg' },
				{ name: 'onboarding_2.jpg' },
				{ name: 'onboarding_3.jpg' },
				// { name: 'onboarding_4.jpg' },
				// { name: 'onboarding_5.jpg' },
				// { name: 'onboarding_6.jpg' },
				{ name: 'onboarding_7.jpg' },
				{ name: 'onboarding_8.jpg' },
			],
		},
		{
			group_name: 'authentication',
			title: 'Autenticação e autorização',
			images: [
				{ name: 'autenticacao_1.jpg', legenda: 'Criar conta' },
				{
					name: 'autenticacao_2.jpg',
					legenda: 'Criar conta - validações',
				},
				{
					name: 'autenticacao_3.jpg',
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
					legenda: 'Criar publicação',
				},
				{
					name: 'criar_publicacao_inserir_anexo.jpg',
					legenda: 'Inserir anexo na publicação',
				},
				{
					name: 'editar_publicacao.jpg',
					legenda: 'Editar publicação',
				},
				{
					name: 'publicacao_mudar_localizacao.jpg',
					legenda: 'Mudar localização da publicação',
				},
				{
					name: 'visualizacao_imagem.jpg',
					legenda: 'Visualização de imagem',
				},
			],
		},
		{
			group_name: 'feed',
			title: 'Feed de publicações',
			images: [
				{ name: 'feed_global.jpg', legenda: 'Feed global' },
				{
					name: 'feed_global_menu.jpg',
					legenda: 'Menu do feed global',
				},
				{
					name: 'feed_global_escuro.jpg',
					legenda: 'Tema escuro do feed global',
				},
				{
					name: 'feed_utilizador_publicacoes.jpg',
					legenda: 'Publicações do utilizador no feed',
				},
				{
					name: 'feed_utilizador_midia.jpg',
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
					legenda: 'Lista de conversas',
				},
				{
					name: 'lista_conversas_menu.jpg',
					legenda: 'Menu de configurações de uma conversa',
				},
				{
					name: 'criar_grupo_conversa.jpg',
					legenda: 'Criar grupo',
				},
				{
					name: 'editar_grupo_conversa.jpg',
					legenda: 'Editar grupo',
				},
				{ name: 'ver_grupo_conversa.jpg', legenda: 'Ver grupo' },
			],
		},
		{
			group_name: 'conversation_2',
			title: 'Mensagens',
			images: [
				{ name: 'ecra_conversa.jpg', legenda: 'Conversa' },
				{
					name: 'ecra_conversa_anexar.jpg',
					legenda: 'Anexar ficheiros',
				},
				{
					name: 'ecra_conversa_escura.jpg',
					legenda: 'Tema escuro',
				},
			],
		},
		{
			group_name: 'maps',
			title: 'Mapas',
			images: [
				{ name: 'rebobina_mapa_1.jpg', legenda: 'Mapa' },
				{
					name: 'rebobina_mapa_2.jpg',
					legenda: 'Mapa com marcadores e agrupamentos',
				},
				{ name: 'rebobina_mapa_3.jpg' },
				{
					name: 'rebobina_mapa_area.jpg',
					legenda: 'Seleção de área',
				},
				{
					name: 'rebobina_mapa_area_resultados.jpg',
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
					legenda: 'Editar resumo',
				},
				{
					name: 'rebobina_resumos_escuro.jpg',
					legenda: 'Ver resumos',
				},
			],
		},
		{
			group_name: 'settings',
			title: 'Definições',
			images: [
				{ name: 'definicoes_1.jpg', legenda: 'Definições' },
				{
					name: 'definicoes_escuro.jpg',
					legenda: 'Definições tema escuro',
				},
				{ name: 'definicoes_2.jpg' },
				{
					name: 'definicoes_extra.jpg',
					legenda: 'Definições extra',
				},
				{
					name: 'definicoes_estatisticas.jpg',
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
					legenda: 'Lista de créditos',
				},
				{
					name: 'creditos_lista_2.jpg',
					legenda: 'Lista de créditos',
				},
				{
					name: 'creditos_comprar_1.jpg',
					legenda: 'Comprar créditos',
				},
				{
					name: 'creditos_comprar_stripe.jpg',
					legenda: 'Comprar créditos com Stripe',
				},
			],
		},
		{
			group_name: 'credits_2',
			title: 'Créditos (presentear + explicação)',
			images: [
				{
					name: 'creditos_presentear.jpg',
					legenda: 'Presentear créditos',
				},
				{
					name: 'creditos_presentear_menu.jpg',
					legenda: 'Presentear créditos',
				},
				{
					name: 'creditos_explicacao.jpg',
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
					legenda: 'Lista de amigos',
				},
				{ name: 'amigos_codigo.jpg', legenda: 'Código de amigo' },
				{ name: 'amigos_lista.jpg', legenda: 'Adicionar amigo' },
				{
					name: 'amigos_adicionar.jpg',
					legenda: 'Adicionar amigo',
				},
			],
		},
		{
			group_name: 'security',
			title: 'Segurança',
			images: [
				{ name: 'mudar_senha.jpg', legenda: 'Alterar senha' },
				{ name: 'mudar_email_1.jpg', legenda: 'Alterar email 1' },
				{ name: 'mudar_email_2.jpg', legenda: 'Alterar email 2' },
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
			{#each images as { name, legenda }}
				<Step
					fadeInThenSemiOut
					blur={false}
					growThenShrink
					transform3d={false}
					class={`${
						images.length > 10
							? 'w-1/6'
							: images.length >= 5
								? 'w-48'
								: images.length >= 4
									? 'w-1/5'
									: 'w-1/4'
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
