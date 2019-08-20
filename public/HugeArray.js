// // let arr = ["A",
// // "B","D", "H", "P", "Q", "I", "R", "S", "E", "J", "T", "U", "K", "V", "W",
// // "C", "F", "L", "X", "Y", "M", "Z", "1", "G", "N", "2", "3", "O", "4", "5"];


// let arr = [
// "Does your character work for the park?",      //A
// "Is your character physically capable?",      //B
// "Is your character skinny?",      //D
// "Is your character a goat?",      //H 
// "Thomas the intern!",      //P
// "Pops the big head",      //Q
// "Is your character smart?",      //I  
// "I think of skips!",      //R
// "you know who else isn't smart? MY MOM! (Muscleman)",      //S
// "Is your character lazy?",      //E
// "Is your character a blue bird?",      //J 
// "Moredcaiiiiiii",      //T
// "Rigbone",      //U
// "Is your character a gumball machine?",      //K 
// "Benson. YOU'RE FIRED!",      //V
// "Hi-Five Ghost",      //W
// "Is your character female?",      //C
// "Does she work at a coffee shop?",      //F
// "Is your character romantically involved with the main character?",      //L
// "Margaret the red bird",      //X
// "Eileen",      //Y
// "Is your character fat?",      //M 
// "Starla the fatty",      //Z
// "CJ aka Cloudy J",      //1
// "Is your character a divine being?",      //G
// "Is your character a baby?",      //N
// "Guardians of Eternal Youth",      //2
// "Gary",      //3
// "Is your character related to Rigby?",      //O
// "Don the accountant",      //4
// "Mr. Maellard the stickler"       //5
// ];     

let arr = [
{ character: "Does your character work for the park?", img: "none" },  //A
{ character: "Is your character physically strong?", img: "none" },  //B
{ character: "Is your character skinny?", img: "none" },  //D
{ character: "Is your character a goat?", img: "none" },  //H
{ character: "Thomas the intern!", img: "https://vignette.wikia.nocookie.net/theregularshow/images/9/98/Thomas_render.png/revision/latest?cb=20140309200913" },  //P (leaf) 
{ character: "Pops the big head", img: "https://vignette.wikia.nocookie.net/regularshowfanon/images/2/26/Pops_character.png/revision/latest?cb=20140212194653" },  //Q (leaf)
{ character: "Is your character smart?", img: "none" },  //I
{ character: "I think of skips!", img: "https://vignette.wikia.nocookie.net/theregularshow/images/6/6a/Skips_character.png/revision/latest?cb=20190612120609" },  //R (leaf)
{ character: "Muscle Man", img: "https://vignette.wikia.nocookie.net/theregularshow/images/1/1e/Muscle_hq.png/revision/latest?cb=20190612191629" },  //S (leaf)
{ character: "Is your character lazy?", img: "none" },  //E
{ character: "Is your character a blue bird?", img: "none" },  //J
{ character: "Moredcaiiiiiii", img: "https://vignette.wikia.nocookie.net/theregularshow/images/8/89/Latest-3.png/revision/latest?cb=20190612191655" },  //T (leaf)
{ character: "Rigbone", img: "https://vignette.wikia.nocookie.net/theregularshow/images/d/dd/Rigby.png/revision/latest?cb=20190612191840" },  //U (leaf)
{character: "Is your character a gumball machine?", img: "none" },  //K
    { character: "Benson. YOU'RE FIRED!", img: "https://vignette.wikia.nocookie.net/theregularshow/images/c/c2/Benson_character.png/revision/latest?cb=20190612191922" },  //V (leaf)
{ character: "Hi-Five Ghost", img: "https://vignette.wikia.nocookie.net/theregularshow/images/1/17/Hi_Five_Ghost.png/revision/latest/scale-to-width-down/250?cb=20190126221941" },  //W (leaf)
{ character: "Is your character female?", img: "none" },  //C
{ character: "Does she work at a coffee shop?", img: "none" },  //F
{ character: "Is your character romantically involved with the main character?", img: "none" },  //L
{ character: "Margaret the red bird", img: "https://vignette.wikia.nocookie.net/theregularshow/images/9/9b/Reg_margaret.png/revision/latest?cb=20190612191810" },  //X (leaf)
{ character: "Eileen", img: "https://vignette.wikia.nocookie.net/theregularshow/images/e/e0/Littlemolegirl.png/revision/latest?cb=20120923212746" },  //Y (leaf)
{ character: "Is your character fat?", img: "none" },  //M
{ character: "Starla the fatty", img: "https://vignette.wikia.nocookie.net/theregularshow/images/6/68/Starla%21_2.png/revision/latest?cb=20121013201856" },  //Z (leaf)
{ character: "CJ aka Cloudy J", img: "https://vignette.wikia.nocookie.net/theregularshow/images/c/c9/CJ_Full.PNG/revision/latest?cb=20180115185658" },  //1 (leaf)
{ character: "Is your character a divine/holy being?", img: "none" },  //G 
{ character: "Is your character a baby?", img: "none" },  //N
{ character: "Guardians of Eternal Youth", img: "https://vignette.wikia.nocookie.net/theregularshow/images/d/d0/Reginald.png/revision/latest/scale-to-width-down/220?cb=20180719111803" },  //2 (leaf)
{ character: "Gary", img: "https://vignette.wikia.nocookie.net/theregularshow/images/5/5f/Reg_174x252_gary.png/revision/latest?cb=20121231102532" },  //3 (leaf)
{ character: "Is your character related to Rigby?", img: "none" },  //0
{ character: "Don the accountant", img: "https://vignette.wikia.nocookie.net/theregularshow/images/2/24/Don.png/revision/latest?cb=20180719112610" },  //4 (leaf)
{ character: "Mr. Maellard the stickler", img: "https://vignette.wikia.nocookie.net/theregularshow/images/8/88/Mr._Maellard.png/revision/latest?cb=20180719154528" },  //5 (leaf)
]


let array = ["A", "B", "D", "H", "P", "6", "7", "Q", "8", "9", "I", "R", "10", "11", "S", "12", "13", "E", "J", "T", "14", "15", "U", "16", "17", "K", "V", "18", "19", "W", "20", "21", "C", "F", "L", "X","22", "23", "Y", "24", "25", "M", "Z", "26", "27", "1", "28", "29", "G", "N", "2", "30", "31", "3", "32", "33", "O", "4", "34", "35", "5","36", "37"]


let array2 = [
    { hero: "is your hero DPS?", img: "none" }, //A
    { hero: "Is your character male?", img: "none" }, //B
    { hero: "is your character HIGHLY mobile?", img: "none" }, //D
    { hero: "can your character climb walls?", img: "none" }, //H
    { hero: "Does your character use a sword?", img: "none" }, //P
    { hero: "Genji", img: "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/d8/Genji-portrait.png/1200px-Genji-portrait.png" }, //6
    { hero: "Hanzo", img: "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/a/a0/Hanzo-portrait.png/1200px-Hanzo-portrait.png" }, //7
    { hero: "Is your character bald?", img: "none" }, //Q
    { hero: "Doomfist", img: "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/15/Doomfist_Artwork.png" }, //8
    { hero: "Junkrat", img: "https://shop.zombster.com.au/11937-medium_default/nd949-overwatch-junkrat-classic-skin-edition-nendoroid.jpg" }, //9
    { hero: "Does your character have something covering his mouth?", img: "none" }, //I
    { hero: "Does your character have two guns?", img: "none" }, //R
    { hero: "Reaper", img: "http://i.imgur.com/9WYomb7.png" }, //10
    { hero: "Soldier 76", img: "https://www.previewsworld.com/SiteImage/CatalogImage/STL100195?type=" }, //11
    { hero: "Does your character have a stun?", img: "none" }, //S
    { hero: "Mccree", img: "https://res.cloudinary.com/teepublic/image/private/s--WifoDq8m--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1517953130/production/designs/2343918_0.jpg" }, //12
    { hero: "Torbjorn", img: "https://media.artoyz.net/shop/30285-thickbox_default/funko-pop-torbjoern-overwatch.jpg" }, //13
    { hero: "Can your character place anything that the enemy can destroy?", img: "none" }, //E
    { hero: "Does your character have hard CC?", img: "none" }, //J
    { hero: "Can your character teleport?", img: "none" }, //T
    { hero: "Sombra", img: "https://i.pinimg.com/236x/26/60/a0/2660a0878a10cb621a5905a2b53941e9.jpg" }, //14
    { hero: "Mei", img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4dd51119-48a7-4770-a38a-a8cb955aa590/daaexfi-2ad29ced-1948-4ecf-ac28-936b704615a6.png/v1/fill/w_702,h_1138,strp/mei_overwatch_chibi__fixed_free__by_aplocads_daaexfi-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU5NCIsInBhdGgiOiJcL2ZcLzRkZDUxMTE5LTQ4YTctNDc3MC1hMzhhLWE4Y2I5NTVhYTU5MFwvZGFhZXhmaS0yYWQyOWNlZC0xOTQ4LTRlY2YtYWMyOC05MzZiNzA0NjE1YTYucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KCan0-XEBmOANhB2McHLUao0Ky4P5P7xqs0J4AS80l4" }, //15
    { hero: "Is your character linked with spiders?", img: "none" }, //U
    { hero: "Widowmaker", img: "https://i.ya-webdesign.com/images/widowmaker-gun-png-4.png" }, //16
    { hero: "Symmetra", img: "https://i.pinimg.com/474x/54/ec/9d/54ec9dd157a779dc4f68975b32864760.jpg" }, //17
    { hero: "Does your character have an ability that can knock people back?", img: "none" }, //K
    { hero: "Does your character have a scoped weapon?", img: "none" }, //V
    { hero: "Ashe", img: "https://gear.blizzard.com/media/catalog/product/cache/bbd5b070767a685ab3ef77078f819657/1/9/19-ow-nendoroid-ashe-tile.png" }, //18
    { hero: "Pharah", img: "https://cdn.shopify.com/s/files/1/1211/8882/products/Pharah_grande.jpg?v=1467055862" }, //19
    { hero: "Is your character blinking everywhere?", img: "none" }, //W
    { hero: "I'm already Tracer", img: "https://res.cloudinary.com/teepublic/image/private/s--_SOO9nUT--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1481922595/production/designs/958449_1.jpg" }, //20
    { hero: "Bastion", img: "https://media.entertainmentearth.com/assets/images/4aa710a169fd42c4b17127cb48e0c09blg.jpg" }, //21
    { hero: "Does your character provide a shield to allies?", img: "none" }, //C
    { hero: "Is your character female?", img: "none" }, //F
    { hero: "Does your character's ult boost allies' stats", img: "none" }, //L
    { hero: "Can your character heal others?", img: "none" }, //X
    { hero: "Brigitte", img: "https://i.pinimg.com/736x/7c/0d/7a/7c0d7aac8afa494a4d5227fcc2e25ea7.jpg" }, //22
    { hero: "Orisa", img: "https://i.redd.it/6iuxhe6q3k821.png" }, //23
    { hero: "Does your character have two ults?", img: "none" }, //Y
    { hero: "D.VA", img: "https://i.pinimg.com/originals/10/d0/59/10d059087f8d4dd90358e50ee0d79ceb.jpg" }, //24
    { hero: "Zarya", img: "https://res.cloudinary.com/teepublic/image/private/s--sZjs-Zb5--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1481923005/production/designs/958460_1.jpg" }, //25
    { hero: "Does your character have the ability to knock enemies down?", img: "none" }, //M 
    { hero: "Is your character floating?", img: "none" }, //Z
    { hero: "Sigma", img: "https://vignette.wikia.nocookie.net/overwatch/images/5/54/Sigma_portrait.png/revision/latest?cb=20190724032655" }, //26
    { hero: "Reinhardt", img: "https://cdn130.picsart.com/246439162005212.png?r1024x1024" }, //27
    { hero: "Is your character an animal?", img: "none" }, //1
    { hero: "Winston", img: "https://res.cloudinary.com/teepublic/image/private/s--YF10QYg8--/t_Preview/b_rgb:fffffe,c_limit,f_jpg,h_630,q_90,w_630/v1476922000/production/designs/744078_1.jpg" }, //28
    { hero: "Baptiste", img: "https://pm1.narvii.com/7119/7a44e925d4be2c77365ecce7117786c9dded2777r1-940-1040v2_00.jpg" }, //29
    { hero: "Does your character have the ability to physically change the enemy's location? (pull/push)", img: "none" }, //G
    { hero: "Is your character mobile?", img: "none" }, //N
    { hero: "Can you character wallride?", img: "none" }, //2
    { hero: "Lucio", img: "https://i.pinimg.com/originals/c3/3a/4e/c33a4e25e58ed898ccc37519ff829d14.jpg" }, //30
    { hero: "Wrecking Ball", img: "https://cdn.shopify.com/s/files/1/1211/8882/products/Hammond_WEB_large.jpg?v=1535554166" }, //31
    { hero: "Does your character have over a thousand HP?", img: "none" }, //3
    { hero: "B.O.B", img: "https://i.pinimg.com/736x/03/34/5f/03345f52b52bc508bf9a5c2cec39b432.jpg" }, //32
    { hero: "RoadHog", img: "https://i.pinimg.com/originals/42/13/6d/42136d6a9dfc326d265757c7ff51cb17.jpg" }, //33
    { hero: "Does your character use orbs?", img: "none" }, //O
    { hero: "Is your character an ominic?", img: "none" }, //4
    { hero: "Zenyatta", img: "https://i.pinimg.com/736x/2a/09/ef/2a09efdbefee0f527e892b6904f0f4e1.jpg" }, //34
    { hero: "Moira", img: "https://cdnb.artstation.com/p/assets/images/images/009/212/779/large/bailey-collins-pescei-moira.jpg?1517742472" }, //35
    { hero: "Can your character put enemies to sleep?", img: "none" }, //5
    { hero: "Ana", img: "https://www.trzcacak.rs/myfile/detail/241-2410385_ana-anaoverwatch-overwatch-cute-cuteana-grandma-chibi-ana.png" }, //36
    { hero: "Mercy", img: "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/d2/Mercy-portrait.png/700px-Mercy-portrait.png?version=cb2bcf068efc97253d2f1cd2e8aa8c38" } //37
     
]