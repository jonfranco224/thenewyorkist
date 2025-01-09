<script lang="ts">
  import { PersistedState } from "runed";

  const canShowTipMessage = new PersistedState("can-show-tip-message", true);
  const lastTimeShown = new PersistedState("last-show-tip-message", new Date());

  const areDatesOneDayApart = (date1: Date, date2: Date): boolean => {
    // Get the difference in time (milliseconds) between the two dates
    const diffInMilliseconds = Math.abs(date1.getTime() - date2.getTime());

    // Convert the difference to days
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

    // Check if the difference in days is larger than 1
    return diffInDays >= 1;
  };

  const hideTipMessage = () => {
    isShown = false;
    canShowTipMessage.current = false;
  };

  const showTipMessage = () => {
    isShown = true;
  };

  $effect(() => {
    const now = new Date();
    if (areDatesOneDayApart(lastTimeShown.current, now)) {
      canShowTipMessage.current = true;
      lastTimeShown.current = now;
    }
  });

  let isShown = $state(false);
</script>

<svelte:body
  onmouseleave={canShowTipMessage.current ? showTipMessage : undefined}
  ontouchend={canShowTipMessage.current ? showTipMessage : undefined}
/>

{#if isShown}
  <div
    role="button"
    tabindex="-1"
    class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 grid place-content-center z-50"
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
