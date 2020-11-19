<template>
  <div class="calc-wrapper">
    <SideMenu />
    <SideOrder />
    <CalcRenderer />
    <CalcProjectDetails />
    <CalcFrames />
    <CalcCards />
    <CalcInfo />
    <CalcTimePrice />
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import SideOrder from "@/components/SideOrder";
import CalcRenderer from "@/components/CalcComponents/CalcRenderer";
import CalcProjectDetails from "@/components/CalcComponents/CalcProjectDetails";
import CalcFrames from "@/components/CalcComponents/CalcFrames";
import CalcCards from "@/components/CalcComponents/CalcCards";
import CalcInfo from "@/components/CalcComponents/CalcInfo";
import CalcTimePrice from "@/components/CalcComponents/CalcTimePrice";

export default {
  name: "CalcWrapper",
  components: {
    SideMenu,
    SideOrder,
    CalcRenderer,
    CalcProjectDetails,
    CalcFrames,
    CalcCards,
    CalcInfo,
    CalcTimePrice
  },
};
</script>

<style>
</style>