//-------Backend--------
/*
Abrevations:

	(intelegence) = ine
	(speed) = spd
	(lang) = languages
	(hpbase) = class hp base
	(hpperlvl) = hp per lvl
	(hsbase) = healing surge base


*/


function rand(num){
	return (Math.ceil(Math.random() * num));
}

function Race(name, hieght, wieght, con, str, dex, ine, wis, cha, skillpls, size, spd, vision, lang, features){
	this.name = name
	this.wieght = wieght
	this.hieght = hieght
	this.con = con
	this.str = str
	this.dex = dex
	this.ine = ine
	this.wis = wis
	this.cha = cha
	this.skillpls = skillpls
	this.size = size
	this.sps = spd
	this.vision = vision
	this.lang = lang
	this.features = features
	
	
}

tiefling = new Race("Tiefling", [66, 74], [140, 230], 0, 0, 0, 2, 0, 2,[["stealth", 2],["bluff", 2]], "Medium", 6, "low light", ["common"], ["Bloodhunt", "Fire Resistance", "Infernal Wrath"])

function Clas(name, ac, fort, ref, will, hpbase, hpperlvl, hsbase, trained_skills, features){
	this.name = name
	//this.defpls = defpls
	this.hpbase = hpbase
	this.hpperlvl = hpperlvl
	this.hsbase = hsbase
	this.trained_skills = trained_skills
	this.features = features
}

rogue = Clas("Rogue", 0, 0, 2, 0, 12, 5, 6, ["stealth", "thievery"], ["First Strike", "Rogue Tactics", "Rogue Weapon Talent", "Sneak Attack"])






function Player(name, race, clas, alignment, deity, str, con, dex, ine, wis, cha, hp, skills, lang, feats, rituals, items){
	this.name = name;
	this.race = race;
	this.clas = clas;
	this.size = this.race.size
	this.alignment = alignment;
	this.deity = deity;
	//------------
	this.str = str + this.race.str;
	this.athletics = Math.floor((this.str / 2) - 5);
	//----------
	this.con = con + this.race.con;
	this.endurance = Math.floor((this.con / 2) - 5);
	//-------------
	this.dex = dex + this.race.dex;
	this.acrobatics = Math.floor((this.dex / 2) - 5);
	this.stealth = Math.floor((this.dex / 2) - 5);
	this.thievery = Math.floor((this.dex / 2) - 5);
	//---------
	this.ine = ine + this.race.ine;
	this.arcana = Math.floor((this.ine / 2) - 5);
	this.histor = Math.floor((this.ine / 2) - 5);
	this.religion = Math.floor((this.ine / 2) - 5);
	//----------
	this.wis = wis + this.race.wis;
	this.dungeoneering = Math.floor((this.wis / 2) - 5);
	this.heal = Math.floor((this.wis / 2) - 5);
	this.insight = Math.floor((this.wis / 2) - 5);
	this.nature = Math.floor((this.wis / 2) - 5);
	this.perception = Math.floor((this.wis / 2) - 5);
	//-----------
	this.cha = cha + this.race.cha;
	this.bluff = Math.floor((this.cha / 2) - 5);
	this.diplomacy = Math.floor((this.cha / 2) - 5);
	this.intimidate = Math.floor((this.cha / 2) - 5);
	this.streetwise = Math.floor((this.cha / 2) - 5);
	//------------
	this.hp = con + this.clas.hpbase;
	this.ac = ac + this.clas.ac;
	this.fort = fort + this.clas.fort;
	this.ref = ref + this.clas.ref;
	this.will = will + this.clas.will;
	this.race_features = this.race.features;
	this.clas_features = this.clas.clas_features
	this.init = this.dex + Math.floor(lvl / 2)
	this.skills = skills;
	this.lang = lang + this.race.lang
	this.feats = feats;
	this.rituals = rituals;
	this.items = items;
	this.lvl = 1
   
}
//Method 3






function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
function GenScores() {
	var scores = [0,0,0,0,0,0]
	var scoremod = 0
		while (scoremod <= 4 || scoremod >= 8){
		scores = []
	
	
	
		for (var i =0; i < 6; i ++){
			var roll1 = rand(6)
			var roll2 = rand(6)
			var roll3 = rand(6)
			var roll4 = rand(6)
		
			var sorted = bubbleSort([roll1, roll2, roll3, roll4])
		
			scores.push(sorted[3] + sorted[2] + sorted[1])
		}
		console.log(scores)
		scoremod = Math.floor((scores[0] / 2) - 5) + Math.floor((scores[1] / 2) - 5) + Math.floor((scores[1] / 2) - 5) + Math.floor((scores[2] / 2) - 5) + Math.floor((scores[3] / 2) - 5) + Math.floor((scores[4] / 2) - 5) + Math.floor((scores[5] / 2) - 5)
		console.log(scoremod)
	}	
		
	
	
	
	
	
}


