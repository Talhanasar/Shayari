let Hindi = [`Zindagi Har Pal Kuchh Khaas Nahi Hoti,
Phoolo Ki Khushboo Hamesha Paas Nahi Hoti,
Milna Humari Takdeer Mein Tha Varna,
Itni Pyari Dosti ittefaaq Nahi Hoti.`, `Tum Dost Ban Ke Aise Aaye Zindagi Mein,Ki Hum Yeh Zamana Hi Bhool Gaye,Tumhein Yaad Aaye Na Aaye Humari Kabhi,Par Hum To Tumhein Bhulaana Hi Bhool Gaye.`, `Aap Jiske Waste Mujhse Kinara Kar Gaye,
Aapse Bach Kar Wahi Mujhko Ishara Kar Gaye.`, `Dosti Kis Se Na Thi Kis Se Mujhe Pyar Na Tha,
Jab Bure Waqt Pe Dekha To Koi Yaar Na Tha.`];
let english = ["Why don't scientists trust atoms? Because they make up everything!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
  "Did you hear about the claustrophobic astronaut? He just needed a little space.",
  "Why don't oysters donate to charity? Because they are shellfish.",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "I couldn't figure out how the seatbelt worked. Then it just clicked.",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I asked the librarian if they had any books on paranoia. She whispered, 'They're right behind you.'",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "I only know 25 letters of the alphabet. I don't know y.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
  "Why did the math book look sad? Because it had too many problems.",
  "What do you get when you cross a snowman with a vampire? Frostbite.",
  "I used to play piano by ear, but now I use my hands."];
let urdu = ["تمہاری یادوں کی خوشبو میری سانسوں میں گم ہو گئی۔",
  "دل کی دھڑکن بڑھ گئی ہے تمہاری یادوں کے ساتھ۔",
  "تمہاری باتوں کی گلیوں میں پھولوں کی بوندیں ہیں۔",
  "تمہاری مسکراہٹ میری دنیا کو روشنی دیتی ہے۔",
  "تمہاری بنائی ہوئی ہر خواب میری آنکھوں کا تارا ہے۔",
  "تمہاری یادیں میری راتوں کو چاندنی بنا دیتی ہیں۔",
  "جب سے تم میری زندگی میں آئے ہو، دنیا رنگین ہو گئی ہے۔",
  "تمہاری بنی ہوئی محبت کی قصائی سب کو یاد رہیں گی۔",
  "تمہاری ہر بات میری دل کی طرف چھوٹ پہنچاتی ہے۔",
  "تمہاری حضور میں وقت کی رفتار کم ہو جاتی ہے۔"];
let check = document.getElementById("choose");
let arr = Hindi;
let i = 0;
const run = () => {
  if (i == arr.length) {
    i = 0;
  }
  show.innerHTML = arr[i];
  console.log(i);
}
run();
const search = () => {
  if (check.selectedIndex == 0) {
    arr = Hindi;
    i = 0;
    run();
  } else if (check.selectedIndex == 1) {
    arr = english;
    i = 0;
    run();
  } else {
    arr = urdu;
    i = 0;
    run();
  }
}
document.getElementById("search").addEventListener("click", search);

let go = document.getElementById("next");
go.addEventListener("click", () => {
  i++;
  run();
});