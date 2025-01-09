<script lang="ts">
  import { PersistedState } from "runed";
  import { areDatesOneDayApart } from "../../lib/date";

  const canShowMessage = new PersistedState("can-show-tip-message", true);
  const lastShown = new PersistedState("last-show-tip-message", Date.now());

  const hideTipMessage = (event: MouseEvent) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    isShown = false;
  };

  const showTipMessage = () => {
    isShown = true;
    canShowMessage.current = false;
    lastShown.current = Date.now();
  };

  $effect(() => {
    if (areDatesOneDayApart(lastShown.current, Date.now())) {
      canShowMessage.current = true;
    }
  });

  let isShown = $state(false);
</script>

<svelte:body
  onmouseleave={canShowMessage.current ? showTipMessage : undefined}
  ontouchend={lastShown.current ? showTipMessage : undefined}
/>

{#if isShown}
  <div
    role="button"
    tabindex="-1"
    class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 grid place-content-center z-50 cursor-auto"
    onclick={hideTipMessage}
    onkeydown={() => {}}
  >
    <div class="bg-white w-96 text-center p-8">
      <div class="flex flex-col gap-2 text-sm">
        <h3 class="text-lg pb-6"><strong>Before you go!</strong></h3>

        <div class="flex gap-2 justify-center">
          <button class="bg-[#006AF9] text-white py-2 w-1/3">15%</button>
          <button class="bg-[#006AF9] text-white py-2 w-1/3">20%</button>
          <button class="bg-[#006AF9] text-white py-2 w-1/3">25%</button>
        </div>
        <button class="bg-[#006AF9] text-white py-2 px-4">Custom</button>
      </div>
    </div>
  </div>
{/if}
