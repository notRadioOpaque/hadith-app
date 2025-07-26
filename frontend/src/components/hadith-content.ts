import createHadithContentHeader from "./hadith-content-header";
import createHadithContentBody from "./hadith-content-body";
import createHadithContentFooter from "./hadith-content-footer";
import render from "../lib/dom";
import type { Hadith } from "../types";

export const hadithSample: Hadith = {
"id": "2941",
  "title": "\"Shall I inform you of the gravest of the major sins?*\" He repeated this three times. They said: \"Yes, O Messenger of Allah.\" He said: \"Associating partners with Allah and undutifulness to parents.\" He was reclining and then sat up and said: \"And indeed, the false statement.\" He repeated it so many times that we wished he would stop.",
  "hadeeth": "Abu Bakrah (may Allah be pleased with him) reported: The Prophet (may Allah's peace and blessings be upon him) said: \"Shall I inform you of the gravest of the major sins?\" He repeated this three times. They said: \"Yes, O Messenger of Allah.\" He said: \"Associating partners with Allah and undutifulness to parents.\" He was reclining and then sat up and said: \"And indeed, the false statement.\" He repeated it so many times that we wished he would stop.",
  "attribution": "Narrated by Bukhari & Muslim",
  "grade": "Authentic hadith",
  "explanation": "The Prophet (may Allah's peace and blessings be upon him) informed his Companions about the gravest of the major sins and mentioned these three:\r\n\r\n1. Associating partners with Allah: This is to devote any form of worship to other than Allah and regard anyone as equal to Allah in His divinity, lordship, names, and attributes.\r\n\r\n2. Undutifulness to parents: This is any hurt to one's parents, whether by word or deed, and not showing kindness to them.\r\n\r\n3. False statement, which includes perjury: Every false and untrue statement intended to detract from the one about whom it is made by taking his property, damaging his honor, and the like.\r\n\r\nThe Prophet (may Allah's peace and blessings be upon him) repeated the warning about the false testimony to highlight its hideousness and evil consequences for society, so much that the Companions wished that he would be quiet out of compassion towards him and disliking what would annoy him.",
  "hints": [
    "The gravest sin is associating partners with Allah, as he puts it at the forefront of the major sins and the greatest one among them. This is confirmed by the verse: {Allah does not forgive associating partners with Him, but forgives anything less than that for whom He wills. Whoever associates partners with Allah has indeed committed a grave sin.}\r",
    "The rights of parents are significant, as he coupled them with the rights of Allah Almighty.\r",
    "Sins are divided into major and minor. Major sins are every sin that entails a worldly penalty, like the prescribed punishments and curses, or a threat regarding the Hereafter, such as the threat of entering Hellfire. There are different levels of major sins, some of which are more severe than others in terms of prohibition. Minor sins are the sins other than the major ones."
  ],
  "categories": [
    "283",
    "318"
  ],
  "translations": [
    "ar",
    "bs",
    "en",
    "es",
    "fa",
    "fr",
    "id",
    "ru",
    "tr",
    "ur",
    "zh",
    "hi",
    "bn",
    "ku",
    "ha",
    "pt",
    "ml",
    "te",
    "sw",
    "ta",
    "si",
    "my",
    "de",
    "ja",
    "ps",
    "vi",
    "as",
    "sq",
    "sv",
    "cs",
    "gu",
    "yo",
    "nl",
    "ug",
    "prs",
    "ky",
    "lt",
    "rw",
    "ne",
    "kn",
    "ro",
    "wo",
    "so",
    "sr",
    "mos",
    "uk",
    "bg",
    "tl",
    "az",
    "ka",
    "hu",
    "mk",
    "bm",
    "am",
    "it",
    "mg",
    "om",
    "km",
    "th"
  ],
  "hadeeth_intro": "Abu Bakrah (may Allah be pleased with him) reported: The Prophet (may Allah's peace and blessings be upon him) said:",
  "hadeeth_ar": "عن أبي بكرة رضي الله عنه قال: قال النبي صلى الله عليه وسلم: «‌أَلَا ‌أُنَبِّئُكُمْ بِأَكْبَرِ الْكَبَائِرِ؟» ثَلَاثًا، قَالُوا: بَلَى يَا رَسُولَ اللهِ، قَالَ: «الْإِشْرَاكُ بِاللهِ، وَعُقُوقُ الْوَالِدَيْنِ» وَجَلَسَ وَكَانَ مُتَّكِئًا، فَقَالَ: «أَلَا وَقَوْلُ الزُّورِ»، قَالَ: فَمَا زَالَ يُكَرِّرُهَا حَتَّى قُلْنَا: لَيْتَهُ سَكَتَ.",
  "hadeeth_intro_ar": "عن أبي بكرة رضي الله عنه قال: قال النبي صلى الله عليه وسلم:",
  "explanation_ar": "يُخبِرُ النبيُّ صلى الله عليه وسلم أصحابَه عن أعظم الكبائر، فذَكرَ هذه الثلاث:\n\n1. الإشراك بالله: وهو صَرْفُ أيِّ نوعٍ من أنواع العبادة لغير الله، وتسويةُ غيرِ الله بالله في ألوهيته وربوبيته وأسمائه وصفاته. \n\n2. عقوق الوالدين: وهو كلُّ أذى للأبوين، قولًا كان أو فعلًا، وترك الإحسان إليهما. \n\n3. قول الزور ومنه شهادة الزور: وهو كل قول مُزوَّر ومكذوب يراد به انتقاص مَن وقع عليه بأخذ ماله أو الاعتداء على عرضه أو نحو ذلك.\n\nوقد كَرَّر النبيُّ صلى الله عليه وسلم التحذيرَ من قول الزور تنبيهًا على استقباحِه وآثارِه السيئة على المجتمع، حتى قال الصحابة: ليته سكت؛ شَفقةً عليه، وكراهية لِما يُزعجه.",
  "hints_ar": [
    "أعظم الذنوب الشركُ بالله؛ لأنه جعلَه صَدْرَ الكبائر وأكبرَها، ويؤكد هذا قوله تعالى {إن الله لا يَغْفِرُ أن يشرَكَ به وَيَغْفِرُ مَا دونَ ذلِكَ لِمَنْ يشَاء}.",
    "عظم حقوق الوالدين، إذ قَرَنَ حقَّهما بحق الله تعالى.",
    "الذنوب تنقسم إلى كبائر وصغائر، والكبيرة هي: كلُّ ذنب فيه عقوبة دنيوية، كالحدود واللعن، أو وعيد أُخروي، كالوعيد بدخول النار، وأن الكبائر دركات بعضها أغلظ من بعض في التحريم، وصغائر الذنوب هي ما سوى الكبائر."
  ],
  "words_meanings_ar": [
    {
      "word": "ألا أنبئكم",
      "meaning": " أَلا أخبركم."
    }
  ],
  "attribution_ar": "متفق عليه",
  "grade_ar": "صحيح"
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
