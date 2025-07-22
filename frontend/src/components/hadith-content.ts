import createHadithContentHeader from "./hadith-content-header";
import createHadithContentBody from "./hadith-content-body";
import createHadithContentFooter from "./hadith-content-footer";
import render from "../lib/dom";
import type { Hadith } from "../types";

export const hadithSample: Hadith = {
  id: "6181",
  title:
    "When one-third of the night had passed, the Messenger of Allah (may Allah's peace and blessings be upon him) would get up and call out: O people, remember Allah",
  hadeeth: `Ubayy ibn Ka‘b (may Allah be pleased with him) reported: When one-third of the night had passed, the Messenger of Allah (may Allah's peace and blessings be upon him) would get up and call out: 'O people, remember Allah. The Rājifah has come (the first blowing of the Horn which will shake the whole universe and thus cause all life to cease), followed by the Rādifah (the second blowing of the Horn which will restore life and thus mark the Resurrection Day). Death has approached with all that it comprises. Death has approached with all that it comprises." I said: "O Messenger of Allah, I frequently invoke Allah's peace and blessings upon you. How much of my supplication should I devote to you?" He said: "As much as you wish." I said: 'A quarter?' He said: "As much as you wish, and if it is more, then it will be better for you." I said: "Then, one half?" He said: "As much as you wish, and if it is more, then it will be better for you." I said: "Then, two- thirds?" He said: "As much as you wish, and if it is more, then it will be better for you." I said: "Shall I devote all my supplication to invoke Allah's peace and blessings upon you?" He said: "Then, you will be relieved of your worries and your sins will be forgiven."`,
  attribution: "Narrated by At-Termedhy - Narrated by Ahmad",
  grade: "Good hadith",
  explanation: `It is mentioned in the beginning of the Hadīth that when the Prophet (may Allah's peace and blessings be upon him) got up after one third of the night had passed, he would say to his followers: "O people, mention Allah," to wake them up from the state of heedlessness, and to encourage them to do the things that will earn them Allah's pleasure and His complete mercy. He reminds them to mention Allah with their tongues and their hearts so that the fruits of Allah's remembrance would lead them to do more good deeds and shun bad deeds. The Hadīth also indicates that the person may have a supplication that he asks for himself, and he may make one third of his supplication for the Prophet by sending peace and blessings upon him. He may also dedicate half of his supplication to the Prophet or even all of it, by invoking Allah's peace and blessings upon him instead of supplicating for himself. It was stated in an authentic Hadīth reported by Abu Hurayrah (may Allah be pleased with him) that the Prophet (may Allah's peace and blessings be upon him) said: "Whoever sends Salāh upon me one time, then Allah will send Salāh upon him ten times." [Muslim 1/306, no. 408] The reward for his Salāh upon the Prophet is sufficient for him, and it is for this reason that he said: ''Then you will be relieved of your worries and your sins will be forgiven." In other words, when you supplicated for yourself, you asked for the removal of harm that causes worries and entails sin. If you send Salāh upon me instead of making this supplication for yourself, then you will be granted what you asked for. Another possible meaning of this Hadīth is dedicating part of his supplication to the Prophet, as if he meant that whenever he supplicated for himself, he invoked Allah's peace and blessings upon the Prophet, so both would go together in compliance with all texts.`,
  hints: [],
  categories: ["311"],
  translations: [
    "ar",
    "bn",
    "bs",
    "en",
    "es",
    "fa",
    "fr",
    "id",
    "ru",
    "tl",
    "tr",
    "ur",
    "zh",
    "hi",
    "si",
    "ku",
  ],
  hadeeth_ar:
    'عن أبي بن كعب رضي الله عنه : كان رسولُ اللهِ صلى الله عليه وسلم إذا ذَهَبَ ثُلثُ الليلِ قامَ، فقال: "يا أيها الناسُ، اذكروا اللهَ، جاءت الرَّاجِفَةُ، تَتْبَعُها الرَّادِفَةُ، جاءَ الموتُ بما فيه، جاءَ الموتُ بما فيه"، قلتُ: يا رسول الله، إني أُكْثِرُ الصلاةَ عليكَ، فكم أجعلُ لكَ من صلاتِي؟ فقالَ: "ما شِئتَ"، قلتُ: الرُّبُعَ؟، قالَ: "ما شئتَ، فإنْ زِدتَ فهو خيرٌ لكَ"، قلتُ: فالنّصفَ؟، قالَ: "ما شئتَ، فإن زِدتَ فهو خيرٌ لكَ"، قلتُ: فالثلثين؟ قالَ: "ما شئتَ، فإن زدتَ فهو خيرٌ لكَ"، قلتُ: أجعلُ لكَ صلاتِي كُلَّها؟ قالَ: "إذاً تُكْفى هَمَّكَ، ويُغْفَرَ لكَ ذَنبُكَ".',
  explanation_ar:
    'ذكر في أول الحديث أن النبي –صلى الله عليه وسلم- كان إذا قام من ثلث الليل، قال منبهاً لأمته من الغفلة، محرضاً لها على ما يوصلها لمرضاة الله سبحانه من كمال رحمته "يا أيها الناس اذكروا اللّه"، أي: باللسان والجنان ليَحمِل ما يحصل من ثمرة الذكر على الإكثار من عمل البرّ وترك غيره.\n' +
    'وفي الحديث أيضاً أن السائل قد يكون له دعاء يدعو به لنفسه، فيمكن أن يجعل ثُلثَه دعاءً للنبي -صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ- ، ويمكن أن يجعل له شَطْرَه، ويمكن أن يكون جميعُ دعائِه دعاءً للنبي، مثل أن يُصلِّي عليه بدلَ دعائه. وقد ثبتَ أنه: "من صلَّى عليه مرة صلَّى الله عليه عشراً" أخرجه مسلم من حديث أبي هريرة، فيكون أجر صلاته كافياً له، ولهذا قال: "يَكفِيْ همَّك ويَغفِر ذنبَك"، أي: إنك إنما تطلب زوالَ سبب الضرر الذي يُعقِب الهمَّ ويُوجب الذنب، فإذا صليتَ علي بدل دعائك حصل مقصودك، ويحتمل هذا الحديث أن المراد أن يشركه معه في الدعاء، فكأنه قال: كلما دعوت لنفسي صليت عليك، ولا يدل على الاكتفاء بالصلاة عن الدعاء، بل يجمع بينهما عملًا بجميع النصوص.',
  hints_ar: [
    "أفضل القيام ما كان في ثلث الليل الأخير.",
    "فضل الصلاة على النبي –صلى الله عليه وسلم-.",
    "جواز ذكر الإنسان صالح عمله إذا أمن من العُجب؛ لغرض كالاستفتاء.",
    "قرب الموت من العباد، ولكن أكثر الناس غافلون عنه.",
  ],
  words_meanings_ar: [
    { word: "الراجفة", meaning: " النفخة الأولى." },
    { word: "الرادفة", meaning: " النفخة الثانية." },
    { word: "من صلاتي", meaning: " من دعائي." },
    { word: "تكفى همك", meaning: " المتعلق بالدارين." },
  ],
  attribution_ar: "رواه الترمذي وأحمد",
  grade_ar: "حسن",
};

export default function createHadithContent() {
  const hadithContent = document.createElement("div");
  const hadithContentHeader = createHadithContentHeader();
  const hadithContentBody = createHadithContentBody(hadithSample);
  const hadithContentFooter = createHadithContentFooter(hadithSample);
  const subscribeCard = createSubscribePanel();

  hadithContent.className =
    "w-full h-full pt-8  pb-12 flex flex-col justify-between gap-6";

  render(
    [
      hadithContentHeader,
      hadithContentBody,
      hadithContentFooter,
      subscribeCard,
    ],
    hadithContent,
  );

  return hadithContent;
}

function createSubscribePanel() {
  const subscribeWrapper = document.createElement("div");
  const subBtn = document.createElement("button");
  const subText = document.createElement("p");
  subText.textContent = "No spam. Just one Hadith a day for free! 📬";
  subBtn.textContent = "Get Daily Hadith ";

  subBtn.addEventListener("click", () => {
    const modal = document.querySelector("#modal");
    modal?.classList.add("show");
  });

  subscribeWrapper.className = "w-full mt-10 flex flex-col items-center gap-6";
  subBtn.className =
    "!p-3 !w-[200px] !rounded-full hover:ring-[#F0FFF0] hover:ring-2 hover:ring-offset-3 hover:ring-offset-[#242124]  w-full !text-[#242124] !bg-[#F0FFF0] !font-bold !text-lg cursor-pointer";
  subText.className = "text-sm text-[#29a5d4] font-semibold italic text-center";

  render([subBtn, subText], subscribeWrapper);

  return subscribeWrapper;
}
