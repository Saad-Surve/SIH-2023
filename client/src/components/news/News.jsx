import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";
import def from "../../assets/default_thumbnail.jpg";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { ScrollShadow } from "@nextui-org/react";
import "./News.css";
import home1 from "../../assets/bg1.jpg";

const dummydata = [
  {
    name: "Legal aid in India: Much is Done, But more is needed",
    url: "https://www.thehansindia.com/hans/opinion/news-analysis/legal-aid-in-india-much-is-done-but-more-is-needed-842205",
    image: {
      thumbnail: {
        contentUrl:
          "https://www.bing.com/th?id=OVFT.h0O05b2NsO1r6_ytgkP0CS&pid=News",
        width: 700,
        height: 420,
      },
    },
    description:
      "A citizen of a nation is obligated to face justice when his or her personal conduct or commercial activities are deemed to be in opposition to domestic legislation or the rights of another",
    about: [
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/85fa63d3-9596-adb9-b4eb-502273d84f56",
        name: "India",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/0197f99d-276f-3485-6044-cbac5418d624",
        name: "Legal aid",
      },
    ],
    provider: [
      {
        _type: "Organization",
        name: "The Hans India",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=ODF.C1ai1HOZkX2PH7JO9JSnrA&pid=news",
          },
        },
      },
    ],
    datePublished: "2023-12-04T03:30:00.0000000Z",
    category: "Politics",
    ampUrl:
      "https://www.thehansindia.com/amp/hans/opinion/news-analysis/legal-aid-in-india-much-is-done-but-more-is-needed-842205",
  },
  {
    name: "CM to decide on transfer of ED case to CBI: Law min",
    url: "https://timesofindia.indiatimes.com/city/trichy/cm-to-decide-on-transfer-of-ed-case-to-cbi-law-minister/articleshow/105713413.cms",
    description:
      "The ED has urged the DGP to pursue legal action for trespassing, conducting an illegal search, stealing sensitive documents, and accessing confidential case records. Law must be potent enough to act against those in power: HC The Madras High Court has ...",
    about: [
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/178c7867-ab25-0abe-ed87-7855ff4b6499",
        name: "Law",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/a0644903-014c-a3dd-92f5-234c622cd236",
        name: "Erectile dysfunction",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/7804fb2e-ea6c-f934-6dc5-c5bc671e2ba2",
        name: "The Times of India",
      },
    ],
    provider: [
      {
        _type: "Organization",
        name: "Indiatimes",
      },
    ],
    datePublished: "2023-12-04T03:12:00.0000000Z",
    category: "Politics",
    ampUrl:
      "https://timesofindia.indiatimes.com/city/trichy/cm-to-decide-on-transfer-of-ed-case-to-cbi-law-minister/amp_articleshow/105713413.cms",
  },
  {
    name: "No court relief for eateries over ‘Anna’ tag",
    url: "https://timesofindia.indiatimes.com/city/mumbai/no-court-relief-for-2-eateries-anna-tag-mumbai/articleshow/105690837.cms",
    image: {
      thumbnail: {
        contentUrl:
          "https://www.bing.com/th?id=OVFT.WhyUsqdS2Yt-leSDnn_l8S&pid=News",
        width: 700,
        height: 380,
      },
    },
    description:
      "Mumbai: It was recently ‘Anna’ vs ‘Anna’ before Bombay high court when two eateries locked horns over ... which is common to the trade and associated with south Indian cuisine,”said Justice Sandeep Marne but said the owner of ‘Anna’, cannot ...",
    about: [
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/fbbc8d69-667a-e1ff-34bf-e524be01025d",
        name: "Mumbai",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/337074b7-46c7-4019-82b6-2be7a2b629aa",
        name: "Restaurant",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/7804fb2e-ea6c-f934-6dc5-c5bc671e2ba2",
        name: "The Times of India",
      },
    ],
    provider: [
      {
        _type: "Organization",
        name: "Indiatimes",
      },
    ],
    datePublished: "2023-12-03T18:21:00.0000000Z",
    ampUrl:
      "https://timesofindia.indiatimes.com/city/mumbai/no-court-relief-for-2-eateries-anna-tag-mumbai/amp_articleshow/105690837.cms",
  },
  {
    name: "‘Foul language’ not enough to invoke SC/ST Act? Supreme Court should rethink",
    url: "https://www.msn.com/en-in/news/opinion/foul-language-not-enough-to-invoke-scst-act-supreme-court-should-rethink/ar-AA1kWQ9W",
    image: {
      thumbnail: {
        contentUrl:
          "https://www.bing.com/th?id=OVFT.n232fPnhuD6S9RA6mMzzdy&pid=News",
        width: 300,
        height: 169,
      },
    },
    description:
      "When someone uses derogatory terms like 'thief' for SC/ST individuals, they indirectly invoke the stigma of the colonial Criminal Tribes Act, which tarnished entire communities.",
    about: [
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/edbdad3e-b40e-62fd-849a-f3eaffadc75d",
        name: "Seychelles",
      },
    ],
    provider: [
      {
        _type: "Organization",
        name: "ThePrint on MSN.com",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=ODF.9kfNo9d18zH27ShHLQcBfw&pid=news",
          },
        },
      },
    ],
    datePublished: "2023-12-04T03:13:48.0000000Z",
    category: "Politics",
  },
  {
    name: "Meet Allison Greenfield, the law clerk driving Trump bonkers at his fraud trial",
    url: "https://www.msn.com/en-in/autos/news/meet-allison-greenfield-the-law-clerk-driving-trump-bonkers-at-his-fraud-trial/ar-AA1kVlH7",
    description:
      "Donald Trump's attacks on Allison Greenfield, now banned by a gag order, led to a deluge of antisemitic threats against Justice Arthur Engoron's law clerk.",
    about: [
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/1ae0834d-0084-c485-4efa-8e2643b73ddf",
        name: "Greenfield",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/1a466af2-ed23-25bd-794d-1ca925e4681b",
        name: "Donald Trump",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/178c7867-ab25-0abe-ed87-7855ff4b6499",
        name: "Law",
      },
    ],
    mentions: [
      {
        name: "Greenfield",
      },
      {
        name: "Donald Trump",
      },
      {
        name: "Law",
      },
    ],
    provider: [
      {
        _type: "Organization",
        name: "Business Insider India on MSN.com",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=ODF.Xh2kWhXT-M39n7mafR-CBA&pid=news",
          },
        },
      },
    ],
    datePublished: "2023-12-03T13:29:00.0000000Z",
    category: "World",
  },
  {
    name: "Alleged plot by Indian intelligence to kill targets in Canada and U.S. reveals sloppy spycraft",
    url: "https://www.msn.com/en-ca/news/canada/alleged-plot-by-indian-intelligence-to-kill-targets-in-canada-and-us-reveals-sloppy-spycraft/ar-AA1kWa4K",
    image: {
      thumbnail: {
        contentUrl:
          "https://www.bing.com/th?id=OVFT.PaNpgI_jc3SvhloQofKX3y&pid=News",
        width: 700,
        height: 525,
      },
    },
    description:
      "On their alleged list of targets, the indictment says, was Hardeep Singh Nijjar, an outspoken Canadian Sikh separatist, who was shot dead in June outside a Sikh temple in Surrey, B.C., which caused a diplomatic row between Canada and India after Prime Minister Justin Trudeau accused India of involvement in Nijjar’s killing.",
    about: [
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/d37cf96d-0130-d32d-3cc6-67688732d573",
        name: "Alleged",
      },
    ],
    mentions: [
      {
        name: "Alleged",
      },
      {
        name: "India",
      },
      {
        name: "Spycraft",
      },
    ],
    provider: [
      {
        _type: "Organization",
        name: "National Post on MSN.com",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=ODF.QtlGURtDYZJoV-eeVyOKpg&pid=news",
          },
        },
      },
    ],
    datePublished: "2023-12-03T20:50:37.0000000Z",
    category: "World",
  },
  {
    name: "ICC prosecutor urges Israel and Hamas to respect international law",
    url: "https://theprint.in/world/icc-prosecutor-urges-israel-and-hamas-to-respect-international-law/1870066/",
    description:
      "The prosecutor of the International Criminal Court (ICC) on Sunday called on both sides of the war between Israel and Hamas to adhere to international law, and to allow",
    about: [
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/1ffafed3-2b37-b871-c271-aa855d98449a",
        name: "Israel",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/fd56a0c1-5b09-6e40-09dc-a8abf5069c30",
        name: "Hamas",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/5cf7855c-4b75-ceb0-438b-ba330bd26e6b",
        name: "International law",
      },
    ],
    provider: [
      {
        _type: "Organization",
        name: "ThePrint",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=ODF.9kfNo9d18zH27ShHLQcBfw&pid=news",
          },
        },
      },
    ],
    datePublished: "2023-12-03T13:00:00.0000000Z",
    category: "World",
    ampUrl:
      "https://theprint.in/world/icc-prosecutor-urges-israel-and-hamas-to-respect-international-law/1870066/?amp",
  },
  {
    name: "China’s Personal Data Law – Legal And Practical Assessment Of Compliance Risk.",
    url: "https://conventuslaw.com/report/chinas-personal-data-law-legal-and-practical-assessment-of-compliance-risk/",
    description:
      "The enactment of the Personal Information Protection Law (“PIPL”) in 2021 establishes a legal framework regulating foreign and ... Once the Draft Provisions become law, this is good news for foreign companies collecting a small amount of PI in China ...",
    about: [
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/178c7867-ab25-0abe-ed87-7855ff4b6499",
        name: "Law",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/34185f32-b36e-cf36-6e9b-94dfe4067e0e",
        name: "Conventus iuridicus",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/9bf19370-4ab8-455b-5ed3-162daf46cac5",
        name: "Risk",
      },
    ],
    provider: [
      {
        _type: "Organization",
        name: "Conventus Law",
      },
    ],
    datePublished: "2023-12-04T00:00:00.0000000Z",
    category: "ScienceAndTechnology",
  },
  {
    name: "Hockey India Junior, Sub-Junior Academy Championship 2023: Roundglass Punjab, Bhai Behlo register wins",
    url: "https://www.bignewsnetwork.com/news/274053705/hockey-india-junior-sub-junior-academy-championship-2023-roundglass-punjab-bhai-behlo-register-wins",
    description:
      "Day 1 of the 1st Hockey India Junior and Sub Junior Men Academy Championship 2023 - Zone A witnessed Roundglass Punjab Hockey Club Academy win their match in",
    about: [
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/d98d08e1-818e-a7ba-30a5-4637a11eec3e",
        name: "Punjab",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/a41894fc-9dff-426f-f439-1d9349c7e93b",
        name: "Academy",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/2491b25a-6ef0-435f-eee9-655ba0fc2c5d",
        name: "Football League Championship",
      },
    ],
    provider: [
      {
        _type: "Organization",
        name: "Big News Network.com",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=ODF.k6O3sRggnv9dZCaM2w5RLw&pid=news",
          },
        },
      },
    ],
    datePublished: "2023-12-04T05:09:00.0000000Z",
  },
  {
    name: "Republicans await court verdict on DOJ's plea to reinforce gag orders on Trump",
    url: "http://www.smetimes.in/smetimes/news/global-business/2023/Dec/03/trump-bverdict99557.html",
    description:
      "The federal gag order being considered by the D.C. Circuit Court of Appeals could set new guidelines on how far defendants can go in criticising prosecutors, judges and witnesses in pending cases, multiple media reports said. Trump and his legal team ...",
    about: [
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/1a466af2-ed23-25bd-794d-1ca925e4681b",
        name: "Donald Trump",
      },
      {
        readLink:
          "https://api.bing.microsoft.com/api/v7/entities/485b2a51-d95c-6470-9357-463834668752",
        name: "Verdict",
      },
    ],
    provider: [
      {
        _type: "Organization",
        name: "SME Times",
      },
    ],
    datePublished: "2023-12-03T00:00:00.0000000Z",
    category: "World",
  },
];
const News = () => {
  const data = useLoaderData();
  console.log(data.value);
  return (
    <div className="flex relative">
      <div
        className="bg-cover bg-center w-full h-screen absolute opacity-75 bg-gradient-to-b brightness-[25%] saturate-150"
        style={{ backgroundImage: `url(${home1})` }}
      ></div>
      <div className="flex flex-col  px-6 gap-6 w-3/4">
        <h1 className="pt-4 pl-4 text-4xl font-bold font-saira text-white z-10">
          {" "}
          Trending Legal news in India{" "}
        </h1>
        <ScrollShadow
          className="flex flex-col scrollbar px-4 py-4 gap-6 h-[calc(100vh-5rem)] overflow-y-auto"
          size={20}
        >
          {data.value
            .sort((a, b) => {
              return new Date(b.datePublished) - new Date(a.datePublished);
            })
            .map((article, index) => {
              return (
                <NewsCard
                  key={index}
                  headline={article.name}
                  description={article.description}
                  date={article.datePublished}
                  thumbnail={article?.image?.thumbnail?.contentUrl || def}
                  url={article.url}
                />
              );
            })}
        </ScrollShadow>
      </div>
      <ScrollShadow className="w-1/4 h-[calc(100vh-2rem)] scrollbar mr-4 my-2 p-4 overflow-y-auto z-10">
        <div className="centerContent overflow-y-auto">
          <div className="selfCenter spaceBetween ">
            <TwitterTimelineEmbed
              onLoad={function noRefCheck() {}}
              options={{
                width: 400,
              }}
              screenName="MLJ_GoI"
              sourceType="profile"
            />
          </div>
        </div>
      </ScrollShadow>
    </div>
  );
};

export default News;

export async function loader() {
  const options = {
    method: "GET",
    url: "https://api.bing.microsoft.com/v7.0/news/search",
    params: {
      q: "india legal law indian",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "Ocp-Apim-Subscription-Key": "597845d7f20a4178a9a2d902d2342a5f",
    },
  };
  let response;
  try {
    response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    response = { data: null };
    console.error(error);
  }
  return response.data;
}
