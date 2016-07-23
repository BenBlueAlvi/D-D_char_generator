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
	this.defpls = defpls
	this.hpbase = hpbase
	this.hpperlvl = hpperlvl
	this.hsbase = hsbase
	this.trained_skills = trained_skills
	this.features = features
}

rogue = Clas("Rogue", 0, 0, 2, 0, 12, 5, 6, ["stealth", "thievery"], ["First Strike", "Rogue Tactics", "Rogue Weapon Talent", "Sneak Attack"])






function Player(name, race, clas, size, alignment, deity, str, con, dex, ine, wis, cha, hp, race_features, clas_features, skills, lang, feats, rituals, items){
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
	this.skills = skills;
	this.lang = lang + this.race.lang
	this.feats = feats;
	this.rituals = rituals;
	this.items = items;
	this.lvl = 1
   
}


