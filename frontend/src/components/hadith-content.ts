import createHadithContentHeader from "./hadith-content-header";
import createHadithContentBody from "./hadith-content-body";
import createHadithContentFooter from "./hadith-content-footer";
import render from "../lib/dom";
import type { Hadith } from "../types";

const hadithSample: Hadith = {
  id: "65084",
  title:
    "It is due upon every Muslim to bathe for one day every seven days, in which he should wash his head and body",
  hadeeth:
    'Abu Hurayrah (may Allah be pleased with him) reported: The Messenger of Allah (may Allah\'s peace and blessings be upon him) said: "It is due upon every Muslim to bathe for one day every seven days, in which he should wash his head and body."',
  attribution: "Narrated by At-Termedhy - Narrated by Ahmad",
  grade: "Authentic hadith",
  explanation:
    'The Messenger of Allah (may Allah\'s peace and blessings be upon him) informed that it is due upon every rational and mature Muslim to take a bath once a week, in which he washes his head and body, seeking purification and cleanliness. The worthiest among these days is Friday, as understood from some versions. For example, bathing on Friday before the prayer is highly recommended, even if one has taken one on Thursday. What indicates that the bath on Friday is not obligatory is the statement by \'Ā’ishah (may Allah be pleased with her): "The people used to work, and whenever they went for the Friday prayer, they would go in the same condition as they had been in work. So, it was said to them: \'If only you had taken a bath\'" [Narrated by Al-Bukhāri]. In another version by him: "They were smelling bad", i.e., the smell of sweat. Despite that, it was said to them: "If only you had taken a bath." so that others are more likely to do so.',
  hints: [
    "The Hadīth highlights Islam's interest and care about cleanliness and purification.\r",
    "Bathing on Friday is strongly recommended for the prayer.\r",
    "The head is singled out despite it being part of the body to give it more attention.\r",
    "Bathing is expected of those who have a foul smell that annoys people.\r",
    "Given its merit, Friday is the most recommended day for taking a bath.",
  ],
  categories: ["438", "447"],
  translations: [
    "ar",
    "en",
    "my",
    "sv",
    "cs",
    "gu",
    "yo",
    "nl",
    "ur",
    "id",
    "ug",
    "bn",
    "si",
    "hi",
    "vi",
    "ha",
    "te",
    "sw",
    "ps",
    "as",
    "prs",
    "ky",
    "lt",
    "rw",
    "ne",
    "ml",
    "bs",
    "kn",
    "ku",
    "ro",
    "so",
    "sq",
    "sr",
    "uk",
    "wo",
    "tl",
    "mos",
    "ta",
    "az",
    "fa",
    "ka",
    "zh",
    "hu",
    "pt",
    "de",
    "ru",
    "mk",
    "bm",
    "am",
    "mg",
    "om",
    "km",
    "th",
  ],
  hadeeth_intro:
    "Abu Hurayrah (may Allah be pleased with him) reported: The Messenger of Allah (may Allah's peace and blessings be upon him) said:",
  hadeeth_ar:
    "عن أبي هريرة قال: قال رسول الله صلى الله عليه وسلم: «حَقٌّ عَلَى كُلِّ مُسْلِمٍ أَنْ يَغْتَسِلَ فِي كُلِّ سَبْعَةِ أَيَّامٍ يَوْمًا، يَغْسِلُ فِيهِ رَأْسَهُ وَجَسَدَهُ».",
  hadeeth_intro_ar: "عن أبي هريرة قال: قال رسول الله صلى الله عليه وسلم:",
  explanation_ar:
    'أَخْبَرَ رسولُ الله صلى الله عليه وسلم: أنه حقٌّ متأكد على كل مسلم بالغ عاقل أنْ يغتسلَ في كل سبعة أيام من الأسبوع يومًا، فيغسل في هذا اليوم رأسَه وجسدَه، طلبًا للطهارة والنظافة، وأَولى هذه الأيام يومُ الجمعة، كما يُفهم من بعض الروايات، والاغتسال يوم الجمعة قبل الصلاة مستحب استحبابًا مؤكدًا، ولو كان اغتسل يوم الخميس مثلًا، والصارف عن الوجوب قول عائشة رضي الله عنها: "كان الناسُ مَهَنَةَ أنفسهم، وكانوا إذا راحوا إلى الجمعة راحوا في هيئتهم: فقيل لهم: لو اغتسلتم"، رواه البخاري، وفي رواية له: "لهم أرواح" أي رائحة العَرَقِ ونحوِه، ومع ذلك قيل لهم "لو اغتسلتم"، فغيرُهم من باب أولى.',
  hints_ar: [
    "اهتمام وعناية الإسلام بالنظافة والطهارة.",
    "غسل الجمعة مستحب استحبابًا مُؤكدًا للصلاة.",
    "ذِكْر الرَّأس وإن كان ذِكْر الجسد يشمله؛ للاهتمام به.",
    "ﻳﺠﺐ ﺍﻟﻐﺴﻞ ﻋﻠﻰ ﻛﻞ ﻣﻦ ﻭُﺟِﺪﺕْ ﺑﻪ ﺭﺍﺋﺤﺔٌ ﻛﺮﻳﻬﺔٌ ﻳﺘﺄﺫﻯ ﺑﻬﺎ ﺍﻟﻨﺎس.",
    "آكَدُ يومٍ للاغتسال يوم الجمعة؛ لفضله.",
  ],
  words_meanings_ar: [],
  attribution_ar: "متفق عليه",
  grade_ar: "صحيح",
};

export default function createHadithContent() {
  const hadithContent = document.createElement("div");
  const hadithContentHeader = createHadithContentHeader(hadithSample);
  const hadithContentBody = createHadithContentBody(hadithSample);
  const hadithContentFooter = createHadithContentFooter(hadithSample);
  const subscribeCard = createSubscribePanel();

  hadithContent.className =
    "w-full h-full pt-20  pb-12 flex flex-col justify-between gap-6";

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
    "!p-3 !w-[200px] !rounded-full hover:ring-[#F0FFF0] hover:ring-2 hover:ring-offset-3 hover:ring-offset-[#242124]  w-full !text-[#242124] !bg-[#F0FFF0] !font-bold !text-lg";
  subText.className = "text-sm text-[#29a5d4] font-semibold italic text-center";

  render([subBtn, subText], subscribeWrapper);

  return subscribeWrapper;
}
