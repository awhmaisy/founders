<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import gitbook from '$lib/images/gitbook.svg';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/docs') ? 'page' : undefined}>
				<a href="/docs">Docs</a>
			</li>
			<li aria-current={$page.url.pathname === '/team' ? 'page' : undefined}>
				<a href="/team">Team</a>
			</li>
			<li>
				<a href="https://instagram.com" target="_blank">Apply</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={gitbook} alt="GitBook" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}
	li {
		position: relative;
		display: flex;
		align-items: center;
		padding: 0.25em 0.75em; 
		font-size: 0.8rem;
		letter-spacing: 0em;
		text-decoration: none;
		margin: 0 5px;
		background-color: white;
		border: 1px solid black;
	}

	li[aria-current='page'] {
		background-color: black; 
		color: white;
	}

	li[aria-current='page'] a {
		color: white; 
	}

	a {
		text-decoration: none;
		color: black; 
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>