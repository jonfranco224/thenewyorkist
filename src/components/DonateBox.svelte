<script>
</script>

<div class="flex flex-wrap gap-3">
  {#each { length: 1000 }, index}
    <button class="bg-[#006AF9] w-[5.4rem] py-2 text-white text-xs text-center">
      ${(index + 1) ** 2}.00
    </button>
  {/each}
</div>
