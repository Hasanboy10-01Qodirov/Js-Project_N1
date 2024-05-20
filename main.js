var movies = [
  {
    title: "Patton Oswalt: Annihilation",
    summary:
      "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
    imdbRating: 7.4,
    trailer: "https://youtube.com/watch?v=4hZi5QaMBFc",
    smallPoster: "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
  },
  {
    title: "New York Doll",
    summary:
      'A recovering alcoholic and recently converted Mormon, Arthur "Killer" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.',
    imdbRating: 7.9,
    trailer: "https://youtube.com/watch?v=jwD04NsnLLg",
    smallPoster: "http://i3.ytimg.com/vi/jwD04NsnLLg/hqdefault.jpg",
  },
  {
    title: "And Then I Go",
    summary:
      'In the cruel world of junior high, Edwin suffers in a state of anxiety and alienation alongside his only friend, Flake. Misunderstood by their families and demoralized at school daily, their fury simmers quietly until an idea for vengeance offers them a terrifying release. Based on the acclaimed novel "Project X" by Jim Shepard, this unflinching look at adolescence explores how the powerful bonds of childhood friendship and search for belonging can become a matter of life or death.',
    imdbRating: 7.6,
    runtime: 99,
    trailer: "https://youtube.com/watch?v=8CdIiD6-iF0",
    smallPoster: "http://i3.ytimg.com/vi/8CdIiD6-iF0/hqdefault.jpg",
  },
  {
    title: "An Extremely Goofy Movie",
    summary:
      "It's a big time in Max's life. He's college bound with his friends and finally free of his embarrassing father as he strives to be a top contender for the X-Games. Unfortunately, Goofy loses his job and learns that he cannot get another job without a college degree. To his son's mortification, Goofy decides to join him in his campus to get that degree. Desperate to distract his father, Max talks him into joining the competing Gamma Fraternity team and introduces him to a wonderful librarian who shares his nostalgic love for 1970's pastimes. Unfortunately, things do not go according to plan as events put this father-son relationship to the test.",
    imdbRating: 6.4,
    trailer: "https://youtube.com/watch?v=H8oSvldAGfg",
    smallPoster: "http://i3.ytimg.com/vi/H8oSvldAGfg/hqdefault.jpg",
  },
  {
    title: "Peter Rabbit",
    summary:
      "Based on the books by Beatrix Potter: Peter Rabbit (James Corden;) his three sisters: Flopsy (Margot Robbie,) Mopsy (Elizabeth Debicki) and Cotton Tail (Daisy Ridley) and their cousin Benjamin (Colin Moody) enjoy their days harassing Mr McGregor in his vegetable garden. Until one day he dies and no one can stop them roaming across his house and lands for a full day or so. However, when one of Mr McGregor's relatives inherits the house and goes to check it out, he finds much more than he bargained for. What ensues, is a battle of wills between the new Mr McGregor and the rabbits. But when he starts to fall in love with Bea (Rose Byrne,) a real lover of all nature, his feelings towards them begin to change. But is it too late?",
    imdbRating: 6.6,
    trailer: "https://youtube.com/watch?v=7Pa_Weidt08",
    smallPoster: "http://i3.ytimg.com/vi/7Pa_Weidt08/hqdefault.jpg",
  },
  {
    title: "Love Songs",
    summary:
      "Julie's boyfriend Ismaël lives with her; rather than worry about the time he spends with his colleague Alice, Julie invites Alice to join them. The three walk the streets of Paris, party, read, and sleep together. Sometimes it's lighthearted, sometimes there are jealousies. Then death strikes. In various ways, those left come to terms with the departure and absence of a loved one: showing concern, eating together, attempting new relationships, trying to \"be there\" for the other. Then, the spirit returns and new commitments are possible. The romantic elements of musical comedy play in contrast to the ambivalence of the lyrics and the story.",
    imdbRating: 7.2,
    trailer: "https://youtube.com/watch?v=s54vpKAFmS0",
    smallPoster: "http://i3.ytimg.com/vi/s54vpKAFmS0/hqdefault.jpg",
  },
  {
    title: "89",
    summary:
      "89 tells the incredible story of one of football's greatest triumphs: when against all odds Arsenal snatched the Championship title from Liverpool at Anfield in the last minute of the last game of the 1988/89 season. It's a universal tale of a band of brothers who, led by a charismatic and deeply respected manager, came together to defy the odds and create history. Mixing archive and previously unseen footage with revealing interviews, insights and memories from the original squad, game officials, famous fans and the people who were there on the night this is the definitive account of a watershed moment in football and a must-watch for any sports fan.",
    imdbRating: 8.1,
    trailer: "https://youtube.com/watch?v=5hfAExhHTMM",
    smallPoster: "http://i3.ytimg.com/vi/5hfAExhHTMM/hqdefault.jpg",
  },
  {
    title: "The Foster Boy",
    summary:
      "The illegitimate orphan child, 12-year-old Max, is sold by the local minister for a basket of food to the Bösiger family, who own a mountain farm. Max' initial hope of finally finding a loving home is brutally shattered: The farmer and his wife treat Max like livestock, and their son Jacob humiliates and abuses him. Only the local teacher notices the child suffering on the farm.",
    imdbRating: 7.4,
    trailer: "https://youtube.com/watch?v=E9Qv_XVJ-js",
    smallPoster: "http://i3.ytimg.com/vi/E9Qv_XVJ-js/hqdefault.jpg",
  },
  {
    title: "Forever My Girl",
    summary:
      "After being gone for a decade a country star returns home to the love he left behind.",
    imdbRating: 6.4,
    trailer: "https://youtube.com/watch?v=3vqcMr1q5Uc",
    smallPoster: "http://i3.ytimg.com/vi/3vqcMr1q5Uc/hqdefault.jpg",
  },
  {
    title: "Tom Segura: Disgraceful",
    summary:
      "Comedian Tom Segura rants about funny things about pop culture and the way of living in 2018.",
    imdbRating: 7.5,
    trailer: "https://youtube.com/watch?v=kYYINJM3lPA",
    smallPoster: "http://i3.ytimg.com/vi/kYYINJM3lPA/hqdefault.jpg",
  },
];

const elList = document.querySelector(".list");

movies.forEach((item) => {
  elList.innerHTML += `<div
id="cards"
class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
<a href="${item.smallPoster}">
  <img
    class="rounded-t-lg"
    src="${item.smallPoster}"
    alt=""
  />
</a>
<div id="box" class="p-5">
  <a href="#">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight dark:text-white"
    >${item.title.slice(0, 15)}...</h5>
  </a>
  <p id="text" class="mb-3 font-normal dark:text-gray-400">${item.summary.slice(
    0,
    26
  )}...</p>
  <a
    href="${item.trailer}"
    id="button"
    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green-900 bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Treilerini ko'rish
    <svg
      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </a>
  <p class="text-red-900">${item.imdbRating}</p>
</div>
</div>`;
});
