var allTankInfoObj = {
  tank: "Seriously<b>?</b>",
  twin: "Twin",
  sniper: "Sniper",
  machinegun: "Machine Gun",
  flankguard: "Flank Guard",
  tripleshot: "Twin, 30: Triple Shot",
  quadtank: "Twin, 30: Quad Tank &nbsp;<b>OR</b> &nbsp;1: Tank, 15: Flank Guard, 30: Quad Tank",
  twinflank: "Twin, 30: Twin Flank &nbsp;<b>OR</b> &nbsp;1: Tank, 15: Flank Guard, 30: Twin Flank",
  triplet: "Twin, 30: Triple Shot, 45: Triplet",
  pentashot: "Twin, 30: Triple Shot, 45: Penta Shot",
  spreadshot: "Twin, 30: Triple Shot, 45: Spread Shot",
  octotank: "Twin, 30: Quad Tank, 45: Octo Tank &nbsp;<b>OR</b> &nbsp;1: Tank, 15: Flank Guard, 30: Quad Tank, 45: Octo Tank",
  auto5: "Twin, 30: Quad Tank, 45: Auto 5 &nbsp;<b>OR</b> &nbsp;1: Tank, 15: Flank Guard, 30: Quad Tank, 45: Auto 5 &nbsp;<b>OR</b> &nbsp;1: Tank, 15: Flank Guard, 30: Auto 3, 45: Auto 5",
  tripletwin: "Twin, 30: Twin Flank, 45: Triple Twin &nbsp;<b>OR</b> &nbsp;1: Tank, 15: Flank Guard, 30: Twin Flank, 45: Triple Twin",
  battleship: "Twin, 30: Twin Flank, 45: Battleship &nbsp;<b>OR</b> &nbsp;1: Tank, 15: Sniper, 30: Overseer, 45: Battleship &nbsp;<b>OR</b> &nbsp;1: Tank, 15: Flank Guard, 30: Twin Flank, 45: Battleship",
  assassin: "Sniper, 30: Assassin",
  overseer: "Sniper, 30: Overseer",
  hunter: "Sniper, 30: Hunter",
  trapper: "Sniper, 30: Trapper",
  ranger: "Sniper, 30: Assassin, 45: Ranger",
  stalker: "Sniper, 30: Assassin, 45: Stalker",
  overlord: "Sniper, 30: Overseer, 45: Overlord",
  necromancer: "Sniper, 30: Overseer, 45: Necromancer",
  manager: "Sniper, 30: Overseer, 45: Manager",
  overtrapper: "Sniper, 30: Overseer, 45: Overtrapper",
  predator: "Sniper, 30: Hunter, 45: Predator",
  streamliner: "Sniper, 30: Hunter, 45: Streamliner &nbsp;<b>OR</b> &nbsp;1: Tank, 15: Machine Gun, 30: Gunner, 45: Streamliner",
  tritrapper: "Sniper, 30: Trapper, 45: Tri-Trapper",
  gunnertrapper: "Sniper, 30: Trapper, 45: Gunner Trapper &nbsp;<b>OR</b> &nbsp;1: Tank, 15: Machine Gun, 30: Gunner, 45: Gunner Trapper",
  overtrapper: "Sniper, 30: Trapper, 45: Overtrapper",
  megatrapper: "Sniper, 30: Trapper, 45: Mega Trapper",
  autotrapper: "Sniper, 30: Trapper, 45: Auto Trapper",
  destroyer: "Machine Gun, 30: Destroyer",
  gunner: "Machine Gun, 30: Gunner",
  sprayer: "Machine Gun, 30: Machine Gun, 45: Sprayer",
  hybrid: "Machine Gun, 30: Destroyer, 45: Hybrid",
  annihilator: "Machine Gun, 30: Destroyer, 45: Annihilator",
  autogunner: "Machine Gun, 30: Gunner, 45: Auto Gunner &nbsp;<b>OR</b> &nbsp;1: Tank, 15: Flank Guard, 30: Auto 3, 45: Auto Gunner",
  triangle: "Flank Guard, 30: Tri-Angle",
  auto3: "Flank Guard, 30: Auto 3",
  booster: "Flank Guard, 30: Tri-Angle, 45: Booster",
  fighter: "Flank Guard, 30: Tri-Angle, 45: Fighter",
  smasher: "Tank, 30: Smasher",
  landmine: "Tank, 30: Smasher, 45: Landmine",
  autosmasher: "Tank, 30: Smasher, 45: Auto Smasher",
  spike: "Tank, 30: Smasher, 45: Spike",
  mothership: "REMOVED: Join a Mothership mode server and hope to be a mothership",
  destroyer: "Join a Domination mode server, wait for your team to conquer a destroyer, and press &quot;H&quot;"
};
var v = "";
var v2 = "";
var rand = "";

function check() {
  v = $("#tankType").val().toLowerCase();
  v2 = "";
  for (var i = 0; i < v.length; i++) {
    if (v[i] != " " && v[i] != "-") {
      v2 += v[i];
    }
  }
  if (v2 != "tank" && v2 != "destroyer" && v2 != "mothership") {
    v = "1: Tank, 15: ";
  } else {
    v = "";
  }
  if (allTankInfoObj.hasOwnProperty(v2)) {
    $("#tankInfo").html(v + allTankInfoObj[v2]);
  } else {
    $("#tankInfo").html("No such tank.");
  }
}

function randomize() {
  rand = Object.getOwnPropertyNames(allTankInfoObj)[Math.floor(Math.random() * (Object.getOwnPropertyNames(allTankInfoObj).length - 1)) + 1];
  $("#tankType").val(rand);
  v2 = allTankInfoObj[rand];
  if (v2 != "tank" && v2 != "destroyer" && v2 != "mothership") {
    v = "1: Tank, 15: ";
  } else {
    v = "";
  }
  $("#tankInfo").html(v + v2);
}
$(document).ready(function() {
  $("#tankType").keydown(function(event) {
    if (event.which === 13) {
      check();
    }
    if (event.which === 9) {
      randomize();
    }
  });
});
