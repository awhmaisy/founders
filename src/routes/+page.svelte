<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 style="font-size: 1.5rem;">
		<span style="color: var(--color-theme-1);">Fight On </span><span
			style="color: var(--color-theme-2);">Founders</span
		>
	</h1>

	<h2 style="text-align: left; width: 60%;">
		<strong>FightOnFounders</strong> is an event series hosted in LA. We're an arm extended from
		<a href="https://iovineyoung.usc.edu/">Dr. Dre and Jimmy Iovine's Iovine and Young Academy</a>
		and partial to the Innovation Quest.
		<br /><br />
		Our mission is to promote and evangelize the practice of entrepreneurship among students, alumni,
		and industry professionals, as well as equip the current USC entrepreneurship ecosystem with a comprehensive
		understanding of a prospective investor’s perspective.
	</h2>
</section>
<h1 style="text-align: center; font-size: 1.5rem; padding-top: 50px;">
	RSVP for Fall 2024
</h1>
<div class="luma">
	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<iframe
		src="https://lu.ma/embed/calendar/cal-xUeq1gewckw1XYR/events?"
		width="600"
		height="450"
		frameborder="0"
		style="border: 1px solid #bfcbda88; border-radius: 4px;"
		aria-hidden="false"
		tabindex="0">
	</iframe>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.luma {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 20px;
	}
</style>