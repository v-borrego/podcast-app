import { ApiModel } from "../../api";
import * as ViewModel from "./episode.model";
import { mapPodcastApiModelToViewModel } from "./episode.mapper";

describe("Episode mappers tests", () => {
  it("should map episode model from ApiModel to ViewModel", () => {
    // Arrange
    const podcastApiModel: ApiModel.PodcastDetail = responsePodcast;

    const expectedObject: ViewModel.Podcast = expectedPodcast;

    // Act
    const result = mapPodcastApiModelToViewModel(
      podcastApiModel,
      "2deaab7c-cb3f-4443-b6b0-2ba1bc9d2879"
    );

    // Assert
    expect(result).toEqual(expectedObject);
  });
});

const expectedPodcast: ViewModel.Podcast = {
  image:
    "https://media.npr.org/assets/img/2018/08/03/npr_allsongs_podcasttile_sq-ed6c3fcd48e6ba70585c46904dbc647be1285492.jpg?s=1400",
  author: "NPR",
  title: "All Songs Considered",
  description:
    "Hosts/nerds Bob Boilen and Robin Hilton are your friendly music buddies with the week's best new music discoveries, including conversations with emerging artists, icons and more. Hear songs that can completely change your day, with humor, heart and (sometimes) a whole lot of noise. Directions for use: Morning commute, the gym, or alone time. (If rash persists, discontinue use.)",
  episode: {
    id: "2deaab7c-cb3f-4443-b6b0-2ba1bc9d2879",
    content:
      "Host Robin Hilton, NPR Music's Lyndsey McKenna, Ann Powers and Stephen Thompson run through their picks for the best new albums out on April 5.  FEATURED ALBUMS:  Martha: <em>Love Keeps Kicking; </em>Khalid: <em>Free Spirit; </em>Lee Fields and the Expressions: <em>It Rains Love; </em>Weyes Blood: <em>Titanic Rising; </em>PUP: <em>Morbid Stuff; </em>Molly Tuttle: <em>When You're Ready; </em>Ages and Ages: <em>Me You They We. </em>OTHER NOTABLE RELEASES FOR APRIL  5: Brooks & Dunn: <em>Reboot; </em>Girli: <em>Odd One Out; </em>Idlewild: <em>Interview Music; </em>Lady Lamb: <em>Even in the Tremor; </em>Lissie: <em>When I'm Alone: The Piano Retrospective; </em>Priests: <em>The Seduction of Kansas; </em>Reba McEntire: <em>Stronger Than the Truth.</em>",
    title: "New Music Friday: April 5",
    isoDate: "2019-04-05T09:00:00.000Z",
    duration: "1448",
    enclosure: {
      url:
        "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/04/20190405_asc_nmf_20190405v2_rx.mp3?awCollectionId=510019&awEpisodeId=710138242&orgId=1&d=1448&p=510019&story=710138242&t=podcast&e=710138242&size=46297410&ft=pod&f=510019"
    }
  }
};

const responsePodcast: ApiModel.PodcastDetail = {
  title: "All Songs Considered",
  description:
    "Hosts/nerds Bob Boilen and Robin Hilton are your friendly music buddies with the week's best new music discoveries, including conversations with emerging artists, icons and more. Hear songs that can completely change your day, with humor, heart and (sometimes) a whole lot of noise. Directions for use: Morning commute, the gym, or alone time. (If rash persists, discontinue use.)",
  image:
    "https://media.npr.org/assets/img/2018/08/03/npr_allsongs_podcasttile_sq-ed6c3fcd48e6ba70585c46904dbc647be1285492.jpg?s=1400",
  author: "NPR",
  episodes: [
    {
      id: "2deaab7c-cb3f-4443-b6b0-2ba1bc9d2879",
      title: "New Music Friday: April 5",
      content:
        "Host Robin Hilton, NPR Music's Lyndsey McKenna, Ann Powers and Stephen Thompson run through their picks for the best new albums out on April 5.  FEATURED ALBUMS:  Martha: <em>Love Keeps Kicking; </em>Khalid: <em>Free Spirit; </em>Lee Fields and the Expressions: <em>It Rains Love; </em>Weyes Blood: <em>Titanic Rising; </em>PUP: <em>Morbid Stuff; </em>Molly Tuttle: <em>When You're Ready; </em>Ages and Ages: <em>Me You They We. </em>OTHER NOTABLE RELEASES FOR APRIL  5: Brooks & Dunn: <em>Reboot; </em>Girli: <em>Odd One Out; </em>Idlewild: <em>Interview Music; </em>Lady Lamb: <em>Even in the Tremor; </em>Lissie: <em>When I'm Alone: The Piano Retrospective; </em>Priests: <em>The Seduction of Kansas; </em>Reba McEntire: <em>Stronger Than the Truth.</em>",
      contentSnippet:
        "Host Robin Hilton, NPR Music's Lyndsey McKenna, Ann Powers and Stephen Thompson run through their picks for the best new albums out on April 5.  FEATURED ALBUMS:  Martha: Love Keeps Kicking; Khalid: Free Spirit; Lee Fields and the Expressions: It Rains Love; Weyes Blood: Titanic Rising; PUP: Morbid Stuff; Molly Tuttle: When You're Ready; Ages and Ages: Me You They We. OTHER NOTABLE RELEASES FOR APRIL  5: Brooks & Dunn: Reboot; Girli: Odd One Out; Idlewild: Interview Music; Lady Lamb: Even in the Tremor; Lissie: When I'm Alone: The Piano Retrospective; Priests: The Seduction of Kansas; Reba McEntire: Stronger Than the Truth.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/04/20190405_asc_nmf_20190405v2_rx.mp3?awCollectionId=510019&awEpisodeId=710138242&orgId=1&d=1448&p=510019&story=710138242&t=podcast&e=710138242&size=46297410&ft=pod&f=510019",
        length: "46297410",
        type: "audio/mpeg"
      },
      duration: "1448",
      isoDate: "2019-04-05T09:00:00.000Z"
    },
    {
      id: "be233fc6-cbf4-4dc2-a192-3d82cf0a2ceb",
      title:
        "New Mix: (fixed) Cautious Clay, Beth Gibbons Singing Górecki, Chastity Belt's Julia Shapiro And More",
      content:
        "Songs includeNatural by Julia ShapiroSIDEWINDER by Cautious ClayThe River St. Johns by Jake Xerxes FussellHenryk Górecki: Symphony No. 3 sung by Beth GibbonsThe Weight of Things by The GloamingTorched and Wrecked by Third Coast Percussion",
      contentSnippet:
        "Songs includeNatural by Julia ShapiroSIDEWINDER by Cautious ClayThe River St. Johns by Jake Xerxes FussellHenryk Górecki: Symphony No. 3 sung by Beth GibbonsThe Weight of Things by The GloamingTorched and Wrecked by Third Coast Percussion",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/04/20190402_asc_20190402-rx.mp3?awCollectionId=510019&awEpisodeId=709022981&orgId=1&d=2815&p=510019&story=709022981&t=podcast&e=709022981&size=89998805&ft=pod&f=510019",
        length: "89998805",
        type: "audio/mpeg"
      },
      duration: "2815",
      isoDate: "2019-04-02T11:59:00.000Z"
    },
    {
      id: "e1ccb3e8-fcee-4c1b-86cd-a8c47bf6304f",
      title: "New Music Friday: March 29",
      content:
        "FEATURED ALBUMS: Mekons: <em>Deserted; </em>Billie Eilish: <em>When We All Fall Asleep Where Do We Go?</em>  Quelle Chris: <em>Guns; </em>Shafiq Husayn: <em>The Loop; </em>Marvin Gaye: <em>You're The Man; </em>Fennesz: <em>Agora; </em>Son Volt: <em>Union.</em>OTHER NOTABLE ALBUMS OUT MARCH 29: Beth Gibbons & The Polish National Radio Symphony Orchestra: <em>Henryk Gorecki: Symphony No. 3;</em> Billy Woods & Kenny Segal: <em>Hiding Places</em>; Choosey & Exile: <em>Black Beans</em>; DJ Muggs & Mach-Hommy: <em>Tuez-Les Tous</em>; Joni Void: <em>Mise En Abyme</em>; Karyyn: <em>The Quanta Series</em>; Laura Stevenson: <em>The Big Freeze</em>; MED & Guilty Simpson: <em>Child of the Jungle</em>; Mdou Moctar: <em>Ilana</em>; Saweetie: <em>Icy</em>; Small Feet: <em>With Psychic Powers</em>; Steve Earle & The Dukes: <em>GUY</em>.<em></em>",
      contentSnippet:
        "FEATURED ALBUMS: Mekons: Deserted; Billie Eilish: When We All Fall Asleep Where Do We Go?  Quelle Chris: Guns; Shafiq Husayn: The Loop; Marvin Gaye: You're The Man; Fennesz: Agora; Son Volt: Union.OTHER NOTABLE ALBUMS OUT MARCH 29: Beth Gibbons & The Polish National Radio Symphony Orchestra: Henryk Gorecki: Symphony No. 3; Billy Woods & Kenny Segal: Hiding Places; Choosey & Exile: Black Beans; DJ Muggs & Mach-Hommy: Tuez-Les Tous; Joni Void: Mise En Abyme; Karyyn: The Quanta Series; Laura Stevenson: The Big Freeze; MED & Guilty Simpson: Child of the Jungle; Mdou Moctar: Ilana; Saweetie: Icy; Small Feet: With Psychic Powers; Steve Earle & The Dukes: GUY.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190329_asc_nmf_20190329_rx.mp3?awCollectionId=510019&awEpisodeId=707880903&orgId=1&d=1493&p=510019&story=707880903&t=podcast&e=707880903&size=47736950&ft=pod&f=510019",
        length: "47736950",
        type: "audio/mpeg"
      },
      duration: "1493",
      isoDate: "2019-03-29T09:00:03.000Z"
    },
    {
      id: "b6bebbd7-30df-4035-ac54-33943fdc4514",
      title:
        'The Legendary Reggae Artist Lee "Scratch" Perry, The Comet Is Coming and more',
      content:
        'Songs for this Episode"Summon the Fire" by The Comet Is Coming"Weird Little Idea" by Radiator Hospital "Give A Chance" by Jesse Mac Cormack"Daylight Matters" by Cate Le Bon"House Of Angels" by Lee "Scratch" Perry"Outside" by Mormor',
      contentSnippet:
        'Songs for this Episode"Summon the Fire" by The Comet Is Coming"Weird Little Idea" by Radiator Hospital "Give A Chance" by Jesse Mac Cormack"Daylight Matters" by Cate Le Bon"House Of Angels" by Lee "Scratch" Perry"Outside" by Mormor',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190326_asc_20190326-rx.mp3?awCollectionId=510019&awEpisodeId=706753346&orgId=1&d=2128&p=510019&story=706753346&t=podcast&e=706753346&size=68036635&ft=pod&f=510019",
        length: "68036635",
        type: "audio/mpeg"
      },
      duration: "2128",
      isoDate: "2019-03-26T09:00:06.000Z"
    },
    {
      id: "865fc619-ce69-49fa-9557-3a8a25f5540c",
      title: "New Music Friday: March 22",
      content:
        "It's a packed release week with a whole bunch of notable albums to highlight, including the rock guitar heroics on Ex Hex's <em>It's Real,</em> the wistful wisdom of Jenny Lewis, Andrew Bird's \"finest work yet,\" mind-blowing sonics from the genre-bending composers Emily Wells and Lafawndah, the German electronic artist Apparat and much more. Hosts Robin Hilton and Stephen Thompson share their top picks for the best albums out on March 22 on this episode of New Music Friday. FEATURED ALBUMS: Ex Hex: <em>It's Real;</em> Jenny Lewis: <em>On The Line; </em>American Football: <em>American Football; </em>Lafawndah: <em>Ancestor Boy; </em>Andrew Bird: <em>My Finest Work Yet; </em>Emily Wells: <em>This World Is Too ______ For You; </em>Apparat: <em>LP5; </em>Lambchop: <em>This (Is What I Wanted To Tell You). </em>OTHER NOTABLE ALBUMS OUT MARCH 22: Bill McKay: <em>Fountain Fire</em>; Dean Lewis: <em>A Place We Knew</em>; Ibibio Sound Machine: <em>Doko Mien</em>; Lucy Rose: <em>No Words Left</em>; Nilufer Yanya: <em>Miss Universe</em>; Rich The Kid: <em>The World Is Yours 2</em>; Strand Of Oaks: <em>Eraserland</em>; Wallows: <em>Nothings Happens</em>",
      contentSnippet:
        "It's a packed release week with a whole bunch of notable albums to highlight, including the rock guitar heroics on Ex Hex's It's Real, the wistful wisdom of Jenny Lewis, Andrew Bird's \"finest work yet,\" mind-blowing sonics from the genre-bending composers Emily Wells and Lafawndah, the German electronic artist Apparat and much more. Hosts Robin Hilton and Stephen Thompson share their top picks for the best albums out on March 22 on this episode of New Music Friday. FEATURED ALBUMS: Ex Hex: It's Real; Jenny Lewis: On The Line; American Football: American Football; Lafawndah: Ancestor Boy; Andrew Bird: My Finest Work Yet; Emily Wells: This World Is Too ______ For You; Apparat: LP5; Lambchop: This (Is What I Wanted To Tell You). OTHER NOTABLE ALBUMS OUT MARCH 22: Bill McKay: Fountain Fire; Dean Lewis: A Place We Knew; Ibibio Sound Machine: Doko Mien; Lucy Rose: No Words Left; Nilufer Yanya: Miss Universe; Rich The Kid: The World Is Yours 2; Strand Of Oaks: Eraserland; Wallows: Nothings Happens",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190322_asc_nmf_20190322_rx.mp3?awCollectionId=510019&awEpisodeId=705704172&orgId=1&d=1611&p=510019&story=705704172&t=podcast&e=705704172&size=51506140&ft=pod&f=510019",
        length: "51506140",
        type: "audio/mpeg"
      },
      duration: "1611",
      isoDate: "2019-03-22T09:00:25.000Z"
    },
    {
      id: "d5c96263-3c5d-4780-8aa3-17a5b9b4296f",
      title: "2019 SXSW Wrap-Up: Our Favorite Discoveries",
      content:
        "We've returned from our weeklong grind through the South by Southwest music festival happy, though a little dazed, with ringing ears, and a whole bunch of incredible discoveries. On this <em>All Songs Considered</em> we run through some of the most memorable music and performances, from the shredded noise rock of Rev Rev Rev and thundering soul of Yola Carter to the Afro-Cuban grooves of Cimafunk and the remarkable voice of Tamino. Bob Boilen, Stephen Thompson and I each saw around 100 different shows in just a few short days, way more than we could ever share in a single episode. But you can hear more in our Late Night Dispatches from SXSW, including a playlist of songs, and the Austin 100. You can find our complete coverage of the SXSW festival here, including video highlights from our first-ever Tiny Desk Family Hour, a series of Tiny Desk alums performing at Austin's Central Presbyterian Church, including Wyclef Jean, John Paul White and more. <em>-- Robin Hilton</em>",
      contentSnippet:
        "We've returned from our weeklong grind through the South by Southwest music festival happy, though a little dazed, with ringing ears, and a whole bunch of incredible discoveries. On this All Songs Considered we run through some of the most memorable music and performances, from the shredded noise rock of Rev Rev Rev and thundering soul of Yola Carter to the Afro-Cuban grooves of Cimafunk and the remarkable voice of Tamino. Bob Boilen, Stephen Thompson and I each saw around 100 different shows in just a few short days, way more than we could ever share in a single episode. But you can hear more in our Late Night Dispatches from SXSW, including a playlist of songs, and the Austin 100. You can find our complete coverage of the SXSW festival here, including video highlights from our first-ever Tiny Desk Family Hour, a series of Tiny Desk alums performing at Austin's Central Presbyterian Church, including Wyclef Jean, John Paul White and more. -- Robin Hilton",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190319_asc_sxsw19wrapup-rx.mp3?awCollectionId=510019&awEpisodeId=704801432&orgId=1&d=3526&p=510019&story=704801432&t=podcast&e=704801432&size=112413545&ft=pod&f=510019",
        length: "112413545",
        type: "audio/mpeg"
      },
      duration: "3526",
      isoDate: "2019-03-19T16:19:00.000Z"
    },
    {
      id: "29d3eb2e-bf79-4ac8-8017-ebf964aa64f7",
      title: "SXSW Late Night Dispatch: Saturday",
      content:
        "With another SXSW in the books, a truncated and reconstituted <em>All Songs Considered </em>gang — Bob Boilen, Stephen Thompson and Jessi Whitten of Colorado Public Radio — gathered late Saturday night (early Sunday morning, really) for one last joyous huddle to share notes on the day's highlights. Since Jessi wasn't on the night before, she had to share at least one major discovery from Friday: The Jazzrauch Bigband, who put on one of the best shows she'd seen in years. (On Saturday, she loved the singer who goes by the name Del Water Gap, as well as Dreamer Boy and Ings.) Bob had raves for Indigo Sparke, THERE and the ever-evolving Miya Folick, while Stephen recommended Jerusalem-based composer and looper ORI, skirts and the soul singer Celeste.",
      contentSnippet:
        "With another SXSW in the books, a truncated and reconstituted All Songs Considered gang — Bob Boilen, Stephen Thompson and Jessi Whitten of Colorado Public Radio — gathered late Saturday night (early Sunday morning, really) for one last joyous huddle to share notes on the day's highlights. Since Jessi wasn't on the night before, she had to share at least one major discovery from Friday: The Jazzrauch Bigband, who put on one of the best shows she'd seen in years. (On Saturday, she loved the singer who goes by the name Del Water Gap, as well as Dreamer Boy and Ings.) Bob had raves for Indigo Sparke, THERE and the ever-evolving Miya Folick, while Stephen recommended Jerusalem-based composer and looper ORI, skirts and the soul singer Celeste.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190318_asc_saturdayrx.mp3?awCollectionId=510019&awEpisodeId=704405536&orgId=1&d=786&p=510019&story=704405536&t=podcast&e=704405536&size=25133500&ft=pod&f=510019",
        length: "25133500",
        type: "audio/mpeg"
      },
      duration: "786",
      isoDate: "2019-03-18T12:53:00.000Z"
    },
    {
      id: "48130161-7715-4599-9edc-92fab0010995",
      title: "SXSW Late Night Dispatch: Friday",
      content:
        "Bob Boilen, Robin Hilton and Stephen Thompson regale each other with tall tales about Friday night's escapades at SXSW.",
      contentSnippet:
        "Bob Boilen, Robin Hilton and Stephen Thompson regale each other with tall tales about Friday night's escapades at SXSW.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190316_asc_friday-night-dispatch.mp3?awCollectionId=510019&awEpisodeId=704049050&orgId=1&d=824&p=510019&story=704049050&t=podcast&e=704049050&size=26377650&ft=pod&f=510019",
        length: "26377650",
        type: "audio/mpeg"
      },
      duration: "824",
      isoDate: "2019-03-16T15:09:00.000Z"
    },
    {
      id: "ec050651-d973-4000-bae1-6dc0a9281c77",
      title: "SXSW Late Night Dispatch: Thursday",
      content:
        "For the third installment of <em>All Songs Considered</em>'s late-night dispatches from SXSW 2019, the gang gathered in a hotel lobby to avoid the cold and sing the praises of Thursday's standout performances. Bob Boilen loved seeing Lonnie Holley with Mary Lattimore, KOKOKO!, John Vanderslice and David Keenan; Robin Hilton sang the praises of Lee Bains III & The Glory Fires, Durand Jones & The Indications and perennial SXSW favorite Calliope Musicals; Katie Presley reveled in performances by Fatai, Xenia França, King Princess and the mighty Lizzo; and Stephen Thompson couldn't say enough nice things about Another Sky, Bixiga 70, Fanclub and Mourning [A] BLKstar.",
      contentSnippet:
        "For the third installment of All Songs Considered's late-night dispatches from SXSW 2019, the gang gathered in a hotel lobby to avoid the cold and sing the praises of Thursday's standout performances. Bob Boilen loved seeing Lonnie Holley with Mary Lattimore, KOKOKO!, John Vanderslice and David Keenan; Robin Hilton sang the praises of Lee Bains III & The Glory Fires, Durand Jones & The Indications and perennial SXSW favorite Calliope Musicals; Katie Presley reveled in performances by Fatai, Xenia França, King Princess and the mighty Lizzo; and Stephen Thompson couldn't say enough nice things about Another Sky, Bixiga 70, Fanclub and Mourning [A] BLKstar.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190315_asc_thursdayrx2.mp3?awCollectionId=510019&awEpisodeId=703690226&orgId=1&d=929&p=510019&story=703690226&t=podcast&e=703690226&size=29719320&ft=pod&f=510019",
        length: "29719320",
        type: "audio/mpeg"
      },
      duration: "929",
      isoDate: "2019-03-15T09:02:00.000Z"
    },
    {
      id: "50c9aecd-0d19-48f3-b9f1-f2f7d9236a3b",
      title: "New Music Friday: March 15",
      content:
        'This week\'s somewhat abbreviated edition of New Music Friday includes an ambitious collaboration between Yeah Yeah Yeahs singer Karen O and producer Danger Mouse; the British electronic duo The Cinematic Orchestra returns with its first new album in more than a decade, featuring singer Moses Sumney, rapper Roots Manuva and other guests; and Pavement\'s Stephen Malkmus injects his woozy rock with a strange jolt of electronica. Host Robin Hilton is joined by NPR Music\'s Stephen Thompson as they share their picks for the best new albums out on March 15. FEATURED ALBUMS: Karen O & Danger Mouse, <em>Lux Prima </em>Featured Songs: "Woman" and "Lux Prima;" The Cinematic Orchestra, <em>To Believe</em> Featured Songs: "A Caged Bird/Imitations of Life," "To Believe" and "The Workers of Art;" Stephen Malkmus, <em>Groove Denied </em>Featured Songs: "Rushing the Acid Frat" and "Belziger Faceplant;" Finn Andrews, <em>One Piece at a Time </em>Featured Song: "One Piece at a Time;" CHAI, <em>Punk</em> Featured Song: "CHOOSE GO!" OTHER NOTABLE RELEASES FOR MARCH 15: Koffee, <em>Rapture</em> EP; Matmos, <em>Plastic Anniversary; </em>The Comet Is Coming, <em>Trust in the Lifeforce of the Deep Mystery; </em>Todd Snider, <em>Cash Cabin Season Vol. 3.</em>',
      contentSnippet:
        'This week\'s somewhat abbreviated edition of New Music Friday includes an ambitious collaboration between Yeah Yeah Yeahs singer Karen O and producer Danger Mouse; the British electronic duo The Cinematic Orchestra returns with its first new album in more than a decade, featuring singer Moses Sumney, rapper Roots Manuva and other guests; and Pavement\'s Stephen Malkmus injects his woozy rock with a strange jolt of electronica. Host Robin Hilton is joined by NPR Music\'s Stephen Thompson as they share their picks for the best new albums out on March 15. FEATURED ALBUMS: Karen O & Danger Mouse, Lux Prima Featured Songs: "Woman" and "Lux Prima;" The Cinematic Orchestra, To Believe Featured Songs: "A Caged Bird/Imitations of Life," "To Believe" and "The Workers of Art;" Stephen Malkmus, Groove Denied Featured Songs: "Rushing the Acid Frat" and "Belziger Faceplant;" Finn Andrews, One Piece at a Time Featured Song: "One Piece at a Time;" CHAI, Punk Featured Song: "CHOOSE GO!" OTHER NOTABLE RELEASES FOR MARCH 15: Koffee, Rapture EP; Matmos, Plastic Anniversary; The Comet Is Coming, Trust in the Lifeforce of the Deep Mystery; Todd Snider, Cash Cabin Season Vol. 3.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190315_asc_nmf_20190315_rx.mp3?awCollectionId=510019&awEpisodeId=703681460&orgId=1&d=1073&p=510019&story=703681460&t=podcast&e=703681460&size=34318500&ft=pod&f=510019",
        length: "34318500",
        type: "audio/mpeg"
      },
      duration: "1073",
      isoDate: "2019-03-15T09:00:24.000Z"
    },
    {
      id: "834ca1ff-b5ce-45c0-bc17-eafbb2e26f67",
      title: "SXSW Late Night Dispatch: Wednesday ",
      content:
        "Our discoveries for today include Sir Baby Girl, Tamino, Laura Stevenson, Be Forest, Josin, Taimane and so much more. Look for a playlist on our website, npr.org/allsongs",
      contentSnippet:
        "Our discoveries for today include Sir Baby Girl, Tamino, Laura Stevenson, Be Forest, Josin, Taimane and so much more. Look for a playlist on our website, npr.org/allsongs",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190314_asc_wednesday_dispatchrx.mp3?awCollectionId=510019&awEpisodeId=703289575&orgId=1&d=896&p=510019&story=703289575&t=podcast&e=703289575&size=28665550&ft=pod&f=510019",
        length: "28665550",
        type: "audio/mpeg"
      },
      duration: "896",
      isoDate: "2019-03-14T09:00:00.000Z"
    },
    {
      id: "f18a449c-1139-4517-b567-322148ac8b61",
      title: "SXSW Late Night Dispatch: Tuesday",
      content:
        "Our first dispatch of discoveries from the SXSW Music Festival includes a recap of NPR Music's Tiny Desk Family Hour - an evening of Tiny Desk alum playing the Central Presbyterian Church in Austin. Also our first encounters with artists Elisapie, an Inuk singer and the Beths, Ellis, Illuminati Hotties and Rosie Tucker.",
      contentSnippet:
        "Our first dispatch of discoveries from the SXSW Music Festival includes a recap of NPR Music's Tiny Desk Family Hour - an evening of Tiny Desk alum playing the Central Presbyterian Church in Austin. Also our first encounters with artists Elisapie, an Inuk singer and the Beths, Ellis, Illuminati Hotties and Rosie Tucker.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190313_asc_tuesday_dispatch2-rxl.mp3?awCollectionId=510019&awEpisodeId=702907099&orgId=1&d=622&p=510019&story=702907099&t=podcast&e=702907099&size=19898885&ft=pod&f=510019",
        length: "19898885",
        type: "audio/mpeg"
      },
      duration: "622",
      isoDate: "2019-03-13T08:28:00.000Z"
    },
    {
      id: "d8e01d35-7720-44ca-b9c6-af1140f76660",
      title: "New Music Friday: March 8",
      content:
        "Juice WRLD, the reigning prince of emo rap, is back with a follow up to last year's <em>Goodbye & Good Riddance. Deathrace for Love </em>is bleak, brutal and the rare sequel that lives up to the original. The Oxford rock band Foals takes a big swing in one of the group's most ambitious albums to date; and singer Patty Griffin has a beautiful and profoundly moving, new self-titled album on growing old, the frailty of life and perseverance. On this week's New Music Friday host Robin Hilton talks about those albums and more with NPR's Rodney Carmichael, Felix Contreras and Stephen Thompson. FEATURED ALBUMS: Foals: <em>Everything Not Saved Will Be Lost Pt. 1; </em>Helado Negro: <em>This Is How You Smile; </em>Patty Griffin: <em>Patty Griffin; </em>Sasami: <em>Sasami; </em>Maren Morris: <em>GIRL; </em>William Basinski: <em>On Time Out Of Time; </em>Juice WRLD: <em>Deathrace For Love; </em>OTHER NOTABLE RELEASES OUT MARCH 8: Dido: <em>Still on My Mind</em>; Stella Donnelly: <em>Beware of the Dogs</em>; David Gray: <em>Gold in a Brass Age</em>; Flight of the Conchords: <em>Live in London</em>; Amanda Palmer: <em>There Will Be No Intermission</em>; Townes Van Zandt: <em>Sky Blue</em>; The Wild Reeds: <em>Cheers.</em>",
      contentSnippet:
        "Juice WRLD, the reigning prince of emo rap, is back with a follow up to last year's Goodbye & Good Riddance. Deathrace for Love is bleak, brutal and the rare sequel that lives up to the original. The Oxford rock band Foals takes a big swing in one of the group's most ambitious albums to date; and singer Patty Griffin has a beautiful and profoundly moving, new self-titled album on growing old, the frailty of life and perseverance. On this week's New Music Friday host Robin Hilton talks about those albums and more with NPR's Rodney Carmichael, Felix Contreras and Stephen Thompson. FEATURED ALBUMS: Foals: Everything Not Saved Will Be Lost Pt. 1; Helado Negro: This Is How You Smile; Patty Griffin: Patty Griffin; Sasami: Sasami; Maren Morris: GIRL; William Basinski: On Time Out Of Time; Juice WRLD: Deathrace For Love; OTHER NOTABLE RELEASES OUT MARCH 8: Dido: Still on My Mind; Stella Donnelly: Beware of the Dogs; David Gray: Gold in a Brass Age; Flight of the Conchords: Live in London; Amanda Palmer: There Will Be No Intermission; Townes Van Zandt: Sky Blue; The Wild Reeds: Cheers.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190308_asc_nmf_20190305_rx.mp3?awCollectionId=510019&awEpisodeId=701395580&orgId=1&d=1673&p=510019&story=701395580&t=podcast&e=701395580&size=53505965&ft=pod&f=510019",
        length: "53505965",
        type: "audio/mpeg"
      },
      duration: "1673",
      isoDate: "2019-03-08T10:00:30.000Z"
    },
    {
      id: "5dac9243-29cb-4d9f-8b39-24ba663779e6",
      title: "The All Songs Considered SXSW Preview, 2019",
      content:
        "The annual South by Southwest music festival is our personal endurance challenge to discover as many great unknown and often unsigned bands as possible in just one week. To train for the event, Bob Boilen, Stephen Thompson and I listen to more than a thousand songs by bands playing the festival, from all over the world, and try to map out a calendar to see our favorites. On this edition of All Songs Considered we play some of the standout songs ahead of the 2019 festival, including the Ghanian artist Jojo Abot, garage rock from Blushh, the Japanese pop group CHAI, music made by robots (I'm not making that up) and much, much more. — Robin Hilton",
      contentSnippet:
        "The annual South by Southwest music festival is our personal endurance challenge to discover as many great unknown and often unsigned bands as possible in just one week. To train for the event, Bob Boilen, Stephen Thompson and I listen to more than a thousand songs by bands playing the festival, from all over the world, and try to map out a calendar to see our favorites. On this edition of All Songs Considered we play some of the standout songs ahead of the 2019 festival, including the Ghanian artist Jojo Abot, garage rock from Blushh, the Japanese pop group CHAI, music made by robots (I'm not making that up) and much, much more. — Robin Hilton",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/03/20190305_asc_sxsw_preview-rx.mp3?awCollectionId=510019&awEpisodeId=700261023&orgId=1&d=3328&p=510019&story=700261023&t=podcast&e=700261023&size=106382340&ft=pod&f=510019",
        length: "106382340",
        type: "audio/mpeg"
      },
      duration: "3328",
      isoDate: "2019-03-05T10:00:37.000Z"
    },
    {
      id: "004df4c5-37f8-4abb-b4ad-11593adf7a3b",
      title: "New Music Friday: March 1",
      content:
        "Our sprint through this week's best new albums includes <em>Grey Area </em>from the UK rapper Little Simz, Weezer's self-titled \"Black Album,\" the foot-stompers of Hozier, country crooner Dee White and more. Host Robin Hilton is joined by NPR Music's Stephen Thompson, Sidney Madden and Jewly Hight as they share their picks for the best albums out on March 1. FEATURED ALBUMS:   Little Simz: <em>Grey Area; </em>Hand Habits: <em>Placeholder; </em>Weezer: <em>Weezer</em> (The \"Black Album\"); Hozier: <em>Wasteland, Baby!; </em>Dee White: <em>Southern Gentleman; </em>Living Hour: <em>Softer Faces</em>  OTHER NOTABLE RELEASES FOR MARCH 1: 2 Chainz: <em>Rap or Go to the League</em>; Delicate Steve: <em>'Til I Burn Up</em>; Durand Jones & The Indications: <em>American Love Call</em>; The Japanese House: <em>Good At Falling</em>; Sun Kil Moon: <em>I Also Want to Die in New Orleans</em>; Westkust: <em>Westkust</em>; Yves Jarvis: <em>The Same But Different.</em>",
      contentSnippet:
        "Our sprint through this week's best new albums includes Grey Area from the UK rapper Little Simz, Weezer's self-titled \"Black Album,\" the foot-stompers of Hozier, country crooner Dee White and more. Host Robin Hilton is joined by NPR Music's Stephen Thompson, Sidney Madden and Jewly Hight as they share their picks for the best albums out on March 1. FEATURED ALBUMS:   Little Simz: Grey Area; Hand Habits: Placeholder; Weezer: Weezer (The \"Black Album\"); Hozier: Wasteland, Baby!; Dee White: Southern Gentleman; Living Hour: Softer Faces  OTHER NOTABLE RELEASES FOR MARCH 1: 2 Chainz: Rap or Go to the League; Delicate Steve: 'Til I Burn Up; Durand Jones & The Indications: American Love Call; The Japanese House: Good At Falling; Sun Kil Moon: I Also Want to Die in New Orleans; Westkust: Westkust; Yves Jarvis: The Same But Different.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/02/20190228_asc_nmf_20190301_rx.mp3?awCollectionId=510019&awEpisodeId=699239770&orgId=1&d=1230&p=510019&story=699239770&t=podcast&e=699239770&size=39344365&ft=pod&f=510019",
        length: "39344365",
        type: "audio/mpeg"
      },
      duration: "1230",
      isoDate: "2019-03-01T10:00:23.000Z"
    },
    {
      id: "5b962d7a-7768-4eba-ad56-408cfec692ea",
      title: "Guest DJ: Nilüfer Yanya",
      content:
        "On this Guest DJ edition of All Songs Considered, Nilüfer talks of learning the guitar lines in songs by The Libertines as a kid, hearing her Turkish dad's love for Turkish music, her artist mom's encouragement to be a musician and the school where Nilüfer and her friends became musical companions. Nilüfer Yanya's debut album Miss Universe is out March 22 on ATO Records.",
      contentSnippet:
        "On this Guest DJ edition of All Songs Considered, Nilüfer talks of learning the guitar lines in songs by The Libertines as a kid, hearing her Turkish dad's love for Turkish music, her artist mom's encouragement to be a musician and the school where Nilüfer and her friends became musical companions. Nilüfer Yanya's debut album Miss Universe is out March 22 on ATO Records.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/02/20190225_asc_niluferfinal-rx.mp3?awCollectionId=510019&awEpisodeId=697114090&orgId=1&d=2084&p=510019&story=697114090&t=podcast&e=697114090&size=66616300&ft=pod&f=510019",
        length: "66616300",
        type: "audio/mpeg"
      },
      duration: "2084",
      isoDate: "2019-02-25T10:00:31.000Z"
    },
    {
      id: "8a905a9a-7e0c-4024-a7af-f0af04212c3d",
      title: "New Music Friday: Feb. 22",
      content:
        "Our picks for the best albums out this week include an epic treatise on Americanism from Gary Clark Jr., the delicate and beautiful sounds of Julia Jacklin, Atlanta rapper Gunna, a gorgeous study in the healing powers of restraint from Lowland Hum, and more. Host Robin Hilton is joined by NPR Music's Rodney Carmichael and Stephen Thompson as they share their top picks for Feb. 22. FEATURED ALBUMS: Gary Clark Jr., <em>This Land; </em>Adia Victoria, <em>Silences; </em>And The Kids, <em>When This Life Is Over; </em>Bayonne, <em>Drastic Measures; </em>Gunna, <em>Drip Or Drown 2; </em>Higher Brothers, <em>Five Stars; </em>Julia Jacklin, <em>Crushing; </em>Lowland Hum, <em>Glyphonic; </em>OTHER NOTABLE ALBUMS FOR FEB 22: The Claypool Lennon Delirium, <em>South of Reality</em>; Half Japanese, <em>Invincible</em>; James Yorkston, <em>The Route to the Harmonium</em>; Kehlani, <em>While We Wait</em>; Lily & Madeleine, <em>Canterbury Girls</em>; Nakhane, <em>You Will Not Die;</em> Our Native Daughters, <em>Songs of Our Native Daughters; </em>Telekinesis, <em>Effluxion; </em>Yola, <em>Walk Through Fire.</em>",
      contentSnippet:
        "Our picks for the best albums out this week include an epic treatise on Americanism from Gary Clark Jr., the delicate and beautiful sounds of Julia Jacklin, Atlanta rapper Gunna, a gorgeous study in the healing powers of restraint from Lowland Hum, and more. Host Robin Hilton is joined by NPR Music's Rodney Carmichael and Stephen Thompson as they share their top picks for Feb. 22. FEATURED ALBUMS: Gary Clark Jr., This Land; Adia Victoria, Silences; And The Kids, When This Life Is Over; Bayonne, Drastic Measures; Gunna, Drip Or Drown 2; Higher Brothers, Five Stars; Julia Jacklin, Crushing; Lowland Hum, Glyphonic; OTHER NOTABLE ALBUMS FOR FEB 22: The Claypool Lennon Delirium, South of Reality; Half Japanese, Invincible; James Yorkston, The Route to the Harmonium; Kehlani, While We Wait; Lily & Madeleine, Canterbury Girls; Nakhane, You Will Not Die; Our Native Daughters, Songs of Our Native Daughters; Telekinesis, Effluxion; Yola, Walk Through Fire.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/02/20190222_asc_nmf_20190222_redux.mp3?awCollectionId=510019&awEpisodeId=696930814&orgId=1&d=1375&p=510019&story=696930814&t=podcast&e=696930814&size=43972770&ft=pod&f=510019",
        length: "43972770",
        type: "audio/mpeg"
      },
      duration: "1375",
      isoDate: "2019-02-22T10:00:00.000Z"
    },
    {
      id: "54049df9-f363-4868-8c16-3c23e551e618",
      title:
        "Palehound, Aldous Harding, Sego, Molly Sarlé, Westkust, Empath and Ellis",
      content:
        "On this week's <em>All Songs Considered</em> we premiere new music from Aldous Harding. The artist from New Zealand made Bob Boilen's number two album from 2017 (Party) and her latest song, \"The Barrel,\" indicates that she'll be another year-end favorite of mine in 2019. Marissa Lorusso and Lyndsey McKenna join Bob as co-host for the first time together and fill out the show with some new, great unknowns, including Sweden's Westkust and an artist who goes by the name Ellis. Ellis is the musical project of Linnea Siggelkow (the name is a play on her initials, L.S.), an Ontario-based singer who recently opened for Snail Mail. She proves to be a perfect musical pairing with Westkust. We've also got new music from a band we all love, Palehound. Marissa describes the new music from Ellen Kempner as suave and spooky. We get loud with the angular and stuttering sounds of Sego, then quiet with Mountain Man's Molly Sarlé. But we start the show off with a surprise you may or not love.",
      contentSnippet:
        "On this week's All Songs Considered we premiere new music from Aldous Harding. The artist from New Zealand made Bob Boilen's number two album from 2017 (Party) and her latest song, \"The Barrel,\" indicates that she'll be another year-end favorite of mine in 2019. Marissa Lorusso and Lyndsey McKenna join Bob as co-host for the first time together and fill out the show with some new, great unknowns, including Sweden's Westkust and an artist who goes by the name Ellis. Ellis is the musical project of Linnea Siggelkow (the name is a play on her initials, L.S.), an Ontario-based singer who recently opened for Snail Mail. She proves to be a perfect musical pairing with Westkust. We've also got new music from a band we all love, Palehound. Marissa describes the new music from Ellen Kempner as suave and spooky. We get loud with the angular and stuttering sounds of Sego, then quiet with Mountain Man's Molly Sarlé. But we start the show off with a surprise you may or not love.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/02/20190219_asc_20190219-rx.mp3?awCollectionId=510019&awEpisodeId=695747375&orgId=1&d=2486&p=510019&story=695747375&t=podcast&e=695747375&size=79488660&ft=pod&f=510019",
        length: "79488660",
        type: "audio/mpeg"
      },
      duration: "2486",
      isoDate: "2019-02-19T10:00:21.000Z"
    },
    {
      id: "78b557e9-d6ac-4eee-9b29-9e918b432eaf",
      title: "New Music Friday: Feb. 15",
      content:
        "Our list of the best albums out this week includes the first new music from funk and R&B legend Chaka Khan in 12 years, the cinematic, transporting sounds of Yann Tiersen, bubblegum punk from Sir Babygirl and more. Host Robin Hilton is joined by NPR Music's Lauren Onkey and Stephen Thompson as they share their top picks for Feb. 15. FEATURED ALBUMS: Chaka Khan: <em>Hello Happiness; </em>RY X: <em>Unfurl; </em>Yann Tiersen: <em>All; </em>Sir Babygirl: <em>Crush on Me; </em>J.S. Ondara: <em>Tales of America; </em>Robert Ellis: <em>Texas Piano Man </em>OTHER NOTABLE ALBUMS FOR FEB. 15: Avril Lavigne: <em>Head Above Water; </em>Betty Who: <em>Betty; </em>Dale Watson: <em>Call Me Lucky; </em>Florida Georgia Line: <em>Can't Say I Ain't Country; </em>Jonny Nash: <em>Make a Wilderness; </em>Ladytron: <em>Ladytron; </em>Natti Natasha: <em>Illuminati; </em>Tedeshi Trucks Band: <em>Signs</em>",
      contentSnippet:
        "Our list of the best albums out this week includes the first new music from funk and R&B legend Chaka Khan in 12 years, the cinematic, transporting sounds of Yann Tiersen, bubblegum punk from Sir Babygirl and more. Host Robin Hilton is joined by NPR Music's Lauren Onkey and Stephen Thompson as they share their top picks for Feb. 15. FEATURED ALBUMS: Chaka Khan: Hello Happiness; RY X: Unfurl; Yann Tiersen: All; Sir Babygirl: Crush on Me; J.S. Ondara: Tales of America; Robert Ellis: Texas Piano Man OTHER NOTABLE ALBUMS FOR FEB. 15: Avril Lavigne: Head Above Water; Betty Who: Betty; Dale Watson: Call Me Lucky; Florida Georgia Line: Can't Say I Ain't Country; Jonny Nash: Make a Wilderness; Ladytron: Ladytron; Natti Natasha: Illuminati; Tedeshi Trucks Band: Signs",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/02/20190215_asc_nmf_20190215_final_rx.mp3?awCollectionId=510019&awEpisodeId=694820076&orgId=1&d=1233&p=510019&story=694820076&t=podcast&e=694820076&size=39415340&ft=pod&f=510019",
        length: "39415340",
        type: "audio/mpeg"
      },
      duration: "1233",
      isoDate: "2019-02-15T10:00:23.000Z"
    },
    {
      id: "1cfe5082-d7ee-43a8-b972-760435253a38",
      title: "New Mix: Amanda Palmer, Pkew Pkew Pkew, The Budos Band, More",
      content:
        "This week's show is made possible by a generous amount of existential anxiety. This includes the ego-destroying rock anthem \"I Don't Matter At All,\" from the Toronto band Pkew Pkew Pkew, and an epic life manifesto from Amanda Palmer called \"The Ride\" – a ten-minute oration about the crippling effects of unbridled and rampant fear.But we've also got some horn-powered instrumental rock from New York's Afro-soul group The Budos Band, and a beautiful, blood-slowing song from the Swedish singer Daniel Norgren, an artist who takes inspiration from the sounds of a creaking floor in an old flour mill.",
      contentSnippet:
        "This week's show is made possible by a generous amount of existential anxiety. This includes the ego-destroying rock anthem \"I Don't Matter At All,\" from the Toronto band Pkew Pkew Pkew, and an epic life manifesto from Amanda Palmer called \"The Ride\" – a ten-minute oration about the crippling effects of unbridled and rampant fear.But we've also got some horn-powered instrumental rock from New York's Afro-soul group The Budos Band, and a beautiful, blood-slowing song from the Swedish singer Daniel Norgren, an artist who takes inspiration from the sounds of a creaking floor in an old flour mill.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/02/20190212_asc_20190212-rx.mp3?awCollectionId=510019&awEpisodeId=693760521&orgId=1&d=2135&p=510019&story=693760521&t=podcast&e=693760521&size=68327215&ft=pod&f=510019",
        length: "68327215",
        type: "audio/mpeg"
      },
      duration: "2135",
      isoDate: "2019-02-12T10:00:21.000Z"
    },
    {
      id: "f24bf8e4-b4ba-4c3f-a124-d124fdaa7e27",
      title: "New Music Friday: Feb. 8",
      content:
        "Our list of the best albums out this week includes delicate piano pieces from Hauschka, the brilliantly burning rock of Bob Mould, songs inspired by the film <em>Roma, </em>Mercury Rev's remake of Bobbie Gentry's country opera <em>The Delta Sweete </em>and much more. Host Robin Hilton is joined by NPR Music's Felix Contreras, Tom Huizenga and Stephen Thompson as they sprint through their top picks for Feb. 8. FEATURED ALBUMS: 1. Bob Mould: <em>Sunshine Rock; </em>2. Jessica Pratt: <em>Quiet Signs; </em>3. Hauschka: <em>A Different Forest; </em>4. Various: <em>Music Inspired by the Film Roma; </em>5. Said the Whale: <em>Cascadia; </em>6. Mercury Rev: <em>Bobbie Gentry's The Delta Sweete Revisited; </em>7. Joszef Van Wissem and Jim Jarmusch: <em>An Attempt to Draw Aside the Veil. </em>OTHER NOTABLE RELEASES FOR FEB. 8: Ariana Grande: <em>thank u, next; </em>Cass McCombs: <em>Tip of the Sphere;</em> The Lemonheads: <em>Varshons 2; </em>Panda Bear: <em>Buoys; </em>Talos: <em>Far Out Dust</em>",
      contentSnippet:
        "Our list of the best albums out this week includes delicate piano pieces from Hauschka, the brilliantly burning rock of Bob Mould, songs inspired by the film Roma, Mercury Rev's remake of Bobbie Gentry's country opera The Delta Sweete and much more. Host Robin Hilton is joined by NPR Music's Felix Contreras, Tom Huizenga and Stephen Thompson as they sprint through their top picks for Feb. 8. FEATURED ALBUMS: 1. Bob Mould: Sunshine Rock; 2. Jessica Pratt: Quiet Signs; 3. Hauschka: A Different Forest; 4. Various: Music Inspired by the Film Roma; 5. Said the Whale: Cascadia; 6. Mercury Rev: Bobbie Gentry's The Delta Sweete Revisited; 7. Joszef Van Wissem and Jim Jarmusch: An Attempt to Draw Aside the Veil. OTHER NOTABLE RELEASES FOR FEB. 8: Ariana Grande: thank u, next; Cass McCombs: Tip of the Sphere; The Lemonheads: Varshons 2; Panda Bear: Buoys; Talos: Far Out Dust",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/02/20190208_asc_nmf_20190208_final_rx.mp3?awCollectionId=510019&awEpisodeId=692563885&orgId=1&d=1534&p=510019&story=692563885&t=podcast&e=692563885&size=49061260&ft=pod&f=510019",
        length: "49061260",
        type: "audio/mpeg"
      },
      duration: "1534",
      isoDate: "2019-02-08T10:00:23.000Z"
    },
    {
      id: "a7367bcb-a907-4be0-9789-5c4d8e1acc17",
      title:
        "New Mix: Billie Eilish, Lucy Dacus, John Vanderslice, T Bone Burnett, More",
      content:
        "On this week's show, artists battle their inner demons – the kind that come out a night when you're alone in bed, trying to find sleep – speak truth to power, celebrate love, dig into complicated characters with troubled pasts and much more.This includes a kind of demented nursery rhyme from singer Billie Eilish; the London-based duo Tender and their deep reflection on ruinous self-indulgence; and producer T Bone Burnett's new album with a prayer to overcome fear.Also on the show: The artist known as Many Rooms confronts organized religion; New York singer-songwriter Laura Stevenson has a new album inspired by the inevitable end of the universe; Lucy Dacus reimagines the French love song \"La Vie En Rose\" as a driving anthem to love; and producer and musician John Vanderslice returns from a five-year break from making music with a new solo album called The Cedars and a complicated tale of bent love",
      contentSnippet:
        "On this week's show, artists battle their inner demons – the kind that come out a night when you're alone in bed, trying to find sleep – speak truth to power, celebrate love, dig into complicated characters with troubled pasts and much more.This includes a kind of demented nursery rhyme from singer Billie Eilish; the London-based duo Tender and their deep reflection on ruinous self-indulgence; and producer T Bone Burnett's new album with a prayer to overcome fear.Also on the show: The artist known as Many Rooms confronts organized religion; New York singer-songwriter Laura Stevenson has a new album inspired by the inevitable end of the universe; Lucy Dacus reimagines the French love song \"La Vie En Rose\" as a driving anthem to love; and producer and musician John Vanderslice returns from a five-year break from making music with a new solo album called The Cedars and a complicated tale of bent love",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/02/20190205_asc_20190205-rx.mp3?awCollectionId=510019&awEpisodeId=691505751&orgId=1&d=2647&p=510019&story=691505751&t=podcast&e=691505751&size=84627250&ft=pod&f=510019",
        length: "84627250",
        type: "audio/mpeg"
      },
      duration: "2647",
      isoDate: "2019-02-05T10:00:12.000Z"
    },
    {
      id: "6fe6df07-5c6b-4af2-8008-49e3a9a55abe",
      title: "New Music Friday: Feb. 01",
      content:
        "On this sprint through the week's best new albums, host Robin Hilton is joined by NPR Music's Lyndsey McKenna and Stephen Thompson for a whole lot of guitar rock, with a little bit of melancholy, acoustic beauty on the side. This includes Spielbergs, a group from Oslo, Norway, that makes its US debut with a fantastic squeal of feedback on <em>This is Not the End</em>; the L.A. quartet Cherry Gazerr, which just dropped its most emotionally potent and fully formed album ever; Girlpool, Le Butcherettes, the beautifully transporting songs of Tiny Ruins and more.  FEATURED ALBUMS: Spielbergs: <em>This is Not the End; </em>Cherry Glazerr: <em>Stuffed and Ready; </em>Girlpool: <em>What Chaos is Imaginary; </em>Beirut: <em>Gallipoli; </em>Le Butcherettes: <em>bi/MENTAL; </em>Tiny Ruins: <em>Olympic Girls; </em>OTHER NOTABLE RELEASES FOR FEB. 01: <em></em><em></em>Boy Harsher: <em>Careful; </em>Deer Tick: <em>Mayonnaise; </em>Guided by Voices: <em>Zeppelin Over China; </em>Emily King: <em>Scenery; </em>Mandolin Orange: <em>Tides of a Teardrop; </em>David Meade: <em>Cobra Pumps;</em> Nina Nesbitt: <em>The Sun Will Come Up, the Seasons Will Change; </em>Unloved: <em>Heartbreak</em>",
      contentSnippet:
        "On this sprint through the week's best new albums, host Robin Hilton is joined by NPR Music's Lyndsey McKenna and Stephen Thompson for a whole lot of guitar rock, with a little bit of melancholy, acoustic beauty on the side. This includes Spielbergs, a group from Oslo, Norway, that makes its US debut with a fantastic squeal of feedback on This is Not the End; the L.A. quartet Cherry Gazerr, which just dropped its most emotionally potent and fully formed album ever; Girlpool, Le Butcherettes, the beautifully transporting songs of Tiny Ruins and more.  FEATURED ALBUMS: Spielbergs: This is Not the End; Cherry Glazerr: Stuffed and Ready; Girlpool: What Chaos is Imaginary; Beirut: Gallipoli; Le Butcherettes: bi/MENTAL; Tiny Ruins: Olympic Girls; OTHER NOTABLE RELEASES FOR FEB. 01: Boy Harsher: Careful; Deer Tick: Mayonnaise; Guided by Voices: Zeppelin Over China; Emily King: Scenery; Mandolin Orange: Tides of a Teardrop; David Meade: Cobra Pumps; Nina Nesbitt: The Sun Will Come Up, the Seasons Will Change; Unloved: Heartbreak",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/02/20190201_asc_nmf_20190202_final_rx.mp3?awCollectionId=510019&awEpisodeId=690586768&orgId=1&d=1233&p=510019&story=690586768&t=podcast&e=690586768&size=39462100&ft=pod&f=510019",
        length: "39462100",
        type: "audio/mpeg"
      },
      duration: "1233",
      isoDate: "2019-02-01T10:00:23.000Z"
    },
    {
      id: "913a159a-42db-43bd-be08-3e4543cc15cf",
      title:
        "Remembering The Beatles' Rooftop Gig, 50 Years Later, With Someone Who Was There",
      content:
        "Ken Mansfield was the U.S. Manager for Apple records when the Beatles played their final gig on a rooftop in London — and one of the few people who was actually with the band to witness it.",
      contentSnippet:
        "Ken Mansfield was the U.S. Manager for Apple records when the Beatles played their final gig on a rooftop in London — and one of the few people who was actually with the band to witness it.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/01/20190130_asc_beatlesrooffinalmixrx.mp3?awCollectionId=510019&awEpisodeId=689784523&orgId=1&d=1568&p=510019&story=689784523&t=podcast&e=689784523&size=50150100&ft=pod&f=510019",
        length: "50150100",
        type: "audio/mpeg"
      },
      duration: "1568",
      isoDate: "2019-01-30T05:01:27.000Z"
    },
    {
      id: "5cc858ca-41d7-463a-8b03-a5d6dc96bb22",
      title:
        "New Mix: Better Oblivion Community Center, Bellows, Duster & More",
      content:
        "On this edition of All Songs Considered I'm joined by Marissa Lorusso our Tiny Desk Contest leader and also a critical contributor to NPR Music's Turning the Tables project.Marissa plays music from the '90s San Jose trio, Duster. They're getting back together but not before a boxed set of their storied past comes out. Marissa is also a fan of Bellows, the music of Oliver Kalb, who we also know from the band Gabby's World (formerly Eskimeaux and O). And we hear music from Heather Woods Broderick, a songwriter and singer we've featured not only for her own music but for being a stage and studio partner with Sharon Van Etten. I play music from Tiny Desk Contest entrant Jackie Mendoza who performs a stripped-down, more focused remake of the song she submitted to our contest called \"De Lejos\" about loving from afar. We also hear great trance guitar from a Tuareg musician from the Saharan region. It's a recording he made in Detroit after a chance meeting with a producer who shared his love of ZZ Top's Tres Hombres record. But first, I open the show with my current 2019 favorite album, one that came out as huge surprise just last week, by Conor Oberst and Phoebe Bridgers. They call their project the Better Oblivion Community Center.",
      contentSnippet:
        "On this edition of All Songs Considered I'm joined by Marissa Lorusso our Tiny Desk Contest leader and also a critical contributor to NPR Music's Turning the Tables project.Marissa plays music from the '90s San Jose trio, Duster. They're getting back together but not before a boxed set of their storied past comes out. Marissa is also a fan of Bellows, the music of Oliver Kalb, who we also know from the band Gabby's World (formerly Eskimeaux and O). And we hear music from Heather Woods Broderick, a songwriter and singer we've featured not only for her own music but for being a stage and studio partner with Sharon Van Etten. I play music from Tiny Desk Contest entrant Jackie Mendoza who performs a stripped-down, more focused remake of the song she submitted to our contest called \"De Lejos\" about loving from afar. We also hear great trance guitar from a Tuareg musician from the Saharan region. It's a recording he made in Detroit after a chance meeting with a producer who shared his love of ZZ Top's Tres Hombres record. But first, I open the show with my current 2019 favorite album, one that came out as huge surprise just last week, by Conor Oberst and Phoebe Bridgers. They call their project the Better Oblivion Community Center.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/01/20190129_asc_20190129-rx.mp3?awCollectionId=510019&awEpisodeId=689569524&orgId=1&d=2444&p=510019&story=689569524&t=podcast&e=689569524&size=78120095&ft=pod&f=510019",
        length: "78120095",
        type: "audio/mpeg"
      },
      duration: "2444",
      isoDate: "2019-01-29T10:00:20.000Z"
    },
    {
      id: "3f9fe68e-c305-414c-a975-848c3d4c97fd",
      title: "New Music Friday: Jan. 25",
      content:
        "On this week's program, host Robin Hilton is joined by NPR Music's Rodney Carmichael, Sidney Maden and Stephen Thompson to talk about the must-hear albums out on Jan. 25. This includes hard-driving riff rock with a healthy sense of humor from FIDLAR and Mike Krol, the Compton rapper Boogie, woozy synth-pop from The Dandy Warhols, the shape-shifting sounds of New Orleans singer DAWN and more.  Featured Albums: FIDLAR: <em>Almost Free;</em> Mike Krol: <em>Power Chords; </em>Boogie: <em>Everything's For Sale;</em> The Dandy Warhols: <em>Why You So Crazy?  </em>Rat Boy: <em>Internationally Unknown;</em> DAWN: <em>New Breed;  </em>Other Notable Releases For Jan. 25: Backstreet Boys: <em>DNA; </em>Better Oblivion Community Center:<em> S/T; </em>Bring Me The Horizon:<em> AMO; </em>Rosie Carny:<em> Bare; </em>Toy:<em> Happy In The Hollow; </em>Vangelis<em>: Nocturne; </em>William Tyler:<em> Goes West </em>",
      contentSnippet:
        "On this week's program, host Robin Hilton is joined by NPR Music's Rodney Carmichael, Sidney Maden and Stephen Thompson to talk about the must-hear albums out on Jan. 25. This includes hard-driving riff rock with a healthy sense of humor from FIDLAR and Mike Krol, the Compton rapper Boogie, woozy synth-pop from The Dandy Warhols, the shape-shifting sounds of New Orleans singer DAWN and more.  Featured Albums: FIDLAR: Almost Free; Mike Krol: Power Chords; Boogie: Everything's For Sale; The Dandy Warhols: Why You So Crazy?  Rat Boy: Internationally Unknown; DAWN: New Breed;  Other Notable Releases For Jan. 25: Backstreet Boys: DNA; Better Oblivion Community Center: S/T; Bring Me The Horizon: AMO; Rosie Carny: Bare; Toy: Happy In The Hollow; Vangelis: Nocturne; William Tyler: Goes West",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/01/20190125_asc_nmf_20190125_final_rx.mp3?awCollectionId=510019&awEpisodeId=688504148&orgId=1&d=1422&p=510019&story=688504148&t=podcast&e=688504148&size=45469090&ft=pod&f=510019",
        length: "45469090",
        type: "audio/mpeg"
      },
      duration: "1422",
      isoDate: "2019-01-25T10:00:22.000Z"
    },
    {
      id: "4e0e6375-fff5-4aa2-a9c2-25ba801b4517",
      title:
        "Hear 2 New Vampire Weekend Songs And A Conversation With Ezra Koenig ",
      content:
        "Today on <em>All Songs Considered</em>, hear a conversation about the record's production, the logistics of performing live as a seven-piece band and, at long last, the meaning behind <em>FOTB</em>, the mysterious album-title acronym that turned fans into code-crackers early last week.",
      contentSnippet:
        "Today on All Songs Considered, hear a conversation about the record's production, the logistics of performing live as a seven-piece band and, at long last, the meaning behind FOTB, the mysterious album-title acronym that turned fans into code-crackers early last week.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/01/20190124_asc_vampire_weekend-rx.mp3?awCollectionId=510019&awEpisodeId=688079788&orgId=1&d=1400&p=510019&story=688079788&t=podcast&e=688079788&size=44755165&ft=pod&f=510019",
        length: "44755165",
        type: "audio/mpeg"
      },
      duration: "1400",
      isoDate: "2019-01-24T13:02:48.000Z"
    },
    {
      id: "3796367f-cf0d-44ae-af23-f4eda7cd81a5",
      title:
        "Sharon Van Etten Breaks Down Every Track On Her Stunning New Album",
      content:
        "A lot has changed in Sharon Van Etten's life since she put out her last album, <em>Are We There</em>, in 2014. Over the past five years she's gotten into acting, she went back to school to get a degree in Mental Health Counseling, she's worked on some film scores and, the biggest change: She's a mom, now. But through it all she eventually found herself coming back to her first love: music. Sharon Van Etten has a new album out called <em>Remind Me Tomorrow</em> and it's unlike anything she's ever done before. Largely seen as an acoustic singer-songwriter up to now, her new album is full of pulsing synths, big beats and lots of strange, dark textures made with the help of producer John Congleton.  The result is a stunning achievement for Van Etten. <em>Remind Me Tomorrow </em>is her most ambitious and adventurous album to date. For this edition of <em>All Songs Considered</em>, Sharon Van Etten and host Robin Hilton listened to her whole new album together, front to back. She reflects on motherhood, shares stories about the new songs and explains why she decided to blow up nearly everything fans have long loved about her music.",
      contentSnippet:
        "A lot has changed in Sharon Van Etten's life since she put out her last album, Are We There, in 2014. Over the past five years she's gotten into acting, she went back to school to get a degree in Mental Health Counseling, she's worked on some film scores and, the biggest change: She's a mom, now. But through it all she eventually found herself coming back to her first love: music. Sharon Van Etten has a new album out called Remind Me Tomorrow and it's unlike anything she's ever done before. Largely seen as an acoustic singer-songwriter up to now, her new album is full of pulsing synths, big beats and lots of strange, dark textures made with the help of producer John Congleton.  The result is a stunning achievement for Van Etten. Remind Me Tomorrow is her most ambitious and adventurous album to date. For this edition of All Songs Considered, Sharon Van Etten and host Robin Hilton listened to her whole new album together, front to back. She reflects on motherhood, shares stories about the new songs and explains why she decided to blow up nearly everything fans have long loved about her music.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/01/20190122_asc_sharonvanetten2019.mp3?awCollectionId=510019&awEpisodeId=687288822&orgId=1&d=2584&p=510019&story=687288822&t=podcast&e=687288822&size=82626590&ft=pod&f=510019",
        length: "82626590",
        type: "audio/mpeg"
      },
      duration: "2584",
      isoDate: "2019-01-22T10:00:24.000Z"
    },
    {
      id: "7f7a6524-3e76-4c41-a6ae-478598b50054",
      title: "New Music Friday: Jan. 18",
      content:
        "Welcome to a brand-new season of New Music Friday! After a few quiet weeks, the flood gates are opening and we've got a whole bunch of essential albums dropping on Jan. 18 to tell you about. This includes the smart, sparkling pop of singer Maggie Rogers, swooning love songs from James Blake, deep introspection from Pedro The Lion's first new album in 15 years, pure joy from Toro y Moi and much more. Host Robin Hilton is joined by NPR Music's Stephen Thompson for this quick sprint through the essential releases for Jan. 18, the first busy drop date for the new year. Featured Albums: 1. Maggie Rogers: <em>Heard It In A Past Life</em>; 2. Toro y Moi: <em>Outer Peace</em>; 3. Deerhunter: <em>Why Hasn't Everything Already Disappeared; </em>4. Pedro The Lion: <em>Phoenix</em>; 5. James Blake: <em>Assume Form</em>; 6. Buke And Gase: <em>Scholars</em>; 7. Frances Cone: <em>Late Riser; </em>Other Notable Releases: Crane Like The Bird: <em>Crane Like The Bird; </em>Future:<em><em><em> <em>The Wizrd; </em></em></em></em>Juliana Hatfield:<em> <em>Weird; </em></em>Malibu Ken:<em> <em>Malibu Ken; </em><em></em></em>Mike Posner:<em> <em>A Real Good Kid; </em></em>Sharon Van Etten: <em>Remind Me Tomorrow</em>; Tender: <em>Fear Of Falling Asleep; </em>The Twilight Sad: <em>It Won't Always Be Like This</em>",
      contentSnippet:
        "Welcome to a brand-new season of New Music Friday! After a few quiet weeks, the flood gates are opening and we've got a whole bunch of essential albums dropping on Jan. 18 to tell you about. This includes the smart, sparkling pop of singer Maggie Rogers, swooning love songs from James Blake, deep introspection from Pedro The Lion's first new album in 15 years, pure joy from Toro y Moi and much more. Host Robin Hilton is joined by NPR Music's Stephen Thompson for this quick sprint through the essential releases for Jan. 18, the first busy drop date for the new year. Featured Albums: 1. Maggie Rogers: Heard It In A Past Life; 2. Toro y Moi: Outer Peace; 3. Deerhunter: Why Hasn't Everything Already Disappeared; 4. Pedro The Lion: Phoenix; 5. James Blake: Assume Form; 6. Buke And Gase: Scholars; 7. Frances Cone: Late Riser; Other Notable Releases: Crane Like The Bird: Crane Like The Bird; Future: The Wizrd; Juliana Hatfield: Weird; Malibu Ken: Malibu Ken; Mike Posner: A Real Good Kid; Sharon Van Etten: Remind Me Tomorrow; Tender: Fear Of Falling Asleep; The Twilight Sad: It Won't Always Be Like This",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/01/20190118_asc_nmf_20190118rx.mp3?awCollectionId=510019&awEpisodeId=686437623&orgId=1&d=1641&p=510019&story=686437623&t=podcast&e=686437623&size=52465555&ft=pod&f=510019",
        length: "52465555",
        type: "audio/mpeg"
      },
      duration: "1641",
      isoDate: "2019-01-18T10:00:03.000Z"
    },
    {
      id: "12cd3013-d0f6-4b5d-be79-c186e548ba8b",
      title:
        "New Mix: Lana Del Rey, Telekinesis, Stella Donnelly, Priests, More",
      content:
        'It\'s been a minute since we got together to share some all-new music – not since our Nov. 6 show of last year, in fact. Hopefully you used the past several weeks to dig into our look back at the year in music for 2018, our remembrance of the artists we lost, Viking\'s Choice, Glaring Omissions and, of course, our annual Holiday Radio Play. But we\'re back now with a batch of essential songs to start the new year right. This includes a spare and profoundly moving new track from singer Lana Del Rey called "Hope is a Terrible Thing for a Woman Like Me To Have – But I Have It;" a brutally candid critique of toxic masculinity from Stella Donnelly; and the thumping, propulsive sounds of Priests and their new song "The Seduction Of Kansas." Also on the show: Perfect guitar pop from Telekinesis, and the punk-saxophone of Joy On Fire and the sweet harmonies of The Wild Reeds, both of whom pay tribute to a lost mother.',
      contentSnippet:
        'It\'s been a minute since we got together to share some all-new music – not since our Nov. 6 show of last year, in fact. Hopefully you used the past several weeks to dig into our look back at the year in music for 2018, our remembrance of the artists we lost, Viking\'s Choice, Glaring Omissions and, of course, our annual Holiday Radio Play. But we\'re back now with a batch of essential songs to start the new year right. This includes a spare and profoundly moving new track from singer Lana Del Rey called "Hope is a Terrible Thing for a Woman Like Me To Have – But I Have It;" a brutally candid critique of toxic masculinity from Stella Donnelly; and the thumping, propulsive sounds of Priests and their new song "The Seduction Of Kansas." Also on the show: Perfect guitar pop from Telekinesis, and the punk-saxophone of Joy On Fire and the sweet harmonies of The Wild Reeds, both of whom pay tribute to a lost mother.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/01/20190115_asc_20190115-rx.mp3?awCollectionId=510019&awEpisodeId=685392228&orgId=1&d=2643&p=510019&story=685392228&t=podcast&e=685392228&size=84495320&ft=pod&f=510019",
        length: "84495320",
        type: "audio/mpeg"
      },
      duration: "2643",
      isoDate: "2019-01-15T10:00:00.000Z"
    },
    {
      id: "aef45d3f-30b3-4d61-9aae-87966c7f34b5",
      title: "Steve Earle Honors Guy Clark",
      content:
        "Steve Earle honors his musical hero Guy Clark with an album of his song called <em>GUY.</em>",
      contentSnippet:
        "Steve Earle honors his musical hero Guy Clark with an album of his song called GUY.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/01/20190109_asc_steve_earle_rx.mp3?awCollectionId=510019&awEpisodeId=683377840&orgId=1&d=1672&p=510019&story=683377840&t=podcast&e=683377840&size=53457535&ft=pod&f=510019",
        length: "53457535",
        type: "audio/mpeg"
      },
      duration: "1672",
      isoDate: "2019-01-09T10:00:23.000Z"
    },
    {
      id: "1fbee2cf-ddc7-4756-9b44-1c3c25883939",
      title: "globalFEST 2019",
      content:
        "On this edition of <em>All Songs Considered</em>, we share our favorite discoveries from globalFEST 2019.",
      contentSnippet:
        "On this edition of All Songs Considered, we share our favorite discoveries from globalFEST 2019.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2019/01/20190108_asc_globalfest_2019-rx.mp3?awCollectionId=510019&awEpisodeId=683120950&orgId=1&d=2130&p=510019&story=683120950&t=podcast&e=683120950&size=68099260&ft=pod&f=510019",
        length: "68099260",
        type: "audio/mpeg"
      },
      duration: "2130",
      isoDate: "2019-01-08T10:00:25.000Z"
    },
    {
      id: "400895a3-a291-42ba-b59d-7bee18face2a",
      title: "Vikings Choice 2018",
      content:
        "Our resident Viking surveys 2018 through Italian doom metal, Chinese post-punk, underwater field recordings and a 24-hour drone.",
      contentSnippet:
        "Our resident Viking surveys 2018 through Italian doom metal, Chinese post-punk, underwater field recordings and a 24-hour drone.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/12/20181228_asc_vikings_choice_2018-rx.mp3?awCollectionId=510019&awEpisodeId=679237409&orgId=1&d=2950&p=510019&story=679237409&t=podcast&e=679237409&size=94319930&ft=pod&f=510019",
        length: "94319930",
        type: "audio/mpeg"
      },
      duration: "2950",
      isoDate: "2018-12-28T10:00:16.000Z"
    },
    {
      id: "3850e946-c4a3-465d-a752-e1f69bee6f6e",
      title: "In Memoriam: The Artists We Lost In 2018",
      content:
        "In this special year-end edition of <em>All Songs Considered</em> <em></em>we look back at the extraordinary singers, composers, multi-instrumentalists and other creative souls we lost in 2018, from indie rock and pop's Richard Swift and Dolores O'Riordan, to opera singer Montserrat Caballe, rapper Mac Miller, avant-garde jazz pianist Cecil Taylor and, of course, Aretha Franklin.",
      contentSnippet:
        "In this special year-end edition of All Songs Considered we look back at the extraordinary singers, composers, multi-instrumentalists and other creative souls we lost in 2018, from indie rock and pop's Richard Swift and Dolores O'Riordan, to opera singer Montserrat Caballe, rapper Mac Miller, avant-garde jazz pianist Cecil Taylor and, of course, Aretha Franklin.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/12/20181226_asc_in_memoriam_2018_final.mp3?awCollectionId=510019&awEpisodeId=678077371&orgId=1&d=2591&p=510019&story=678077371&t=podcast&e=678077371&size=82834505&ft=pod&f=510019",
        length: "82834505",
        type: "audio/mpeg"
      },
      duration: "2591",
      isoDate: "2018-12-26T10:00:27.000Z"
    },
    {
      id: "8db0387a-bf65-4044-aaa4-92895cdd391f",
      title: "The All Songs Considered Holiday Cruise 2018",
      content:
        "Steve Martin and the Steep Canyon Rangers, John Legend, Lucius, William Shatner, Micky Dolenz of The Monkees and Rodney Crowell all join us for our annual holiday spoof, which unfolds like a bad high school play. This year the gang goes to Bermuda to get away from it all, only to find themselves lost in the Bermuda Triangle.",
      contentSnippet:
        "Steve Martin and the Steep Canyon Rangers, John Legend, Lucius, William Shatner, Micky Dolenz of The Monkees and Rodney Crowell all join us for our annual holiday spoof, which unfolds like a bad high school play. This year the gang goes to Bermuda to get away from it all, only to find themselves lost in the Bermuda Triangle.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/12/20181219_asc_holiday2018withlegend.mp3?awCollectionId=510019&awEpisodeId=678128969&orgId=1&d=3342&p=510019&story=678128969&t=podcast&e=678128969&size=106827395&ft=pod&f=510019",
        length: "106827395",
        type: "audio/mpeg"
      },
      duration: "3342",
      isoDate: "2018-12-19T14:39:00.000Z"
    },
    {
      id: "a3629392-18bc-4fdf-bc4a-82c74c8326c6",
      title: "Glaring Omissions: The Music We Missed In 2018",
      content:
        "A lot of the year-end lists you've looked at probably didn't have that one favorite album or song you hold near and dear. This episode of <em>All Songs</em> is about our hidden gems, the ones that, in the give-and-take of making a representative staff list, got left off. In the case of the NPR Music team, we each had at least one record we want you to know about that you won't find on our Top 50 Albums list or our Top 100 Songs list. So, we gathered with ALT. Latino host Felix Contreras, our hip-hop and R&B lovers, Sidney Madden and Rodney Carmichael, classical music geek, Tom Huizenga and pop-and-rock fans Lyndsey McKenna and Marissa Lorusso to set the record straight. And with outrage in our hearts (and bit of tongue in our cheeks) we play the eight other songs we really want you to hear.",
      contentSnippet:
        "A lot of the year-end lists you've looked at probably didn't have that one favorite album or song you hold near and dear. This episode of All Songs is about our hidden gems, the ones that, in the give-and-take of making a representative staff list, got left off. In the case of the NPR Music team, we each had at least one record we want you to know about that you won't find on our Top 50 Albums list or our Top 100 Songs list. So, we gathered with ALT. Latino host Felix Contreras, our hip-hop and R&B lovers, Sidney Madden and Rodney Carmichael, classical music geek, Tom Huizenga and pop-and-rock fans Lyndsey McKenna and Marissa Lorusso to set the record straight. And with outrage in our hearts (and bit of tongue in our cheeks) we play the eight other songs we really want you to hear.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/12/20181211_asc_oneswemissed2-rx.mp3?awCollectionId=510019&awEpisodeId=675946318&orgId=1&d=3270&p=510019&story=675946318&t=podcast&e=675946318&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3270",
      isoDate: "2018-12-12T10:00:26.000Z"
    },
    {
      id: "d3bd68a3-e26b-4649-b4ec-6f4dfd6dbdbb",
      title: "The Year In Music 2018",
      content:
        "The <em>All Songs </em>gang looks back at this year's anthems and unmissable milestones, from Kendrick Lamar's Pulitzer to Childish Gambino's mind-blowing video for \"This Is America,\" Rosalía, Mitski and more. Hosts Bob Boilen and Robin Hilton are joined by NPR Music's Ann Powers and Stephen Thompson as they look back at the albums, artists and moments that mattered most in 2018.",
      contentSnippet:
        "The All Songs gang looks back at this year's anthems and unmissable milestones, from Kendrick Lamar's Pulitzer to Childish Gambino's mind-blowing video for \"This Is America,\" Rosalía, Mitski and more. Hosts Bob Boilen and Robin Hilton are joined by NPR Music's Ann Powers and Stephen Thompson as they look back at the albums, artists and moments that mattered most in 2018.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/12/20181203_asc_yearinreview2018rx.mp3?awCollectionId=510019&awEpisodeId=672787578&orgId=1&d=5283&p=510019&story=672787578&t=podcast&e=672787578&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "5283",
      isoDate: "2018-12-03T10:00:02.000Z"
    },
    {
      id: "af9a51e1-4de4-452a-8b43-8e021584ad7e",
      title: "New Music Friday: Nov. 30",
      content:
        "It's our final New Music Friday for 2018 – barring any big surprises, December is a pretty slow release month – but we end with some phenomenal new albums, including The 1975's <em>Brief Inquiry Into Online Relationships, </em>singer Alessia Cara's affecting coming-of-age manifesto <em>The Pains Of Growing, </em>an exercise in minimalism from rapper Earl Sweatshirt and more. Host Robin Hilton is joined this week by NPR Music's Rodney Carmichael, Sidney Madden and Lyndsey McKenna as they do a quick look at the most essential new albums dropping on Nov. 30. Featured Albums: The 1975: <em>A Brief Inquiry Into Online Relationships; </em>Meek Mill: <em>Championship; </em>J.I.D: <em>DiCaprio 2; </em>Alessia Cara: <em>The Pains Of Growing; </em>Earl Sweatshirt: <em>Some Rap Songs. </em>Other Notable Releases For Nov. 30: <em></em><em></em>Jeff Tweedy: <em>Warm; </em>Foxwarren: <em>Foxwarren; </em>Lil' Baby: <em>Street Gossip; </em>Neil Young: <em>Songs For Judy; </em>Bryan Ferry And His Orchestra: <em>Bitter-Sweet</em>",
      contentSnippet:
        "It's our final New Music Friday for 2018 – barring any big surprises, December is a pretty slow release month – but we end with some phenomenal new albums, including The 1975's Brief Inquiry Into Online Relationships, singer Alessia Cara's affecting coming-of-age manifesto The Pains Of Growing, an exercise in minimalism from rapper Earl Sweatshirt and more. Host Robin Hilton is joined this week by NPR Music's Rodney Carmichael, Sidney Madden and Lyndsey McKenna as they do a quick look at the most essential new albums dropping on Nov. 30. Featured Albums: The 1975: A Brief Inquiry Into Online Relationships; Meek Mill: Championship; J.I.D: DiCaprio 2; Alessia Cara: The Pains Of Growing; Earl Sweatshirt: Some Rap Songs. Other Notable Releases For Nov. 30: Jeff Tweedy: Warm; Foxwarren: Foxwarren; Lil' Baby: Street Gossip; Neil Young: Songs For Judy; Bryan Ferry And His Orchestra: Bitter-Sweet",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/11/20181130_asc_nmf_20181130_with_funder.mp3?awCollectionId=510019&awEpisodeId=672108250&orgId=1&d=1723&p=510019&story=672108250&t=podcast&e=672108250&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1723",
      isoDate: "2018-11-30T10:00:26.000Z"
    },
    {
      id: "a3f03abe-29ff-4a02-bcbf-7ecf2066ab2c",
      title: "Jeff Tweedy On Anxiety, Addiction And A Lifetime Making Art",
      content:
        "Jeff Tweedy's written a book that's incredibly open-hearted and honest. <em>Let's Go (So We Can Get Back) A Memoir of Recording and Discording with Wilco, Etc.</em> is a journey in music, friendship and family — from getting his first guitar (which didn't work out so well), to the formation of Uncle Tupelo with his friend, Jay Farrar, their surprising breakup and all the various incarnations of Wilco. It's filled with stories of insecurities, drug dependencies and thoughtful reflections. On this edition of <em>All Songs Considered</em>, host Bob Boilen talks with Jeff Tweedy about his remarkable life story, plays clips from the Penguin Random House audio version of Jeff's book and digs a bit into his new solo album called <em>Warm</em><em>,</em> which addresses a lot of personal thoughts and feels like a companion to Jeff's book.",
      contentSnippet:
        "Jeff Tweedy's written a book that's incredibly open-hearted and honest. Let's Go (So We Can Get Back) A Memoir of Recording and Discording with Wilco, Etc. is a journey in music, friendship and family — from getting his first guitar (which didn't work out so well), to the formation of Uncle Tupelo with his friend, Jay Farrar, their surprising breakup and all the various incarnations of Wilco. It's filled with stories of insecurities, drug dependencies and thoughtful reflections. On this edition of All Songs Considered, host Bob Boilen talks with Jeff Tweedy about his remarkable life story, plays clips from the Penguin Random House audio version of Jeff's book and digs a bit into his new solo album called Warm, which addresses a lot of personal thoughts and feels like a companion to Jeff's book.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/11/20181128_asc_tweedyfixedfinal-rx.mp3?awCollectionId=510019&awEpisodeId=671062834&orgId=1&d=2354&p=510019&story=671062834&t=podcast&e=671062834&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2354",
      isoDate: "2018-11-27T10:00:00.000Z"
    },
    {
      id: "1a46e6a7-8f61-4ddb-99c3-4745cee49714",
      title: "New Music Friday: Nov. 23",
      content:
        "Gobble gobble! Our Thanksgiving weekend edition of New Music Friday includes the warped and wild pop sounds of My Brightest Diamond, stunning instrumental records from Ed Harcourt and Jacco Gardner, punk with heart and humor from Art Brut and more. Host Robin Hilton is joined this week by NPR Music's Stephen Thompson as they do a quick sprint through the essential albums dropping on Nov. 23.  FEATURED ALBUMS:   1. My Brightest Diamond: <em>A Million And One;</em> 2. Ed Harcourt: <em>Beyond The End;</em> 3. Calexico: <em>The Black Light 20th Anniversary Edition;</em> 4. Art Brut: <em>Wham! Bang! Pow! Let's Rock Out!</em> 5. Songs Ohia: <em>Love & Work: The Lioness Sessions;</em> 6. Jacco Gardner: <em>Somnium</em>",
      contentSnippet:
        "Gobble gobble! Our Thanksgiving weekend edition of New Music Friday includes the warped and wild pop sounds of My Brightest Diamond, stunning instrumental records from Ed Harcourt and Jacco Gardner, punk with heart and humor from Art Brut and more. Host Robin Hilton is joined this week by NPR Music's Stephen Thompson as they do a quick sprint through the essential albums dropping on Nov. 23.  FEATURED ALBUMS:   1. My Brightest Diamond: A Million And One; 2. Ed Harcourt: Beyond The End; 3. Calexico: The Black Light 20th Anniversary Edition; 4. Art Brut: Wham! Bang! Pow! Let's Rock Out! 5. Songs Ohia: Love & Work: The Lioness Sessions; 6. Jacco Gardner: Somnium",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/11/20181123_asc_nmf_20181123_with_xpromo.mp3?awCollectionId=510019&awEpisodeId=670351502&orgId=1&d=1392&p=510019&story=670351502&t=podcast&e=670351502&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1392",
      isoDate: "2018-11-23T10:00:22.000Z"
    },
    {
      id: "365b6ee0-68bd-4d23-a106-76846923699f",
      title: "Guest DJ: boygenius",
      content:
        "If you don't know boygenius, there's a good chance you know at least one member of this trio, Julien Baker, Lucy Dacus and Phoebe Bridgers. They've just released a self-titled EP. We gathered in the studio here at NPR just moments after they finished their Tiny Desk Concert to talk about the music they love and listen to. In this conversation with these three talented songwriters, they talk about how they inspire one another and give each other confidence. Lucy Dacus says, \"I associate Phoebe and Julien with having real strength in darkness. They're also very wise and funny people that I trust as people, not just artists. So I kind of did assume that it would be very easy to work with them. And it turned out that was right.\"",
      contentSnippet:
        "If you don't know boygenius, there's a good chance you know at least one member of this trio, Julien Baker, Lucy Dacus and Phoebe Bridgers. They've just released a self-titled EP. We gathered in the studio here at NPR just moments after they finished their Tiny Desk Concert to talk about the music they love and listen to. In this conversation with these three talented songwriters, they talk about how they inspire one another and give each other confidence. Lucy Dacus says, \"I associate Phoebe and Julien with having real strength in darkness. They're also very wise and funny people that I trust as people, not just artists. So I kind of did assume that it would be very easy to work with them. And it turned out that was right.\"",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/11/20181119_asc_boygeniusfinal3-rx.mp3?awCollectionId=510019&awEpisodeId=669187867&orgId=1&d=3120&p=510019&story=669187867&t=podcast&e=669187867&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3120",
      isoDate: "2018-11-19T14:17:00.000Z"
    },
    {
      id: "2dc34746-a2bf-48fd-be86-a53a6af472cc",
      title: "New Music Friday: Nov. 16",
      content:
        "This week's list of essential new albums includes one of the year's most anticipated releases – Anderson .Paak's <em>Oxnard</em>, plus Mariah Carey's <em>Caution</em>, a lost Glen Campbell record he made for Elvis, a career-spanning retrospective on the late singer Chris Cornell (Soundgarden, Audioslave), The Good, The Bad And The Queen's first new album in more than a decade and more. <em>All Songs Considered</em>'s Robin Hilton is joined by NPR Music's Rodney Carmichael, Lars Gotrich and Stephen Thompson as they run through the best releases out on Nov. 16.Featured Albums:Anderson .Paak: <em>Oxnard</em>; Chris Cornell: <em>Chris Cornell</em>; Mariah Carey: <em>Caution;</em> Glen Campbell: <em>Glen Campbell Sings For The King</em>; Leikeli47: <em>Acrylic;</em> Various: <em>Brainfeeder X</em>; The Good, The Bad & The Queen: <em>Merrie Land;</em>Other Notable Releases For Nov. 16:The Smashing Pumpkins: <em>Shiny and Oh So Bright Vol. 1: No Past, No Future, No Sun</em>; Kate Bush: <em>Remastered Pt. 1</em>; The Rolling Stones: <em>Beggars Banquet 50th Anniversary Deluxe Edition</em>; Mumford & Sons: <em>Delta</em>; Ryley Walker: <em>The Lilywhite Sessions</em>; Eiko Ishibashi: <em>The Dream My Bones Dream</em>; Various: <em>The Greatest Showman: Reimagined</em>",
      contentSnippet:
        "This week's list of essential new albums includes one of the year's most anticipated releases – Anderson .Paak's Oxnard, plus Mariah Carey's Caution, a lost Glen Campbell record he made for Elvis, a career-spanning retrospective on the late singer Chris Cornell (Soundgarden, Audioslave), The Good, The Bad And The Queen's first new album in more than a decade and more. All Songs Considered's Robin Hilton is joined by NPR Music's Rodney Carmichael, Lars Gotrich and Stephen Thompson as they run through the best releases out on Nov. 16.Featured Albums:Anderson .Paak: Oxnard; Chris Cornell: Chris Cornell; Mariah Carey: Caution; Glen Campbell: Glen Campbell Sings For The King; Leikeli47: Acrylic; Various: Brainfeeder X; The Good, The Bad & The Queen: Merrie Land;Other Notable Releases For Nov. 16:The Smashing Pumpkins: Shiny and Oh So Bright Vol. 1: No Past, No Future, No Sun; Kate Bush: Remastered Pt. 1; The Rolling Stones: Beggars Banquet 50th Anniversary Deluxe Edition; Mumford & Sons: Delta; Ryley Walker: The Lilywhite Sessions; Eiko Ishibashi: The Dream My Bones Dream; Various: The Greatest Showman: Reimagined",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/11/20181116_asc_nmf_20181116tk2.mp3?awCollectionId=510019&awEpisodeId=668498423&orgId=1&d=1661&p=510019&story=668498423&t=podcast&e=668498423&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1661",
      isoDate: "2018-11-16T10:00:21.000Z"
    },
    {
      id: "981fbb9f-e383-439f-83ba-f8a984f93917",
      title: "How The Beatles Made 'The White Album'",
      content:
        'Fifty years ago, just before the holidays in 1968, The Beatles put out not just a new album, but a double album, something relatively unheard of at the time. The album art was a stark, white, glossy cover with raised, slanted lettering that simply said, "The Beatles." That self-titled album, with its 30 songs that span genres from American country music to avant-garde tape collage, has come to be known as "The White Album." And in celebration of it\'s birth 50 years ago, The Beatles label Apple Records has scoured the archives for a new deluxe edition of the album that, for the first time, includes previously unreleased, early demo recordings, studio outtakes and stunning remixes in both stereo and 5.1 surround. On this episode of All Songs Considered we\'ve got a conversation with the man who produced this 100-plus song celebration, Giles Martin, whose father, George Martin, produced "The White Album" back in \'68 (along with most everything else The Beatles ever made). In this interview with Giles Martin, you\'ll hear some of the early demos, outtakes and remixes. But he begins by describing the process of making of the "The White Album," how it turned out to be a much-less planned and much more organic process than ever, and how that frustrated George Martin.',
      contentSnippet:
        'Fifty years ago, just before the holidays in 1968, The Beatles put out not just a new album, but a double album, something relatively unheard of at the time. The album art was a stark, white, glossy cover with raised, slanted lettering that simply said, "The Beatles." That self-titled album, with its 30 songs that span genres from American country music to avant-garde tape collage, has come to be known as "The White Album." And in celebration of it\'s birth 50 years ago, The Beatles label Apple Records has scoured the archives for a new deluxe edition of the album that, for the first time, includes previously unreleased, early demo recordings, studio outtakes and stunning remixes in both stereo and 5.1 surround. On this episode of All Songs Considered we\'ve got a conversation with the man who produced this 100-plus song celebration, Giles Martin, whose father, George Martin, produced "The White Album" back in \'68 (along with most everything else The Beatles ever made). In this interview with Giles Martin, you\'ll hear some of the early demos, outtakes and remixes. But he begins by describing the process of making of the "The White Album," how it turned out to be a much-less planned and much more organic process than ever, and how that frustrated George Martin.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/11/20181113_asc_whitealbumfinal2.mp3?awCollectionId=510019&awEpisodeId=667114702&orgId=1&d=2656&p=510019&story=667114702&t=podcast&e=667114702&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2656",
      isoDate: "2018-11-13T10:00:19.000Z"
    },
    {
      id: "686f988d-a39b-4974-b1bc-8d6a9b97d114",
      title: "New Music Friday: Nov. 9",
      content:
        "This week's best new albums includes emo-rapper Lil Peep's posthumous follow-up to <em>Come Over When Your Sober</em>, 50th anniversary editions of Jimi Hendrix's <em>Electric Ladyland</em> and The Beatles \"White Album,\" a labor of love from the late soul singer Charles Bradley, rock with a wink from Laura Jane Grace & The Devouring Mothers, the music of Hanson set to strings and more.FEATURED ALBUMS: Laura Jane Grace & The Devouring Mothers: <em>Bought to Rot; </em>The Glands: <em>Double Coda; </em>Charles Bradley: <em>Black Velvet; </em>Jimi Hendrix: <em>Electric Ladyland 50th Anniversary Deluxe Edition; </em>Golden Hornet with Jeffrey Zeigler: <em>The Sound of Science;</em> Hanson: <em>String Theory; </em>Meg Baird & Mary Lattimore: <em>Ghost Forests; </em>Lil Peep: <em>Come Over When You're Sober, Pt. 2; </em>OTHER NOTABLE RELEASES FOR NOV. 9: The Beatles: <em>The Beatles</em> (\"The White Album\"); J. Fernandez: <em>Occasional Din</em>; J. Masics: <em>Elastic Days</em>; Muse: <em>Simulation Theory</em>; Tom Adams: <em>Yes, Sleep Well Death</em>, Boygenius: <em>Boygenius</em> (physical release); Rays: <em>You Can Get There From Here</em>; Imagine Dragons: <em>Origins</em>",
      contentSnippet:
        "This week's best new albums includes emo-rapper Lil Peep's posthumous follow-up to Come Over When Your Sober, 50th anniversary editions of Jimi Hendrix's Electric Ladyland and The Beatles \"White Album,\" a labor of love from the late soul singer Charles Bradley, rock with a wink from Laura Jane Grace & The Devouring Mothers, the music of Hanson set to strings and more.FEATURED ALBUMS: Laura Jane Grace & The Devouring Mothers: Bought to Rot; The Glands: Double Coda; Charles Bradley: Black Velvet; Jimi Hendrix: Electric Ladyland 50th Anniversary Deluxe Edition; Golden Hornet with Jeffrey Zeigler: The Sound of Science; Hanson: String Theory; Meg Baird & Mary Lattimore: Ghost Forests; Lil Peep: Come Over When You're Sober, Pt. 2; OTHER NOTABLE RELEASES FOR NOV. 9: The Beatles: The Beatles (\"The White Album\"); J. Fernandez: Occasional Din; J. Masics: Elastic Days; Muse: Simulation Theory; Tom Adams: Yes, Sleep Well Death, Boygenius: Boygenius (physical release); Rays: You Can Get There From Here; Imagine Dragons: Origins",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/11/20181109_asc_nmf_20181109tk2-rxloud.mp3?awCollectionId=510019&awEpisodeId=666004175&orgId=1&d=1633&p=510019&story=666004175&t=podcast&e=666004175&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1633",
      isoDate: "2018-11-09T10:00:28.000Z"
    },
    {
      id: "f74b9eb6-d916-4477-bd77-dffcb50f4663",
      title:
        "New Mix: Deerhunter, Andrew Bird, Tomberlin, Bokanté + Metropole Orkest, More",
      content:
        'As voters head to the polls today, we hear from artists whose music speaks to our current political and cultural moment. Full playlist: 1. Deerhunter: "Death In Midsummer," 2. Andrew Bird: "Bloodless," 3. Alexander: "Strange Time," 4. Tomberlin: "Self-Help," 5. Foxwarren: "Everything Apart," 6. Ian William Craig: "TC-377 Poem," 7. Bokanté + Metropole Orkest: "All The Way Home"',
      contentSnippet:
        'As voters head to the polls today, we hear from artists whose music speaks to our current political and cultural moment. Full playlist: 1. Deerhunter: "Death In Midsummer," 2. Andrew Bird: "Bloodless," 3. Alexander: "Strange Time," 4. Tomberlin: "Self-Help," 5. Foxwarren: "Everything Apart," 6. Ian William Craig: "TC-377 Poem," 7. Bokanté + Metropole Orkest: "All The Way Home"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/11/20181106_asc_20181106-rx.mp3?awCollectionId=510019&awEpisodeId=664591183&orgId=1&d=2916&p=510019&story=664591183&t=podcast&e=664591183&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2916",
      isoDate: "2018-11-06T10:00:25.000Z"
    },
    {
      id: "9106cfed-8abe-42b1-b28d-e19acdb3e8fa",
      title: "New Music Friday For Nov. 2: 8 Albums You Need To Hear Now",
      content:
        "This week's sprint through the best new albums, out on Nov. 2, includes a collection of outtakes and rarities from Bob Dylan's Blood On The Tracks period, the Flamenco-pop of Rosalía, profoundly moving reflections from Marianne Faithful, the prepared piano of Kelly Moran, fuzz-pop from Stove and more. Host Robin Hilton is joined for this week's New Music Friday by NPR Music's Ann Powers, Lars Gotrich and Stephen Thompson. Featured Albums: Rosalía: <em>El Mal Querer</em>; Bob Dylan: <em>More Blood, More Tracks; </em>Marianne Faithful: <em>Negative Capability</em>; Pistol Annies: <em>Interstate Gospel;</em> Rosanne Cash: <em>She Remembers Everything;</em> Stove: <em>'s Favorite Friend; </em>Kelly Moran: <em>Ultraviolet;</em> Doug Paisley: Starter Home; Other notable releases for Nov. 2: Tenacious D: <em>Post-Apocalypto</em>; Dead Can Dance: <em>Dionysus</em>; Molly Nilsson: <em>Twenty Twenty</em>; Gabby's World: <em>Beast On Beast</em>; Bill Ryder-Jones: <em>Yawn</em>; Rodney Crowell: <em>Christmas Everywhere</em>; JD McPherson: <em>SOCKS</em>; Sun Kil Moon: <em>This Is My Dinner</em>",
      contentSnippet:
        "This week's sprint through the best new albums, out on Nov. 2, includes a collection of outtakes and rarities from Bob Dylan's Blood On The Tracks period, the Flamenco-pop of Rosalía, profoundly moving reflections from Marianne Faithful, the prepared piano of Kelly Moran, fuzz-pop from Stove and more. Host Robin Hilton is joined for this week's New Music Friday by NPR Music's Ann Powers, Lars Gotrich and Stephen Thompson. Featured Albums: Rosalía: El Mal Querer; Bob Dylan: More Blood, More Tracks; Marianne Faithful: Negative Capability; Pistol Annies: Interstate Gospel; Rosanne Cash: She Remembers Everything; Stove: 's Favorite Friend; Kelly Moran: Ultraviolet; Doug Paisley: Starter Home; Other notable releases for Nov. 2: Tenacious D: Post-Apocalypto; Dead Can Dance: Dionysus; Molly Nilsson: Twenty Twenty; Gabby's World: Beast On Beast; Bill Ryder-Jones: Yawn; Rodney Crowell: Christmas Everywhere; JD McPherson: SOCKS; Sun Kil Moon: This Is My Dinner",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/11/20181102_asc_nmf_20181102tk2-rxloud.mp3?awCollectionId=510019&awEpisodeId=663309991&orgId=1&d=1641&p=510019&story=663309991&t=podcast&e=663309991&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1641",
      isoDate: "2018-11-02T09:00:26.000Z"
    },
    {
      id: "c9991703-73db-4f86-8ac4-1afc6f78d9c0",
      title: " New Mix: Pedro The Lion, boygenius, Rubblebucket, And More",
      content:
        'This week on the show, we hear from artists who find ways to celebrate life no matter how broken it may be. Full playlist: 1. boygenius: "Bite the Hand," 2. Pedro The Lion: "Yellow Bike," 3. Quivers: "Pigeons," 4. PAVVLA: "Unbreakable," 5. Tōth: "Copilot," 6. Rubblebucket: "What Life Is"',
      contentSnippet:
        'This week on the show, we hear from artists who find ways to celebrate life no matter how broken it may be. Full playlist: 1. boygenius: "Bite the Hand," 2. Pedro The Lion: "Yellow Bike," 3. Quivers: "Pigeons," 4. PAVVLA: "Unbreakable," 5. Tōth: "Copilot," 6. Rubblebucket: "What Life Is"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/10/20181030_asc_asc20181030_withxpromo.mp3?awCollectionId=510019&awEpisodeId=661963964&orgId=1&d=2334&p=510019&story=661963964&t=podcast&e=661963964&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2334",
      isoDate: "2018-10-30T09:00:29.000Z"
    },
    {
      id: "83747071-5785-4ee4-b1e6-cfa6da15a7ba",
      title: "New Music Friday: Oct. 26",
      content:
        "This week's batch of essential new albums includes Robyn's melancholy return to the dance floor, rock-and-roll madness from Ty Segall, the otherworldly voice of NAO, singer Julia Holter's mind-blowing masterpiece <em>Aviary, </em>and more. Host Robin Hilton is joined by NPR Music's Ann Powers and Stephen Thompson as they run through the best full-length releases out on Oct. 26. FEATURED ALBUMS: Oh Pep! <em>I Wasn't Only Thinking of You; </em>Robyn: <em>Honey; </em>Ty Segall: <em>Fudge Sandwich; </em>Nao: <em>Saturn; </em>Laura Gibson: <em>Goners; </em>Julia Holter: <em>Aviary; </em>Maggie Roche: <em>Where Do I Come From? </em>David Crosby: <em>Here If You Listen; </em>OTHER NOTABLE RELEASES FOR OCT. 26: Thom Yorke: <em>Suspiria; </em>Ian Sweet: <em>Crush Crusher; </em>Georgia Ann Muldrow: <em>Overload; </em>Black Eyed Peas: <em>Masters of the Sun Vol. 1; </em>Miya Folick: <em>Premonitions; </em>Homeboy Sandman: <em>Humble Pi; </em>Devon Church: <em>We Are Inextricable; </em>Tasha: <em>Alone at Last; </em>Joji: <em>Ballads 1</em>",
      contentSnippet:
        "This week's batch of essential new albums includes Robyn's melancholy return to the dance floor, rock-and-roll madness from Ty Segall, the otherworldly voice of NAO, singer Julia Holter's mind-blowing masterpiece Aviary, and more. Host Robin Hilton is joined by NPR Music's Ann Powers and Stephen Thompson as they run through the best full-length releases out on Oct. 26. FEATURED ALBUMS: Oh Pep! I Wasn't Only Thinking of You; Robyn: Honey; Ty Segall: Fudge Sandwich; Nao: Saturn; Laura Gibson: Goners; Julia Holter: Aviary; Maggie Roche: Where Do I Come From? David Crosby: Here If You Listen; OTHER NOTABLE RELEASES FOR OCT. 26: Thom Yorke: Suspiria; Ian Sweet: Crush Crusher; Georgia Ann Muldrow: Overload; Black Eyed Peas: Masters of the Sun Vol. 1; Miya Folick: Premonitions; Homeboy Sandman: Humble Pi; Devon Church: We Are Inextricable; Tasha: Alone at Last; Joji: Ballads 1",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/10/20181026_asc_nmf_20181026tk2-rxl.mp3?awCollectionId=510019&awEpisodeId=660824192&orgId=1&d=1495&p=510019&story=660824192&t=podcast&e=660824192&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1495",
      isoDate: "2018-10-26T09:00:07.000Z"
    },
    {
      id: "3a694947-68c6-45ff-bd9d-fb8ac5e2ed08",
      title:
        'New Mix: Tarriona "Tank" Ball, J. Fernandez, Tiny Ruins, Koda, More',
      content:
        'This week\'s essential mix includes songs of letting go, of healing, moving on and finding a deeper appreciation for the wonder of life. Tarriona "Tank" Ball (of the 2017 Tiny Desk Contest-winning band Tank And The Bangas) offers a surprising and beautiful take on the sentimental 1938 classic "I\'ll Be Seeing You." The psych-pop multi-instrumentalist (and former <em>All Songs Considered </em>intern) J. Fernandez tries to calm his irrational anxieties on the song "Common Sense." And Monica Martin of the band Phox examines the cruelty of denial and staying in a broken relationship. Also on the show: The San Francisco-based band Papercuts turns a joke about "Clean Living" into a metaphor the empty promises of quick fixes; the artist known as SASAMI dreams of reuniting with a lost love when the time is right; Jordan Sudak, who writes and records as Koda, digs deep into inconvenient truths; and Hollie Fullbrook of the band Tiny Ruins reveals the incredible story behind her new song "Olympic Girls." But first, Bob Boilen and Robin Hilton take a moment to consider the possibility that every little thing is alive.',
      contentSnippet:
        'This week\'s essential mix includes songs of letting go, of healing, moving on and finding a deeper appreciation for the wonder of life. Tarriona "Tank" Ball (of the 2017 Tiny Desk Contest-winning band Tank And The Bangas) offers a surprising and beautiful take on the sentimental 1938 classic "I\'ll Be Seeing You." The psych-pop multi-instrumentalist (and former All Songs Considered intern) J. Fernandez tries to calm his irrational anxieties on the song "Common Sense." And Monica Martin of the band Phox examines the cruelty of denial and staying in a broken relationship. Also on the show: The San Francisco-based band Papercuts turns a joke about "Clean Living" into a metaphor the empty promises of quick fixes; the artist known as SASAMI dreams of reuniting with a lost love when the time is right; Jordan Sudak, who writes and records as Koda, digs deep into inconvenient truths; and Hollie Fullbrook of the band Tiny Ruins reveals the incredible story behind her new song "Olympic Girls." But first, Bob Boilen and Robin Hilton take a moment to consider the possibility that every little thing is alive.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/10/20181023_asc_asc20181023xpromo.mp3?awCollectionId=510019&awEpisodeId=659696129&orgId=1&d=2400&p=510019&story=659696129&t=podcast&e=659696129&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2400",
      isoDate: "2018-10-23T09:00:00.000Z"
    },
    {
      id: "fdc1d3e9-8dd6-4e11-a079-4d25e6ddb144",
      title: "Beirut's Zach Condon Shares A New Song And The Story Behind It",
      content:
        "Zach Condon, the mastermind behind Beirut, will release his fifth studio album, <em>Gallipoli, </em>on Feb. 1. In this conversation, he shares the title track and details how the project came together.",
      contentSnippet:
        "Zach Condon, the mastermind behind Beirut, will release his fifth studio album, Gallipoli, on Feb. 1. In this conversation, he shares the title track and details how the project came together.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/10/20181022_asc_beirut-rx.mp3?awCollectionId=510019&awEpisodeId=659441031&orgId=1&d=1336&p=510019&story=659441031&t=podcast&e=659441031&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1336",
      isoDate: "2018-10-22T11:23:00.000Z"
    },
    {
      id: "53383612-98f6-4805-8f90-50d616681466",
      title: "New Music Friday: Oct. 19",
      content:
        "On this week's sprint through the best new releases we've got irresistible earworms from Peter Bjorn & John, the deep soul of PHONY PPL, Esperanza Spalding's mind-bending songcraft and more. All Songs Considered's Robin Hilton is joined by NPR Music's Ann Powers, Lars Gotrich, Nate Chinen of WBGO, Sidney Madden and Stephen Thompson as they breakdown the best albums out on Oct. 19. FEATURED ALBUMS: Elle King: <em>Shake the Spirit</em>; Peter Bjorn & John: <em>Darker Days</em>; PHONY PPL: <em>mō'zā-ik.</em>; John Carpenter: <em>Halloween</em> (2018 Soundtrack); Neneh Cherry: <em>Broken Politics</em>; Will Oldham: <em>Songs of Love and Horror</em>; Yoko Ono: <em>Warzone</em>; Esperanza Spalding: <em>12 Little Spells</em>. OTHER NOTABLE RELEASES FOR OCT. 19: Papercuts: <em>Parallel Universe Blues</em>; Cloud Nothings: <em>Last Building Burning</em>; Becky Warren: <em>Undesirable</em>",
      contentSnippet:
        "On this week's sprint through the best new releases we've got irresistible earworms from Peter Bjorn & John, the deep soul of PHONY PPL, Esperanza Spalding's mind-bending songcraft and more. All Songs Considered's Robin Hilton is joined by NPR Music's Ann Powers, Lars Gotrich, Nate Chinen of WBGO, Sidney Madden and Stephen Thompson as they breakdown the best albums out on Oct. 19. FEATURED ALBUMS: Elle King: Shake the Spirit; Peter Bjorn & John: Darker Days; PHONY PPL: mō'zā-ik.; John Carpenter: Halloween (2018 Soundtrack); Neneh Cherry: Broken Politics; Will Oldham: Songs of Love and Horror; Yoko Ono: Warzone; Esperanza Spalding: 12 Little Spells. OTHER NOTABLE RELEASES FOR OCT. 19: Papercuts: Parallel Universe Blues; Cloud Nothings: Last Building Burning; Becky Warren: Undesirable",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/10/20181019_asc_nmf_20181019tk2.mp3?awCollectionId=510019&awEpisodeId=658686895&orgId=1&d=1497&p=510019&story=658686895&t=podcast&e=658686895&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1497",
      isoDate: "2018-10-19T09:00:20.000Z"
    },
    {
      id: "04a895c8-1c5e-44e6-83af-378c24a22ecf",
      title: "New Mix: Sharon Van Etten, SOAK, Miya Folick & More",
      content:
        'This week\'s episode of <em>All Songs Considered</em> sees NPR Music\'s Bob Boilen and Robin Hilton reunited to pop some popcorn and reflect on the years they\'ve spent on and off the show. A driving single with a pulsing beat stretches Sharon Van Etten\'s voice to new heights, while J.S. Ondara\'s debut takes a fresh look at the American dream and the classic rock that inspired his move from Nairobi to Minnesota. Also on the show: Miya Folick delivers a heart-wrenching apology, Berlin-based composer Tom Adams spins our darkest fears into atmospheric music, and SOAK builds a pop song around a blissful confession. But first, we take a moment to remember Robin\'s dad, who passed away last week, with a few words from John Denver. 1. John Denver: "Poems, Prayers And Promises," 2. Tom Adams: "In Darkness," 3. Sharon Van Etten: "Come Back Kid," 4. SOAK: "Everybody Loves You," 5. Miya Folick: "Thingamig," 6. Jason Lytle: "Color of Dirt," 7. J.S. Ondara: "American Dream"',
      contentSnippet:
        'This week\'s episode of All Songs Considered sees NPR Music\'s Bob Boilen and Robin Hilton reunited to pop some popcorn and reflect on the years they\'ve spent on and off the show. A driving single with a pulsing beat stretches Sharon Van Etten\'s voice to new heights, while J.S. Ondara\'s debut takes a fresh look at the American dream and the classic rock that inspired his move from Nairobi to Minnesota. Also on the show: Miya Folick delivers a heart-wrenching apology, Berlin-based composer Tom Adams spins our darkest fears into atmospheric music, and SOAK builds a pop song around a blissful confession. But first, we take a moment to remember Robin\'s dad, who passed away last week, with a few words from John Denver. 1. John Denver: "Poems, Prayers And Promises," 2. Tom Adams: "In Darkness," 3. Sharon Van Etten: "Come Back Kid," 4. SOAK: "Everybody Loves You," 5. Miya Folick: "Thingamig," 6. Jason Lytle: "Color of Dirt," 7. J.S. Ondara: "American Dream"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/10/20181016_asc_20181016withxpromo.mp3?awCollectionId=510019&awEpisodeId=657766522&orgId=1&d=2798&p=510019&story=657766522&t=podcast&e=657766522&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2798",
      isoDate: "2018-10-16T12:46:00.000Z"
    },
    {
      id: "c0e36cf5-1f83-4efc-b577-72097b925922",
      title: "New Music Friday: Oct. 12",
      content:
        "Our list of the best new albums out this week includes the comical and moving synth pop of John Grant, enchanting harmonies from The Watson Twins, an audacious jazz album from trumpeter Ambrose Akinmusire, the first new music from Elvis Costello & The Imposers in a decade and more. Host Robin Hilton returns to breakdown this week's essential releases with NPR Music's Ann Powers and Stephen Thompson, and Nate Chinen from WBGO.Featured Albums: Elvis Costello & The Imposters: <em>Look Now</em>; The Watson Twins: <em>Duo</em>; Ambrose Akinmusire: <em>Origami Harvest</em>; John Grant: <em>Love is Magic</em>; Kurt Vile: <em>Bottle it In</em>; Colter Wall: <em>Songs of the Plains</em>.Other Notable Releases: Quavo: <em>Quavo Huncho</em>; BRONCHO: <em>Bad Behavior</em>; John Hiatt: <em>The Eclipse Sessions</em>; The Dodos: <em>Certainty Waves</em>; Tom Morello: <em>The Atlas Underground</em>; Matthew Dear: <em>Bunny</em>; Dave Davies: <em>Decade</em>; Ella Mai: <em>Ella Mai</em>; Adam Hood: <em>Somewhere in Between</em>; Yowler: <em>Black Dog In My Path</em>",
      contentSnippet:
        "Our list of the best new albums out this week includes the comical and moving synth pop of John Grant, enchanting harmonies from The Watson Twins, an audacious jazz album from trumpeter Ambrose Akinmusire, the first new music from Elvis Costello & The Imposers in a decade and more. Host Robin Hilton returns to breakdown this week's essential releases with NPR Music's Ann Powers and Stephen Thompson, and Nate Chinen from WBGO.Featured Albums: Elvis Costello & The Imposters: Look Now; The Watson Twins: Duo; Ambrose Akinmusire: Origami Harvest; John Grant: Love is Magic; Kurt Vile: Bottle it In; Colter Wall: Songs of the Plains.Other Notable Releases: Quavo: Quavo Huncho; BRONCHO: Bad Behavior; John Hiatt: The Eclipse Sessions; The Dodos: Certainty Waves; Tom Morello: The Atlas Underground; Matthew Dear: Bunny; Dave Davies: Decade; Ella Mai: Ella Mai; Adam Hood: Somewhere in Between; Yowler: Black Dog In My Path",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/10/20181012_asc_nmf_20181012_final.mp3?awCollectionId=510019&awEpisodeId=656794417&orgId=1&d=1345&p=510019&story=656794417&t=podcast&e=656794417&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1345",
      isoDate: "2018-10-12T09:00:20.000Z"
    },
    {
      id: "15bc3437-4284-4f9f-83f6-e18fe9f91a13",
      title: "Adrianne Lenker (Big Thief) On abysskiss And Songs That Heal",
      content:
        "A conversation with songwriter and singer Adrianne Lenker from Big Thief on her newest solo record called abysskiss.",
      contentSnippet:
        "A conversation with songwriter and singer Adrianne Lenker from Big Thief on her newest solo record called abysskiss.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/10/20181009_asc_adriannelenker2-rx.mp3?awCollectionId=510019&awEpisodeId=655573813&orgId=1&d=1938&p=510019&story=655573813&t=podcast&e=655573813&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1938",
      isoDate: "2018-10-09T07:00:28.000Z"
    },
    {
      id: "baec263e-28d6-4ba2-be43-8dc363357506",
      title: "New Music Friday: Oct. 5",
      content:
        "With Robin Hilton out for one more week, NPR Music's Ann Powers and Lars Gotrich join Stephen Thompson for a whirlwind tour of a busy release day. We've got the first album in five years by the spiky pop-rock band Swearin' (featuring the great and good Allison Crutchfield); the gorgeous first album in <em>six </em>years by Chan Marshall, a.k.a. Cat Power; the heavy, almost absurdly ambitious rock and roll of F***** Up; the versatile country of Eric Church; the springy and inspirational anthems of multi-hyphenate powerhouse Tunde Olaniran; the sprawling, deeply searching rock of mewithoutYou; the rugged metal of Matt Pike's long-running band High on Fire; and Phosporescent's Matthew Houck, whose beatific folk-rock sprawls with winsome approachability.",
      contentSnippet:
        "With Robin Hilton out for one more week, NPR Music's Ann Powers and Lars Gotrich join Stephen Thompson for a whirlwind tour of a busy release day. We've got the first album in five years by the spiky pop-rock band Swearin' (featuring the great and good Allison Crutchfield); the gorgeous first album in six years by Chan Marshall, a.k.a. Cat Power; the heavy, almost absurdly ambitious rock and roll of F***** Up; the versatile country of Eric Church; the springy and inspirational anthems of multi-hyphenate powerhouse Tunde Olaniran; the sprawling, deeply searching rock of mewithoutYou; the rugged metal of Matt Pike's long-running band High on Fire; and Phosporescent's Matthew Houck, whose beatific folk-rock sprawls with winsome approachability.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/10/20181004_asc_nmf2.mp3?awCollectionId=510019&awEpisodeId=654622688&orgId=1&d=1935&p=510019&story=654622688&t=podcast&e=654622688&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1935",
      isoDate: "2018-10-05T09:00:22.000Z"
    },
    {
      id: "33e52127-e114-4195-a10a-7c012ab54bb3",
      title:
        "Guest DJ: Hozier - Why Music From The Civil Rights Movement Still Resonates",
      content:
        "A conversation with Hozier. How does music travel through time? How does a kid growing up in Ireland latch on to music 50 years old and find resonance an ocean away? His new EP <em>Nina Cried Power -</em> his first major release since his 2014 debut album pays tribute to the 20th century musicians whose music ignited Civil Rights movements around the world. We hear new music from Hozier and the music that inspires him.",
      contentSnippet:
        "A conversation with Hozier. How does music travel through time? How does a kid growing up in Ireland latch on to music 50 years old and find resonance an ocean away? His new EP Nina Cried Power - his first major release since his 2014 debut album pays tribute to the 20th century musicians whose music ignited Civil Rights movements around the world. We hear new music from Hozier and the music that inspires him.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/10/20181002_asc_hozier-rx2.mp3?awCollectionId=510019&awEpisodeId=653498263&orgId=1&d=2301&p=510019&story=653498263&t=podcast&e=653498263&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2301",
      isoDate: "2018-10-02T09:00:13.000Z"
    },
    {
      id: "248dd66d-f08e-47bc-9f23-68dc28e2508a",
      title: "New Music Friday: Sep. 28",
      content:
        "Robin Hilton is out this week, so Stephen Thompson kicks off this installment of New Music Friday by blaring some Cher, whose new album of ABBA covers is a must for anyone who flipped out when the singer made her entrance in this summer's <em>Mamma Mia 2: Here We Go Again</em>. From there, NPR Music's Marissa Lorusso and Lars Gotrich join to discuss other must-hear albums out on Sep. 28. Nile Rodgers & Chic's first album in 26 years; the rousing rock and roll of Restorations and Doe; a victory lap for 86-year-old country legend Loretta Lynn; the ambitious electronic soundscapes of Tim Hecker; and the guest-star-laden return of Marissa Nadler, whose new album features guest vocals from the likes of Angel Olsen and Sharon Van Etten. Featured Albums: 1. Cher: <em>Dancing Queen</em> 2. Nile Rodgers & Chic: <em>It's About Time</em> 3. Restorations: <em>LP5000</em> 4. Doe: <em>Grow Into It</em> 5. Loretta Lynn: <em>Wouldn't It Be Great</em> 6. Tim Hecker: <em>Konoyo</em> 7. Marissa Nadler: <em>For My Crimes</em>",
      contentSnippet:
        "Robin Hilton is out this week, so Stephen Thompson kicks off this installment of New Music Friday by blaring some Cher, whose new album of ABBA covers is a must for anyone who flipped out when the singer made her entrance in this summer's Mamma Mia 2: Here We Go Again. From there, NPR Music's Marissa Lorusso and Lars Gotrich join to discuss other must-hear albums out on Sep. 28. Nile Rodgers & Chic's first album in 26 years; the rousing rock and roll of Restorations and Doe; a victory lap for 86-year-old country legend Loretta Lynn; the ambitious electronic soundscapes of Tim Hecker; and the guest-star-laden return of Marissa Nadler, whose new album features guest vocals from the likes of Angel Olsen and Sharon Van Etten. Featured Albums: 1. Cher: Dancing Queen 2. Nile Rodgers & Chic: It's About Time 3. Restorations: LP5000 4. Doe: Grow Into It 5. Loretta Lynn: Wouldn't It Be Great 6. Tim Hecker: Konoyo 7. Marissa Nadler: For My Crimes",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/09/20180928_asc_nmf20180928-rx.mp3?awCollectionId=510019&awEpisodeId=652392570&orgId=1&d=1512&p=510019&story=652392570&t=podcast&e=652392570&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1512",
      isoDate: "2018-09-28T09:00:07.000Z"
    },
    {
      id: "f721a833-0f24-46ee-8f32-1d44dafb675a",
      title: "Jeff Tweedy, Allen Tate, Charly Bliss, Bad Moves & more",
      content:
        'On this edition of <em>All Songs Considered</em>, we lean toward contemplative songs with fuzzy guitars. NPR Music\'s Marissa Lorusso and I premiere new music from Jeff Tweedy. His new album <em>Warm</em> looks at life as it nears that moment when the great piano labeled "death" is about to drop from the sky. The band Charly Bliss writes its first love song, Allen Tate takes a second break from San Fermin to make an inward-looking track of self-reflection, Bad Moves thoughtfully steps between adulthood and youth and Saint Sister lights up an ethereal harp driven tune. Also: We are joined by intern Kristy Guilbault to hear Yowler yowl.',
      contentSnippet:
        'On this edition of All Songs Considered, we lean toward contemplative songs with fuzzy guitars. NPR Music\'s Marissa Lorusso and I premiere new music from Jeff Tweedy. His new album Warm looks at life as it nears that moment when the great piano labeled "death" is about to drop from the sky. The band Charly Bliss writes its first love song, Allen Tate takes a second break from San Fermin to make an inward-looking track of self-reflection, Bad Moves thoughtfully steps between adulthood and youth and Saint Sister lights up an ethereal harp driven tune. Also: We are joined by intern Kristy Guilbault to hear Yowler yowl.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/09/20180925_asc_20180925-rx.mp3?awCollectionId=510019&awEpisodeId=651458723&orgId=1&d=2349&p=510019&story=651458723&t=podcast&e=651458723&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2349",
      isoDate: "2018-09-25T18:15:00.000Z"
    },
    {
      id: "86b2ff3b-94bd-4aec-b167-7a9b8d9fd49c",
      title: "New Music Friday: Sep. 21",
      content:
        "It's another busy release week, with intimate home recordings from Prince, ragged rock from Metric, the angelic harmonies of Mountain Man and Richard Swift's final recordings among our shortlist for the must-hear albums out on Sep. 21. All Songs Considered's Robin Hilton talks with NPR Music's Ann Powers, Lars Gotrich, Rodney Carmichael and Stephe Thompson, along with Nate Chinen from WBGO about the music you need to hear now.Featured Albums:1. Metric: <em></em>'Art of Doubt'2. Mountain Man: 'Magic Ship'3. Christian Sands: 'Facing Dragons'4. Father: 'Awful Swim'5. Prince: 'Piano and a Microphone, 1983'6. Richard Swift: 'The Hex'7. Lonnie Holley: 'MITH'8. Villagers: 'The Art of Pretending to Swim'Other Notable Releases:Lupe Fiasco: 'Drogas Wave'Brockhampton: 'Iridesence'Lil Wayne: 'Christine and the Queens: 'Chris'Mutual Benefit: 'Thunder Follows the Light'Liars: 'Titles With the Word Fountain'",
      contentSnippet:
        "It's another busy release week, with intimate home recordings from Prince, ragged rock from Metric, the angelic harmonies of Mountain Man and Richard Swift's final recordings among our shortlist for the must-hear albums out on Sep. 21. All Songs Considered's Robin Hilton talks with NPR Music's Ann Powers, Lars Gotrich, Rodney Carmichael and Stephe Thompson, along with Nate Chinen from WBGO about the music you need to hear now.Featured Albums:1. Metric: 'Art of Doubt'2. Mountain Man: 'Magic Ship'3. Christian Sands: 'Facing Dragons'4. Father: 'Awful Swim'5. Prince: 'Piano and a Microphone, 1983'6. Richard Swift: 'The Hex'7. Lonnie Holley: 'MITH'8. Villagers: 'The Art of Pretending to Swim'Other Notable Releases:Lupe Fiasco: 'Drogas Wave'Brockhampton: 'Iridesence'Lil Wayne: 'Christine and the Queens: 'Chris'Mutual Benefit: 'Thunder Follows the Light'Liars: 'Titles With the Word Fountain'",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/09/20180921_asc_nmf_20180921_tk_2.mp3?awCollectionId=510019&awEpisodeId=650223543&orgId=1&d=1643&p=510019&story=650223543&t=podcast&e=650223543&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1643",
      isoDate: "2018-09-21T09:00:21.000Z"
    },
    {
      id: "bb5d294f-2ef6-4451-a35d-23124a9ac850",
      title: "The Best Of AMERICANAFEST 2018",
      content:
        'Defining Americana isn\'t easy. At the festival, there were musicians from all around the world. Some were rooted in blues, jazz, boogie rock, bluegrass, soul, gospel, comedy, country, Tejano and much more. The Milk Carton Kids opened the 17th annual Americana Honors & Awards Show at the Ryman Auditorium with an original number we\'re exclusively premiering today. Their dry wit, reminiscent of 1960s Smothers Brothers parodies, pokes fun at the genre. NPR Music\'s Ann Powers, Jewly Hight and Bob Boilen spent the past week trying to hear as many of the 500 bands in the 40 or so venues around town as possible. Listen and find out what we discovered and what we\'d love to pass along. 1. The Milk Carton Kids: "What Even Is Americana," 2. Amythyst Kiah: "Wildebeest," 3. Birds of Chicago: "American Flowers," 4. William Prince: "The Carny," 5. Lula Wiles: "One More Night," 6. Mipso: "Edges Run," 7. Ruston Kelly: "Faceplant," 8. Talibah Safiya: "Middle of the Night," 9. Katie Pruitt: "Grace Has a Gun," 10. Marc Ribot: "Knock That Statue Down"',
      contentSnippet:
        'Defining Americana isn\'t easy. At the festival, there were musicians from all around the world. Some were rooted in blues, jazz, boogie rock, bluegrass, soul, gospel, comedy, country, Tejano and much more. The Milk Carton Kids opened the 17th annual Americana Honors & Awards Show at the Ryman Auditorium with an original number we\'re exclusively premiering today. Their dry wit, reminiscent of 1960s Smothers Brothers parodies, pokes fun at the genre. NPR Music\'s Ann Powers, Jewly Hight and Bob Boilen spent the past week trying to hear as many of the 500 bands in the 40 or so venues around town as possible. Listen and find out what we discovered and what we\'d love to pass along. 1. The Milk Carton Kids: "What Even Is Americana," 2. Amythyst Kiah: "Wildebeest," 3. Birds of Chicago: "American Flowers," 4. William Prince: "The Carny," 5. Lula Wiles: "One More Night," 6. Mipso: "Edges Run," 7. Ruston Kelly: "Faceplant," 8. Talibah Safiya: "Middle of the Night," 9. Katie Pruitt: "Grace Has a Gun," 10. Marc Ribot: "Knock That Statue Down"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/09/20180918_asc_americanafest2018rx.mp3?awCollectionId=510019&awEpisodeId=649202729&orgId=1&d=3628&p=510019&story=649202729&t=podcast&e=649202729&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3628",
      isoDate: "2018-09-18T18:02:00.000Z"
    },
    {
      id: "be0742ea-a5f2-4729-a764-aedef5b6bb69",
      title: "New Music Friday: Sep. 14",
      content:
        "This week's run through the essential albums out Sep. 14 includes the first new music from Jump Little Children in 14 years, rapper Noname's incredible follow-up to her 2016 mixtape <em>Telefone</em>, one of the darkest and most distorted albums ever from the band Low, a bit of melancholy and hope from country singer Carrie Underwood and much more.FEATURED ALBUMS:1. Jump Little Children: <em>SPARROW</em>2. Low: <em>Double Negative</em>3. Alejandro Escovedo: <em>The Crossing</em>4. 6lack: <em>East Atlanta Love Letter</em>5. Pale Waves: <em>My Mind Makes Noises</em>6. Noname: <em>Room 25</em>7. Carrie Underwood: <em>Cry Pretty</em>OTHER NOTABLE RELEASES FOR SEP. 14:Richard Thompson: <em>13 Rivers</em>Joyce Manor: <em>Million Dollars to Kill Me</em>Paul Weller: <em>True Meanings</em>Fred Thomas: <em>Aftering</em>We Were Promised Jetpacks: <em>The More I Sleep The Less I Dream</em>Orbital: <em>Monsters Exist</em>The Goon Sax: <em>We're Not Talking</em>Lyrics Born: <em>Quite A Life</em>Dilly Dally: <em>Heaven</em>Black Belt Eagle Scout: <em>Mother of My Children</em>",
      contentSnippet:
        "This week's run through the essential albums out Sep. 14 includes the first new music from Jump Little Children in 14 years, rapper Noname's incredible follow-up to her 2016 mixtape Telefone, one of the darkest and most distorted albums ever from the band Low, a bit of melancholy and hope from country singer Carrie Underwood and much more.FEATURED ALBUMS:1. Jump Little Children: SPARROW2. Low: Double Negative3. Alejandro Escovedo: The Crossing4. 6lack: East Atlanta Love Letter5. Pale Waves: My Mind Makes Noises6. Noname: Room 257. Carrie Underwood: Cry PrettyOTHER NOTABLE RELEASES FOR SEP. 14:Richard Thompson: 13 RiversJoyce Manor: Million Dollars to Kill MePaul Weller: True MeaningsFred Thomas: AfteringWe Were Promised Jetpacks: The More I Sleep The Less I DreamOrbital: Monsters ExistThe Goon Sax: We're Not TalkingLyrics Born: Quite A LifeDilly Dally: HeavenBlack Belt Eagle Scout: Mother of My Children",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/09/20180914_asc_nmf_20180914_tk3.mp3?awCollectionId=510019&awEpisodeId=647710591&orgId=1&d=1366&p=510019&story=647710591&t=podcast&e=647710591&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1366",
      isoDate: "2018-09-14T09:00:00.000Z"
    },
    {
      id: "6ef7fc60-6915-4f52-b43a-98274679a6d2",
      title: "New Mix: Sylvan Esso, Thom Yorke, Buke & Gase, More",
      content:
        'We open this week\'s show with a new track from Sylvan Esso, with tentacles that reach into multiple musical universes. The song, "Funeral Singers," was originally written and recorded by the band Califone, features members of the group Collections of Colonies of Bees and was recorded at Wilco\'s Chicago studio, The Loft. The result is a plaintive, pulsing reflection on heartache and loss. Full playlist for this episode:  1. Sylvan Esso: "Funeral Singers," 2. Thom Yorke: "Suspirium," 3. Theodore: "Disorientation," 4. Half Alive: "Still Feel,"  5. Squirrel Flower: "Conditions," 6. Buke & Gase: "No Land," 7. Amber Arcades: "Goodnight Europe"',
      contentSnippet:
        'We open this week\'s show with a new track from Sylvan Esso, with tentacles that reach into multiple musical universes. The song, "Funeral Singers," was originally written and recorded by the band Califone, features members of the group Collections of Colonies of Bees and was recorded at Wilco\'s Chicago studio, The Loft. The result is a plaintive, pulsing reflection on heartache and loss. Full playlist for this episode:  1. Sylvan Esso: "Funeral Singers," 2. Thom Yorke: "Suspirium," 3. Theodore: "Disorientation," 4. Half Alive: "Still Feel,"  5. Squirrel Flower: "Conditions," 6. Buke & Gase: "No Land," 7. Amber Arcades: "Goodnight Europe"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/09/20180911_asc_20180911-rx2.mp3?awCollectionId=510019&awEpisodeId=646535698&orgId=1&d=2771&p=510019&story=646535698&t=podcast&e=646535698&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2771",
      isoDate: "2018-09-11T09:00:18.000Z"
    },
    {
      id: "10ee8d61-ce6b-40ac-8667-00f481ff8a28",
      title: "New Music Friday: Sep. 7",
      content:
        "This week's essential new releases includes Paul McCartney's best album in 20 years, the funk and disco of St. Paul & The Broken Bones, dark and twisted sounds from the rap duo $UICIDEBOY$ and more. <em>All Songs Considered's </em>Robin Hilton is joined by NPR Music's Ann Powers, Lars Gotrich, Marissa Lorusso, Stephen Thompson and Rodney Carmichael. FEATURED ALBUMS:  1. St. Paul & The Broken Bones: <em>Young Sick Camellia</em> 2. Spiritualized: <em>And Nothing Hurt</em> 3. Shannen Moser: <em>I'll Sing </em>4.    $SUICIDEBOY$: <em>I Want to Die in New Orleans  </em>5. Paul McCartney: <em>Egypt Station</em> 6. MNEK: <em>Language </em>7.    Mirah: <em>Understanding </em>8. Amnesia Scanner: <em>Another Life. </em>OTHER NOTABLE RELEASES FOR SEP. 7:  Paul Simon: <em>In the Blue Light; </em>Eric Bachmann: <em>No Recover; </em>Seinabo Sey: <em>I'm A Dream; </em>Kandace Spring: <em>Indigo; </em>Estelle: <em>Lovers Rock; </em>Jeff The Brotherhood: <em>Magik Songs; </em>Mothers: <em>Render Another Ugly Method; </em>Steven A. Clark: <em>Where Neon Goes to Die</em>",
      contentSnippet:
        "This week's essential new releases includes Paul McCartney's best album in 20 years, the funk and disco of St. Paul & The Broken Bones, dark and twisted sounds from the rap duo $UICIDEBOY$ and more. All Songs Considered's Robin Hilton is joined by NPR Music's Ann Powers, Lars Gotrich, Marissa Lorusso, Stephen Thompson and Rodney Carmichael. FEATURED ALBUMS:  1. St. Paul & The Broken Bones: Young Sick Camellia 2. Spiritualized: And Nothing Hurt 3. Shannen Moser: I'll Sing 4.    $SUICIDEBOY$: I Want to Die in New Orleans  5. Paul McCartney: Egypt Station 6. MNEK: Language 7.    Mirah: Understanding 8. Amnesia Scanner: Another Life. OTHER NOTABLE RELEASES FOR SEP. 7:  Paul Simon: In the Blue Light; Eric Bachmann: No Recover; Seinabo Sey: I'm A Dream; Kandace Spring: Indigo; Estelle: Lovers Rock; Jeff The Brotherhood: Magik Songs; Mothers: Render Another Ugly Method; Steven A. Clark: Where Neon Goes to Die",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/09/20180907_asc_nmf_20180907v2-rxloud.mp3?awCollectionId=510019&awEpisodeId=645438392&orgId=1&d=1641&p=510019&story=645438392&t=podcast&e=645438392&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1641",
      isoDate: "2018-09-07T09:00:23.000Z"
    },
    {
      id: "67693f25-6c16-41b8-958a-33ecf7f2d378",
      title: "Paul Simon Says 'I'm Finished' Writing Music",
      content:
        "In this candid conversation with <em>All Songs Considered</em> host Bob Boilen, Paul Simon reveals he hasn't felt compelled to write a new song in years, talks about the desire to better know himself and reflects on the very meaning of life itself.",
      contentSnippet:
        "In this candid conversation with All Songs Considered host Bob Boilen, Paul Simon reveals he hasn't felt compelled to write a new song in years, talks about the desire to better know himself and reflects on the very meaning of life itself.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/09/20180905_asc_paul_simon2.mp3?awCollectionId=510019&awEpisodeId=644693703&orgId=1&d=2279&p=510019&story=644693703&t=podcast&e=644693703&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2279",
      isoDate: "2018-09-05T09:00:00.000Z"
    },
    {
      id: "31ba9857-fc49-4784-a54e-0a42b27afea5",
      title: "New Music Friday: Aug. 31",
      content:
        "<em>All Songs Considered</em>'s Robin Hilton talks with NPR Music's Ann Powers and Stephen Thompson about the essential new albums out on Aug. 31, including music from Big Red Machine (a new side project of Bon Iver's Justin Vernon and Aaron Dessner of The National), the pop paradise of singer Troye Sivan, a tribute to Roger Miller and more. Featured Albums: Big Red Machine: <em>Big Red Machine; </em>Troye Sivan: <em>Bloom</em>; Saintseneca: <em>Pillar of Na; </em>Aaron Lee Tasjan: <em>Karma for Cheap; </em>Tash Sultana: <em>Flow State</em>; Various Artists: <em>King of the Road: A Tribute to Roger Miller;  </em>Other Notable Releases for Aug. 31: Amos Lee: <em>My New Moon</em>; Madeleine Peyroux: <em>Anthem</em>; Bun B: <em>Return of the Trill</em>; Anna Calvi: <em>Hunter</em>; Idles: <em>Joy as an Act of Resistance</em>; Passenger: <em>Runaway</em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton talks with NPR Music's Ann Powers and Stephen Thompson about the essential new albums out on Aug. 31, including music from Big Red Machine (a new side project of Bon Iver's Justin Vernon and Aaron Dessner of The National), the pop paradise of singer Troye Sivan, a tribute to Roger Miller and more. Featured Albums: Big Red Machine: Big Red Machine; Troye Sivan: Bloom; Saintseneca: Pillar of Na; Aaron Lee Tasjan: Karma for Cheap; Tash Sultana: Flow State; Various Artists: King of the Road: A Tribute to Roger Miller;  Other Notable Releases for Aug. 31: Amos Lee: My New Moon; Madeleine Peyroux: Anthem; Bun B: Return of the Trill; Anna Calvi: Hunter; Idles: Joy as an Act of Resistance; Passenger: Runaway",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/08/20180831_asc_nmf_20180831_fixed-rxloud.mp3?awCollectionId=510019&awEpisodeId=643549139&orgId=1&d=1302&p=510019&story=643549139&t=podcast&e=643549139&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1302",
      isoDate: "2018-08-31T09:00:20.000Z"
    },
    {
      id: "a684e55c-7412-4f27-a17b-9a6ec84d5fee",
      title: "New Mix: Cat Power, Laura Gibson, Greg Laswell, More",
      content:
        'After spending much of the past month on the Newport Folk Festival, 50th anniversary of The Band\'s <em>Songs from Big Pink, </em>Aretha Franklin<em>, </em>the Greatest Songs By 21st Century Women+ and more, we\'re finally back with an all-new mix. This week\'s episode includes the return of Cat Power, singer Laura Gibson, new music from Tiny Desk Contest winner Gaelynn Lea and more. Full playlist: 1. Gabby\'s World: "Rear View," 2. Cat Power: "Woman," 3. Anna Calvi: "Don\'t Beat The Girl Out Of My Boy," 4. Sam Phillips: "How Much Is Enough?" 5. Oh Pep!: "What\'s The Deal With David?" 6. Greg Laswell: "Royal Empress," 7. Gaelynn Lea: "The Last Three Feet," 8. Laura Gibson: "Tenderness"',
      contentSnippet:
        'After spending much of the past month on the Newport Folk Festival, 50th anniversary of The Band\'s Songs from Big Pink, Aretha Franklin, the Greatest Songs By 21st Century Women+ and more, we\'re finally back with an all-new mix. This week\'s episode includes the return of Cat Power, singer Laura Gibson, new music from Tiny Desk Contest winner Gaelynn Lea and more. Full playlist: 1. Gabby\'s World: "Rear View," 2. Cat Power: "Woman," 3. Anna Calvi: "Don\'t Beat The Girl Out Of My Boy," 4. Sam Phillips: "How Much Is Enough?" 5. Oh Pep!: "What\'s The Deal With David?" 6. Greg Laswell: "Royal Empress," 7. Gaelynn Lea: "The Last Three Feet," 8. Laura Gibson: "Tenderness"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/08/20180828_asc_20180828-rx.mp3?awCollectionId=510019&awEpisodeId=642440549&orgId=1&d=3120&p=510019&story=642440549&t=podcast&e=642440549&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3120",
      isoDate: "2018-08-28T09:00:18.000Z"
    },
    {
      id: "cb2e1900-031d-488c-8c87-12f97efea8ec",
      title: "New Music Friday For Aug. 24",
      content:
        "<em>All Songs Considered</em>'s Robin Hilton talks with Ann Powers, Jewly Hight, Sidney Madden and Stephen Thompson about the essential albums out on Aug. 24. This includes the drone rock of Nothing and delicate piano work of Icelandic composer Ólafur Arnalds, French-American rapper Bas, the return of DeVotchka and more. FEATURED ALBUMS: White Denim: <em>Performance; </em>Nothing: <em>Dance on the Blacktop; </em>Ólafur Arnalds: <em>re:member; </em>Bas: <em>Milky Way; </em>Interpol: <em>Marauder; </em>DeVotchka: <em>This Night Falls Forever; </em>Lucie Silvas: <em>E.G.O. </em>OTHER NOTABLE RELEASES FOR AUG 24: BTS: <em>Love Yourself: ANSWER; </em>Joey Dosik: <em>Inside Voice;</em> The Lemon Twigs: <em>Go To School; </em>Rubblebucket: <em>Sun Machine; </em>Blood Orange: <em>Negro Swan; </em>Tuung: <em>Songs You Make At Night; </em>Dee White: <em>Southern Gentleman; </em>Gabriel Kahane: <em>Book of Travels; </em>Glenn Jones: <em>The Giant Who Ate Himself</em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton talks with Ann Powers, Jewly Hight, Sidney Madden and Stephen Thompson about the essential albums out on Aug. 24. This includes the drone rock of Nothing and delicate piano work of Icelandic composer Ólafur Arnalds, French-American rapper Bas, the return of DeVotchka and more. FEATURED ALBUMS: White Denim: Performance; Nothing: Dance on the Blacktop; Ólafur Arnalds: re:member; Bas: Milky Way; Interpol: Marauder; DeVotchka: This Night Falls Forever; Lucie Silvas: E.G.O. OTHER NOTABLE RELEASES FOR AUG 24: BTS: Love Yourself: ANSWER; Joey Dosik: Inside Voice; The Lemon Twigs: Go To School; Rubblebucket: Sun Machine; Blood Orange: Negro Swan; Tuung: Songs You Make At Night; Dee White: Southern Gentleman; Gabriel Kahane: Book of Travels; Glenn Jones: The Giant Who Ate Himself",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/08/20180824_asc_nmf_20180824-rxloud_01.mp3?awCollectionId=510019&awEpisodeId=641446259&orgId=1&d=1409&p=510019&story=641446259&t=podcast&e=641446259&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1409",
      isoDate: "2018-08-24T09:00:16.000Z"
    },
    {
      id: "dc3ae576-e509-4f48-8524-e327cf80274d",
      title: "The Greatest Songs By 21st Century Women+",
      content:
        "On this week's show, <em>All Songs Considered</em>'s Robin Hilton talks with Ann Powers, Marissa Lorusso and Sidney Madden about some of the greatest songs released by women and non-binary artists in the past 18 years. Earlier this summer NPR Music, along with dozens of other writers, compiled a list of the 200 Greatest Songs By 21st Century Women+ as part of our Turning the Tables series, an ongoing effort to make the canon of popular music more inclusive – and accurate.  Together they share some of the songs that made the list, explain how they were chosen and discuss the ways women and non-binary musicians are still routinely undervalued and underrepresented.",
      contentSnippet:
        "On this week's show, All Songs Considered's Robin Hilton talks with Ann Powers, Marissa Lorusso and Sidney Madden about some of the greatest songs released by women and non-binary artists in the past 18 years. Earlier this summer NPR Music, along with dozens of other writers, compiled a list of the 200 Greatest Songs By 21st Century Women+ as part of our Turning the Tables series, an ongoing effort to make the canon of popular music more inclusive – and accurate.  Together they share some of the songs that made the list, explain how they were chosen and discuss the ways women and non-binary musicians are still routinely undervalued and underrepresented.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/08/20180821_asc_tttfinal20180821.mp3?awCollectionId=510019&awEpisodeId=640392888&orgId=1&d=2102&p=510019&story=640392888&t=podcast&e=640392888&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2102",
      isoDate: "2018-08-21T09:00:21.000Z"
    },
    {
      id: "37113c2f-9cc8-40d6-95a8-05b5b272829c",
      title: "New Music Friday: Aug. 17",
      content:
        "New Music Friday returns from a two-week break with some of 2018's most anticipated releases, including Death Cab For Cutie's <em>Thank You For Today, </em>Mitski's <em>Be The Cowboy, </em>Ariana Grande's <em>Sweetener </em>and more.",
      contentSnippet:
        "New Music Friday returns from a two-week break with some of 2018's most anticipated releases, including Death Cab For Cutie's Thank You For Today, Mitski's Be The Cowboy, Ariana Grande's Sweetener and more.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/08/20180817_asc_nmf_20180817-rxloud_01.mp3?awCollectionId=510019&awEpisodeId=639451148&orgId=1&d=1407&p=510019&story=639451148&t=podcast&e=639451148&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1407",
      isoDate: "2018-08-17T09:00:18.000Z"
    },
    {
      id: "1f892271-39f5-4f3d-a761-289c3bc954fb",
      title: "Aretha Franklin: A Remembrance",
      content:
        "<em>All Songs Considered</em>'s Robin Hilton talks with NPR Music's Ann Powers and Lauren Onkey about the life and legacy of the Queen of Soul. Aretha Franklin passed away on Aug. 16 at the age of 76. In this career-spanning conversation, we share the songs and stories behind one of the most influential artists of all time, from her earliest days singing gospel in her father's church, through her '80s pop hits, later collaborations with artists like Lauryn Hill and much more.",
      contentSnippet:
        "All Songs Considered's Robin Hilton talks with NPR Music's Ann Powers and Lauren Onkey about the life and legacy of the Queen of Soul. Aretha Franklin passed away on Aug. 16 at the age of 76. In this career-spanning conversation, we share the songs and stories behind one of the most influential artists of all time, from her earliest days singing gospel in her father's church, through her '80s pop hits, later collaborations with artists like Lauryn Hill and much more.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/08/20180817_asc_aretha_final-rxloud_01.mp3?awCollectionId=510019&awEpisodeId=639450831&orgId=1&d=2517&p=510019&story=639450831&t=podcast&e=639450831&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2517",
      isoDate: "2018-08-17T04:01:21.000Z"
    },
    {
      id: "7fb5003b-d8ad-4c85-b986-638a7b57e2f0",
      title: "Why 'Music From Big Pink' Matters 50 Years Later",
      content:
        "Let's go back 50 years to a basement outside Woodstock New York — to the formation of a sound and an album that all these years later still shapes the musical landscape. The album is <em>Music From Big Pink</em> and the band is simply called The Band.",
      contentSnippet:
        "Let's go back 50 years to a basement outside Woodstock New York — to the formation of a sound and an album that all these years later still shapes the musical landscape. The album is Music From Big Pink and the band is simply called The Band.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/08/20180814_asc_bigpinkfixed.mp3?awCollectionId=510019&awEpisodeId=638492395&orgId=1&d=1621&p=510019&story=638492395&t=podcast&e=638492395&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1621",
      isoDate: "2018-08-14T13:57:00.000Z"
    },
    {
      id: "b84e310e-8ea4-4f74-9302-f2e4e1bb2f7d",
      title: "Encore Episode: Hallelujah! The Songs We Should Retire",
      content:
        'Hosts Bob Boilen and Robin Hilton are joined by NPR Music\'s Stephen Thompson in this encore presentation of \'Songs We Should Retire.\'  Each picked a handful of classic and more recent tunes to debate longevity and overstayed welcomes in modern music history. Should "American Pie" be put out to pasture? Has John Lennon\'s "Imagine" been imagined one too many times? Does Pharrell\'s "Happy" still make us happy, or should we, as Stephen suggests, cryogenically freeze it so we never have to hear it again in our lifetimes?',
      contentSnippet:
        'Hosts Bob Boilen and Robin Hilton are joined by NPR Music\'s Stephen Thompson in this encore presentation of \'Songs We Should Retire.\'  Each picked a handful of classic and more recent tunes to debate longevity and overstayed welcomes in modern music history. Should "American Pie" be put out to pasture? Has John Lennon\'s "Imagine" been imagined one too many times? Does Pharrell\'s "Happy" still make us happy, or should we, as Stephen suggests, cryogenically freeze it so we never have to hear it again in our lifetimes?',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/08/20180814_asc_wholeshow-rxloud_01.mp3?awCollectionId=510019&awEpisodeId=638399484&orgId=1&d=2091&p=510019&story=638399484&t=podcast&e=638399484&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2091",
      isoDate: "2018-08-14T09:00:29.000Z"
    },
    {
      id: "0c9a97f1-df10-41d8-bce4-dd78a1cf50b5",
      title: "Courtney Barnett: A Conversation",
      content:
        "We recently put out a call asking listeners to share their thoughts about the songs on Courtney Barnett's latest album, <em>Tell Me How You Really Feel</em>, and other tracks from her rich lyrical catalog. On this week's show, we share some of those listener stories and thoughts, and Courtney talks about what inspires her, the creative process and how her music can be interpreted.",
      contentSnippet:
        "We recently put out a call asking listeners to share their thoughts about the songs on Courtney Barnett's latest album, Tell Me How You Really Feel, and other tracks from her rich lyrical catalog. On this week's show, we share some of those listener stories and thoughts, and Courtney talks about what inspires her, the creative process and how her music can be interpreted.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/08/20180821_asc_courtney_barnett__a_conversation-rxloud_01.mp3?awCollectionId=510019&awEpisodeId=634085222&orgId=1&d=2065&p=510019&story=634085222&t=podcast&e=634085222&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2065",
      isoDate: "2018-07-31T09:00:00.000Z"
    },
    {
      id: "987d21be-af72-44d3-9b58-e13f8f05dfba",
      title: "New Music Friday: July 27",
      content:
        'On this week\'s New Music Friday, <em>All Songs Considered</em>\'s Robin Hilton talks to NPR Music guests Ann Powers and Stephen Thompson about the essential new releases for July 27, including the jangly guitar pop of Tony Molina, a celebration of queerness and the company we keep from Thin Lips and whimsical sing-a-longs from Raffi.  Featured Artists/Albums: 1. Israel Nash: <em>Lifted</em>, featured song "Rolling On," 2. Phantastic Ferniture: <em>Phantastic Ferniture, </em>featured song "Bad Timing," 3. Thin Lips: <em>Chosen Family, </em>featured songs "Chosen Family" and "Gaslight Anthem (The Song Not The Band)," 4. Tony Molina: <em>Kill The Lights, </em>featured song "Nothing I Can Say," 5. Raffi: <em>Dog On The Floor, </em>featured song "Play Play Play," 6. Cody Jinks: <em>Lifers, </em>featured song "Head Case"',
      contentSnippet:
        'On this week\'s New Music Friday, All Songs Considered\'s Robin Hilton talks to NPR Music guests Ann Powers and Stephen Thompson about the essential new releases for July 27, including the jangly guitar pop of Tony Molina, a celebration of queerness and the company we keep from Thin Lips and whimsical sing-a-longs from Raffi.  Featured Artists/Albums: 1. Israel Nash: Lifted, featured song "Rolling On," 2. Phantastic Ferniture: Phantastic Ferniture, featured song "Bad Timing," 3. Thin Lips: Chosen Family, featured songs "Chosen Family" and "Gaslight Anthem (The Song Not The Band)," 4. Tony Molina: Kill The Lights, featured song "Nothing I Can Say," 5. Raffi: Dog On The Floor, featured song "Play Play Play," 6. Cody Jinks: Lifers, featured song "Head Case"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/07/20180727_asc_nmf_20180727-rxloud_01.mp3?awCollectionId=510019&awEpisodeId=632909277&orgId=1&d=1277&p=510019&story=632909277&t=podcast&e=632909277&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1277",
      isoDate: "2018-07-27T09:00:18.000Z"
    },
    {
      id: "b2acece0-dd73-47f2-94b2-3cb1ef90e172",
      title: "Newport Folk Festival 2018 Preview",
      content:
        "It's that time of year, the last weekend in July when NPR Music covers the friendliest festival around, the Newport Folk Festival.The festival's nearly 60-year history is steeped in the roots of American traditions and expands beyond the singer-songwriter tradition that the words \"folk music\" might conjure. This year we'll be treated to electronic R&B from Moses Sumney, the gospel sounds of War & Treaty, lyrical rock from Courtney Barnett, the Nashville sounds of Margo Price and Jason Isbell, the brilliant guitar of St. Vincent, instrumental vibes from Khruangbin and so much more",
      contentSnippet:
        "It's that time of year, the last weekend in July when NPR Music covers the friendliest festival around, the Newport Folk Festival.The festival's nearly 60-year history is steeped in the roots of American traditions and expands beyond the singer-songwriter tradition that the words \"folk music\" might conjure. This year we'll be treated to electronic R&B from Moses Sumney, the gospel sounds of War & Treaty, lyrical rock from Courtney Barnett, the Nashville sounds of Margo Price and Jason Isbell, the brilliant guitar of St. Vincent, instrumental vibes from Khruangbin and so much more",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/07/20180724_asc_newport_2018-rx.mp3?awCollectionId=510019&awEpisodeId=631670493&orgId=1&d=1755&p=510019&story=631670493&t=podcast&e=631670493&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1755",
      isoDate: "2018-07-24T09:00:18.000Z"
    },
    {
      id: "4786c1a2-1433-4096-b87e-7d8bb00cb07a",
      title: "New Music Friday: July 20",
      content:
        "<em>All Songs Considered'</em>s Robin Hilton is joined by NPR Music's Rodney Carmichael, Ann Powers, and Stephen Thompson to talk about July 20th's notable releases. Highlights include sultry R&B from The Internet, seething rock from songwriter Meg Myers, <em></em>the \"Joy\" of Ty Segall & White Fence, a new album from the bluegrass group Punch Brothers and more. 1. The Internet: Hive Mind, 2. Lori McKenna: The Tree, 3. Punch Brothers: All Ashore, 4. Ty Segall & White Fence: Joy, 5. Meg Myers: Take Me To The Disco, 6. Buddy: Harlan & Alondra. Other Notable Releases for July 20: Ovlov: Tru, Nathan Salsburg: Third, Balún: Prisma Tropical, Bugge Wesseltoft & Prins Thomas: Bugge Wesseltoft & Prins Thomas, Struckout: Struckout",
      contentSnippet:
        "All Songs Considered's Robin Hilton is joined by NPR Music's Rodney Carmichael, Ann Powers, and Stephen Thompson to talk about July 20th's notable releases. Highlights include sultry R&B from The Internet, seething rock from songwriter Meg Myers, the \"Joy\" of Ty Segall & White Fence, a new album from the bluegrass group Punch Brothers and more. 1. The Internet: Hive Mind, 2. Lori McKenna: The Tree, 3. Punch Brothers: All Ashore, 4. Ty Segall & White Fence: Joy, 5. Meg Myers: Take Me To The Disco, 6. Buddy: Harlan & Alondra. Other Notable Releases for July 20: Ovlov: Tru, Nathan Salsburg: Third, Balún: Prisma Tropical, Bugge Wesseltoft & Prins Thomas: Bugge Wesseltoft & Prins Thomas, Struckout: Struckout",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/07/20180720_asc_nmf_20180720_tk3-rxloud_01.mp3?awCollectionId=510019&awEpisodeId=630461940&orgId=1&d=1247&p=510019&story=630461940&t=podcast&e=630461940&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1247",
      isoDate: "2018-07-20T09:00:21.000Z"
    },
    {
      id: "f9e84ee9-653c-4270-baa1-90fa20cde7d4",
      title: "New Mix: Metric, Villagers, Richard Thompson, Mirah, More",
      content:
        'Happy National Corn Fritter day! Or, if you want to travel back in time to Friday, when this episode was recorded, happy <em>late</em> National French Fry Day, too. Whatever you want to celebrate, it\'s always a special occasion when there\'s new music. Songs and artists featured on this episode: 1. Metric: "Dark Saturday," 2. Ohmme: "Water," 3. Black Belt Eagle Scout: "Soft Stud," 4. The Goon Sax: "Make Time 4 Love," 5. Mirah: "Hot Hot," 6. Richard Thompson: "The Storm Wont\' Come," 7. Villagers: "A Trick Of The Light"',
      contentSnippet:
        'Happy National Corn Fritter day! Or, if you want to travel back in time to Friday, when this episode was recorded, happy late National French Fry Day, too. Whatever you want to celebrate, it\'s always a special occasion when there\'s new music. Songs and artists featured on this episode: 1. Metric: "Dark Saturday," 2. Ohmme: "Water," 3. Black Belt Eagle Scout: "Soft Stud," 4. The Goon Sax: "Make Time 4 Love," 5. Mirah: "Hot Hot," 6. Richard Thompson: "The Storm Wont\' Come," 7. Villagers: "A Trick Of The Light"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/07/20180717_asc_20180717-rx.mp3?awCollectionId=510019&awEpisodeId=629674522&orgId=1&d=2740&p=510019&story=629674522&t=podcast&e=629674522&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2740",
      isoDate: "2018-07-17T09:00:19.000Z"
    },
    {
      id: "84e6341d-e196-4725-acab-4937ef2a6290",
      title: "New Music Friday: July 13",
      content:
        "Happy Friday the 13th! On this week's New Music Friday, All Song Considered's Robin Hilton speaks with NPR's Ann Powers, Stephen Thompson, Lars Gotrich, and Sidney Madden about the best new releases of the week. Highlights include Wiz Khalifa's long-awaited followup to the 2011 pop-rap breakout Rolling Papers, the calming songs of Luluc, affirmations of love from the Dirty Projectors and more. Featured Albums - Rayland Baxter: Wide Awake; Dirty Projectors: Lamp Lit Prose; The Ophelias: Almost; Wiz Khalifa: Rolling Papers 2; Luluc: Sculptor; Amy Shark: Love Monster; Cowboy Junkies: All That Reckoning; Other Notable Releases For July 13: Deaf Heaven: Ordinary Corrupt Human Love; Wet: Still Run; Body/Head: The Switch; Lotic: Power; Jenn Champion: Single Rider; Laurel Halo: Raw Silk Uncut Wood; The Suffers: Everything Here; Valley Queen: Supergiant",
      contentSnippet:
        "Happy Friday the 13th! On this week's New Music Friday, All Song Considered's Robin Hilton speaks with NPR's Ann Powers, Stephen Thompson, Lars Gotrich, and Sidney Madden about the best new releases of the week. Highlights include Wiz Khalifa's long-awaited followup to the 2011 pop-rap breakout Rolling Papers, the calming songs of Luluc, affirmations of love from the Dirty Projectors and more. Featured Albums - Rayland Baxter: Wide Awake; Dirty Projectors: Lamp Lit Prose; The Ophelias: Almost; Wiz Khalifa: Rolling Papers 2; Luluc: Sculptor; Amy Shark: Love Monster; Cowboy Junkies: All That Reckoning; Other Notable Releases For July 13: Deaf Heaven: Ordinary Corrupt Human Love; Wet: Still Run; Body/Head: The Switch; Lotic: Power; Jenn Champion: Single Rider; Laurel Halo: Raw Silk Uncut Wood; The Suffers: Everything Here; Valley Queen: Supergiant",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/07/20180713_asc_nmf_20180713_final-rxloud_01.mp3?awCollectionId=510019&awEpisodeId=628657781&orgId=1&d=1363&p=510019&story=628657781&t=podcast&e=628657781&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1363",
      isoDate: "2018-07-13T09:00:19.000Z"
    },
    {
      id: "37b431a4-1914-4b12-b74c-54c703f2dd42",
      title: "New Mix: Deafheaven, Tim Hecker, John Grant And More",
      content:
        'Love is often presented as something easy, a matter of simply following your heart. But in actuality, it\'s rarely that effortless. Several of this week\'s songs reflect the sour, absurd, and heartrending aspects of intimacy. Complete playlist: 1. Michael Rault: "I\'ll Be There," 2. Flasher: "Pressure," 3. Wet: "Love Is Not Enough," 4. John Grant: "Love Is Magic," 5. Tim Hecker: "Music For Tundra Pt. 1," 6. Deafheaven: "Canary Yellow"',
      contentSnippet:
        'Love is often presented as something easy, a matter of simply following your heart. But in actuality, it\'s rarely that effortless. Several of this week\'s songs reflect the sour, absurd, and heartrending aspects of intimacy. Complete playlist: 1. Michael Rault: "I\'ll Be There," 2. Flasher: "Pressure," 3. Wet: "Love Is Not Enough," 4. John Grant: "Love Is Magic," 5. Tim Hecker: "Music For Tundra Pt. 1," 6. Deafheaven: "Canary Yellow"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/07/20180710_asc_20180710-rx.mp3?awCollectionId=510019&awEpisodeId=627681231&orgId=1&d=3287&p=510019&story=627681231&t=podcast&e=627681231&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3287",
      isoDate: "2018-07-10T16:04:00.000Z"
    },
    {
      id: "3f7aa68e-6ff6-41ca-a586-c7b7dca66bfb",
      title: "American Anthems: The Songs That Unite Us",
      content:
        "What's an anthem? It's a stirring call to arms or an expression of collective emotion. Sometimes it's a recognition of injustice, a representation of an oppressed group, or an inspirational message of hope. But it always captures something much larger than itself — the spirit of a community, unified in its common feeling or cause, like the time a gay men's choir sang \"Make Them Hear You\" at a rally in Tennessee. Or the time counter protestors sang \"This Little Light Of Mine\" in Charlottesville, Va. to a group of white nationalists. On July 4, NPR kicks off its American Anthem series. It'll eventually feature 50 different anthems picked by NPR staffers, music scholars, artists and listeners. In anticipation of the series, we dedicate this week's episode of All Songs Considered to anthems. We're joined by NPR's Elizabeth Blair, producer of the American Anthem series, as we reflect on the soundtracks to our collective experiences.",
      contentSnippet:
        "What's an anthem? It's a stirring call to arms or an expression of collective emotion. Sometimes it's a recognition of injustice, a representation of an oppressed group, or an inspirational message of hope. But it always captures something much larger than itself — the spirit of a community, unified in its common feeling or cause, like the time a gay men's choir sang \"Make Them Hear You\" at a rally in Tennessee. Or the time counter protestors sang \"This Little Light Of Mine\" in Charlottesville, Va. to a group of white nationalists. On July 4, NPR kicks off its American Anthem series. It'll eventually feature 50 different anthems picked by NPR staffers, music scholars, artists and listeners. In anticipation of the series, we dedicate this week's episode of All Songs Considered to anthems. We're joined by NPR's Elizabeth Blair, producer of the American Anthem series, as we reflect on the soundtracks to our collective experiences.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/07/20180703_asc_asc_20180703_fix.mp3?awCollectionId=510019&awEpisodeId=625643411&orgId=1&d=1742&p=510019&story=625643411&t=podcast&e=625643411&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1742",
      isoDate: "2018-07-03T15:50:00.000Z"
    },
    {
      id: "17f299be-d104-418e-be2a-fedb5bd73c0a",
      title: "New Music Friday: June 29",
      content:
        "This week's best new releases includes Drake's highly-anticipated double album, <em>Scorpion</em>, Florence + the Machine's tentative turn toward optimism with <em>High as Hope</em>, previously unheard and unreleased music from jazz legend John Coltrane and much more. Featured Albums: Drake: <em>Scorpion,</em> Jim James: <em>Uniform Distortion, </em>The Innocence Mission: <em>Sun on the Square, </em>John Adams: <em>Dr. Atomic, </em>Florence + The Machine: <em>High as Hope,</em> The Milk Carton Kids: <em>All The Things That I Did And All The Things That I Didn't Do, </em>John Coltrane: <em>Both Directions At Once. </em>Other notable releases for June 29: Let's Eat Grandma: <em>I'm All Ears,</em> Gorillaz: <em>The Now Now,</em> The Essex Green: <em>Hardly Electronic,</em> Charles Lloyd & The Marvels + Lucinda Williams: <em>Vanished Gardens,</em> Protoje: <em>A Matter Of Time,</em> Tropics: <em>Nocturnal Souls</em>.",
      contentSnippet:
        "This week's best new releases includes Drake's highly-anticipated double album, Scorpion, Florence + the Machine's tentative turn toward optimism with High as Hope, previously unheard and unreleased music from jazz legend John Coltrane and much more. Featured Albums: Drake: Scorpion, Jim James: Uniform Distortion, The Innocence Mission: Sun on the Square, John Adams: Dr. Atomic, Florence + The Machine: High as Hope, The Milk Carton Kids: All The Things That I Did And All The Things That I Didn't Do, John Coltrane: Both Directions At Once. Other notable releases for June 29: Let's Eat Grandma: I'm All Ears, Gorillaz: The Now Now, The Essex Green: Hardly Electronic, Charles Lloyd & The Marvels + Lucinda Williams: Vanished Gardens, Protoje: A Matter Of Time, Tropics: Nocturnal Souls.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/06/20180629_asc_nmf_20180629_final2.mp3?awCollectionId=510019&awEpisodeId=624536111&orgId=1&d=1406&p=510019&story=624536111&t=podcast&e=624536111&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1406",
      isoDate: "2018-06-29T09:00:22.000Z"
    },
    {
      id: "20f2e951-9f51-489d-9f19-ee1786a816aa",
      title: "New Mix: The Decemberists, Bermuda Triangle, Shy Boys And More",
      content:
        'On this week\'s episode of All Songs Considered, the pressure\'s on. To give a kind of guide to future interns, current All Songs intern, Cat Zhang has begun secretly evaluating Bob and Robin to develop her own NPR Music team ranking. One major criteria? Music selection. Full playlist: 1. The Decemberists: "We All Die Young," 2. Shy Boys: "Evil Sin," 2. Ovlov: "Stick," 3. An Horse: "Get Out Somehow," 4. Tom Gallo: "Tell Me The Ghost," 5. Bermuda Triangle: "\'Till The End of Days," 6. Hauschka: "Tami Meets Richard," 7. Bryce Dessner, Justin Vernon & S. Carey: "Music For Wood And Strings"',
      contentSnippet:
        'On this week\'s episode of All Songs Considered, the pressure\'s on. To give a kind of guide to future interns, current All Songs intern, Cat Zhang has begun secretly evaluating Bob and Robin to develop her own NPR Music team ranking. One major criteria? Music selection. Full playlist: 1. The Decemberists: "We All Die Young," 2. Shy Boys: "Evil Sin," 2. Ovlov: "Stick," 3. An Horse: "Get Out Somehow," 4. Tom Gallo: "Tell Me The Ghost," 5. Bermuda Triangle: "\'Till The End of Days," 6. Hauschka: "Tami Meets Richard," 7. Bryce Dessner, Justin Vernon & S. Carey: "Music For Wood And Strings"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/06/20180625_asc_20180626-rx.mp3?awCollectionId=510019&awEpisodeId=623413871&orgId=1&d=2766&p=510019&story=623413871&t=podcast&e=623413871&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2766",
      isoDate: "2018-06-26T09:00:19.000Z"
    },
    {
      id: "c61e0add-4733-4bcc-8201-d28235dad600",
      title: "New Music Friday: June 22",
      content:
        "On this week's episode of New Music Friday, All Songs Considered's Robin Hilton chats with NPR Music's Ann Powers and Rodney Carmichael, along with jazz critic Nate Chinen from WBGO about the most exciting new releases for June 22. Albums include the intense, industrial rock of Nine Inch Nails, the new joint project of Lecrae & Zaytoven and the wildly ambitious, shape-shifting jazz of Kamasi Washington. Featured Albums: Nine Inch Nails: <em>Bad Witch</em>, Birdtalker: <em>One</em>, Lecrae & Zaytoven: <em>Let The Trap Say Amen</em>, Priscilla Renea: <em>Coloured</em>, Kamasi Washington: <em>Heaven And Earth</em>, Death Grips: <em>Year Of The Snitch</em>. Other notable releases for June 22: Arp, <em>Zebra</em>; Bebe Rexha, <em>Expectations</em>; Dawes, <em>Passwords</em>; Khemmis, <em>Desolation</em>; Gang Gang Dance, <em>Kazuashita</em>; Jack River, <em>Sugar Mountain</em>; Panic! At The Disco, <em>Pray For the Wicked.</em>",
      contentSnippet:
        "On this week's episode of New Music Friday, All Songs Considered's Robin Hilton chats with NPR Music's Ann Powers and Rodney Carmichael, along with jazz critic Nate Chinen from WBGO about the most exciting new releases for June 22. Albums include the intense, industrial rock of Nine Inch Nails, the new joint project of Lecrae & Zaytoven and the wildly ambitious, shape-shifting jazz of Kamasi Washington. Featured Albums: Nine Inch Nails: Bad Witch, Birdtalker: One, Lecrae & Zaytoven: Let The Trap Say Amen, Priscilla Renea: Coloured, Kamasi Washington: Heaven And Earth, Death Grips: Year Of The Snitch. Other notable releases for June 22: Arp, Zebra; Bebe Rexha, Expectations; Dawes, Passwords; Khemmis, Desolation; Gang Gang Dance, Kazuashita; Jack River, Sugar Mountain; Panic! At The Disco, Pray For the Wicked.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/06/20180622_asc_nmf20180622take2rx.mp3?awCollectionId=510019&awEpisodeId=622445226&orgId=1&d=1376&p=510019&story=622445226&t=podcast&e=622445226&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1376",
      isoDate: "2018-06-22T09:00:20.000Z"
    },
    {
      id: "092a733a-1877-4bd6-9d68-a03dbf378406",
      title: "Roséwave: This Summer, Think Pink",
      content:
        "Last June, NPR Music's Lars Gotrich tweeted just one word: \"roséwave.\" Then, a follow-up that was more like a challenge: \"Y'all can already list 5 bands for which roséwave rings true, c'mon.\" He wasn't exactly describing a genre — more a lifestyle that deserved (or, perhaps, inherently contained within it) its own soundtrack.Rosé wine, the pink varietal that was once a punchline, has become ubiquitous in the summer months. Roséwave defies easy definition; it's meant to be felt, not understood. \"It's unapologetic enjoyment for something maybe a little basic, but makes you feel good,\" one enthusiast offered.Last year, when we published the first official roséwave playlist, its patron saints were HAIM, Lorde and Migos. When we re-launched roséwave this summer, that title went to artists like Kacey Musgraves, J Balvin and Dua Lipa, who have all given us summer-ready tracks that pair perfectly with pink drinks.Of course, that's just the beginning. Just as many varieties of grapes can make rosé, many genres of music fall within the loving embrace of this style. In this special episode of All Songs Considered, NPR Music's official roséwave correspondents — Lars Gotrich, Lyndsey McKenna and Marissa Lorusso — fill you in on how to shade your summer pink with this new soundtrack.",
      contentSnippet:
        "Last June, NPR Music's Lars Gotrich tweeted just one word: \"roséwave.\" Then, a follow-up that was more like a challenge: \"Y'all can already list 5 bands for which roséwave rings true, c'mon.\" He wasn't exactly describing a genre — more a lifestyle that deserved (or, perhaps, inherently contained within it) its own soundtrack.Rosé wine, the pink varietal that was once a punchline, has become ubiquitous in the summer months. Roséwave defies easy definition; it's meant to be felt, not understood. \"It's unapologetic enjoyment for something maybe a little basic, but makes you feel good,\" one enthusiast offered.Last year, when we published the first official roséwave playlist, its patron saints were HAIM, Lorde and Migos. When we re-launched roséwave this summer, that title went to artists like Kacey Musgraves, J Balvin and Dua Lipa, who have all given us summer-ready tracks that pair perfectly with pink drinks.Of course, that's just the beginning. Just as many varieties of grapes can make rosé, many genres of music fall within the loving embrace of this style. In this special episode of All Songs Considered, NPR Music's official roséwave correspondents — Lars Gotrich, Lyndsey McKenna and Marissa Lorusso — fill you in on how to shade your summer pink with this new soundtrack.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/06/20180621_asc_rosewave2018-rx.mp3?awCollectionId=510019&awEpisodeId=622190809&orgId=1&d=2254&p=510019&story=622190809&t=podcast&e=622190809&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2254",
      isoDate: "2018-06-21T13:36:00.000Z"
    },
    {
      id: "153465a5-dfde-4bae-89da-8267ca275631",
      title: "Your Favorite New Artists Of The Year (So Far)",
      content:
        'On this week\'s show we share your picks for the best new artists so far in 2018, along with a couple of our own: Robin\'s is MILCK, the Los Angeles-based singer-songwriter who writes empowering, cathartic ballads, while Bob chose Niklas Paschburg, an innovative young German composer and pianist whose music was inspired by the Baltic Sea. Full playlist: 1. Sudan Archive: "Nont For Sale," 2. serpentwithfeet: "Whisper," 3. Shame: "Concrete," 4. Thunderpussy: "Thunderpussy," 5. Jorja Smith: "Tomorrow," 6. Haley Heynderickx: "The Bug Collector," 7. MILCK: "Black Sheep," 8. Niklas Paschburg: "Spark," 9. Snail Mail: "Pristine," 10. Superorganism: "It\'s All Good"',
      contentSnippet:
        'On this week\'s show we share your picks for the best new artists so far in 2018, along with a couple of our own: Robin\'s is MILCK, the Los Angeles-based singer-songwriter who writes empowering, cathartic ballads, while Bob chose Niklas Paschburg, an innovative young German composer and pianist whose music was inspired by the Baltic Sea. Full playlist: 1. Sudan Archive: "Nont For Sale," 2. serpentwithfeet: "Whisper," 3. Shame: "Concrete," 4. Thunderpussy: "Thunderpussy," 5. Jorja Smith: "Tomorrow," 6. Haley Heynderickx: "The Bug Collector," 7. MILCK: "Black Sheep," 8. Niklas Paschburg: "Spark," 9. Snail Mail: "Pristine," 10. Superorganism: "It\'s All Good"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/06/20180619_asc_newartists_2018-rx3.mp3?awCollectionId=510019&awEpisodeId=621379798&orgId=1&d=3484&p=510019&story=621379798&t=podcast&e=621379798&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3484",
      isoDate: "2018-06-19T15:20:00.000Z"
    },
    {
      id: "632fefc0-5028-47e8-9433-61fd0285b905",
      title: "New Music Friday: June 15",
      content:
        "On this week's New Music Friday, <em>All Songs Considered'</em>s Robin Hilton is joined by NPR Music's Ann Powers, Rodney Carmichael, and Stephen Thompson for a quick run through the best new releases for June 15. Highlights include Christina Aguilera's <em>Liberation, </em>a monument to self-empowerment with contributions from Kanye West and Anderson .Paak; the trippy, futuristic debut of pop producer SOPHIE; and a deeply emotional solo project from Lincoln Park co-founder Mike Shinoda. Featured albums: 1. Christina Aguilera: <em>Liberation, </em>2. Arthur Buck: <em>Arthur Buck, </em>3. Jay Rock: <em>Redemption, </em>4. SOPHIE: <em>Of Every Pearl's Un-Insides, </em>5. Buddy Guy: <em>The Blues Is Alive And Well, </em>6. Mike Shinoda: <em>Post Traumatic.  </em>Other Notable Albums For June 15: Chromeo, <em>Head Over Heels</em>; Culture Abuse, <em>Bay Dream</em>; Marissa Anderson, <em>Cloud Corner</em>; Johnny Marr: <em>Call The Comet</em>; Olivia Chaney, <em>Shelter</em>; Welles, <em>Red Trees and White Trashes;</em> Yuno, <em>Moodie</em>",
      contentSnippet:
        "On this week's New Music Friday, All Songs Considered's Robin Hilton is joined by NPR Music's Ann Powers, Rodney Carmichael, and Stephen Thompson for a quick run through the best new releases for June 15. Highlights include Christina Aguilera's Liberation, a monument to self-empowerment with contributions from Kanye West and Anderson .Paak; the trippy, futuristic debut of pop producer SOPHIE; and a deeply emotional solo project from Lincoln Park co-founder Mike Shinoda. Featured albums: 1. Christina Aguilera: Liberation, 2. Arthur Buck: Arthur Buck, 3. Jay Rock: Redemption, 4. SOPHIE: Of Every Pearl's Un-Insides, 5. Buddy Guy: The Blues Is Alive And Well, 6. Mike Shinoda: Post Traumatic.  Other Notable Albums For June 15: Chromeo, Head Over Heels; Culture Abuse, Bay Dream; Marissa Anderson, Cloud Corner; Johnny Marr: Call The Comet; Olivia Chaney, Shelter; Welles, Red Trees and White Trashes; Yuno, Moodie",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/06/20180615_asc_nmf_20180615_fixed-rxloud_01.mp3?awCollectionId=510019&awEpisodeId=619969830&orgId=1&d=1463&p=510019&story=619969830&t=podcast&e=619969830&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1463",
      isoDate: "2018-06-15T09:00:21.000Z"
    },
    {
      id: "029b90e6-5f5e-4a00-902b-35747450b33b",
      title:
        "Ben Gibbard Talks About Death Cab For Cutie's New Album And First Single, 'Gold Rush'",
      content:
        "Death Cab For Cutie is back with some pretty great new music. The band has just announced that a new album is on the way called <em>Thank You for Today. </em>And in this special episode of <em>All Songs Considered, </em>singer Ben Gibbard shares and talks about the first single, \"Gold Rush.\" \"Gold Rush\" is a song that looks at how neighborhoods change. For Ben, that's Capitol Hill in Seattle, where he's lived for the past 20 years. In our conversation, he talks about how and why he'd wanted to write this song for a while. \"As I've gotten older,\" he says, \"I've become acutely aware of how I connect my memories to my geography and [how] the landscape of the city changes. I'll walk down Broadway and walk past a location that used to be a bar I'd frequent with friends, or somewhere where I had a beautifully intense conversation with somebody that I once loved very much. The song is not a complaint about how things were better or anything like that. It's an observation, but more about coming to terms with the passage of time and losing the people and the moments in my life all over again as I walk down a street that is now so unfamiliar.\"",
      contentSnippet:
        "Death Cab For Cutie is back with some pretty great new music. The band has just announced that a new album is on the way called Thank You for Today. And in this special episode of All Songs Considered, singer Ben Gibbard shares and talks about the first single, \"Gold Rush.\" \"Gold Rush\" is a song that looks at how neighborhoods change. For Ben, that's Capitol Hill in Seattle, where he's lived for the past 20 years. In our conversation, he talks about how and why he'd wanted to write this song for a while. \"As I've gotten older,\" he says, \"I've become acutely aware of how I connect my memories to my geography and [how] the landscape of the city changes. I'll walk down Broadway and walk past a location that used to be a bar I'd frequent with friends, or somewhere where I had a beautifully intense conversation with somebody that I once loved very much. The song is not a complaint about how things were better or anything like that. It's an observation, but more about coming to terms with the passage of time and losing the people and the moments in my life all over again as I walk down a street that is now so unfamiliar.\"",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/06/20180613_asc_death_cab_gold_rush-rx.mp3?awCollectionId=510019&awEpisodeId=619234705&orgId=1&d=1415&p=510019&story=619234705&t=podcast&e=619234705&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1415",
      isoDate: "2018-06-13T12:02:49.000Z"
    },
    {
      id: "476030cb-da96-4a3e-8f97-991532834331",
      title:
        "New Mix: M. Ward, David Bowie Saxophonist Donny McCaslin, Sad Baxter",
      content:
        'This week\'s <em>All Songs Considered</em> begins with Robin\'s warm, buttery sugar cookie – Bob bets Robin will share the cookie as a reward for playing "What is the Body," the new exhilarating art-rock single from Donny McCaslin the acclaimed saxophonist whose band backed David Bowie\'s <em>Blackstar. </em>Robin followed with Sad Baxter\'s "Baby," a deceptively bouncy song off of the Nashville band\'s new EP <em>So Happy. </em>Full Playlist: 1. Donny McCaslin: "What About The Body," 2. Sad Baxter: "Baby," 3. M. Ward: "Bobby," 4. Sorry: "Twinkle," 5. Angelo De Augustine: "Carcassonne," 6. Culture Abuse: "Bee Kind To The Bugs"',
      contentSnippet:
        'This week\'s All Songs Considered begins with Robin\'s warm, buttery sugar cookie – Bob bets Robin will share the cookie as a reward for playing "What is the Body," the new exhilarating art-rock single from Donny McCaslin the acclaimed saxophonist whose band backed David Bowie\'s Blackstar. Robin followed with Sad Baxter\'s "Baby," a deceptively bouncy song off of the Nashville band\'s new EP So Happy. Full Playlist: 1. Donny McCaslin: "What About The Body," 2. Sad Baxter: "Baby," 3. M. Ward: "Bobby," 4. Sorry: "Twinkle," 5. Angelo De Augustine: "Carcassonne," 6. Culture Abuse: "Bee Kind To The Bugs"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/06/20180612_asc_20180612-rx.mp3?awCollectionId=510019&awEpisodeId=619070569&orgId=1&d=2076&p=510019&story=619070569&t=podcast&e=619070569&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2076",
      isoDate: "2018-06-12T09:00:21.000Z"
    },
    {
      id: "29787fb8-11ed-4e85-9e03-e57c673c4878",
      title: "New Music Friday: June 8",
      content:
        "<em>All Songs Considered'</em>s Robin Hilton is joined by NPR Music's Ann Powers, Lyndsey McKenna, and Sidney Madden to talk about June 8's standout albums. Highlights include the candid, introspective rock of Snail Mail, the jazzy, laid-back R&B of British singer Jorja Smith, the sultry pop of Lykke Li, and more. Featured Albums: 1. River Whyless: <em>Kindness, A Rebel</em> 2. \"Serpentwithfeet: <em>Soil 3. </em>Snail Mail: <em>Lush 4. </em>Dierks Bentley: <em>The Mountain 5. </em>Jorja Smith: <em>Lost & Found 6. </em>\"Lykke Li: <em>So Sad So Sexy. </em>Other notable releases for June 8<em>: </em>Kanye West & Kid Cudi:<em> Kids See Ghosts, </em>Sugarland:<em> Bigger, </em>Angelique Kidjo:<em> Remain In Light, </em>Erin Rae: <em>Putting On Airs, </em>Lily Allen:<em> No Shame, </em>Ana Egge:<em> White Tiger, </em>Dave Matthews Band:<em> Come Tomorrow, YOB: Our Raw Heart</em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton is joined by NPR Music's Ann Powers, Lyndsey McKenna, and Sidney Madden to talk about June 8's standout albums. Highlights include the candid, introspective rock of Snail Mail, the jazzy, laid-back R&B of British singer Jorja Smith, the sultry pop of Lykke Li, and more. Featured Albums: 1. River Whyless: Kindness, A Rebel 2. \"Serpentwithfeet: Soil 3. Snail Mail: Lush 4. Dierks Bentley: The Mountain 5. Jorja Smith: Lost & Found 6. \"Lykke Li: So Sad So Sexy. Other notable releases for June 8: Kanye West & Kid Cudi: Kids See Ghosts, Sugarland: Bigger, Angelique Kidjo: Remain In Light, Erin Rae: Putting On Airs, Lily Allen: No Shame, Ana Egge: White Tiger, Dave Matthews Band: Come Tomorrow, YOB: Our Raw Heart",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/06/20180608_asc_nmf_20180608tk2-rxloud_01.mp3?awCollectionId=510019&awEpisodeId=618141276&orgId=1&d=1338&p=510019&story=618141276&t=podcast&e=618141276&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1338",
      isoDate: "2018-06-08T09:00:28.000Z"
    },
    {
      id: "77f2e30a-7f88-4fd8-bd50-0526a121e828",
      title: "New Mix: The 1975, Nothing, Laurie Anderson, More",
      content:
        'Songs on this week\'s episode of All Songs Consideredgrapple with sweeping, thematically weighty subjects, from xenophobia and immigration to Hurricane Sandy and the inherent meaninglessness of life: 1. Audible: "Up, Up And Away," 2. Nothing: "Zero Day," 3. The 1975: "Give Yourself A Try," 4. IDLES: "Danny Nedelko," 5. Sam Evian: "Health Machine," 6. Laurie Anderson: "Dreams," 7. Liminal: "Sigur Rós - Untitled 6 (EBow) (Paul Corley Remix)"',
      contentSnippet:
        'Songs on this week\'s episode of All Songs Consideredgrapple with sweeping, thematically weighty subjects, from xenophobia and immigration to Hurricane Sandy and the inherent meaninglessness of life: 1. Audible: "Up, Up And Away," 2. Nothing: "Zero Day," 3. The 1975: "Give Yourself A Try," 4. IDLES: "Danny Nedelko," 5. Sam Evian: "Health Machine," 6. Laurie Anderson: "Dreams," 7. Liminal: "Sigur Rós - Untitled 6 (EBow) (Paul Corley Remix)"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/06/20180605_asc_20180605_fix-rx.mp3?awCollectionId=510019&awEpisodeId=617232275&orgId=1&d=3168&p=510019&story=617232275&t=podcast&e=617232275&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3168",
      isoDate: "2018-06-05T19:23:00.000Z"
    },
    {
      id: "67f1467b-234e-4068-98ae-9c69c404059e",
      title: "New Music Friday: June 1",
      content:
        "<em>All Songs Considered</em>'s Robin Hilton talks with NPR Music's Ann Powers and Stephen Thompson about the best new albums out on June 1, including the remarkable new Neko Case record <em>Hell On </em>and an emotional and revealing new album from Father John Misty. Featured Albums: Neko Case, <em>Hell On, </em>Father John Misty,<em> God's Favorite Customer, </em>Tancred,<em> Nightstand, </em>Natalie Prass, <em>The Future and the Past, </em>Albin Lee Meldau, <em>About You, </em>LUMP, <em>LUMP. </em>Other Notable Releases for June 1: American Aquarium, <em>Things Change</em>; Gabriella Cohen, <em>Pink is the Colour of Unconditional Love;</em> Sam Evian, <em>You, Forever;</em> Maps & Atlases, <em>Lightness is Nothing New.</em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton talks with NPR Music's Ann Powers and Stephen Thompson about the best new albums out on June 1, including the remarkable new Neko Case record Hell On and an emotional and revealing new album from Father John Misty. Featured Albums: Neko Case, Hell On, Father John Misty, God's Favorite Customer, Tancred, Nightstand, Natalie Prass, The Future and the Past, Albin Lee Meldau, About You, LUMP, LUMP. Other Notable Releases for June 1: American Aquarium, Things Change; Gabriella Cohen, Pink is the Colour of Unconditional Love; Sam Evian, You, Forever; Maps & Atlases, Lightness is Nothing New.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/06/20180601_asc_nmf_20180601_v2-rx.mp3?awCollectionId=510019&awEpisodeId=615859612&orgId=1&d=1366&p=510019&story=615859612&t=podcast&e=615859612&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1366",
      isoDate: "2018-06-01T09:00:09.000Z"
    },
    {
      id: "6be3b57c-5241-4ac0-9cc8-c57e6d7bdb22",
      title: "Prepare Thy Body For The Summer Of Thou",
      content:
        "For just over a decade, Thou has made music that is, at times, grueling in its pace and extreme in volume, but that can also be painfully beautiful — the Baton Rouge metal band has a penchant for pitting Bryan Funck's searing vocals against dense, majestic melodies. The group's shows are invariably deafening, rattling your clothes if they aren't already covered in sweat; sometimes, it feels like the whole room is heaving in time to Thou's slow-motion sludge. In this interview with NPR Music's Lars Gotrich, vocalist Bryan Funck and guitarist Andy Gibbs talk about the four new records coming from Thou this summer and their decision to explore grunge, acoustic and even drone music.",
      contentSnippet:
        "For just over a decade, Thou has made music that is, at times, grueling in its pace and extreme in volume, but that can also be painfully beautiful — the Baton Rouge metal band has a penchant for pitting Bryan Funck's searing vocals against dense, majestic melodies. The group's shows are invariably deafening, rattling your clothes if they aren't already covered in sweat; sometimes, it feels like the whole room is heaving in time to Thou's slow-motion sludge. In this interview with NPR Music's Lars Gotrich, vocalist Bryan Funck and guitarist Andy Gibbs talk about the four new records coming from Thou this summer and their decision to explore grunge, acoustic and even drone music.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180531_asc_thou_final_mix-rxloud.mp3?awCollectionId=510019&awEpisodeId=615773913&orgId=1&d=1477&p=510019&story=615773913&t=podcast&e=615773913&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1477",
      isoDate: "2018-05-31T14:28:00.000Z"
    },
    {
      id: "6fbb4488-04e6-45c5-86fb-a58a78f012f1",
      title: "New Mix: James Blake, Luluc, Angélique Kidjo, More",
      content:
        'This past week singer James Blake quietly dropped an incredible new song called "Don\'t Miss It." Like much of his work, it\'s both sultry and synthetic – a mix of seductive melodies and warped production, including a piano that keeps slipping out of tune. On this week\'s show we share "Don\'t Miss It" and try to make sense of its haunting meditations on the fleeting nature of life. Full playlist: 1. Angélique Kidjo: "Once In A Lifetime," 2. Gabriella Cohen: "Music Machine," 3. Luluc: "Heist," 4. The Beths: "Future Me Hates Me," 5. James Blake: "Don\'t Miss It," 6. I\'m Kingfisher: "Topography Of Gabon."',
      contentSnippet:
        'This past week singer James Blake quietly dropped an incredible new song called "Don\'t Miss It." Like much of his work, it\'s both sultry and synthetic – a mix of seductive melodies and warped production, including a piano that keeps slipping out of tune. On this week\'s show we share "Don\'t Miss It" and try to make sense of its haunting meditations on the fleeting nature of life. Full playlist: 1. Angélique Kidjo: "Once In A Lifetime," 2. Gabriella Cohen: "Music Machine," 3. Luluc: "Heist," 4. The Beths: "Future Me Hates Me," 5. James Blake: "Don\'t Miss It," 6. I\'m Kingfisher: "Topography Of Gabon."',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180529_asc_20180529-rx.mp3?awCollectionId=510019&awEpisodeId=615204354&orgId=1&d=2422&p=510019&story=615204354&t=podcast&e=615204354&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2422",
      isoDate: "2018-05-29T17:32:00.000Z"
    },
    {
      id: "21745691-8522-442e-a5cb-67638689f684",
      title: "New Music Friday: May 25",
      content:
        "<em>All Songs Considered'</em>s Robin Hilton is joined by NPR Music's Rodney Carmichael, Stefanie Ferndandez, Lars Gotrich and Stephen Thompson – along with special guest Talia Schlanger, host of WXPN's <em>World Café </em>– for a quick run through the best new albums out on May 25. This includes the highly anticipated (and instant classic) album, <em>Daytona </em>from rapper PUSHA-T, reggaetón mega-hit maker J Balvin, raw and ragged rock from Thunderpussy, effervescent synth-pop from CHVRCHES and more.   FEATURED ALBUMS:   Thunderpussy: <em>Thunderpussy,</em> PUSHA-T: <em>Daytona, </em>Aisha Burns: <em>Argonauta, </em>CHVRCHES: <em>Love Is Dead,</em>  J Balvin: <em>Vibras, </em>Zaytoven: <em>Trap Holizay, </em>Witch Mountain: <em>Witch Mountain. </em> Other notable releases for May 25: Sudan Archives: <em>Sink,</em> Graveyard: <em>Peace, </em>Jenny Hval: <em>The Long Sleep, </em>Ari Roar: <em>Calm Down, </em>Chad Valley: <em>Imaginary Music,  </em>Wand: <em>Perfume </em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton is joined by NPR Music's Rodney Carmichael, Stefanie Ferndandez, Lars Gotrich and Stephen Thompson – along with special guest Talia Schlanger, host of WXPN's World Café – for a quick run through the best new albums out on May 25. This includes the highly anticipated (and instant classic) album, Daytona from rapper PUSHA-T, reggaetón mega-hit maker J Balvin, raw and ragged rock from Thunderpussy, effervescent synth-pop from CHVRCHES and more.   FEATURED ALBUMS:   Thunderpussy: Thunderpussy, PUSHA-T: Daytona, Aisha Burns: Argonauta, CHVRCHES: Love Is Dead,  J Balvin: Vibras, Zaytoven: Trap Holizay, Witch Mountain: Witch Mountain.  Other notable releases for May 25: Sudan Archives: Sink, Graveyard: Peace, Jenny Hval: The Long Sleep, Ari Roar: Calm Down, Chad Valley: Imaginary Music,  Wand: Perfume",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180525_asc_nmf_20180525-rxloud.mp3?awCollectionId=510019&awEpisodeId=614140564&orgId=1&d=1378&p=510019&story=614140564&t=podcast&e=614140564&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1378",
      isoDate: "2018-05-25T09:00:05.000Z"
    },
    {
      id: "fa9db233-de50-4912-81c5-19ae68cd18da",
      title: "Guest DJ: Stephen Malkmus",
      content:
        "On this special Guest DJ edition of <em>All Songs Considered, </em>I talk with the dry-witted songwriter and guitarist, Stephen Malkmus. He made five albums with the much-beloved rock band Pavement, from 1992-1999, but his latest release comes from his other project, The Jicks. It's called <em>Sparkle Hard </em>and it's his seventh album with the band in seventeen years. For this Guest DJ session with <em>All Songs Considered</em>'s Bob Boilen, Malkmus shares some of the songs he's loved over the years and talks about his latest album.",
      contentSnippet:
        "On this special Guest DJ edition of All Songs Considered, I talk with the dry-witted songwriter and guitarist, Stephen Malkmus. He made five albums with the much-beloved rock band Pavement, from 1992-1999, but his latest release comes from his other project, The Jicks. It's called Sparkle Hard and it's his seventh album with the band in seventeen years. For this Guest DJ session with All Songs Considered's Bob Boilen, Malkmus shares some of the songs he's loved over the years and talks about his latest album.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180522_asc_stephen_malkmus-rx2.mp3?awCollectionId=510019&awEpisodeId=613099134&orgId=1&d=2378&p=510019&story=613099134&t=podcast&e=613099134&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2378",
      isoDate: "2018-05-22T09:00:04.000Z"
    },
    {
      id: "5a282476-2a45-4308-ad2c-6039379e9899",
      title: "New Music Friday: May 18",
      content:
        "<em>All Songs Considered'</em>s Robin Hilton joins NPR Music's Rodney Carmichael, Lars Gotrich, Marissa Lorusso, Ann Powers and Stephen Thompson for a sprint through the best new albums out on May 18. This includes the raging rock of Courtney Barnett, Atlanta rapper Nick Grant, wildly ambitious psych-folk from Ray La Montagne and a whole lot more.  Featured Albums: Courtney Barnett: <em>Tell Me How You Really Feel, </em>BTS: <em>Love Yourself: Tear, </em>Nick Grant: <em>Dreamin' Out Loud, </em>Ray LaMontagne: <em>Part of the Light, </em>Joan Armatrading: <em>Not Too Far Away, </em>Remember Sports: <em>Slow Buzz. </em>Other notable releases for May 18: GAS: <em>Rausch, </em>John Maus: <em>Addendum, </em>Low Cut Connie: <em>Dirty Pictures (Part 2), </em>Nellie McKay: <em>Sister Orchid, </em>Parquet Courts: <em>Wide Awake, </em>Ryley Walker: <em>Deafman Glance, </em>Stephen Malkmus And The Jicks: <em>Sparkle Hard</em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton joins NPR Music's Rodney Carmichael, Lars Gotrich, Marissa Lorusso, Ann Powers and Stephen Thompson for a sprint through the best new albums out on May 18. This includes the raging rock of Courtney Barnett, Atlanta rapper Nick Grant, wildly ambitious psych-folk from Ray La Montagne and a whole lot more.  Featured Albums: Courtney Barnett: Tell Me How You Really Feel, BTS: Love Yourself: Tear, Nick Grant: Dreamin' Out Loud, Ray LaMontagne: Part of the Light, Joan Armatrading: Not Too Far Away, Remember Sports: Slow Buzz. Other notable releases for May 18: GAS: Rausch, John Maus: Addendum, Low Cut Connie: Dirty Pictures (Part 2), Nellie McKay: Sister Orchid, Parquet Courts: Wide Awake, Ryley Walker: Deafman Glance, Stephen Malkmus And The Jicks: Sparkle Hard",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180518_asc_nmf_20180518v3-rxloud_01.mp3?awCollectionId=510019&awEpisodeId=612004412&orgId=1&d=1352&p=510019&story=612004412&t=podcast&e=612004412&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1352",
      isoDate: "2018-05-18T09:00:02.000Z"
    },
    {
      id: "918048d7-05ca-4b05-95c8-ca5fa1fe66ef",
      title: "The Songs That Got You Through School",
      content:
        "Last week, we asked listeners to tell us about the songs that got them through school. As the stories poured in, we began to see some clear and common themes. For starters, school, while being an exciting time of profound change, is <em>really </em>hard. Many told us stories of battling depression, anxiety and issues of sexual identity, all while navigating a churning sea of uncertainty. On this edition of <em>All Songs Considered</em>, we hear stories of how music became a powerful force in their lives — the one thing that grounded them or made them feel connected to something bigger than themselves.",
      contentSnippet:
        "Last week, we asked listeners to tell us about the songs that got them through school. As the stories poured in, we began to see some clear and common themes. For starters, school, while being an exciting time of profound change, is really hard. Many told us stories of battling depression, anxiety and issues of sexual identity, all while navigating a churning sea of uncertainty. On this edition of All Songs Considered, we hear stories of how music became a powerful force in their lives — the one thing that grounded them or made them feel connected to something bigger than themselves.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180515_asc_school_songs2rx.mp3?awCollectionId=510019&awEpisodeId=611327817&orgId=1&d=2102&p=510019&story=611327817&t=podcast&e=611327817&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2102",
      isoDate: "2018-05-15T17:42:00.000Z"
    },
    {
      id: "ad897d55-a39b-4b0a-8250-e6b09a29af79",
      title: "Mitski Shares And Talks About Her New Song And Album",
      content:
        "Mitski's new album is called Be the Cowboy. She talks with All Songs Considered's Bob Boilen about the lead-off single \"Geyser,\" and the near-desperate passion that went into making it.",
      contentSnippet:
        "Mitski's new album is called Be the Cowboy. She talks with All Songs Considered's Bob Boilen about the lead-off single \"Geyser,\" and the near-desperate passion that went into making it.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180514_asc_mitski_geyser-rx.mp3?awCollectionId=510019&awEpisodeId=610981792&orgId=1&d=956&p=510019&story=610981792&t=podcast&e=610981792&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "956",
      isoDate: "2018-05-14T15:45:00.000Z"
    },
    {
      id: "d8ebe0cd-d8e9-4e85-958a-20daeb4e21f0",
      title: "New Music Friday: May 11",
      content:
        "<em>All Songs Considered'</em>s Robin Hilton takes a quick run through May 11's essential album releases with NPR Music's Felix Contreras, Jewly Hight, Tom Huizenga, Lyndsey McKenna and Stephen Thompson. Featured albums include the irresistible pop of Charlie Puth, classical pianist Simone Dinnerstein, early folk recordings from The Grateful Dead's Jerry Garcia, infectious guitar rock from Illuminati Hotties and more.Featured Albums1. Charlie Puth: <em>Voicenotes </em>2. Jerry Garcia: <em>Before The Dead </em>3. Brent Cobb: <em>Providence Canyon </em>4. Simone Dinnerstein: <em>Circles </em>5. Illuminati Hotties: <em>Kiss Yr Frenemies</em>6. Los Texmaniacs: <em>Cruzando Borderes </em>7. Arctic Monkeys: <em>Tranquility Base Hotel & Casino </em>Other Notable Releases For May 11-Marian Hill: <em></em><em>Unusual; </em>Mark Kozelek: <em>Mark Kozelek;</em> Beach House: <em>7;</em> Ry Cooder: <em>The Prodigal Son;</em> The Sea And Cake: <em>Any Day;</em> Ski Mask The Slump God: <em>Beware The Book Of Eli;</em> Ashley Campbell: <em>The Lonely One</em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton takes a quick run through May 11's essential album releases with NPR Music's Felix Contreras, Jewly Hight, Tom Huizenga, Lyndsey McKenna and Stephen Thompson. Featured albums include the irresistible pop of Charlie Puth, classical pianist Simone Dinnerstein, early folk recordings from The Grateful Dead's Jerry Garcia, infectious guitar rock from Illuminati Hotties and more.Featured Albums1. Charlie Puth: Voicenotes 2. Jerry Garcia: Before The Dead 3. Brent Cobb: Providence Canyon 4. Simone Dinnerstein: Circles 5. Illuminati Hotties: Kiss Yr Frenemies6. Los Texmaniacs: Cruzando Borderes 7. Arctic Monkeys: Tranquility Base Hotel & Casino Other Notable Releases For May 11-Marian Hill: Unusual; Mark Kozelek: Mark Kozelek; Beach House: 7; Ry Cooder: The Prodigal Son; The Sea And Cake: Any Day; Ski Mask The Slump God: Beware The Book Of Eli; Ashley Campbell: The Lonely One",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180510_asc_nmf20180511-rxloud.mp3?awCollectionId=510019&awEpisodeId=610141541&orgId=1&d=1438&p=510019&story=610141541&t=podcast&e=610141541&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1438",
      isoDate: "2018-05-11T09:00:25.000Z"
    },
    {
      id: "4ef61dc1-3366-4522-9aa1-2ec2b27f12da",
      title:
        "New Mix: Childish Gambino, Mike Lindsay And Laura Marling As LUMP, More",
      content:
        'In the days since Chidlish Gambino debuted a new song on <em>Saturday Night Live</em> – as well as a shocking video online – fans and music critics have been trying to unspool what it all means. On this week\'s show, NPR Music\'s Rodney Carmichael joins us to try to make sense of "This Is America" and to explain why people will be dissecting both the song and video for months. Full playlist: 1. Ages And Ages: "Needle And Thread," 2. pronoun: "Wrong," 3. Car Seat Headrest: "My Boy (Twin Fantasy)," 4. Childish Gambino: "This Is America," 5. Cautious Clay: "Silos," 6. Alice Ivy: "Chasing Stars (feat. Bertie Blackman)," 7. LUMP: "Late To The Party."',
      contentSnippet:
        'In the days since Chidlish Gambino debuted a new song on Saturday Night Live – as well as a shocking video online – fans and music critics have been trying to unspool what it all means. On this week\'s show, NPR Music\'s Rodney Carmichael joins us to try to make sense of "This Is America" and to explain why people will be dissecting both the song and video for months. Full playlist: 1. Ages And Ages: "Needle And Thread," 2. pronoun: "Wrong," 3. Car Seat Headrest: "My Boy (Twin Fantasy)," 4. Childish Gambino: "This Is America," 5. Cautious Clay: "Silos," 6. Alice Ivy: "Chasing Stars (feat. Bertie Blackman)," 7. LUMP: "Late To The Party."',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180508_asc_20180508-rx.mp3?awCollectionId=510019&awEpisodeId=609425005&orgId=1&d=2550&p=510019&story=609425005&t=podcast&e=609425005&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2550",
      isoDate: "2018-05-08T17:26:00.000Z"
    },
    {
      id: "98b65d46-b521-4aca-b563-e229ff61ca06",
      title: "New Music Friday: May 4",
      content:
        "Featured Albums: Frank Turner: 'Be More Kind,' Shakey Graves: 'Can't Wake Up,' Lucrecia Dalt: 'Anticlines,' Leon Bridges: 'Good Thing,' Damien Jurado: 'The Horizon Just Laughed,' Parker Milsap: 'Other Arrangements,' Belly: 'Dove,' Other Notable Releases For May 4: Gaz Coombes: 'World's Strongest Man,' Jessica Risker: 'I See You Among The Stars,' Pinkshinyultrablast: 'Miserable Miracles,' Trampled By Turtles: 'Life Is Good On The Open Road,' Lake Street Dive: 'Free Yourself Up,' John Hopkins: 'Singularity,' Eleanor Frieberger: 'Rebound'",
      contentSnippet:
        "Featured Albums: Frank Turner: 'Be More Kind,' Shakey Graves: 'Can't Wake Up,' Lucrecia Dalt: 'Anticlines,' Leon Bridges: 'Good Thing,' Damien Jurado: 'The Horizon Just Laughed,' Parker Milsap: 'Other Arrangements,' Belly: 'Dove,' Other Notable Releases For May 4: Gaz Coombes: 'World's Strongest Man,' Jessica Risker: 'I See You Among The Stars,' Pinkshinyultrablast: 'Miserable Miracles,' Trampled By Turtles: 'Life Is Good On The Open Road,' Lake Street Dive: 'Free Yourself Up,' John Hopkins: 'Singularity,' Eleanor Frieberger: 'Rebound'",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180504_asc_nmf_20180504-rxloud.mp3?awCollectionId=510019&awEpisodeId=608387614&orgId=1&d=1326&p=510019&story=608387614&t=podcast&e=608387614&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1326",
      isoDate: "2018-05-04T09:00:24.000Z"
    },
    {
      id: "107331a0-8b0b-48c0-a35b-5ee50d95c6b1",
      title: "New Mix: Dirty Projectors, Stephen Malkmus & The Jicks, More",
      content:
        'The release of Dirty Projectors\' self-titled album last year came after a five-year hiatus and the departure of longtime singer Amber Coffman. The songs, which documented that departure, were heart-breaking, dark and cathartic. But frontman David Longstreth is already back with a follow-up, and a brighter one at that. <em>Lamp Lit Prose</em> (out July 13) suggests he\'s emerged with a newfound optimism,<em> </em>and on this week\'s show we\'ve got the first single from it: "Break-Thru." Full playlist for this episode: 1. Dirty Projectors: "Break-Thru," 2. Stephen Malkmus & The Jicks: "Middle America," 3. Sofi Tukker: "Benadryl," 4. Shannon & The Clams: "Onion," 5. Valley Queen: "Supergiant," 6. Jessica Risker: "I See You Among The Stars," 7. Red Baraat: "Kala Mukhra"',
      contentSnippet:
        'The release of Dirty Projectors\' self-titled album last year came after a five-year hiatus and the departure of longtime singer Amber Coffman. The songs, which documented that departure, were heart-breaking, dark and cathartic. But frontman David Longstreth is already back with a follow-up, and a brighter one at that. Lamp Lit Prose (out July 13) suggests he\'s emerged with a newfound optimism, and on this week\'s show we\'ve got the first single from it: "Break-Thru." Full playlist for this episode: 1. Dirty Projectors: "Break-Thru," 2. Stephen Malkmus & The Jicks: "Middle America," 3. Sofi Tukker: "Benadryl," 4. Shannon & The Clams: "Onion," 5. Valley Queen: "Supergiant," 6. Jessica Risker: "I See You Among The Stars," 7. Red Baraat: "Kala Mukhra"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180502_asc_20180502-rx.mp3?awCollectionId=510019&awEpisodeId=607737054&orgId=1&d=2333&p=510019&story=607737054&t=podcast&e=607737054&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2333",
      isoDate: "2018-05-02T16:20:00.000Z"
    },
    {
      id: "0b8d0688-3e1b-4043-9c80-d31fa0c0b904",
      title: "At 70, Smithsonian Folkways Is An Antidote To Music Algorithms",
      content:
        "From the sounds of blues guitarist and singer Lead Belly to recordings of Southwestern Woodhouse Toads, Smithsonian Folkways has been capturing the sounds of global history for the past 70 years. These recordings are among 60,000 treasured tracks the label has in its library — and it promises they'll never go out of print — from the labor songs of Woody Guthrie and children's songs of Ella Jenkins to New Orleans hot jazz, songs of the civil rights movement, the Honk Horn music of Ghana and so much more.The label was officially started on May Day 1948, so its current director and curator, Huib Schippers, joins us to look back and celebrate this National Treasure's rich history.",
      contentSnippet:
        "From the sounds of blues guitarist and singer Lead Belly to recordings of Southwestern Woodhouse Toads, Smithsonian Folkways has been capturing the sounds of global history for the past 70 years. These recordings are among 60,000 treasured tracks the label has in its library — and it promises they'll never go out of print — from the labor songs of Woody Guthrie and children's songs of Ella Jenkins to New Orleans hot jazz, songs of the civil rights movement, the Honk Horn music of Ghana and so much more.The label was officially started on May Day 1948, so its current director and curator, Huib Schippers, joins us to look back and celebrate this National Treasure's rich history.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/05/20180501_asc_folkways70-rx.mp3?awCollectionId=510019&awEpisodeId=607332266&orgId=1&d=1665&p=510019&story=607332266&t=podcast&e=607332266&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1665",
      isoDate: "2018-05-01T12:57:00.000Z"
    },
    {
      id: "deaaff5c-e5d5-4cb9-8992-a01eed7e3980",
      title: "New Music Friday: April 27",
      content:
        "On this week's New Music Friday, <em>All Songs Considered'</em>s Robin Hilton runs through some of the best albums out on April 27 with NPR Music's Rodney Carmichael, Felix Contreras, Lars Gotrich, Marissa Lorusso, and Ann Powers. Featured albums include the potent and political rock of Speedy Ortiz, the ethereal sounds of Grouper, Janelle Monae's highly anticipated <em>Dirty Computer, </em>Post Malone and more.   Featured Albums:   1. Speedy Ortiz: <em>Twerp Verse,</em> 2. Grouper: <em>Grid Of Points,</em> 3. Willie Nelson: <em>Last Man Standing,</em> 4. Post Malone: <em>Beerbongs And Bentleys,</em> 5. Tom Rush: <em>Voices,</em> 6. Janelle Monae: <em>Dirty Computer,</em> 7. Half Waif: <em>Lavender.</em>   Also notable for April 27:  Okkervil River: <em>In The Rainbow Rain, </em>Forth Wanderers: <em>Forth Wanderers, </em>Dr. Dog: <em>Critical Equation, </em>Dylan Carlson: <em>Conquistador, </em>Steve Angello: <em>Human, </em>Eomac: <em>Reconnect</em>",
      contentSnippet:
        "On this week's New Music Friday, All Songs Considered's Robin Hilton runs through some of the best albums out on April 27 with NPR Music's Rodney Carmichael, Felix Contreras, Lars Gotrich, Marissa Lorusso, and Ann Powers. Featured albums include the potent and political rock of Speedy Ortiz, the ethereal sounds of Grouper, Janelle Monae's highly anticipated Dirty Computer, Post Malone and more.   Featured Albums:   1. Speedy Ortiz: Twerp Verse, 2. Grouper: Grid Of Points, 3. Willie Nelson: Last Man Standing, 4. Post Malone: Beerbongs And Bentleys, 5. Tom Rush: Voices, 6. Janelle Monae: Dirty Computer, 7. Half Waif: Lavender.   Also notable for April 27:  Okkervil River: In The Rainbow Rain, Forth Wanderers: Forth Wanderers, Dr. Dog: Critical Equation, Dylan Carlson: Conquistador, Steve Angello: Human, Eomac: Reconnect",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/04/20180427_asc_nmf_20180427_v2-rx.mp3?awCollectionId=510019&awEpisodeId=606254857&orgId=1&d=1352&p=510019&story=606254857&t=podcast&e=606254857&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1352",
      isoDate: "2018-04-27T09:00:27.000Z"
    },
    {
      id: "89f636b1-82cf-4572-a701-462bda42d0e2",
      title: "New Mix:  Beach House, Tank And The Bangas, Stevie Wolf, More",
      content:
        'We open this week\'s show with a look at our 2018 Tiny Desk Contest winner, Naia Izumi. He\'s an artist based out of Los Angeles with a phenomenal voice and breathtaking technique on guitar. Naia is also incredibly charming with a profoundly moving personal story about how he came to music and what it has meant to him over the years. Full playlist: 1. Naia Izumi - "Soft Spoken," 2. Tank And The Bangas - "Smoke.Netflix.Chill," 3. Rafiq Bhatia - "Before Our Eyes," 4. Wellesl - "Seventeen," 5. Stevie Wolf - "Yves Klein Blue," 6. Beach House - "Dark Spring"',
      contentSnippet:
        'We open this week\'s show with a look at our 2018 Tiny Desk Contest winner, Naia Izumi. He\'s an artist based out of Los Angeles with a phenomenal voice and breathtaking technique on guitar. Naia is also incredibly charming with a profoundly moving personal story about how he came to music and what it has meant to him over the years. Full playlist: 1. Naia Izumi - "Soft Spoken," 2. Tank And The Bangas - "Smoke.Netflix.Chill," 3. Rafiq Bhatia - "Before Our Eyes," 4. Wellesl - "Seventeen," 5. Stevie Wolf - "Yves Klein Blue," 6. Beach House - "Dark Spring"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/04/20180424_asc_20180424-rx3.mp3?awCollectionId=510019&awEpisodeId=605246154&orgId=1&d=2276&p=510019&story=605246154&t=podcast&e=605246154&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2276",
      isoDate: "2018-04-24T14:35:00.000Z"
    },
    {
      id: "dfde3c48-9a89-42dd-8aea-a7d94d6e762f",
      title: "New Music Friday: April 20",
      content:
        "On this week's quick run through some of the best new albums out on April 20, <em>All Songs Considered'</em>s<em> </em>Robin Hilton chats with NPR Music's Ann Powers and Stephen Thompson about the primal pop of Kimbra, dark and majestic songs from Exitmusic, Nashville veterans The Old Crow Medicine Show, the rock-and-soul of Shuggie Otis and more.   Featured Albums: 1. Kimbra: <em>Primal Heart</em>, 2. Exitmusic: <em>The Recognitions</em>, 3. Old Crow Medicine Show: <em>Volunteer</em>, 4. Sera Cahoone: <em>The Flora String Sessions</em>, 5. Bishop Briggs: <em>Church Of Scars</em>, 6. DRINKS: <em>Hippo Lite</em>, 7. Ashley Monroe: <em>Sparrow</em>, 8. Shuggie Otis: <em>Inter-Fusion.</em> <em> </em> Also notable for April 20 – J. Cole: <em>K.O.D., </em>Lord Huron: <em>Vide Noir, </em>Brothers Osborne: <em>Port Saint Joe</em>, The HIRS Collective: <em>Friends. Lovers. Favorites</em>",
      contentSnippet:
        "On this week's quick run through some of the best new albums out on April 20, All Songs Considered's Robin Hilton chats with NPR Music's Ann Powers and Stephen Thompson about the primal pop of Kimbra, dark and majestic songs from Exitmusic, Nashville veterans The Old Crow Medicine Show, the rock-and-soul of Shuggie Otis and more.   Featured Albums: 1. Kimbra: Primal Heart, 2. Exitmusic: The Recognitions, 3. Old Crow Medicine Show: Volunteer, 4. Sera Cahoone: The Flora String Sessions, 5. Bishop Briggs: Church Of Scars, 6. DRINKS: Hippo Lite, 7. Ashley Monroe: Sparrow, 8. Shuggie Otis: Inter-Fusion.   Also notable for April 20 – J. Cole: K.O.D., Lord Huron: Vide Noir, Brothers Osborne: Port Saint Joe, The HIRS Collective: Friends. Lovers. Favorites",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/04/20180419_asc_nmf20180420rx.mp3?awCollectionId=510019&awEpisodeId=604211103&orgId=1&d=1265&p=510019&story=604211103&t=podcast&e=604211103&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1265",
      isoDate: "2018-04-20T09:00:24.000Z"
    },
    {
      id: "42414d1d-3d24-4109-8738-967b3b446171",
      title:
        "Guest DJ: Lord Huron On The Songs That Shaped The Cinematic 'Vide Noir'",
      content:
        "The band Lord Huron is known for its cinematic story songs. Ben Schneider, creator of the project, talks with <em>All Songs Considered </em>host Bob Boilen about some of the music by other artists that informed the tales on Lord Huron's latest album.",
      contentSnippet:
        "The band Lord Huron is known for its cinematic story songs. Ben Schneider, creator of the project, talks with All Songs Considered host Bob Boilen about some of the music by other artists that informed the tales on Lord Huron's latest album.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/04/20180419_asc_lordhuron-rx.mp3?awCollectionId=510019&awEpisodeId=603882609&orgId=1&d=2153&p=510019&story=603882609&t=podcast&e=603882609&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2153",
      isoDate: "2018-04-19T12:20:00.000Z"
    },
    {
      id: "a664e782-e830-484a-9052-0406668c13dc",
      title: "The Birth Of Tiny Desk Concerts",
      content:
        "Laura Gibson recounts the tale of how one lousy concert in Austin wound up birthing The Tiny Desk Concert series.",
      contentSnippet:
        "Laura Gibson recounts the tale of how one lousy concert in Austin wound up birthing The Tiny Desk Concert series.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/04/20180418_asc_tiny_desk10-rx.mp3?awCollectionId=510019&awEpisodeId=603444405&orgId=1&d=1178&p=510019&story=603444405&t=podcast&e=603444405&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1178",
      isoDate: "2018-04-18T09:00:00.000Z"
    },
    {
      id: "104e4251-7927-4575-96da-aebdf5a62a61",
      title: "Swan Songs: Music For Your Final Exit",
      content:
        "We asked listeners what song they want played at their funeral. On this edition of <em>All Songs Considered, </em><em></em>we share some of the incredible responses we got, along with the stories behind them.",
      contentSnippet:
        "We asked listeners what song they want played at their funeral. On this edition of All Songs Considered, we share some of the incredible responses we got, along with the stories behind them.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/04/20180417_asc_swan_song-rx.mp3?awCollectionId=510019&awEpisodeId=603185644&orgId=1&d=2969&p=510019&story=603185644&t=podcast&e=603185644&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2969",
      isoDate: "2018-04-17T15:47:00.000Z"
    },
    {
      id: "782233cb-9937-49f3-934a-bcf9c50163ba",
      title: "New Music Friday: April 13",
      content:
        "NPR Music's Stephen Thompson and Ann Powers join host Robin Hilton for a quick run through some of the most essential new albums out on April 13, starting with the Korean surf-rock band Say Sue Me and their wistful and gritty album <em>Where We Were Together. </em>Also on the show: Singer Juliana Hatfield's inspired and uplifting tribute to Olivia Newton John, the distorted chaos of A Place To Bury Strangers and more.   Full playlist: 1. Say Sue Me:  <em>Where We Were Together, </em>2. Juliana Hatfield: <em>Juliana Hatfield Sings Olivia Newton John, </em>3. A Place To Bury Strangers: <em>Pinned, </em>4. Laura Veirs: <em>The Lookout, </em>5. L.A. Salami: <em>The City Of Bootmakers, </em>6. Goldmund: <em>Occasus, </em>7. Tinashe: <em>Joyride.</em> <em> </em> Also notable for April 13: John Prine: <em>The Tree Of Forgiveness, </em>Josh Rouse: <em>Love In The Modern Age, </em>Rainbow Kitten Surprise: <em>How To: Friend, Love, Freefall, </em>Mr. Fingers: <em>Cerebral Hemispheres.</em>",
      contentSnippet:
        "NPR Music's Stephen Thompson and Ann Powers join host Robin Hilton for a quick run through some of the most essential new albums out on April 13, starting with the Korean surf-rock band Say Sue Me and their wistful and gritty album Where We Were Together. Also on the show: Singer Juliana Hatfield's inspired and uplifting tribute to Olivia Newton John, the distorted chaos of A Place To Bury Strangers and more.   Full playlist: 1. Say Sue Me:  Where We Were Together, 2. Juliana Hatfield: Juliana Hatfield Sings Olivia Newton John, 3. A Place To Bury Strangers: Pinned, 4. Laura Veirs: The Lookout, 5. L.A. Salami: The City Of Bootmakers, 6. Goldmund: Occasus, 7. Tinashe: Joyride.   Also notable for April 13: John Prine: The Tree Of Forgiveness, Josh Rouse: Love In The Modern Age, Rainbow Kitten Surprise: How To: Friend, Love, Freefall, Mr. Fingers: Cerebral Hemispheres.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/04/20180412_asc_nmf_20180413_final-rx.mp3?awCollectionId=510019&awEpisodeId=601783792&orgId=1&d=1133&p=510019&story=601783792&t=podcast&e=601783792&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1133",
      isoDate: "2018-04-13T09:00:12.000Z"
    },
    {
      id: "994a4a04-4b4e-43c4-8bf3-23f5690e571f",
      title:
        "New Mix: Ólafur Arnalds, Khruangbin, Whyte Horses, Ari Roar, More",
      content:
        'It\'s pretty much impossible to ever fully understand why we love or dislike a song. Sometimes we\'re just in a bad mood when we first hear it and the whole experience sours. Or maybe the opposite happens: You\'re in a totally elated mood and every song you hear sounds way better than it really is. We open this week\'s show with a brief reflection on this phenomenon before settling on the one thing we\'re always looking for no matter what: Songs that transport us in some way. Full playlist: 1. Whyte Horses: "Counting Down The Years," 2. Khruangbin: "Evan Finds The Third Room," 3. Beatrice Dear: "Atungak," 4. Abuse Of Power: "View Of The Few," 5. Ari Roar: "Don\'t Have A Fit," 6. Ólafur Arnalds: "re:member"',
      contentSnippet:
        'It\'s pretty much impossible to ever fully understand why we love or dislike a song. Sometimes we\'re just in a bad mood when we first hear it and the whole experience sours. Or maybe the opposite happens: You\'re in a totally elated mood and every song you hear sounds way better than it really is. We open this week\'s show with a brief reflection on this phenomenon before settling on the one thing we\'re always looking for no matter what: Songs that transport us in some way. Full playlist: 1. Whyte Horses: "Counting Down The Years," 2. Khruangbin: "Evan Finds The Third Room," 3. Beatrice Dear: "Atungak," 4. Abuse Of Power: "View Of The Few," 5. Ari Roar: "Don\'t Have A Fit," 6. Ólafur Arnalds: "re:member"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/04/20180410_asc_20180410rx.mp3?awCollectionId=510019&awEpisodeId=601146676&orgId=1&d=2467&p=510019&story=601146676&t=podcast&e=601146676&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2467",
      isoDate: "2018-04-10T16:09:00.000Z"
    },
    {
      id: "c875655e-f4a0-4432-9c57-9248efc170d4",
      title: "New Music Friday: April 6",
      content:
        "<em>All Songs Considered</em>'s Robin Hilton chats with NPR Music's Lars Gotrich, Tom Huizenga, Marissa Lorusso, Sidney Madden and Ann Powers about some of the best new albums out now on Apr. 6, from the scorching punk of Norway's Dark Times to the mesmerizing cello drones of Clarice Jensen, rap phenom Cardi B, dance pop singer Kylie Minogue's country turn and much more.  Full playlist. 1. Dark Times: <em>Tell Me What I Need, </em>2. Christina Vontzou: <em>No. 4, </em>3. Cardi B: <em>Invasion Of Privacy, </em>4. Clarice Jensen: <em>From This That Will Be Filled, </em>5. Hop Along: <em>Bark Your Head Off, Dog, </em>6. Kylie Minogue: <em>Golden</em>, 7. Kali Uchis: <em>Isolation, </em>8. Wye Oak: <em>The Louder I Call, The Faster It Runs.</em> <em> </em> Also notable for April 6: Tom Misch: <em>Geography, </em>Dr. Octogon: <em>Moosebumps, </em>Paul de Jong: <em>You Funken Sucker, </em>Unknown Mortal Orchestra: <em>Sex & Food, </em>Eels: <em>The Deconstruction.</em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton chats with NPR Music's Lars Gotrich, Tom Huizenga, Marissa Lorusso, Sidney Madden and Ann Powers about some of the best new albums out now on Apr. 6, from the scorching punk of Norway's Dark Times to the mesmerizing cello drones of Clarice Jensen, rap phenom Cardi B, dance pop singer Kylie Minogue's country turn and much more.  Full playlist. 1. Dark Times: Tell Me What I Need, 2. Christina Vontzou: No. 4, 3. Cardi B: Invasion Of Privacy, 4. Clarice Jensen: From This That Will Be Filled, 5. Hop Along: Bark Your Head Off, Dog, 6. Kylie Minogue: Golden, 7. Kali Uchis: Isolation, 8. Wye Oak: The Louder I Call, The Faster It Runs.   Also notable for April 6: Tom Misch: Geography, Dr. Octogon: Moosebumps, Paul de Jong: You Funken Sucker, Unknown Mortal Orchestra: Sex & Food, Eels: The Deconstruction.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/04/20180405_asc_nmf_20180406-rx.mp3?awCollectionId=510019&awEpisodeId=600019924&orgId=1&d=1290&p=510019&story=600019924&t=podcast&e=600019924&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1290",
      isoDate: "2018-04-06T09:00:06.000Z"
    },
    {
      id: "b79527d7-7d5f-4f12-8ab6-7f67753b60fc",
      title:
        "New Mix: Young Fathers, Confidence Man, A Stunning Tiny Desk Contest Entry, More",
      content:
        'As we sift through the thousands of video entries we got for this year\'s Tiny Desk contest, we\'ve laughed, loved and made a lot of phenomenal discoveries along the way. On this edition of <em>All Songs Considered </em>we share one of the most powerful and deeply moving ones we\'ve seen. It comes from a band called Bernie And The Believers whose lyricist, Bernie Dalton, pursued his lifelong dream of making an album, even after ALS robbed him of his ability to move or speak. We share the song the group performed for its Tiny Desk contest entry, "Unusual Boy." Full playlist: 1. Confidence Man "Boyfriend (Repeat)," 2. Illuminati Hotties "Paying Off The Happiness," 3. Young Fathers "In My View," 4. Forth Wanderers "Taste," 5. Bernie And The Believers "Unusual Boy (feat. Essence)," 6. Nikolai Lugansky "No. 5 in G Major. Moderato," 7. Hookworms "Opener."',
      contentSnippet:
        'As we sift through the thousands of video entries we got for this year\'s Tiny Desk contest, we\'ve laughed, loved and made a lot of phenomenal discoveries along the way. On this edition of All Songs Considered we share one of the most powerful and deeply moving ones we\'ve seen. It comes from a band called Bernie And The Believers whose lyricist, Bernie Dalton, pursued his lifelong dream of making an album, even after ALS robbed him of his ability to move or speak. We share the song the group performed for its Tiny Desk contest entry, "Unusual Boy." Full playlist: 1. Confidence Man "Boyfriend (Repeat)," 2. Illuminati Hotties "Paying Off The Happiness," 3. Young Fathers "In My View," 4. Forth Wanderers "Taste," 5. Bernie And The Believers "Unusual Boy (feat. Essence)," 6. Nikolai Lugansky "No. 5 in G Major. Moderato," 7. Hookworms "Opener."',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/04/20180403_asc_april3fixed.mp3?awCollectionId=510019&awEpisodeId=599184632&orgId=1&d=3053&p=510019&story=599184632&t=podcast&e=599184632&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3053",
      isoDate: "2018-04-03T17:51:00.000Z"
    },
    {
      id: "9950fed6-4d99-47a5-bacf-83ab8eb1fda4",
      title: "New Music Friday: March 30",
      content:
        "<em>All Songs Considered</em>'s Robin Hilton chats with NPR Music's Rodney Carmichael, Felix Contreras, Marissa Lorusso and Ann Powers about the must-hear albums out on March 30. This includes country singer Kacey Musgraves boundary-pushing <em>Golden Hour, </em>the Cuban big band Orquesta Akokan, conceptual hip-hop from Jean Grea and Quelle Chris, crazy infectious pop from Haley Kiyoko and much more.  Albums featured:  1. Orquesta Akokan: <em>Akokan, </em>2. Kacey Musgraves: <em>Golden Hour, </em>3. Haley Kiyoko: <em>Expectations, </em>4. Jean Grae and Quelle Chris: <em>Everything's Fine, </em>5. Bettye LaVette: <em>Things Have Changed, </em>6. Frankie Cosmos: <em>Vessel, </em>7. Lindi Ortega: <em>Liberty, </em>8. Ashley McBryde: <em>Girl Going Nowhere.</em> <em> </em> Also notable for March 30:  Amen Dunes: <em>Freedom, </em>Mary Chapin Carpenter: <em>Sometimes Just The Sky, </em>The Voidz: <em>Virtue, </em>Rich The Kid: <em>The World Is Yours, </em>Trace Mountains: <em>A Partner To Lean On, </em>DJ Esco: <em>Kolorblind, </em>Czarface & MF Doom: <em>Czarface Meets Metalface.</em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton chats with NPR Music's Rodney Carmichael, Felix Contreras, Marissa Lorusso and Ann Powers about the must-hear albums out on March 30. This includes country singer Kacey Musgraves boundary-pushing Golden Hour, the Cuban big band Orquesta Akokan, conceptual hip-hop from Jean Grea and Quelle Chris, crazy infectious pop from Haley Kiyoko and much more.  Albums featured:  1. Orquesta Akokan: Akokan, 2. Kacey Musgraves: Golden Hour, 3. Haley Kiyoko: Expectations, 4. Jean Grae and Quelle Chris: Everything's Fine, 5. Bettye LaVette: Things Have Changed, 6. Frankie Cosmos: Vessel, 7. Lindi Ortega: Liberty, 8. Ashley McBryde: Girl Going Nowhere.   Also notable for March 30:  Amen Dunes: Freedom, Mary Chapin Carpenter: Sometimes Just The Sky, The Voidz: Virtue, Rich The Kid: The World Is Yours, Trace Mountains: A Partner To Lean On, DJ Esco: Kolorblind, Czarface & MF Doom: Czarface Meets Metalface.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180329_asc_nmf_20180330-tk2-rx.mp3?awCollectionId=510019&awEpisodeId=598136135&orgId=1&d=1436&p=510019&story=598136135&t=podcast&e=598136135&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1436",
      isoDate: "2018-03-30T09:00:03.000Z"
    },
    {
      id: "e10c1378-da9c-478d-9d63-7148e8e533e9",
      title:
        "New Mix: Guided By Voices, Fantastic Negrito, A Stella Donnelly Lullaby, More",
      content:
        'The March For Our Lives rallies that unfolded across the country this past weekend underscored the heightened state of fear and anger over gun violence in the U.S. We open this week\'s show with a powerful new song from the blues and soul artist Fantastic Negrito, that he says channels his own anxieties and outrage over the state of the world, called "Plastic Hamburgers." The surprisingly loud and gritty rock cut is from his upcoming album, <em>Please Don\'t Be Dead.  </em>Complete playlist for this episode: 1. Fantastic Negrito "Plastic Hamburgers," 2. Guided By Voices "Space Gun," 3. Stella Donnelly "Talking," 4. Hearts Hearts "Phantom/Island," 5. John Prine "Summer\'s End," 6. Grouper "Parking Lot"',
      contentSnippet:
        'The March For Our Lives rallies that unfolded across the country this past weekend underscored the heightened state of fear and anger over gun violence in the U.S. We open this week\'s show with a powerful new song from the blues and soul artist Fantastic Negrito, that he says channels his own anxieties and outrage over the state of the world, called "Plastic Hamburgers." The surprisingly loud and gritty rock cut is from his upcoming album, Please Don\'t Be Dead.  Complete playlist for this episode: 1. Fantastic Negrito "Plastic Hamburgers," 2. Guided By Voices "Space Gun," 3. Stella Donnelly "Talking," 4. Hearts Hearts "Phantom/Island," 5. John Prine "Summer\'s End," 6. Grouper "Parking Lot"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180327_asc_20180327rx.mp3?awCollectionId=510019&awEpisodeId=597297429&orgId=1&d=2311&p=510019&story=597297429&t=podcast&e=597297429&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2311",
      isoDate: "2018-03-27T15:47:00.000Z"
    },
    {
      id: "29552fb3-b2c5-4d7e-a1f9-bfc0618b9906",
      title: "New Music Friday: March 23",
      content:
        "<em>All Songs Considered</em>'s Robin Hilton talks with NPR Music's Lars Gotrich, Ann Powers and Stephen Thompson about the essential albums out on March 23. This includes Jack White's sprawling, completely bonkers <em>Boarding House Reach</em>, Americana from Courtney Marie Andrews, R&B singer Toni Braxton's first new solo album in nearly a decade and more.  Hear the discussion and songs with the play button at the top of the page or by subscribing to the <em>All Songs Considered</em> podcast.  Featured Albums:    1.     Jack White: <em>Boarding House Reach</em> 2.     Lissie: <em>Castles</em> 3.     Courtney Marie Andrews: <em>May Your Kindness Remain</em> 4.     Sunflower Bean: <em>Twentytwo In Blue</em> 5.     Toni Braxton: <em>Sex And Cigarettes</em> 6.     Yamantaka//Sonic Titan: <em>Dirt</em> 7.     Erika Wennerstrom: <em>Sweet Unknown</em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton talks with NPR Music's Lars Gotrich, Ann Powers and Stephen Thompson about the essential albums out on March 23. This includes Jack White's sprawling, completely bonkers Boarding House Reach, Americana from Courtney Marie Andrews, R&B singer Toni Braxton's first new solo album in nearly a decade and more.  Hear the discussion and songs with the play button at the top of the page or by subscribing to the All Songs Considered podcast.  Featured Albums:    1.     Jack White: Boarding House Reach 2.     Lissie: Castles 3.     Courtney Marie Andrews: May Your Kindness Remain 4.     Sunflower Bean: Twentytwo In Blue 5.     Toni Braxton: Sex And Cigarettes 6.     Yamantaka//Sonic Titan: Dirt 7.     Erika Wennerstrom: Sweet Unknown",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180322_asc_nmf20180323-rx.mp3?awCollectionId=510019&awEpisodeId=596322499&orgId=1&d=1373&p=510019&story=596322499&t=podcast&e=596322499&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1373",
      isoDate: "2018-03-23T09:00:14.000Z"
    },
    {
      id: "a0990e0f-ed9e-4491-8154-7b799e20e632",
      title: "SXSW 2018 Wrap-Up",
      content:
        'Our bleary-eyed, ear-ringing week of seemingly non-stop live music in Austin, Texas has ended and we\'re back one last time to reflect on the 2018 South by Southwest festival and play some of our favorite discoveries.Hosts Bob Boilen and Robin Hilton, along with NPR Music\'s Stephen Thompson and Rodney Carmichael, convene in the NPR studios to share the most memorable stories and songs of the festival, from the gritty rock of Brooklyn\'s THICK and Afro-electronic soundscapes of Sudan Archives to the mumble rap of Tierra Whack, the soaring pop of G Flip and much more. Full playlist: 1. THICK "Are You With Me?" 2. Theodore "Are We There Yet?" 3. G Flip "About You" 4. Aisha Badru "Bridges" 5. Sudan Archives "Come Meh Way" 6. Tierra Whack "Mumbo Jumbo" 7. Buddy "Black (feat. A$AP Ferg)" 8. Gang Of Youths "What Can I Do If The Fire Goes Out?" 9. Xylouris White "Call And Response" 10. Saint Sister "Causing Trouble" 11. Gato Preto "Dia D" 12. Surma "Hemma" 13. Weird Bloom "My Dear Elena Summer\'s Vudun" 14. Thunderpussy "Velvet Noose"',
      contentSnippet:
        'Our bleary-eyed, ear-ringing week of seemingly non-stop live music in Austin, Texas has ended and we\'re back one last time to reflect on the 2018 South by Southwest festival and play some of our favorite discoveries.Hosts Bob Boilen and Robin Hilton, along with NPR Music\'s Stephen Thompson and Rodney Carmichael, convene in the NPR studios to share the most memorable stories and songs of the festival, from the gritty rock of Brooklyn\'s THICK and Afro-electronic soundscapes of Sudan Archives to the mumble rap of Tierra Whack, the soaring pop of G Flip and much more. Full playlist: 1. THICK "Are You With Me?" 2. Theodore "Are We There Yet?" 3. G Flip "About You" 4. Aisha Badru "Bridges" 5. Sudan Archives "Come Meh Way" 6. Tierra Whack "Mumbo Jumbo" 7. Buddy "Black (feat. A$AP Ferg)" 8. Gang Of Youths "What Can I Do If The Fire Goes Out?" 9. Xylouris White "Call And Response" 10. Saint Sister "Causing Trouble" 11. Gato Preto "Dia D" 12. Surma "Hemma" 13. Weird Bloom "My Dear Elena Summer\'s Vudun" 14. Thunderpussy "Velvet Noose"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180320_asc_sxsw2018wrapup-rx.mp3?awCollectionId=510019&awEpisodeId=595182253&orgId=1&d=3760&p=510019&story=595182253&t=podcast&e=595182253&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3760",
      isoDate: "2018-03-20T14:28:00.000Z"
    },
    {
      id: "eced1476-3c90-4bba-afc7-f65105b45c9e",
      title: "SXSW Late Night Dispatch: Saturday",
      content:
        "Our final day at SXSW 2018 and we discuss the remarkable lute/drum duo Xylouris White, Tierra Whack a creative artist who grew up in the Philly rap scene, a transformative set from Cuddle Magic, the flow and breath of Dessa and the story of an inhaler. And a testament to the folks who put this festival together and the wide scope of sounds",
      contentSnippet:
        "Our final day at SXSW 2018 and we discuss the remarkable lute/drum duo Xylouris White, Tierra Whack a creative artist who grew up in the Philly rap scene, a transformative set from Cuddle Magic, the flow and breath of Dessa and the story of an inhaler. And a testament to the folks who put this festival together and the wide scope of sounds",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180318_asc_saturdayroundup-rx.mp3?awCollectionId=510019&awEpisodeId=594812946&orgId=1&d=1083&p=510019&story=594812946&t=podcast&e=594812946&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1083",
      isoDate: "2018-03-19T01:58:00.000Z"
    },
    {
      id: "2e68a1da-c7c7-40b2-9b07-1a838a15b1b7",
      title: "SXSW Late Night Dispatch: Friday",
      content:
        "Andrew W.K. and his whole band gave us the life-affirming gift of joycore, Dermot Kennedy took us to church in a church and Lido Pimienta delivered a searing Latinx performance as did the Rev. Sekou. Trupa Trupa from Poland was a favorite as was G Flip.",
      contentSnippet:
        "Andrew W.K. and his whole band gave us the life-affirming gift of joycore, Dermot Kennedy took us to church in a church and Lido Pimienta delivered a searing Latinx performance as did the Rev. Sekou. Trupa Trupa from Poland was a favorite as was G Flip.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180317_asc_fridayrounduprx.mp3?awCollectionId=510019&awEpisodeId=594526644&orgId=1&d=1034&p=510019&story=594526644&t=podcast&e=594526644&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1034",
      isoDate: "2018-03-17T08:29:00.000Z"
    },
    {
      id: "9d1982dd-81c4-4cb0-a56b-6ecb02083899",
      title: "New Music Friday: March 16",
      content:
        "<em>All Songs Considered</em>'s Robin Hilton runs through the essential new album releases for March 16 with NPR Music's Ann Powers and Rodney Carmichael. Featured albums: 1. Snoop Dogg's <em>Bible Of Love</em>, 2. The Decemberists' <em>I'll Be Your Girl</em>, 3. Essaie Pas' <em>New Path</em>, 4. Mount Eerie's <em>Now Only</em>, 5. Meshell Ndegeocello's <em>Ventriloquism.</em> <em> </em>  Also mentioned:  Yo La Tengo: <em>There's A Riot Going On</em>, Caroline Says: <em>No Fool Like An Old Fool</em>, Bishop Nehru: <em>Elevators Act 1 & 2, </em>Durand Jones & The Indications: <em>Durand Jones & The </em>Indications, Lauren Auder: <em>Who Carries </em>You, PRhyme: <em>PRhyme 2</em>, Rich Homie Quan: <em>Rich As In Spirit.</em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton runs through the essential new album releases for March 16 with NPR Music's Ann Powers and Rodney Carmichael. Featured albums: 1. Snoop Dogg's Bible Of Love, 2. The Decemberists' I'll Be Your Girl, 3. Essaie Pas' New Path, 4. Mount Eerie's Now Only, 5. Meshell Ndegeocello's Ventriloquism.    Also mentioned:  Yo La Tengo: There's A Riot Going On, Caroline Says: No Fool Like An Old Fool, Bishop Nehru: Elevators Act 1 & 2, Durand Jones & The Indications: Durand Jones & The Indications, Lauren Auder: Who Carries You, PRhyme: PRhyme 2, Rich Homie Quan: Rich As In Spirit.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180316_asc_nmf.mp3?awCollectionId=510019&awEpisodeId=594094209&orgId=1&d=1943&p=510019&story=594094209&t=podcast&e=594094209&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1943",
      isoDate: "2018-03-16T09:00:10.000Z"
    },
    {
      id: "677524a6-86cb-4b21-ac46-c47b55313977",
      title: "SXSW Late Night Dispatch: Thursday",
      content:
        "Our daily wrap-up of music from the SXSW music festival continues, including Robin Hilton's emotional day of inspired music, punctuated by the Brooklyn pop-punk trio THICK and an artist known only as MAX, a phenomenal pop-and-soul singer who gives unforgettable performances with lots of flair and theatrics. Bob witnessed the positive punk energy of Idles despite the smashed glass And the show that Robin, Bob Boilen and Stephen Thompson saw all independently show up for by Many Rooms.Talia Schlanger's days was a heart warming one at Willie Neson's Ranch.",
      contentSnippet:
        "Our daily wrap-up of music from the SXSW music festival continues, including Robin Hilton's emotional day of inspired music, punctuated by the Brooklyn pop-punk trio THICK and an artist known only as MAX, a phenomenal pop-and-soul singer who gives unforgettable performances with lots of flair and theatrics. Bob witnessed the positive punk energy of Idles despite the smashed glass And the show that Robin, Bob Boilen and Stephen Thompson saw all independently show up for by Many Rooms.Talia Schlanger's days was a heart warming one at Willie Neson's Ranch.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180316_asc_thursdayrounduprx.mp3?awCollectionId=510019&awEpisodeId=594199326&orgId=1&d=855&p=510019&story=594199326&t=podcast&e=594199326&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "855",
      isoDate: "2018-03-16T08:44:00.000Z"
    },
    {
      id: "269e6489-d5e0-49c8-84a7-6e25e04e7cc5",
      title: "SXSW Late Night Dispatch: Wednesday",
      content:
        "A brief round up of Discoveries from SXSW - including the music of August Greene, the new supergroup from Common. Also we sing the praises of Superorganism, our love for Australian artist Stella Donnelly and the brilliance of Tank and the Bangas.",
      contentSnippet:
        "A brief round up of Discoveries from SXSW - including the music of August Greene, the new supergroup from Common. Also we sing the praises of Superorganism, our love for Australian artist Stella Donnelly and the brilliance of Tank and the Bangas.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180315_asc_wednesdayrounduprx2.mp3?awCollectionId=510019&awEpisodeId=593813909&orgId=1&d=868&p=510019&story=593813909&t=podcast&e=593813909&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "868",
      isoDate: "2018-03-15T08:47:00.000Z"
    },
    {
      id: "e0e1c4ad-8a53-4f3f-82d0-391ae7990819",
      title: "SXSW Late Night Dispatch: Tuesday",
      content:
        "Our roundup of artist discoveries and brilliant moments for SXSW 2018 including Sudan Archives, Thunderpussy, Max Richter, Partner, Chloe Foy, Pale Waves and a whole lot more",
      contentSnippet:
        "Our roundup of artist discoveries and brilliant moments for SXSW 2018 including Sudan Archives, Thunderpussy, Max Richter, Partner, Chloe Foy, Pale Waves and a whole lot more",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180314_asc_tuesdayrounduprx.mp3?awCollectionId=510019&awEpisodeId=593399973&orgId=1&d=957&p=510019&story=593399973&t=podcast&e=593399973&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "957",
      isoDate: "2018-03-14T15:07:00.000Z"
    },
    {
      id: "7acb5f93-99c1-4477-8521-571bf6006b12",
      title: "SXSW 2018 Preview",
      content:
        'It\'s the most wonderful time of the year! At least it is for avid music fans like us and anyone else attending the South By Southwest festival in Austin, Texas. The annual endurance challenge gets underway this week, with thousands of bands from around the world — and many more fans — converging on the city for a seemingly endless bender of live performances — shows both big and small that last all day, every day, into the wee hours of the morning, with music pouring out of every club, restaurant, street corner and alleyway for miles.For this edition of <em>All Songs Considered, </em>we (Bob Boilen, Robin Hilton and Stephen Thompson) listened to songs by more than a thousand bands that\'ll be performing at SXSW, and picked some of their favorites from artists previously unknown to hear and see. We run through some of those favorites on this episode, including the sludgy noise rock of Sharkmuffin (we\'re not making that name up) to the sweet voice of singer-songwriter Chloe Foy, the Calypsonian and soca artist Nailah Blackman and much, much more. Full playlist (song names): 1. Dermot Kennedy "Moments Passed," 2. Sharkmuffin "Scully Is A Sharkmuffin," 3. Frankie Simone "War Paint," 4. Pale Waves "Heavenly," 5. Anna McClellan "Heart Of Hearts," 6. Alice Phoebe Lou "She," 7. WILD "All My Life," 8. Double Ferrari "Double Ferrari," 9. Chloe Foy "Flaws," 10. Nailah Blackman "O\'Lawd Oye\'," 11. Trupa Trupa "To Me," 12. Descartes A Kant "Motion Picture Dream Boy," 13. IDER "Body Love," 14. Dave B "Sweetest Thing," 15. Skyway Man "The Seer"',
      contentSnippet:
        'It\'s the most wonderful time of the year! At least it is for avid music fans like us and anyone else attending the South By Southwest festival in Austin, Texas. The annual endurance challenge gets underway this week, with thousands of bands from around the world — and many more fans — converging on the city for a seemingly endless bender of live performances — shows both big and small that last all day, every day, into the wee hours of the morning, with music pouring out of every club, restaurant, street corner and alleyway for miles.For this edition of All Songs Considered, we (Bob Boilen, Robin Hilton and Stephen Thompson) listened to songs by more than a thousand bands that\'ll be performing at SXSW, and picked some of their favorites from artists previously unknown to hear and see. We run through some of those favorites on this episode, including the sludgy noise rock of Sharkmuffin (we\'re not making that name up) to the sweet voice of singer-songwriter Chloe Foy, the Calypsonian and soca artist Nailah Blackman and much, much more. Full playlist (song names): 1. Dermot Kennedy "Moments Passed," 2. Sharkmuffin "Scully Is A Sharkmuffin," 3. Frankie Simone "War Paint," 4. Pale Waves "Heavenly," 5. Anna McClellan "Heart Of Hearts," 6. Alice Phoebe Lou "She," 7. WILD "All My Life," 8. Double Ferrari "Double Ferrari," 9. Chloe Foy "Flaws," 10. Nailah Blackman "O\'Lawd Oye\'," 11. Trupa Trupa "To Me," 12. Descartes A Kant "Motion Picture Dream Boy," 13. IDER "Body Love," 14. Dave B "Sweetest Thing," 15. Skyway Man "The Seer"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180312_asc_sxswpr2018-rx.mp3?awCollectionId=510019&awEpisodeId=592784365&orgId=1&d=3740&p=510019&story=592784365&t=podcast&e=592784365&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3740",
      isoDate: "2018-03-12T09:00:06.000Z"
    },
    {
      id: "dd5da3e0-265d-4bb3-9a2a-ec9e14ab43a0",
      title: "+1: India.Arie Talks About Worth And The Grammys",
      content:
        "The Grammy Awards have been roiled by controversy regarding how women in the industry are valued — or not. The singer-songwriter talks with NPR Music's Anastasia Tsioulcas about the open letter she wrote to the Recording Academy.",
      contentSnippet:
        "The Grammy Awards have been roiled by controversy regarding how women in the industry are valued — or not. The singer-songwriter talks with NPR Music's Anastasia Tsioulcas about the open letter she wrote to the Recording Academy.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180308_asc_indiaairiefinalrx.mp3?awCollectionId=510019&awEpisodeId=592369080&orgId=1&d=1956&p=510019&story=592369080&t=podcast&e=592369080&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1956",
      isoDate: "2018-03-11T09:00:06.000Z"
    },
    {
      id: "ce67eedf-682a-433c-8b79-47e62b8e56a5",
      title:
        "Guest DJ: Nathaniel Rateliff & The Night Sweats Hop Across An Eclectic Playlist",
      content:
        "Today we have a conversation with Nathaniel Rateliff and Mark Shusterman, the keyboardist of his band The Nightsweats, who joined us to play DJ. They picked some music they love and some of the songs that influenced the making of their new album, <em>Tearing at the Seams</em>, their second studio album, out today on the legendary Stax Records.The scrappy-looking, mostly bearded, all-mustachioed band of eight players makes music steeped in rhythm and blues, with a large dose of old-time rock and roll.",
      contentSnippet:
        "Today we have a conversation with Nathaniel Rateliff and Mark Shusterman, the keyboardist of his band The Nightsweats, who joined us to play DJ. They picked some music they love and some of the songs that influenced the making of their new album, Tearing at the Seams, their second studio album, out today on the legendary Stax Records.The scrappy-looking, mostly bearded, all-mustachioed band of eight players makes music steeped in rhythm and blues, with a large dose of old-time rock and roll.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180309_asc_nathanielrateliff_rx.mp3?awCollectionId=510019&awEpisodeId=592276607&orgId=1&d=2581&p=510019&story=592276607&t=podcast&e=592276607&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2581",
      isoDate: "2018-03-09T16:44:00.000Z"
    },
    {
      id: "f361535b-d056-4d07-b9e5-88b887111b72",
      title: "New Music Friday: March 9",
      content:
        "<em>All Songs Considered</em>'s Robin Hilton chats with NPR Music's Sidney Madden and Tom Huizenga about the essential new albums out for March 9. Full playlist: 1. Thirdstory <em>Cold Heart, </em>2. Brad Mehldau <em>After Bach, </em>3. Jeremy Messersmith <em>Late Stage Capitalism, </em>4. Young Fathers <em>Cocoa Sugar, </em>5. Lil Yachty <em>Lil Boat 2, </em>6. Jonny Greenwood <em>You Were Never Really Here, </em>7. Nathaniel Rateliff and the Night Sweats <em>Tearing At The Seams.</em>   Also notable for March 9:  August Greene <em>August Greene, </em>David Byrne <em>American Utopia, </em>Jimi Hendrix <em>Both Sides Of The Sky, </em>Editors <em>Violence. </em>",
      contentSnippet:
        "All Songs Considered's Robin Hilton chats with NPR Music's Sidney Madden and Tom Huizenga about the essential new albums out for March 9. Full playlist: 1. Thirdstory Cold Heart, 2. Brad Mehldau After Bach, 3. Jeremy Messersmith Late Stage Capitalism, 4. Young Fathers Cocoa Sugar, 5. Lil Yachty Lil Boat 2, 6. Jonny Greenwood You Were Never Really Here, 7. Nathaniel Rateliff and the Night Sweats Tearing At The Seams.   Also notable for March 9:  August Greene August Greene, David Byrne American Utopia, Jimi Hendrix Both Sides Of The Sky, Editors Violence.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180309_asc_nmf20180309finalrx.mp3?awCollectionId=510019&awEpisodeId=592164262&orgId=1&d=1163&p=510019&story=592164262&t=podcast&e=592164262&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1163",
      isoDate: "2018-03-09T10:00:04.000Z"
    },
    {
      id: "d9cf2705-d72e-44bd-ace0-1ba86619fe56",
      title: "My Bloody Valentine's Kevin Shields Gets Deep Into 'Loveless'",
      content:
        "This is a complex and fascinating conversation with Kevin Shields of My Bloody Valentine about the latest version of the band's legendary 1991 album <em>Loveless. </em>It's also about the group's future. If you have the vinyl version of <em>Loveless</em> you probably think you it's an analog recording. Well the technical truth is, you don't. It's a bit confusing, but for one, the nice segues on <em>Loveless — </em>those seamless song-to-song transitions — were done on a computer. And before a pressing plant makes the vinyl version, it turns the analog tapes into a digital file.So Kevin Shields went on what he thought would be a brief mission to make an all-analog version of <em>Loveless</em>. It ended up taking years and an awful lot of money. But now the new vinyl version is out and the tale of the tape is what much of this conversation is about. We get in the weeds about tech, about mastering an album (which is the technical final tweaking done before a record is pressed). But stick with it. It was an eye-and-ear-opening conversation.",
      contentSnippet:
        "This is a complex and fascinating conversation with Kevin Shields of My Bloody Valentine about the latest version of the band's legendary 1991 album Loveless. It's also about the group's future. If you have the vinyl version of Loveless you probably think you it's an analog recording. Well the technical truth is, you don't. It's a bit confusing, but for one, the nice segues on Loveless — those seamless song-to-song transitions — were done on a computer. And before a pressing plant makes the vinyl version, it turns the analog tapes into a digital file.So Kevin Shields went on what he thought would be a brief mission to make an all-analog version of Loveless. It ended up taking years and an awful lot of money. But now the new vinyl version is out and the tale of the tape is what much of this conversation is about. We get in the weeds about tech, about mastering an album (which is the technical final tweaking done before a record is pressed). But stick with it. It was an eye-and-ear-opening conversation.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180306_asc_mybloodyflnalrx.mp3?awCollectionId=510019&awEpisodeId=591220211&orgId=1&d=3425&p=510019&story=591220211&t=podcast&e=591220211&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3425",
      isoDate: "2018-03-06T19:00:00.000Z"
    },
    {
      id: "13e9b663-5f12-4e6d-9c73-57fc41115a15",
      title: "New Music Friday: March 2",
      content:
        "It's a busy release day with lots of great albums dropping. On this edition of New Music Friday, All Songs Considered's Robin Hilton talks with rotating cast of NPR Music guests about the essential releases for March 2, from the over-the-top, joyful rock of Andrew W.K. to the Afrobeats of Seun Kuti, the delicate finger-picked guitar of Sam Moss and more.   Full Playlist: 1. Andrew W.K. 'You Are Not Alone,' 2. Seun Kuti 'Black Times,' 3. Camp Cope 'How To Socialise And Make Friends,' 4. Tracey Thorn 'Record,' 5. Gwenno 'Le Kov,' 6. Suuns 'Felt,' 7. The Breeders 'All Nerve,' 8. Soccer Mommy 'Clean,' 9. Sam Moss 'Neon,' 10. Haley Heynderickx 'I Need To Start A Garden,' 11. Lucy Dacus 'Historian.'   Other notable releases: Anna von Hausswolf 'Dead Magic,' Lucius 'NUDES,' Moby 'Everything Was Beautiful And Nothing Hurt,' Cut Chemist 'Die Cut' Sonny Smith 'Rod For Your Love' Titus Andronicus 'A Productive Cough' Joan Baez 'Whistle Down The Wind' Prism Tats 'Mamba.'",
      contentSnippet:
        "It's a busy release day with lots of great albums dropping. On this edition of New Music Friday, All Songs Considered's Robin Hilton talks with rotating cast of NPR Music guests about the essential releases for March 2, from the over-the-top, joyful rock of Andrew W.K. to the Afrobeats of Seun Kuti, the delicate finger-picked guitar of Sam Moss and more.   Full Playlist: 1. Andrew W.K. 'You Are Not Alone,' 2. Seun Kuti 'Black Times,' 3. Camp Cope 'How To Socialise And Make Friends,' 4. Tracey Thorn 'Record,' 5. Gwenno 'Le Kov,' 6. Suuns 'Felt,' 7. The Breeders 'All Nerve,' 8. Soccer Mommy 'Clean,' 9. Sam Moss 'Neon,' 10. Haley Heynderickx 'I Need To Start A Garden,' 11. Lucy Dacus 'Historian.'   Other notable releases: Anna von Hausswolf 'Dead Magic,' Lucius 'NUDES,' Moby 'Everything Was Beautiful And Nothing Hurt,' Cut Chemist 'Die Cut' Sonny Smith 'Rod For Your Love' Titus Andronicus 'A Productive Cough' Joan Baez 'Whistle Down The Wind' Prism Tats 'Mamba.'",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180301_asc_nmf_20180302_final_fixedrx.mp3?awCollectionId=510019&awEpisodeId=590141507&orgId=1&d=1594&p=510019&story=590141507&t=podcast&e=590141507&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1594",
      isoDate: "2018-03-02T10:00:31.000Z"
    },
    {
      id: "7bdbb459-dd01-4b57-ae69-81959e6a0d29",
      title: "Margaret Glaspy Writes A Bookend To 'Emotions And Math'",
      content:
        "Margaret Glaspy has just surprised fans with three new songs on a brand new EP called Born Yesterday. She describes it as a bookend to Emotions And Math — the stunning, 2016 debut full-length that launched her career, a world tour and landed on many top 10 lists for the year, including mine.I spoke with Margaret Glaspy about these new songs, how they end one chapter of her life but also lead to the next adventure.",
      contentSnippet:
        "Margaret Glaspy has just surprised fans with three new songs on a brand new EP called Born Yesterday. She describes it as a bookend to Emotions And Math — the stunning, 2016 debut full-length that launched her career, a world tour and landed on many top 10 lists for the year, including mine.I spoke with Margaret Glaspy about these new songs, how they end one chapter of her life but also lead to the next adventure.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/03/20180302_asc_margaretglaspyrx.mp3?awCollectionId=510019&awEpisodeId=590137458&orgId=1&d=1335&p=510019&story=590137458&t=podcast&e=590137458&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1335",
      isoDate: "2018-03-02T05:01:32.000Z"
    },
    {
      id: "7f93e891-2659-45ac-b26f-a2d3faf38e8d",
      title: "New Mix: Kacey Musgraves, Parquet Courts, Yo La Tengo, More",
      content:
        'Singer-songwriter Kacey Musgraves has been pushing the boundaries of contemporary country music since releasing her remarkable, 2013 major label debut, <em>Same Trailer, Different Park. </em>She\'s back now with a new album and two new songs that solidify her place in the "new" Nashville sound by digging even deeper into sparkly, spikey pop. We\'ve got one of the two new singles, "Butterflies," which she calls an "ode to the right person giving me wings and the first song I wrote after meeting my now husband." Full playlist: 1. Editors "Hallelujah (So Low)," 2. Parquet Courts "Almost Had To Start A Fight/In And Out Of Patience," 3. Richard Russell and Sampha "Close But Not Quite," 4. Yuno "No Going Back," 5. Kacey Musgraves "Butterflies," 6. Yo La Tengo "Shades Of Blue"',
      contentSnippet:
        'Singer-songwriter Kacey Musgraves has been pushing the boundaries of contemporary country music since releasing her remarkable, 2013 major label debut, Same Trailer, Different Park. She\'s back now with a new album and two new songs that solidify her place in the "new" Nashville sound by digging even deeper into sparkly, spikey pop. We\'ve got one of the two new singles, "Butterflies," which she calls an "ode to the right person giving me wings and the first song I wrote after meeting my now husband." Full playlist: 1. Editors "Hallelujah (So Low)," 2. Parquet Courts "Almost Had To Start A Fight/In And Out Of Patience," 3. Richard Russell and Sampha "Close But Not Quite," 4. Yuno "No Going Back," 5. Kacey Musgraves "Butterflies," 6. Yo La Tengo "Shades Of Blue"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/02/20180227_asc_20180227rx.mp3?awCollectionId=510019&awEpisodeId=589177653&orgId=1&d=2256&p=510019&story=589177653&t=podcast&e=589177653&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2256",
      isoDate: "2018-02-27T17:48:00.000Z"
    },
    {
      id: "d3563d1f-ec05-4131-ad14-c32eda3c7296",
      title: "New Music Friday: Feb. 23",
      content:
        "All Songs Considered's Robin Hilton talks with NPR Music's Stephen Thompson, Lars Gotrich and Joshua Bote about the essential new albums out for Feb. 23. Full playlist: 1. Screaming Females 'All At Once,' 2. Dessa 'Chime,' 3. S. Carey 'Hundred Acres,' 4. The Lovely Eggs 'This Is Eggland,' 5. SOB x RBE 'Gangin,' 6. Nanook Of The North 'Nanook Of The North,' 7. Turnstile 'Time And Space.'",
      contentSnippet:
        "All Songs Considered's Robin Hilton talks with NPR Music's Stephen Thompson, Lars Gotrich and Joshua Bote about the essential new albums out for Feb. 23. Full playlist: 1. Screaming Females 'All At Once,' 2. Dessa 'Chime,' 3. S. Carey 'Hundred Acres,' 4. The Lovely Eggs 'This Is Eggland,' 5. SOB x RBE 'Gangin,' 6. Nanook Of The North 'Nanook Of The North,' 7. Turnstile 'Time And Space.'",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/02/20180222_asc_nmf_20180223_rx.mp3?awCollectionId=510019&awEpisodeId=588176540&orgId=1&d=1054&p=510019&story=588176540&t=podcast&e=588176540&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1054",
      isoDate: "2018-02-23T10:00:23.000Z"
    },
    {
      id: "24931c36-1793-4c0b-8689-9a9716d3e3ea",
      title: "New Mix: Courtney Barnett, Exitmusic, Okkervil River, More",
      content:
        'Since releasing her incredible, 2015 debut album <em>Sometimes I Sit And Think, And Sometimes I Just Sit</em>, Courtney Barnett has released a collaboration record with Kurt Vile and a one-off single called "How To Boil An Egg." But she\'s back now with a new full-length solo album. <em>Tell Me How You Really Feel </em>is due out May 18 and we\'ve got the first single from it, "Nameless, Faceless. "Also on the show: The long wait for new music from the brooding dreamscape duo Exitmusic is over. After releasing a stunning debut called <em>Passage </em>in 2012, the band largely disappeared. But Exitmusic is finally back with a worthy followup born out of heartache and loss. <em>The Recognitions </em>is due out April 20 and the first single is a densely layered, soaring elegy, "I\'ll Never Know." Full Playlist: 1. Exitmusic "I\'ll Never Know," 2. Courtney Barnett "Nameless, Faceless," 3. Okkervil River "Don\'t Move Back To LA," 4. Half Waif "Keep It Out," 5. Kero Kero Bonito "You Know How It Is," 6. Clint Heidorn "North Hudson," 7. Anna von Hausswolf "The Truth, The Glow, The Fall"',
      contentSnippet:
        'Since releasing her incredible, 2015 debut album Sometimes I Sit And Think, And Sometimes I Just Sit, Courtney Barnett has released a collaboration record with Kurt Vile and a one-off single called "How To Boil An Egg." But she\'s back now with a new full-length solo album. Tell Me How You Really Feel is due out May 18 and we\'ve got the first single from it, "Nameless, Faceless. "Also on the show: The long wait for new music from the brooding dreamscape duo Exitmusic is over. After releasing a stunning debut called Passage in 2012, the band largely disappeared. But Exitmusic is finally back with a worthy followup born out of heartache and loss. The Recognitions is due out April 20 and the first single is a densely layered, soaring elegy, "I\'ll Never Know." Full Playlist: 1. Exitmusic "I\'ll Never Know," 2. Courtney Barnett "Nameless, Faceless," 3. Okkervil River "Don\'t Move Back To LA," 4. Half Waif "Keep It Out," 5. Kero Kero Bonito "You Know How It Is," 6. Clint Heidorn "North Hudson," 7. Anna von Hausswolf "The Truth, The Glow, The Fall"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/02/20180220_asc_20180220_rhfix.mp3?awCollectionId=510019&awEpisodeId=587322445&orgId=1&d=3190&p=510019&story=587322445&t=podcast&e=587322445&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3190",
      isoDate: "2018-02-20T19:14:00.000Z"
    },
    {
      id: "11effd32-a980-42c4-816a-089a25e99c60",
      title: "+1: A Conversation With Irish Rapper Rejjie Snow",
      content:
        "NPR Music's Rodney Carmichael and Sidney Madden talk with Snow about his stunning new album, <em>Dear Annie</em>.",
      contentSnippet:
        "NPR Music's Rodney Carmichael and Sidney Madden talk with Snow about his stunning new album, Dear Annie.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/02/20180219_asc_rejjie_snow_adjusted_2.mp3?awCollectionId=510019&awEpisodeId=587055420&orgId=1&d=1195&p=510019&story=587055420&t=podcast&e=587055420&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1195",
      isoDate: "2018-02-19T14:41:00.000Z"
    },
    {
      id: "14dc9299-fa67-42f7-96e8-a6c3dc089d7c",
      title: "New Music Friday: Feb. 16",
      content:
        "All Songs Considered's Robin Hilton runs through the essential new albums out on Feb. 16 with NPR Music's Ann Powers and Rodney Carmichael.   Featured albums: 1. Rejjie Snow 'Dear Annie,' 2. Brandi Carlile 'By The Way, I Forgive You,' 3. Superchunk 'What A Time To Be Alive,' 4. Nipsey Hussle 'Victory Lap,' 5. Loma 'Loma,' 6. Marlon Williams 'Make Way For Love,' 7. Car Seat Headrest 'Twin Fantasy (Face To Face)'",
      contentSnippet:
        "All Songs Considered's Robin Hilton runs through the essential new albums out on Feb. 16 with NPR Music's Ann Powers and Rodney Carmichael.   Featured albums: 1. Rejjie Snow 'Dear Annie,' 2. Brandi Carlile 'By The Way, I Forgive You,' 3. Superchunk 'What A Time To Be Alive,' 4. Nipsey Hussle 'Victory Lap,' 5. Loma 'Loma,' 6. Marlon Williams 'Make Way For Love,' 7. Car Seat Headrest 'Twin Fantasy (Face To Face)'",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/02/20180216_asc_nmf20180216_final_rx.mp3?awCollectionId=510019&awEpisodeId=586291720&orgId=1&d=1326&p=510019&story=586291720&t=podcast&e=586291720&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1326",
      isoDate: "2018-02-16T10:00:20.000Z"
    },
    {
      id: "04e4cea8-5171-4b51-8a30-ad1420cebf9c",
      title: "Guest DJ: First Aid Kit Talks About - And Sings - Swedish Pop",
      content:
        "And now, a conversation and sing-a-long with First Aid Kit!It's been just about six years since First Aid Kit knocked me out with the duo's performance at the Tiny Desk. The two Swedish sisters, Klara and Johanna Söderberg, make remarkable, American country-flavored music. Their latest songs can be found on their album Ruins. That record includes performances by Wilco percussionist Glenn Kotche and former R.E.M. guitarist Peter Buck, and it was produced by Tucker Martine, known for his work with The Decemberists, My Morning Jacket, Spoon and many others.In this conversation, the two sisters talk about working with Tucker Martine in Portland, Ore. and how his participation helped broaden and empower their sound.But what was so much fun about this guest DJ show were the Swedish songs they brought in and the sing-a-long that seemed to spontaneously happen for every tune they played.",
      contentSnippet:
        "And now, a conversation and sing-a-long with First Aid Kit!It's been just about six years since First Aid Kit knocked me out with the duo's performance at the Tiny Desk. The two Swedish sisters, Klara and Johanna Söderberg, make remarkable, American country-flavored music. Their latest songs can be found on their album Ruins. That record includes performances by Wilco percussionist Glenn Kotche and former R.E.M. guitarist Peter Buck, and it was produced by Tucker Martine, known for his work with The Decemberists, My Morning Jacket, Spoon and many others.In this conversation, the two sisters talk about working with Tucker Martine in Portland, Ore. and how his participation helped broaden and empower their sound.But what was so much fun about this guest DJ show were the Swedish songs they brought in and the sing-a-long that seemed to spontaneously happen for every tune they played.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/02/20180215_asc_firstaidkit.mp3?awCollectionId=510019&awEpisodeId=585950347&orgId=1&d=2434&p=510019&story=585950347&t=podcast&e=585950347&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2434",
      isoDate: "2018-02-15T05:19:19.000Z"
    },
    {
      id: "78f1b9da-d141-431f-bde7-58db4978f173",
      title: "Love Songs With Jay Som And Japanese Breakfast",
      content:
        "Melina Duterte, best known for her project Jay Som, and Michelle Zauner of Japanese Breakfast felt like the perfect choice to talk to us this week: They both know how to write about love, and they're both playfully entertaining on social media. They each sent me a list of love songs, with neither aware of what the other had picked. This conversation took place in three cities: Melina was at NPR West in Culver City, California, while Michelle was at our NPR bureau in New York City. In fact, they'd begun the conversation before host Bob Boilen arrived at NPR's studio in Washington, D.C. It was a conversation that included everything from songs they know from middle school to song choices inspired by their parents' love.",
      contentSnippet:
        "Melina Duterte, best known for her project Jay Som, and Michelle Zauner of Japanese Breakfast felt like the perfect choice to talk to us this week: They both know how to write about love, and they're both playfully entertaining on social media. They each sent me a list of love songs, with neither aware of what the other had picked. This conversation took place in three cities: Melina was at NPR West in Culver City, California, while Michelle was at our NPR bureau in New York City. In fact, they'd begun the conversation before host Bob Boilen arrived at NPR's studio in Washington, D.C. It was a conversation that included everything from songs they know from middle school to song choices inspired by their parents' love.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/02/20180212_asc_valentinesfinalrx3.mp3?awCollectionId=510019&awEpisodeId=585155347&orgId=1&d=2293&p=510019&story=585155347&t=podcast&e=585155347&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2293",
      isoDate: "2018-02-12T20:05:00.000Z"
    },
    {
      id: "a07430d1-84ee-4dd5-bf05-514402bf7190",
      title: "New Music Friday: Feb. 9",
      content:
        "All Songs Considered's Bob Boilen talks with NPR Music's Sidney Madden and Marissa Lorusso about the essential new albums out on Feb. 9, including the Black Panther soundtrack, MGMT's 'Little Dark Age,' the crazy polyrhythms or Palm and more.    Albums mentioned on this episode:  1. Kendrick Lamar et al 'Black Panther: The Album,' 2. Palm 'Rock Island,' 3. MGMT 'Little Dark Age,' 4. Son Lux 'Brighter Wounds,' 5. SHIRT 'Pure Beauty'",
      contentSnippet:
        "All Songs Considered's Bob Boilen talks with NPR Music's Sidney Madden and Marissa Lorusso about the essential new albums out on Feb. 9, including the Black Panther soundtrack, MGMT's 'Little Dark Age,' the crazy polyrhythms or Palm and more.    Albums mentioned on this episode:  1. Kendrick Lamar et al 'Black Panther: The Album,' 2. Palm 'Rock Island,' 3. MGMT 'Little Dark Age,' 4. Son Lux 'Brighter Wounds,' 5. SHIRT 'Pure Beauty'",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/02/20180209_asc_nmf20180209.mp3?awCollectionId=510019&awEpisodeId=584417594&orgId=1&d=1077&p=510019&story=584417594&t=podcast&e=584417594&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1077",
      isoDate: "2018-02-09T10:00:24.000Z"
    },
    {
      id: "b7002d98-3dd2-4956-92cb-0632bceb5fdd",
      title: "New Mix: Girlpool, Superorganism, The Messthetics, More ",
      content:
        "Former members of the legendary Fugazi, new semi-found-sound collages and Blood Orange collaborates with Girlpool.",
      contentSnippet:
        "Former members of the legendary Fugazi, new semi-found-sound collages and Blood Orange collaborates with Girlpool.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/02/20180206_asc_20180205-rxloud3.mp3?awCollectionId=510019&awEpisodeId=583711042&orgId=1&d=1987&p=510019&story=583711042&t=podcast&e=583711042&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1987",
      isoDate: "2018-02-06T18:38:00.000Z"
    },
    {
      id: "338ae655-1d4a-4c0e-b3f6-c8bf47004137",
      title: "New Music Friday: Feb. 2",
      content:
        "<em>All Songs Considered</em>'s Robin Hilton runs through this week's essential new releases with NPR Music's Ann Powers and Stephen Thompson. This week we manage to go from Justin Timberlake's 'Man Of The Woods' to the abstract sounds of Efrim Menuck of Godspeed You! Black Emperor, contemporary country from Montgomery Gentry, Roxy Music and more.    Albums we talk about: 1. Justin Timberlake 'Man Of The Woods,' 2. Rhye 'Blood,' 3. Efrim Menuck 'Pissing Stars,' 4. Montgomery Gentry 'Here's To You,' 5. Field Music 'Open Here,' 6. Roxy Music 'Roxy Music 45th Deluxe Edition.'   Also notable for Feb. 2: Anna Burch 'Quit The Curse,' Steve Reich 'Pulse/Quartet,' Kyle Craft 'Full Circle Nightmare,' Red River Dialect 'Broken Stay Open Sky'",
      contentSnippet:
        "All Songs Considered's Robin Hilton runs through this week's essential new releases with NPR Music's Ann Powers and Stephen Thompson. This week we manage to go from Justin Timberlake's 'Man Of The Woods' to the abstract sounds of Efrim Menuck of Godspeed You! Black Emperor, contemporary country from Montgomery Gentry, Roxy Music and more.    Albums we talk about: 1. Justin Timberlake 'Man Of The Woods,' 2. Rhye 'Blood,' 3. Efrim Menuck 'Pissing Stars,' 4. Montgomery Gentry 'Here's To You,' 5. Field Music 'Open Here,' 6. Roxy Music 'Roxy Music 45th Deluxe Edition.'   Also notable for Feb. 2: Anna Burch 'Quit The Curse,' Steve Reich 'Pulse/Quartet,' Kyle Craft 'Full Circle Nightmare,' Red River Dialect 'Broken Stay Open Sky'",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/02/20180201_asc_nmf20180202.mp3?awCollectionId=510019&awEpisodeId=582591150&orgId=1&d=1335&p=510019&story=582591150&t=podcast&e=582591150&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1335",
      isoDate: "2018-02-02T10:00:20.000Z"
    },
    {
      id: "23f9256a-6ed3-4443-8cb2-14e012295ef1",
      title: "New Mix: Wye Oak, José González, Let's Eat Grandma, More",
      content:
        'Has anyone ever watched the Grammy\'s and concluded that the Recording Academy really nailed it? (No one has ever concluded they nailed it). So we begin this episode of <em>All Songs Considered</em> with a simple question: Why keep watching?! It\'s like being addicted to disappointment and outrage.The only remedy is to share and talk about a whole bunch of great artists who probably aren\'t on the Academy\'s radar, including the gloriously inspired rock band Wye Oak and Swedish folk singer José González. González quietly dropped a new EP last week with retooled versions of songs from his back catalog, while Wye Oak just announced they\'ve got a new full-length coming in the spring called <em>The Louder I Call, The Faster It Runs. </em>We play the title track on this week\'s show.Also on the program: Gritty, loud and fast guitar rock from Grace Vonderkuhn; the playfully sinister music of Let\'s Eat Grandma; ethereal dreamscapes from singer Brianna Hunt\'s solo project Many Rooms; and the Iranian-Dutch singer known as Sevdaliza.Full Playlist: 1. Grace Vonderkuhn "Bad Habits," 2. Let\'s Eat Grandma "Hot Pink," 3. José González "Killing For Love," 4. Many Rooms "Which Is To Say, Everything," 5. Wye Oak "The Louder I Call, The Faster It Runs," 6. Sevdaliza "Soul Syncable"',
      contentSnippet:
        'Has anyone ever watched the Grammy\'s and concluded that the Recording Academy really nailed it? (No one has ever concluded they nailed it). So we begin this episode of All Songs Considered with a simple question: Why keep watching?! It\'s like being addicted to disappointment and outrage.The only remedy is to share and talk about a whole bunch of great artists who probably aren\'t on the Academy\'s radar, including the gloriously inspired rock band Wye Oak and Swedish folk singer José González. González quietly dropped a new EP last week with retooled versions of songs from his back catalog, while Wye Oak just announced they\'ve got a new full-length coming in the spring called The Louder I Call, The Faster It Runs. We play the title track on this week\'s show.Also on the program: Gritty, loud and fast guitar rock from Grace Vonderkuhn; the playfully sinister music of Let\'s Eat Grandma; ethereal dreamscapes from singer Brianna Hunt\'s solo project Many Rooms; and the Iranian-Dutch singer known as Sevdaliza.Full Playlist: 1. Grace Vonderkuhn "Bad Habits," 2. Let\'s Eat Grandma "Hot Pink," 3. José González "Killing For Love," 4. Many Rooms "Which Is To Say, Everything," 5. Wye Oak "The Louder I Call, The Faster It Runs," 6. Sevdaliza "Soul Syncable"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/01/20180129_asc_20180130-rxloud.mp3?awCollectionId=510019&awEpisodeId=581845517&orgId=1&d=2247&p=510019&story=581845517&t=podcast&e=581845517&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2247",
      isoDate: "2018-01-30T16:53:00.000Z"
    },
    {
      id: "451427e3-70a8-4635-a032-0fb78d45f8b2",
      title: "New Music Friday: Jan. 26",
      content:
        "Friday's the day lots of new albums drop! <em>All Songs Considered</em>'s Robin Hilton talks with NPR Music's Sidney Madden and Lars Gotrich about the ones you need to hear that are out today: 1. Ty Segall 'Freedom's Goblin,' 2. No Age 'Snares Like A Haircut,' 3. Migos 'Culture II,' 4. Mimicking Birds 'Layers Of Us,' 5. The Spook School 'Could It Be Different,' 6. Craig David 'The Time Is Now,' 7. Dream Wife 'Dream Wife.' Also Notable: Nils Frahm 'All Melody,' Mary Gauthier 'Rifles And Rosary Beads,' Calexico 'The Thread That Keeps Us,' Cardo and Payroll Giovanni 'Big Bossin Vol 2,' Tribulation 'Down Below,' Khruangbin 'Con Todo El Mundo.'",
      contentSnippet:
        "Friday's the day lots of new albums drop! All Songs Considered's Robin Hilton talks with NPR Music's Sidney Madden and Lars Gotrich about the ones you need to hear that are out today: 1. Ty Segall 'Freedom's Goblin,' 2. No Age 'Snares Like A Haircut,' 3. Migos 'Culture II,' 4. Mimicking Birds 'Layers Of Us,' 5. The Spook School 'Could It Be Different,' 6. Craig David 'The Time Is Now,' 7. Dream Wife 'Dream Wife.' Also Notable: Nils Frahm 'All Melody,' Mary Gauthier 'Rifles And Rosary Beads,' Calexico 'The Thread That Keeps Us,' Cardo and Payroll Giovanni 'Big Bossin Vol 2,' Tribulation 'Down Below,' Khruangbin 'Con Todo El Mundo.'",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/01/20180126_asc_nmf20180126.mp3?awCollectionId=510019&awEpisodeId=580907344&orgId=1&d=1016&p=510019&story=580907344&t=podcast&e=580907344&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1016",
      isoDate: "2018-01-26T10:00:17.000Z"
    },
    {
      id: "59111349-ab95-4306-bccc-fb479c9b1810",
      title:
        "Kevin Morby And Waxahatchee Talk About Covering Songs By Jason Molina",
      content:
        'Kevin Morby and Waxahatchee\'s Katie Crutchfield have just released covers of two songs by the late cult legend Jason Molina. One of the two tunes released today, the A-side, is among Molina\'s best-known songs, called "Farewell Transmission." The B-side is a lesser-known tune called "Dark Don\'t Hide It." In this conversation with All Songs Considered host Bob Boilen, Katie Crutchfield and Kevin Morby talk about what drew them to the music of Jason Molina, the challenges of covering his music and what it meant to dig deep into these songs.',
      contentSnippet:
        'Kevin Morby and Waxahatchee\'s Katie Crutchfield have just released covers of two songs by the late cult legend Jason Molina. One of the two tunes released today, the A-side, is among Molina\'s best-known songs, called "Farewell Transmission." The B-side is a lesser-known tune called "Dark Don\'t Hide It." In this conversation with All Songs Considered host Bob Boilen, Katie Crutchfield and Kevin Morby talk about what drew them to the music of Jason Molina, the challenges of covering his music and what it meant to dig deep into these songs.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/01/20180125_asc_morbycrutchfieldrx.mp3?awCollectionId=510019&awEpisodeId=580679578&orgId=1&d=1486&p=510019&story=580679578&t=podcast&e=580679578&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1486",
      isoDate: "2018-01-25T17:05:00.000Z"
    },
    {
      id: "daee28fd-c52d-4188-b7ec-ebf6029261dc",
      title: "New Mix: David Byrne, Sylvan Esso, Nils Frahm, More",
      content:
        'David Byrne is back with his first album of all-new solo music in 14 years. <em>American Utopia, </em>due out March 9 on Byrne\'s Todo Mundo imprint,<em> </em>includes contributions from Brian Eno, the Onyx Collective, Daniel Lopatin, Sampha and more. We kick this week\'s show off with the first single from the album, the polyrhythmic, party-pop song "Everybody\'s Coming To My House."Also on the program: NPR Music\'s Tom Huizenga stops by to share the mind-bending, genre-defying sounds of pianist Nils Frahm; Sylvan Esso takes an upbeat, carefree look at the end of the world; and the Boston-based band Darlingside reflects on childhood and lost youth with a beautiful and affecting new song called "Old Friend."All that plus the bent sounds of former Supergrass frontman Gaz Coombes, idiosyncratic pop from Trace Mountains (a side-project from Dave Benton of the band LVL UP) and the pulsing ambient sounds of German composer Niklas Paschburg.Full Playlist: 1. David Byrne: "Everybody\'s Coming To My House," 2. Sylvan Esso: "PARAD(w/m)E," 3. Gaz Coombes: "World\'s Strongest Man," 4. Trace Mountains: "Turn Twice," 5. Nils Frahm: "Momentum," 6. Niklas Paschburg: "Spark," 7. Darlingside: "Old Friend"',
      contentSnippet:
        'David Byrne is back with his first album of all-new solo music in 14 years. American Utopia, due out March 9 on Byrne\'s Todo Mundo imprint, includes contributions from Brian Eno, the Onyx Collective, Daniel Lopatin, Sampha and more. We kick this week\'s show off with the first single from the album, the polyrhythmic, party-pop song "Everybody\'s Coming To My House."Also on the program: NPR Music\'s Tom Huizenga stops by to share the mind-bending, genre-defying sounds of pianist Nils Frahm; Sylvan Esso takes an upbeat, carefree look at the end of the world; and the Boston-based band Darlingside reflects on childhood and lost youth with a beautiful and affecting new song called "Old Friend."All that plus the bent sounds of former Supergrass frontman Gaz Coombes, idiosyncratic pop from Trace Mountains (a side-project from Dave Benton of the band LVL UP) and the pulsing ambient sounds of German composer Niklas Paschburg.Full Playlist: 1. David Byrne: "Everybody\'s Coming To My House," 2. Sylvan Esso: "PARAD(w/m)E," 3. Gaz Coombes: "World\'s Strongest Man," 4. Trace Mountains: "Turn Twice," 5. Nils Frahm: "Momentum," 6. Niklas Paschburg: "Spark," 7. Darlingside: "Old Friend"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/01/20180123_asc_20180122-rx.mp3?awCollectionId=510019&awEpisodeId=579970506&orgId=1&d=2873&p=510019&story=579970506&t=podcast&e=579970506&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2873",
      isoDate: "2018-01-23T16:26:00.000Z"
    },
    {
      id: "6d041bf8-c649-4bf6-8d2a-cd49d22a96a2",
      title: "A Conversation With MILCK: 'Women Are Viral'",
      content:
        'Connie Lim, who writes and records as MILCK (a combination of her last name backwards and her first two initials) makes music for anyone who feels out of place in the world. They\'re songs of empowerment and cathartic healing for the displaced and brokenhearted. It\'s a kind of thesis or mission statement MILCK first declared on her anthemic hit "Quiet," the song that blew up after she performed it with a group of a cappella singers at last year\'s Women\'s March in Washington, D.C. "It\'s about helping people who have felt silenced reclaim their power," she says. In the year since releasing "Quiet," MILCK has signed with Atlantic Records and just released her debut EP, <em>This Is Not The End. </em>On this edition of <em>All Songs Considered </em>she talks with All Songs Considered co host Robin Hilton about the new music, her struggle to make it as a musician while preserving her Chinese American identity, how courage and truth can lead to widespread healing and much more.',
      contentSnippet:
        'Connie Lim, who writes and records as MILCK (a combination of her last name backwards and her first two initials) makes music for anyone who feels out of place in the world. They\'re songs of empowerment and cathartic healing for the displaced and brokenhearted. It\'s a kind of thesis or mission statement MILCK first declared on her anthemic hit "Quiet," the song that blew up after she performed it with a group of a cappella singers at last year\'s Women\'s March in Washington, D.C. "It\'s about helping people who have felt silenced reclaim their power," she says. In the year since releasing "Quiet," MILCK has signed with Atlantic Records and just released her debut EP, This Is Not The End. On this edition of All Songs Considered she talks with All Songs Considered co host Robin Hilton about the new music, her struggle to make it as a musician while preserving her Chinese American identity, how courage and truth can lead to widespread healing and much more.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/01/20180122_asc_milck_final.mp3?awCollectionId=510019&awEpisodeId=579565309&orgId=1&d=1320&p=510019&story=579565309&t=podcast&e=579565309&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1320",
      isoDate: "2018-01-22T13:11:00.000Z"
    },
    {
      id: "9e4deb1d-4de0-4387-b24a-648238ccbdce",
      title: "New Music Friday For January 19",
      content:
        "Hear a rundown of the best new albums out today, including music from Tune-Yards, Shopping, Belle & Sebastian, First Aid Kit and more.",
      contentSnippet:
        "Hear a rundown of the best new albums out today, including music from Tune-Yards, Shopping, Belle & Sebastian, First Aid Kit and more.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/01/20180119_asc_20180119final.mp3?awCollectionId=510019&awEpisodeId=579074482&orgId=1&d=1071&p=510019&story=579074482&t=podcast&e=579074482&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1071",
      isoDate: "2018-01-19T12:06:00.000Z"
    },
    {
      id: "dc1a1bff-7684-4504-999c-9e5dd72cc5b1",
      title: "Our Top Discoveries From globalFEST 2018 ",
      content:
        "Not matter how much of a music geek you may be, globalFEST is a music festival of discovery for everyone. Now in its 15th year, it's a celebration of music from around the world.This year's festival featured extraordinary Congolese music from Jupiter & Okwess, Brazilian avant-pop from Ava Rocha, a twist on traditional Irish music from Jarlath Henderson, modern Iranian songs and poetry from Mohsen Namjoo, and so much more.The gathering happens in just one evening. This year, a dozen bands performed on three stages in midtown Manhattan at B.B. King Blues Club, its smaller sister-venue in the same building called Lucille's and at the Liberty Theater directly across 42nd Street.All Songs Considered host Bob Boilen was there at globalFEST this past Sunday, along with around 1,500 people, including NPR Music's Anastasia Tsioulcas, <em>Afropop Worldwide</em>'s Banning Eyre and WFMU's Rob Weisburg, home of his show \"Transpacific Sound Paradise.\" On this edition of <em>All Songs Considered</em>, they share our favorite discoveries from globalFEST 2018.",
      contentSnippet:
        "Not matter how much of a music geek you may be, globalFEST is a music festival of discovery for everyone. Now in its 15th year, it's a celebration of music from around the world.This year's festival featured extraordinary Congolese music from Jupiter & Okwess, Brazilian avant-pop from Ava Rocha, a twist on traditional Irish music from Jarlath Henderson, modern Iranian songs and poetry from Mohsen Namjoo, and so much more.The gathering happens in just one evening. This year, a dozen bands performed on three stages in midtown Manhattan at B.B. King Blues Club, its smaller sister-venue in the same building called Lucille's and at the Liberty Theater directly across 42nd Street.All Songs Considered host Bob Boilen was there at globalFEST this past Sunday, along with around 1,500 people, including NPR Music's Anastasia Tsioulcas, Afropop Worldwide's Banning Eyre and WFMU's Rob Weisburg, home of his show \"Transpacific Sound Paradise.\" On this edition of All Songs Considered, they share our favorite discoveries from globalFEST 2018.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/01/20180117_asc_globalfest2018rx2.mp3?awCollectionId=510019&awEpisodeId=578615825&orgId=1&d=3070&p=510019&story=578615825&t=podcast&e=578615825&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3070",
      isoDate: "2018-01-17T19:03:00.000Z"
    },
    {
      id: "4588b50d-de24-47f7-a904-11fbd032bb08",
      title: "8 New Artists To Watch In 2018",
      content:
        "All this year, NPR Music and its member stations will be following a group of outstanding new and emerging artists from local music scenes across the globe for a series we're calling Slingshot. On this week's All Songs Considered, we talk to some of the music directors from our partner stations about the artists they chose for this year's list. Some are hometown favorites, and others are rising stars from abroad.",
      contentSnippet:
        "All this year, NPR Music and its member stations will be following a group of outstanding new and emerging artists from local music scenes across the globe for a series we're calling Slingshot. On this week's All Songs Considered, we talk to some of the music directors from our partner stations about the artists they chose for this year's list. Some are hometown favorites, and others are rising stars from abroad.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/01/20180109_asc_slingshotjan2018final.mp3?awCollectionId=510019&awEpisodeId=576787850&orgId=1&d=3392&p=510019&story=576787850&t=podcast&e=576787850&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3392",
      isoDate: "2018-01-09T18:00:00.000Z"
    },
    {
      id: "3054bd4d-93c7-4514-84cc-38e2a955f764",
      title: "+1: Ice Music: Building Instruments Out Of Water",
      content:
        'Many of us in the U.S. are freezing this weekend and looking for warmth, but halfway around the world is an artist whose career in music is dependent on frigid weather.Terje Isungset is a Norwegian musician who makes his own instruments — out of ice. Among his creations are "icehorns," a xylophone-shaped instrument called an "iceofon," guitars, harps and even even saxophones sculpted from huge chunks of ice using chainsaws.',
      contentSnippet:
        'Many of us in the U.S. are freezing this weekend and looking for warmth, but halfway around the world is an artist whose career in music is dependent on frigid weather.Terje Isungset is a Norwegian musician who makes his own instruments — out of ice. Among his creations are "icehorns," a xylophone-shaped instrument called an "iceofon," guitars, harps and even even saxophones sculpted from huge chunks of ice using chainsaws.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/01/20180106_asc_icemusicrxloud.mp3?awCollectionId=510019&awEpisodeId=576159075&orgId=1&d=836&p=510019&story=576159075&t=podcast&e=576159075&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "836",
      isoDate: "2018-01-06T10:27:15.000Z"
    },
    {
      id: "e22f25a6-9565-4c6e-8c9e-e2bc0a9d3329",
      title: "New Year, New Mix: Typhoon, Lucy Dacus, Anna Burch, More",
      content:
        "And we're back! Our first new mix of the new year includes gritty guitar rock from the band Bethlehem Steel, a sweetly seductive, pop earworm from singer Anna Burch, and an epic breakup song from Lucy Dacus.We've also got a stunning new cut from the sprawling rock group Typhoon (you can read about and listen to their new album here). \"Empiricist,\" from the band's upcoming album <em>Offerings, </em>is one in a series of meditations on how memories shape who we are — and what happens when you start to lose those memories.Plus, singer Jonathan Meiburg of the band Shearwater and the duo known as Cross Record join together for a new project they're calling Loma. The group's upcoming, self-titled debut is full of mystery and wonder.",
      contentSnippet:
        "And we're back! Our first new mix of the new year includes gritty guitar rock from the band Bethlehem Steel, a sweetly seductive, pop earworm from singer Anna Burch, and an epic breakup song from Lucy Dacus.We've also got a stunning new cut from the sprawling rock group Typhoon (you can read about and listen to their new album here). \"Empiricist,\" from the band's upcoming album Offerings, is one in a series of meditations on how memories shape who we are — and what happens when you start to lose those memories.Plus, singer Jonathan Meiburg of the band Shearwater and the duo known as Cross Record join together for a new project they're calling Loma. The group's upcoming, self-titled debut is full of mystery and wonder.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2018/01/20180104_asc_20180104-rxloud.mp3?awCollectionId=510019&awEpisodeId=575549458&orgId=1&d=2475&p=510019&story=575549458&t=podcast&e=575549458&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2475",
      isoDate: "2018-01-04T12:01:14.000Z"
    },
    {
      id: "7757d6ef-ba54-41f3-ab92-114ebb54b21a",
      title:
        "Viking's Choice: The Year In Cathartic Screams And Meditative Drones",
      content:
        "When so much of 2017 felt broken, it felt good to scream along to punk and metal records. But more often than not, my restoration came from quiet music and a good cup of tea. These are the realms I inhabit in my Viking's Choice column, where it's not uncommon to hear revved-up psych one day, mutant industrial-metal another and ambient Americana the next. It all works in my brain, and Bob Boilen picks that brain for our annual year-end show that's not so much a definitive list, but a broad overview of 2017. --Lars Gotrich",
      contentSnippet:
        "When so much of 2017 felt broken, it felt good to scream along to punk and metal records. But more often than not, my restoration came from quiet music and a good cup of tea. These are the realms I inhabit in my Viking's Choice column, where it's not uncommon to hear revved-up psych one day, mutant industrial-metal another and ambient Americana the next. It all works in my brain, and Bob Boilen picks that brain for our annual year-end show that's not so much a definitive list, but a broad overview of 2017. --Lars Gotrich",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/12/20171226_asc_vikingschoice2017.mp3?awCollectionId=510019&awEpisodeId=573384919&orgId=1&d=2451&p=510019&story=573384919&t=podcast&e=573384919&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2451",
      isoDate: "2017-12-26T10:00:11.000Z"
    },
    {
      id: "a6a92fa5-a89a-4d0e-8f1f-7e1a58e4a02e",
      title: "The Big Tiny Desk Holiday Special",
      content:
        'For nearly 10 years, NPR Music has recorded concerts from behind Bob Boilen\'s desk. During the holidays, the desk gets a little more festive, thanks to a snow machine, paper snowflakes and Stephen Thompson\'s hand-drawn Christmas tree. (It\'s labeled "tree.") Whether they perform original songs or new takes on holiday staples, these artists bring big sounds to the Tiny Desk.Each holiday Tiny Desk Concert has brought something a little different. In 2010, The Polyphonic Spree became the largest group of performers we\'d ever hosted behind the desk. Sibling duo The Oh Hellos brought family tradition and a love of bells, and Sharon Jones & The Dap-Kings filled our office with joy and light.This year, Hanson stuck around after its non-holiday Tiny Desk Concert to don ugly sweaters and sing some original songs. Wyclef Jean got us tapping our feet to his version of "Feliz Navidad." And Steve Martin brought a bluegrass band with him to share the tale of "The Strangest Christmas Yet."In this holiday special, join NPR Music\'s Bob Boilen and Stephen Thompson as they look back on these and other performances from years past.',
      contentSnippet:
        'For nearly 10 years, NPR Music has recorded concerts from behind Bob Boilen\'s desk. During the holidays, the desk gets a little more festive, thanks to a snow machine, paper snowflakes and Stephen Thompson\'s hand-drawn Christmas tree. (It\'s labeled "tree.") Whether they perform original songs or new takes on holiday staples, these artists bring big sounds to the Tiny Desk.Each holiday Tiny Desk Concert has brought something a little different. In 2010, The Polyphonic Spree became the largest group of performers we\'d ever hosted behind the desk. Sibling duo The Oh Hellos brought family tradition and a love of bells, and Sharon Jones & The Dap-Kings filled our office with joy and light.This year, Hanson stuck around after its non-holiday Tiny Desk Concert to don ugly sweaters and sing some original songs. Wyclef Jean got us tapping our feet to his version of "Feliz Navidad." And Steve Martin brought a bluegrass band with him to share the tale of "The Strangest Christmas Yet."In this holiday special, join NPR Music\'s Bob Boilen and Stephen Thompson as they look back on these and other performances from years past.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/12/20171219_asc_holiday2017final.mp3?awCollectionId=510019&awEpisodeId=571945601&orgId=1&d=3503&p=510019&story=571945601&t=podcast&e=571945601&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3503",
      isoDate: "2017-12-20T12:01:08.000Z"
    },
    {
      id: "71b1b188-af65-42d7-ba54-43744af7bb6c",
      title: "Poll Results: Listeners Pick The Best Albums Of 2017",
      content:
        "Hosts Bob Boilen and Robin Hilton count down through the Top Ten Albums of 2017 selected by listeners in our online poll.",
      contentSnippet:
        "Hosts Bob Boilen and Robin Hilton count down through the Top Ten Albums of 2017 selected by listeners in our online poll.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/12/20171218_asc_listener_poll_2017-rxloud_02.mp3?awCollectionId=510019&awEpisodeId=571647500&orgId=1&d=4242&p=510019&story=571647500&t=podcast&e=571647500&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "4242",
      isoDate: "2017-12-18T16:09:00.000Z"
    },
    {
      id: "1b282192-f486-4923-bb57-17ea8ee9174a",
      title: "The Year In Music 2017",
      content:
        "Music and politics have a long history and in 2017, a new chapter in their fraught and complicated relationship burst open. It began on a weekend in January with the Presidential inauguration and the Women's March on Washington, D.C. (and around the globe) that followed. That's when the new resistance movement got its first anthem, courtesy Los Angeles-based singer MILCK and her defiant song, \"Quiet.\" She and other women sang the empowering ballad against sexual assault and abuse a cappella during the march, and it turned out to be a prescient chorus for what would unfold throughout the year.It was a strong year for guitar rock, the best of it coming from relatively younger bands dominated by women: Jay Som, Charly Bliss, Vagabon, Waxahatchee, Diet Cig, Palehound, Chastity Belt, Girlpool, Daddy Issues, Partner. The list goes on and on.2017 was also a year when much beloved artists abandoned the sounds their fans first fell in love with to try something new. Weezer and Beck dove deep into pop and all its tropes; St. Vincent and Torres largely traded electric guitar for synths and pulsing soundscapes. Bands that once dominated many top 10 lists — Arcade Fire, Grizzly Bear, The xx — all released records that fell way below expectations.There was so much more that happened in 2017 — more than we could ever get to in a single episode of <em>All Songs Considered</em> — but we do our best on this edition to hit the highlights (and a few low points), with NPR Music's Ann Powers and Stephen Thompson.",
      contentSnippet:
        "Music and politics have a long history and in 2017, a new chapter in their fraught and complicated relationship burst open. It began on a weekend in January with the Presidential inauguration and the Women's March on Washington, D.C. (and around the globe) that followed. That's when the new resistance movement got its first anthem, courtesy Los Angeles-based singer MILCK and her defiant song, \"Quiet.\" She and other women sang the empowering ballad against sexual assault and abuse a cappella during the march, and it turned out to be a prescient chorus for what would unfold throughout the year.It was a strong year for guitar rock, the best of it coming from relatively younger bands dominated by women: Jay Som, Charly Bliss, Vagabon, Waxahatchee, Diet Cig, Palehound, Chastity Belt, Girlpool, Daddy Issues, Partner. The list goes on and on.2017 was also a year when much beloved artists abandoned the sounds their fans first fell in love with to try something new. Weezer and Beck dove deep into pop and all its tropes; St. Vincent and Torres largely traded electric guitar for synths and pulsing soundscapes. Bands that once dominated many top 10 lists — Arcade Fire, Grizzly Bear, The xx — all released records that fell way below expectations.There was so much more that happened in 2017 — more than we could ever get to in a single episode of All Songs Considered — but we do our best on this edition to hit the highlights (and a few low points), with NPR Music's Ann Powers and Stephen Thompson.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/12/20171211_asc_2017inreview03.mp3?awCollectionId=510019&awEpisodeId=569828145&orgId=1&d=5040&p=510019&story=569828145&t=podcast&e=569828145&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "5040",
      isoDate: "2017-12-11T11:44:00.000Z"
    },
    {
      id: "e90cc2a3-821e-4ec0-89a0-f5f42ee6ecac",
      title: "The Five Year Wait Is Over: A Conversation With Rhye",
      content:
        "It's been nearly 5 years since the quietly seductive album by Rhye was released. Today a conversation with Mike Milosh the soulful androgynous singer and creator of Rhye on making <em>Blood.</em>",
      contentSnippet:
        "It's been nearly 5 years since the quietly seductive album by Rhye was released. Today a conversation with Mike Milosh the soulful androgynous singer and creator of Rhye on making Blood.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/12/20171208_asc_rhyefinal.mp3?awCollectionId=510019&awEpisodeId=569320464&orgId=1&d=1711&p=510019&story=569320464&t=podcast&e=569320464&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1711",
      isoDate: "2017-12-08T11:00:21.000Z"
    },
    {
      id: "bc62fadb-1e8e-49b5-a972-65d0a0a59c41",
      title: "2016 Remembered: NPR Music Turns 10",
      content:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some of the musical memories and highlights of the past decade. On this 2016 episode, NPR Music's Sidney Madden and Stephen Thompson join co-host Robin Hilton to look back at the loss of David Bowie, Prince (and so many more towering figures in music), the year of Beyoncé, the return of Gucci Mane and the short-lived farewell to American Idol.",
      contentSnippet:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some of the musical memories and highlights of the past decade. On this 2016 episode, NPR Music's Sidney Madden and Stephen Thompson join co-host Robin Hilton to look back at the loss of David Bowie, Prince (and so many more towering figures in music), the year of Beyoncé, the return of Gucci Mane and the short-lived farewell to American Idol.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171130_asc_2016final.mp3?awCollectionId=510019&awEpisodeId=567672095&orgId=1&d=1957&p=510019&story=567672095&t=podcast&e=567672095&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1957",
      isoDate: "2017-12-01T08:00:18.000Z"
    },
    {
      id: "f2cfc52e-50e9-4622-a992-21f11addd827",
      title: "2015 Remembered: NPR Music Turns 10",
      content:
        'NPR Music has turned 10. We have a series of 10 podcasts looking back at some of the musical memories and highlights of the past decade. On this 2015 episode, NPR Music\'s Ann Powers and Daoud Tyler-Ameen join co-host Robin Hilton to look back at "Tomatogate," the Sufjan Stevens masterpiece <em>Carrie & Lowell, </em>Kendrick Lamar\'s "Alright" and what was perhaps the biggest music story of the year: Hamilton',
      contentSnippet:
        'NPR Music has turned 10. We have a series of 10 podcasts looking back at some of the musical memories and highlights of the past decade. On this 2015 episode, NPR Music\'s Ann Powers and Daoud Tyler-Ameen join co-host Robin Hilton to look back at "Tomatogate," the Sufjan Stevens masterpiece Carrie & Lowell, Kendrick Lamar\'s "Alright" and what was perhaps the biggest music story of the year: Hamilton',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171129_asc_2015final.mp3?awCollectionId=510019&awEpisodeId=567377623&orgId=1&d=1470&p=510019&story=567377623&t=podcast&e=567377623&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1470",
      isoDate: "2017-11-30T08:00:17.000Z"
    },
    {
      id: "8dea5874-2c83-44d8-bd74-f22ddf66016c",
      title: "2014 Remembered: NPR Music Turns 10",
      content:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some of the musical memories and highlights of the past decade. On this 2014 episode, NPR Music's Jacob Ganz and Rodney Carmichael join co-host Robin Hilton to look back at the tween juggernaut \"Let It Go\" from the Disney musical <em>Frozen, </em>Macklemore's sweep at the Grammy's, the return of Outkast and D'Angelo and the peak of the vinyl revival.",
      contentSnippet:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some of the musical memories and highlights of the past decade. On this 2014 episode, NPR Music's Jacob Ganz and Rodney Carmichael join co-host Robin Hilton to look back at the tween juggernaut \"Let It Go\" from the Disney musical Frozen, Macklemore's sweep at the Grammy's, the return of Outkast and D'Angelo and the peak of the vinyl revival.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171129_asc_2014final.mp3?awCollectionId=510019&awEpisodeId=567123023&orgId=1&d=1633&p=510019&story=567123023&t=podcast&e=567123023&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1633",
      isoDate: "2017-11-29T08:00:17.000Z"
    },
    {
      id: "ccd4c958-c601-445d-849c-3abe03149ef2",
      title: "2013 Remembered: NPR Music Turns 10",
      content:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some of the musical memories and highlights of the past decade. On this 2013 episode, NPR Music's Tom Huizenga and Sidney Madden join co-host Robin Hilton to look back at surprise releases from My Bloody Valentine, David Bowie and Beyoncé, the loss of George Jones and Lou Reed and more defining moments from the year.",
      contentSnippet:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some of the musical memories and highlights of the past decade. On this 2013 episode, NPR Music's Tom Huizenga and Sidney Madden join co-host Robin Hilton to look back at surprise releases from My Bloody Valentine, David Bowie and Beyoncé, the loss of George Jones and Lou Reed and more defining moments from the year.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171128_asc_2013finalfixed.mp3?awCollectionId=510019&awEpisodeId=566974247&orgId=1&d=1616&p=510019&story=566974247&t=podcast&e=566974247&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1616",
      isoDate: "2017-11-28T18:18:00.000Z"
    },
    {
      id: "6b02791f-c6b2-4de4-b766-de0b7f4cc1b3",
      title: "2012 Remembered: NPR Music Turns 10",
      content:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some of the musical memories and moments. On this 2012 episode, NPR Music's Anastasia Tsioulcas and Stephen Thompson join co-host Robin Hilton to look back at the Pussy Riot revolution, Frank ocean's <em>Channel Orange</em>, Amanda Palmer's crowd-funded album <em>Theater Is Evil</em>, and one of the biggest hits of all time, \"Gangnam Style.\"",
      contentSnippet:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some of the musical memories and moments. On this 2012 episode, NPR Music's Anastasia Tsioulcas and Stephen Thompson join co-host Robin Hilton to look back at the Pussy Riot revolution, Frank ocean's Channel Orange, Amanda Palmer's crowd-funded album Theater Is Evil, and one of the biggest hits of all time, \"Gangnam Style.\"",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171127_asc_2012final.mp3?awCollectionId=510019&awEpisodeId=566488134&orgId=1&d=1464&p=510019&story=566488134&t=podcast&e=566488134&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1464",
      isoDate: "2017-11-27T08:00:16.000Z"
    },
    {
      id: "334b4c03-f5da-4d3d-ac88-93183f05d8cf",
      title: "2011 Remembered: NPR Music Turns 10",
      content:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some musical memories and moments. On this 2011 episode we listen to the music of James Blake, Adele's '21,' revisit Amy Winehouse the year of her death and the U.S. launch of Spotify.",
      contentSnippet:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some musical memories and moments. On this 2011 episode we listen to the music of James Blake, Adele's '21,' revisit Amy Winehouse the year of her death and the U.S. launch of Spotify.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171124_asc_2011_finalfix.mp3?awCollectionId=510019&awEpisodeId=565995778&orgId=1&d=1433&p=510019&story=565995778&t=podcast&e=565995778&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1433",
      isoDate: "2017-11-24T08:00:15.000Z"
    },
    {
      id: "7cd500a1-ea5b-4348-8573-8a41742c81a5",
      title: "2010 Remembered: NPR Music Turns 10",
      content:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some musical memories and moments. On this 2010 episode we listen to the music of Kanye West's 'My Beautiful Dark Twisted Fantasy,' the return of EMO with The World Is A Beautiful Place and I'm No Longer Afraid To Die and the band American Football's return. We also discuss The Beatles coming to iTunes.",
      contentSnippet:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some musical memories and moments. On this 2010 episode we listen to the music of Kanye West's 'My Beautiful Dark Twisted Fantasy,' the return of EMO with The World Is A Beautiful Place and I'm No Longer Afraid To Die and the band American Football's return. We also discuss The Beatles coming to iTunes.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171123_asc_2010_finalfixedwav.mp3?awCollectionId=510019&awEpisodeId=566003222&orgId=1&d=1091&p=510019&story=566003222&t=podcast&e=566003222&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1091",
      isoDate: "2017-11-23T08:00:17.000Z"
    },
    {
      id: "ec15de7e-7c99-4d98-8649-314c8257d672",
      title: "2009 Remembered: NPR Music Turns 10",
      content:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some musical memories and moments. On this 2009 episode we listen to the debut music of The xx, the brilliant album from Vijay Iyer, 'Historicity,' and we honor the lives of guitarist Jack Rose, Michael Jackson and more.",
      contentSnippet:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some musical memories and moments. On this 2009 episode we listen to the debut music of The xx, the brilliant album from Vijay Iyer, 'Historicity,' and we honor the lives of guitarist Jack Rose, Michael Jackson and more.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171122_asc_2009_finalfix.mp3?awCollectionId=510019&awEpisodeId=565755299&orgId=1&d=1443&p=510019&story=565755299&t=podcast&e=565755299&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1443",
      isoDate: "2017-11-22T08:00:15.000Z"
    },
    {
      id: "e8f0810a-48cf-485c-a912-262e890bb869",
      title: "2008 Remembered: NPR Music Turns 10",
      content:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some musical memories and moments. On this 2008 episode we listen to the music of Bon Iver, hear a brief interview with him from 2008. We also talk about the birth of BandCamp and the birth of the very first Tiny Desk Concert.",
      contentSnippet:
        "NPR Music has turned 10. We have a series of 10 podcasts looking back at some musical memories and moments. On this 2008 episode we listen to the music of Bon Iver, hear a brief interview with him from 2008. We also talk about the birth of BandCamp and the birth of the very first Tiny Desk Concert.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171121_asc_2008finalfix3.mp3?awCollectionId=510019&awEpisodeId=565525304&orgId=1&d=1538&p=510019&story=565525304&t=podcast&e=565525304&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1538",
      isoDate: "2017-11-21T08:11:04.000Z"
    },
    {
      id: "36296077-2fca-4393-89d2-3412a3cdab20",
      title: "2007 Remembered: NPR Music Turns 10",
      content:
        "NPR Music has turned 10. And for the occasion we have a series of 10 short podcasts looking back at some musical memories and highlights.  For 2007 we look at the impact of the iPhone, the release of Radiohead's 'In Rainbows,' the music of M.I.A. and more.",
      contentSnippet:
        "NPR Music has turned 10. And for the occasion we have a series of 10 short podcasts looking back at some musical memories and highlights.  For 2007 we look at the impact of the iPhone, the release of Radiohead's 'In Rainbows,' the music of M.I.A. and more.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171119_asc_2007_fixed.mp3?awCollectionId=510019&awEpisodeId=565248785&orgId=1&d=879&p=510019&story=565248785&t=podcast&e=565248785&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "879",
      isoDate: "2017-11-20T08:35:03.000Z"
    },
    {
      id: "cf6185fd-ddc5-4901-8c32-1ce82c938dde",
      title: "What Makes A Great Album Last?",
      content:
        "The season of list-making, specifically (for us) lists about the year's best music, is rapidly descending. But before the craziness begins over who had the best album or song in 2017, we thought we'd look back at some of our previous top-ten lists to see if they even hold up. As you can imagine, some albums we once thought were great have since lost their luster, while others haven't aged a day. This got us wondering: <em>Why?</em> And what, exactly, makes a great album last? When an album doesn't stand the test of time does it mean we missed something the first time we heard it, years earlier? Or could it only exist in a specific time and place? On this edition of the program, hosts Bob Boilen and Robin Hilton are joined by NPR Music's Stephen Thompson and Marissa Lorusso to look back at some of the albums we've loved over the decades, to relive what was great about them... and to wince at the ones that haven't held up as well.",
      contentSnippet:
        "The season of list-making, specifically (for us) lists about the year's best music, is rapidly descending. But before the craziness begins over who had the best album or song in 2017, we thought we'd look back at some of our previous top-ten lists to see if they even hold up. As you can imagine, some albums we once thought were great have since lost their luster, while others haven't aged a day. This got us wondering: Why? And what, exactly, makes a great album last? When an album doesn't stand the test of time does it mean we missed something the first time we heard it, years earlier? Or could it only exist in a specific time and place? On this edition of the program, hosts Bob Boilen and Robin Hilton are joined by NPR Music's Stephen Thompson and Marissa Lorusso to look back at some of the albums we've loved over the decades, to relive what was great about them... and to wince at the ones that haven't held up as well.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171114_asc_great_album_last_final_4.mp3?awCollectionId=510019&awEpisodeId=564099178&orgId=1&d=2317&p=510019&story=564099178&t=podcast&e=564099178&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2317",
      isoDate: "2017-11-14T17:35:00.000Z"
    },
    {
      id: "90b95a2f-099a-4542-a0d4-1d8f5643149e",
      title: "Guest DJs: Courtney Barnett & Kurt Vile",
      content:
        "By now you may have heard of the intercontinental, surprise collaboration between Courtney Barnett and Kurt Vile, for an album called <em>Lotta Sea Lice</em>. The two singers have been mutual admirers for a while and kept bumping into one another at various festivals. Their guitar-based rock songs are laced with a shared sense of humor, and that was part of what got them creating music together. On this edition of <em>All Songs Considered, </em>Kurt and Courtney join host Bob Boilen in our Washington D.C. studios to talk about their mutual love for singers with guitars and a knack for writing songs that touch the heart, including cuts by The Sadies, John Prine, Gillian Welch, Tom Petty and Elliott Smith.",
      contentSnippet:
        "By now you may have heard of the intercontinental, surprise collaboration between Courtney Barnett and Kurt Vile, for an album called Lotta Sea Lice. The two singers have been mutual admirers for a while and kept bumping into one another at various festivals. Their guitar-based rock songs are laced with a shared sense of humor, and that was part of what got them creating music together. On this edition of All Songs Considered, Kurt and Courtney join host Bob Boilen in our Washington D.C. studios to talk about their mutual love for singers with guitars and a knack for writing songs that touch the heart, including cuts by The Sadies, John Prine, Gillian Welch, Tom Petty and Elliott Smith.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171113_asc_courtneyfix.mp3?awCollectionId=510019&awEpisodeId=563731992&orgId=1&d=2458&p=510019&story=563731992&t=podcast&e=563731992&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2458",
      isoDate: "2017-11-13T15:37:00.000Z"
    },
    {
      id: "8933a34c-3e48-4802-94e3-4c373b5f8cc0",
      title:
        "Beck On Healing Through Music, The Deep Art Of Pop And His New Album, 'Colors'",
      content:
        "In a career spanning three decades, Beck has remained one of music's most intriguing shapeshifters. From the warped folk of his earliest recordings to the chopped-up samples, hip-hop beats and lush orchestral arrangements of albums that followed, Beck has never lingered in one sonic world for long. For his latest album, <em>Colors, </em>the singer takes his music in what some longtime fans may think is an odd, or overly simple, direction: The 11 songs, co-produced with Greg Kurstin, are pure, highly refined pop. But as Beck explains in this special Guest DJ session with <em>All Songs Considered </em>co-host Robin Hilton, <em>Colors </em>was still one of the most complicated and challenging records he's ever made. He also explains how pop music can be a finely crafted art form, why the guitar has become the stepchild of popular music and the healing power of songs that just make you feel good.",
      contentSnippet:
        "In a career spanning three decades, Beck has remained one of music's most intriguing shapeshifters. From the warped folk of his earliest recordings to the chopped-up samples, hip-hop beats and lush orchestral arrangements of albums that followed, Beck has never lingered in one sonic world for long. For his latest album, Colors, the singer takes his music in what some longtime fans may think is an odd, or overly simple, direction: The 11 songs, co-produced with Greg Kurstin, are pure, highly refined pop. But as Beck explains in this special Guest DJ session with All Songs Considered co-host Robin Hilton, Colors was still one of the most complicated and challenging records he's ever made. He also explains how pop music can be a finely crafted art form, why the guitar has become the stepchild of popular music and the healing power of songs that just make you feel good.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171109_asc_beckfinal.mp3?awCollectionId=510019&awEpisodeId=563028699&orgId=1&d=1911&p=510019&story=563028699&t=podcast&e=563028699&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1911",
      isoDate: "2017-11-09T14:09:00.000Z"
    },
    {
      id: "be6a03eb-4110-42d1-b5b1-8707f92201b6",
      title:
        "New Mix: Pinegrove, Mary Gauthier, Partner, Selections From Womex And More",
      content:
        "Cathartic rock from both the New Jersey band Pinegrove and the Canadian duo known as Partner; Glasgow singer-songwriter Siobhan Wilson's dark and brooding \"There Are No Saints\"; and NPR Music's Anastasia Tsioulcas joins us to talk about some of her favorite artists from this year's Womex, the World Music Expo, held in Katowice, Poland.We've got two songs that directly address both the seeming epidemic of harassment and the violence in Texas. The first comes from singer Mary Gauthier, who wrote her upcoming album, <em>Rifles And Rosary Beads, </em>as part of the SongwritingWith:Soldiers project, The second song is from Stella Donnelly, an Australian songwriter who confronts victim-blaming with the plaintive and deeply upsetting, \"Boys Will Be Boys.\"Also on this week's show:",
      contentSnippet:
        "Cathartic rock from both the New Jersey band Pinegrove and the Canadian duo known as Partner; Glasgow singer-songwriter Siobhan Wilson's dark and brooding \"There Are No Saints\"; and NPR Music's Anastasia Tsioulcas joins us to talk about some of her favorite artists from this year's Womex, the World Music Expo, held in Katowice, Poland.We've got two songs that directly address both the seeming epidemic of harassment and the violence in Texas. The first comes from singer Mary Gauthier, who wrote her upcoming album, Rifles And Rosary Beads, as part of the SongwritingWith:Soldiers project, The second song is from Stella Donnelly, an Australian songwriter who confronts victim-blaming with the plaintive and deeply upsetting, \"Boys Will Be Boys.\"Also on this week's show:",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171107_asc_wholeshownov617.mp3?awCollectionId=510019&awEpisodeId=562632449&orgId=1&d=2560&p=510019&story=562632449&t=podcast&e=562632449&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2560",
      isoDate: "2017-11-07T22:24:00.000Z"
    },
    {
      id: "02940e03-83a5-45bf-808a-40e1e78a5f1e",
      title: "R.E.M. Reflects On 25 Years Of 'Automatic For The People'",
      content:
        "Michael Stipe and Mike Mills look back on what inspired the band to make the beautiful but melancholy songs on <em>Automatic For The People </em>and what the music means to them after so many years. This month R.E.M. is celebrating the 25th anniversary of <em>Automatic For The People </em>with a deluxe box set that includes a re-mastered version of the album, demos and outtakes, live recordings, a book of rare photos and videos.",
      contentSnippet:
        "Michael Stipe and Mike Mills look back on what inspired the band to make the beautiful but melancholy songs on Automatic For The People and what the music means to them after so many years. This month R.E.M. is celebrating the 25th anniversary of Automatic For The People with a deluxe box set that includes a re-mastered version of the album, demos and outtakes, live recordings, a book of rare photos and videos.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171102_asc_rem_final_limited.mp3?awCollectionId=510019&awEpisodeId=561543660&orgId=1&d=1735&p=510019&story=561543660&t=podcast&e=561543660&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1735",
      isoDate: "2017-11-02T13:51:00.000Z"
    },
    {
      id: "fe0e2490-6f20-4b7c-bfb0-95e044c1c616",
      title: "+1 Weaves Play Guest DJ ",
      content:
        "My current obsession is <em>Wide Open</em>, the new album from the Toronto band Weaves. Morgan Waters plays some of the most angular and memorable guitar I've heard in a long time, and the rhythm section is a dynamic driving force, too. Singer Jasmyn Burke may as well be on her own planet, with a style that's both adventurous in tone and affirming in message.I first became fascinated with Weaves' sound in 2015, and had the group perform a Tiny Desk concert last year. Now, for this +1 edition of All Songs Considered, I finally get to sit and talk with Morgan Waters and Jasmyn Burke, who play guest DJ, discuss <em>Wide Open</em> and more.",
      contentSnippet:
        "My current obsession is Wide Open, the new album from the Toronto band Weaves. Morgan Waters plays some of the most angular and memorable guitar I've heard in a long time, and the rhythm section is a dynamic driving force, too. Singer Jasmyn Burke may as well be on her own planet, with a style that's both adventurous in tone and affirming in message.I first became fascinated with Weaves' sound in 2015, and had the group perform a Tiny Desk concert last year. Now, for this +1 edition of All Songs Considered, I finally get to sit and talk with Morgan Waters and Jasmyn Burke, who play guest DJ, discuss Wide Open and more.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/11/20171101_asc_weaves.mp3?awCollectionId=510019&awEpisodeId=561388229&orgId=1&d=2083&p=510019&story=561388229&t=podcast&e=561388229&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2083",
      isoDate: "2017-11-01T18:04:00.000Z"
    },
    {
      id: "5274d614-b962-4b13-941f-45bbadd51089",
      title:
        "Pearls Before Swine's 'Underground' Classic Reissued 50 Years Later",
      content:
        "Here is one of the seminal underground records of the late 1960s: The band is Pearls Before Swine, and its album is called One Nation Underground. Although the album has been reissued on a number of occasions, those editions always got it wrong, using bad mixes or adding reverb to simulate stereo from the original mono record.But to celebrate its 50th anniversary, the proper mono mix has been reissued, and I'm so glad I can properly turn you on to a classic you might not know about, and hopefully will love as much as I do. It's an album that mixes folk music with exotic instrumentation, and it captures an innocence that I don't think will ever exist again in recorded music.I recently spoke with Tom Rapp, Pearls Before Swine's singer and songwriter. I started the conversation by playing the album's opening track \"Another Time\" as he listened on the line from Florida.",
      contentSnippet:
        "Here is one of the seminal underground records of the late 1960s: The band is Pearls Before Swine, and its album is called One Nation Underground. Although the album has been reissued on a number of occasions, those editions always got it wrong, using bad mixes or adding reverb to simulate stereo from the original mono record.But to celebrate its 50th anniversary, the proper mono mix has been reissued, and I'm so glad I can properly turn you on to a classic you might not know about, and hopefully will love as much as I do. It's an album that mixes folk music with exotic instrumentation, and it captures an innocence that I don't think will ever exist again in recorded music.I recently spoke with Tom Rapp, Pearls Before Swine's singer and songwriter. I started the conversation by playing the album's opening track \"Another Time\" as he listened on the line from Florida.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/10/20171031_asc_pearlsfinal.mp3?awCollectionId=510019&awEpisodeId=561140616&orgId=1&d=1928&p=510019&story=561140616&t=podcast&e=561140616&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1928",
      isoDate: "2017-10-31T17:07:00.000Z"
    },
    {
      id: "6bff33c4-327e-496b-9706-d11049977f34",
      title:
        "How Weezer Traded Power Chords For Pop: A Conversation With Rivers Cuomo",
      content:
        "Weezer frontman Rivers Cuomo walks us through <em>Pacific Daydream</em>, the band's new album of polished pop hits, and explains how he finally eliminated power chords from the group's sound.",
      contentSnippet:
        "Weezer frontman Rivers Cuomo walks us through Pacific Daydream, the band's new album of polished pop hits, and explains how he finally eliminated power chords from the group's sound.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/10/20171025_asc_weezerfinal.mp3?awCollectionId=510019&awEpisodeId=560200415&orgId=1&d=2075&p=510019&story=560200415&t=podcast&e=560200415&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2075",
      isoDate: "2017-10-27T12:05:00.000Z"
    },
    {
      id: "a2412c82-0e47-4abc-9260-b7538b236f91",
      title:
        "+1 Cocteau Twins' Simon Raymonde - His First New Music In 20 Years",
      content:
        "On this +1 edition of All Songs Considered a conversation with Simon Raymonde, the former bassist for Cocteau Twins and founder of Bella Union records. He's back after a 20-year hiatus from music with a new song we're premiering. \"I Saw The Days Go By\" features singer Marissa Nadler and is just one of the tracks from Simon Raymonde's upcoming album he made with drummer Richie Thomas under the name Lost Horizons. The record, <em>Ojalá,</em> is out November 3 on Bella Union.",
      contentSnippet:
        "On this +1 edition of All Songs Considered a conversation with Simon Raymonde, the former bassist for Cocteau Twins and founder of Bella Union records. He's back after a 20-year hiatus from music with a new song we're premiering. \"I Saw The Days Go By\" features singer Marissa Nadler and is just one of the tracks from Simon Raymonde's upcoming album he made with drummer Richie Thomas under the name Lost Horizons. The record, Ojalá, is out November 3 on Bella Union.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/10/20171026_asc_simon_raymonde_wholeshow.mp3?awCollectionId=510019&awEpisodeId=560165935&orgId=1&d=2066&p=510019&story=560165935&t=podcast&e=560165935&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2066",
      isoDate: "2017-10-26T12:11:00.000Z"
    },
    {
      id: "dac42f7f-4fc4-41b4-ada9-a58a213664d7",
      title: "New Mix: Tune-Yards, A. Savage, Balmorhea, More",
      content:
        'It\'d been more than three years since Tune-Yards released new music, but the singer and multi-instrumentalist Merrill Garbus is back, now as a duo with Nate Brenner. Her new single is a sonic thrill ride called "Look At Your Hands," and it\'s from her just-announced album, <em>I Can Feel You Creep Into My Private Life </em>(out Jan. 19)<em>. </em>Garbus says the new song is a meditation on the mess she feels the world is in and how various political and cultural -isms manifest themselves within her. Full playlist: 1. Tune-Yards: "Look At Your Hands," 2. Caroline Says: "Winter Is Cold," 3. Balmorhea: "Slow Stone," 4. F ingers: "All Rolled Up," 5. A. Savage: "What Do I Do"',
      contentSnippet:
        'It\'d been more than three years since Tune-Yards released new music, but the singer and multi-instrumentalist Merrill Garbus is back, now as a duo with Nate Brenner. Her new single is a sonic thrill ride called "Look At Your Hands," and it\'s from her just-announced album, I Can Feel You Creep Into My Private Life (out Jan. 19). Garbus says the new song is a meditation on the mess she feels the world is in and how various political and cultural -isms manifest themselves within her. Full playlist: 1. Tune-Yards: "Look At Your Hands," 2. Caroline Says: "Winter Is Cold," 3. Balmorhea: "Slow Stone," 4. F ingers: "All Rolled Up," 5. A. Savage: "What Do I Do"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/10/20171024_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=559811159&orgId=1&d=2441&p=510019&story=559811159&t=podcast&e=559811159&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2441",
      isoDate: "2017-10-24T16:08:00.000Z"
    },
    {
      id: "fb33b5df-a9ce-41ca-adf5-ed78b040ac3e",
      title: "+1: A Conversation With Margo Price",
      content:
        "The queen of East Nashville talks with NPR Music's Ann Powers about her new album, <em>All American Made, </em>working with Willie Nelson and what it was like to record at the legendary Sun Studios.",
      contentSnippet:
        "The queen of East Nashville talks with NPR Music's Ann Powers about her new album, All American Made, working with Willie Nelson and what it was like to record at the legendary Sun Studios.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/10/20171024_asc_margo_and_ann_mix.mp3?awCollectionId=510019&awEpisodeId=559574042&orgId=1&d=2230&p=510019&story=559574042&t=podcast&e=559574042&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2230",
      isoDate: "2017-10-24T10:00:21.000Z"
    },
    {
      id: "5da671b7-f539-4fd1-be5a-d35fd2e5066b",
      title: "How Composer Daniel Hart Brought 'A Ghost Story' To Life",
      content:
        "Composer Daniel Hart talks about the inspiration and challenges behind his stunning score for the deeply existential film <em>A Ghost Story. </em>",
      contentSnippet:
        "Composer Daniel Hart talks about the inspiration and challenges behind his stunning score for the deeply existential film A Ghost Story.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/10/20171018_asc_danielhartfinal_limitedv2.mp3?awCollectionId=510019&awEpisodeId=558600237&orgId=1&d=888&p=510019&story=558600237&t=podcast&e=558600237&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "888",
      isoDate: "2017-10-19T11:00:15.000Z"
    },
    {
      id: "4150f942-d40c-4ece-b3ba-c4c015823914",
      title: "New Mix: MGMT, Courtney Barnett And Kurt Vile, More",
      content:
        'MGMT, the psych-pop duo behind one of the decade\'s best earworms, is back with its first new music in four years. "Little Dark Age," is the title track to their 2018 album, and it\'s a pulsing, synthesized meditation on the age of anxiety over a world coming apart. Full playlist: 1. Dark Rooms: "I Get Overwhelmed," 2. MGMT: "Little Dark Age," 3. Susanne Sundfør: "Reincarnation," 4. Courtney Barnett & Kurt Vile: "Blue Cheese," 5. Howard: "Mother\'s Wedding"',
      contentSnippet:
        'MGMT, the psych-pop duo behind one of the decade\'s best earworms, is back with its first new music in four years. "Little Dark Age," is the title track to their 2018 album, and it\'s a pulsing, synthesized meditation on the age of anxiety over a world coming apart. Full playlist: 1. Dark Rooms: "I Get Overwhelmed," 2. MGMT: "Little Dark Age," 3. Susanne Sundfør: "Reincarnation," 4. Courtney Barnett & Kurt Vile: "Blue Cheese," 5. Howard: "Mother\'s Wedding"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/10/20171017_asc_wholeshow2.mp3?awCollectionId=510019&awEpisodeId=558315488&orgId=1&d=2627&p=510019&story=558315488&t=podcast&e=558315488&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2627",
      isoDate: "2017-10-17T16:09:00.000Z"
    },
    {
      id: "06fe65ac-43f0-42f9-8af2-679f7a1aacbd",
      title: "Hallelujah! The Songs We Should Retire",
      content:
        "They are often beloved classics, or works of pure genius. And you never, ever need to hear them again. They are the songs that must be retired.",
      contentSnippet:
        "They are often beloved classics, or works of pure genius. And you never, ever need to hear them again. They are the songs that must be retired.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/10/20171010_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=557100604&orgId=1&d=2056&p=510019&story=557100604&t=podcast&e=557100604&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2056",
      isoDate: "2017-10-11T14:54:00.000Z"
    },
    {
      id: "fab6c3ef-54cf-483b-96af-703b84584e5a",
      title:
        "Lin-Manuel Miranda Explains How He Made His New Benefit Song For Puerto Rico",
      content:
        'Composer and playwright Lin-Manuel Miranda has written and recorded a new song to help raise money for hurricane recovery efforts in Puerto Rico. Sales of the track, "Almost Like Praying," will go to the Hispanic Federation\'s Hurricane Relief Fund. It features an all-star cast of Latinx artists, including Jenifer Lopez, Marc Anthony, Gloria Estefan, Fat Joe, Ruben Blades, Luis Fonsi, Rita Moreno and many others. In a conversation with NPR Music\'s Felix Contreras, Miranda explains why he chose to sing the song in Spanish, how he assembled the vast cast of contributors and why he borrowed the song\'s title and instantly recognizable hook from a line in the <em>West Side Story </em>classic, "Maria."',
      contentSnippet:
        'Composer and playwright Lin-Manuel Miranda has written and recorded a new song to help raise money for hurricane recovery efforts in Puerto Rico. Sales of the track, "Almost Like Praying," will go to the Hispanic Federation\'s Hurricane Relief Fund. It features an all-star cast of Latinx artists, including Jenifer Lopez, Marc Anthony, Gloria Estefan, Fat Joe, Ruben Blades, Luis Fonsi, Rita Moreno and many others. In a conversation with NPR Music\'s Felix Contreras, Miranda explains why he chose to sing the song in Spanish, how he assembled the vast cast of contributors and why he borrowed the song\'s title and instantly recognizable hook from a line in the West Side Story classic, "Maria."',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/10/20171006_asc_linmanuelfixed.mp3?awCollectionId=510019&awEpisodeId=556027313&orgId=1&d=958&p=510019&story=556027313&t=podcast&e=556027313&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "958",
      isoDate: "2017-10-06T04:40:00.000Z"
    },
    {
      id: "07958c7a-0afd-4014-b3bb-9fd5033eb556",
      title: "New Mix: Tom Petty, The Breeders, Torres, Ibeyi, More",
      content:
        'It\'s hard to record a show like ours in the wake of a tragedy as profound as what happened in Las Vegas this past Sunday. But we hope the music we\'re sharing this week gives you time to reflect and, if needed, escape. One thing we know: Songs, in times like this, often take on new meaning. We open with "Blue Mountain Road," a track by the band Florist about the death of lead singer Emily Sprague\'s mother; it\'s a song of healing for anyone struggling to get through a difficult time. Full playlist: 1. Florist: "Blue Mountain Road," 2. Amber Mark: "S P A C E," 3. Ibeyi: "Deathless (ft. Kamasi Washington)," 4. bed.: "Fine," 5. Torres: "Tongue Slap Your Brain Out," 6. The Breeders: "Wait In The Car," 7. Tom Petty: "American Girl"',
      contentSnippet:
        'It\'s hard to record a show like ours in the wake of a tragedy as profound as what happened in Las Vegas this past Sunday. But we hope the music we\'re sharing this week gives you time to reflect and, if needed, escape. One thing we know: Songs, in times like this, often take on new meaning. We open with "Blue Mountain Road," a track by the band Florist about the death of lead singer Emily Sprague\'s mother; it\'s a song of healing for anyone struggling to get through a difficult time. Full playlist: 1. Florist: "Blue Mountain Road," 2. Amber Mark: "S P A C E," 3. Ibeyi: "Deathless (ft. Kamasi Washington)," 4. bed.: "Fine," 5. Torres: "Tongue Slap Your Brain Out," 6. The Breeders: "Wait In The Car," 7. Tom Petty: "American Girl"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/10/20171003_asc_wholeshow2.mp3?awCollectionId=510019&awEpisodeId=555375472&orgId=1&d=2389&p=510019&story=555375472&t=podcast&e=555375472&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2389",
      isoDate: "2017-10-03T18:46:00.000Z"
    },
    {
      id: "9f342c9c-c9ac-4bd0-a920-605ee2b96cdf",
      title: "New Mix: Charlotte Gainsbourg, Chad VanGaalen, Lean Year, More",
      content:
        'Actress and singer Charlotte Gainsbourg has a long history of making provocative art that stretches back to her teen years, when she recorded the 1984 song "Lemon Incest" with her father, the French pop singer Serge Gainsbourg. Over the past four decades she\'s starred in the films <em>Nymphomaniac</em> and <em>The Antichrist</em> (among many others) and released several albums of foreboding pop. Her latest full-length, and first in six years, is called <em>REST. </em>On this week\'s show we feature the cut "Deadly Valentine," a love song that fixates on the fact that all stories ultimately end in death. Full playlist: 1. Chad VanGaalen: "Static Shape," 2. M.R. Bennett: "Sorry," 3. Blis. "Old Man," 4. Högni: "Crash," 5. Charlotte Gainsbourg: "Deadly Valentine," 6. Laura Cannell: "Persuasion," 7. Lean Year: "Come And See"',
      contentSnippet:
        'Actress and singer Charlotte Gainsbourg has a long history of making provocative art that stretches back to her teen years, when she recorded the 1984 song "Lemon Incest" with her father, the French pop singer Serge Gainsbourg. Over the past four decades she\'s starred in the films Nymphomaniac and The Antichrist (among many others) and released several albums of foreboding pop. Her latest full-length, and first in six years, is called REST. On this week\'s show we feature the cut "Deadly Valentine," a love song that fixates on the fact that all stories ultimately end in death. Full playlist: 1. Chad VanGaalen: "Static Shape," 2. M.R. Bennett: "Sorry," 3. Blis. "Old Man," 4. Högni: "Crash," 5. Charlotte Gainsbourg: "Deadly Valentine," 6. Laura Cannell: "Persuasion," 7. Lean Year: "Come And See"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/09/20170926_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=553771617&orgId=1&d=3034&p=510019&story=553771617&t=podcast&e=553771617&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3034",
      isoDate: "2017-09-26T18:17:00.000Z"
    },
    {
      id: "8b79aac5-7fa5-4ab5-b6e6-d0473c9d06de",
      title:
        "First Word: Moses Sumney Walks Us Through His Sonic Dreamscape, 'Aromanticism'",
      content:
        'We hit "play" on the Los Angeles-based singer\'s entire new album while he shares the stories and inspiration behind each track. He says <em>Aromanticism</em> is about lovelessness as a sonic dreamscape.',
      contentSnippet:
        'We hit "play" on the Los Angeles-based singer\'s entire new album while he shares the stories and inspiration behind each track. He says Aromanticism is about lovelessness as a sonic dreamscape.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/09/20170920_asc_mosesfinal2.mp3?awCollectionId=510019&awEpisodeId=552352081&orgId=1&d=2235&p=510019&story=552352081&t=podcast&e=552352081&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2235",
      isoDate: "2017-09-20T16:12:00.000Z"
    },
    {
      id: "c7874e9e-f742-405c-9fc2-2066ca143f70",
      title: "New Mix: Björk, Neil Young, Burial, Kelela, More",
      content:
        'The last full-length album from Björk, 2015\'s <em>Vulnicurna</em>, was a dark, brooding breakup record documenting the end of a longtime relationship. Now the enigmatic Icelandic singer is back with a new song of healing and hope from an album she\'ll release in November. "The Gate" finds Björk emerging from the other side of loss and heartache and searching for the utopian idea of perfect love. Full playlist for this episode: 1. Lisa LeBlanc: "5748 km," 2. Björk: "The Gate," 3. Burial: "Rodent," 4. Neil Young: "Powderfinger," 5. Kelela: "Frontline," 6. Brand New: "Can\'t Get It Out"',
      contentSnippet:
        'The last full-length album from Björk, 2015\'s Vulnicurna, was a dark, brooding breakup record documenting the end of a longtime relationship. Now the enigmatic Icelandic singer is back with a new song of healing and hope from an album she\'ll release in November. "The Gate" finds Björk emerging from the other side of loss and heartache and searching for the utopian idea of perfect love. Full playlist for this episode: 1. Lisa LeBlanc: "5748 km," 2. Björk: "The Gate," 3. Burial: "Rodent," 4. Neil Young: "Powderfinger," 5. Kelela: "Frontline," 6. Brand New: "Can\'t Get It Out"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/09/20170919_asc_wholeshow2_sept19.mp3?awCollectionId=510019&awEpisodeId=552083456&orgId=1&d=2932&p=510019&story=552083456&t=podcast&e=552083456&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2932",
      isoDate: "2017-09-19T15:46:00.000Z"
    },
    {
      id: "37483dc8-a16d-4d00-ab4a-1274f84bcf2b",
      title:
        "New Mix: Billy Corgan, Mavis Staples And Jeff Tweedy, Wolf Alice, More",
      content:
        'Billy Corgan, as frontman for The Smashing Pumpkins, made twisted, abrasive rock. But within that project he always had a soft side, expressed in quieter, acoustic songs sprinkled throughout the Pumpkins\' catalog. Now the singer is back with a new solo album of beautiful ballads made entirely of piano, acoustic guitar and strings. He\'s calling it <em>Ogilala</em> and releasing it under the name William Patrick Corgan later this fall. We\'ve got the first single from the album on this week\'s show, the gorgeously orchestrated "Aeronaut."  Full playlist: 1. Loney Dear: "Sum," 2. Flikka: "Ellington," 3. Wolf Alice: "Don\'t Delete The Kisses," 4. William Patrick Corgan: "Aeronaut," 5. Mavis Staples: "If All I Was Was Black," 6. Jackie Shane: "Cruel Cruel World"',
      contentSnippet:
        'Billy Corgan, as frontman for The Smashing Pumpkins, made twisted, abrasive rock. But within that project he always had a soft side, expressed in quieter, acoustic songs sprinkled throughout the Pumpkins\' catalog. Now the singer is back with a new solo album of beautiful ballads made entirely of piano, acoustic guitar and strings. He\'s calling it Ogilala and releasing it under the name William Patrick Corgan later this fall. We\'ve got the first single from the album on this week\'s show, the gorgeously orchestrated "Aeronaut."  Full playlist: 1. Loney Dear: "Sum," 2. Flikka: "Ellington," 3. Wolf Alice: "Don\'t Delete The Kisses," 4. William Patrick Corgan: "Aeronaut," 5. Mavis Staples: "If All I Was Was Black," 6. Jackie Shane: "Cruel Cruel World"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/09/20170912_asc_whole_show2.mp3?awCollectionId=510019&awEpisodeId=550418200&orgId=1&d=2236&p=510019&story=550418200&t=podcast&e=550418200&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2236",
      isoDate: "2017-09-12T15:13:00.000Z"
    },
    {
      id: "f3f984b7-825d-48a0-a11e-c070cc6c29d0",
      title: "+1: The Weird World Of 'Feature' Credits",
      content:
        "How contributors are credited on albums can lead to fierce, behind-the-scenes battles. Reporter Peter Robinson from <em>The Guardian </em>helps us make sense of this funny little corner of the music business.",
      contentSnippet:
        "How contributors are credited on albums can lead to fierce, behind-the-scenes battles. Reporter Peter Robinson from The Guardian helps us make sense of this funny little corner of the music business.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/09/20170907_asc_pop_credits_final.mp3?awCollectionId=510019&awEpisodeId=549118645&orgId=1&d=1149&p=510019&story=549118645&t=podcast&e=549118645&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1149",
      isoDate: "2017-09-07T11:30:00.000Z"
    },
    {
      id: "17579a66-d0c2-4d7b-8d94-45a814be51f9",
      title: "The National's Matt Berninger On Creating 'Sleep Well Beast'",
      content:
        "The National is about to release its seventh studio album, Sleep Well Beast, on September 8. But days before it comes out, on September 5, the band is going to play that record in its entirety live for NPR.The new songs revolve around the fears and struggles within relationships, particularly that of singer and lyricist Matt Berninger and his wife, the writer Carin Besser, who co-wrote some of the lyrics on this album. Sleep Well Beast is characteristically dark and sonically rich — and some of the best music this band has made.Today we're sharing a conversation between Matt, myself (All Songs Considered host Bob Boilen) and Talia Schlanger, host of World Cafe.",
      contentSnippet:
        "The National is about to release its seventh studio album, Sleep Well Beast, on September 8. But days before it comes out, on September 5, the band is going to play that record in its entirety live for NPR.The new songs revolve around the fears and struggles within relationships, particularly that of singer and lyricist Matt Berninger and his wife, the writer Carin Besser, who co-wrote some of the lyrics on this album. Sleep Well Beast is characteristically dark and sonically rich — and some of the best music this band has made.Today we're sharing a conversation between Matt, myself (All Songs Considered host Bob Boilen) and Talia Schlanger, host of World Cafe.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/08/20170830_asc_the_national_podcast3.mp3?awCollectionId=510019&awEpisodeId=547305329&orgId=1&d=1825&p=510019&story=547305329&t=podcast&e=547305329&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1825",
      isoDate: "2017-08-30T15:52:00.000Z"
    },
    {
      id: "1debc996-95f0-412c-99f4-746bd77d9d79",
      title: "New Mix: Beck, Weaves, King Krule, Curtis Harding, More",
      content:
        'After three years of trickling out singles, Beck has finally announced <em>Colors</em>, a new full-length due out this fall. His latest track, "Dear Life," channels Beach Boys harmonies and the barrel-house piano of classic Beatles songs like "Martha My Dear" or "Lady Madonna."S. Carey, percussionist for Bon Iver, also returns, with a gorgeous new single he wrote for the Netflix series <em>Flaked</em>; English singer and rapper King Krule has a profoundly warped new sound in the song "Czech One;" Atlanta singer Curtis Harding just announced his second full-length record the melts together the worlds of soul, psychedelic rock and R&B; The Canadian band Weaves delivers a bold shot of guitar rock on its new song, "#53;" And AHI, a Toronto-based singer with a memorable voice Bob Boilen discovered at the DIY Musicians Conference in Nashville. Complete Playlist: 1. AHI: "Ol\' Sweet Day," 2. S. Carey: "Brassy Sun," 3. Weaves: "#53," 4. Beck: "Dear Life," 5. King Krule: "Czech One," 6. Curtis Harding: "Wednesday Morning Atonement"',
      contentSnippet:
        'After three years of trickling out singles, Beck has finally announced Colors, a new full-length due out this fall. His latest track, "Dear Life," channels Beach Boys harmonies and the barrel-house piano of classic Beatles songs like "Martha My Dear" or "Lady Madonna."S. Carey, percussionist for Bon Iver, also returns, with a gorgeous new single he wrote for the Netflix series Flaked; English singer and rapper King Krule has a profoundly warped new sound in the song "Czech One;" Atlanta singer Curtis Harding just announced his second full-length record the melts together the worlds of soul, psychedelic rock and R&B; The Canadian band Weaves delivers a bold shot of guitar rock on its new song, "#53;" And AHI, a Toronto-based singer with a memorable voice Bob Boilen discovered at the DIY Musicians Conference in Nashville. Complete Playlist: 1. AHI: "Ol\' Sweet Day," 2. S. Carey: "Brassy Sun," 3. Weaves: "#53," 4. Beck: "Dear Life," 5. King Krule: "Czech One," 6. Curtis Harding: "Wednesday Morning Atonement"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/08/20170829_asc_wholeshow1.mp3?awCollectionId=510019&awEpisodeId=547024655&orgId=1&d=2468&p=510019&story=547024655&t=podcast&e=547024655&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2468",
      isoDate: "2017-08-29T15:27:00.000Z"
    },
    {
      id: "999a4770-1905-4917-ae8a-47db2cedd20b",
      title: "New Mix: Julien Baker, Robert Plant, Daughter, METZ, More",
      content:
        'It\'s been a little over a month since hosts Bob Boilen and Robin Hilton sat together and shared some essential tunes, but they\'re back with some keepers, including a new, swoon-worthy song from singer Julien Baker and a beautifully infectious track from The Pains Of Being Pure At Heart. "My Only" finds Pains frontman Kip Berman reflecting on a new chapter in his life: "I\'m married, with a young daughter," he says, "and an old Volvo." Full playlist: 1. The Pains Of Being Pure At Heart: "My Only," 2. Robert Plant: "The May Queen," 3. Liars: "No Help Pamphlet," 4. Daughter: "Burn It Down," 5. METZ: "Mess of Wires," 6. Julien Baker: "Appointments"',
      contentSnippet:
        'It\'s been a little over a month since hosts Bob Boilen and Robin Hilton sat together and shared some essential tunes, but they\'re back with some keepers, including a new, swoon-worthy song from singer Julien Baker and a beautifully infectious track from The Pains Of Being Pure At Heart. "My Only" finds Pains frontman Kip Berman reflecting on a new chapter in his life: "I\'m married, with a young daughter," he says, "and an old Volvo." Full playlist: 1. The Pains Of Being Pure At Heart: "My Only," 2. Robert Plant: "The May Queen," 3. Liars: "No Help Pamphlet," 4. Daughter: "Burn It Down," 5. METZ: "Mess of Wires," 6. Julien Baker: "Appointments"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/08/20170823_asc_wholeshow2.mp3?awCollectionId=510019&awEpisodeId=545510267&orgId=1&d=2431&p=510019&story=545510267&t=podcast&e=545510267&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2431",
      isoDate: "2017-08-23T15:33:00.000Z"
    },
    {
      id: "b70b7781-67ba-400e-a658-71a80cab5f8a",
      title: "Guest DJ Week: Carrie Brownstein And Fred Armisen Of Portlandia",
      content:
        "Our week of Guest DJs concludes with Carrie Brownstein and Fred Armisen, co-stars of the IFC comedyseries Portlandia. Earlier this year the show was renewed for an eighth and final season, which is scheduled to air in 2018. Back in 2012, Carrie and Fred sat down with All Songs Considered host Bob Boilen to talk about their love of music and the humor they find in fellow nerds who obsess about their favorite bands.",
      contentSnippet:
        "Our week of Guest DJs concludes with Carrie Brownstein and Fred Armisen, co-stars of the IFC comedyseries Portlandia. Earlier this year the show was renewed for an eighth and final season, which is scheduled to air in 2018. Back in 2012, Carrie and Fred sat down with All Songs Considered host Bob Boilen to talk about their love of music and the humor they find in fellow nerds who obsess about their favorite bands.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/08/20170816_asc_portlandia.mp3?awCollectionId=510019&awEpisodeId=544111830&orgId=1&d=2908&p=510019&story=544111830&t=podcast&e=544111830&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2908",
      isoDate: "2017-08-18T09:10:00.000Z"
    },
    {
      id: "4a9f42e2-4d4c-4802-a11e-f5a275d5d507",
      title: "Guest DJ Week: Courtney Barnett",
      content:
        "Our week of Guest DJs continues with Courtney Barnett. Later this year the Australian guitarist and singer will release a new album she recorded with Kurt Vile. In October, the two will also embark on limited tour together. Back in 2015, Barnett had just released her debut full-length, <em>Sometimes I Sit And Think, And Sometimes I Just Sit</em>, when she joined Bob Boilen to talk about some of the artists who've influenced her own work and life over the years, from Wilco and Talking Heads to the Sydney band You Am I and fellow Australian signer Paul Kelly.",
      contentSnippet:
        "Our week of Guest DJs continues with Courtney Barnett. Later this year the Australian guitarist and singer will release a new album she recorded with Kurt Vile. In October, the two will also embark on limited tour together. Back in 2015, Barnett had just released her debut full-length, Sometimes I Sit And Think, And Sometimes I Just Sit, when she joined Bob Boilen to talk about some of the artists who've influenced her own work and life over the years, from Wilco and Talking Heads to the Sydney band You Am I and fellow Australian signer Paul Kelly.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/08/20170816_asc_courtney.mp3?awCollectionId=510019&awEpisodeId=543952875&orgId=1&d=2857&p=510019&story=543952875&t=podcast&e=543952875&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2857",
      isoDate: "2017-08-17T09:10:19.000Z"
    },
    {
      id: "bbfcaa42-de4f-44e4-8116-b855f6b996d5",
      title: "Guest DJ Week: Björk",
      content:
        "Our week of Guest DJs continues with Björk. The Icelandic singer recently announced she'll be releasing a new album, possibly before the end of the year. In this 2009 conversation with <em>All Songs Considered</em> host Bob Boilen, Björk talked about <em>Voltaïc</em>, her box set of live recordings, her love of Syrian musician Omar Souleyman, fellow Icelandic singer Ólöf Arnalds and more.",
      contentSnippet:
        "Our week of Guest DJs continues with Björk. The Icelandic singer recently announced she'll be releasing a new album, possibly before the end of the year. In this 2009 conversation with All Songs Considered host Bob Boilen, Björk talked about Voltaïc, her box set of live recordings, her love of Syrian musician Omar Souleyman, fellow Icelandic singer Ólöf Arnalds and more.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/ascsongs/2017/08/20170815_ascsongs_bjork.mp3?awCollectionId=510019&awEpisodeId=543802151&orgId=1&d=2390&p=510019&story=543802151&t=podcast&e=543802151&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2390",
      isoDate: "2017-08-16T09:10:18.000Z"
    },
    {
      id: "44da9266-4189-4306-902e-812247d10d8c",
      title: "Guest DJ Week: Randy Newman",
      content:
        "This week we're featuring select episodes from our Guest DJ archives. Today we've got a conversation with Randy Newman. The singer, composer and pianist recently released his 11th solo album. It's called Dark Matter. Bob Boilen originally spoke with Newman back in 2008 when Newman released his previous record, Harps And Angels. The two talked about Newman's musical family, how Ray Charles has been the biggest influence in his music career and what it was like hearing The Beatles for the first time.",
      contentSnippet:
        "This week we're featuring select episodes from our Guest DJ archives. Today we've got a conversation with Randy Newman. The singer, composer and pianist recently released his 11th solo album. It's called Dark Matter. Bob Boilen originally spoke with Newman back in 2008 when Newman released his previous record, Harps And Angels. The two talked about Newman's musical family, how Ray Charles has been the biggest influence in his music career and what it was like hearing The Beatles for the first time.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/08/20170814_asc_randynewman.mp3?awCollectionId=510019&awEpisodeId=543471772&orgId=1&d=2061&p=510019&story=543471772&t=podcast&e=543471772&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2061",
      isoDate: "2017-08-15T09:10:18.000Z"
    },
    {
      id: "be713ff4-a708-4e53-8f7f-129f2fb8622e",
      title: "Guest DJ Week: Roger Waters",
      content:
        "This week we're featuring select episodes from our Guest DJ archives. Roger Waters is currently on the North American leg of his Us + Them tour, performing songs from the Pink Floyd albums The Dark Side Of The Moon, Wish You Were Here, Animals and The Wall. In June Waters also released his first solo rock album in 25 years, called Is This The Life We Really Want?",
      contentSnippet:
        "This week we're featuring select episodes from our Guest DJ archives. Roger Waters is currently on the North American leg of his Us + Them tour, performing songs from the Pink Floyd albums The Dark Side Of The Moon, Wish You Were Here, Animals and The Wall. In June Waters also released his first solo rock album in 25 years, called Is This The Life We Really Want?",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/08/20170814_asc_rogerwaters.mp3?awCollectionId=510019&awEpisodeId=543472398&orgId=1&d=2811&p=510019&story=543472398&t=podcast&e=543472398&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2811",
      isoDate: "2017-08-14T19:31:00.000Z"
    },
    {
      id: "939e34a5-c6c4-42c5-b12e-97abf46defb5",
      title: "The 150 Greatest Albums Made By Women",
      content:
        "Five journalists join forces to unpack NPR Music's 'Turning The Tables' list.",
      contentSnippet:
        "Five journalists join forces to unpack NPR Music's 'Turning The Tables' list.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/08/20170808_asc_ttt.mp3?awCollectionId=510019&awEpisodeId=542605508&orgId=1&d=2496&p=510019&story=542605508&t=podcast&e=542605508&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2496",
      isoDate: "2017-08-10T15:59:00.000Z"
    },
    {
      id: "2dd8432c-5238-4e39-9700-a3821015cf98",
      title: "Stretch and Bobbito: The Legends Return To Radio",
      content:
        'The legendary New York DJ duo of Stretch and Bobbito have reunited. After 19 years off the airwaves, Adrian "Stretch" Bartos and Robert "Bobbito" Garcia are back with a conversational, sometimes musical NPR podcast called <em>What\'s Good With Stretch And Bobbito</em>. On this edition of <em>All Songs Considered</em> we talk about their hugely influential music show in the \'90s on WKCR at Columbia University, in New York City that helped launch the careers of artists like The Notorious B.I.G, Wu-Tang Clan, Jay-Z, Nas, Eminem and more.',
      contentSnippet:
        'The legendary New York DJ duo of Stretch and Bobbito have reunited. After 19 years off the airwaves, Adrian "Stretch" Bartos and Robert "Bobbito" Garcia are back with a conversational, sometimes musical NPR podcast called What\'s Good With Stretch And Bobbito. On this edition of All Songs Considered we talk about their hugely influential music show in the \'90s on WKCR at Columbia University, in New York City that helped launch the careers of artists like The Notorious B.I.G, Wu-Tang Clan, Jay-Z, Nas, Eminem and more.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/07/20170728_asc_stretch3.mp3?awCollectionId=510019&awEpisodeId=539965700&orgId=1&d=2910&p=510019&story=539965700&t=podcast&e=539965700&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2910",
      isoDate: "2017-08-01T09:00:26.000Z"
    },
    {
      id: "13ac2f26-cb06-4a51-8f8c-d3d1f1fc9ce4",
      title:
        "Newport Folk 2017 Preview: Drive By Truckers, Jim James, John Prine And More",
      content:
        "The Newport Folk Festival can feel like a cross between summer camp and a family reunion. Fans return year after year in no small part because the camaraderie between musicians is unlike most other festivals. You can always count on unusual and memorable collaborations, whether it's Margo Price singing \"Me and Bobby McGee\" with Kris Kristofferson or Roger Waters singing John Prine songs. There are so many surprises for both musicians and fans, which is one of the reasons the festival sells out every year before anyone even knows who's playing. To tell us a bit of what's in store for Newport 2017 we called Jay Sweet, the executive producer of the festival. Jay explains how he picked this year's lineup, the importance of giving artists a platform for change and why the festival continues to resonate with people more than 50 years after it started.",
      contentSnippet:
        "The Newport Folk Festival can feel like a cross between summer camp and a family reunion. Fans return year after year in no small part because the camaraderie between musicians is unlike most other festivals. You can always count on unusual and memorable collaborations, whether it's Margo Price singing \"Me and Bobby McGee\" with Kris Kristofferson or Roger Waters singing John Prine songs. There are so many surprises for both musicians and fans, which is one of the reasons the festival sells out every year before anyone even knows who's playing. To tell us a bit of what's in store for Newport 2017 we called Jay Sweet, the executive producer of the festival. Jay explains how he picked this year's lineup, the importance of giving artists a platform for change and why the festival continues to resonate with people more than 50 years after it started.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/07/20170725_asc_newport2017preview3.mp3?awCollectionId=510019&awEpisodeId=539217252&orgId=1&d=2236&p=510019&story=539217252&t=podcast&e=539217252&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2236",
      isoDate: "2017-07-25T13:24:00.000Z"
    },
    {
      id: "2b2f535d-afb3-4258-b431-1660abdffccb",
      title: "+1 Sylvan Esso Like You've Never Heard Them Before",
      content:
        "For this one brief project, the Echo Mountain Sessions, the duo of Sylvan Esso turns into a full blown band. You'll here the music and a conversation with Nick Sanborn and Amelia Meath. Back in April, right about the time Sylvan Esso were releasing their 2nd album <em>What Now</em>, Amelia and Nick got a bunch of their North Carolina buddies to join them in a studio in Asheville to record a handful of the very same songs from <em>What Now</em>, this time as a big live band. Members of Wye Oak, The Mountain Goats, Hiss Golden Messenger, Mountain Man and Megafaun got together for a day at Echo Mountain studios and these sessions were captured to create a visual EP which comes out July 28.",
      contentSnippet:
        "For this one brief project, the Echo Mountain Sessions, the duo of Sylvan Esso turns into a full blown band. You'll here the music and a conversation with Nick Sanborn and Amelia Meath. Back in April, right about the time Sylvan Esso were releasing their 2nd album What Now, Amelia and Nick got a bunch of their North Carolina buddies to join them in a studio in Asheville to record a handful of the very same songs from What Now, this time as a big live band. Members of Wye Oak, The Mountain Goats, Hiss Golden Messenger, Mountain Man and Megafaun got together for a day at Echo Mountain studios and these sessions were captured to create a visual EP which comes out July 28.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/07/20170724_asc_sylvan_esso_echomt.mp3?awCollectionId=510019&awEpisodeId=538757286&orgId=1&d=1675&p=510019&story=538757286&t=podcast&e=538757286&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1675",
      isoDate: "2017-07-24T09:00:05.000Z"
    },
    {
      id: "d92d6bc1-f621-4d91-81c5-8105a156a55e",
      title: "Josh Ritter, Ian Chang, Moses Sumney And More",
      content:
        'You\'ll want to listen to this week\'s show on a good pair of headphones, preferably in the dark and, if you take drummer Ian Chang\'s advice, while getting a massage. We open the program with a spine-tingling cut called "ASMR," from Chang\'s debut solo EP, an arresting instrumental piece inspired by the inexplicable chills that sometimes run down your back. It\'s just the first in a series of sonic delights on the show. 1. Ian Chang: "ASMR," 2. Common Holly: "If After All," 3. The Weather Station: "Thirty," 4. Josh Ritter: "Showboat," 5. Flotation Toy Warning: "A Season Underground," 6. Moses Sumney: "Doomed," 7. From The Mouth Of The Sun: "Light Blooms In Hollow Space."',
      contentSnippet:
        'You\'ll want to listen to this week\'s show on a good pair of headphones, preferably in the dark and, if you take drummer Ian Chang\'s advice, while getting a massage. We open the program with a spine-tingling cut called "ASMR," from Chang\'s debut solo EP, an arresting instrumental piece inspired by the inexplicable chills that sometimes run down your back. It\'s just the first in a series of sonic delights on the show. 1. Ian Chang: "ASMR," 2. Common Holly: "If After All," 3. The Weather Station: "Thirty," 4. Josh Ritter: "Showboat," 5. Flotation Toy Warning: "A Season Underground," 6. Moses Sumney: "Doomed," 7. From The Mouth Of The Sun: "Light Blooms In Hollow Space."',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/07/20170718_asc_whole.mp3?awCollectionId=510019&awEpisodeId=537918638&orgId=1&d=3111&p=510019&story=537918638&t=podcast&e=537918638&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3111",
      isoDate: "2017-07-18T17:09:00.000Z"
    },
    {
      id: "2f07acef-0fa5-4cee-b75c-6f1667c5291b",
      title: "k.d. lang Reflects On 25 Years Of 'Ingénue'",
      content:
        "Back in 1992, singer k.d. lang released a record unlike any other. <em>Ingénue </em>slithered against the popular music grain with songs that drew slow, deep breaths and sighed seductively. It had an alluringly divergent sound that landed somewhere in a blurry nexus of pop, country and global folk, with accordions, clarinets and Eastern European flourishes. And lang's monumental voice, both powerful and restrained, was simply unforgettable as she sang languorous songs of love and desire.<em>Ingénue </em>became a monstrous, multi-platinum hit for lang, but it was also a milestone in the '90s LGBT rights movement. Against her label's wishes, lang came out in a cover story for <em>The Advocate</em> three months after the album was released. Her decision helped spark a shift in the national conversation about what it meant to be gay and made <em>Ingénue </em>one of the first in a series of important cultural moments that pushed LGBT issues into the mainstream conversation. (Others from that period included the film <em>Philadelphia</em> and<em> </em>the Broadway play <em>Angels In America</em> and, later in the same decade, the television sitcom <em>Will And Grace</em>). To celebrate <em>Ingénue'</em>s 25th anniversary, Nonesuch Records is releasing a remastered version of the album on July 14, along with some previously unreleased live recordings. Last year lang recorded an album with Neko Case and Laura Veirs called c<em>ase/lang/veirs. </em>They toured together and became friends. So we asked Laura Veirs to talk with k.d. lang about <em>Ingénue </em>and how the album still resonates today.",
      contentSnippet:
        "Back in 1992, singer k.d. lang released a record unlike any other. Ingénue slithered against the popular music grain with songs that drew slow, deep breaths and sighed seductively. It had an alluringly divergent sound that landed somewhere in a blurry nexus of pop, country and global folk, with accordions, clarinets and Eastern European flourishes. And lang's monumental voice, both powerful and restrained, was simply unforgettable as she sang languorous songs of love and desire.Ingénue became a monstrous, multi-platinum hit for lang, but it was also a milestone in the '90s LGBT rights movement. Against her label's wishes, lang came out in a cover story for The Advocate three months after the album was released. Her decision helped spark a shift in the national conversation about what it meant to be gay and made Ingénue one of the first in a series of important cultural moments that pushed LGBT issues into the mainstream conversation. (Others from that period included the film Philadelphia and the Broadway play Angels In America and, later in the same decade, the television sitcom Will And Grace). To celebrate Ingénue's 25th anniversary, Nonesuch Records is releasing a remastered version of the album on July 14, along with some previously unreleased live recordings. Last year lang recorded an album with Neko Case and Laura Veirs called case/lang/veirs. They toured together and became friends. So we asked Laura Veirs to talk with k.d. lang about Ingénue and how the album still resonates today.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/07/20170713_asc_kdlangfinal.mp3?awCollectionId=510019&awEpisodeId=537050712&orgId=1&d=1806&p=510019&story=537050712&t=podcast&e=537050712&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1806",
      isoDate: "2017-07-13T17:00:00.000Z"
    },
    {
      id: "9d600473-f6b6-4975-9b01-83b523d369aa",
      title: "Music From 'The Big Sick,' Rhye, Protomartyr, Waxhatchee, More",
      content:
        'Composer Michael Andrews started writing music for movies back in 2001, when he scored the now-cult-classic film <em>Donnie Darko</em> (which included Andrews\' haunting arrangement of the Tears For Fears song "Mad World"). His simple, brilliantly rendered songs perfectly reflected the movie\'s surreal narrative with moments that were both comical and creepy. Now he\'s back with a new score — and completely different sound — for the romantic comedy <em>The Big Sick</em>. We kick off this week\'s show with the sweetly melodic "Two Day Rule," a song that host Bob Boilen says sounds, appropriately enough, like a romantic relationship unfolding. Full playlist: 1. Michael Andrews: "The Two Day Rule," 2. The Blow: "Get Up," 3. Rhye: "Please," 4. Joseph Shabason: "Long Swim," 5. Protomartyr: "A Private Understanding," 6. Waxahatchee: "Brass Beam"',
      contentSnippet:
        'Composer Michael Andrews started writing music for movies back in 2001, when he scored the now-cult-classic film Donnie Darko (which included Andrews\' haunting arrangement of the Tears For Fears song "Mad World"). His simple, brilliantly rendered songs perfectly reflected the movie\'s surreal narrative with moments that were both comical and creepy. Now he\'s back with a new score — and completely different sound — for the romantic comedy The Big Sick. We kick off this week\'s show with the sweetly melodic "Two Day Rule," a song that host Bob Boilen says sounds, appropriately enough, like a romantic relationship unfolding. Full playlist: 1. Michael Andrews: "The Two Day Rule," 2. The Blow: "Get Up," 3. Rhye: "Please," 4. Joseph Shabason: "Long Swim," 5. Protomartyr: "A Private Understanding," 6. Waxahatchee: "Brass Beam"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/07/20170711_asc_20170711_wholeshow.mp3?awCollectionId=510019&awEpisodeId=536652543&orgId=1&d=2860&p=510019&story=536652543&t=podcast&e=536652543&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2860",
      isoDate: "2017-07-11T15:41:00.000Z"
    },
    {
      id: "e162aca4-ea54-499a-abde-c289161284c6",
      title:
        "New Mix: St. Vincent, Mogwai, Benjamin Clementine, My Bubba, More",
      content:
        'We begin this week\'s show with a simple message: Use this time to become mindful and peaceful, taking calming breaths... while listening to our latest mix of essential new music. This includes a beautiful new ballad from St. Vincent, a potent, emotional journey from singer Benjamin Clementine and lots of curious ear candy.  Playlist: 1. Siv Jakobsen: "Shallow Digger," 2. St. Vincent: "New York," 3. Mappe Of: "Cavern\'s Dark," 4. Ásgeir: "Underneath It," 5. Benjamin Clementine: "Phantom Of Aleppoville," 6. My Bubba: "Gone," 7. Mogwai: "Party In The Dark."',
      contentSnippet:
        'We begin this week\'s show with a simple message: Use this time to become mindful and peaceful, taking calming breaths... while listening to our latest mix of essential new music. This includes a beautiful new ballad from St. Vincent, a potent, emotional journey from singer Benjamin Clementine and lots of curious ear candy.  Playlist: 1. Siv Jakobsen: "Shallow Digger," 2. St. Vincent: "New York," 3. Mappe Of: "Cavern\'s Dark," 4. Ásgeir: "Underneath It," 5. Benjamin Clementine: "Phantom Of Aleppoville," 6. My Bubba: "Gone," 7. Mogwai: "Party In The Dark."',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/07/20170705_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=535617106&orgId=1&d=2651&p=510019&story=535617106&t=podcast&e=535617106&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2651",
      isoDate: "2017-07-05T14:57:00.000Z"
    },
    {
      id: "41063946-dbb1-49b0-93ef-008ef1dce2b1",
      title: "Listener Picks For 2017's Best New Artists (So Far)",
      content:
        "As we tallied the results of this year's listener poll for 2017's best new artists (so far), we continue to see women dominating the list and guitars still a big part of your musical landscape. Four of the five most popular new artists are women or fronted by women and all of them are based out of New York. (In last year's poll, listeners picked all women for the entire top ten). The fuzzy rock of bands like Diet Cig, Charly Bliss and Jay Som fared the best, while Nick Hakim and Sampha were the only two male solo artists to crack the top ten. On this week's show we count down the best new artists from the first half of 2017, as selected by our listeners. We define a new artist as someone who released a debut full-length this year (if they don't have a full album, an EP or single will do). We also throw in a few of our own picks, including the out-of-time, otherworldly sound of ALA.NI, (more) guitar noise from Vagabon, and the transfixing voice of Tom Adams.",
      contentSnippet:
        "As we tallied the results of this year's listener poll for 2017's best new artists (so far), we continue to see women dominating the list and guitars still a big part of your musical landscape. Four of the five most popular new artists are women or fronted by women and all of them are based out of New York. (In last year's poll, listeners picked all women for the entire top ten). The fuzzy rock of bands like Diet Cig, Charly Bliss and Jay Som fared the best, while Nick Hakim and Sampha were the only two male solo artists to crack the top ten. On this week's show we count down the best new artists from the first half of 2017, as selected by our listeners. We define a new artist as someone who released a debut full-length this year (if they don't have a full album, an EP or single will do). We also throw in a few of our own picks, including the out-of-time, otherworldly sound of ALA.NI, (more) guitar noise from Vagabon, and the transfixing voice of Tom Adams.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/06/20170627_asc_wholeshow2june27.mp3?awCollectionId=510019&awEpisodeId=534605140&orgId=1&d=4578&p=510019&story=534605140&t=podcast&e=534605140&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "4578",
      isoDate: "2017-06-27T20:34:00.000Z"
    },
    {
      id: "c16f86a3-6c4a-4043-8f6e-4f648799949a",
      title: "+1 Guest DJ: Aldous Harding",
      content:
        "A song can trigger a well of emotions and so it was for Aldous Harding. The intense singer and songwriter from New Zealand and I sat down to talk about the music she loved growing up. It was a teary and thoughtful conversation about the few artists that had a huge impact on the music she'd come to make. Aldous Harding's second album is out, it's called <em>Party</em>.",
      contentSnippet:
        "A song can trigger a well of emotions and so it was for Aldous Harding. The intense singer and songwriter from New Zealand and I sat down to talk about the music she loved growing up. It was a teary and thoughtful conversation about the few artists that had a huge impact on the music she'd come to make. Aldous Harding's second album is out, it's called Party.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/06/20170621_asc_aldousdjv2.mp3?awCollectionId=510019&awEpisodeId=533704474&orgId=1&d=2111&p=510019&story=533704474&t=podcast&e=533704474&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2111",
      isoDate: "2017-06-21T10:00:22.000Z"
    },
    {
      id: "4c756939-af83-4f6b-a332-b6400dfa6bfb",
      title: "Lorde, Zola Jesus, Chelsea Wolfe, More",
      content:
        'We follow Father\'s Day weekend with a mix of powerful new pop and rock from a lot of incredible women, including "Exhumed," a raging, cathartic song from Zola Jesus, and roaring doom metal from Chelsea Wolfe. Full Playlist: 1. Katie Von Schleicher: "Sell It Back," 2. Lorde: "Supercut," 3. Chelsea Wolfe: "16 Psyche," 4. Zola Jesus: "Exhumed," 5. Bernice: "Gemini," 6. Thomas Patrick Maguire: "Go To Hell"',
      contentSnippet:
        'We follow Father\'s Day weekend with a mix of powerful new pop and rock from a lot of incredible women, including "Exhumed," a raging, cathartic song from Zola Jesus, and roaring doom metal from Chelsea Wolfe. Full Playlist: 1. Katie Von Schleicher: "Sell It Back," 2. Lorde: "Supercut," 3. Chelsea Wolfe: "16 Psyche," 4. Zola Jesus: "Exhumed," 5. Bernice: "Gemini," 6. Thomas Patrick Maguire: "Go To Hell"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/06/20170620_asc_20170620final2.mp3?awCollectionId=510019&awEpisodeId=533662010&orgId=1&d=2569&p=510019&story=533662010&t=podcast&e=533662010&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2569",
      isoDate: "2017-06-20T16:07:00.000Z"
    },
    {
      id: "9e373a97-4e69-4323-85a4-6648646e3b84",
      title: "Metric's Emily Haines, Guerilla Toss, Chastity Belt, Gordi, More",
      content:
        'We get right down to business this week with the fantastic, frenetic pop of Guerilla Toss. The New York band has a new album on the way and recently released "Betty Dreams Of Green Men," a cut inspired by alien abduction, addiction and the obsessions that can consume a person\'s life.Also on the show: The brash and playful rock group Chastity Belt has a more restrained, introspective sound on its latest album, <em>I Used To Spend So Much Time Alone</em>; Metric singer Emily Haines returns with her first new solo album in more than a decade; the atmospheric rock group Mt. Wolf returns with the ethereal song "Soteria"; Australian singer Gordi, known for her a cappella cover of Bon Iver\'s "00000 Million," has her own debut full-length on the way; and NPR Music\'s Lars Gotrich stops by to close out the show with a bruising new song from the Detroit hardcore band Thoughts Of Ionesco. Full Playlist: 1. Guerilla Toss: "Betty Dreams Of Green Men," 2. Chastity Belt: "Stuck," 3. Emily Haines & The Soft Skeleton: "Fatal Gift," 4. Mt. Wolf: "Soteria," 5. Gordi: "Heaven I Know," 6. Thoughts Of Ionesco: "Culture Of The Eternal Snake"',
      contentSnippet:
        'We get right down to business this week with the fantastic, frenetic pop of Guerilla Toss. The New York band has a new album on the way and recently released "Betty Dreams Of Green Men," a cut inspired by alien abduction, addiction and the obsessions that can consume a person\'s life.Also on the show: The brash and playful rock group Chastity Belt has a more restrained, introspective sound on its latest album, I Used To Spend So Much Time Alone; Metric singer Emily Haines returns with her first new solo album in more than a decade; the atmospheric rock group Mt. Wolf returns with the ethereal song "Soteria"; Australian singer Gordi, known for her a cappella cover of Bon Iver\'s "00000 Million," has her own debut full-length on the way; and NPR Music\'s Lars Gotrich stops by to close out the show with a bruising new song from the Detroit hardcore band Thoughts Of Ionesco. Full Playlist: 1. Guerilla Toss: "Betty Dreams Of Green Men," 2. Chastity Belt: "Stuck," 3. Emily Haines & The Soft Skeleton: "Fatal Gift," 4. Mt. Wolf: "Soteria," 5. Gordi: "Heaven I Know," 6. Thoughts Of Ionesco: "Culture Of The Eternal Snake"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/06/20170613_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=532771583&orgId=1&d=2774&p=510019&story=532771583&t=podcast&e=532771583&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2774",
      isoDate: "2017-06-13T15:23:00.000Z"
    },
    {
      id: "d80a0f99-9233-4c52-a89d-4dc208479762",
      title:
        "Guest DJ: How The Band Phoenix Made A Joyful Record In Chaotic Times ",
      content:
        "There's a joyful new album from Phoenix. <em>Ti Amo</em> is the Paris-based band's first record since 2013 and took the better part of the past four years to make. On this edition of <em>All Songs Considered</em>, host Bob Boilen talks with guitarist Laurent Brancowitz and lead singer Thomas Mars about their work habits — how they create a palette of sounds for each new album and how they were able to make a joyful record at a time when Paris has seen horrific terror attacks.",
      contentSnippet:
        "There's a joyful new album from Phoenix. Ti Amo is the Paris-based band's first record since 2013 and took the better part of the past four years to make. On this edition of All Songs Considered, host Bob Boilen talks with guitarist Laurent Brancowitz and lead singer Thomas Mars about their work habits — how they create a palette of sounds for each new album and how they were able to make a joyful record at a time when Paris has seen horrific terror attacks.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/06/20170609_asc_phoenix.mp3?awCollectionId=510019&awEpisodeId=532245018&orgId=1&d=2086&p=510019&story=532245018&t=podcast&e=532245018&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2086",
      isoDate: "2017-06-09T16:02:00.000Z"
    },
    {
      id: "791e11bd-6e8b-44a8-a6cb-3a2bb8493020",
      title:
        "Sufjan Stevens, Nico Muhly And Bryce Dessner On Creating 'Planetarium'",
      content:
        "The trio talk about the grand mysteries of the universe that helped inspire their celestial collaboration, <em>Planetarium.</em>",
      contentSnippet:
        "The trio talk about the grand mysteries of the universe that helped inspire their celestial collaboration, Planetarium.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/06/20170607_asc_planetariumint.mp3?awCollectionId=510019&awEpisodeId=532062327&orgId=1&d=1117&p=510019&story=532062327&t=podcast&e=532062327&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1117",
      isoDate: "2017-06-08T14:16:00.000Z"
    },
    {
      id: "1a90bab3-ae53-4e3d-a47a-3ce9e102fcbb",
      title: "Guest DJ: alt-J",
      content:
        'The trio joins host Bob Boilen to play some of their favorite songs by other artists, including music from Radiohead, Metronomy and Death Grips. 1. Metronomy: "Corinne," 2. Radiohead: "Reckoner," 3. Jorja Smith: "Blue Lights," 4. Julia Michaels: "Issues," 5. Death Grips: "Interview B," 6. alt-J: "Deadcrush," 7. alt-J: "In Cold Blood"',
      contentSnippet:
        'The trio joins host Bob Boilen to play some of their favorite songs by other artists, including music from Radiohead, Metronomy and Death Grips. 1. Metronomy: "Corinne," 2. Radiohead: "Reckoner," 3. Jorja Smith: "Blue Lights," 4. Julia Michaels: "Issues," 5. Death Grips: "Interview B," 6. alt-J: "Deadcrush," 7. alt-J: "In Cold Blood"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/06/20170606_asc_altj2.mp3?awCollectionId=510019&awEpisodeId=531742792&orgId=1&d=1540&p=510019&story=531742792&t=podcast&e=531742792&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1540",
      isoDate: "2017-06-06T14:48:00.000Z"
    },
    {
      id: "0285abb0-3912-4bf1-b9a6-9a26f7102cac",
      title: "+1 Dan Auerbach Plays DJ",
      content:
        "A conversation with Dan Auerbach and the music that inspired his new album 'Waiting on a Song'",
      contentSnippet:
        "A conversation with Dan Auerbach and the music that inspired his new album 'Waiting on a Song'",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/06/20170605_asc_dan.mp3?awCollectionId=510019&awEpisodeId=531560718&orgId=1&d=2425&p=510019&story=531560718&t=podcast&e=531560718&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2425",
      isoDate: "2017-06-05T13:26:00.000Z"
    },
    {
      id: "ec29ea5e-4c1b-4bca-8159-97ae7d903077",
      title: "Jeff Tweedy, Kevin Morby, big Thief, Mitski, More",
      content:
        'A couple of weeks ago Robin Hilton snuck a Harry Styles cut on the show, to see if he could trick Bob Boilen into loving the One Direction singer\'s solo effort by not telling him who it was. (It didn\'t work). This week Robin tries to get another One Direction song by Bob via one of Bob\'s favorite singers, Mitski, performing a cover of the song "Fireproof" from One Direction\'s album Four. Did he fool Bob? Full playlist: 1. Mitski: "Fireproof" (One Direction cover), 2. Kevin Morby: "1234," 3. Jeff Tweedy: "I\'m Always In Love," 4. Big Thief: "Mary," 5. Jon McKiel: "Conduit," 6. This Is The Kit: "Moonshine Freeze."',
      contentSnippet:
        'A couple of weeks ago Robin Hilton snuck a Harry Styles cut on the show, to see if he could trick Bob Boilen into loving the One Direction singer\'s solo effort by not telling him who it was. (It didn\'t work). This week Robin tries to get another One Direction song by Bob via one of Bob\'s favorite singers, Mitski, performing a cover of the song "Fireproof" from One Direction\'s album Four. Did he fool Bob? Full playlist: 1. Mitski: "Fireproof" (One Direction cover), 2. Kevin Morby: "1234," 3. Jeff Tweedy: "I\'m Always In Love," 4. Big Thief: "Mary," 5. Jon McKiel: "Conduit," 6. This Is The Kit: "Moonshine Freeze."',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/05/20170531_asc_tweedy.mp3?awCollectionId=510019&awEpisodeId=530899191&orgId=1&d=2641&p=510019&story=530899191&t=podcast&e=530899191&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2641",
      isoDate: "2017-05-31T16:41:00.000Z"
    },
    {
      id: "2e7973cf-eddd-40e1-bcbd-b39d271da4ce",
      title: "+1: Why We're Still Obsessed With Tupac",
      content:
        "Two decades after his death, Tupac Shakur is still the headline-generating, record-selling, contentious figure that he was in life. On this +1, NPR Music hip-hop reporter Rodney Carmichael talks with Ben Westhoff, author of <em>Original Gangstas, </em>a book about the heyday of West Coast gangsta rap. The two talk about Tupac's enduring legacy and what it means today.",
      contentSnippet:
        "Two decades after his death, Tupac Shakur is still the headline-generating, record-selling, contentious figure that he was in life. On this +1, NPR Music hip-hop reporter Rodney Carmichael talks with Ben Westhoff, author of Original Gangstas, a book about the heyday of West Coast gangsta rap. The two talk about Tupac's enduring legacy and what it means today.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/05/20170526_asc_rodneytupacfinal2.mp3?awCollectionId=510019&awEpisodeId=530183143&orgId=1&d=1802&p=510019&story=530183143&t=podcast&e=530183143&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1802",
      isoDate: "2017-05-26T12:39:00.000Z"
    },
    {
      id: "979c6a63-b711-491b-923c-1056c89c52df",
      title:
        "Why Remix 'Sgt. Pepper's'? Giles Martin, The Man Behind The Project, Explains",
      content:
        "'Sgt. Pepper's Lonely Hearts Club Band' turns 50 next week — so what's been done to celebrate one of the greatest records ever? They've remixed the entire album! The word \"remix,\" in fact, may not capture the scope of the project — it's more like someone rebuilt a pyramid with fresh bricks. But a question remains: Why would anyone do so? All Songs Considered host Bob Boilen traveled to New York to meet Giles Martin, who spearheaded the project, to find that out.",
      contentSnippet:
        "'Sgt. Pepper's Lonely Hearts Club Band' turns 50 next week — so what's been done to celebrate one of the greatest records ever? They've remixed the entire album! The word \"remix,\" in fact, may not capture the scope of the project — it's more like someone rebuilt a pyramid with fresh bricks. But a question remains: Why would anyone do so? All Songs Considered host Bob Boilen traveled to New York to meet Giles Martin, who spearheaded the project, to find that out.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/05/20170523_asc_giles_martin.mp3?awCollectionId=510019&awEpisodeId=529528236&orgId=1&d=1786&p=510019&story=529528236&t=podcast&e=529528236&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1786",
      isoDate: "2017-05-23T04:01:01.000Z"
    },
    {
      id: "9804cc28-b79e-4682-adbf-50d3426beb65",
      title: "Fleet Foxes, The National, Harry Styles Of One Direction, More",
      content:
        'Yes, it\'s true: Harry Styles of the British boy band One Direction has taken a huge left turn on his debut solo album, turning in an infectious, sometimes gritty batch of rock songs inspired by The Rolling Stones, Pink Floyd and other classic bands he grew up listening to. Robin kick\'s this week\'s show off with one of these surprising new songs, the playful earworm "Carolina." Full playlist: 1. Harry Styles: "Carolina," 2. Kalbells: "Why?!steria," 3. The Building: "Have To Forgive," 4. Fleet Foxes: "Fool\'s Errand," 5. Dr. Danny: "Fly Me Back In Time," 6. The National: "The System Only Dreams In Total Darkness"',
      contentSnippet:
        'Yes, it\'s true: Harry Styles of the British boy band One Direction has taken a huge left turn on his debut solo album, turning in an infectious, sometimes gritty batch of rock songs inspired by The Rolling Stones, Pink Floyd and other classic bands he grew up listening to. Robin kick\'s this week\'s show off with one of these surprising new songs, the playful earworm "Carolina." Full playlist: 1. Harry Styles: "Carolina," 2. Kalbells: "Why?!steria," 3. The Building: "Have To Forgive," 4. Fleet Foxes: "Fool\'s Errand," 5. Dr. Danny: "Fly Me Back In Time," 6. The National: "The System Only Dreams In Total Darkness"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/05/20170516_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=528616659&orgId=1&d=2515&p=510019&story=528616659&t=podcast&e=528616659&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2515",
      isoDate: "2017-05-16T15:24:00.000Z"
    },
    {
      id: "90a748c1-7a49-4890-a625-f1f3f0d809a0",
      title: "+1: Ravi Coltrane On His Mother's 'Ecstatic Music'",
      content:
        "This week, guest host and NPR Music reporter and producer Anastasia Tsioulcas talks with jazz saxophonist, composer and band leader Ravi Coltrane about his late mother's remarkable music on a new compilation called <em>World Spirituality Classics 1: The Ecstatic Music of Alice Coltrane Turiyasangitananda</em>",
      contentSnippet:
        "This week, guest host and NPR Music reporter and producer Anastasia Tsioulcas talks with jazz saxophonist, composer and band leader Ravi Coltrane about his late mother's remarkable music on a new compilation called World Spirituality Classics 1: The Ecstatic Music of Alice Coltrane Turiyasangitananda",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/05/20170515_asc_ravi2.mp3?awCollectionId=510019&awEpisodeId=528469550&orgId=1&d=3625&p=510019&story=528469550&t=podcast&e=528469550&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3625",
      isoDate: "2017-05-15T16:07:00.000Z"
    },
    {
      id: "e019bddc-bb00-490a-b64e-0388148895a9",
      title: "A Mother's Day Mix: Songs That Remind You Of Mom",
      content:
        "Grab your hanky — you're gonna need it for this week's episode of <em>All Songs Considered</em>. We certainly did while reading and listening to all of the incredible stories we received from listeners about the songs that remind them of their moms. Some were funny, some were dark (a few of you have issues <em>way </em>above our pay grade), but most were heartfelt and full of joy, sometimes grief, but always ending with unconditional love. We got several thousand stories and song picks, way more than we could share in a single show. But here are a handful of the ones that moved us the most, sometimes in the simplest and smallest ways.",
      contentSnippet:
        "Grab your hanky — you're gonna need it for this week's episode of All Songs Considered. We certainly did while reading and listening to all of the incredible stories we received from listeners about the songs that remind them of their moms. Some were funny, some were dark (a few of you have issues way above our pay grade), but most were heartfelt and full of joy, sometimes grief, but always ending with unconditional love. We got several thousand stories and song picks, way more than we could share in a single show. But here are a handful of the ones that moved us the most, sometimes in the simplest and smallest ways.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/05/20170510_asc_mothersdayfinalwgeorge.mp3?awCollectionId=510019&awEpisodeId=527758897&orgId=1&d=2261&p=510019&story=527758897&t=podcast&e=527758897&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2261",
      isoDate: "2017-05-10T14:06:00.000Z"
    },
    {
      id: "14fc45c1-aaf2-4b94-848d-083477e219d4",
      title: "Feist, Beth Ditto, Frankie Cosmos, Rostam, More",
      content:
        'Hosts Bob Boilen and Robin Hilton are joined by NPR Music\'s Lars Gotrich to share the week\'s best new music, including another cut from Sufjan Stevens\' Planetarium collaboration and Feist: 1. Sufjan Stevens, Bryce Dessner, Nico Muhly & James McAlister: "Mercury," 2. Feist: "A Man Is Not His Song," 3. Rostam: "Gwan," 4. You\'ll Never Get To Heaven: "Rain Copy," 5. Frankie Cosmos: "Fish Bowl" (cover of a Kero Kero Bonito song), 6. Beth Ditto: "Fire"',
      contentSnippet:
        'Hosts Bob Boilen and Robin Hilton are joined by NPR Music\'s Lars Gotrich to share the week\'s best new music, including another cut from Sufjan Stevens\' Planetarium collaboration and Feist: 1. Sufjan Stevens, Bryce Dessner, Nico Muhly & James McAlister: "Mercury," 2. Feist: "A Man Is Not His Song," 3. Rostam: "Gwan," 4. You\'ll Never Get To Heaven: "Rain Copy," 5. Frankie Cosmos: "Fish Bowl" (cover of a Kero Kero Bonito song), 6. Beth Ditto: "Fire"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/05/20170505_asc_ascmay3fixed.mp3?awCollectionId=510019&awEpisodeId=527130277&orgId=1&d=2285&p=510019&story=527130277&t=podcast&e=527130277&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2285",
      isoDate: "2017-05-06T02:22:00.000Z"
    },
    {
      id: "82673f26-7855-4b03-ad32-ee00c7c601fc",
      title:
        "The Decemberists' Colin Meloy & Olivia Chaney Talk About New Collaboration, Reimagining British Folk",
      content:
        "If you've never found a way to experience the bliss and tragedy of traditional British folk music, this is your chance. <em>The Queen of Hearts</em> is a stunning new album by Offa Rex, the project of English singer Olivia Chaney and The Decemberists. It's a record The Decemberists' leader Colin Meloy has wanted to make for years, to honor that great British tradition and also the way bands in the '60s and '70s, like Fairport Convention and Steeleye Span, rocked it. On this edition of <em>All Songs Considered</em>, a transatlantic conversation with Offa Rex's Olivia Chaney and Colin Meloy. Both artists are well-versed in the folk tradition — easily identified in Colin's writing with The Decemberists — something he learned as a young lad growing up in Helena, Montana, while Chaney came to it through studying voice and piano in Oxford, England. On <em>The Queen of Hearts</em>, produced by Oregon-based producer Tucker Martine, you'll hear their unique takes on classic records from Anne Briggs, Martin Carthy, Ewan MacColl, Phoebe Smith, June Tabor and more.",
      contentSnippet:
        "If you've never found a way to experience the bliss and tragedy of traditional British folk music, this is your chance. The Queen of Hearts is a stunning new album by Offa Rex, the project of English singer Olivia Chaney and The Decemberists. It's a record The Decemberists' leader Colin Meloy has wanted to make for years, to honor that great British tradition and also the way bands in the '60s and '70s, like Fairport Convention and Steeleye Span, rocked it. On this edition of All Songs Considered, a transatlantic conversation with Offa Rex's Olivia Chaney and Colin Meloy. Both artists are well-versed in the folk tradition — easily identified in Colin's writing with The Decemberists — something he learned as a young lad growing up in Helena, Montana, while Chaney came to it through studying voice and piano in Oxford, England. On The Queen of Hearts, produced by Oregon-based producer Tucker Martine, you'll hear their unique takes on classic records from Anne Briggs, Martin Carthy, Ewan MacColl, Phoebe Smith, June Tabor and more.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/05/20170505_asc_offarex_20170505.mp3?awCollectionId=510019&awEpisodeId=527053982&orgId=1&d=2875&p=510019&story=527053982&t=podcast&e=527053982&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2875",
      isoDate: "2017-05-05T15:24:00.000Z"
    },
    {
      id: "fdf30027-6f69-4040-ba68-380eef031c8d",
      title:
        "The War On Drugs, Shakey Graves, Mr. Mitch, The Mountain Goats, More",
      content:
        'Special guests from the NPR Music team join All Songs Considered this week to share some of their favorite releases from April: 1. Shakey Graves: "Nobody\'s Fool," 2. Elliot Moss: "99," 3. Orgone: "I Sold My Heart To The Junkman," 4. The Mountain Goats: "Rain In Soho," 5. GAS: "Narkopop No. 4," 6. Trio Mediaeval: "Morgunstjarna," 7. The War On Drugs: "Thinking Of A Place',
      contentSnippet:
        'Special guests from the NPR Music team join All Songs Considered this week to share some of their favorite releases from April: 1. Shakey Graves: "Nobody\'s Fool," 2. Elliot Moss: "99," 3. Orgone: "I Sold My Heart To The Junkman," 4. The Mountain Goats: "Rain In Soho," 5. GAS: "Narkopop No. 4," 6. Trio Mediaeval: "Morgunstjarna," 7. The War On Drugs: "Thinking Of A Place',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/04/20170426_asc_asf.mp3?awCollectionId=510019&awEpisodeId=525849533&orgId=1&d=4040&p=510019&story=525849533&t=podcast&e=525849533&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "4040",
      isoDate: "2017-04-27T11:52:00.000Z"
    },
    {
      id: "3c635385-4531-47f8-be93-e639e9c6779e",
      title: "Kendrick Lamar, Weed, Gems, Cigarettes After Sex, More",
      content:
        'This week\'s essential new music mix includes the remarkable story of Kendrick Lamar\'s rise, supremely fuzzy garage rock from Weed, the dream pop duo Gems and more. 1. Kendrick Lamar: "DUCKWORTH.," 2. Adam Torres: "I Came To Sing," 3. Cigarettes After Sex: "K.," 4. Weed: "Are We Cool?," 5. Terror Pigeon: "Chamber Of Secrets For 1," 6. Ratboys: "Control," 7. GEMS: "Poison"',
      contentSnippet:
        'This week\'s essential new music mix includes the remarkable story of Kendrick Lamar\'s rise, supremely fuzzy garage rock from Weed, the dream pop duo Gems and more. 1. Kendrick Lamar: "DUCKWORTH.," 2. Adam Torres: "I Came To Sing," 3. Cigarettes After Sex: "K.," 4. Weed: "Are We Cool?," 5. Terror Pigeon: "Chamber Of Secrets For 1," 6. Ratboys: "Control," 7. GEMS: "Poison"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/04/20170418_asc_01.mp3?awCollectionId=510019&awEpisodeId=524562689&orgId=1&d=3075&p=510019&story=524562689&t=podcast&e=524562689&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3075",
      isoDate: "2017-04-18T19:28:00.000Z"
    },
    {
      id: "59fabcd6-31cd-4543-ac39-7e0be56ef082",
      title:
        "Todd Rundgren On Technology, Creativity And His New Song With Trent Reznor",
      content:
        "Today on <em>All Songs Considered</em>, a conversation with Todd Rundgren — who has been recording music for almost 50 years! His first recordings came in 1968 with his band Nazz, before he began making his own groundbreaking pop albums. Those early solo albums — especially <em>Something/Anything, </em><em>A Wizard, A True Star — </em>always stretched the boundaries of what a solo artist can do with the technology of the day. He was also — and primarily, in terms of employment, he told us — a lucrative and creative producer for Badfinger, Grand Funk Railroad, The Band, The New York Dolls, Hall & Oates, Sparks, Meatloaf, XTC... the list is quite long.",
      contentSnippet:
        "Today on All Songs Considered, a conversation with Todd Rundgren — who has been recording music for almost 50 years! His first recordings came in 1968 with his band Nazz, before he began making his own groundbreaking pop albums. Those early solo albums — especially Something/Anything, A Wizard, A True Star — always stretched the boundaries of what a solo artist can do with the technology of the day. He was also — and primarily, in terms of employment, he told us — a lucrative and creative producer for Badfinger, Grand Funk Railroad, The Band, The New York Dolls, Hall & Oates, Sparks, Meatloaf, XTC... the list is quite long.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/04/20170413_asc_todd.mp3?awCollectionId=510019&awEpisodeId=523747705&orgId=1&d=1644&p=510019&story=523747705&t=podcast&e=523747705&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1644",
      isoDate: "2017-04-13T14:16:00.000Z"
    },
    {
      id: "c771b878-14f1-4022-8b2e-335c2915559f",
      title: "+1: A Conversation With Matt Martians And Syd Of The Internet",
      content:
        "Timmhotep Aku is an NPR Music contributor and occasional guest host for our +1 podcasts. This week he talks with Matt Martians and Syd of the soul band The Internet.",
      contentSnippet:
        "Timmhotep Aku is an NPR Music contributor and occasional guest host for our +1 podcasts. This week he talks with Matt Martians and Syd of the soul band The Internet.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/04/20170412_asc_theinternetfinalwithintro.mp3?awCollectionId=510019&awEpisodeId=523621941&orgId=1&d=2405&p=510019&story=523621941&t=podcast&e=523621941&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2405",
      isoDate: "2017-04-12T19:23:00.000Z"
    },
    {
      id: "523bc7f0-f72c-400b-be0f-73b9ad2f39cf",
      title: "San Fermin, Andrew Combs, A Johnny Cash Mashup, More",
      content:
        'We\'ve often joked on the show about the virtual circus that\'s endlessly unfolding in Bob Boilen\'s brain, where his childlike imagination dances to the sound of a whistling calliope. So, for Bob\'s birthday this week, it felt appropriate to begin our show with nearly seven-foot tall clown named Puddles who sings a surreal mashup of Johnny Cash\'s "Folsom City Blues" and The Who\'s "Pinball Wizard." We\'re not making this up. It turns out that, apart from singing, Puddles never speaks, so we gave his assistant and interpreter Mike Geier a call to learn more about how this crazy mashup came to be. We\'ve also got a blistering country rock cut from singer Andrew Combs, who gets political on a song called "Bourgeois King." The baroque pop of San Fermin gets bigger than ever on the band\'s new full-length, <em>Belong</em>; the Paris-based singer known as ALA.NI croons like it\'s the 1940s; and NPR Music\'s Lars Gotrich stops by to blow our minds (and ear drums) with the scorching punk of a band called Exit Order, tempered by the hypnotic jazz of Joshua Abrams and Natural Information Society. 1. Puddles Pity Party: "Folsom Prison Blues/Pinball Wizard," 2. Andrew Combs: "Bourgeois King," 3. Joshua Abrams And Natural Information Society: "Sideways Fall," 4. Exit Order: "Mass Panic," 5. Ala.Ni: "Cherry Blossoms," 6. San Fermin: "Oceanica"',
      contentSnippet:
        'We\'ve often joked on the show about the virtual circus that\'s endlessly unfolding in Bob Boilen\'s brain, where his childlike imagination dances to the sound of a whistling calliope. So, for Bob\'s birthday this week, it felt appropriate to begin our show with nearly seven-foot tall clown named Puddles who sings a surreal mashup of Johnny Cash\'s "Folsom City Blues" and The Who\'s "Pinball Wizard." We\'re not making this up. It turns out that, apart from singing, Puddles never speaks, so we gave his assistant and interpreter Mike Geier a call to learn more about how this crazy mashup came to be. We\'ve also got a blistering country rock cut from singer Andrew Combs, who gets political on a song called "Bourgeois King." The baroque pop of San Fermin gets bigger than ever on the band\'s new full-length, Belong; the Paris-based singer known as ALA.NI croons like it\'s the 1940s; and NPR Music\'s Lars Gotrich stops by to blow our minds (and ear drums) with the scorching punk of a band called Exit Order, tempered by the hypnotic jazz of Joshua Abrams and Natural Information Society. 1. Puddles Pity Party: "Folsom Prison Blues/Pinball Wizard," 2. Andrew Combs: "Bourgeois King," 3. Joshua Abrams And Natural Information Society: "Sideways Fall," 4. Exit Order: "Mass Panic," 5. Ala.Ni: "Cherry Blossoms," 6. San Fermin: "Oceanica"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/04/20170411_asc_april11.mp3?awCollectionId=510019&awEpisodeId=523428164&orgId=1&d=2657&p=510019&story=523428164&t=podcast&e=523428164&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2657",
      isoDate: "2017-04-11T17:40:00.000Z"
    },
    {
      id: "af9e241e-ae2d-47e3-b6b3-77afc1fbb854",
      title:
        "Son Lux, Big Thief, Public Service Broadcasting, Walter Martin, More",
      content:
        'Hosts Bob Boilen and Robin Hilton share their favorite songs of the week, including premieres from Elf Power and Big Thief, plus new music from The Walkmen\'s Walter Martin, Son Lux and more: 1. Elf Power: "Watery Shreds," 2. Big Thief: "Mythological Beauty," 3. Walter Martin: "Hey Matt," 4. Scout Pare-Phillips: "Door Left Open," 5. Lydia Ainsworth: "WLCM," 6. Public Service Broadcasting, "Progress," 7. "Ryan Lott/Son Lux: "The Drowning Trough," 8. Diet Cig: "Sixteen"',
      contentSnippet:
        'Hosts Bob Boilen and Robin Hilton share their favorite songs of the week, including premieres from Elf Power and Big Thief, plus new music from The Walkmen\'s Walter Martin, Son Lux and more: 1. Elf Power: "Watery Shreds," 2. Big Thief: "Mythological Beauty," 3. Walter Martin: "Hey Matt," 4. Scout Pare-Phillips: "Door Left Open," 5. Lydia Ainsworth: "WLCM," 6. Public Service Broadcasting, "Progress," 7. "Ryan Lott/Son Lux: "The Drowning Trough," 8. Diet Cig: "Sixteen"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/04/20170404_asc_wholeshow3.mp3?awCollectionId=510019&awEpisodeId=522618365&orgId=1&d=3283&p=510019&story=522618365&t=podcast&e=522618365&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3283",
      isoDate: "2017-04-04T19:06:00.000Z"
    },
    {
      id: "a9cbbb95-d829-440b-88a3-1a611616e60f",
      title: "+1: Comedian Neal Brennan Of 'Chappelle's Show' And '3 Mics'",
      content:
        "Timmhotep Aku is an occasional NPR Music contributor and guest host for our +1 podcasts. This week he talks with writer, comedian and hip-hop lover Neal Brennan. Comedy and hip-hop have a lot in common: Both are balms for the sting of the everyday struggle and both hold up a mirror to society's excesses, absurdities, and injustices. These two worlds come together in the work of writer and comedian Neal Brennan.As the co-creator of Chappelle's Show, he and his writing partner, Dave Chappelle created skits that were funny and provocative with a hip-hop sensibility. They lampooned rap stars like Lil' Jon and Sean \"Puffy\" Combs, while featuring artists like Kanye West, Common and The Roots as musical guests. In fact, when Jimmy Fallon was handed the reins of the Tonight Show Brennan was the one who recommended The Roots for the show's house band.In the decade after Chappelle's sudden departure and the end of the the show, Brennan's continued to work as a stand-up comic, writer, and director. On this week's +1 podcast, I talk with Brennan about his Netflix special and one-man show 3 Mics and some of the songs that have inspired what he calls the \"stand up, one-liners and emotional stuff\" seen on the show. Along the way, Brennan dispels some myths and gives insight on just who the man behind the mic is.",
      contentSnippet:
        "Timmhotep Aku is an occasional NPR Music contributor and guest host for our +1 podcasts. This week he talks with writer, comedian and hip-hop lover Neal Brennan. Comedy and hip-hop have a lot in common: Both are balms for the sting of the everyday struggle and both hold up a mirror to society's excesses, absurdities, and injustices. These two worlds come together in the work of writer and comedian Neal Brennan.As the co-creator of Chappelle's Show, he and his writing partner, Dave Chappelle created skits that were funny and provocative with a hip-hop sensibility. They lampooned rap stars like Lil' Jon and Sean \"Puffy\" Combs, while featuring artists like Kanye West, Common and The Roots as musical guests. In fact, when Jimmy Fallon was handed the reins of the Tonight Show Brennan was the one who recommended The Roots for the show's house band.In the decade after Chappelle's sudden departure and the end of the the show, Brennan's continued to work as a stand-up comic, writer, and director. On this week's +1 podcast, I talk with Brennan about his Netflix special and one-man show 3 Mics and some of the songs that have inspired what he calls the \"stand up, one-liners and emotional stuff\" seen on the show. Along the way, Brennan dispels some myths and gives insight on just who the man behind the mic is.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170329_asc_nealbrennan.mp3?awCollectionId=510019&awEpisodeId=521951704&orgId=1&d=1953&p=510019&story=521951704&t=podcast&e=521951704&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1953",
      isoDate: "2017-03-30T10:00:08.000Z"
    },
    {
      id: "4f07a12b-8a18-4161-9b90-0502180a4a40",
      title: "Sufjan Stevens, Gorillaz, Perfume Genius, More ",
      content:
        'On this week\'s show co-host Robin Hilton manages to heave himself off of the floor (after his beloved Kansas Jayhawks lost in the NCAA tournament AGAIN) long enough to hit the play button on some phenomenal new music. Host Bob Boilen and World Cafe host Talia Schlanger try to cheer him up: 1. Perfume Genius: "Slip Away," 2. Sufjan Stevens, Nico Muhly, Bryce Dessner and James McAlister: "Saturn," 3. Gorillaz: "We Got The Power," 4. The Family Crest: "Mirror Love," 5. Hippo Campus: "Monsoon," 6. Kevin Morby: "Come To Me Now," 7. Teen Daze: "Dream City," 8. Alexander F: "You\'re Such A Kill"',
      contentSnippet:
        'On this week\'s show co-host Robin Hilton manages to heave himself off of the floor (after his beloved Kansas Jayhawks lost in the NCAA tournament AGAIN) long enough to hit the play button on some phenomenal new music. Host Bob Boilen and World Cafe host Talia Schlanger try to cheer him up: 1. Perfume Genius: "Slip Away," 2. Sufjan Stevens, Nico Muhly, Bryce Dessner and James McAlister: "Saturn," 3. Gorillaz: "We Got The Power," 4. The Family Crest: "Mirror Love," 5. Hippo Campus: "Monsoon," 6. Kevin Morby: "Come To Me Now," 7. Teen Daze: "Dream City," 8. Alexander F: "You\'re Such A Kill"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170328_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=521802806&orgId=1&d=3230&p=510019&story=521802806&t=podcast&e=521802806&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3230",
      isoDate: "2017-03-28T17:19:00.000Z"
    },
    {
      id: "0e2b0ba3-a126-49a0-9f50-c44da1140bfb",
      title:
        "+1 How Lenny Kaye, The Godfather Of Garage Rock, Illuminated 'The Psalms'",
      content:
        "Lenny Kaye is an elemental force in music and a spiritually attuned diviner of sounds. On this episode, he walks us through his process and his inspirations including producing the new album by Jessi Colter",
      contentSnippet:
        "Lenny Kaye is an elemental force in music and a spiritually attuned diviner of sounds. On this episode, he walks us through his process and his inspirations including producing the new album by Jessi Colter",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170324_asc_lennykaye2.mp3?awCollectionId=510019&awEpisodeId=521324856&orgId=1&d=2534&p=510019&story=521324856&t=podcast&e=521324856&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2534",
      isoDate: "2017-03-24T03:47:00.000Z"
    },
    {
      id: "b921a9e0-2eba-477a-b3bc-50f49f709622",
      title: "Why SXSW Matters: The Best Of What We Saw, 2017",
      content:
        'SXSW isn\'t a rock festival, a hip-hop festival or a global music festival — it\'s a big bundle of everything rolled into five spring-warm Texas days. For artists, the choice to attend can be an expensive risk, traveling from Taiwan, Mebourne, Brixton, Brazil, or Italy hoping to be seen and heard. But sometimes it pays off. We go there to find music we\'re unlikely to see in our own backyard, find something thrilling, then shout out our fervent support. 1. Fragile Rock: "Stay Felt (Live)," 2. Hard Proof: "Stinger," 3. Lizzo: "Worship (Live)," 4. Anna Meredith: "The Vapours," 5. Let\'s Eat Grandma: "Deep Six Textbook (Live)," 6. Grandaddy: "The Boat Is In The Barn," 7. Frances Cone: "Arizona," 8. Calliope Musicals: "1604," 9. Aldous Harding: "Imagining My Man," 10. Tribu Baharú: "Made In Tribu Baharú," 11. Allison Crutchfield: "Chopsticks On Pots And Pans," 12. Phoebe Brigers: "Smoke Signals," 13. Shame: "The Lick"',
      contentSnippet:
        'SXSW isn\'t a rock festival, a hip-hop festival or a global music festival — it\'s a big bundle of everything rolled into five spring-warm Texas days. For artists, the choice to attend can be an expensive risk, traveling from Taiwan, Mebourne, Brixton, Brazil, or Italy hoping to be seen and heard. But sometimes it pays off. We go there to find music we\'re unlikely to see in our own backyard, find something thrilling, then shout out our fervent support. 1. Fragile Rock: "Stay Felt (Live)," 2. Hard Proof: "Stinger," 3. Lizzo: "Worship (Live)," 4. Anna Meredith: "The Vapours," 5. Let\'s Eat Grandma: "Deep Six Textbook (Live)," 6. Grandaddy: "The Boat Is In The Barn," 7. Frances Cone: "Arizona," 8. Calliope Musicals: "1604," 9. Aldous Harding: "Imagining My Man," 10. Tribu Baharú: "Made In Tribu Baharú," 11. Allison Crutchfield: "Chopsticks On Pots And Pans," 12. Phoebe Brigers: "Smoke Signals," 13. Shame: "The Lick"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170321_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=520988716&orgId=1&d=3281&p=510019&story=520988716&t=podcast&e=520988716&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3281",
      isoDate: "2017-03-21T19:14:00.000Z"
    },
    {
      id: "95d5f76b-3968-437a-832a-ada13b785fb2",
      title: "SXSW Late-Night Dispatch: Saturday",
      content:
        "SXSW Late-Night Dispatch: Saturday Our final day at this great music festival leaves on me (Bob Boilen) and Stephen Thompson standing to talk about our discoveries for SXSW 2017",
      contentSnippet:
        "SXSW Late-Night Dispatch: Saturday Our final day at this great music festival leaves on me (Bob Boilen) and Stephen Thompson standing to talk about our discoveries for SXSW 2017",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170319_asc_day5.mp3?awCollectionId=510019&awEpisodeId=519974047&orgId=1&d=410&p=510019&story=519974047&t=podcast&e=519974047&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "410",
      isoDate: "2017-03-19T08:19:00.000Z"
    },
    {
      id: "1805efc2-82cc-4402-888b-af3328d255b6",
      title: "SXSW Late-Night Dispatch: Friday",
      content:
        "Bob Boilen, Robin Hilton, Stephen Thompson and Colorado Public Radio's Jessi Whitten convened on an Austin street corner Friday night to recap their favorite moments of the day.",
      contentSnippet:
        "Bob Boilen, Robin Hilton, Stephen Thompson and Colorado Public Radio's Jessi Whitten convened on an Austin street corner Friday night to recap their favorite moments of the day.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170318_asc_fridaydispatch.mp3?awCollectionId=510019&awEpisodeId=519973978&orgId=1&d=1168&p=510019&story=519973978&t=podcast&e=519973978&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1168",
      isoDate: "2017-03-18T15:14:00.000Z"
    },
    {
      id: "1e6d6370-c955-4a91-b692-cb5249383898",
      title: "SXSW Late-Night Dispatch: Thursday",
      content:
        "SXSW Late-Night Dispatch: Thursday - where bob is chased by a nearly naked man screaming to 'forgive yourself!' and where Robin Hilton, Stephen Thompson and Katie Presley talk about music that thrilled them.",
      contentSnippet:
        "SXSW Late-Night Dispatch: Thursday - where bob is chased by a nearly naked man screaming to 'forgive yourself!' and where Robin Hilton, Stephen Thompson and Katie Presley talk about music that thrilled them.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170317_asc_day3_.mp3?awCollectionId=510019&awEpisodeId=519973897&orgId=1&d=1143&p=510019&story=519973897&t=podcast&e=519973897&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1143",
      isoDate: "2017-03-17T09:09:00.000Z"
    },
    {
      id: "3114e0c6-bc84-45d6-9a4a-e516104320f4",
      title: "SXSW Late-Night Dispatch: Wednesday",
      content:
        "On this second full day at SXSW, Bob Boilen, Robin Hilton and Stephen Thompson talk about the music they saw in Austin including bands from the NPR Music showcase featuring PWR BTTM Sylvan Esso, Lizzo, Hurray for the Riff Raff, Big Thief and The New Pornographers.",
      contentSnippet:
        "On this second full day at SXSW, Bob Boilen, Robin Hilton and Stephen Thompson talk about the music they saw in Austin including bands from the NPR Music showcase featuring PWR BTTM Sylvan Esso, Lizzo, Hurray for the Riff Raff, Big Thief and The New Pornographers.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170316_asc_day2dispatch.mp3?awCollectionId=510019&awEpisodeId=519973733&orgId=1&d=934&p=510019&story=519973733&t=podcast&e=519973733&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "934",
      isoDate: "2017-03-16T10:08:00.000Z"
    },
    {
      id: "8cd20108-1254-4727-9942-5b736fcd970e",
      title: "SXSW Late-Night Dispatch: Tuesday",
      content:
        "On Day 1 of SXSW 2017, Bob Boilen, Robin Hilton and Stephen Thompson gather at 2 a.m. to talk about favorite moments from Tuesday.",
      contentSnippet:
        "On Day 1 of SXSW 2017, Bob Boilen, Robin Hilton and Stephen Thompson gather at 2 a.m. to talk about favorite moments from Tuesday.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170315_asc_wednesdaydispatch2.mp3?awCollectionId=510019&awEpisodeId=519973153&orgId=1&d=720&p=510019&story=519973153&t=podcast&e=519973153&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "720",
      isoDate: "2017-03-15T12:06:00.000Z"
    },
    {
      id: "358202f1-404f-4e0f-b259-e939455cb759",
      title: "+1 Hey Bands, Why T-Shirts Matter, A Martin Atkins Minute",
      content:
        "Funny man, former PIL drummer and music business advisor Martin Atkins looks at SXSW from a band perspective. It's the T-shirt that counts.",
      contentSnippet:
        "Funny man, former PIL drummer and music business advisor Martin Atkins looks at SXSW from a band perspective. It's the T-shirt that counts.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170314_asc_martinatkinssxsw.mp3?awCollectionId=510019&awEpisodeId=519943025&orgId=1&d=360&p=510019&story=519943025&t=podcast&e=519943025&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "360",
      isoDate: "2017-03-14T12:00:19.000Z"
    },
    {
      id: "65984c2b-5337-47e0-a51c-92cdfa08520c",
      title: "SXSW 2017 Preview",
      content:
        "For music lovers, South By Southwest can feel like Christmas, Mardi Gras, Spring Break and March Madness rolled into one. Spread out over five days and nights in Austin, Texas, it's a thrilling and exhausting musical endurance challenge, with fans often seeing upwards of 100 shows before the week is through. This week on <em>All Songs Considered</em>, hosts Bob Boilen and Robin Hilton are joined by NPR Music's Stephen Thompson to share and discuss some of the artists they're most excited to see and hear as this year's festival kicks off.",
      contentSnippet:
        "For music lovers, South By Southwest can feel like Christmas, Mardi Gras, Spring Break and March Madness rolled into one. Spread out over five days and nights in Austin, Texas, it's a thrilling and exhausting musical endurance challenge, with fans often seeing upwards of 100 shows before the week is through. This week on All Songs Considered, hosts Bob Boilen and Robin Hilton are joined by NPR Music's Stephen Thompson to share and discuss some of the artists they're most excited to see and hear as this year's festival kicks off.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170313_asc_sxsw2017preview3.mp3?awCollectionId=510019&awEpisodeId=519976050&orgId=1&d=4420&p=510019&story=519976050&t=podcast&e=519976050&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "4420",
      isoDate: "2017-03-13T13:57:00.000Z"
    },
    {
      id: "d1155f94-b805-42d8-bff7-24d8098b2691",
      title:
        "+1: Remembering Elliott Smith's Masterpiece, 'Either/Or,' 20 Years Later",
      content:
        "This year marks the 20th anniversary of what many consider Elliott Smith's best album, <em>Either/Or</em>. To mark the occasion, Kill Rock Stars is releasing an expanded version of the late singer's record, with remastered versions of the original songs, live recordings and previously unreleased bonus tracks. On this week's All Songs Considered +1 podcast, host Robin Hilton talks with Smith's longtime friend, engineer and archivist for Smith's estate, Larry Crane. He's the one who put together the deluxe version of <em>Either/Or</em>. Through the course of the conversation, he shared a lot of personal memories about Smith, about his warmth and playful sense of humor, his feverish work pace and what it was like to be in the studio together.",
      contentSnippet:
        "This year marks the 20th anniversary of what many consider Elliott Smith's best album, Either/Or. To mark the occasion, Kill Rock Stars is releasing an expanded version of the late singer's record, with remastered versions of the original songs, live recordings and previously unreleased bonus tracks. On this week's All Songs Considered +1 podcast, host Robin Hilton talks with Smith's longtime friend, engineer and archivist for Smith's estate, Larry Crane. He's the one who put together the deluxe version of Either/Or. Through the course of the conversation, he shared a lot of personal memories about Smith, about his warmth and playful sense of humor, his feverish work pace and what it was like to be in the studio together.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170310_asc_larrycrane.mp3?awCollectionId=510019&awEpisodeId=519683275&orgId=1&d=1968&p=510019&story=519683275&t=podcast&e=519683275&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1968",
      isoDate: "2017-03-10T19:12:00.000Z"
    },
    {
      id: "4ff514d2-9f6c-48f0-b61c-604f011cde20",
      title: "Alt-J, Elliott Smith, The New Pornographers, Girlpool, More",
      content:
        'When we sat down to record this week\'s podcast, we were a little bleary-eyed after staying up late the night before to see the The Flaming Lips\' show at the 9:30 Club here in Washington, D.C. But — between the band\'s confetti cannons, laser light show and the electric, rainbow-colored unicorn that frontman Wayne Coyne rode into the audience (we\'re not making that up) — it was well worth the loss of sleep.Regardless of our bleary eyes, we come to the table charged and ready to share the new music we\'re excited about this week: 1. alt-J: "3WW," 2. Girlpool: "123," 3. Hiccup: "Neverwhere," 4. The New Pornographers: "High Ticket Attractions," 5. The Magnetic Fields: "\'81: How To Play The Synthesizer," 6. Joan Shelley: "Wild Indifference," 7.Elliott Smith: "No Name No. 5 (Remastered)," 8. Frank Turner: "The Sand In The Gears (Live)"',
      contentSnippet:
        'When we sat down to record this week\'s podcast, we were a little bleary-eyed after staying up late the night before to see the The Flaming Lips\' show at the 9:30 Club here in Washington, D.C. But — between the band\'s confetti cannons, laser light show and the electric, rainbow-colored unicorn that frontman Wayne Coyne rode into the audience (we\'re not making that up) — it was well worth the loss of sleep.Regardless of our bleary eyes, we come to the table charged and ready to share the new music we\'re excited about this week: 1. alt-J: "3WW," 2. Girlpool: "123," 3. Hiccup: "Neverwhere," 4. The New Pornographers: "High Ticket Attractions," 5. The Magnetic Fields: "\'81: How To Play The Synthesizer," 6. Joan Shelley: "Wild Indifference," 7.Elliott Smith: "No Name No. 5 (Remastered)," 8. Frank Turner: "The Sand In The Gears (Live)"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170307_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=519027933&orgId=1&d=3157&p=510019&story=519027933&t=podcast&e=519027933&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3157",
      isoDate: "2017-03-07T17:52:00.000Z"
    },
    {
      id: "78d49a39-f107-4b95-af6d-97e861c6d131",
      title: "+1: Resistance Radio: Darkly Reimagining The '60s Sound",
      content:
        "A conversation with musician/producer Danger Mouse (aka Brian Burton) about creating an album inspired by an alternative universe in which Germany and Japan win World War II.",
      contentSnippet:
        "A conversation with musician/producer Danger Mouse (aka Brian Burton) about creating an album inspired by an alternative universe in which Germany and Japan win World War II.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/03/20170303_asc_brian.mp3?awCollectionId=510019&awEpisodeId=518341253&orgId=1&d=1868&p=510019&story=518341253&t=podcast&e=518341253&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1868",
      isoDate: "2017-03-03T16:19:00.000Z"
    },
    {
      id: "c19a380f-8e60-4217-94d9-2e00cffe96c7",
      title: "Our Tiny Desk Contest Winner, Land Of Talk, Juana Molina, More ",
      content:
        'We kick this week\'s show off with the wild ride that is Tank And The Bangas, our unanimous pick to win this year\'s Tiny Desk Contest. They\'re from New Orleans and have the kind of playful, infectious energy that makes a band impossible to miss. You can hear their winning song, "Quick," in our podcast — but to really appreciate how special they are, you should head to our site and watch their winning video. We\'re also joined on the show by one of the judges for this year\'s contest, and the newly named host for WXPN\'s World Cafe, Talia Schlanger. Talia talks about what it was like watching the Tiny Desk contest entries and shares new music from the \'90s shoegaze group Ride. We\'ve also got long-awaited new music from the Canadian rock group Land Of Talk. After a stunning debut in 2010, the band largely disappeared, but frontwoman Elizabeth Powell has finally returned with a worthy followup, <em>Life After Youth</em>. We\'ve got the first single from it, a beautiful ode to self-determination called "Inner Love."Also on the show: Bob drops a surprising new release from the Argentine singer and electronic musician Juana Molina; multi-instrumentalist Jay Som and the New York-by-way-of-Camaroon singer known as Vagabon both have new albums that perfectly blend wistful meditations with fuzzy guitars; and NPR Music\'s Marissa Lorusso stops by the studio to share a fantastic new cut by Bellows. 1. Tank And The Bangas: "Quick," 2. Land Of Talk: "Inner Lover," 3. Bellows: "Broken Skin," 4. Juana Molina: "Cosoco," 5. Ride: "Home Is A Feeling," 6. Vagabon: "100 years," 7. Jay Som, "1 Billion Dogs"',
      contentSnippet:
        'We kick this week\'s show off with the wild ride that is Tank And The Bangas, our unanimous pick to win this year\'s Tiny Desk Contest. They\'re from New Orleans and have the kind of playful, infectious energy that makes a band impossible to miss. You can hear their winning song, "Quick," in our podcast — but to really appreciate how special they are, you should head to our site and watch their winning video. We\'re also joined on the show by one of the judges for this year\'s contest, and the newly named host for WXPN\'s World Cafe, Talia Schlanger. Talia talks about what it was like watching the Tiny Desk contest entries and shares new music from the \'90s shoegaze group Ride. We\'ve also got long-awaited new music from the Canadian rock group Land Of Talk. After a stunning debut in 2010, the band largely disappeared, but frontwoman Elizabeth Powell has finally returned with a worthy followup, Life After Youth. We\'ve got the first single from it, a beautiful ode to self-determination called "Inner Love."Also on the show: Bob drops a surprising new release from the Argentine singer and electronic musician Juana Molina; multi-instrumentalist Jay Som and the New York-by-way-of-Camaroon singer known as Vagabon both have new albums that perfectly blend wistful meditations with fuzzy guitars; and NPR Music\'s Marissa Lorusso stops by the studio to share a fantastic new cut by Bellows. 1. Tank And The Bangas: "Quick," 2. Land Of Talk: "Inner Lover," 3. Bellows: "Broken Skin," 4. Juana Molina: "Cosoco," 5. Ride: "Home Is A Feeling," 6. Vagabon: "100 years," 7. Jay Som, "1 Billion Dogs"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/02/20170228_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=517724583&orgId=1&d=2681&p=510019&story=517724583&t=podcast&e=517724583&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2681",
      isoDate: "2017-02-28T16:35:00.000Z"
    },
    {
      id: "699ef732-72ac-40f0-a23b-65ba052bd219",
      title:
        "Lana Del Rey, Bonnie 'Prince' Billy, Colin Stetson, Penguin Cafe, More",
      content:
        'On this week\'s show: Music to cleanse the brain! 1. Shogu Tokumaru: "Lita-Ruta," 2. Penguin Cafe: "Contorum," 3. Tom Adams: "Sparks," 4. Lana Del Rey: "Love," 5. Violents & Monica Martin: "How It Left," 6. Bonnie "Prince" Billy: "Treasure Map," 7. Colin Stetson: "Spindrift"',
      contentSnippet:
        'On this week\'s show: Music to cleanse the brain! 1. Shogu Tokumaru: "Lita-Ruta," 2. Penguin Cafe: "Contorum," 3. Tom Adams: "Sparks," 4. Lana Del Rey: "Love," 5. Violents & Monica Martin: "How It Left," 6. Bonnie "Prince" Billy: "Treasure Map," 7. Colin Stetson: "Spindrift"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/02/20170221_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=516478063&orgId=1&d=3375&p=510019&story=516478063&t=podcast&e=516478063&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3375",
      isoDate: "2017-02-21T20:04:00.000Z"
    },
    {
      id: "2b8ce5df-309e-400c-8070-089671ad0ff5",
      title: "Guest DJ: Ryan Adams",
      content:
        "Ahead of the release of his newest record, Ryan Adams sits down with NPR Music's Bob Boilen to consider his favorite love songs, including Springsteen, Dylan and Sonic Youth.",
      contentSnippet:
        "Ahead of the release of his newest record, Ryan Adams sits down with NPR Music's Bob Boilen to consider his favorite love songs, including Springsteen, Dylan and Sonic Youth.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/02/20170214_asc_ryan.mp3?awCollectionId=510019&awEpisodeId=515255479&orgId=1&d=3195&p=510019&story=515255479&t=podcast&e=515255479&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3195",
      isoDate: "2017-02-14T21:39:00.000Z"
    },
    {
      id: "042701f4-4c74-4eb0-bcd9-67bef7aea4b6",
      title: "Future Islands, The Black Angels, David Bazan, Jacaszek, More",
      content:
        'It\'s starting to feel like every show this year is going to have music inspired or shaped in some way by social and political unrest. This week, that means a dark and gritty new cut about greed and corruption from The Black Angels, and singer David Bazan\'s (relatively) uplifting plea for empathy in his new song, "Care." But we\'ve also got plenty of other music to lift you up, including the wistful but celebratory new song from Future Islands called "Ran," and an epic, shape-shifting rock cut from the Athens, Ga. band Oak House. NPR Music\'s Lars Gotrich and Marissa Lorusso stop by the studio to turn us on to a couple of their favorite new discoveries, including some pure pop joy from a New York group called Charly Bliss, and the Japanese experimental psych-rock band Sundays & Cybele. 1. Future Islands, "Ran," 2. The Black Angels, "Currency," 3. David Bazan, "Care," 4. Charly Bliss, "Glitter," 5. Sundays & Cybele, "Chaos & Systems," 6. Oak House, "Esque," 7. Jacaszek, "Soft Music," 8. Johnny Flynn, "Heart Sunk Hank."',
      contentSnippet:
        'It\'s starting to feel like every show this year is going to have music inspired or shaped in some way by social and political unrest. This week, that means a dark and gritty new cut about greed and corruption from The Black Angels, and singer David Bazan\'s (relatively) uplifting plea for empathy in his new song, "Care." But we\'ve also got plenty of other music to lift you up, including the wistful but celebratory new song from Future Islands called "Ran," and an epic, shape-shifting rock cut from the Athens, Ga. band Oak House. NPR Music\'s Lars Gotrich and Marissa Lorusso stop by the studio to turn us on to a couple of their favorite new discoveries, including some pure pop joy from a New York group called Charly Bliss, and the Japanese experimental psych-rock band Sundays & Cybele. 1. Future Islands, "Ran," 2. The Black Angels, "Currency," 3. David Bazan, "Care," 4. Charly Bliss, "Glitter," 5. Sundays & Cybele, "Chaos & Systems," 6. Oak House, "Esque," 7. Jacaszek, "Soft Music," 8. Johnny Flynn, "Heart Sunk Hank."',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/02/20170207_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=513909887&orgId=1&d=3343&p=510019&story=513909887&t=podcast&e=513909887&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3343",
      isoDate: "2017-02-07T16:48:00.000Z"
    },
    {
      id: "b09be736-341c-492c-bc7d-54555cad6f30",
      title: "Jens Lekman Wants To Sing You A Strange Story",
      content:
        "We premiere a very cheery-sounding piece of music from Swedish songwriter and singer Jens Lekman, though the story behind it is decidedly dark at the same time.",
      contentSnippet:
        "We premiere a very cheery-sounding piece of music from Swedish songwriter and singer Jens Lekman, though the story behind it is decidedly dark at the same time.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/02/20170206_asc_jens2.mp3?awCollectionId=510019&awEpisodeId=513717630&orgId=1&d=1407&p=510019&story=513717630&t=podcast&e=513717630&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1407",
      isoDate: "2017-02-06T16:31:00.000Z"
    },
    {
      id: "7ed38cb1-a80a-4a43-9867-a502fbe7d834",
      title:
        "On Horses and Beatles: A Conversation With Real Estate's Martin Courtney",
      content:
        '"I feel like this is my lane, guitar-based pop music." Martin Courtney and his band Real Estate\'s fourth album <em>In Mind</em>, takes cues from one of the great albums of all time, The Beatles <em>Abbey Road.</em>',
      contentSnippet:
        '"I feel like this is my lane, guitar-based pop music." Martin Courtney and his band Real Estate\'s fourth album In Mind, takes cues from one of the great albums of all time, The Beatles Abbey Road.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/02/20170201_asc_realestate.mp3?awCollectionId=510019&awEpisodeId=512861283&orgId=1&d=1385&p=510019&story=512861283&t=podcast&e=512861283&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1385",
      isoDate: "2017-02-01T17:05:00.000Z"
    },
    {
      id: "1211e2c7-9204-420b-a18c-655af6edd3eb",
      title: "Missy Elliott, Sampha, Mount Eerie, Young Fathers, More",
      content:
        'This episode of <em>All Songs Considered</em> covers the very ends of spectrum, from carefree celebration to soul-baring sadness. Hear new tracks by Missy Elliott, Mount Eerie, Young Fathers, and more: 1. Valley Queen, "Stars Align," 2. Mount Eerie, "Real Death," 3. Nick Hakim, "Bet She Looks Like You," 4. Missy Elliott, "I\'m Better (feat. Lamb)," 5. Young Fathers, "Only God Knows (ft. Leith Congregational Choir)," 6. A Winged Victory For The Sullen, "Metro Part Three," 7. Sampha, "(No One Knows Me) Like the Piano"',
      contentSnippet:
        'This episode of All Songs Considered covers the very ends of spectrum, from carefree celebration to soul-baring sadness. Hear new tracks by Missy Elliott, Mount Eerie, Young Fathers, and more: 1. Valley Queen, "Stars Align," 2. Mount Eerie, "Real Death," 3. Nick Hakim, "Bet She Looks Like You," 4. Missy Elliott, "I\'m Better (feat. Lamb)," 5. Young Fathers, "Only God Knows (ft. Leith Congregational Choir)," 6. A Winged Victory For The Sullen, "Metro Part Three," 7. Sampha, "(No One Knows Me) Like the Piano"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/01/20170131_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=512647740&orgId=1&d=2792&p=510019&story=512647740&t=podcast&e=512647740&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2792",
      isoDate: "2017-01-31T16:37:00.000Z"
    },
    {
      id: "cadbc6fd-d14d-42cb-9344-8185ef44b1da",
      title:
        "How Laurie Anderson And Philip Glass Were About To Change The World",
      content:
        "The performance artist reflects on Philip Glass' generous spirit, his perpetually fresh ideas and the grand experiments hatched in the lofts of SoHo in the '70s",
      contentSnippet:
        "The performance artist reflects on Philip Glass' generous spirit, his perpetually fresh ideas and the grand experiments hatched in the lofts of SoHo in the '70s",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/specials/2017/01/20170127_specials_laurie.mp3?awCollectionId=510019&awEpisodeId=512047575&orgId=1&d=1310&p=510019&story=512047575&t=podcast&e=512047575&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1310",
      isoDate: "2017-01-27T20:59:00.000Z"
    },
    {
      id: "d68ad036-2f4d-4f97-9eca-cac64c2a0a22",
      title: "While My Guitar Gently Sings: A Conversation With Delicate Steve",
      content:
        "Here's something rare these days: an instrumental guitar-rock record that's actually a joy to listen to. <em>This Is</em> <em>Steve </em>is by the artist Delicate Steve, otherwise known as Steve Marion, who plays all the instruments on this incredibly fun (and sometimes funny) album. On this episode of <em>All Songs Considered</em>, host Bob Boilen talks with Delicate Steve about the guitar music Steve loves, including music from Red Hot Chili Peppers and Sly and the Family Stone, as well as the singers who inspire his lyrical guitar styles, which he describes as \"cartoon rock.\"",
      contentSnippet:
        "Here's something rare these days: an instrumental guitar-rock record that's actually a joy to listen to. This Is Steve is by the artist Delicate Steve, otherwise known as Steve Marion, who plays all the instruments on this incredibly fun (and sometimes funny) album. On this episode of All Songs Considered, host Bob Boilen talks with Delicate Steve about the guitar music Steve loves, including music from Red Hot Chili Peppers and Sly and the Family Stone, as well as the singers who inspire his lyrical guitar styles, which he describes as \"cartoon rock.\"",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/01/20170126_asc_delicatesteve.mp3?awCollectionId=510019&awEpisodeId=511820969&orgId=1&d=2026&p=510019&story=511820969&t=podcast&e=511820969&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2026",
      isoDate: "2017-01-26T18:18:00.000Z"
    },
    {
      id: "b7f0074d-4cba-4f89-8eb9-a348c24d4751",
      title: "The Power Of Political Music and More",
      content:
        'On this week\'s <em>All Songs Considered</em>: Musicians face personal challenges, political uncertainty, the state of humanity — and rally.1) MILCK: "Quiet"2) Angel Olsen: "Fly On Your Wall"3) Charlotte Day Wilson: "Work"4) Jesca Hoop: "Memories Are Now"5) Clap Your Hands Say Yeah: "Down (Is Where I Want to Be)"6) Tim Darcy: "Still Waking Up"7) Father John Misty: "Pure Comedy"8) Overcoats: "Hold Me Close"',
      contentSnippet:
        'On this week\'s All Songs Considered: Musicians face personal challenges, political uncertainty, the state of humanity — and rally.1) MILCK: "Quiet"2) Angel Olsen: "Fly On Your Wall"3) Charlotte Day Wilson: "Work"4) Jesca Hoop: "Memories Are Now"5) Clap Your Hands Say Yeah: "Down (Is Where I Want to Be)"6) Tim Darcy: "Still Waking Up"7) Father John Misty: "Pure Comedy"8) Overcoats: "Hold Me Close"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/01/20170124_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=511482423&orgId=1&d=3110&p=510019&story=511482423&t=podcast&e=511482423&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3110",
      isoDate: "2017-01-24T22:03:00.000Z"
    },
    {
      id: "d6dc69a9-606e-4d19-afa8-a2b6e622e82f",
      title: "Songs For Hope And Change",
      content:
        "Our first new mix of 2017 features songs that are both big and hopeful, and crushingly sad, from the politically charged music of Run The Jewels and Timber Timbre to the joyful bliss of Lowland Hum.",
      contentSnippet:
        "Our first new mix of 2017 features songs that are both big and hopeful, and crushingly sad, from the politically charged music of Run The Jewels and Timber Timbre to the joyful bliss of Lowland Hum.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/01/20170117_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=510308493&orgId=1&d=2425&p=510019&story=510308493&t=podcast&e=510308493&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2425",
      isoDate: "2017-01-17T21:40:00.000Z"
    },
    {
      id: "db132c5d-b855-4e02-963a-604892931d46",
      title:
        "+1: Sharon Van Etten On The Real-Life Inspiration Behind Her Role On 'The OA' ",
      content:
        "The singer opens up about her debut acting role on the mysterious Netflix series <em>The OA</em>, the personal experiences that inspired her performance and how to cry on command.",
      contentSnippet:
        "The singer opens up about her debut acting role on the mysterious Netflix series The OA, the personal experiences that inspired her performance and how to cry on command.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/01/20170113_asc_sveoa.mp3?awCollectionId=510019&awEpisodeId=509669116&orgId=1&d=1082&p=510019&story=509669116&t=podcast&e=509669116&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1082",
      isoDate: "2017-01-13T16:06:00.000Z"
    },
    {
      id: "ed01b08e-9c1e-487d-9ff4-1916a44dc33b",
      title: "Our Top Discoveries From globalFEST 2017",
      content:
        "Every January, we look forward to globalFEST, a one-night showcase of newly emerging and well-established artists from around the world. This annual event, held at Manhattan's Webster Hall, is where industry insiders and cool-hunters alike ferret out the next big global music acts on the touring circuit — the buzzed-about bands playing on this single winter night form the vanguard of what you're going to be watching at festivals and at venues across the country over the next couple of years.",
      contentSnippet:
        "Every January, we look forward to globalFEST, a one-night showcase of newly emerging and well-established artists from around the world. This annual event, held at Manhattan's Webster Hall, is where industry insiders and cool-hunters alike ferret out the next big global music acts on the touring circuit — the buzzed-about bands playing on this single winter night form the vanguard of what you're going to be watching at festivals and at venues across the country over the next couple of years.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/01/20170111_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=509314680&orgId=1&d=2613&p=510019&story=509314680&t=podcast&e=509314680&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2613",
      isoDate: "2017-01-11T16:12:00.000Z"
    },
    {
      id: "d8ee8dc7-c626-4218-8b41-bf46b1f5cd2c",
      title: "Interview: Julien Baker Signs To Matador, Shares New Song",
      content:
        'We have a candid interview with Julien Baker, a young singer of sad, thoughtful songs. Her new song, "Funeral Pyre," is being released on the storied independent label Matador Records.',
      contentSnippet:
        'We have a candid interview with Julien Baker, a young singer of sad, thoughtful songs. Her new song, "Funeral Pyre," is being released on the storied independent label Matador Records.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/01/20170106_asc_julienbaker.mp3?awCollectionId=510019&awEpisodeId=508425730&orgId=1&d=1319&p=510019&story=508425730&t=podcast&e=508425730&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1319",
      isoDate: "2017-01-06T14:00:06.000Z"
    },
    {
      id: "b114cb46-c962-451d-8b46-6f1197003e71",
      title: "+1: A Conversation With Comedian Hannibal Buress",
      content:
        "Guest host and NPR Music contributor Timmhotep Aku talks with comedian, actor and writer Hannibal Buress. Buress is known and loved for his brand of irreverent comedy and his gift for finding absurdity in the seemingly mundane. It's an audacity that informs not only his sense of humor, but also his taste in music. A hip-hop head from Chicago's West Side, Buress is a true rap omnivore whose tastes run the gamut from the uber-popular to the obscure.",
      contentSnippet:
        "Guest host and NPR Music contributor Timmhotep Aku talks with comedian, actor and writer Hannibal Buress. Buress is known and loved for his brand of irreverent comedy and his gift for finding absurdity in the seemingly mundane. It's an audacity that informs not only his sense of humor, but also his taste in music. A hip-hop head from Chicago's West Side, Buress is a true rap omnivore whose tastes run the gamut from the uber-popular to the obscure.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2017/01/20170105_asc_hannibal.mp3?awCollectionId=510019&awEpisodeId=508372721&orgId=1&d=1739&p=510019&story=508372721&t=podcast&e=508372721&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1739",
      isoDate: "2017-01-05T17:20:00.000Z"
    },
    {
      id: "67635bdf-2263-40fb-89e9-15a5bb211802",
      title: "+1 Encore: A Conversation With Radiohead's Jonny Greenwood",
      content:
        "Bob chats with Radiohead's visionary guitarist Jonny Greenwood about the making of the band's newest record, A Moon Shaped Pool.",
      contentSnippet:
        "Bob chats with Radiohead's visionary guitarist Jonny Greenwood about the making of the band's newest record, A Moon Shaped Pool.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/08/20160804_asc_wholeshow2.mp3?awCollectionId=510019&awEpisodeId=507687578&orgId=1&d=1478&p=510019&story=507687578&t=podcast&e=507687578&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1478",
      isoDate: "2017-01-01T14:00:03.000Z"
    },
    {
      id: "c1b4d21e-f648-4d6a-9d2b-0a590edf377e",
      title: "+1 Encore: The Politics And Passions Of Roger Waters",
      content:
        "The bassist, singer and songwriter behind some of the 20th century's most iconic music goes deep into race, civil rights, prison reform, the troubled music industry and more.",
      contentSnippet:
        "The bassist, singer and songwriter behind some of the 20th century's most iconic music goes deep into race, civil rights, prison reform, the troubled music industry and more.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161116_asc_roger.mp3?awCollectionId=510019&awEpisodeId=507687354&orgId=1&d=2845&p=510019&story=507687354&t=podcast&e=507687354&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2845",
      isoDate: "2016-12-31T15:57:00.000Z"
    },
    {
      id: "e9e668c8-2128-498f-a556-4664588e6ee2",
      title: "+1 Encore: A Conversation With Paul McCartney",
      content:
        "Paul McCartney talks about his solo career-spanning compilation Pure McCartney, his creative process, how he stays inspired and why he sometimes thinks he should take songwriting more seriously.",
      contentSnippet:
        "Paul McCartney talks about his solo career-spanning compilation Pure McCartney, his creative process, how he stays inspired and why he sometimes thinks he should take songwriting more seriously.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/06/20160609_asc_mccartney.mp3?awCollectionId=510019&awEpisodeId=507548978&orgId=1&d=1975&p=510019&story=507548978&t=podcast&e=507548978&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1975",
      isoDate: "2016-12-30T15:14:00.000Z"
    },
    {
      id: "3a801219-5422-4670-bff5-9ad490e1386f",
      title: "+1 Encore: Paul Simon Conversation",
      content:
        'Paul Simon talks about his album, Stranger To Stranger, and why it may be his last, at least for a while. He also shares the new song, "The Werewolf."',
      contentSnippet:
        'Paul Simon talks about his album, Stranger To Stranger, and why it may be his last, at least for a while. He also shares the new song, "The Werewolf."',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/05/20160519_asc_paulsimon.mp3?awCollectionId=510019&awEpisodeId=507383815&orgId=1&d=2321&p=510019&story=507383815&t=podcast&e=507383815&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2321",
      isoDate: "2016-12-29T14:21:00.000Z"
    },
    {
      id: "99943384-c3bd-4ec0-937c-636e67a0a5d5",
      title: "+1 Encore: David Bowie Makes His Dream Jazz Record",
      content:
        "Three weeks before David Bowie released <em>Blackstar,</em> and three weeks before he died, I spoke with jazz saxophonist Donny McCaslin and long-time friend and producer Tony Visconti about making what would be David Bowie's final album.",
      contentSnippet:
        "Three weeks before David Bowie released Blackstar, and three weeks before he died, I spoke with jazz saxophonist Donny McCaslin and long-time friend and producer Tony Visconti about making what would be David Bowie's final album.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2015/12/20151217_asc_dmccaslinandtvisconti.mp3?awCollectionId=510019&awEpisodeId=507225939&orgId=1&d=1525&p=510019&story=507225939&t=podcast&e=507225939&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1525",
      isoDate: "2016-12-28T13:21:00.000Z"
    },
    {
      id: "bcebd813-02e6-4bff-8203-68a18e0d92c0",
      title: "Vikings Choice 2016",
      content:
        "Our resident Viking Lars Gotrich recalls 2016 in feral metal, dystopian and ocean-mimicking synths and Afro-futurist pop cubism.",
      contentSnippet:
        "Our resident Viking Lars Gotrich recalls 2016 in feral metal, dystopian and ocean-mimicking synths and Afro-futurist pop cubism.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/12/20161230_asc_vikingschoice3.mp3?awCollectionId=510019&awEpisodeId=507088132&orgId=1&d=2876&p=510019&story=507088132&t=podcast&e=507088132&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2876",
      isoDate: "2016-12-27T15:12:00.000Z"
    },
    {
      id: "9ee1787c-812d-48b0-ad17-6ad1fa4c94ea",
      title: "Holiday Extravaganza 2016",
      content:
        "Kacey Musgraves, Conor Oberst and more special guests join us for a steam engine ride to the north pole in this year's holiday extravaganza!",
      contentSnippet:
        "Kacey Musgraves, Conor Oberst and more special guests join us for a steam engine ride to the north pole in this year's holiday extravaganza!",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/12/20161221_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=506429415&orgId=1&d=3715&p=510019&story=506429415&t=podcast&e=506429415&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3715",
      isoDate: "2016-12-21T14:36:00.000Z"
    },
    {
      id: "8210b434-4966-44c0-9138-3841e8692d64",
      title: "+1: How PiL's Drummer Wound Up Digging Ditches",
      content:
        "In this Martin Atkins minute, the former drummer for Public Image Ltd shares the story of how he quit the band at the height of its popularity, only to end up digging ditches for a living.",
      contentSnippet:
        "In this Martin Atkins minute, the former drummer for Public Image Ltd shares the story of how he quit the band at the height of its popularity, only to end up digging ditches for a living.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/ascsongs/2016/12/20161220_ascsongs_badday.mp3?awCollectionId=510019&awEpisodeId=506298934&orgId=1&d=487&p=510019&story=506298934&t=podcast&e=506298934&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "487",
      isoDate: "2016-12-20T16:34:00.000Z"
    },
    {
      id: "dccedaae-e09c-4790-9dd9-244f77cfba04",
      title:
        "Poll Results: All Songs Considered Listeners' Favorite 100 Albums Of 2016",
      content:
        "On this week's All Songs Considered, we count down and talk about the poll's top 20 albums. You'll find those records below, along with a list of our listeners' top 100 albums.",
      contentSnippet:
        "On this week's All Songs Considered, we count down and talk about the poll's top 20 albums. You'll find those records below, along with a list of our listeners' top 100 albums.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/12/20161215_asc_poll.mp3?awCollectionId=510019&awEpisodeId=505686474&orgId=1&d=3942&p=510019&story=505686474&t=podcast&e=505686474&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3942",
      isoDate: "2016-12-15T16:19:00.000Z"
    },
    {
      id: "273c60a9-1f26-42ca-9911-8f9485b9bbc8",
      title: "The Year In Music 2016",
      content:
        "Our annual recap of the year's best songs and albums, memorable moments and other defining moments. 1. David Bowie - Lazarus 2. Anderson .Paak - The Season/Carry Me 3. Miranda Lambert - Sweet By And By 4. George Martin - A Day In The Life 5. Greg Laswell - Play That One Again 6. Beyonce - Sorry 7. Mitski - Your Best American Girl 8. Car Seat Headrest - Killer Whales/Drunk Drivers 9. Radiohead - Daydreaming 10. Anohni - Drone Bomb Me 11. Solange - Cranes In The Sky 12. Frank Ocean - White Ferrari 13. Wilco - Normal American Kids 14. Bon Iver - 715 Creeks 15. Adam Torres - Juniper Arms 16. Leonard Cohen - You Want It Darker 17. Crystal Fighters - Lay Low 18. Jane Sibbery - Everything You Knew As A Child 19. Frightened Rabbit - An Otherwise Disappointing Life 20. Let's Eat Grandma - Rapunzel",
      contentSnippet:
        "Our annual recap of the year's best songs and albums, memorable moments and other defining moments. 1. David Bowie - Lazarus 2. Anderson .Paak - The Season/Carry Me 3. Miranda Lambert - Sweet By And By 4. George Martin - A Day In The Life 5. Greg Laswell - Play That One Again 6. Beyonce - Sorry 7. Mitski - Your Best American Girl 8. Car Seat Headrest - Killer Whales/Drunk Drivers 9. Radiohead - Daydreaming 10. Anohni - Drone Bomb Me 11. Solange - Cranes In The Sky 12. Frank Ocean - White Ferrari 13. Wilco - Normal American Kids 14. Bon Iver - 715 Creeks 15. Adam Torres - Juniper Arms 16. Leonard Cohen - You Want It Darker 17. Crystal Fighters - Lay Low 18. Jane Sibbery - Everything You Knew As A Child 19. Frightened Rabbit - An Otherwise Disappointing Life 20. Let's Eat Grandma - Rapunzel",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/ascsongs/2016/12/20161205_ascsongs_yir.mp3?awCollectionId=510019&awEpisodeId=504545452&orgId=1&d=130&p=510019&story=504545452&t=podcast&e=504545452&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "130",
      isoDate: "2016-12-06T15:16:00.000Z"
    },
    {
      id: "a43622e5-0863-4722-b536-76e18fe8c6f7",
      title:
        "All Songs +1: Peter Silberman On Compassion, Impermanence And Hearing Loss ",
      content:
        "Today's All Songs +1 podcast is a conversation with The Antlers' Peter Silberman on how hearing loss would eventually lead him to create his first solo album.",
      contentSnippet:
        "Today's All Songs +1 podcast is a conversation with The Antlers' Peter Silberman on how hearing loss would eventually lead him to create his first solo album.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/12/20161201_asc_silberman.mp3?awCollectionId=510019&awEpisodeId=503997524&orgId=1&d=1073&p=510019&story=503997524&t=podcast&e=503997524&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1073",
      isoDate: "2016-12-01T16:56:00.000Z"
    },
    {
      id: "f91d621d-8cd7-4c2d-a950-53409d0620c0",
      title: "Laura Marling, Weyes Blood, Sam Phillips, Peals, bed.",
      content:
        'On this week\'s show: Songs about the indomitable human spirit. Plus, music plucked from a honey jar (seriously). 1. Peals, "Become Younger," 2. Sam Phillips, "World On Sticks," 3. Laura Marling, "Soothing," 4. Weyes Blood, "Used To Be," 5. bed., "Girl"',
      contentSnippet:
        'On this week\'s show: Songs about the indomitable human spirit. Plus, music plucked from a honey jar (seriously). 1. Peals, "Become Younger," 2. Sam Phillips, "World On Sticks," 3. Laura Marling, "Soothing," 4. Weyes Blood, "Used To Be," 5. bed., "Girl"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161129_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=503747464&orgId=1&d=2069&p=510019&story=503747464&t=podcast&e=503747464&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2069",
      isoDate: "2016-11-29T18:47:00.000Z"
    },
    {
      id: "883676d1-4b43-400c-b3b4-db0127cd0024",
      title: "Some Of The Best Songs We Missed This Year ",
      content:
        'Before being consumed by our year-end coverage, hosts Bob Boilen and Robin Hilton hit the pause button to catch up on some of the great music they missed this year. 1. Anthony Joseph - "Slinger," 2. The Frightnrs - "Nothing More To Say," 3. D.D Dumbo "Walrus," 4. Chris Forsyth And The Solar Motel Band - "Anthem I," 5. Africaine 808 - "Ngoni," 6. Lettuce - "The Love You Left Behind"',
      contentSnippet:
        'Before being consumed by our year-end coverage, hosts Bob Boilen and Robin Hilton hit the pause button to catch up on some of the great music they missed this year. 1. Anthony Joseph - "Slinger," 2. The Frightnrs - "Nothing More To Say," 3. D.D Dumbo "Walrus," 4. Chris Forsyth And The Solar Motel Band - "Anthem I," 5. Africaine 808 - "Ngoni," 6. Lettuce - "The Love You Left Behind"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161122_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=503033387&orgId=1&d=2312&p=510019&story=503033387&t=podcast&e=503033387&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2312",
      isoDate: "2016-11-22T18:40:00.000Z"
    },
    {
      id: "ab6bc6df-c05d-49e7-875c-e869fe31a5d1",
      title: "The Songs Remain The Same, But All The Meanings Have Changed",
      content:
        'When profound change happens in life, the meaning of the music you hear tends to change, too. On this week\'s show: Songs both light and dark in a post-election world. 1. Rubblebucket, "If U C My Enemies," 2. Alev Lenz, "Fall Into Me," 3. Sinkane, "U\'huh," 4. Ty Segall, "Orange Color Queen," 5. Leonard Cohen, "You Want It Darker," 6. Lizzo, "Good As Hell"',
      contentSnippet:
        'When profound change happens in life, the meaning of the music you hear tends to change, too. On this week\'s show: Songs both light and dark in a post-election world. 1. Rubblebucket, "If U C My Enemies," 2. Alev Lenz, "Fall Into Me," 3. Sinkane, "U\'huh," 4. Ty Segall, "Orange Color Queen," 5. Leonard Cohen, "You Want It Darker," 6. Lizzo, "Good As Hell"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161116_asc_wholeshow2.mp3?awCollectionId=510019&awEpisodeId=502337514&orgId=1&d=2355&p=510019&story=502337514&t=podcast&e=502337514&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2355",
      isoDate: "2016-11-16T20:00:00.000Z"
    },
    {
      id: "0e21acf6-d472-40ba-addf-949581b393c5",
      title: "Guest DJ: Matty Healy Of The 1975 On Making Music From Now On",
      content:
        "One of the most surprising records for me this year is the latest album by The 1975. My preconceptions of this band's music as simple, catchy pop have turned out to be so wrong. The album, called I like it when you sleep, for you are so beautiful yet so unaware of it, is filled with ambient music, electronica and a good dose of '80s sheen. I wanted to talk to frontman Matty Healy about his influences. He's someone whom I'd met a few years ago when he performed a fascinating solo Tiny Desk concert. On this edition of All Songs Considered, he plays DJ and talks about growing up in a family where his parents, both English actors, shared lots of the music they loved.",
      contentSnippet:
        "One of the most surprising records for me this year is the latest album by The 1975. My preconceptions of this band's music as simple, catchy pop have turned out to be so wrong. The album, called I like it when you sleep, for you are so beautiful yet so unaware of it, is filled with ambient music, electronica and a good dose of '80s sheen. I wanted to talk to frontman Matty Healy about his influences. He's someone whom I'd met a few years ago when he performed a fascinating solo Tiny Desk concert. On this edition of All Songs Considered, he plays DJ and talks about growing up in a family where his parents, both English actors, shared lots of the music they loved.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161114_asc_the1975b.mp3?awCollectionId=510019&awEpisodeId=502117403&orgId=1&d=2254&p=510019&story=502117403&t=podcast&e=502117403&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2254",
      isoDate: "2016-11-15T11:32:00.000Z"
    },
    {
      id: "eb929b55-ddd0-48c0-bc2a-07bfd42759c4",
      title: "Guest DJ Nick Mason On Pink Floyd's Early Years",
      content:
        "As a gigantic 27-disc box-set history of Pink Floyd is released, the band's drummer discusses those early years and the other music that inspired him.",
      contentSnippet:
        "As a gigantic 27-disc box-set history of Pink Floyd is released, the band's drummer discusses those early years and the other music that inspired him.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161111_asc_nick.mp3?awCollectionId=510019&awEpisodeId=501754853&orgId=1&d=1915&p=510019&story=501754853&t=podcast&e=501754853&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1915",
      isoDate: "2016-11-11T21:30:00.000Z"
    },
    {
      id: "368658cd-5b59-4629-b020-cd6a3611fa8a",
      title: "Guest DJ: The Politics And Passions Of Roger Waters",
      content:
        "Roger Waters plays DJ, sharing music by those he loves and talks about what draws him to songs. This conversation isn't about his time with Pink Floyd. In fact, over the course of this nearly hour-long interview, he didn't mention the band he left more than 30 years ago even once. We do talk with him about his upcoming own solo work, including his upcoming tour called \"Us And Them.\" But at the heart of everything, this creative force behind some of the 20th century's most iconic music is politics, money, greed and ultimately hope. Mention the music of Billie Holiday (who was addicted to heroin) and Waters launches into an assault on what he calls draconian drug laws that vilify addicts instead of treating them. That leads to a discussion of corruption and greed in politics and more knotty issues than we could reasonably keep track of: The U.S. presidential race, the conflict between Israel and Palestine, the state of the music industry, the futility of war, Guantanamo, civil rights and the Black Lives Matter movement, prison reform and how Waters, remarkably, remains hopeful and optimistic in the face of all the despair and suffering he sees plaguing the world.",
      contentSnippet:
        "Roger Waters plays DJ, sharing music by those he loves and talks about what draws him to songs. This conversation isn't about his time with Pink Floyd. In fact, over the course of this nearly hour-long interview, he didn't mention the band he left more than 30 years ago even once. We do talk with him about his upcoming own solo work, including his upcoming tour called \"Us And Them.\" But at the heart of everything, this creative force behind some of the 20th century's most iconic music is politics, money, greed and ultimately hope. Mention the music of Billie Holiday (who was addicted to heroin) and Waters launches into an assault on what he calls draconian drug laws that vilify addicts instead of treating them. That leads to a discussion of corruption and greed in politics and more knotty issues than we could reasonably keep track of: The U.S. presidential race, the conflict between Israel and Palestine, the state of the music industry, the futility of war, Guantanamo, civil rights and the Black Lives Matter movement, prison reform and how Waters, remarkably, remains hopeful and optimistic in the face of all the despair and suffering he sees plaguing the world.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161116_asc_roger.mp3?awCollectionId=510019&awEpisodeId=501176421&orgId=1&d=2845&p=510019&story=501176421&t=podcast&e=501176421&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2845",
      isoDate: "2016-11-08T17:57:00.000Z"
    },
    {
      id: "a52f1ac2-e3d6-4991-8aea-cdb37f628342",
      title: "What Was It Like To See Pink Floyd In 1966? Joe Boyd Knows",
      content:
        "This week a gigantic Pink Floyd box set is released. What's remarkable about <em>Pink Floyd Early Years 1965-1972</em> is that its 27 discs cover only the band's first seven years! All this week we'll think pink with some of the people who were there. On Friday — the day this collection is released — we'll talk with drummer Nick Mason about those early years. On Tuesday we talk to Roger Waters about his upcoming projects and politics. But we thought we should start with a man who, 50 years ago, witnessed and participated in those very early days. Joe Boyd was an American working for Elektra Records in London in 1966, and the group played early shows, before it had released any recordings, at the UFO Club, where Boyd was an owner. He'd go on to produce Pink Floyd's first single, \"Arnold Layne.\" Joe Boyd is a critical figure in the British folk music scene and global music scene. If you love Nick Drake then you can thank Joe Boyd. His book <em>White Bicycles </em>paints some great images of making music in the '60s, including stories of Pink Floyd. He also has a podcast that's quite brilliant called <em>Joe Boyd's A-Z</em> where he goes through his remarkable record collection in alphabetical order, making insightful musical connections and telling personal stories. We suggest Pink Floyd fans listen to the episode on the letter I, for \"Interstellar Overdrive.\"",
      contentSnippet:
        "This week a gigantic Pink Floyd box set is released. What's remarkable about Pink Floyd Early Years 1965-1972 is that its 27 discs cover only the band's first seven years! All this week we'll think pink with some of the people who were there. On Friday — the day this collection is released — we'll talk with drummer Nick Mason about those early years. On Tuesday we talk to Roger Waters about his upcoming projects and politics. But we thought we should start with a man who, 50 years ago, witnessed and participated in those very early days. Joe Boyd was an American working for Elektra Records in London in 1966, and the group played early shows, before it had released any recordings, at the UFO Club, where Boyd was an owner. He'd go on to produce Pink Floyd's first single, \"Arnold Layne.\" Joe Boyd is a critical figure in the British folk music scene and global music scene. If you love Nick Drake then you can thank Joe Boyd. His book White Bicycles paints some great images of making music in the '60s, including stories of Pink Floyd. He also has a podcast that's quite brilliant called Joe Boyd's A-Z where he goes through his remarkable record collection in alphabetical order, making insightful musical connections and telling personal stories. We suggest Pink Floyd fans listen to the episode on the letter I, for \"Interstellar Overdrive.\"",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161107_asc_boydfloyd.mp3?awCollectionId=510019&awEpisodeId=501090610&orgId=1&d=1906&p=510019&story=501090610&t=podcast&e=501090610&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1906",
      isoDate: "2016-11-08T01:15:00.000Z"
    },
    {
      id: "e0255582-c1e6-4e71-9d89-ab4eaede3935",
      title: "After 38 Years Of Silence, A Legend Of Folk Music Sings",
      content:
        "Imagine being a singer — in this case, a singer of traditional British folk songs and murder ballads, songs of love, hate, revenge, redemption and tragedy. And as the singer of these songs, you get pretty well known in the circles of folk music in the 1960s and 1970s.Now, imagine a broken heart robs you of your ability to sing. For 38 years, your voice — once beautiful — falls silent.This is the story of the great Shirley Collins.But this tragic tale has a happy epilogue, because Shirley Collins is finally singing again. She has a new record called Lodestar and she is our guest on All Songs Considered.I listened to Shirley Collins' music as a teen in the heyday of British folk music. I own records by The Albion Band, which she put together with her then-husband, Ashley Hutchings. Her songs were a huge influence on American singers as well — and one of those singers, so many years later, is Colin Meloy.If you listen to The Decemberists, you know how much Colin loves a good tale, and a good murder ballad. In fact, he released an EP of Shirley's songs about 10 years ago. So, on this edition of All Songs Considered: \"Colin and Collins,\" a conversation with Shirley Collins and Colin Meloy.",
      contentSnippet:
        "Imagine being a singer — in this case, a singer of traditional British folk songs and murder ballads, songs of love, hate, revenge, redemption and tragedy. And as the singer of these songs, you get pretty well known in the circles of folk music in the 1960s and 1970s.Now, imagine a broken heart robs you of your ability to sing. For 38 years, your voice — once beautiful — falls silent.This is the story of the great Shirley Collins.But this tragic tale has a happy epilogue, because Shirley Collins is finally singing again. She has a new record called Lodestar and she is our guest on All Songs Considered.I listened to Shirley Collins' music as a teen in the heyday of British folk music. I own records by The Albion Band, which she put together with her then-husband, Ashley Hutchings. Her songs were a huge influence on American singers as well — and one of those singers, so many years later, is Colin Meloy.If you listen to The Decemberists, you know how much Colin loves a good tale, and a good murder ballad. In fact, he released an EP of Shirley's songs about 10 years ago. So, on this edition of All Songs Considered: \"Colin and Collins,\" a conversation with Shirley Collins and Colin Meloy.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161104_asc_collinsshow.mp3?awCollectionId=510019&awEpisodeId=500698683&orgId=1&d=2806&p=510019&story=500698683&t=podcast&e=500698683&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2806",
      isoDate: "2016-11-04T17:21:00.000Z"
    },
    {
      id: "2b7987ff-d9a3-41c3-b852-ae53b1f8407e",
      title: "All Songs +1: Our Most Memorable Tiny Desk Jazz Sets",
      content:
        "Patrick Jarenwattananon has been the backbone of our jazz coverage almost since NPR Music started in 2007. Patrick came to us as a 22-year-old intern and shortly after began covering legendary and rising jazz luminaries like a veteran journalist. His writing for A Blog Supreme captured the spirit of the jazz community and was a rich resource for thoughtful coverage on this living American musical culture.Recently NPR Music changed the way we cover jazz, with our wonderful member station WBGO taking the lead.Sadly, Patrick is no longer working at NPR Music, but PJ (as we call him) turned me and our listeners on to so much music, and a good deal of it through the jazz artists he brought to the Tiny Desk.So on this +1 edition of All Songs Considered, I asked Patrick to come back and talk to us all about some of the legends and up-and-comers he brought to our offices. You can hear the full conversation and music with the listen link above, or watch the featured sets below.",
      contentSnippet:
        "Patrick Jarenwattananon has been the backbone of our jazz coverage almost since NPR Music started in 2007. Patrick came to us as a 22-year-old intern and shortly after began covering legendary and rising jazz luminaries like a veteran journalist. His writing for A Blog Supreme captured the spirit of the jazz community and was a rich resource for thoughtful coverage on this living American musical culture.Recently NPR Music changed the way we cover jazz, with our wonderful member station WBGO taking the lead.Sadly, Patrick is no longer working at NPR Music, but PJ (as we call him) turned me and our listeners on to so much music, and a good deal of it through the jazz artists he brought to the Tiny Desk.So on this +1 edition of All Songs Considered, I asked Patrick to come back and talk to us all about some of the legends and up-and-comers he brought to our offices. You can hear the full conversation and music with the listen link above, or watch the featured sets below.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161103_asc_pj.mp3?awCollectionId=510019&awEpisodeId=500534173&orgId=1&d=1654&p=510019&story=500534173&t=podcast&e=500534173&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1654",
      isoDate: "2016-11-03T16:54:00.000Z"
    },
    {
      id: "592ef1f9-2c8b-4f28-8c28-41c9180d6402",
      title: "Guest DJ: AURORA On Her Love Of Heavy Metal And Leonard Cohen",
      content:
        "I first saw Aurora in a small club in New York City three years ago. She was just 17 years old, but her performance was mesmerizing. Her frail, blonde figure mirrored her enchanting voice and words. The young singer from Norway put out a dramatic and beautiful record earlier this year called All My Demons Greeting Me as a Friend.On this edition of All Songs Considered, Aurora — now 20 years old — plays DJ, choosing songs that inform her life and music. Some mirror the emotions in her own music, like Leonard Cohen, Enya and the mechanical, organic music of Wintergatan. She also surprised us by showing her love for metal music, including Mastodon.We had an emotional conversation. Aurora is all about touching hearts and expressing her feelings through song. Below are some edited quotes from the interview, though it's best to give a listen to the full show so you can fall in love with her music and her passion for performing and connecting with fans.",
      contentSnippet:
        "I first saw Aurora in a small club in New York City three years ago. She was just 17 years old, but her performance was mesmerizing. Her frail, blonde figure mirrored her enchanting voice and words. The young singer from Norway put out a dramatic and beautiful record earlier this year called All My Demons Greeting Me as a Friend.On this edition of All Songs Considered, Aurora — now 20 years old — plays DJ, choosing songs that inform her life and music. Some mirror the emotions in her own music, like Leonard Cohen, Enya and the mechanical, organic music of Wintergatan. She also surprised us by showing her love for metal music, including Mastodon.We had an emotional conversation. Aurora is all about touching hearts and expressing her feelings through song. Below are some edited quotes from the interview, though it's best to give a listen to the full show so you can fall in love with her music and her passion for performing and connecting with fans.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161102_asc_aurora.mp3?awCollectionId=510019&awEpisodeId=500393546&orgId=1&d=3291&p=510019&story=500393546&t=podcast&e=500393546&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3291",
      isoDate: "2016-11-02T18:26:00.000Z"
    },
    {
      id: "2eff13f6-7eeb-47d2-ab06-5a29fcd756fb",
      title:
        " Priests, Kevin Morby, James Chance, Crystal Fighters, Fialta, More",
      content:
        "If you're looking of a break from the relentless assault of gut-churning news headlines, you've come to the right place! For this week's show Robin Hilton thought he'd send a little bit of good cheer into the world with some big, joyful group sing-alongs that celebrate life and all its gloriousness. The first burst of light and love comes from the London-based band Crystal Fighters and its anthem to how momentary and magical life is. It's followed by Fialta, a group from California with a simple message: We're all in this together. Oh, Bob Boilen has some songs too, including the gloriously chaotic sax-noise of James Chance and a new cut from singer Kevin Morby about the preciousness and fragility of life. Bonus: NPR Music's Lars Gotrich stops by to share songs from two of his favorite D.C. bands — the punk group Priests and Flasher, a band that sounds like Smashing Pumpkins if they made a new wave record. But first up: The Chilling, Thrilling Sounds Of The Haunted House. 1. James Chance: Melt Yourself Down 2. Priests: Pink White Noise 3. Flasher: Destroy 4. Crystal Fighters: Lay Low 5. Fialta: Do The Best We Can 6. Kevin Morby: Beautiful Strangers 7. Biosphere: Sweet Dreams From A Shade",
      contentSnippet:
        "If you're looking of a break from the relentless assault of gut-churning news headlines, you've come to the right place! For this week's show Robin Hilton thought he'd send a little bit of good cheer into the world with some big, joyful group sing-alongs that celebrate life and all its gloriousness. The first burst of light and love comes from the London-based band Crystal Fighters and its anthem to how momentary and magical life is. It's followed by Fialta, a group from California with a simple message: We're all in this together. Oh, Bob Boilen has some songs too, including the gloriously chaotic sax-noise of James Chance and a new cut from singer Kevin Morby about the preciousness and fragility of life. Bonus: NPR Music's Lars Gotrich stops by to share songs from two of his favorite D.C. bands — the punk group Priests and Flasher, a band that sounds like Smashing Pumpkins if they made a new wave record. But first up: The Chilling, Thrilling Sounds Of The Haunted House. 1. James Chance: Melt Yourself Down 2. Priests: Pink White Noise 3. Flasher: Destroy 4. Crystal Fighters: Lay Low 5. Fialta: Do The Best We Can 6. Kevin Morby: Beautiful Strangers 7. Biosphere: Sweet Dreams From A Shade",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/11/20161101_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=500250051&orgId=1&d=3075&p=510019&story=500250051&t=podcast&e=500250051&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3075",
      isoDate: "2016-11-01T18:22:00.000Z"
    },
    {
      id: "bf3eb5c0-6322-4949-9205-f2561d9140d4",
      title: "A Conversation With Anderson .Paak And Knxwledge",
      content:
        "On this week's +1 podcast, NPR Music contributor Timmhotep Aku talks with singer and rapper Anderson .Paak and producer Knxwledge about their new collaboration under the name NxWorries.",
      contentSnippet:
        "On this week's +1 podcast, NPR Music contributor Timmhotep Aku talks with singer and rapper Anderson .Paak and producer Knxwledge about their new collaboration under the name NxWorries.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/10/20161027_asc_noworries.mp3?awCollectionId=510019&awEpisodeId=499627421&orgId=1&d=2124&p=510019&story=499627421&t=podcast&e=499627421&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2124",
      isoDate: "2016-10-27T18:56:00.000Z"
    },
    {
      id: "4941c49b-dd83-428b-aa4b-b6c57ab5be67",
      title:
        "Run The Jewels, Flaming Lips, John Prine, Sad13, Laura Burhenn, More",
      content:
        "In this week's All Songs Considered, we feature three solo projects by some of our favorite bandleaders, a solo artist's duets record, and new music from some familiar faces, or more accurately put, some familiar Lips. The Flaming Lips are back with a new album, <em>Oczy Młody,</em> inspired by a Polish book that Wayne Coyne owns and finds phonetically fascinating (even if he doesn't understand any of the words). We've also got Run the Jewels, a duo that's all about the words and whose new single speaks to urgent issues of race relations. Laura Burhenn (Mynabirds) and Kyle Morton (Typhoon) each have quiet solo records that tackle life's preciousness, how the small things sometimes matter most and the tangles we amass. Sadie Dupuis of Speedy Ortiz went the loud route; Bob found one of the lyrics a little offensive, but that didn't stop Robin from playing it. We also hear from John Prine. He turns 70 this month and has recorded his highest charting record yet. <em>For Better, Or Worse</em> features a high spirited, often funny collection of cover tunes sung by a brilliant songwriter whose battle with cancer only seems to make him stronger. Every time I hear his Ernest Tubb and Loretta Lynn cover I laugh, and that's where our show starts.",
      contentSnippet:
        "In this week's All Songs Considered, we feature three solo projects by some of our favorite bandleaders, a solo artist's duets record, and new music from some familiar faces, or more accurately put, some familiar Lips. The Flaming Lips are back with a new album, Oczy Młody, inspired by a Polish book that Wayne Coyne owns and finds phonetically fascinating (even if he doesn't understand any of the words). We've also got Run the Jewels, a duo that's all about the words and whose new single speaks to urgent issues of race relations. Laura Burhenn (Mynabirds) and Kyle Morton (Typhoon) each have quiet solo records that tackle life's preciousness, how the small things sometimes matter most and the tangles we amass. Sadie Dupuis of Speedy Ortiz went the loud route; Bob found one of the lyrics a little offensive, but that didn't stop Robin from playing it. We also hear from John Prine. He turns 70 this month and has recorded his highest charting record yet. For Better, Or Worse features a high spirited, often funny collection of cover tunes sung by a brilliant songwriter whose battle with cancer only seems to make him stronger. Every time I hear his Ernest Tubb and Loretta Lynn cover I laugh, and that's where our show starts.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/10/20161025_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=499321162&orgId=1&d=2100&p=510019&story=499321162&t=podcast&e=499321162&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2100",
      isoDate: "2016-10-25T17:33:00.000Z"
    },
    {
      id: "cd5ff843-c052-4294-997c-726cf92d1f53",
      title:
        "All Songs +1: Join The Black Parade: My Chemical Romance And The Politics Of Taste",
      content:
        "Sunday is the 10th anniversary of My Chemical Romance's The Black Parade, a defining album for both the band and a generation of pop-punk fans. A decade later, NPR's Daoud Tyler-Ameen is still processing what it means to love this record, and what its impact says about the culture around it.",
      contentSnippet:
        "Sunday is the 10th anniversary of My Chemical Romance's The Black Parade, a defining album for both the band and a generation of pop-punk fans. A decade later, NPR's Daoud Tyler-Ameen is still processing what it means to love this record, and what its impact says about the culture around it.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/10/20161024_asc_mychemicalromance.mp3?awCollectionId=510019&awEpisodeId=499160007&orgId=1&d=1482&p=510019&story=499160007&t=podcast&e=499160007&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1482",
      isoDate: "2016-10-24T15:26:00.000Z"
    },
    {
      id: "ada8dcb4-b1df-4dc7-9f8d-c0650a687eca",
      title: "+1: How David Bowie's Songs Became The Musical 'Lazarus' ",
      content:
        "On this week's +1 podcast: A conversation with Henry Hey, the orchestrator, arranger and musical director for <em>Lazarus</em>, the off-Broadway musical set to the songs of David Bowie. <em>Lazarus</em> only ran in New York for six weeks last winter, and the songs weren't available for anyone to hear outside of those live performances until this week, when Columbia Records released the cast recording of <em>Lazarus</em>, along with three new songs Bowie wrote and recorded for the musical. The tracks, written during his <em>Blackstar</em> sessions, were among the final recordings Bowie made before he died of liver cancer on Jan. 10. To understand <em>Lazarus</em>, you first have to know about the 1976 film <em>The Man Who Fell To Earth</em>. Bowie starred in the movie as Thomas Jerome Newton, an alien who travels to earth in search of water for his dying planet. He starts a tech company, gets rich and uses the money to build a spaceship to transport water back home. But before he can take off, the government catches on and arrests him. After years in captivity, he's eventually freed, but left a lonely, broken alcoholic. Bowie always wanted to revisit his role in the film and conceived of <em>Lazarus</em>as a sequel that picks back up with his alien 40 years later. Though time has passed, Newton, played in the musical by Michael C. Hall, hasn't aged. But he's still addicted to alcohol, binges on Twinkies, and television. Set to a mix of Bowie's back catalog, <em>Lazarus</em> follows Newton as he tries find his way back home. Henry Hey worked closely with Bowie on arranging and orchestrating the songs for the stage. In this conversation, he talks about how he and Bowie reshaped the music to tell the story and what it meant to work on the iconic singer's final project.",
      contentSnippet:
        "On this week's +1 podcast: A conversation with Henry Hey, the orchestrator, arranger and musical director for Lazarus, the off-Broadway musical set to the songs of David Bowie. Lazarus only ran in New York for six weeks last winter, and the songs weren't available for anyone to hear outside of those live performances until this week, when Columbia Records released the cast recording of Lazarus, along with three new songs Bowie wrote and recorded for the musical. The tracks, written during his Blackstar sessions, were among the final recordings Bowie made before he died of liver cancer on Jan. 10. To understand Lazarus, you first have to know about the 1976 film The Man Who Fell To Earth. Bowie starred in the movie as Thomas Jerome Newton, an alien who travels to earth in search of water for his dying planet. He starts a tech company, gets rich and uses the money to build a spaceship to transport water back home. But before he can take off, the government catches on and arrests him. After years in captivity, he's eventually freed, but left a lonely, broken alcoholic. Bowie always wanted to revisit his role in the film and conceived of Lazarusas a sequel that picks back up with his alien 40 years later. Though time has passed, Newton, played in the musical by Michael C. Hall, hasn't aged. But he's still addicted to alcohol, binges on Twinkies, and television. Set to a mix of Bowie's back catalog, Lazarus follows Newton as he tries find his way back home. Henry Hey worked closely with Bowie on arranging and orchestrating the songs for the stage. In this conversation, he talks about how he and Bowie reshaped the music to tell the story and what it meant to work on the iconic singer's final project.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/10/20161021_asc_bowie.mp3?awCollectionId=510019&awEpisodeId=498848776&orgId=1&d=1201&p=510019&story=498848776&t=podcast&e=498848776&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1201",
      isoDate: "2016-10-21T16:15:00.000Z"
    },
    {
      id: "22ab8522-f4e3-4961-8f77-a50333bea97e",
      title:
        "EL VY's Song Against Trump, New Conor Oberst, Kristin Hersh, More ",
      content:
        "For as much as the election has dominated the news this year, the political cycle hasn't invaded the world of <em>All Songs Considered</em>. But this week we've got a remarkable cut by the band EL VY that's all about Donald Trump. \"Are These My Jets?\" is from 30 Days, 30 Songs, an online compilation album that features a new song by a new artist every day for the final thirty days leading up to the election. (For the record, NPR is not endorsing any candidate. We just like the song!) A couple of other things about this week's show: NPR Music's Lars Gotrich joins us to talk about the stellar return of the band American Football, a beloved '90s group that's putting out its first new album in 17 years; and another popular artist from the '90s, Kristin Hersh (who you may know from the band Throwing Muses), is back with an incredible double album full of sonic wonders. All that plus a new single from Bob's favorite band of 2013, The Blow, and the ruminations of singer Conor Oberst.",
      contentSnippet:
        "For as much as the election has dominated the news this year, the political cycle hasn't invaded the world of All Songs Considered. But this week we've got a remarkable cut by the band EL VY that's all about Donald Trump. \"Are These My Jets?\" is from 30 Days, 30 Songs, an online compilation album that features a new song by a new artist every day for the final thirty days leading up to the election. (For the record, NPR is not endorsing any candidate. We just like the song!) A couple of other things about this week's show: NPR Music's Lars Gotrich joins us to talk about the stellar return of the band American Football, a beloved '90s group that's putting out its first new album in 17 years; and another popular artist from the '90s, Kristin Hersh (who you may know from the band Throwing Muses), is back with an incredible double album full of sonic wonders. All that plus a new single from Bob's favorite band of 2013, The Blow, and the ruminations of singer Conor Oberst.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/10/20161018_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=498413009&orgId=1&d=2696&p=510019&story=498413009&t=podcast&e=498413009&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2696",
      isoDate: "2016-10-18T17:23:00.000Z"
    },
    {
      id: "aa4bcc8e-1b3c-440b-9123-328afff0508f",
      title:
        "Pusha T And Rivers Cuomo Join Zeds Dead, Amber Coffman, TOY, More",
      content:
        "This week's show features new music from Amber Coffman, a tribute to a friend and a collaboration between Rivers Cuomo and Pusha T. Plus: Reports of the guitar solo's death were greatly exaggerated.",
      contentSnippet:
        "This week's show features new music from Amber Coffman, a tribute to a friend and a collaboration between Rivers Cuomo and Pusha T. Plus: Reports of the guitar solo's death were greatly exaggerated.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/10/20161011_asc_08.mp3?awCollectionId=510019&awEpisodeId=497573745&orgId=1&d=2806&p=510019&story=497573745&t=podcast&e=497573745&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2806",
      isoDate: "2016-10-11T21:04:00.000Z"
    },
    {
      id: "5b2626aa-de58-4a03-a7cc-472ec3c93bd6",
      title: "Solange, Gillian Welch, Cuddle Magic, Major Stars, More",
      content:
        "We've got a lot of sounds on this week's show, from Solange's powerful meditation on being black in America, to the gentle folk of Gillian Welch. But some sounds are a lot louder than the others. 1. Solange: Tina Taught Me, 2. Solange: Don't Touch My Hair, 3. Cuddle Magic: Trojan Horse, 4. Major Stars: Unlearn, 5. Purling Hiss: 3000 AD, 6. Gillian Welch: Acony Bell (Demo), 7. Black Honey: Hello Today",
      contentSnippet:
        "We've got a lot of sounds on this week's show, from Solange's powerful meditation on being black in America, to the gentle folk of Gillian Welch. But some sounds are a lot louder than the others. 1. Solange: Tina Taught Me, 2. Solange: Don't Touch My Hair, 3. Cuddle Magic: Trojan Horse, 4. Major Stars: Unlearn, 5. Purling Hiss: 3000 AD, 6. Gillian Welch: Acony Bell (Demo), 7. Black Honey: Hello Today",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/10/20161005_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=496723945&orgId=1&d=2118&p=510019&story=496723945&t=podcast&e=496723945&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2118",
      isoDate: "2016-10-05T16:38:00.000Z"
    },
    {
      id: "10241c4d-725c-4434-b855-23421c017360",
      title:
        "All Songs +1: John Paul White Sings The Song That Changed His Life",
      content:
        "This past week I was at the 17th annual Americana Music Festival & Conference in Nashville, listening to and having conversations with musicians. One songwriter and singer I've admired from the world of Americana during this decade is John Paul White, whom you may know as a former member of the duo The Civil Wars. White's new solo album, <em>Beulah</em>, came out in August, and it's a quiet, poignant work. Over the past few years I've been talking with musicians about a song that changed them, a song that perhaps inspired them to pick up a guitar or write a song of their own. I put out a book called <em>Your Song Changed My Life</em>, which examines those pivotal moments for 35 musicians, and while at AmericanaFest I had a chance to talk to White about <em>his</em> song, <em>his</em> moment of discovery in music. We had that conversation in front of a few hundred people in the Country Music Hall of Fame's Ford Theater. The conversation was one of the most thoughtful ones I've had on the subject. Frankly, it ended in tears for me — and many in the audience — when White performed John Prine's seminal anti-war song \"Sam Stone.\" On this week's <em>All Songs Considered</em> +1 podcast, hear a conversation and performance from John Paul White.",
      contentSnippet:
        "This past week I was at the 17th annual Americana Music Festival & Conference in Nashville, listening to and having conversations with musicians. One songwriter and singer I've admired from the world of Americana during this decade is John Paul White, whom you may know as a former member of the duo The Civil Wars. White's new solo album, Beulah, came out in August, and it's a quiet, poignant work. Over the past few years I've been talking with musicians about a song that changed them, a song that perhaps inspired them to pick up a guitar or write a song of their own. I put out a book called Your Song Changed My Life, which examines those pivotal moments for 35 musicians, and while at AmericanaFest I had a chance to talk to White about his song, his moment of discovery in music. We had that conversation in front of a few hundred people in the Country Music Hall of Fame's Ford Theater. The conversation was one of the most thoughtful ones I've had on the subject. Frankly, it ended in tears for me — and many in the audience — when White performed John Prine's seminal anti-war song \"Sam Stone.\" On this week's All Songs Considered +1 podcast, hear a conversation and performance from John Paul White.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/09/20160930_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=496083369&orgId=1&d=2708&p=510019&story=496083369&t=podcast&e=496083369&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2708",
      isoDate: "2016-09-30T16:18:00.000Z"
    },
    {
      id: "04887bdf-79fe-457b-bccf-b02d4c051370",
      title:
        "Brian Eno Sings, New Dirty Projectors, Leonard Cohen, Savoir Adore, More",
      content:
        "Bob kicks things off with a big surprise: Brian Eno is singing! The ambient pioneer and producer hasn't released a vocal record in years. But he was lured back into the studio to record a new track by the Portuguese rock band The Gift. It's called \"Love Without Violins\" and Eno says it's one of the only times you'll ever hear him utter the word \"love\" in a song. Robin follows with a cut all about those late-night hours when you're alone with your thoughts and fear the worst about yourself. Appropriately enough it's called \"Savages\" and it's from Savoir Adore, the Brooklyn-based musical project of Paul Hammer. Also on the show: Bob is so overwhelmed by the insanely warped sounds of a new Dirty Projectors song that he scarcely notices its profoundly bleak lyrics; Australian singer Julia Jacklin has a searing, slow-building rock anthem to an old flame; Leonard Cohen turns 82 and celebrates with some of the darkest music of his incredible, 50-year career; And the folk-pop duo Johnnyswim covers what they call one of the sexiest songs of all time: Chris Isaak's \"Wicked Game.\"",
      contentSnippet:
        "Bob kicks things off with a big surprise: Brian Eno is singing! The ambient pioneer and producer hasn't released a vocal record in years. But he was lured back into the studio to record a new track by the Portuguese rock band The Gift. It's called \"Love Without Violins\" and Eno says it's one of the only times you'll ever hear him utter the word \"love\" in a song. Robin follows with a cut all about those late-night hours when you're alone with your thoughts and fear the worst about yourself. Appropriately enough it's called \"Savages\" and it's from Savoir Adore, the Brooklyn-based musical project of Paul Hammer. Also on the show: Bob is so overwhelmed by the insanely warped sounds of a new Dirty Projectors song that he scarcely notices its profoundly bleak lyrics; Australian singer Julia Jacklin has a searing, slow-building rock anthem to an old flame; Leonard Cohen turns 82 and celebrates with some of the darkest music of his incredible, 50-year career; And the folk-pop duo Johnnyswim covers what they call one of the sexiest songs of all time: Chris Isaak's \"Wicked Game.\"",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/09/20160927_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=495651505&orgId=1&d=2662&p=510019&story=495651505&t=podcast&e=495651505&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2662",
      isoDate: "2016-09-27T17:27:00.000Z"
    },
    {
      id: "3a3ab87b-8970-4449-840b-ecf4db323029",
      title: "+1: Danny Brown Shares New Song, Talks Nas And New Album",
      content:
        'On this week\'s +1 podcast, Timmhotep Aku premieres "Rolling Stone," a new song from Danny Brown, and talks with the Detroit rapper about his upcoming album, <em>Atrocity Exhibition.</em>',
      contentSnippet:
        'On this week\'s +1 podcast, Timmhotep Aku premieres "Rolling Stone," a new song from Danny Brown, and talks with the Detroit rapper about his upcoming album, Atrocity Exhibition.',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/09/20160915_asc_dannybrown.mp3?awCollectionId=510019&awEpisodeId=495004163&orgId=1&d=2429&p=510019&story=495004163&t=podcast&e=495004163&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2429",
      isoDate: "2016-09-22T12:37:00.000Z"
    },
    {
      id: "fd189b9f-a4a0-4849-a1a6-efda5d486c6b",
      title: "Nine Artists To Watch For At AmericanaFest 2016",
      content:
        "NPR Music is headed to Nashville for this week's AmericanaFest where we'll be checking out some of the newest and most promising voices in roots music, along with a few veterans. All Songs Considered host Bob Boilen talks with NPR Music contributors Ann Powers and Jewly Hight about some of the artists they're most excited to see this year.",
      contentSnippet:
        "NPR Music is headed to Nashville for this week's AmericanaFest where we'll be checking out some of the newest and most promising voices in roots music, along with a few veterans. All Songs Considered host Bob Boilen talks with NPR Music contributors Ann Powers and Jewly Hight about some of the artists they're most excited to see this year.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/09/20160920_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=494729461&orgId=1&d=3492&p=510019&story=494729461&t=podcast&e=494729461&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3492",
      isoDate: "2016-09-20T15:42:00.000Z"
    },
    {
      id: "4ef487a5-8c3c-4116-ab88-04108d3e5a0d",
      title: "Peter Gabriel, Nick Cave, King Creosote, L.A. Salami, More ",
      content:
        'The gang\'s finally back together! And by gang we mean hosts Bob Boilen and Robin Hilton, who find themselves in the studio together for the first time in a month. With the summer break finally over, the two return with this week\'s essential mix, from both veteran artists and new discoveries. Robin opens the show with an epic, trance-inducing piece from Scottish singer-songwriter King Creosote, who calls it a "plaintive, hymn-like lament of frustration and debasement." Bob follows with a profoundly dark new song from Nick Cave & The Bad Seeds called "Jesus Alone." Also on the show: Peter Gabriel writes an ode to what he sees as the heroics of whistle blower Edward Snowden; Nick Murphy (formerly known as Chet Faker) a fantastically textured new song called "Fear Less;" London-based singer-songwriter L.A. Salami (his full name is Lookman Adekunle Salami) has a remarkable debut with lyrics that recall the densely layered poetry of Bob Dyla and a strange and wacky new cut from Cloud Becomes Your Hand, a New York-based band with a sense of humor and adventure that reminds Bob of Devo. 1. King Creosote "You Just Want," 2. Nick Cave & The Bad Seeds "Jesus Alone," 3. Peter Gabriel "The Veil," 4. Nick Murphy "Fear Less," 5. L.A. Salami "Going Mad As The Street Bins," 6. Cloud Becomes Your Hands "Hermit"',
      contentSnippet:
        'The gang\'s finally back together! And by gang we mean hosts Bob Boilen and Robin Hilton, who find themselves in the studio together for the first time in a month. With the summer break finally over, the two return with this week\'s essential mix, from both veteran artists and new discoveries. Robin opens the show with an epic, trance-inducing piece from Scottish singer-songwriter King Creosote, who calls it a "plaintive, hymn-like lament of frustration and debasement." Bob follows with a profoundly dark new song from Nick Cave & The Bad Seeds called "Jesus Alone." Also on the show: Peter Gabriel writes an ode to what he sees as the heroics of whistle blower Edward Snowden; Nick Murphy (formerly known as Chet Faker) a fantastically textured new song called "Fear Less;" London-based singer-songwriter L.A. Salami (his full name is Lookman Adekunle Salami) has a remarkable debut with lyrics that recall the densely layered poetry of Bob Dyla and a strange and wacky new cut from Cloud Becomes Your Hand, a New York-based band with a sense of humor and adventure that reminds Bob of Devo. 1. King Creosote "You Just Want," 2. Nick Cave & The Bad Seeds "Jesus Alone," 3. Peter Gabriel "The Veil," 4. Nick Murphy "Fear Less," 5. L.A. Salami "Going Mad As The Street Bins," 6. Cloud Becomes Your Hands "Hermit"',
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/09/20160913_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=493777275&orgId=1&d=2894&p=510019&story=493777275&t=podcast&e=493777275&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2894",
      isoDate: "2016-09-13T17:20:00.000Z"
    },
    {
      id: "41f4b291-d0f4-40e2-a8fe-1d84003b4070",
      title:
        "All Songs +1: A Film On Nick Cave And Coping With The Loss Of His Son",
      content:
        "There's a new film featuring Nick Cave and the first chance to hear his thoughts since his 15-year-old son fell from a cliff. We talk to director Andrew Dominik.",
      contentSnippet:
        "There's a new film featuring Nick Cave and the first chance to hear his thoughts since his 15-year-old son fell from a cliff. We talk to director Andrew Dominik.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/09/20160912_asc_nickcave.mp3?awCollectionId=510019&awEpisodeId=493653590&orgId=1&d=1222&p=510019&story=493653590&t=podcast&e=493653590&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1222",
      isoDate: "2016-09-12T19:43:00.000Z"
    },
    {
      id: "5d9d7b92-580d-491f-9728-f3351ad4deb6",
      title:
        "+1: Grandaddy Is Back! Frontman Jason Lytle Talks About New Album, Shares Two New Songs",
      content:
        "Ten years after Grandaddy's last album, the Modesto, Calif. band has released two new songs. Singer Jason Lytle reveals the emotional turmoil behind his return to the band's signature distorted pop.",
      contentSnippet:
        "Ten years after Grandaddy's last album, the Modesto, Calif. band has released two new songs. Singer Jason Lytle reveals the emotional turmoil behind his return to the band's signature distorted pop.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/09/20160909_asc_grandaddy.mp3?awCollectionId=510019&awEpisodeId=493263002&orgId=1&d=1025&p=510019&story=493263002&t=podcast&e=493263002&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1025",
      isoDate: "2016-09-09T14:14:00.000Z"
    },
    {
      id: "6e9a1ce1-da1b-431b-b545-9d36fd967478",
      title: "New Sylvan Esso, Sharon Van Etten, R.E.M. Acoustic, More",
      content:
        "When we settled into the studio for this week's <em>All Songs Considered</em>, a clear theme quickly emerged: We had a whole lot of music by artists we already adore! This includes a rare acoustic demo by R.E.M., a glorious new electro-pop cut from Sylvan Esso, a heartbreaking tribute song from Sharon Van Etten and more.This year marks the 25th anniversary of R.E.M.'s 1991 classic album <em>Out Of Time</em>. To mark the occasion, the band is releasing a deluxe version of the album that includes early acoustic demos of every song, including the one Robin Hilton kicks this week's show off with, \"Radio Song.\" Stephen Thompson follows in the same spirit with Sylvan Esso's brand new \"Radio,\" a somewhat retro synth thumper that mixes the band's signature dance pop with singer Amelia Meath's searching, often melancholy vocals.Also on the show: Sharon Van Etten's stirring tribute to the victims of the Pulse nightclub shootings in Orlando, Fla.; English poet, playwright and rapper Kate Tempest and a fabulous kiss-off from the Phoenix, Ariz. band AJJ. Plus, John K. Samson, lead singer for The Weakerthans, returns with a sentimental new song that has Stephen thinking of happier days.",
      contentSnippet:
        "When we settled into the studio for this week's All Songs Considered, a clear theme quickly emerged: We had a whole lot of music by artists we already adore! This includes a rare acoustic demo by R.E.M., a glorious new electro-pop cut from Sylvan Esso, a heartbreaking tribute song from Sharon Van Etten and more.This year marks the 25th anniversary of R.E.M.'s 1991 classic album Out Of Time. To mark the occasion, the band is releasing a deluxe version of the album that includes early acoustic demos of every song, including the one Robin Hilton kicks this week's show off with, \"Radio Song.\" Stephen Thompson follows in the same spirit with Sylvan Esso's brand new \"Radio,\" a somewhat retro synth thumper that mixes the band's signature dance pop with singer Amelia Meath's searching, often melancholy vocals.Also on the show: Sharon Van Etten's stirring tribute to the victims of the Pulse nightclub shootings in Orlando, Fla.; English poet, playwright and rapper Kate Tempest and a fabulous kiss-off from the Phoenix, Ariz. band AJJ. Plus, John K. Samson, lead singer for The Weakerthans, returns with a sentimental new song that has Stephen thinking of happier days.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/09/20160902_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=492810747&orgId=1&d=2293&p=510019&story=492810747&t=podcast&e=492810747&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2293",
      isoDate: "2016-09-06T14:57:00.000Z"
    },
    {
      id: "8805c751-52b9-4e4d-a613-ec671e2be296",
      title: "All Songs Rewind: Breaking Up With Your Favorite Bands",
      content:
        "This week: the moment it all went wrong, relived in vivid detail. Members of the <em>All Songs Considered </em>crew share stories of hope and heartache as they remember some of the bands they've broken up with over the years and why. NPR Music's Daoud Tyler-Ameen joins hosts Bob Boilen and Robin Hilton for the discussion. Context is everything here, so the three narrowed their picks into four basic categories: bands you swore off entirely and never looked back; bands you simply grew away from with age; bands you no longer follow, but you still remember the good times; and bands you'll stick by no matter what. Prepare for pride-swallowing tales of joy and pain, smooth jazz and second-wave emo, outrage and, ultimately, redemption.",
      contentSnippet:
        "This week: the moment it all went wrong, relived in vivid detail. Members of the All Songs Considered crew share stories of hope and heartache as they remember some of the bands they've broken up with over the years and why. NPR Music's Daoud Tyler-Ameen joins hosts Bob Boilen and Robin Hilton for the discussion. Context is everything here, so the three narrowed their picks into four basic categories: bands you swore off entirely and never looked back; bands you simply grew away from with age; bands you no longer follow, but you still remember the good times; and bands you'll stick by no matter what. Prepare for pride-swallowing tales of joy and pain, smooth jazz and second-wave emo, outrage and, ultimately, redemption.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/08/20160830_asc_podcast.mp3?awCollectionId=510019&awEpisodeId=491924423&orgId=1&d=2925&p=510019&story=491924423&t=podcast&e=491924423&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2925",
      isoDate: "2016-08-30T12:56:00.000Z"
    },
    {
      id: "22155bc6-ef80-48c5-a5d3-205f15f652ee",
      title: "+1: The Beatles Are Live And Sounding Better Than Ever",
      content:
        "On this +1 edition of <em>All Songs Considered </em>host Bob Boilen talks with producer Giles Martin about his remarkable efforts to salvage the only three professional recordings ever made of The Beatles performing live. Giles explains how he was able to take the analog tapes of the band's Hollywood Bowl shows from 1964 and 1965 and make them sound so much better. Giles Martin is the son of legendary Beatles producer George Martin.",
      contentSnippet:
        "On this +1 edition of All Songs Considered host Bob Boilen talks with producer Giles Martin about his remarkable efforts to salvage the only three professional recordings ever made of The Beatles performing live. Giles explains how he was able to take the analog tapes of the band's Hollywood Bowl shows from 1964 and 1965 and make them sound so much better. Giles Martin is the son of legendary Beatles producer George Martin.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/08/20160824_asc_hollywoodbowl.mp3?awCollectionId=510019&awEpisodeId=491335500&orgId=1&d=1212&p=510019&story=491335500&t=podcast&e=491335500&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1212",
      isoDate: "2016-08-25T13:36:00.000Z"
    },
    {
      id: "d01e0daf-6d5f-49c6-98de-649a27dc3dc2",
      title: "All Songs Rewind: The Worst Songs Of All Time?",
      content:
        "<em>Note: With hosts Bob Boilen and Robin Hilton away this week, we've got an encore presentation of </em>The Worst Songs Of All Time, <em>from Feb. 2014. </em>Guitarist, actor, writer (and former Monitor Mix blogger) Carrie Brownstein joins us, along with NPR Music's Stephen Thompson, to do something we don't normally do: Talk about the songs we really, <em>really</em> don't like. Our mission at <em>All Songs</em> is to bring you our favorite musical discoveries of the week. But after Stephen wrote his Good Listener column examining Starship's widely reviled hit single \"We Built This City,\" we watched the comments pour in like an out-of-control fire hose, and got to talking about all the songs that drive us bonkers. It was so much fun we decided to continue the discussion here, with a look at some of the contenders for worst songs of all time, and why they stick in our craw. These are the relentless earworms — the songs you can't escape once they're in your head — or the annoying novelty songs. \"The Candy Man,\" anyone? We also look at songs that take themselves too seriously, songs we used to love until they were ruined by a bad personal experience and more.",
      contentSnippet:
        "Note: With hosts Bob Boilen and Robin Hilton away this week, we've got an encore presentation of The Worst Songs Of All Time, from Feb. 2014. Guitarist, actor, writer (and former Monitor Mix blogger) Carrie Brownstein joins us, along with NPR Music's Stephen Thompson, to do something we don't normally do: Talk about the songs we really, really don't like. Our mission at All Songs is to bring you our favorite musical discoveries of the week. But after Stephen wrote his Good Listener column examining Starship's widely reviled hit single \"We Built This City,\" we watched the comments pour in like an out-of-control fire hose, and got to talking about all the songs that drive us bonkers. It was so much fun we decided to continue the discussion here, with a look at some of the contenders for worst songs of all time, and why they stick in our craw. These are the relentless earworms — the songs you can't escape once they're in your head — or the annoying novelty songs. \"The Candy Man,\" anyone? We also look at songs that take themselves too seriously, songs we used to love until they were ruined by a bad personal experience and more.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/08/20160823_asc_podcast.mp3?awCollectionId=510019&awEpisodeId=491059382&orgId=1&d=3673&p=510019&story=491059382&t=podcast&e=491059382&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "3673",
      isoDate: "2016-08-23T15:01:00.000Z"
    },
    {
      id: "6819f519-70c2-4ef5-bc87-6d34d75ba903",
      title:
        "All Songs +1: How Aaron Dessner Unknowingly Rescued Lisa Hannigan ",
      content:
        "I've missed Lisa Hannigan. Five years ago the Irish songwriter and singer made an unforgettably beautiful record called Passenger. She came by to play a Tiny Desk Concert that year and then I waited sometimes impatiently for five years, it was tough, I miss her sad delicate songs. Well it turns out the five year gap wasn't something she did with intent. On this +1 edition of All Songs Considered I talk with Lisa Hannigan about how this happenstance collaboration, how it unlocked her writing block and the mechanics of making this long distance musical relationship work.",
      contentSnippet:
        "I've missed Lisa Hannigan. Five years ago the Irish songwriter and singer made an unforgettably beautiful record called Passenger. She came by to play a Tiny Desk Concert that year and then I waited sometimes impatiently for five years, it was tough, I miss her sad delicate songs. Well it turns out the five year gap wasn't something she did with intent. On this +1 edition of All Songs Considered I talk with Lisa Hannigan about how this happenstance collaboration, how it unlocked her writing block and the mechanics of making this long distance musical relationship work.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/08/20160817_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=490412080&orgId=1&d=1269&p=510019&story=490412080&t=podcast&e=490412080&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1269",
      isoDate: "2016-08-18T13:50:27.000Z"
    },
    {
      id: "2f2df610-da57-4c00-bb90-4113e8006775",
      title: "Bon Iver, The White Stripes, Ed Harcourt, Lambchop, More",
      content:
        "This week on <em>All Songs Considered</em>, we return from break with new music by some of our all-time favorite artists, including a wildly different sound from Bon Iver, a previously unreleased White Stripes song and a remarkable new direction for the Nashville art-folk group Lambchop.Also on the show: The Neutral Milk Hotel-inspired LVL UP, an arresting instrumental from Swans percussionist Thor Harris and Ed Harcourt's searing indictment against political corruption.But first, Robin digs into a little gift from Bob: a Twinkie! Playlist: 1. LVL UP, 2. Bon Iver, 3. Lambchop, 4. The White Stripes, 5. Thor & Friends, 6. Ed Harcourt",
      contentSnippet:
        "This week on All Songs Considered, we return from break with new music by some of our all-time favorite artists, including a wildly different sound from Bon Iver, a previously unreleased White Stripes song and a remarkable new direction for the Nashville art-folk group Lambchop.Also on the show: The Neutral Milk Hotel-inspired LVL UP, an arresting instrumental from Swans percussionist Thor Harris and Ed Harcourt's searing indictment against political corruption.But first, Robin digs into a little gift from Bob: a Twinkie! Playlist: 1. LVL UP, 2. Bon Iver, 3. Lambchop, 4. The White Stripes, 5. Thor & Friends, 6. Ed Harcourt",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/08/20160816_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=490224288&orgId=1&d=2553&p=510019&story=490224288&t=podcast&e=490224288&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2553",
      isoDate: "2016-08-16T16:51:00.000Z"
    },
    {
      id: "88b3b9c6-2afb-483c-aa75-3f4120df9f76",
      title: "Blood Orange, NAO, Joyce Manor, Factory Floor, More",
      content:
        "This week, we've got a surprise: Bob Boilen and Robin Hilton both went on vacation and left the <em>All Songs</em> studio unlocked. Apparently neither one of them uses two-step verification, so it took only a very minor effort for a couple of highly skilled NPR Music team members, Daoud Tyler-Ameen and Saidah Blount, to hack into the elaborate system of tubes, funnels and hamster wheels that feed podcasts from our microphones into your earbuds for a very special takeover edition of <em>All Songs Considered. </em>Daoud last visited the show to play some foot-stomping power-pop, and Saidah was our copilot for this year's South By Southwest festival preview. Together they dissect new music from California punks Joyce Manor, sounding more fleshed-out and anthemic than ever; slow-burning electro-soul from London songwriter Nao; a hip-hop track by two South Asian MCs that's as funny as it is uneasy about our current political moment and more. (And because Daoud and Sai grew up in the '80s and '90s, reference is made to JNCO jeans, black lipstick, the old THX logo theme and the end credits of the 1995 <em>Power Rangers</em> film. Things get ... specific.)",
      contentSnippet:
        "This week, we've got a surprise: Bob Boilen and Robin Hilton both went on vacation and left the All Songs studio unlocked. Apparently neither one of them uses two-step verification, so it took only a very minor effort for a couple of highly skilled NPR Music team members, Daoud Tyler-Ameen and Saidah Blount, to hack into the elaborate system of tubes, funnels and hamster wheels that feed podcasts from our microphones into your earbuds for a very special takeover edition of All Songs Considered. Daoud last visited the show to play some foot-stomping power-pop, and Saidah was our copilot for this year's South By Southwest festival preview. Together they dissect new music from California punks Joyce Manor, sounding more fleshed-out and anthemic than ever; slow-burning electro-soul from London songwriter Nao; a hip-hop track by two South Asian MCs that's as funny as it is uneasy about our current political moment and more. (And because Daoud and Sai grew up in the '80s and '90s, reference is made to JNCO jeans, black lipstick, the old THX logo theme and the end credits of the 1995 Power Rangers film. Things get ... specific.)",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/08/20160809_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=489338770&orgId=1&d=2302&p=510019&story=489338770&t=podcast&e=489338770&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2302",
      isoDate: "2016-08-09T17:32:00.000Z"
    },
    {
      id: "a7ff52b4-3e44-40d1-8a80-5b1d5a4403ed",
      title: "All Songs +1: A Conversation With Radiohead's Jonny Greenwood",
      content:
        "On this week's +1 Bob chats with Radiohead's visionary guitarist Jonny Greenwood about the making of the band's newest record, A Moon Shape Pool",
      contentSnippet:
        "On this week's +1 Bob chats with Radiohead's visionary guitarist Jonny Greenwood about the making of the band's newest record, A Moon Shape Pool",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/08/20160804_asc_wholeshow2.mp3?awCollectionId=510019&awEpisodeId=488584530&orgId=1&d=1478&p=510019&story=488584530&t=podcast&e=488584530&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1478",
      isoDate: "2016-08-04T14:00:30.000Z"
    },
    {
      id: "58802e3c-8b34-485b-8bb1-00f445f31848",
      title: "New Mix: Regina Spektor, Lowell, Angelica Garcia, More",
      content:
        "On this week's episode of All Songs Considered, Bob Boilen and guest host Stephen Thompson play new music from Regina Spektor, experimental rap from Clipping, which features Daveed Diggs of Hamilton, and a great synth track from singer-songwriter Lowell.Bob starts the show off with a song from the 22-year-old guitarist and singer Angelica Garcia that he cannot get out of his head. Orange Flower\" is a playful, foot-stomping rock track and Garcia's very first single. Stephen shares \"Umpqua Rushing,\" a song about a river in Oregon by the group Blind Pilot, who he has been following for almost a decade.But first, it's Stephen's birthday, which means it's time for the NPR Music team to surprise him with a cake made of ice cream and Twinkies. Obviously.",
      contentSnippet:
        "On this week's episode of All Songs Considered, Bob Boilen and guest host Stephen Thompson play new music from Regina Spektor, experimental rap from Clipping, which features Daveed Diggs of Hamilton, and a great synth track from singer-songwriter Lowell.Bob starts the show off with a song from the 22-year-old guitarist and singer Angelica Garcia that he cannot get out of his head. Orange Flower\" is a playful, foot-stomping rock track and Garcia's very first single. Stephen shares \"Umpqua Rushing,\" a song about a river in Oregon by the group Blind Pilot, who he has been following for almost a decade.But first, it's Stephen's birthday, which means it's time for the NPR Music team to surprise him with a cake made of ice cream and Twinkies. Obviously.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/08/20160802_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=488411913&orgId=1&d=2232&p=510019&story=488411913&t=podcast&e=488411913&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2232",
      isoDate: "2016-08-02T19:49:00.000Z"
    },
    {
      id: "acba8a98-7512-4faa-baa9-002cd8547d2a",
      title:
        "All Songs +1: Sofar Sounds Wants To Bring Your Favorite Musicians To Your Home",
      content:
        "In this week's +1 podcast, Bob Boilen interviews Rafe Offer of Sofar Sounds, which brings artists and fans together for shows in small, intimate spaces.",
      contentSnippet:
        "In this week's +1 podcast, Bob Boilen interviews Rafe Offer of Sofar Sounds, which brings artists and fans together for shows in small, intimate spaces.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/07/20160729_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=487947558&orgId=1&d=1288&p=510019&story=487947558&t=podcast&e=487947558&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "1288",
      isoDate: "2016-07-29T18:41:00.000Z"
    },
    {
      id: "bee3e04a-8ef9-416b-82fc-0507c38f15c2",
      title:
        "New Mix: Wilco, Sleigh Bells, The Julie Ruin, JEFF The Brotherhood, More",
      content:
        "On this week's episode of All Songs Considered, we play new music from old favorites Wilco, JEFF The Brotherhood and Sleigh Bells. We also share songs from artists we've only just found out about: Bob introduces us to the young, Singapore-based Linying and our intern Sophie brings us Globelamp.Robin points out that the very sad \"Play That One Again,\" from Greg Laswell's album Everyone Thinks I Dodged A Bullet, has its roots in real-life heartache: Laswell wrote the song in the wake of a divorce and while watching a parent suffer. In a track from Sleigh Bells, we hear the band grow out of their noise pop sound and into something a little more muted.But first, it's Robin's last day before vacation so he says goodbye for now and eats one too many packs of Smarties.",
      contentSnippet:
        "On this week's episode of All Songs Considered, we play new music from old favorites Wilco, JEFF The Brotherhood and Sleigh Bells. We also share songs from artists we've only just found out about: Bob introduces us to the young, Singapore-based Linying and our intern Sophie brings us Globelamp.Robin points out that the very sad \"Play That One Again,\" from Greg Laswell's album Everyone Thinks I Dodged A Bullet, has its roots in real-life heartache: Laswell wrote the song in the wake of a divorce and while watching a parent suffer. In a track from Sleigh Bells, we hear the band grow out of their noise pop sound and into something a little more muted.But first, it's Robin's last day before vacation so he says goodbye for now and eats one too many packs of Smarties.",
      enclosure: {
        url:
          "https://play.podtrac.com/npr-510019/npr.streaming.adswizz.com/anon.npr-mp3/npr/asc/2016/07/20160721_asc_wholeshow.mp3?awCollectionId=510019&awEpisodeId=487617392&orgId=1&d=2842&p=510019&story=487617392&t=podcast&e=487617392&ft=pod&f=510019",
        length: "0",
        type: "audio/mpeg"
      },
      duration: "2842",
      isoDate: "2016-07-27T15:04:00.000Z"
    }
  ]
};
