<template>
  <div class="calc-wrapper">
      <SideMenu />
      <CalcRenderer />
      <CalcProjectDetails />
      <CalcFrames /> 
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu"
import CalcRenderer from "@/components/CalcComponents/CalcRenderer"
import CalcProjectDetails from "@/components/CalcComponents/CalcProjectDetails"
import CalcFrames from "@/components/CalcComponents/CalcFrames"

export default {
    name: "CalcWrapper",
    components: {
        SideMenu,
        CalcRenderer,
        CalcProjectDetails,
        CalcFrames
    }
}
</script>

<style>

</style>