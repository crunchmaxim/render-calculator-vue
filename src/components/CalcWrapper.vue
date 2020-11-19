<template>
  <div class="calc-wrapper">
    <SideMenu />
    <CalcRenderer />
    <CalcProjectDetails />
    <CalcFrames />
    <CalcCards />

  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import CalcRenderer from "@/components/CalcComponents/CalcRenderer";
import CalcProjectDetails from "@/components/CalcComponents/CalcProjectDetails";
import CalcFrames from "@/components/CalcComponents/CalcFrames";
import CalcCards from "@/components/CalcComponents/CalcCards";

export default {
  name: "CalcWrapper",
  components: {
    SideMenu,
    CalcRenderer,
    CalcProjectDetails,
    CalcFrames,
    CalcCards,
  },
};
</script>

<style>
</style>