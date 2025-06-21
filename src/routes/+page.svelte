<script lang="ts">
	import ConsoleHook from "$lib/ConsoleHook.svelte";
    import EditableComponent, { type ComponentData } from "$lib/EditableComponent.svelte";
	import Toolbar from "$lib/Toolbar.svelte";
    import testPage from './testPage.json?raw'

    const defaultComponent = Object.freeze({
        content: "<h1>my component</h1>",
        position: { x: 0, y: 0 }
    });

    let components: ComponentData[] = $state(JSON.parse(testPage))
</script>

<ConsoleHook bind:components={components} />

<header>
    <Toolbar bind:components={components} {defaultComponent} />
</header>

<main>
    {#each components as _, i}
        <EditableComponent
            bind:content={components[i].content}
            bind:position={components[i].position}
        />
    {/each}
</main>
