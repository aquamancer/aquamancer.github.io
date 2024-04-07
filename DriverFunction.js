//todo bugfix 500 500 necks showing
export function output(command) {
    let data = [{"className":"arcanist","specs":[{"specName":"order of the emperor","stats":[["swift","crit"],[1500,500]],"engravings":[["order of the emperor","grudge","raid captain","mass increase","hit master","cursed doll","adrenaline"],[[3],[3],[3],[1,2,3],[1,2,3],[1,2,3],[1,2,3]]],"builds":["5x3:\torder of the emperor\tgrudge\traid captain\tadrenaline\thit master/mass increase","5x3+1:\torder of the emperor\tgrudge\traid captain\thit master\tmass increase\tadrenaline 1","5x3+2:\torder of the emperor\tgrudge\traid captain\thit master\tmass increase\tadrenaline 2"]},{"specName":"empress' grace","stats":[["spec","crit"],[1500,500]],"engravings":[["empress' grace","grudge","keen blunt weapon","raid captain","barricade","hit master","cursed doll","adrenaline"],[[1,3],[3],[3],[3],[3],[2,3],[2,3],[1,2,3]]],"builds":["5x3:\tempress' grace\tgrudge\thit master\tadrenaline\tcursed doll/raid captain/barricade/keen blunt weapon","4x3+2+1:\tgrudge\thit master\tcursed doll\traid captain/barricade/keen blunt weapon\tadrenaline 2\tempress' grace 1","5x3+1:\tgrudge\thit master\tadrenaline\tcursed doll\traid captain/barricade/keen blunt weapon\tempress' grace 1","5x3+2:\tempress' grace\tgrudge\thit master\tcursed doll\traid captain/barricade/keen blunt weapon\tadrenaline 2"],"notes":"raid captain and barricade are incompatible. 4x3+2+1 is better than 5x3"}]},{"className":"bard","specs":[{"specName":"desperate salvation","stats":[["swift","spec"],[1500,501]],"engravings":[["desperate salvation","awakening","expert","heavy armor","max mp increase","vital point hit","magick stream","crisis evasion"],[[3],[3],[2,3],[1,2,3],[3],[3],[3],[1]]],"builds":["5x3:\tdesperate salvation\tawakening\texpert\theavy armor\tmax mp increase","5x3+1:\t+ crisis evasion 1","4x3+2+2:\tdesperate salvation\tawakening\tmax mp increase\tvital point hit\texpert 2\theavy armor 2"],"notes":"people with level 9/10 cd gems sometimes run one spec ring or earring. full spec bard requires full 9/10 gems. magick stream and drops of ether are not used"}]},{"className":"sorceress","specs":[{"specName":"igniter","stats":[["spec","crit"],[1500,500]],"engravings":[["igniter","grudge","all out attack","adrenaline","hit master","keen blunt weapon","cursed doll","ether predator"],[[3],[3],[3],[1,2,3],[1,2,3],[3],[3],[1]]],"builds":["5x3:\tigniter\tgrudge\tall out attack\tkeen blunt weapon\tadrenaline","5x3+1:\tigniter\tgrudge\tall out attack\tkeen blunt weapon\thit master\tadrenaline 1","5x3+2:\t+ adrenaline 2"]},{"specName":"reflux","stats":[["crit","swift"],[1500,501]],"engravings":[["reflux","grudge","keen blunt weapon","adrenaline","hit master","raid captain","ether predator"],[[3],[3],[3],[1,2,3],[3],[1,2],[1]]],"builds":["5x3:\treflux\tgrudge\tkeen blunt weapon\tadrenaline\thit master","5x3+1:\treflux\tgrudge\tkeen blunt weapon\thit master\tcursed doll\tadrenaline 1","5x3+2:\t+ adrenaline 2"],"notes":"one ring can be either crit or swift. raid captain if running extra swift. precise dagger not recommended"}]},{"className":"summoner","specs":[{"specName":"master summoner","stats":[["spec","swift","crit"],[1500,1500,500]],"engravings":[["master summoner","grudge","keen blunt weapon","hit master","cursed doll","adrenaline","ether predator","raid captain","all out attack"],[[3],[3],[3],[3],[3],[3],[1,2,3],[1],[3],[3]]],"builds":["5x3:\tmaster summoner\tgrudge\tkeen blunt weapon\tadrenaline\thit master","5x3+1:\tmaster summoner\tgrudge\tkeen blunt weapon\tadrenaline\thit master\tether predator 1","5x3+1:\tmaster summoner\t5grudge\tkeen blunt weapon\tcursed doll\thit master\tadrenaline 1","5x3+2:\tadrenaline 2","FULL SWIFT:\tmaster summoner\tgrudge\tkeen blunt weapon\traid captain\tall out attack\tadrenaline 1"],"notes":"raid captain and all out attack are used by full swift only"},{"specName":"communication overflow","stats":[["swift","crit"],[1500,500]],"engravings":[["communcation overflow","grudge","keen blunt weapon","raid captain","hit master","cursed doll","adrenaline","master summoner"],[[3],[3],[3],[3],[3],[3],[2,3],[1,2]]],"builds":["5x3:\tcommunication overflow\tgrudge\tkeen blunt weapon\traid captain\tadrenaline","5x3+1:\t+ master summoner","5x3+2:\tcommunication overflow\tgrudge\tkeen blunt weapon\traid captain\thit master\tadrenaline 2"],"notes":"master summoner vastly outperforms any other +1. this includes adrenaline"}]},{"className":"berserker","specs":[{"specName":"mayhem","stats":[["crit","swift"],[1300,700]],"engravings":[["mayhem","grudge","keen blunt weapon","raid captain","cursed doll","master's tenacity","ether predator"],[[3],[3],[3],[2,3],[2,3],[2,3],[1]]],"builds":["5x3:\tmayhem\tgrudge\tkeen blunt weapon\tmaster's tenacity\traid captain","5x3+1:\t+ ether predator/cursed doll","5x3+2:\tcursed doll/master's tenacity/raid captain 2"],"notes":""},{"specName":"berserker's technique","stats":[["spec","swift","crit"],[1500,500,500]],"engravings":[["berserker's technique","grudge","raid captain","keen blunt weapon","mass increase","cursed doll","ether predator","adrenaline"],[[3],[3],[3],[3],[3],[2,3],[1,2],[1,2]]],"builds":["5x3:\tberserker's technique\tgrudge\tkeen blunt weapon\traid captain\tmass increase/cursed doll","5x3+1:\t+ ether predator","5x3+2:\t +ether predator/cursed doll"],"notes":"adrenaline not common. only for salvation builds"}]},{"className":"destroyer","specs":[{"specName":"rage hammer","stats":[["crit","spec","swift"],[1500,750,500]],"engravings":[["rage hammer","grudge","super charge","master brawler","cursed doll","barricade","adrenaline","ether predator"],[[3],[2,3],[3],[3],[2,3],[3],[1,2,3],[1]]],"builds":["5x3:\trage hammer\tgrudge\tsuper charge\tmaster brawler\tbarricade","5x3+1:\t+ ether predator/adrenaline 1","5x3+2:\t+ cursed doll/adrenaline 2/grudge 2"],"notes":"crit spec + spec (ear)ring, crit swift + spec earring, crit spec + swift ring, crit swift + swift ring"},{"specName":"gravity training","stats":[["spec","crit"],[1500,500]],"engravings":[["gravity training","grudge","master brawler","spirit absorption","barricade","cursed doll","rage hammer","ether predator"],[[3],[3],[3],[2,3],[2,3],[1,2,3],[1],[3]]],"builds":["5x3:\tgravity training\tgrudge\tmaster brawler\tspirit absorption\tbarricade/cursed doll","5x3+1:\t+ rage hammer/ether predator 1","5x3+2:\tbarricade/cursed doll/spirit absorption(with atkspd syn) 2"],"notes":""}]},{"className":"gunlancer","specs":[{"specName":"lone knight","stats":[["crit","swift"],[1150,850]],"engravings":[["lone knight","grudge","super charge","master brawler","cursed doll","barricade","combat readiness"],[[3],[3],[3],[3],[2,3],[2,3],[1]]],"builds":["5x3:\tlone knight\tgrudge\tsuper charge\tmaster brawler\tcursed doll/barricade","5x3+1:\t+ combat readiness 1","5x3+2:\t+ cursed doll/barricade 2"],"notes":"crit/swift necklace + 300(earring) or 400(2 rings) swift"},{"specName":"combat readiness","stats":[["spec","crit"],[1500,500]],"engravings":[["combat readiness","grudge","keen blunt weapon","barricade","adrenaline","stabilized status","cursed doll"],[[1,2,3],[3],[3],[2,3],[2,3],[2,3],[2,3]]],"builds":["5x3:\tcombat readiness\tgrudge\tadrenaline\tbarricade\t(keen blunt weapon/cursed doll/stabilized status)","4x3+2+1:\tgrudge\tbarricade\tkeen blunt weapon\tbarricade\tadrenaline 2\tcombat readiness 1","5x3+1:\t+ combat readiness 1","5x3+2:\t+ (adrenaline/cursed doll/stabilized status/barricade) 2"],"notes":""}]},{"className":"paladin","specs":[{"specName":"blessed aura","stats":[["swift","spec"],[1500,500]],"engravings":[["blessed aura","awakening","expert","vital point hit","magick stream","drops of ether","max mp increase","explosive expert","heavy armor","spirit absorption","judgment","crisis evasion"],[[3],[3],[3],[3],[3],[3],[2,3],[1,2,3],[1,2],[1,2],[1,2],[1]]],"builds":["4x3:\tblessed aura\tawakening\texpert\tvital point hit","5x3:\t+ magick stream/explosive expert/drops of ether/heavy armor","5x3+1:\t+ judgment/explosive expert/heavy armor/crisis evasion 1","4x3+2+2 & 5x3+2:\t+ spirit absorption/max mp increase/heavy armor 2/explosive expert"],"notes":""}]},{"className":"slayer","specs":[{"specName":"predator","stats":[["swift","crit"],[1500,500]],"engravings":[["predator","grudge","raid captain","ambush master","mass increase","adrenaline","ether predator"],[[3],[3],[3],[3],[3],[1,2],[1]]],"builds":["5x3:\tpredator\tgrudge\traid captain\tambush master\tmass increase","5x3+1:\t+ adrenaline/ether predator 1","5x3+2:\t+ adrenaline 2"],"notes":""},{"specName":"punisher","stats":[["spec","swift"],[1500,500]],"engravings":[["punisher","grudge","raid captain","ambush master","cursed doll","keen blunt weapon","adrenaline","ether predator"],[[3],[3],[3],[3],[3],[3],[1,2,3],[1]]],"builds":["5x3:\tpunisher\tgrudge\traid captain\tambush master\tadrenaline","5x3+1:\tcursed doll/keen blunt weapon 3 + adrenaline/ether predator 1","5x3+2:\tcursed doll/keen blunt weapon 3 + adrenaline 2"],"notes":""}]},{"className":"breaker","specs":[{"specName":"brawl king storm","stats":[["spec","crit"],[1500,500]],"engravings":[["brawl king storm","grudge","super charge","keen blunt weapon","hit master","cursed doll","adrenaline","ether predator"],[[3],[3],[3],[3],[1,2,3],[2,3],[1,2,3],[1,2]]],"builds":["5x3:\tbrawl king storm\tgrudge\tsuper charge\tkeen blunt weapon\tadrenaline","5x3+1:\tadrenaline + ether predator 1\ncursed doll/hit master + adrenaline 1","5x3+2:\thit master + cursed doll/adrenaline 2\nadrenaline + cursed doll/hit master 2"],"notes":""},{"specName":"asura's path","stats":[["crit","swift"],[1500,500]],"engravings":[["asura's path","grudge","master brawler","raid captain","keen blunt weapon","adrenaline","ether predator"],[[3],[3],[3],[3],[3],[1,2,3],[1]]],"builds":["5x3:\tasura's path\tgrudge\tmaster brawler\traid captain\tadrenaline","5x3+1:\t+ ether predator 1\nkeen blunt weapon + adrenaline 1","5x3+2:\tkeen blunt weapon + adrenaline 2"],"notes":""}]},{"className":"glaivier","specs":[{"specName":"control","stats":[["swift","crit"],[1200,800]],"engravings":[["control","grudge","raid captain","ambush master","keen blunt weapon","adrenaline","ether predator","cursed doll"],[[3],[3],[3],[3],[3],[1,2,3],[1,2],[2]]],"builds":["5x3:\tpinnacle\tgrudge\traid captain\tambush master\tkeen blunt weapon","5x3+1:\t+ adrenaline/ether predator 1","5x3+2:\t+ adrenaline/cursed doll > raid captain > ether predator 2"],"notes":""},{"specName":"pinnacle","stats":[["spec","crit","swift"],[1500,500,500]],"engravings":[["pinnacle","grudge","raid captain","ambush master","cursed doll","adrenaline","ether predator","keen blunt weapon"],[[3],[3],[3],[3],[2,3],[1,2,3],[1,2],[3]]],"builds":["5x3:\tpinnacle\tgrudge\traid captain\t(ambush master/keen blunt weapon(nightmare))\t(cursed doll/adrenaline)","5x3+1:\tcursed doll 3 + adrenaline 1 or adrenaline 3 + ether predator 1","5x3+2:\tcursed doll 3 + adrenaline 2 or adrenaline 2 + cursed doll 2"],"notes":""}]},{"className":"scrapper","specs":[{"specName":"shock training","stats":[["spec","crit"],[1500,500]],"engravings":[["shock training","grudge","ambush master","adrenaline","keen blunt weapon","cursed doll","ether predator"],[[3],[3],[3],[2,3],[3],[2,3],[1,2]]],"builds":["5x3:\tshock training\tgrudge\tambush master\t(cursed doll||keen blunt weapon)\tadrenaline","5x3+1:\t+ ether predator 1","5x3+2:\t(keen blunt weapon + adrenaline 2)||(adrenaline + cursed doll 2)"],"notes":""},{"specName":"taijutsu","stats":[["swift","crit"],[1300,700]],"engravings":[["taijutsu","grudge","ambush master","keen blunt weapon","cursed doll","raid captain","adrenaline","ether predator"],[[3],[3],[3],[3],[2,3],[1,2,3],[1,2,3],[1,2,3],[1]]],"builds":["5x3:\ttaijutsu\tgrudge\tambush master\tadrenaline\traid captain(full swift)/keen blunt weapon/cursed doll","5x3+1:\t+ ether predator/adrenaline/raid captain 1","5x3+2:\t+ cursed doll/adrenaline/raid captain 2"],"notes":"full swift caps raid captain, 1 crit ring is about as efficient as 16% damage increase\n1 crit ring, 1 crit ring + earring, and full swift are all viable"}]},{"className":"soulfist","specs":[{"specName":"energy overflow","stats":[["swift","crit"],[1500,500]],"engravings":[["energy overflow","grudge","adrenaline","raid captain","mass increase","cursed doll","keen blunt weapon","ether predator"],[[3],[3],[1,2,3],[2,3],[2,3],[2,3],[3],[1]]],"builds":["5x3:\tenergy overflow\tgrudge\traid captain\tadrenaline\tmass increase/cursed doll","5x3+1:\tmass increase + ether predator 1","5x3+2:\tkeen blunt weapon + mass increase 2/3 + adrenaline 2/3\n\tadrenaline + mass increase + cursed doll 2"],"notes":""},{"specName":"robust spirit","stats":[["spec","crit","swift"],[1500,500,500]],"engravings":[["robust spirit","grudge","keen blunt weapon","adrenaline","cursed doll","mass increase","ether predator"],[[3],[3],[3],[1,2,3],[2,3],[2,3],[1,2]]],"builds":["5x3:\trobust spirit\tgrudge\tkeen blunt weapon\tadrenaline\tmass increase/cursed doll","5x3+1:\tmass increase/cursed doll + ether predator 1","5x3+2:\tmass increase/cursed doll + ether predator 2\n\tmass increase + cursed doll + adrenaline 2"],"notes":"mass increase requires attack speed feast or food"}]},{"className":"striker","specs":[{"specName":"deathblow","stats":[["spec","crit"],[1500,500]],"engravings":[["deathblow","grudge","ambush master","cursed doll","keen blunt weapon","adrenaline","ether predator"],[[3],[3],[3],[2,3],[3],[1,2,3],[1,2]]],"builds":["5x3:\tdeathblow\tgrudge\tambush master\tkeen blunt weapon/cursed doll\tadrenaline","5x3+1:\tkeen blunt weapon\tcursed doll\t+ adrenaline/ether predator 1","5x3+2:\t+ adrenaline/ether predator 2"],"notes":""},{"specName":"esoteric flurry","stats":[["spec","crit","swift"],[1500,500,500]],"engravings":[["esoteric flurry","grudge","ambush master","keen blunt weapon","cursed doll","mass increase","raid captain","adrenaline"],[[1,3],[3],[3],[3],[2,3],[2,3],[3],[1,2,3]]],"builds":["5x3:\tesoteric flurry\tgrudge\tambush master\tkeen blunt weapon\tadrenaline","5x3+1:\tcursed doll/mass increase + adrenaline 1","5x3+2:\tcursed doll/mass increase + adrenaline 2\tadrenaline + cursed doll/mass increase 2"],"notes":"raid captain can be used in swiftness builds\nesoteric flurry can be level 1 with only neck crit, but requires adrenaline 3"}]},{"className":"wardancer","specs":[{"specName":"esoteric skill enhancement","stats":[["spec","swift","crit"],[1500,500,500]],"engravings":[["esoteric skill enhancement","grudge","keen blunt weapon","raid captain","mass increase","cursed doll","adrenaline","ether predator"],[[1,3],[3],[3],[3],[2,3],[2,3],[1,2,3],[1]]],"builds":["4x3+2+1:\tgrudge\tkeen blunt weapon\traid captain\tmass increase/cursed doll\tadrenaline 2\tesoteric skill enhancement 1","5x3:\tgrudge\tkeen blunt weapon\traid captain\tadrenaline\tesoteric skill enhancement","5x3+1:\tmass increase/cursed doll + eso 1\nmass increase/cursed doll + eso + adrenaline 1","5x3+2:\tmass increase/cursed doll + eso + adrenaline 2"],"notes":""},{"specName":"first intention","stats":[["swift","crit"],[1500,500]],"engravings":[["first intention","grudge","raid captain","ambush master","keen blunt weapon","mass increase","cursed doll","awakening","adrenaline"],[[3],[3],[3],[3],[3],[2,3],[2,3],[1,2],[1,2,3]]],"builds":["5x3:\tfirst intention\tgrudge\traid captain\tkeen blunt weapon/ambush master\tmass increase/cursed doll","5x3+1:\t+ adrenaline/awakening 1","5s3+2:\t+ adrenaline/awakening 2"],"notes":"keen blunt weapon and ambush master cannot be used together"}]},{"className":"artillerist","specs":[{"specName":"barrage enhancement","stats":[["spec","crit","swift"],[1500,500,500]],"engravings":[["barrage enhancement","grudge","keen blunt weapon","all out attack","cursed doll","hit master","ether predator","adrenaline","firepower enhancement"],[[3],[3],[3],[2,3],[2,3],[2,3],[1],[1,2,3],[1]]],"builds":["5x3:\tbarrage enhancement\tgrudge\tkeen blunt weapon\tall out attack\tadrenaline","5x3+1:\t+ hit master 1\ncursed doll/hit master + adrenaline/ether predator 1","5x3+2:\t+ adrenaline/all out attack/hit master/cursed doll 2"],"notes":""},{"specName":"firepower enhancement","stats":[["swift","crit"],[1000,1000]],"engravings":[["firepower enhancement","grudge","adrenaline","hit master","keen blunt weapon","cursed doll","raid captain","ether predator","awakening"],[[3],[3],[1,2,3],[1,2,3],[3],[2,3],[3],[1],[1]]],"builds":["5x3:\tfirepower enhancement\tgrudge\tadrenaline\thit master\tcursed doll/keen blunt weapon/raid captain(full swift)","5x3+1\t+ ether predator/adrenaline/awakening(dom+full swift) 1","5x3+2\t+ adrenaline/cursed doll/hit master 2"],"notes":"most effective stat distributions: 1 swift ring/earring, full crit, full swift\nkeen blunt should always be taken with 1200+ crit\nraid captain only with full swift\nawakening with dominion full swift only"}]},{"className":"deadeye","nexusLink":"www.lostark.nexus/deadeye","lastUpdated":"2024/03/04","specs":[{"specName":"enhanced weapon","stats":[["spec","crit","swift"],[1500,500,500]],"engravings":[["enhanced weapon","grudge","keen blunt weapon","adrenaline","ambush master","all out attack","cursed doll","ether predator"],[[1,3],[3],[3],[1,2,3],[3],[3],[2,3],[1]]],"builds":["4x3+2+1:\tgrudge\tkeen blunt weapon\tambush master/all out attack(non positional)\tadrenaline 2\tenhanced weapon 1","5x3:\tgrudge\tkeen blunt weapon\tcursed doll\tambush master/(all out attack/adrenaline (non positional))\tenhanced weapon","5x3+1:\tambush master/(all out attack/mass increase (non positional)) + adrenaline + enhanced weapon 1\nambush master + enhanced weapon + adrenaline 1","5x3+2:\tambush master/(all out attack/mass increase (non positional)) + enhanced weapon + adrenaline 2"],"notes":"ambush master and all out attack/mass increase are not used together. spec/swift necklace sometimes used"},{"specName":"pistoleer","stats":[["spec","crit","swift"],[1500,500,500]],"engravings":[["pistoleer","grudge","precise dagger","cursed doll","adrenaline","propulsion","ether predator","mass increase","raid captain"],[[3],[3],[3],[2,3],[1,2,3],[1,3],[1],[2,3],[2,3]]],"builds":["5x3:\tpistoleer\tprecise dagger\tadrenaline\tgrudge\t(cursed doll/mass increase/propulsion/raid captain)","5x3+1:\t(cursed doll/mass increase/propulsion/raid captain) + ether predator/propulsion 1"],"notes":"cursed doll is standard. propulsion, mass increase, raid captain are \"niche\"\nspec swift necklace sometimes used"}]},{"className":"gunslinger","specs":[{"specName":"peacemaker","stats":[["crit","spec"],[1250,750]],"engravings":[["peacemaker","grudge","keen blunt weapon","hit master","cursed doll","adrenaline","ether predator"],[[1,2,3],[3],[3],[2,3],[2,3],[1,2,3],[1]]],"builds":["4x3+2+1:\tgrudge\tkeen blunt weapon\thit master\tcursed doll\tadrenaline 2\tpeacemaker 1","5x3:\tgrudge\tkeen blunt weapon\thit master\tadrenaline\tpeacemaker","5x3+1:\tcursed doll + peacemaker 1\n\tpeacemaker + ether predator/adrenaline 1","5x3+2:\tpeacemaker + cursed doll/hit master/adrenaline 2"],"notes":"crit/swift necklace for the el cheapos. technically usable. 1 (ear)ring is usually swapped for spec"},{"specName":"time to hunt","stats":[["crit","spec","swift"],[1500,500,1500]],"engravings":[["time to hunt","peacemaker","grudge","keen blunt weapon","adrenaline","hit master","cursed doll","raid captain"],[[3],[1,3],[3],[3],[1,2,3],[2,3],[2,3],[3]]],"builds":["4x3+2+1:\ttime to hunt\tgrudge\tkeen blunt weapon\thit master/raid captain(swift builds)\tadrenaline 2\tpeacemaker 1","5x3:\ttime to hunt\tpeacemaker\tgrudge\tkeen blunt weapon/raid captain(swift builds)\tadrenaline","5x3+1:\ttime to hunt\tgrudge\tkeen blunt weapon\thit master/raid captain(swift builds)\tcursed doll/adrenaline\tpeacemaker 1"],"notes":"crit main + spec is common. crit main + swift is less common. full swift + spec is less common(use raid captain)"}]},{"className":"scouter","specs":[{"specName":"AT","stats":[["crit","swift"],[1250,750]],"engravings":[["AT","grudge","raid captain","keen blunt weapon","mass increase","adrenaline"],[[1,3],[3],[3],[3],[2,3],[1,2,3]]],"builds":["5x3:\tAT\tgrudge\traid captain\tkeen blunt weapon\tadrenaline/mass increase","5x3+1:\tadrenaline + AT 1\n\tAT + adrenaline 1","5x3+2:\tmass increase + adrenaline 2\nadrenalin + mass increase 2"],"notes":"AT: cursed doll and hit master not recommended"},{"specName":"evo","stats":[["spec","crit"],[1500,500]],"engravings":[["evo","grudge","raid captain","keen blunt weapon","cursed doll","barricade","adrenaline","stabilized status"],[[1,3],[3],[3],[3],[2,3],[2,3],[1,2,3],[1,2,3]]],"builds":["5x3:\tevo\tgrudge\traid captain\tadrenaline\tkeen blunt weapon","5x3+1:\tkeen blunt weapon/barricade/adrenaline/cursed doll/evo + evo/adrenaline 1","5x3+2:\tevo + cursed doll/barricade/keen blunt weapon + adrenaline 2"],"notes":"stabilized status budget, hit master not recommended"}]},{"className":"sharpshooter","specs":[{"specName":"death strike","stats":[["crit","swift","spec"],[1500,500,500]],"engravings":[["death strike","grudge","hit master","cursed doll","keen blunt weapon","adrenaline","ether predator"],[[3],[3],[2,3],[2,3],[3],[1,2,3],[1]]],"builds":["5x3:\tdeath strike\tgrudge\thit master\tcursed doll/keen blunt weapon\tadrenaline","5x3+1:\tkeen blunt weapon + adrenaline 1\n\tadrenaline + ether predator 1","5x3+2:\t"],"notes":""},{"specName":"loyal companion","stats":[["crit","spec","swift"],[1100,900,1000]],"engravings":[["loyal companion","grudge","keen blunt weapon","hit master","cursed doll","raid captain","adrenaline","mass increase","ether predator","awakening"],[[3],[3],[3],[2,3],[2,3],[3],[1,2,3],[2,3],[1],[1]]],"builds":["5x3:\tloyal companion\tgrudge\tkeen blunt weapon\thit master\traid captain(swift)/cursed doll(spec)\n5x3 dominion:\tloyal companion\tgrudge\tkeen blunt weapon\traid captain\tadrenaline"],"notes":"spec/swift necklace is NOT used. it must be spec crit"}]},{"className":"deathblade","nexusLink":"www.lostark.nexus/deathblade","lastUpdated":"2024/04/05","specs":[{"specName":"remaining energy","stats":[["spec","crit"],[1500,500]],"engravings":[["remaining energy","grudge","ambush master","adrenaline","super charge","keen blunt weapon","cursed doll","raid captain","ether predator"],[[3],[3],[3],[1,2,3],[3],[3],[2,3],[2,3],[1]]],"builds":["5x3:\tremaining energy\tgrudge\tambush master\tadrenaline\tcursed doll/keen blunt weapon/raid captain/super charge(charge build)","5x3+1:\t+ ether predator 1","5x3+2:\t+ adrenaline/raid captain/cursed doll 2"],"notes":""},{"specName":"surge","stats":[["spec","crit"],[1500,500]],"engravings":[["surge","grudge","ambush master","adrenaline","cursed doll","keen blunt weapon","mass increase","raid captain"],[[3],[3],[3],[1,2,3],[2,3],[3],[2,3],[2,3]]],"builds":["5x3:\tsurge\tgrudge\tambush master\tadrenaline\tcursed doll/mass increase/keen blunt weapon/raid captain","5x3+1:\t+ ether predator 1","5x3+2:\t+ cursed doll/mass increase/raid captain/adrenaline 2"],"notes":""}]},{"className":"reaper","nexusLink":"www.lostark.nexus/reaper","lastUpdated":"2024/04/05","specs":[{"specName":"hunger","stats":[["spec","swift"],[1100,900]],"engravings":[["hunger","ambush master","grudge","raid captain","cursed doll","keen blunt weapon","adrenaline","mass increase","ether predator"],[[3],[3],[3],[3],[2,3],[3],[1,2,3],[1]]],"builds":["5x3:\thunger\tgrudge\tambush master\traid captain\tadrenaline","5x3+1:\tcursed doll/mass increase/keen blunt weapon + adrenaline 1\nadrenaline + ether predator 1","5x3+2:\tcursed doll/mass increase/keen blunt weapon + adrenaline 2\nadrenaline + cursed doll/mass increase 2"],"notes":""},{"specName":"lunar voice","stats":[["spec","crit","swift"],[1500,500,500]],"engravings":[["lunar voice","ambush master","keen blunt weapon","grudge","cursed doll","adrenaline"],[[3],[3],[3],[3],[2,3],[1,2,3]]],"builds":["5x3:\tlunar voice\tambush master\tkeen blunt weapon\tgrudge\tcursed doll","5x3+1:\t+ adrenaline 1","5x3+2:\t+ adrenaline 2\nadrenaline + cursed doll 2"],"notes":"spec/swift necklace is outdated"}]},{"className":"shadowhunter","nexusLink":"www.lostark.nexus/shadowhunter","lastUpdated":"2024/04/05","specs":[{"specName":"demonic impulse","stats":[["spec","crit","swift"],[1500,500,500]],"engravings":[["demonic impulse","grudge","keen blunt weapon","adrenaline","raid captain","cursed doll","hit master","ether predator"],[[3],[3],[3],[1,2,3],[2,3],[2,3],[2,3],[1]]],"builds":["5x3:\tdemonic impulse\tgrudge\tkeen blunt weapon\tadrenaline\traid captain(usually swift neck)/cursed doll/hit master","5x3+1:\t+ ether predator 1\n+ adrenaline 1 with crit hallu","5x3+2:\t+ adrenaline/raid captain/cursed doll/hit master 2"],"notes":"crit/swift necklace not used"},{"specName":"perfect suppression","stats":[["crit","swift"],[1500,1500]],"engravings":[["perfect suppression","grudge","raid captain","ambush master","keen blunt weapon","cursed doll","mass increase","adrenaline"],[[1,3],[3],[2,3],[3],[3],[2,3],[2,3],[1,2,3]]],"builds":["too many builds"],"notes":""}]},{"className":"souleater","nexusLink":"lostark.nexus/souleater","lastUpdated":"2024/04/05","specs":[{"specName":"full moon harvester","stats":[["spec","crit"],[1500,500]],"engravings":[["full moon harvester","grudge","keen blunt weapon","raid captain","cursed doll","hit master","adrenaline","ether predator"],[[3],[3],[3],[3],[2,3],[2,3],[1,2,3],[1]]],"builds":["5x3:\tfull moon\tgrudge\tkeen blunt weapon\traid captain\tcursed doll/hit master/adrenaline(nm)","5x3+1:\t+ adrenaline 1\nadrenaline + ether predator 1","5x3+2:\tadrenaline + cursed doll/hit master 2\n+ adrenaline 2"],"notes":""},{"specName":"night's edge","stats":[["crit","swift"],[1100,900]],"engravings":[["night's edge","grudge","keen blunt weapon","raid captain","adrenaline","cursed doll","ether predator"],[[3],[3],[3],[3],[1,2,3],[2,3],[1]]],"builds":["5x3:\tnight's edge\tgrudge\tkeen blunt weapon\traid captain\tadrenaline","5x3+1:\tcursed doll + adrenaline 1","5x3+2:\tadrenaline + cursed doll 2\ncursed doll + adrenaline 2"],"notes":"many different combinations of crit swift until 50/50. crit does not go below this"}]},{"className":"aeromancer","nexusLink":"www.lostark.nexus/aeromancer","lastUpdated":"2024/04/05","specs":[{"specName":"drizzle","stats":[["spec","crit"],[1500,500]],"engravings":[["drizzle","grudge","hit master","keen blunt weapon","adrenaline","cursed doll","ether predator"],[[3],[3],[3],[3],[1,2,3],[2,3],[1]]],"builds":["5x3:\tdrizzle\tgrudge\thit master\tadrenaline\tkeen blunt weapon/tcursed doll","5x3+1:\tadrenaline + ether predator 1\ncursed doll + adrenaline 1","5x3+2:\tadrenaline + cursed doll 2\ncursed doll + adrenaline 2"],"notes":""},{"specName":"wind fury","stats":[["swift","crit"],[1200,800]],"engravings":[["wind fury","grudge","raid captain","adrenaline","hit master","cursed doll","precise dagger","ether predator","awakening"],[[3],[3],[3],[1,2,3],[3],[2,3],[3],[1],[1]]],"builds":["5x3:\twind fury\tgrudge\traid captain\tadrenaline\thit master/cursed doll","5x3+1:\tadrenaline + ether predator 1\ncursed doll + adrenaline 1","5x3+2:\tcursed doll + adrenaline 2\nadrenaline + cursed doll 2"],"notes":""}]},{"className":"artist","nexusLink":"www.lostark.nexus/artist","lastUpdated":"2024/04/05","specs":[{"specName":"full bloom","stats":[["swift","spec"],[1500,500]],"engravings":[["full bloom","awakening","expert","heavy armor","vital point hit","max mp increase","spirit absorption","magick stream","drops of ether","crisis evasion","explosive expert"],[[1,2,3],[3],[3],[1,2,3],[3],[2,3],[2,3],[3],[3],[1],[1]]],"builds":["5x3:\tfull bloom\tawakening\texpert\theavy armor\tvital point hit","5x3+1:\t+ crisis evasion 1\nfull bloom 1 + max mp increase/magick stream/spirit absorption","4x3+2+2:\tvital point hit + heavy armor/spirit absorption/max mp increase 2"],"notes":""}]}];

    const dictName = [[["arcana"], ["empress", "empress's grace"], ["emperor"], ["sorc"], ["co", "CO"], ["bt", "BT"], ["destro"], ["rh", "RH"], ["gt", "GT"], ["red", "redlancer"], ["blue", "bluelancer"], ["shock"], ["taijutsu", "tai"], ["EO", "eo"], ["wd", "WD"], ["ese", "ESE"], ["fi", "FI"], ["arti"], ["barrage"], ["fpe", "FPE"], ["de", "DE"], ["ew", "EW"], ["gs", "GS"], ["tth", "TTH"], ["pm", "PM"], ["machinist"], ["arthetinean skill"], ["evolutionary legacy"], ["ss", "SS"], ["lc", "LC"], ["lunar"], ["sh", "SH"], ["di", "DI"], ["ps", "PS"], ["se", "SE"], ["ne", "NE"], ["full moon", "fm", "FM", "fmh", "FMH"], ["aero"], ["wf", "WF", "windfury"], ["db", "DB"]], ["arcanist", "empress' grace", "order of the emperor", "sorceress", "communication overflow", "berserker's technique", "destroyer", "rage hammer", "gravity training", "lone knight", "combat readiness", "shock training", "taijutsu", "energy overflow", "wardancer", "esoteric skill enhancement", "first intention", "artillerist", "barrage enhancement", "firepower enhancement", "deadeye", "enhanced weapon", "gunslinger", "time to hunt", "peacemaker", "scouter", "AT", "evo", "sharpshooter", "loyal companion", "lunar voice", "shadowhunter", "demonic impulse", "perfect suppression", "souleater", "night's edge", "full moon harvester", "aeromancer", "wind fury", "deathblade"]];
    const dictArgs = [[["e", "eng", "engs"]], ["engravings"]];
    const dictEngs = [[["hm"], ["cd"], ["kbw", "keen blunt"], ["doe", "DOE"], ["aoa", "AOA", "all-out attack"], ["barri"], ["vph, VPH"], ["rc", "RC"], ["ep", "EP"], ["mb", "MB"], ["mi", "MI", "mass", "increase mass"]], ["hit master", "cursed doll", "keen blunt weapon", "drops of ether", "all out attack", "barricade", "vital point hit", "raid captain", "ether predator", "master brawler", "mass increase"]];
    const dictStats = ["spec", "crit", "swift"];
    if (command === "help") {
        return "print: print [subject] [options]\n" +
            "\tprints information about a spec or class\n" +
            "\t\n" +
            "\tsubject (required):\n" +
            "\t\t[className]\t\t\tspecify a class name. prints all info\n" +
            "\t\t[specName]\t\t\tspecify a spec name. prints all info\n" +
            "\t\n" +
            "\toptions (optional):\n" +
            "\t\tengravings, engs, eng, e\t\t\tprints only engravings\n" +
            "\t\tstats\t\t\t\t\t\t\t\tprints only stats\n" +
            "\t\tbuilds\t\t\t\t\t\t\t\tprints only builds\n" +
            "\t\n" +
            "\tEXAMPLES:\n" +
            "\t\tprint hunger\n" +
            "\t\tprint sh\n" +
            "\t\tprint db engs\n" +
            "\n" +
            "search: search [arg1] [arg2] [arg3...arg n]\n" +
            "\tsearch who uses engraving(s) and stat(s). useful for searching accessories\n" +
            "\n" +
            "\targs:\n" +
            "\t\t[engraving]\n" +
            "\t\t[engraving] [node]\n" +
            "\t\t[stat]\n" +
            "\t\t\n" +
            "\tEXAMPLES:\n" +
            "\t\tsearch spec crit raid-captain grudge\n" +
            "\t\tsearch spec rc grudge\n" +
            "\t\tsearch spec rc 3 grudge 5\n" +
            "\t\tsearch cd spec rc crit all-out-attack 5\n" +
            "\t\t\n" +
            "cls: clears the terminal\n" +
            "exit: closes the page";
    }
    switch (command.substring(0, command.indexOf(" "))) {
        case "print":
            //return
            return cmdPrint();
            break;
        case "search":
            return cmdSearch();
            break;
        default:
            return "unknown command. enter \"help\" for help";
    }



    function cmdSearch() {
        let tempString = "";

        let args = commandToArgs(command);
        let stats = [];
        let engravings = [[], []]; //[[name], [nodes]]
        let pushed = false;
        for (let i = 0; i < args.length; i++) {
            for (let j = 0; j < dictStats.length; ++j) {
                if (args[i] === dictStats[j]) {
                    stats.push(args[i]);
                    pushed = true;
                    break;
                }
            }
            if (pushed === false && isNaN(parseInt(args[i + 1])) === true) {
                engravings[0].push(spellcheck(spellcheck(args[i], dictEngs), dictName)); //engravings prioritized over name if dupe
                engravings[1].push(undefined);
            } else if (pushed === false && isNaN(parseInt(args[i + 1])) === false) {
                engravings[0].push(spellcheck(spellcheck(args[i], dictEngs), dictName));
                engravings[1].push(args[i + 1]);
                i++;
            }
            pushed = false;
        }
        // for (let i = 0; i < engravings.length; ++i) {
        //     for (let j = 0; j < engravings[i].length; j++) {
        //         tempString = tempString + "\n" + engravings[i][j]);
        //     }
        // }
        if (engravings[1].length > 1) {
            tempString = tempString + "\n" + printAccessory(stats, engravings);
        }
        tempString = tempString + "\n" + "";
        let engMatches = searchEngravings(engravings);
        let statMatches = searchStats(stats);
        let perfectMatches = [];
        let temp = {};
        for (let i = 0; i < engMatches.length; ++i) {
            for (let j = 0; j < statMatches.length; ++j) {
                if (engMatches[i].class === statMatches[j].class && engMatches[i].spec === statMatches[j].spec) {
                    temp.class = engMatches[i].class;
                    temp.spec = engMatches[i].spec;
                    temp.warnings = engMatches[i].warnings;
                    perfectMatches.push(temp);
                    temp = {};
                    break;
                }
            }
        }
        for (let i = 0; i < perfectMatches.length; ++i) {
            tempString = tempString + "\n" + "[MATCH] class: " + perfectMatches[i].class + ", spec: " + perfectMatches[i].spec;
            for (let j = 0; j < perfectMatches[i].warnings.length; ++j) {
                for (let k = 0; k < perfectMatches[i].warnings[j].length; k++) {
                    tempString = tempString + "\n" + "WARNING: " + perfectMatches[i].warnings[j][k];
                }
            }
        }
        if (perfectMatches.length === 0) {
            tempString = tempString + "\n" + "no matches found";
        }

        return tempString;
    }

    function commandToArgs(command) {
        const whitespaces = getWhitespaces(command);
        //remove stats
        let args = [];
        for (let i = 0; i < whitespaces.length - 1; ++i) {
            args.push(command.substring(whitespaces[i] + 1, whitespaces[i + 1]).replaceAll(new RegExp("[-_]", "g"), " "));
        }
        args.push(command.substring(whitespaces[whitespaces.length - 1] + 1).replaceAll(new RegExp("[-_]", "g"), " "));
        return args;
    }

    function cmdPrint() {
        //print arcana all
        const whitespaces = getWhitespaces(command);
        let arg1 = command.substring(whitespaces[0] + 1, whitespaces[1]);
        let arg2;
        if (whitespaces.length > 1) {
            arg2 = command.substring(whitespaces[1] + 1);
            arg2 = spellcheck(arg2.replaceAll(new RegExp("[-_]", "g"), " "), dictArgs);
        }
        arg1 = spellcheck(arg1.replaceAll(new RegExp("[-_]", "g"), " "), dictName);
        for (let i = 0; i < data.length; ++i) {
            if (data[i].className === arg1) {
                return printClass(data[i]);
            } else {
                for (let j = 0; j < data[i].specs.length; ++j) {
                    if (data[i].specs[j].specName === arg1 && arg2 == undefined) {
                        return printSpec(data[i].specs[j]);
                    } else if (data[i].specs[j].specName === arg1) {
                        switch (arg2) {
                            case "engravings":
                                return printSpecEngravings(data[i].specs[j]);
                                break;
                            case "stats":
                                return printSpecStats(data[i].specs[j]);
                                break;
                            case "builds":
                                return printSpecBuilds(data[i].specs[j]);
                                break;
                        }
                    }
                }
            }
        }
    }

    function printAccessory(stats, engravings) {
        let tempString = "";

        if (stats.length > 1) {
            tempString = tempString + "necklace";
        } else {
            tempString = tempString + "(ear)ring";
        }
        for (let i = 0; i < stats.length; ++i) {
            tempString = tempString + "\n" + stats[i];
        }
        for (let i = 0; i < engravings[0].length; ++i) {
            if (engravings[1][i] != undefined) {
                tempString = tempString + "\n" + engravings[0][i] + " " + engravings[1][i];
            } else {
                tempString = tempString + "\n" + engravings[0][i];
            }
        }
        return tempString;
    }

    function getWhitespaces(command) {
        let whitespaces = [];
        let lastIndex = -1;
        while (command.indexOf(" ", lastIndex + 1) != -1) {
            whitespaces.push(command.indexOf(" ", lastIndex + 1));
            lastIndex = command.indexOf(" ", lastIndex + 1);
        }
        return whitespaces;
    }

    function spellcheck(word, dict) {
        for (let i = 0; i < dict[0].length; ++i) {
            for (let j = 0; j < dict[0][i].length; ++j) {
                if (word === dict[0][i][j]) {
                    return dict[1][i];
                }
            }
        }
        return word;
    }

    function searchEngravings(query) {
        let matches = []
        let temp = {};
        temp.warnings = [];
        let engMatches = 0;
        for (let i = 0; i < data.length; ++i) {
            for (let j = 0; j < data[i].specs.length; ++j) {
                for (let k = 0; k < data[i].specs[j].engravings[0].length; ++k) {
                    for (let m = 0; m < query[0].length; ++m) {
                        if (data[i].specs[j].engravings[0][k] === query[0][m]) {
                            engMatches++;
                            if (isNaN(query[1][m]) === false) {
                                temp.warnings.push(getEngWarnings(data[i].specs[j], k, query[1][m]));
                            }
                        }
                    }
                }
                if (engMatches === query[0].length) {
                    temp.class = data[i].className;
                    temp.spec = data[i].specs[j].specName;
                    matches.push(temp);
                }
                temp = {};
                temp.warnings = [];
                engMatches = 0;
            }
        }
        return matches;
    }

    function getEngWarnings(specData, engravingIndex, engravingNodes) {
        let data = specData;
        let notes = [];
        if (engravingNodes > 3 && data.specName === data.engravings[0][engravingIndex]) {
            if (data.engravings[1][engravingIndex].length === 1 && data.engravings[1][engravingIndex][0] === 3) {
                notes.push(data.engravings[0][engravingIndex] + " is a class engraving that is only used at level 3. a legendary book is normally used, and this accessory has " + engravingNodes + " nodes.");
            }
        }
        if (engravingNodes > 3 && data.engravings[1][engravingIndex].length === 1 && data.engravings[1][engravingIndex][0] === 2) {
            notes.push(data.engravings[0][engravingIndex] + " is only used at level 2 - most likely the +2 in 5x3+2. 9/7 stone is required so the +2 must be 3 nodes. this accessory has " + engravingNodes + " nodes.");
        }
        if (engravingNodes < 5) {
            if (data.engravings[1][engravingIndex].length === 1 && data.engravings[1][engravingIndex][0] === 1) {
                notes.push(data.engravings[0][engravingIndex] + " is only used at level 1. accessory with only " + engravingNodes + " nodes can't be used");
            }
        }
        return notes;
    }

    function searchStats(query) {
        let matches = []
        let temp = {};
        let statMatches = 0;
        let isNecklace = false;
        if (query.length > 1) {
            isNecklace = true;
        }
        for (let i = 0; i < data.length; ++i) {
            for (let j = 0; j < data[i].specs.length; ++j) {
                for (let k = 0; k < data[i].specs[j].stats[0].length; ++k) {
                    for (let l = 0; l < query.length; ++l) {
                        if (data[i].specs[j].stats[0][k] === query[l] && ((isNecklace === false && data[i].specs[j].stats[1][k] === 500) === false)) {
                            statMatches++;
                        }
                    }
                }
                if (statMatches === query.length) {
                    temp.class = data[i].className;
                    temp.spec = data[i].specs[j].specName;
                    matches.push(temp);
                }
                temp = {};
                statMatches = 0;
            }
        }
        return matches;
    }

    function printClass(data) {
        let tempString = "";

        let classData = data;
        let specData;
        tempString = tempString + "\n" + classData.className;
        for (let i = 0; i < classData.specs.length; ++i) {
            specData = classData.specs[i];
            tempString = tempString + "\n" + printSpec(specData);
            if (i < classData.specs.length - 1) {
                tempString = tempString + "\n" + "";
            }
        }
        return tempString;
    }

    function printSpec(data) {
        let tempString = "";
        let specData = data;
        tempString = tempString + specData.specName;
        tempString = tempString + "\n" + printSpecStats(data);
        tempString = tempString + "\n" + printSpecEngravings(data);
        tempString = tempString + "\n" + printSpecBuilds(data);
        tempString = tempString + "\n" + printSpecNotes(data);
        return tempString;
    }

//todo loop through engravings[1]
    function printSpecEngravings(data) {
        let line = "";
        let specData = data;
        for (let i = 0; i < specData.engravings[0].length - 1; ++i) {
            line = line + specData.engravings[0][i] + "\t" + specData.engravings[1][i] + "\n";
        }
        line = line + specData.engravings[0][specData.engravings[0].length - 1] + "\t" + specData.engravings[1][specData.engravings[0].length - 1];
        return line;
    }

    function printSpecStats(data) {
        let line = "";
        let specData = data;
        for (let i = 0; i < specData.stats[0].length - 1; ++i) {
            line = line + specData.stats[0][i] + "\t" + specData.stats[1][i] + "\n";
        }
        line = line + specData.stats[0][specData.stats[0].length - 1] + "\t" + specData.stats[1][specData.stats[0].length - 1];
        return line;
    }

    function printSpecBuilds(data) {
        let tempString = "";
        let line = "";
        let specData = data;
        for (let i = 0; i < specData.builds.length - 1; ++i) {
            line = line + specData.builds[i] + "\n";
        }
        line = line + specData.builds[specData.builds.length - 1];
        return line;
    }

    function printSpecNotes(data) {
        let tempString = "";
        let specData = data;
        return "notes: " + specData.notes;
    }

    /*
    search accessory
    print [name][content]
        subject: union class name and spec names
        content: standard-builds, stat-distribution, engravings, notes

    who-uses --engravings [engravings] --stat

    accessory-search stat, engraving + node, engraving + node


    function getParameters(string) {
    print arcana stats
    expected output: [[][[arcana][stats]]]



    return [[options][[op1 params][op 2 params][op 3 params]]
    }

    */
}