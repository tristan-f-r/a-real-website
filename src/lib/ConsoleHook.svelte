<script lang="ts">
    import { parse, array } from "valibot";
	import { onMount } from "svelte";
	import { ComponentDataSchema, type ComponentData } from "./EditableComponent.svelte";

    interface Props {
        components: ComponentData[]
    }

    let { components = $bindable() }: Props = $props();

    onMount(() => {
        console.log("you can also update these components programmatically!");
        console.log("use the getComponents() and z(...) utility functions.");

        (globalThis as any).getComponents = function() {
            return $state.snapshot(components);
        };

        (globalThis as any).setComponents = function(passedComponents: unknown) {
            const validatedComponents = parse(array(ComponentDataSchema), passedComponents)
            components = validatedComponents;
        };
    })
</script>
