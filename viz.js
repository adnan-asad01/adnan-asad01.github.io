
var viz;

window.onload = function() {

    var vizDiv = document.getElementById("myViz");
    var url = "https://public.tableau.com/views/CovidDeathToll/DashboardCovidDeath_1?:display_count=n&:origin=viz_share_link";

    var options = {
      width: 600,
      height: 600 ,
      hideTabs: True,
      hideToolbar: True

    };
    viz = new tableau.Viz(vizDiv,url,options);

  }