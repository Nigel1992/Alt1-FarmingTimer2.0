updatetimeout=false;

window.addEventListener("beforeunload",savedata);

plants = {
	tree: {
		n: "Tree",
		color: "green",
		locs: {
			lum: { n: "Lumbridge" },
			varr: { n: "Varrock" },
			fal: { n: "Falador" },
			tav: { n: "Taverly" },
			strong: { n: "Gnome stronghold" },
			prif: { n: "Prifddinas - Trahaearn" }
		},
		subs: {
			oak: { n: "Oak", cycle: 40, stages: 5, xp: 481.3, lvl: 15 },
			willow: { n: "Willow", cycle: 40, stages: 7, xp: 1481.5, lvl: 30 },
			maple: { n: "Maple", cycle: 40, stages: 8, xp: 3448.4, lvl: 45 },
			yew: { n: "Yew", cycle: 40, stages: 10, xp: 13768.3, lvl: 60 },
			magic: { n: "Magic", cycle: 40, stages: 12, xp: 13913.8, lvl: 75 }
		}
	},
	fruit: {
		n: "Fruit tree",
		color: "orange",
		locs: {
			strong_fr: { n: "Gnome stronghold" },
			cath: { n: "Catherby" },
			gnvil: { n: "Tree gnome village" },
			brim: { n: "Brimhaven" },
			llet: { n: "Lletya" },
			hh: { n: "Herblorer habitat" },
			prif_fr: { n: "Prifddinas - Meilyr" }
		},
		subs: {
			apple: { n: "Apple", cycle: 160, stages: 6, xp: 1272.5, lvl: 27 },
			banana: { n: "Banana", cycle: 160, stages: 6, xp: 1841.5, lvl: 33 },
			orange: { n: "Orange", cycle: 160, stages: 6, xp: 2586.7, lvl: 39 },
			curry: { n: "Curry", cycle: 160, stages: 6, xp: 3036.9, lvl: 42 },
			pineapple: { n: "Pineapple", cycle: 160, stages: 6, xp: 4791.7, lvl: 51 },
			papaya: { n: "Papaya", cycle: 160, stages: 6, xp: 6380.4, lvl: 57 },
            palm: { n: "Palm", cycle: 160, stages: 6, xp: 10509.6, lvl: 68 },
            ciku: { n: "Ciku", cycle: 160, stages: 6, xp: 28810.2, lvl: 101 },
            guarana: { n: "Guarana", cycle: 160, stages: 6, xp: 36786.4, lvl: 107 },
            carambola: { n: "Carambola", cycle: 160, stages: 6, xp: 46639.1, lvl: 113 }
		}
	},
	special: {
		n: "Other",
		color: "brown",
		locs: {
			sarimsp: { n: "Port Sarim" },
			etcsp: { n: "Etceteria" },
			brimsp: { n: "Brimhaven" },
			karamca: { n: "Tai Bwo Wannai" },
			prif_eld: { n: "Prifddinas - Crwys" },
			cani_mush: { n: "Canifis" },
			elf_mush: { n: "Isafdar" }
		},
		subs: {
			spirit: { n: "Spirit tree", cycle: 320, stages: 11, xp: 19501.3, lvl: 83 },
			calquat: { n: "Calquat tree", cycle: 160, stages: 8, xp: 19501.3, lvl: 72 },
			elder: { n: "Elder tree", cycle: 320, stages: 14, xp: 23463, lvl: 90 }
		}
	},
	herb: {
		n: "Herbs",
		color: "#7D4E7D",
		locs: {
			fal_her: { n: "South of Falador" },
			phas_her: { n: "Port Phasmatys" },
			cath_her: { n: "Catherby" },
			ard_her: { n: "Ardougne" },
			troll: { n: "Troll stronghold" },
			prif_her: { n: "Prifddinas - Crwys" },
			wildy_her: { n: "Wilderness" }
		},
		subs: {
			guam: { n: "Guam", cycle: 20, stages: 4, xp: 98.5, lvl: 9 },
			mar: { n: "Marrentill", cycle: 20, stages: 4, xp: 118.5, lvl: 14 },
			tar: { n: "Tarromin", cycle: 20, stages: 4, xp: 142, lvl: 19 },
			har: { n: "Harralander", cycle: 20, stages: 4, xp: 198.5, lvl: 26 },
			gout: { n: "Gout tuber", cycle: 20, stages: 4, xp: 420, lvl: 29 },
			ran: { n: "Ranarr", cycle: 20, stages: 4, xp: 240.5, lvl: 32 },
			spweed: { n: "Spirit weed", cycle: 20, stages: 4, xp: 593.5, lvl: 36 },
			toad: { n: "Toadflax", cycle: 20, stages: 4, xp: 303.5, lvl: 38 },
			irit: { n: "Irit", cycle: 20, stages: 4, xp: 382.5, lvl: 44 },
			werg: { n: "Wergali", cycle: 20, stages: 4, xp: 422.4, lvl: 46 },
			avan: { n: "Avantoe", cycle: 20, stages: 4, xp: 485, lvl: 50 },
			kwu: { n: "Kwuarm", cycle: 20, stages: 4, xp: 615, lvl: 56 },
			bloodw: { n: "Bloodweed", cycle: 20, stages: 4, xp: 723.2, lvl: 57 },
			snap: { n: "Snapdragon", cycle: 20, stages: 4, xp: 777, lvl: 62 },
			cadan: { n: "Cadantine", cycle: 20, stages: 4, xp: 946.5, lvl: 67 },
			lant: { n: "Lantadyme", cycle: 20, stages: 4, xp: 1195, lvl: 73 },
            arbuck: { n: "Arbuck", cycle: 20, stages: 4, xp: 1623.3, lvl: 77 },
			dwarf: { n: "Dwarf weed", cycle: 20, stages: 4, xp: 1514.5, lvl: 79 },
			tor: { n: "Torstol", cycle: 20, stages: 4, xp: 1771, lvl: 85 },
			fell: { n: "Fellstalk", cycle: 20, stages: 4, xp: 2434.2, lvl: 91 }
		}
	},
	allot: {
		n: "Allotment",
		color: "yellow",
		locs: {
			fal_al: { n: "South of Falador" },
			phas_al: { n: "Port Phasmatys" },
			cath_al: { n: "Catherby" },
			ard_al: { n: "Ardougne" }
		},
		subs: {
			potato: { n: "Potato", cycle: 10, stages: 4, xp: 98, lvl: 1 },
			onion: { n: "Onion", cycle: 10, stages: 4, xp: 114.5, lvl: 5 },
			cabbage: { n: "Cabbage", cycle: 10, stages: 4, xp: 125, lvl: 7 },
			tomato: { n: "Tomato", cycle: 10, stages: 4, xp: 152.5, lvl: 12 },
			sweetc: { n: "Sweetcorn", cycle: 10, stages: 5, xp: 207, lvl: 20 },
			straw: { n: "Strawberry", cycle: 10, stages: 6, xp: 316, lvl: 31 },
			waterm: { n: "Watermelon", cycle: 10, stages: 7, xp: 593.5, lvl: 47 },
			snapeg: { n: "Snape grass", cycle: 40, stages: 5, xp: 975, lvl: 80 },
			sunchoke: { n: "Sunchoke", cycle: 40, stages: 5, xp: 303, lvl: 87 },
			flytrap: { n: "Fly trap", cycle: 40, stages: 5, xp: 275, lvl: 93 },
			marigold: { n: "Marigold", cycle: 5, stages: 4 ,xp:55.5,lvl:2},
		}
	},
	hops: {
		n: "Hops",
		color: "cyan",
		locs: {
			lum_hop: { n: "North of Lumbridge" },
			seers_hop: { n: "Seer's Village" },
			yanil_hop: { n: "Yanille" },
			entra_hop: { n: "Entrana" }
		},
		subs: {
			barley: { n: "Barley", cycle: 10, stages: 4, xp: 198.5, lvl: 3 },
			hammerst: { n: "Hammerstone", cycle: 10, stages: 4, xp: 209, lvl: 4 },
			asgar: { n: "Asgarnian", cycle: 10, stages: 5, xp: 250.5, lvl: 8 },
			jute: { n: "Jute", cycle: 10, stages: 5, xp: 303, lvl: 13 },
			yanilli: { n: "Yanillian", cycle: 10, stages: 6, xp: 334.5, lvl: 16 },
			krandori: { n: "Krandorian", cycle: 10, stages: 7, xp: 407.5, lvl: 21 },
			wildbl: { n: "Wildblood", cycle: 20, stages: 4, xp: 543, lvl: 28 },
			reed: { n: "Reed", cycle: 20, stages: 4, xp: 3980, lvl: 78 },
			grapev: { n: "Grapevine", cycle: 20, stages: 4, xp: 6830, lvl: 95 },
		}
	},
	bush: {
		n: "Bush",
		color: "#BBFF00",
		locs: {
			champ_bush: { n: "Champion's guild" },
			rim_bush: { n: "Rimmington" },
			ard_bush: { n: "Ardougne monastery" },
			etcet_bush: { n: "Etceteria" },
			prif_bush: { n: "Priffdinas - Crwys" }
		},
		subs: {
			redber: { n: "Redberry", cycle: 20, stages: 5, xp: 0, lvl: 10 },
			cadava: { n: "Cadavaberry", cycle: 20, stages: 6, xp: 0, lvl: 22 },
			dwell: { n: "Dwellberry", cycle: 20, stages: 7, xp: 0, lvl: 36 },
			janger: { n: "Jangerberry", cycle: 20, stages: 8, xp: 0, lvl: 48 },
			whiteb: { n: "Whiteberry", cycle: 20, stages: 8, xp: 0, lvl: 59 },
			pivy: { n: "Poison ivy", cycle: 20, stages: 8, xp: 0, lvl: 70 },
			barber: { n: "Barberry", cycle: 20, stages: 10, xp: 0, lvl: 77 },
            wishwell: { n: "Wishing well", cycle: 20, stages: 10, xp: 0, lvl: 96 },
            avocado: { n: "Avocado", cycle: 80, stages: 5, xp: 0, lvl: 99 },
            mango: { n: "Mango", cycle: 80, stages: 5, xp: 0, lvl: 105 },
            lychee: { n: "Lychee", cycle: 80, stages: 5, xp: 0, lvl: 111 }
		}
	},
    cactus: {
        n: "Cactus",
        color: "#5B6F55",
        locs: {
            alkharid: { n: "Al Kharid" },
            men_imperial_cactus: { n: "Imperial district of Menaphos" },
            anachronia_cactus: { n: "Anachronia "}
        },
        subs: {
            cactus: { n: "Cactus", cycle: 80, stages: 7, xp: 0, lvl: 55 },
            pricklypear: { n: "Prickly pear", cycle: 80, stages: 7, xp: 0, lvl: 76 },
            potatocactus: { n: "Potato cactus", cycle: 80, stages: 7, xp: 0, lvl: 86 },
            dragonfruit: { n: "Dragonfruit", cycle: 80, stages: 7, xp: 0, lvl: 95 },
            goldendragonfruit: { n: "Golden dragonfruit", cycle: 80, stages: 7, xp: 0, lvl: 116 }
        }
    },
    mushroom: {
        n: "Mushroom",
        color: "#d8ccc0",
        locs: {
            canifis: { n: "West of Canifis" },
            tirannwn: { n: "Tirannwn" }
        },
        subs: {
            bittercap: { n: "Bittercap", cycle: 40, stages: 6, xp: 580.8, lvl: 53 },
            morchmush: { n: "Morchella", cycle: 40, stages: 6, xp: 859.3, lvl: 74 },
            stinkshroom: { n: "Stinkshroom", cycle: 40, stages: 6, xp: 0, lvl: 103 },
            tombshroom: { n: "Tombshroom", cycle: 40, stages: 6, xp: 0, lvl: 109 }
        }
    }
};

timers=[];

function start() {
	a1lib.identifyUrl("appconfig.json");
	plsettings=elid("plantsettings");
	loaddata();
	drawtimers();
	sheduleupdate();
	if(window.alt1){overrideselect();}
}

function drawtimers(){
	var a,b,c,d,str;
	
	str="";
	for(a=0; a<timers.length; a++){
		str+="<div id='timer-"+a+"' class='timer'>";
			str+="<select class='typeselect' onclick='changetimer("+a+");'></select>";
			str+="<select class='subtypeselect' onclick='changetimer("+a+");'></select>";
			str+="<select class='locselect' onclick='changetimer("+a+");'></select>";
			str+="<div class='progressouter'>";
				str+="<div class='progressbar'></div>";
				str+="<div class='progressdots'></div>";
				str+="<div class='progresslabel'></div>";
			str+="</div>";
			str+="<div class='menubutton skiptick' onclick='skiptick("+a+");' title='Skip a growth tick (Ultra growth potion or Rapid growth spell)'>Skip</div>";
			str+="<div class='menubutton startbutton' onclick='starttimer("+a+");'>Reset</div>";
			if(a!=0){str+="<div class='menubutton moveleft' onclick='settimerindex("+a+","+(a-1)+");'>&lt;</div>";}
			str+="<div class='menubutton removetimer' onclick='removetimer("+a+");'>X</div>";
			if(a!=timers.length-1){str+="<div class='menubutton moveright' onclick='settimerindex("+a+","+(a+1)+");'>&gt;</div>";}
		str+="</div>";
	}
	elid("timersinner").innerHTML=str;
	for(a=0; a<timers.length; a++){drawdropdowns(a);}
	updatetimers();
}

function getTickOffset() { 
	if (window.alt1 && alt1.lastWorldHop) {
		return alt1.lastWorldHop % (5 * 60 * 1000);
	} else {
		return 0;
	}
}

function updatetimers(){var a; for(a=0; a<timers.length; a++){updatetimer(a);}}
function updatetimer(index) {
	var timer = timers[index];

	var growstart = floorx(timer.start, timer.plant.cycle * 60 * 1000);
	var stages = floor((Date.now() - growstart) / timer.plant.cycle / 60 / 1000);

	var el = elid("timer-" + index);
	var d = stages - timer.plant.stages;
	if (d < 0) { elcl(el, "progresslabel")[0].innerHTML = "stages: " + stages + "/" + timer.plant.stages; }
	else { elcl(el, "progresslabel")[0].innerHTML = "Done (" + (d > 4 ? "5+" : d) + " extra stage" + (d == 1 ? "" : "s") + ")"; }
	elcl(el, "progressbar")[0].style.width = Math.min(100, 100 * (Date.now() - growstart - getTickOffset()) / (timer.plant.cycle * 60 * 1000 * timer.plant.stages)) + "%";
	toggleclass(elcl(el, "skiptick")[0], "down", !!timer.tickskipped);

	var str = "";
	for (var b = 1; b < timer.plant.stages; b++) { str += "<div class='progressdot' style='left:" + (100 * b / timer.plant.stages) + "%'></div>"; }
	elcl(el, "progressdots")[0].innerHTML = str;
}

function skiptick(index) {
	var a, b, c, d, timer;
	timer = timers[index];
	if (timer.tickskipped) {
		timer.tickskipped = false;
		timer.start += timer.plant.cycle * 60 * 1000;
	}
	else {
		timer.tickskipped = true;
		timer.start -= timer.plant.cycle * 60 * 1000;
	}
	updatetimer(index);
}

function drawdropdowns(index){
	var a,b,c,timer,str,el;
	timer=timers[index];
	el=elid("timer-"+index);
	if(!el){return;}
	
	str="";
	for(b in plants){str+="<option style='background:"+plants[b].color+";' value='"+b+"'"+(plants[b]==timer.type?"selected":"")+">"+plants[b].n+"</option>";}
	elcl(el,"typeselect")[0].innerHTML=str;
	elcl(el,"typeselect")[0].style.background=timer.type.color;
	
	str="";
	for(b in timer.type.subs){str+="<option value='"+b+"'"+(timer.type.subs[b]==timer.plant?"selected":"")+">"+timer.type.subs[b].n+"</option>";}
	elcl(el,"subtypeselect")[0].innerHTML=str;
	
	str="";
	for(b in timer.type.locs){str+="<option value='"+b+"'"+(timer.type.locs[b]==timer.loc?"selected":"")+">"+timer.type.locs[b].n+"</option>";}
	elcl(el,"locselect")[0].innerHTML=str;
}

function changetimer(index){
	var a,b,c,timer,el;
	timer=timers[index];
	el=elid("timer-"+index);
	
	a=plants[elcl(el,"typeselect")[0].value];
	if(a==timer.type){
		timer.plant=timer.type.subs[elcl(el,"subtypeselect")[0].value];
		timer.loc=timer.type.locs[elcl(el,"locselect")[0].value];
	}
	else{
		timer.type=a;
		timer.plant=timer.type.subs[Object.keys(timer.type.subs)[0]];
		timer.loc=timer.type.locs[Object.keys(timer.type.locs)[0]];
	}
	
	drawdropdowns(index);
	updatetimer(index);
	savedata();
}

function starttimer(index){
	var a,b,c,timer;
	timer=timers[index];
	if(floorx(timer.start,timer.plant.cycle*60*1000)==floorx(Date.now(),timer.plant.cycle*60*1000)){showmessage("Resetting didn't change the growth time as the first growth tick didn't happen yet.",3000);}
	timer.start=Date.now();
	timer.tickskipped=false;
	updatetimer(index);
	savedata();
}

function addtimer(){
	timers.push({type:plants.tree,plant:plants.tree.subs.oak,loc:plants.tree.locs.lum,start:Date.now()});
	drawtimers();
	savedata();
}

function sheduleupdate() {
	if (updatetimeout) { clearTimeout(updatetimeout); }
	var time = 1 * 1000;
	updatetimeout = setTimeout(function () {
		updatetimers();
		sheduleupdate();
		//console.log(5 * 60 - (Math.round((Date.now() - alt1.lastWorldHop) / 1000) % (5 * 60)));
	}, (time + 500) - (Date.now() % time));
}

function savedata(){
	var a,b,c,d,jsonobj;
	jsonobj=[];
	for(a=0; a<timers.length; a++){
		b={
			start:timers[a].start,
			tickskipped:timers[a].tickskipped
		};
		for(c in plants){if(plants[c]==timers[a].type){b.type=c; break;}}
		if(!b.type){continue;}
		for(c in plants[b.type].subs){if(plants[b.type].subs[c]==timers[a].plant){b.plant=c; break;}}
		if(!b.plant){continue;}
		for(c in plants[b.type].locs){if(plants[b.type].locs[c]==timers[a].loc){b.loc=c; break;}}
		if(!b.loc){continue;}
		jsonobj.push(b);
	}
	localStorage.farm_timers=JSON.stringify(jsonobj);
}

function loaddata(){
	var a,b,c,d,jsonobj;
	
	timers=[];
	if(!localStorage.farm_timers){return;}
	
	try{jsonobj=JSON.parse(localStorage.farm_timers);}
	catch(a){return;}
	
	for(a=0; a<jsonobj.length; a++){
		b={};
		b.start=jsonobj[a].start;
		b.tickskipped=jsonobj[a].tickskipped;
		b.type=plants[jsonobj[a].type];
		if(!b.type){continue;}
		b.plant=b.type.subs[jsonobj[a].plant];
		if(!b.plant){continue;}
		b.loc=b.type.locs[jsonobj[a].loc];
		if(!b.loc){continue;}
		timers.push(b);
	}	
}

function settimerindex(index,newindex){
	var a,b,c;
	a=timers.splice(index,1);
	timers.splice(newindex,0,a[0]);
	drawtimers();
}

function removetimer(index){
	timers.splice(index,1);
	drawtimers();
}

messagetimer=false;
function showmessage(str,time){
	var a,b;
	
	if(!time){time=2000;}
	if(!str){
		elid("messageouter").classList.add("hidden");
		if(messagetimer){clearTimeout(messagetimer); messagetimer=false;}
		return;}
	
	elid("messageinner").innerHTML=str;
	elid("messageouter").classList.remove("hidden");
	if(messagetimer){clearTimeout(messagetimer);}
	messagetimer=setTimeout(function(){showmessage();},time);
}








