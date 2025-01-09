<script lang="ts">
  import { PersistedState, IsInViewport } from "runed";
  import { fly } from "svelte/transition";
  import { areDatesOneDayApart } from "../../lib/date";

  let targetNode = $state<HTMLElement | null>(null);
  const inViewport = new IsInViewport(() => targetNode);

  const canShowMessage = new PersistedState("can-show-notify-message", true);
  const lastShown = new PersistedState("last-show-notify-message", Date.now());

  let isShown = $state(false);
  let areButtonsShown = $state(false);
  let face = $state<"idle" | "sad" | "happy">("idle");
  let text = $state("Dismiss");

  $effect(() => {
    targetNode = document.querySelector("footer");
  });

  $effect(() => {
    if (inViewport.current && canShowMessage.current) {
      isShown = true;
      lastShown.current = Date.now();
      canShowMessage.current = false;
    }
  });

  $effect(() => {
    if (areDatesOneDayApart(lastShown.current, Date.now())) {
      canShowMessage.current = true;
    }
  });
</script>

{#if isShown}
  <div
    class="flex pointer-events-none w-full fixed top-0 left-0 justify-center z-10"
  >
    <div
      in:fly={{ y: -200, duration: 10_000, opacity: 1 }}
      onintroend={() => (areButtonsShown = true)}
      class="bg-white w-full max-w-96 left-1/2 text-sm text-center pointer-events-auto shadow-xl p-8 flex gap-1.5"
    >
      <div class="text-lg">
        {#if face === "idle"}🥺
        {:else if face === "sad"}💀
        {:else if face === "happy"}🥹
        {/if}
      </div>

      <div>
        <div>We'd like to send you one or two wittle notifications?</div>
        <div class="text-[6px]">
          Notifications can be turned off anytime from browser settings.
        </div>

        <div
          class:opacity-0={!areButtonsShown}
          class:opacity-100={areButtonsShown}
          class="flex gap-2 justify-center transition-opacity duration-300"
        >
          <button
            class="px-2 py-1 hover:bg-red-600 hover:text-white vibrate"
            onmouseenter={() => {
              face = "sad";
              text = "Dís̓míѕ͂s";
            }}
            onmouseleave={() => {
              face = "idle";
              text = "Dismiss";
            }}
            onclick={() => (isShown = false)}
          >
            {text}
          </button>
          <button
            class="px-2 py-1 hover:bg-green-500 hover:text-white"
            onmouseenter={() => (face = "happy")}
            onmouseleave={() => (face = "idle")}
            onclick={() => {
              isShown = false;
              canShowMessage.current = false;
            }}
          >
            Allow
          </button>
        </div>
      </div>

      <div class="text-lg">
        {#if face === "idle"}🥺
        {:else if face === "sad"}💀
        {:else if face === "happy"}🥹
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes vibration {
    0% {
      transform: translate(-2px, -1px);
    }
    25% {
      transform: translate(2px, -3px);
    }
    50% {
      transform: translate(1px, 2px);
    }
    75% {
      transform: translate(-2px, 1px);
    }
    100% {
      transform: translate(3px, -2px);
    }
  }

  .vibrate:hover {
    animation: vibration 100ms linear 0ms infinite;
  }
</style>
