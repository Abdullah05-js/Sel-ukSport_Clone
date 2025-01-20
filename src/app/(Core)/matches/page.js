import React from 'react';
import { Navbar } from '@/componets/navbar/Navbar';
import Link from 'next/link';
import GradientText from '@/componets/GradientText/GradientText';
export default async function Page() {

    // const response = await fetch("");
    // const data1 = await response.json();

    const data = {
        "__typename": "LiveScoresPage",
        "pageInfo": {
            "dataLayer": {
                "bettingDetailsUpdatedAt": null
            }
        },
        "liveScores": [
            {
                "competition": {
                    "id": "482ofyysbdbeoxauk19yg7tdt",
                    "name": "الدوري التركي الممتاز",
                    "area": {
                        "name": "Turkiye"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2F482ofyysbdbeoxauk19yg7tdt.png"
                    }
                },
                "matches": [
                    {
                        "id": "AYUtLpr7OG1jY__SZjHs3",
                        "startDate": "2025-01-18T10:30:00.000Z",
                        "venue": {
                            "name": "Basaksehir Fatih Terim Stadyumu"
                        },
                        "lastUpdatedAt": "2024-07-12T05:52:26.000Z",
                        "cachedAt": "2025-01-18T07:18:14.067Z",
                        "period": null,
                        "round": {
                            "name": "Super Lig",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "47njg6cmlx5q3fvdsupd2n6qu",
                            "code": "IBS",
                            "short": "إسطنبول بي.بي.",
                            "long": "إسطنبول بي.بي.",
                            "full": "إسطنبول بي.بي.",
                            "name": "إسطنبول بي.بي.",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Flv7HzaNUayT0dxfXl_99T.png"
                            }
                        },
                        "teamB": {
                            "id": "1lbrlj3uu8wi2h9j79snuoae4",
                            "code": "RIZ",
                            "short": "ريزيسبور",
                            "long": "ريزيسبور",
                            "full": "ريزيسبور",
                            "name": "ريزيسبور",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FWuCfTZvyxLz1buGAln1xD.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "RfHrpFc93NeoOeU3tWahd",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": {
                            "name": "Gaziantep Stadyumu"
                        },
                        "lastUpdatedAt": "2024-07-12T05:52:27.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "Super Lig",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2agzb2h4ppg7lfz9hn7eg1rqo",
                            "code": "GAZ",
                            "short": "غازيزير غازيانتيب فك",
                            "long": "غازيزير غازيانتيب فك",
                            "full": "غازيزير غازيانتيب فك",
                            "name": "غازيزير غازيانتيب فك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4O26QIM4rr99iO-dycvW1.png"
                            }
                        },
                        "teamB": {
                            "id": "2wewa9ecjudncv3fs8d3ind9l",
                            "code": "BOD",
                            "short": "Bodrumspor",
                            "long": "Bodrumspor",
                            "full": "Bodrumspor",
                            "name": "Bodrumspor",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FdthOXDVOsFWWwbaPgA_6G.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "xKqkKRPHUCtgaOxhrmHWD",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": {
                            "name": "Tupras Stadyumu"
                        },
                        "lastUpdatedAt": "2024-07-12T05:52:27.000Z",
                        "cachedAt": "2025-01-18T06:44:59.449Z",
                        "period": null,
                        "round": {
                            "name": "Super Lig",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2ez9cvam9lp9jyhng3eh3znb4",
                            "code": "BJK",
                            "short": "بيشكتاش",
                            "long": "بيشكتاش",
                            "full": "بيشكتاش",
                            "name": "بيشكتاش",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FWKE2EIP1R7rmdG3E5wVFf.png"
                            }
                        },
                        "teamB": {
                            "id": "dpsnqu7pd2b0shfzjyn5j1znf",
                            "code": "SAM",
                            "short": "سامسونسبور",
                            "long": "سامسونسبور",
                            "full": "سامسونسبور",
                            "name": "سامسونسبور",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FYHGMtRQEKOKPtSvmVXnHu.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "2o9svokc5s7diish3ycrzk7jm",
                    "name": "تركيا 2",
                    "area": {
                        "name": "Turkiye"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F6kd6webenogylfgwt2aa9l6vx.png"
                    }
                },
                "matches": [
                    {
                        "id": "TRXJczKj0oArmmcAPGYTq",
                        "startDate": "2025-01-18T10:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-24T12:52:26.000Z",
                        "cachedAt": "2025-01-18T06:46:22.741Z",
                        "period": null,
                        "round": {
                            "name": "1. Lig",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ea2gyhkv6vwmxbxevdb4u3796",
                            "code": "ERZ",
                            "short": "ايزوروم",
                            "long": "ايزوروم",
                            "full": "ايزوروم",
                            "name": "ايزوروم",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FXg_JBfL7SiH5Yem7_hGYQ.png"
                            }
                        },
                        "teamB": {
                            "id": "7tmn8pi1b2i8yidq54opmmd6x",
                            "code": "BAN",
                            "short": "بانديرماسبور",
                            "long": "بانديرماسبور",
                            "full": "بانديرماسبور",
                            "name": "بانديرماسبور",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FgQoUFeuGaXqU-ALz64wYs.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "3nJHkhSnKKiAmCfhRrTsi",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-24T12:52:06.000Z",
                        "cachedAt": "2025-01-18T07:29:16.320Z",
                        "period": null,
                        "round": {
                            "name": "1. Lig",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "iiep6s3jjwf609djj19751m2",
                            "code": "ERO",
                            "short": "Esenler Erokspor",
                            "long": "Esenler Erokspor",
                            "full": "Esenler Erokspor",
                            "name": "Esenler Erokspor",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F3iMgwl3R9_Y8712kpO--L.png"
                            }
                        },
                        "teamB": {
                            "id": "8yo7nlmjg9s52aw1wuwldpam0",
                            "code": "ADA",
                            "short": "آدانسبور",
                            "long": "آدانسبور",
                            "full": "آدانسبور",
                            "name": "آدانسبور",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FarZPp0zZFXy_FjcujwQ4z.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "DHmVRUHPfAfAqzgq2dXbn",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-24T12:52:06.000Z",
                        "cachedAt": "2025-01-18T07:25:13.261Z",
                        "period": null,
                        "round": {
                            "name": "1. Lig",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2154uhyeun0lm781iiiijqhwo",
                            "code": "AMS",
                            "short": "ديارباكير بي بي",
                            "long": "ديارباكير بي بي",
                            "full": "ديارباكير بي بي",
                            "name": "ديارباكير بي بي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fm5cFQdpTmgBdyM9EsagVr.png"
                            }
                        },
                        "teamB": {
                            "id": "c3txoz57mu7w9y1jprvnv2flr",
                            "code": "FKA",
                            "short": "فاتح كاراجومروك",
                            "long": "فاتح كاراجومروك",
                            "full": "فاتح كاراجومروك",
                            "name": "فاتح كاراجومروك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FQ2Ee8pUNl2ltBbo3VMPvE.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "WNuhCVQL40yU_HHb4tudl",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-24T12:52:06.000Z",
                        "cachedAt": "2025-01-18T06:38:21.605Z",
                        "period": null,
                        "round": {
                            "name": "1. Lig",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "eg0cqg1u8zz85ma9nzk0cijv",
                            "code": "COB",
                            "short": "كوروم بلديسبور",
                            "long": "كوروم بلديسبور",
                            "full": "كوروم بلديسبور",
                            "name": "كوروم بلديسبور",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FktfFdbHwur7oRJ7Zcxvc1.png"
                            }
                        },
                        "teamB": {
                            "id": "v0qx960sz1tq9mprlxrcnfl5",
                            "code": "UMR",
                            "short": "عمرانى سبور",
                            "long": "عمرانى سبور",
                            "full": "عمرانى سبور",
                            "name": "عمرانى سبور",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FeKGla8XJLXmh_df33F5i9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "2kwbbcootiqqgmrzs6o5inle5",
                    "name": "الدوري الإنجليزي الممتاز",
                    "area": {
                        "name": "England"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2F2kwbbcootiqqgmrzs6o5inle5.png"
                    }
                },
                "matches": [
                    {
                        "id": "cdh4eey7r4frj6kjog24vvqc4",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": {
                            "name": "سينت جيمس بارك، نيوكاسل"
                        },
                        "lastUpdatedAt": "2025-01-17T10:38:10.000Z",
                        "cachedAt": "2025-01-18T07:16:30.535Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإنجليزي الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7vn2i2kd35zuetw6b38gw9jsz",
                            "code": "NEW",
                            "short": "نيوكاسل يونايتد",
                            "long": "نيوكاسل يونايتد",
                            "full": "نيوكاسل يونايتد",
                            "name": "نيوكاسل يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F1iD-fvEOrJtrHuYnqjZ2y.png"
                            }
                        },
                        "teamB": {
                            "id": "1pse9ta7a45pi2w2grjim70ge",
                            "code": "BOU",
                            "short": "بورنموث",
                            "long": "بورنموث",
                            "full": "بورنموث",
                            "name": "بورنموث",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFS7UO4BdZPMJrL5MlqxyL.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "cb1vyujhwe4c3japgewgihudw",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Gtech Community Stadium"
                        },
                        "lastUpdatedAt": "2025-01-17T10:42:19.000Z",
                        "cachedAt": "2025-01-18T07:01:52.448Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإنجليزي الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7yx5dqhhphyvfisohikodajhv",
                            "code": "BRE",
                            "short": "برينتفورد",
                            "long": "برينتفورد",
                            "full": "برينتفورد",
                            "name": "برينتفورد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FzIuTQ00RiiL1vS9A2Uhv8.png"
                            }
                        },
                        "teamB": {
                            "id": "c8h9bw1l82s06h77xxrelzhur",
                            "code": "LIV",
                            "short": "ليفربول",
                            "long": "ليفربول",
                            "full": "ليفربول",
                            "name": "ليفربول",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F5pqbkK17JBIe7kMzOPSdr.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "ccnw6a579w41c3zh08qmfdij8",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "كينغ باور ستاديوم"
                        },
                        "lastUpdatedAt": "2025-01-17T10:45:47.000Z",
                        "cachedAt": "2025-01-18T07:00:48.975Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإنجليزي الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "avxknfz4f6ob0rv9dbnxdzde0",
                            "code": "LEI",
                            "short": "ليستر سيتي",
                            "long": "ليستر سيتي",
                            "full": "ليستر سيتي",
                            "name": "ليستر سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FvuqH4gZ-voBw0W7kmlw61.png"
                            }
                        },
                        "teamB": {
                            "id": "hzqh7z0mdl3v7gwete66syxp",
                            "code": "FUL",
                            "short": "فولهام",
                            "long": "فولهام",
                            "full": "فولهام",
                            "name": "فولهام",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FLX9q9cnrBN2TnIu8byLFT.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "cea25zc0ctpu7ugs51oeflxxw",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "London Stadium"
                        },
                        "lastUpdatedAt": "2025-01-17T10:47:27.000Z",
                        "cachedAt": "2025-01-18T06:56:08.171Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإنجليزي الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4txjdaqveermfryvbfrr4taf7",
                            "code": "WHU",
                            "short": "وست هام",
                            "long": "وست هام",
                            "full": "وست هام",
                            "name": "وست هام",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FCCygH4qVdQFkGTvjHdtDp.png"
                            }
                        },
                        "teamB": {
                            "id": "1c8m2ko0wxq1asfkuykurdr0y",
                            "code": "CRY",
                            "short": "كريستال بالاس",
                            "long": "كريستال بالاس",
                            "full": "كريستال بالاس",
                            "name": "كريستال بالاس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FfkqJeAhCc1RGGGO8bTZwl.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "can5pcclpon88dg5c0llbgzdg",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": {
                            "name": "إيميريتس ستاديوم"
                        },
                        "lastUpdatedAt": "2025-01-17T11:07:04.000Z",
                        "cachedAt": "2025-01-18T07:18:02.976Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإنجليزي الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4dsgumo7d4zupm2ugsvm4zm4d",
                            "code": "ARS",
                            "short": "آرسنال",
                            "long": "آرسنال",
                            "full": "آرسنال",
                            "name": "آرسنال",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fq1nlNdzBDAXiOIpw0Y6lK.png"
                            }
                        },
                        "teamB": {
                            "id": "b496gs285it6bheuikox6z9mj",
                            "code": "AVL",
                            "short": "أستون فيلا",
                            "long": "أستون فيلا",
                            "full": "أستون فيلا",
                            "name": "أستون فيلا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fqgf3Tx9R3nphdWIS9SgyB.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "34pl8szyvrbwcmfkuocjm3r6t",
                    "name": "الدوري الإسباني – لا ليجا",
                    "area": {
                        "name": "Spain"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2F34pl8szyvrbwcmfkuocjm3r6t.png"
                    }
                },
                "matches": [
                    {
                        "id": "n92I2yz0NXyuOW2fkzY8M",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": {
                            "name": "Estadi Municipal de Montilivi"
                        },
                        "lastUpdatedAt": "2025-01-17T09:31:51.000Z",
                        "cachedAt": "2025-01-18T06:11:03.534Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الأسباني الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7h7eg7q7dbwvzww78h9d5eh0h",
                            "code": "GIR",
                            "short": "جيرونا",
                            "long": "جيرونا",
                            "full": "جيرونا",
                            "name": "جيرونا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FepQ1djdhSLL7Z5fn2BZTn.png"
                            }
                        },
                        "teamB": {
                            "id": "10eyb18v5puw4ez03ocaug09m",
                            "code": "SEV",
                            "short": "إشبيلية",
                            "long": "إشبيلية",
                            "full": "إشبيلية",
                            "name": "إشبيلية",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fcrn6HYOO9QzfqMRAUuGIF.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "OPaVSKNcUAiFT6f5EwDB2",
                        "startDate": "2025-01-18T15:15:00.000Z",
                        "venue": {
                            "name": "Estadio Butarque"
                        },
                        "lastUpdatedAt": "2025-01-17T09:40:29.000Z",
                        "cachedAt": "2025-01-18T06:34:51.857Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الأسباني الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3krm0f4yr1l80j1sd7823f9xn",
                            "code": "LEG",
                            "short": "ليجانيس",
                            "long": "ليجانيس",
                            "full": "ليجانيس",
                            "name": "ليجانيس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FM08qKmv8nkpWySvrmWozr.png"
                            }
                        },
                        "teamB": {
                            "id": "4ku8o6uf87yd8iecdalipo6wd",
                            "code": "ATM",
                            "short": "أتلتيكو مدريد",
                            "long": "أتلتيكو مدريد",
                            "full": "أتلتيكو مدريد",
                            "name": "أتلتيكو مدريد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FxWY4as7vKsiitaDE-lmIe.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "dYsLEXv-iq1NcDTVAOEYw",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": {
                            "name": "Estadio Benito Villamarin"
                        },
                        "lastUpdatedAt": "2025-01-17T09:51:32.000Z",
                        "cachedAt": "2025-01-18T06:44:13.882Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الأسباني الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ah8dala7suqqkj04n2l8xz4zd",
                            "code": "BET",
                            "short": "ريال بيتيس",
                            "long": "ريال بيتيس",
                            "full": "ريال بيتيس",
                            "name": "ريال بيتيس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FgezsEknLaMwmk3X3Zcc76.png"
                            }
                        },
                        "teamB": {
                            "id": "4dtdjgnpdq9uw4sdutti0vaar",
                            "code": "ALA",
                            "short": "ديبورتيفو ألافيس",
                            "long": "ديبورتيفو ألافيس",
                            "full": "ديبورتيفو ألافيس",
                            "name": "ديبورتيفو ألافيس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FdqC3XtzsGeXe3c53Qqrn-.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "VZDlbWuczQhjvgeHmjc7k",
                        "startDate": "2025-01-18T20:00:00.000Z",
                        "venue": {
                            "name": "كوليسيوم ألفونسو بيريز"
                        },
                        "lastUpdatedAt": "2025-01-17T09:58:28.000Z",
                        "cachedAt": "2025-01-18T08:00:38.425Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الأسباني الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1n1j0wsl763lq7ee1k0c11c02",
                            "code": "GET",
                            "short": "خيتافي",
                            "long": "خيتافي",
                            "full": "خيتافي",
                            "name": "خيتافي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FxsRs2Zwslz_cx1dUGc-En.png"
                            }
                        },
                        "teamB": {
                            "id": "agh9ifb2mw3ivjusgedj7c3fe",
                            "code": "BAR",
                            "short": "برشلونة",
                            "long": "برشلونة",
                            "full": "برشلونة",
                            "name": "برشلونة",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Feu0z1bZDA3gqIhdn-rHli.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "6by3h89i2eykc341oz7lv1ddd",
                    "name": "الدوري الألماني",
                    "area": {
                        "name": "Germany"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2F6by3h89i2eykc341oz7lv1ddd.png"
                    }
                },
                "matches": [
                    {
                        "id": "kmSKR6HM9WtkWEZtpC_pO",
                        "startDate": "2025-01-18T14:30:00.000Z",
                        "venue": {
                            "name": "Voith-Arena"
                        },
                        "lastUpdatedAt": "2025-01-17T11:18:34.000Z",
                        "cachedAt": "2025-01-18T07:04:57.647Z",
                        "period": null,
                        "round": {
                            "name": "الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3xcg7xikgrn2x8oa65sopb2is",
                            "code": "HDH",
                            "short": "هايدينهايم",
                            "long": "هايدينهايم",
                            "full": "هايدينهايم",
                            "name": "هايدينهايم",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FPLpiKddTc2GU0ZKAokqJo.png"
                            }
                        },
                        "teamB": {
                            "id": "85jtaw5dcxxx1yp8te6axh3p8",
                            "code": "FCP",
                            "short": "سانت باولي",
                            "long": "سانت باولي",
                            "full": "سانت باولي",
                            "name": "سانت باولي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FnrVUp1yGT9PaanlKgyGrw.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "JHrIXMKWGSqR_Jy-d-WCl",
                        "startDate": "2025-01-18T14:30:00.000Z",
                        "venue": {
                            "name": "أليانز أرينا"
                        },
                        "lastUpdatedAt": "2025-01-17T11:13:48.000Z",
                        "cachedAt": "2025-01-18T07:19:28.384Z",
                        "period": null,
                        "round": {
                            "name": "الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "apoawtpvac4zqlancmvw4nk4o",
                            "code": "FCB",
                            "short": "بايرن ميونخ",
                            "long": "بايرن ميونخ",
                            "full": "بايرن ميونخ",
                            "name": "بايرن ميونخ",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F2TlMSJkWTGqMX2lPN7Cgd.png"
                            }
                        },
                        "teamB": {
                            "id": "a8l3w3n0j99qjlsxj3jnmgkz1",
                            "code": "WOB",
                            "short": "فولفسبورج",
                            "long": "فولفسبورج",
                            "full": "فولفسبورج",
                            "name": "فولفسبورج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FRy9NoyRGMKs5Sgr22Cjg-.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "8linoex56JR6jOgz_FjZh",
                        "startDate": "2025-01-18T14:30:00.000Z",
                        "venue": {
                            "name": "Holstein Stadion"
                        },
                        "lastUpdatedAt": "2025-01-17T11:23:46.000Z",
                        "cachedAt": "2025-01-18T06:55:37.169Z",
                        "period": null,
                        "round": {
                            "name": "الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "6zwg0wxjie31da2i4wwh2h4ho",
                            "code": "HSK",
                            "short": "هولشتاين كيل",
                            "long": "هولشتاين كيل",
                            "full": "هولشتاين كيل",
                            "name": "هولشتاين كيل",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Ffh7vyaE3X4JP9iROOvOL2.png"
                            }
                        },
                        "teamB": {
                            "id": "4l9mrqzmajz5crzlz50mtbt6x",
                            "code": "TSG",
                            "short": "هوفينهايم",
                            "long": "هوفينهايم",
                            "full": "هوفينهايم",
                            "name": "هوفينهايم",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F1K9pUTQXHjmhK2eBCZumq.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "OL6Sju7lHk4BrVzuYOmQZ",
                        "startDate": "2025-01-18T14:30:00.000Z",
                        "venue": {
                            "name": "MHPArena"
                        },
                        "lastUpdatedAt": "2025-01-17T11:25:44.000Z",
                        "cachedAt": "2025-01-18T06:58:36.371Z",
                        "period": null,
                        "round": {
                            "name": "الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3dwlvz6cl4lcavvrg0y2dycrt",
                            "code": "VFB",
                            "short": "شتوتجارت",
                            "long": "شتوتجارت",
                            "full": "شتوتجارت",
                            "name": "شتوتجارت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FwISHHM98darM05uz5rA-K.png"
                            }
                        },
                        "teamB": {
                            "id": "6k5zscdm9ufw0tguvzyjlp5hq",
                            "code": "SCF",
                            "short": "فرايبورج",
                            "long": "فرايبورج",
                            "full": "فرايبورج",
                            "name": "فرايبورج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FmmLX2coDWVHnrrt376Otc.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "cIK7VmP0AkMDlBpGYYubr",
                        "startDate": "2025-01-18T14:30:00.000Z",
                        "venue": {
                            "name": "Vonovia Ruhrstadion"
                        },
                        "lastUpdatedAt": "2025-01-17T11:16:37.000Z",
                        "cachedAt": "2025-01-18T06:38:31.829Z",
                        "period": null,
                        "round": {
                            "name": "الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "eq1oq6y61xnzq88zu0cnw131z",
                            "code": "BOC",
                            "short": "بوخوم",
                            "long": "بوخوم",
                            "full": "بوخوم",
                            "name": "بوخوم",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FqwhqIg6jBXEyOvtteBQGG.png"
                            }
                        },
                        "teamB": {
                            "id": "9gefq4dz9b2hl8rqrxwrlrzmp",
                            "code": "RBL",
                            "short": "لايبزيج",
                            "long": "لايبزيج",
                            "full": "لايبزيج",
                            "name": "لايبزيج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F0GckKHYTdGCldV4jrlIc1.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "mxGH6wvFu-rFehyiXFeMV",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": {
                            "name": "باي أرينا"
                        },
                        "lastUpdatedAt": "2025-01-17T11:29:44.000Z",
                        "cachedAt": "2025-01-18T07:34:47.376Z",
                        "period": null,
                        "round": {
                            "name": "الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7ad69ngbpjuyzv96drf8d9sn2",
                            "code": "B04",
                            "short": "باير ليفركوزن",
                            "long": "باير ليفركوزن",
                            "full": "باير ليفركوزن",
                            "name": "باير ليفركوزن",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FjEUaq-mmqK2hKxbzCjsUh.png"
                            }
                        },
                        "teamB": {
                            "id": "go76xxm0xyfgqt1h6tcrtimm",
                            "code": "BMG",
                            "short": "بوروسيا مونشنجلادباخ",
                            "long": "بوروسيا مونشنجلادباخ",
                            "full": "بوروسيا مونشنجلادباخ",
                            "name": "بوروسيا مونشنجلادباخ",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FHM49b4dKNaIgkvz6V2U4U.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "1r097lpxe0xn03ihb7wi98kao",
                    "name": "الدوري الإيطالي",
                    "area": {
                        "name": "Italy"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2F1r097lpxe0xn03ihb7wi98kao.png"
                    }
                },
                "matches": [
                    {
                        "id": "wBNwCHcx4rOrvP1vky-7u",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": {
                            "name": "Stadio Renato Dell'Ara"
                        },
                        "lastUpdatedAt": "2025-01-17T11:00:23.000Z",
                        "cachedAt": "2025-01-18T06:53:13.830Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإيطالي",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ej5er0oyngdw138yuumwqbyqt",
                            "code": "BOL",
                            "short": "بولونيا",
                            "long": "بولونيا",
                            "full": "بولونيا",
                            "name": "بولونيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fue61qrq497L21-51zjmpa.png"
                            }
                        },
                        "teamB": {
                            "id": "67z1gqyiuzpmmb15q5fy7ntc4",
                            "code": "MON",
                            "short": "مونزا",
                            "long": "مونزا",
                            "full": "مونزا",
                            "name": "مونزا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fds3Kt9BS4KLSUsePs9p0X.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "XwrqukXu8xEYMRGN36Guf",
                        "startDate": "2025-01-18T17:00:00.000Z",
                        "venue": {
                            "name": "جوفينتوس ستاديوم"
                        },
                        "lastUpdatedAt": "2025-01-17T11:03:10.000Z",
                        "cachedAt": "2025-01-18T06:44:35.157Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإيطالي",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bqbbqm98ud8obe45ds9ohgyrd",
                            "code": "JUV",
                            "short": "يوفنتوس",
                            "long": "يوفنتوس",
                            "full": "يوفنتوس",
                            "name": "يوفنتوس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FULIqFLpBfQJUAOB-vLC-r.png"
                            }
                        },
                        "teamB": {
                            "id": "9dntj5dioj5ex52yrgwzxrq9l",
                            "code": "MIL",
                            "short": "ميلان",
                            "long": "ميلان",
                            "full": "ميلان",
                            "name": "ميلان",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FKxcpyOfGuTCkPqCgyf-Rr.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Emyffsgkht19zb2dQfiU-",
                        "startDate": "2025-01-18T19:45:00.000Z",
                        "venue": {
                            "name": "أتليتي آزوري ديتاليا"
                        },
                        "lastUpdatedAt": "2025-01-17T11:05:53.000Z",
                        "cachedAt": "2025-01-18T06:58:17.034Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإيطالي",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "e75syeuawg3ql8nwpi3vr2btz",
                            "code": "ATA",
                            "short": "أتالانتا",
                            "long": "أتالانتا",
                            "full": "أتالانتا",
                            "name": "أتالانتا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F5SVrOmKwWwrCXabwbS8LR.png"
                            }
                        },
                        "teamB": {
                            "id": "gi0l1habji5hpgar77dl5jqe",
                            "code": "NAP",
                            "short": "نابولي",
                            "long": "نابولي",
                            "full": "نابولي",
                            "name": "نابولي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fx75Vbta4xvwPdr1KaFHs1.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "dm5ka0os1e3dxcp3vh05kmp33",
                    "name": "الدوري الفرنسي",
                    "area": {
                        "name": "France"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2Fdm5ka0os1e3dxcp3vh05kmp33.png"
                    }
                },
                "matches": [
                    {
                        "id": "2ikZejT3VCRm13_0FW8Qd",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": {
                            "name": "ستاد فيليكس بولايرت"
                        },
                        "lastUpdatedAt": "2025-01-17T13:03:29.000Z",
                        "cachedAt": "2025-01-18T07:39:27.143Z",
                        "period": null,
                        "round": {
                            "name": "الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3xedluek08t2ka7oypwuullcn",
                            "code": "RCL",
                            "short": "لانس",
                            "long": "لانس",
                            "full": "لانس",
                            "name": "لانس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbBPYfU7vmkcTl-q4NtFj2.png"
                            }
                        },
                        "teamB": {
                            "id": "2b3mar72yy8d6uvat1ka6tn3r",
                            "code": "PSG",
                            "short": "باريس سان جيرمان",
                            "long": "باريس سان جيرمان",
                            "full": "باريس سان جيرمان",
                            "name": "باريس سان جيرمان",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FGt8F5QmiB3gbYqX46lCUq.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Lpnu-5HByYuCkVAoenMg8",
                        "startDate": "2025-01-18T18:00:00.000Z",
                        "venue": {
                            "name": "روت دي لورينت"
                        },
                        "lastUpdatedAt": "2025-01-17T13:07:01.000Z",
                        "cachedAt": "2025-01-18T07:46:00.301Z",
                        "period": null,
                        "round": {
                            "name": "الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "z1wbqtd0fz5t5eezjvrbld3h",
                            "code": "REN",
                            "short": "رين",
                            "long": "رين",
                            "full": "رين",
                            "name": "رين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FAqqrolqK0FEQK6xmR0GM1.png"
                            }
                        },
                        "teamB": {
                            "id": "3adj8hkws0z1al232bg2h6tk0",
                            "code": "B29",
                            "short": "بريست",
                            "long": "بريست",
                            "full": "بريست",
                            "name": "بريست",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FlWIe19WyksP2CpUqUD0-K.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "xn0TB8j4myARNH25Pno2R",
                        "startDate": "2025-01-18T20:05:00.000Z",
                        "venue": {
                            "name": "Groupama Stadium"
                        },
                        "lastUpdatedAt": "2025-01-17T13:11:33.000Z",
                        "cachedAt": "2025-01-18T07:46:16.335Z",
                        "period": null,
                        "round": {
                            "name": "الدرجة الأولى",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "121le8unjfzug3iu9pgkqa1c7",
                            "code": "OL",
                            "short": "ليون",
                            "long": "ليون",
                            "full": "ليون",
                            "name": "ليون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F9QuhS30De-PnujU8oknsX.png"
                            }
                        },
                        "teamB": {
                            "id": "4aghw9tyi8ba3ju1ne83gmf9w",
                            "code": "TFC",
                            "short": "تولوز",
                            "long": "تولوز",
                            "full": "تولوز",
                            "name": "تولوز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FQ5AJamnbavzPzfIaRWhXA.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "akmkihra9ruad09ljapsm84b3",
                    "name": "الدوري الهولندي",
                    "area": {
                        "name": "Netherlands"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2Fakmkihra9ruad09ljapsm84b3.png"
                    }
                },
                "matches": [
                    {
                        "id": "im5gfOr1BjugIYABKdE48",
                        "startDate": "2025-01-18T15:30:00.000Z",
                        "venue": {
                            "name": "MAC3PARK Stadion"
                        },
                        "lastUpdatedAt": "2025-01-17T12:08:31.000Z",
                        "cachedAt": "2025-01-18T07:21:18.814Z",
                        "period": null,
                        "round": {
                            "name": "الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2uuh2bir8ktof0uxfo06lb4ox",
                            "code": "ZWO",
                            "short": "زفولي",
                            "long": "زفولي",
                            "full": "زفولي",
                            "name": "زفولي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FAoqZmSJQ0eKp7V1o3T70_.png"
                            }
                        },
                        "teamB": {
                            "id": "24fvcruwqrqvqa3aonf8c3zuy",
                            "code": "PSV",
                            "short": "آيندهوفن",
                            "long": "آيندهوفن",
                            "full": "آيندهوفن",
                            "name": "آيندهوفن",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fdz7iJVaQ-OmykCM9NpxQV.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "N3C8zOSlz-qGUdyjcgH8s",
                        "startDate": "2025-01-18T17:45:00.000Z",
                        "venue": {
                            "name": "Stadion Galgenwaard"
                        },
                        "lastUpdatedAt": "2025-01-17T12:20:16.000Z",
                        "cachedAt": "2025-01-18T07:23:31.779Z",
                        "period": null,
                        "round": {
                            "name": "الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ccpscwdcm65czscrun048ecn5",
                            "code": "UTR",
                            "short": "أوتريخت",
                            "long": "أوتريخت",
                            "full": "أوتريخت",
                            "name": "أوتريخت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FP8_7wZDtPIX2i7fjGSyjB.png"
                            }
                        },
                        "teamB": {
                            "id": "3kfktv64h7kg7zryax1wktr5r",
                            "code": "AZ",
                            "short": "أي زد ألكمار",
                            "long": "أي زد ألكمار",
                            "full": "أي زد ألكمار",
                            "name": "أي زد ألكمار",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fqidx8pq_FDZpMXCfj362U.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "sKqq_pUSP4XAGVbLv9qxF",
                        "startDate": "2025-01-18T19:00:00.000Z",
                        "venue": {
                            "name": "Koning Willem II Stadion"
                        },
                        "lastUpdatedAt": "2025-01-17T12:25:46.000Z",
                        "cachedAt": "2025-01-18T06:37:25.814Z",
                        "period": null,
                        "round": {
                            "name": "الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bk5ltsueqmeng29eovd8m2tml",
                            "code": "WII",
                            "short": "فيليم 2",
                            "long": "فيليم 2",
                            "full": "فيليم 2",
                            "name": "فيليم 2",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FUcGx31DBs289ovl9NIEbs.png"
                            }
                        },
                        "teamB": {
                            "id": "20vymiy7bo8wkyxai3ew494fz",
                            "code": "FEY",
                            "short": "فينورد",
                            "long": "فينورد",
                            "full": "فينورد",
                            "name": "فينورد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FoFQJvuN4b8qeEHcuFsdoB.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "bYSTjbWyvtSqS_yWFH6O8",
                        "startDate": "2025-01-18T20:00:00.000Z",
                        "venue": {
                            "name": "De Adelaarshorst"
                        },
                        "lastUpdatedAt": "2025-01-17T12:30:49.000Z",
                        "cachedAt": "2025-01-18T06:32:06.653Z",
                        "period": null,
                        "round": {
                            "name": "الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "b79uipsy57y1jqpy07h4i5ovk",
                            "code": "GAE",
                            "short": "جو آهيد إيجلز",
                            "long": "جو آهيد إيجلز",
                            "full": "جو آهيد إيجلز",
                            "name": "جو آهيد إيجلز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FA99CwRg3I_It6Hj9Fkq9G.png"
                            }
                        },
                        "teamB": {
                            "id": "cos9hxi16eitbcbthof7zrm4m",
                            "code": "GRO",
                            "short": "جرونينجين",
                            "long": "جرونينجين",
                            "full": "جرونينجين",
                            "name": "جرونينجين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FpIjirsVOsUWGMKVG5cU0z.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "8yi6ejjd1zudcqtbn07haahg6",
                    "name": "الدوري البرتغالي الممتاز",
                    "area": {
                        "name": "Portugal"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1nbm5i9a0403zzvltn17lxinc.png"
                    }
                },
                "matches": [
                    {
                        "id": "VaDn8VdWvnLcPBqR0NTKn",
                        "startDate": "2025-01-18T15:30:00.000Z",
                        "venue": {
                            "name": "Estadio do Sao Miguel"
                        },
                        "lastUpdatedAt": "2025-01-17T12:19:04.000Z",
                        "cachedAt": "2025-01-18T07:34:50.132Z",
                        "period": null,
                        "round": {
                            "name": "الدوري البرتغالي الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "cmbqc74mshg77ra7mywec2a6b",
                            "code": "SC",
                            "short": "سانتا كلارا",
                            "long": "سانتا كلارا",
                            "full": "سانتا كلارا",
                            "name": "سانتا كلارا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fk_B8I1mUa3fZOQvzIXnqu.png"
                            }
                        },
                        "teamB": {
                            "id": "22mo7qbsnyi8wtucpvhgvhw2q",
                            "code": "EST",
                            "short": "إيستوريل",
                            "long": "إيستوريل",
                            "full": "إيستوريل",
                            "name": "إيستوريل",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFwcoRaskwA7OW8SOScpwD.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "h3X6yf8Gx5UR_JNRtF_gH",
                        "startDate": "2025-01-18T18:00:00.000Z",
                        "venue": {
                            "name": "Estadio dos Arcos"
                        },
                        "lastUpdatedAt": "2025-01-17T12:20:48.000Z",
                        "cachedAt": "2025-01-18T07:08:43.038Z",
                        "period": null,
                        "round": {
                            "name": "الدوري البرتغالي الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "cgvbluoerzbzcr7aaxge3wkcv",
                            "code": "RA",
                            "short": "ريو أفي",
                            "long": "ريو أفي",
                            "full": "ريو أفي",
                            "name": "ريو أفي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FcPHuIGZQhComdM4IyWbd6.png"
                            }
                        },
                        "teamB": {
                            "id": "7catg5lpivcmpf4xhggh6d8rk",
                            "code": "SCP",
                            "short": "سبورتنج لشبونة",
                            "long": "سبورتنج لشبونة",
                            "full": "سبورتنج لشبونة",
                            "name": "سبورتنج لشبونة",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fd-wYwIuJ2WUNcTmmMHWCH.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "x6Jvt983YG7KPbJvC5UV7",
                        "startDate": "2025-01-18T20:30:00.000Z",
                        "venue": {
                            "name": "Estadio D. Afonso Henriques"
                        },
                        "lastUpdatedAt": "2025-01-17T12:27:46.000Z",
                        "cachedAt": "2025-01-18T06:51:38.447Z",
                        "period": null,
                        "round": {
                            "name": "الدوري البرتغالي الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8gvg1ranyf93hprfkwx3ofl2y",
                            "code": "GUI",
                            "short": "جيماريش",
                            "long": "جيماريش",
                            "full": "جيماريش",
                            "name": "جيماريش",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNt6Bf0Yzd4RVrPznZbs22.png"
                            }
                        },
                        "teamB": {
                            "id": "dich5v7sw466smbqap0d9rbyj",
                            "code": "ARO",
                            "short": "آروكا",
                            "long": "آروكا",
                            "full": "آروكا",
                            "name": "آروكا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FEwmSRPOxRzlt0DsrevQXE.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "4zwgbb66rif2spcoeeol2motx",
                    "name": "بلجيكا 1",
                    "area": {
                        "name": "Belgium"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F4wbzjcclyefma1ourvjsu4q2j.png"
                    }
                },
                "matches": [
                    {
                        "id": "nKS4G5dR2AgcTqd5pKJ3l",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Van Roy Stadium"
                        },
                        "lastUpdatedAt": "2024-06-11T16:28:49.000Z",
                        "cachedAt": "2025-01-18T06:38:43.937Z",
                        "period": null,
                        "round": {
                            "name": "First Division A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "oJd5JgohREAkj-QnXqilt",
                            "code": "DEN",
                            "short": "إف سي في ديندور إي إتش",
                            "long": "إف سي في ديندور إي إتش",
                            "full": "إف سي في ديندور إي إتش",
                            "name": "إف سي في ديندور إي إتش",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fdefault.png"
                            }
                        },
                        "teamB": {
                            "id": "3ix9om1svhd6obl0mbk1otgop",
                            "code": "CEB",
                            "short": "سيركل بروج",
                            "long": "سيركل بروج",
                            "full": "سيركل بروج",
                            "name": "سيركل بروج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FR4o-83B9ERKzmBpN7enUB.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "K2i9P5L5-BhWsZJ253lN5",
                        "startDate": "2025-01-18T17:15:00.000Z",
                        "venue": {
                            "name": "Argosstadion Achter de Kazerne"
                        },
                        "lastUpdatedAt": "2024-06-11T16:28:49.000Z",
                        "cachedAt": "2025-01-18T06:41:57.400Z",
                        "period": null,
                        "round": {
                            "name": "First Division A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "b7jmo07lqav0wfe2mtlzyspak",
                            "code": "MEC",
                            "short": "كي في ميكيلين",
                            "long": "كي في ميكيلين",
                            "full": "كي في ميكيلين",
                            "name": "كي في ميكيلين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F0yeIDu1lVJb_jv4r3qK5l.png"
                            }
                        },
                        "teamB": {
                            "id": "89xivtxk59uzvhdsd6miao6tm",
                            "code": "GNK",
                            "short": "جينك",
                            "long": "جينك",
                            "full": "جينك",
                            "name": "جينك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FjvIhB8l1Lf3H-JKdTWTzC.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "44hIzhaCoVhLTVM5SN6yC",
                        "startDate": "2025-01-18T19:45:00.000Z",
                        "venue": {
                            "name": "Jan Breydel Stadion"
                        },
                        "lastUpdatedAt": "2024-06-11T16:28:52.000Z",
                        "cachedAt": "2025-01-18T06:40:45.667Z",
                        "period": null,
                        "round": {
                            "name": "First Division A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1oyb7oym5nwzny8vxf03szd2h",
                            "code": "CLB",
                            "short": "كلوب بروج",
                            "long": "كلوب بروج",
                            "full": "كلوب بروج",
                            "name": "كلوب بروج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FP7IMTnd7DyvKabTxDNOdQ.png"
                            }
                        },
                        "teamB": {
                            "id": "cyrrlv6l1onld5x247w1q1jlr",
                            "code": "BEE",
                            "short": "Beerschot",
                            "long": "Beerschot",
                            "full": "Beerschot",
                            "name": "Beerschot",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fn_Bj4qmlxRfgWYXSF53p1.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "7ntvbsyq31jnzoqoa8850b9b8",
                    "name": "الدوري الإنجليزي الدرجة الأولى",
                    "area": {
                        "name": "England"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2F7ntvbsyq31jnzoqoa8850b9b8.png"
                    }
                },
                "matches": [
                    {
                        "id": "-Dgz06R3VwEOwNI2J4odB",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": {
                            "name": "هوم بارك"
                        },
                        "lastUpdatedAt": "2024-06-26T09:14:37.000Z",
                        "cachedAt": "2025-01-18T06:38:03.352Z",
                        "period": null,
                        "round": {
                            "name": "Championship",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5g1fnexeromjl0lvnxp8hpnhi",
                            "code": "PLY",
                            "short": "بلايموث",
                            "long": "بلايموث",
                            "full": "بلايموث",
                            "name": "بلايموث",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FWzwaIV_KcV7ZU8F6ZIhmh.png"
                            }
                        },
                        "teamB": {
                            "id": "72nmbktwvcj3wizfp37yjf0dp",
                            "code": "QPR",
                            "short": "كوينز بارك رينجرز",
                            "long": "كوينز بارك رينجرز",
                            "full": "كوينز بارك رينجرز",
                            "name": "كوينز بارك رينجرز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F3sHj-Nw7mSQ0OXPOu6uTh.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "TISl7U6Zj2oXEoFJ1qoZB",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": {
                            "name": "Cardiff City Stadium"
                        },
                        "lastUpdatedAt": "2024-06-26T09:02:09.000Z",
                        "cachedAt": "2025-01-18T06:54:07.290Z",
                        "period": null,
                        "round": {
                            "name": "Championship",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3ash57c0q2tgok6gvzbsta93",
                            "code": "CAC",
                            "short": "كارديف سيتي",
                            "long": "كارديف سيتي",
                            "full": "كارديف سيتي",
                            "name": "كارديف سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F7IaE2jrCIBwqe_o_j9OJq.png"
                            }
                        },
                        "teamB": {
                            "id": "410jti6axb01yhvbc0axsp8li",
                            "code": "SWA",
                            "short": "سوانسي سيتي",
                            "long": "سوانسي سيتي",
                            "full": "سوانسي سيتي",
                            "name": "سوانسي سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FhXCTQr4Zcnzo5BmL7CB7L.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "ZCUSfkIRpv3VEroSkLIiK",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": {
                            "name": "ذا دن"
                        },
                        "lastUpdatedAt": "2024-06-26T09:14:37.000Z",
                        "cachedAt": "2025-01-18T07:07:06.969Z",
                        "period": null,
                        "round": {
                            "name": "Championship",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "40d2qd8lr1tgsvmg5l1fzaf4o",
                            "code": "MIL",
                            "short": "ميلوال",
                            "long": "ميلوال",
                            "full": "ميلوال",
                            "name": "ميلوال",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FpwytYPYcOdkvNiRFCBa5j.png"
                            }
                        },
                        "teamB": {
                            "id": "f0figafm2v9h8ofo6slajj7xf",
                            "code": "HUL",
                            "short": "هال سيتي",
                            "long": "هال سيتي",
                            "full": "هال سيتي",
                            "name": "هال سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FCIbMqRusYuY1igSiiTwCp.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "jHt-sDgRqmd43OzjlGLJi",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Pride Park"
                        },
                        "lastUpdatedAt": "2024-06-26T09:14:37.000Z",
                        "cachedAt": "2025-01-18T07:12:07.358Z",
                        "period": null,
                        "round": {
                            "name": "Championship",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3ptd7zlc5isrongig0wij2id4",
                            "code": "DER",
                            "short": "ديربي كاونتي",
                            "long": "ديربي كاونتي",
                            "full": "ديربي كاونتي",
                            "name": "ديربي كاونتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FVwdFT253uXCc4Hf7-YKS6.png"
                            }
                        },
                        "teamB": {
                            "id": "4t83rqbdbekinxl5fz2ygsyta",
                            "code": "WAT",
                            "short": "واتفورد",
                            "long": "واتفورد",
                            "full": "واتفورد",
                            "name": "واتفورد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F_vTwjktByU9cZi4WIJfwe.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "dr_h6TigTXHmP7_sJwWb0",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "فراتون بارك"
                        },
                        "lastUpdatedAt": "2024-06-26T09:14:37.000Z",
                        "cachedAt": "2025-01-18T07:06:18.197Z",
                        "period": null,
                        "round": {
                            "name": "Championship",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "80jtkz2echk6yyyb9e2595cxr",
                            "code": "POR",
                            "short": "بورتسموث",
                            "long": "بورتسموث",
                            "full": "بورتسموث",
                            "name": "بورتسموث",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FuC-iyteHBgQ1xPN_Qg9xX.png"
                            }
                        },
                        "teamB": {
                            "id": "cq0jd5ztepqjjeikk5trb15vr",
                            "code": "MID",
                            "short": "ميدلزبره",
                            "long": "ميدلزبره",
                            "full": "ميدلزبره",
                            "name": "ميدلزبره",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F2rmEv4O_rELjxb7971nZV.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "8O_FtO6peQ7AeBD1G7Drn",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "برامال لين"
                        },
                        "lastUpdatedAt": "2024-06-26T09:14:37.000Z",
                        "cachedAt": "2025-01-18T07:06:21.824Z",
                        "period": null,
                        "round": {
                            "name": "Championship",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bws31egwjda253q9lvykgnivo",
                            "code": "SHU",
                            "short": "شيفيلد يونايتد",
                            "long": "شيفيلد يونايتد",
                            "full": "شيفيلد يونايتد",
                            "name": "شيفيلد يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FE-qne_XSKwyqS3UlSsH44.png"
                            }
                        },
                        "teamB": {
                            "id": "suz80crpy3anixyzccmu6jzp",
                            "code": "NOR",
                            "short": "نورويتش سيتي",
                            "long": "نورويتش سيتي",
                            "full": "نورويتش سيتي",
                            "name": "نورويتش سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fsuz80crpy3anixyzccmu6jzp.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "YThnYjkLUInlxh2vl6Lof",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "كينيلوورث ستاديوم"
                        },
                        "lastUpdatedAt": "2024-06-26T09:14:37.000Z",
                        "cachedAt": "2025-01-18T07:37:56.197Z",
                        "period": null,
                        "round": {
                            "name": "Championship",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "aksa492u5hf93giwcn2zt1nzz",
                            "code": "LUT",
                            "short": "لوتون تاون",
                            "long": "لوتون تاون",
                            "full": "لوتون تاون",
                            "name": "لوتون تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FmNrZu_JChD8Xu2KYkONIV.png"
                            }
                        },
                        "teamB": {
                            "id": "5kq4izdz28qjaxoa6ujclwghj",
                            "code": "PNE",
                            "short": "بريستون نورث إند",
                            "long": "بريستون نورث إند",
                            "full": "بريستون نورث إند",
                            "name": "بريستون نورث إند",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fk381qUJLDDi7yOlG3js9r.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "rDvaht4YkILjtimIPED6o",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Kassam Stadium"
                        },
                        "lastUpdatedAt": "2024-06-26T09:14:37.000Z",
                        "cachedAt": "2025-01-18T06:36:30.502Z",
                        "period": null,
                        "round": {
                            "name": "Championship",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ahm0t06rup1bkd9z0mxl2lmph",
                            "code": "OXF",
                            "short": "أوكسفورد يونايتد",
                            "long": "أوكسفورد يونايتد",
                            "full": "أوكسفورد يونايتد",
                            "name": "أوكسفورد يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FUi9TJMOIr5xP12bikLemo.png"
                            }
                        },
                        "teamB": {
                            "id": "ep3im6aygoatju4u3ws8v3mog",
                            "code": "BLB",
                            "short": "بلاكبيرن روفرز",
                            "long": "بلاكبيرن روفرز",
                            "full": "بلاكبيرن روفرز",
                            "name": "بلاكبيرن روفرز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fu7Gp7D-Cijc3qF4FHHeEt.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "aaCxeHA9v55o1daI1XgIQ",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Coventry Building Society Arena"
                        },
                        "lastUpdatedAt": "2024-06-26T09:14:37.000Z",
                        "cachedAt": "2025-01-18T07:17:42.486Z",
                        "period": null,
                        "round": {
                            "name": "Championship",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dacoc20k0n3fxu4zek8wufmko",
                            "code": "COV",
                            "short": "كوفينتري سيتي",
                            "long": "كوفينتري سيتي",
                            "full": "كوفينتري سيتي",
                            "name": "كوفينتري سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FW59RF9GwRrQAX4YSSlzQQ.png"
                            }
                        },
                        "teamB": {
                            "id": "c5485h5qulh4l0k0py5b9xug1",
                            "code": "BRC",
                            "short": "بريستول سيتي",
                            "long": "بريستول سيتي",
                            "full": "بريستول سيتي",
                            "name": "بريستول سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F7SRy0SDFsLgz70r_QV7SC.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "pnDyFY8ZcSCy9X4DdlJQX",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "ذي هاوثورنز"
                        },
                        "lastUpdatedAt": "2024-06-26T09:14:37.000Z",
                        "cachedAt": "2025-01-18T07:12:07.358Z",
                        "period": null,
                        "round": {
                            "name": "Championship",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "d1lhefp805y0rcbjqkpu4fq0n",
                            "code": "WBA",
                            "short": "وست برومويتش ألبيون",
                            "long": "وست برومويتش ألبيون",
                            "full": "وست برومويتش ألبيون",
                            "name": "وست برومويتش ألبيون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FpUgZYZ5rE4IyskOoxrCjG.png"
                            }
                        },
                        "teamB": {
                            "id": "4qioq44vcv619vnyy2rpovk4e",
                            "code": "STK",
                            "short": "ستوك سيتي",
                            "long": "ستوك سيتي",
                            "full": "ستوك سيتي",
                            "name": "ستوك سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FqauMwUZs0n2pk6GB_LhSY.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "3is4bkgf3loxv9qfg3hm8zfqb",
                    "name": "الدوري الإسباني الدرجة الثانية",
                    "area": {
                        "name": "Spain"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F49ih1pwv3ahshdf8uzrimi54c.png"
                    }
                },
                "matches": [
                    {
                        "id": "KUq0BM77paHw84AcEON0C",
                        "startDate": "2025-01-18T15:15:00.000Z",
                        "venue": {
                            "name": "Estadio Pepico Amat"
                        },
                        "lastUpdatedAt": "2024-06-26T17:07:31.000Z",
                        "cachedAt": "2025-01-18T06:37:04.642Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الأسباني الدرجة الثانية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ba8jyjo18tvjwei7w7thljw10",
                            "code": "ELD",
                            "short": "إيلدينسي",
                            "long": "إيلدينسي",
                            "full": "إيلدينسي",
                            "name": "إيلدينسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FsCQgzHvBXR0QgSxheH37W.png"
                            }
                        },
                        "teamB": {
                            "id": "82q9159y2u7mkfn3z6hy75r4o",
                            "code": "CAD",
                            "short": "قادش",
                            "long": "قادش",
                            "full": "قادش",
                            "name": "قادش",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fs-jKrAYj7RdyeR7pXy8DA.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "JVCQg7rOzArpeUo9KKYKo",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": {
                            "name": "مونيسيبال دي إيبوروا"
                        },
                        "lastUpdatedAt": "2024-06-26T17:07:31.000Z",
                        "cachedAt": "2025-01-18T07:18:03.127Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الأسباني الدرجة الثانية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bjltc68ihd23uu3svnq0o3qrs",
                            "code": "EIB",
                            "short": "آيبار",
                            "long": "آيبار",
                            "full": "آيبار",
                            "name": "آيبار",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FpafNvSN2D_ZG74DFqZKK5.png"
                            }
                        },
                        "teamB": {
                            "id": "13zq8jfp5uydowd3ibknxaffj",
                            "code": "ALB",
                            "short": "ألباسيتي",
                            "long": "ألباسيتي",
                            "full": "ألباسيتي",
                            "name": "ألباسيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FnK7BcfZK4WIPVtRu8J2ve.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "TBenYKY3owh0d1tIUkTIc",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": {
                            "name": "إستاديو إل مولينون"
                        },
                        "lastUpdatedAt": "2024-06-26T17:07:31.000Z",
                        "cachedAt": "2025-01-18T06:48:42.782Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الأسباني الدرجة الثانية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9wfi6tgumbrnkp72z8zab89kr",
                            "code": "SPG",
                            "short": "سبورتنج خيخون",
                            "long": "سبورتنج خيخون",
                            "full": "سبورتنج خيخون",
                            "name": "سبورتنج خيخون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F8Z7tEVJ_06-afGkVgUWKg.png"
                            }
                        },
                        "teamB": {
                            "id": "4yg9ttzw0m51048doksv8uq5r",
                            "code": "ELC",
                            "short": "إيلتشي",
                            "long": "إيلتشي",
                            "full": "إيلتشي",
                            "name": "إيلتشي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FAt7wHXEtvayILK0zMoHM7.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "yeOcvGvN3bXE-3xRAkYLZ",
                        "startDate": "2025-01-18T20:00:00.000Z",
                        "venue": {
                            "name": "إستاديو سيوداد دي فالينسيا"
                        },
                        "lastUpdatedAt": "2024-06-26T17:07:31.000Z",
                        "cachedAt": "2025-01-18T08:03:22.771Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الأسباني الدرجة الثانية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4grc9qgcvusllap8h5j6gc5h5",
                            "code": "LEV",
                            "short": "ليفانتي",
                            "long": "ليفانتي",
                            "full": "ليفانتي",
                            "name": "ليفانتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FO-dLKNu7kxdqPWfH2EpDy.png"
                            }
                        },
                        "teamB": {
                            "id": "26fes5ubaeq0fk1nay2pj2ob2",
                            "code": "GRA",
                            "short": "غرناطة",
                            "long": "غرناطة",
                            "full": "غرناطة",
                            "name": "غرناطة",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FGZRkX6FnwdXWGQQoyr4g3.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "722fdbecxzcq9788l6jqclzlw",
                    "name": "الدوري الألماني - الدرجة الثانية",
                    "area": {
                        "name": "Germany"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F36min0qztu8eydwvpv8t1is0m.png"
                    }
                },
                "matches": [
                    {
                        "id": "5f7-nlEajoG36Oz0Jn3XJ",
                        "startDate": "2025-01-18T12:00:00.000Z",
                        "venue": {
                            "name": "Eintracht Stadion"
                        },
                        "lastUpdatedAt": "2024-07-04T12:07:04.000Z",
                        "cachedAt": "2025-01-18T07:12:35.538Z",
                        "period": null,
                        "round": {
                            "name": "2. Bundesliga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "kxpw3rqn4ukt7nqmtjj62lbn",
                            "code": "EBS",
                            "short": "براونشفيج",
                            "long": "براونشفيج",
                            "full": "براونشفيج",
                            "name": "براونشفيج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNsjjYRx3e_YaAqx3NSAmB.png"
                            }
                        },
                        "teamB": {
                            "id": "cz4a6wmzx2obyisadhgaccx7b",
                            "code": "S04",
                            "short": "شالكه 04",
                            "long": "شالكه 04",
                            "full": "شالكه 04",
                            "name": "شالكه 04",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FMJmLo-A0RXtnjZxKJWml6.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "aUaBi8OSn6bFSvl65hSP5",
                        "startDate": "2025-01-18T12:00:00.000Z",
                        "venue": {
                            "name": "Fritz Walter Stadion"
                        },
                        "lastUpdatedAt": "2024-07-04T12:07:00.000Z",
                        "cachedAt": "2025-01-18T06:47:49.351Z",
                        "period": null,
                        "round": {
                            "name": "2. Bundesliga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dmw05a03pgt48fnf9ikxs6i1o",
                            "code": "FCK",
                            "short": "كايزرسلاوترن",
                            "long": "كايزرسلاوترن",
                            "full": "كايزرسلاوترن",
                            "name": "كايزرسلاوترن",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FeNZhIUdrLnF3DNQ5K8TTu.png"
                            }
                        },
                        "teamB": {
                            "id": "6jg331h22e39cb5xt1rpo2kgw",
                            "code": "UMF",
                            "short": "أولم",
                            "long": "أولم",
                            "full": "أولم",
                            "name": "أولم",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FP2bOR0lgxGCzkkh5Iqtxa.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "cPGFOsD-ewFEhB5BsNNCU",
                        "startDate": "2025-01-18T12:00:00.000Z",
                        "venue": {
                            "name": "Preussenstadion"
                        },
                        "lastUpdatedAt": "2024-07-04T12:08:52.000Z",
                        "cachedAt": "2025-01-18T07:20:15.805Z",
                        "period": null,
                        "round": {
                            "name": "2. Bundesliga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "cxs2i7zp6sgr6m46syqdww93y",
                            "code": "PRM",
                            "short": "برويسين مونستر",
                            "long": "برويسين مونستر",
                            "full": "برويسين مونستر",
                            "name": "برويسين مونستر",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fhu9b8kdMfxoyBLk6UUBqU.png"
                            }
                        },
                        "teamB": {
                            "id": "9dlxuym0eab00j9ggrdr87soj",
                            "code": "GFT",
                            "short": "جريوثر فورث",
                            "long": "جريوثر فورث",
                            "full": "جريوثر فورث",
                            "name": "جريوثر فورث",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FEIgE0U3GuG5-V4l0TxwmT.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "zPlB-kDsZbmolcwF2c4en",
                        "startDate": "2025-01-18T19:30:00.000Z",
                        "venue": {
                            "name": "إمتيك أرينا"
                        },
                        "lastUpdatedAt": "2024-07-04T12:04:52.000Z",
                        "cachedAt": "2025-01-18T06:44:48.343Z",
                        "period": null,
                        "round": {
                            "name": "2. Bundesliga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "75xi6hloabmnjn2kzgj1g8h1s",
                            "code": "HSV",
                            "short": "هامبورغ إس في",
                            "long": "هامبورغ إس في",
                            "full": "هامبورغ إس في",
                            "name": "هامبورغ إس في",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FG7u0-FKJsANMgyoQvFcx9.png"
                            }
                        },
                        "teamB": {
                            "id": "8q1ul09cygzswb7tb456bmifv",
                            "code": "KOE",
                            "short": "إف سي كولن",
                            "long": "إف سي كولن",
                            "full": "إف سي كولن",
                            "name": "إف سي كولن",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FElZxB_J96MBe8X1MIVM9K.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "8ey0ww2zsosdmwr8ehsorh6t7",
                    "name": "الدوري الإيطالي - الدرجة الثانية",
                    "area": {
                        "name": "Italy"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F25f2cmb2r8mk5rj92tzer6kvv.png"
                    }
                },
                "matches": [
                    {
                        "id": "Z3gp8LDIKvZwmLmXZamWA",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": {
                            "name": "Stadio Giovanni Zini"
                        },
                        "lastUpdatedAt": "2024-07-10T19:32:09.000Z",
                        "cachedAt": "2025-01-18T07:08:56.543Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإيطالي الدرجة B",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "af91jdcs6x0bqkmdb78rokod2",
                            "code": "CRE",
                            "short": "كريمونيزي",
                            "long": "كريمونيزي",
                            "full": "كريمونيزي",
                            "name": "كريمونيزي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFnmfMzvcu_32_RynNiPom.png"
                            }
                        },
                        "teamB": {
                            "id": "borsok34ukkl30nox3azxw3wq",
                            "code": "COS",
                            "short": "كوسينزا",
                            "long": "كوسينزا",
                            "full": "كوسينزا",
                            "name": "كوسينزا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FVm27kuvgVHBMFK8xUYLdB.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "DbL-UCdAY9B8RqhX3p4uC",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": {
                            "name": "Stadio Arechi"
                        },
                        "lastUpdatedAt": "2024-07-10T19:32:10.000Z",
                        "cachedAt": "2025-01-18T06:36:38.466Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإيطالي الدرجة B",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "49rkyo4do8uwj06geomw0xr4i",
                            "code": "SAL",
                            "short": "ساليرنيتانا",
                            "long": "ساليرنيتانا",
                            "full": "ساليرنيتانا",
                            "name": "ساليرنيتانا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FsWXicnwQGlxoLtuafquMl.png"
                            }
                        },
                        "teamB": {
                            "id": "fdzmkrqxu2s0x9cioolazpy",
                            "code": "REG",
                            "short": "Reggiana",
                            "long": "Reggiana",
                            "full": "Reggiana",
                            "name": "Reggiana",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FS31QGSOQGLv50FeMVv_Ji.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "ceYp3JJtYb2FgLnhdd9b5",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": {
                            "name": "Stadio P.C. Tombolato"
                        },
                        "lastUpdatedAt": "2024-07-10T19:32:09.000Z",
                        "cachedAt": "2025-01-18T06:47:41.633Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإيطالي الدرجة B",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dlda35ece1taoufqhscwnf6jq",
                            "code": "CIT",
                            "short": "تشيتاديلا",
                            "long": "تشيتاديلا",
                            "full": "تشيتاديلا",
                            "name": "تشيتاديلا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FIS0ecEzvuEByJgcf32f2L.png"
                            }
                        },
                        "teamB": {
                            "id": "r8fzkdrr5wh39uknwekrkr2",
                            "code": "MAN",
                            "short": "مانتوفا",
                            "long": "مانتوفا",
                            "full": "مانتوفا",
                            "name": "مانتوفا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F8zw7KdKrgEAUn5xsyC9R3.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "X5-yozvc1vO9Rocf-mygT",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": {
                            "name": "Stadio Alberto Braglia"
                        },
                        "lastUpdatedAt": "2024-07-10T19:32:10.000Z",
                        "cachedAt": "2025-01-18T07:49:11.284Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإيطالي الدرجة B",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "n1m34lh0h7dfk0ag9h0zcxgh",
                            "code": "MOD",
                            "short": "مودينا",
                            "long": "مودينا",
                            "full": "مودينا",
                            "name": "مودينا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fpi7SWDwjVYzZpz5rWwzd4.png"
                            }
                        },
                        "teamB": {
                            "id": "5khizzei8z0qbb7exz622wxw3",
                            "code": "FRC",
                            "short": "فروسينوني",
                            "long": "فروسينوني",
                            "full": "فروسينوني",
                            "name": "فروسينوني",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FsUJTU4hCC48T7kgLbTnXR.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "DtFO93jn3TyHZdI0nVMRl",
                        "startDate": "2025-01-18T16:15:00.000Z",
                        "venue": {
                            "name": "Stadio San Nicola"
                        },
                        "lastUpdatedAt": "2024-07-10T19:32:09.000Z",
                        "cachedAt": "2025-01-18T07:18:23.007Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الإيطالي الدرجة B",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "e2hi197ydanctu9i74tonpt4r",
                            "code": "BAR",
                            "short": "باري",
                            "long": "باري",
                            "full": "باري",
                            "name": "باري",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F2lodhIY07b2E5tnxCz39M.png"
                            }
                        },
                        "teamB": {
                            "id": "a80afp6w8wof6ci633u8k93de",
                            "code": "BRE",
                            "short": "بريشيا",
                            "long": "بريشيا",
                            "full": "بريشيا",
                            "name": "بريشيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FXriedTWmEfvCkF3peCckl.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "4w7x0s5gfs5abasphlha5de8k",
                    "name": "الدوري الفرنسي الدرجة الثانية",
                    "area": {
                        "name": "France"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F7gww28djs405rfga69smki84o.png"
                    }
                },
                "matches": [
                    {
                        "id": "pPRaPn_zqRBANtZbe_ooZ",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": {
                            "name": "ستاد سينت سيمفوريين"
                        },
                        "lastUpdatedAt": "2024-06-21T12:32:22.000Z",
                        "cachedAt": "2025-01-18T06:54:01.217Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الفرنسي الدرجة الثانية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2khen2a38l2hkx33s73pehl6o",
                            "code": "MET",
                            "short": "ميتز",
                            "long": "ميتز",
                            "full": "ميتز",
                            "name": "ميتز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FACpnqWCyZ15IqMTtxJ-qs.png"
                            }
                        },
                        "teamB": {
                            "id": "8v00fx2zwhiwm05tqqkt122p5",
                            "code": "PAR",
                            "short": "باريس إف سي",
                            "long": "باريس إف سي",
                            "full": "باريس إف سي",
                            "name": "باريس إف سي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FWWz2gkQcwpjxdPlZkx-BZ.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "KlNHsIIGrwN1ISqkXxZIv",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": {
                            "name": "Stade Gabriel Montpied"
                        },
                        "lastUpdatedAt": "2024-06-21T12:32:22.000Z",
                        "cachedAt": "2025-01-18T07:02:14.852Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الفرنسي الدرجة الثانية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "17o35s8assv3kamxowzz77k4r",
                            "code": "CLE",
                            "short": "كليرمونت فوت",
                            "long": "كليرمونت فوت",
                            "full": "كليرمونت فوت",
                            "name": "كليرمونت فوت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FnXLrXQHXsySB5FSmwgWjh.png"
                            }
                        },
                        "teamB": {
                            "id": "75gwk94q9jkoh78jk8nlay4xj",
                            "code": "LAV",
                            "short": "لافال",
                            "long": "لافال",
                            "full": "لافال",
                            "name": "لافال",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FfRU4ZdyI4N1FQ3MxmE1zX.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "K71IWfNXKT_iqOaD3cnMz",
                        "startDate": "2025-01-18T18:00:00.000Z",
                        "venue": {
                            "name": "Matmut Atlantique"
                        },
                        "lastUpdatedAt": "2024-06-21T12:32:22.000Z",
                        "cachedAt": "2025-01-18T07:11:35.589Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الفرنسي الدرجة الثانية",
                            "display": false
                        },
                        "status": "CANCELLED",
                        "teamA": {
                            "id": "98dr7jscv8adc8zgi2u403oij",
                            "code": "GBO",
                            "short": "بوردو",
                            "long": "بوردو",
                            "full": "بوردو",
                            "name": "بوردو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fxxdnc4ACh-Tg33JxtwTQf.png"
                            }
                        },
                        "teamB": {
                            "id": "ykrX6I-9LBRSSu6HJdbDO",
                            "code": "ANN",
                            "short": "أنيسي",
                            "long": "أنيسي",
                            "full": "أنيسي",
                            "name": "أنيسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fjzx1QTSJ4jgMJHSjsrkWC.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "X87ATkgGI8eLgjxxrjkA0",
                        "startDate": "2025-01-18T19:00:00.000Z",
                        "venue": {
                            "name": "Stade Marcel-Tribut"
                        },
                        "lastUpdatedAt": "2024-06-21T12:32:20.000Z",
                        "cachedAt": "2025-01-18T06:50:05.170Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الفرنسي الدرجة الثانية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "15ip1h6m0b4e8xfi597y5uo5u",
                            "code": "DUN",
                            "short": "دونكيركي",
                            "long": "دونكيركي",
                            "full": "دونكيركي",
                            "name": "دونكيركي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FWgPGABs79PPcPVik_nOes.png"
                            }
                        },
                        "teamB": {
                            "id": "70nn27vgkt6l48lvv5e66q7ww",
                            "code": "FCL",
                            "short": "لوريان",
                            "long": "لوريان",
                            "full": "لوريان",
                            "name": "لوريان",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNeLznb4azTQgHCdX6l9X3.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "e0lck99w8meo9qoalfrxgo33o",
                    "name": "سويسرا 1",
                    "area": {
                        "name": "Switzerland"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F3bh70jgvc5mn58x0byjkuda17.png"
                    }
                },
                "matches": [
                    {
                        "id": "yi_OqNoNCVc1QkqE_BLRO",
                        "startDate": "2025-01-18T17:00:00.000Z",
                        "venue": {
                            "name": "Stade Tourbillon"
                        },
                        "lastUpdatedAt": "2024-06-19T05:40:38.000Z",
                        "cachedAt": "2025-01-18T06:52:47.342Z",
                        "period": null,
                        "round": {
                            "name": "Super League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "b9fc1umgats16gk6wr769wh8a",
                            "code": "SIO",
                            "short": "سيون",
                            "long": "سيون",
                            "full": "سيون",
                            "name": "سيون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FyxIjTM9voFfvcIwoJMYMR.png"
                            }
                        },
                        "teamB": {
                            "id": "9dqlf92t42brv71kvaet67tm4",
                            "code": "GRA",
                            "short": "جراسهوبرز",
                            "long": "جراسهوبرز",
                            "full": "جراسهوبرز",
                            "name": "جراسهوبرز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F9WV14UZ1UtDtyEwhIJTjL.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "laAn2KQHmjqczXaQxSia3",
                        "startDate": "2025-01-18T17:00:00.000Z",
                        "venue": {
                            "name": "Wankdorfstadion"
                        },
                        "lastUpdatedAt": "2024-06-19T05:40:38.000Z",
                        "cachedAt": "2025-01-18T06:48:29.465Z",
                        "period": null,
                        "round": {
                            "name": "Super League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5fd9f9bti2cdgb6r1lf8l2bc7",
                            "code": "YB",
                            "short": "يونج بويز",
                            "long": "يونج بويز",
                            "full": "يونج بويز",
                            "name": "يونج بويز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FqPMtaYDeypTdTXZnCuM1F.png"
                            }
                        },
                        "teamB": {
                            "id": "o0lDDy01JaVLhSN3VlWm0",
                            "code": "WIN",
                            "short": "وينترثور",
                            "long": "وينترثور",
                            "full": "وينترثور",
                            "name": "وينترثور",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJaeXrA7eQLBs0X9QlrYR9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "yZALpu0XnZ4-RqLCW3Kt6",
                        "startDate": "2025-01-18T19:30:00.000Z",
                        "venue": {
                            "name": "Stade de Geneve"
                        },
                        "lastUpdatedAt": "2024-06-19T05:40:38.000Z",
                        "cachedAt": "2025-01-18T07:07:45.555Z",
                        "period": null,
                        "round": {
                            "name": "Super League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ccwv4ymbs3u0q8xaby4hqb0jz",
                            "code": "SER",
                            "short": "سيرفيت",
                            "long": "سيرفيت",
                            "full": "سيرفيت",
                            "name": "سيرفيت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FleIkiBngnh2FcRLZ9B5yL.png"
                            }
                        },
                        "teamB": {
                            "id": "dty3ktxspuo8ayudnf0egkvx5",
                            "code": "GAL",
                            "short": "سانت جالين",
                            "long": "سانت جالين",
                            "full": "سانت جالين",
                            "name": "سانت جالين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F5b-gNaXK2cg7VpvYbgRbs.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "2hsidwomhjsaaytdy9u5niyi4",
                    "name": "الدوري المكسيكي الممتاز",
                    "area": {
                        "name": "Mexico"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F5trdr3jf42i20zj1hnkvcytr6.png"
                    }
                },
                "matches": [
                    {
                        "id": "K9WI9IoVLbesGI22Uu3N6",
                        "startDate": "2025-01-18T01:00:00.000Z",
                        "venue": {
                            "name": "Estadio Cuahutehmoc"
                        },
                        "lastUpdatedAt": "2025-01-18T03:02:07.000Z",
                        "cachedAt": "2025-01-18T08:00:58.064Z",
                        "period": null,
                        "round": {
                            "name": "Liga MX Clausura",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "4kw25nmgmacpbvo24ttr994k5",
                            "code": "PUE",
                            "short": "بويبلا",
                            "long": "بويبلا",
                            "full": "بويبلا",
                            "name": "بويبلا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fq94Qfd3ij1uFwnAgRMwnE.png"
                            }
                        },
                        "teamB": {
                            "id": "54ph1k82y99hhjsf7m2usns8u",
                            "code": "SAN",
                            "short": "سان لويس",
                            "long": "سان لويس",
                            "full": "سان لويس",
                            "name": "سان لويس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJ5TP6PEozRXP4icXyfTwU.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 1,
                            "teamB": 2
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "gr1KR_TXZk47HY4QhKk0b",
                        "startDate": "2025-01-18T01:00:00.000Z",
                        "venue": {
                            "name": "Estadio Universitario/El Volcan"
                        },
                        "lastUpdatedAt": "2025-01-18T03:11:20.000Z",
                        "cachedAt": "2025-01-18T08:02:29.680Z",
                        "period": null,
                        "round": {
                            "name": "Liga MX Clausura",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "6hmo9mrlz73nwxkshwuu5vsfm",
                            "code": "TIG",
                            "short": "تيجريس",
                            "long": "تيجريس",
                            "full": "تيجريس",
                            "name": "تيجريس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4VNj66ARvtZ3EaYh3vNRu.png"
                            }
                        },
                        "teamB": {
                            "id": "dsm1dxw4j3f973w7kzhe2n816",
                            "code": "MAZ",
                            "short": "Mazatlan FC",
                            "long": "Mazatlan FC",
                            "full": "Mazatlan FC",
                            "name": "Mazatlan FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FlSkRa46cX__whEBKczmOD.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 2,
                            "teamB": 1
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Qy3pBWraZTeojEhM23BVj",
                        "startDate": "2025-01-18T03:05:00.000Z",
                        "venue": {
                            "name": "Estadio Victoria"
                        },
                        "lastUpdatedAt": "2025-01-18T05:12:55.000Z",
                        "cachedAt": "2025-01-18T08:05:33.158Z",
                        "period": null,
                        "round": {
                            "name": "Liga MX Clausura",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "b7hn6knkuxbpj1i8rmzapns7b",
                            "code": "NEC",
                            "short": "ننيكاكسا",
                            "long": "ننيكاكسا",
                            "full": "ننيكاكسا",
                            "name": "ننيكاكسا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FsBIyGqAoY7kHIOi35icgQ.png"
                            }
                        },
                        "teamB": {
                            "id": "e603sojy77s4u0ypqds2v2a1g",
                            "code": "CDG",
                            "short": "سي جوادالاخارا",
                            "long": "سي جوادالاخارا",
                            "full": "سي جوادالاخارا",
                            "name": "سي جوادالاخارا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNRNVizQV-7wYSAYnqdzxZ.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 3,
                            "teamB": 2
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "xwnjb1az11zffwty3m6vn8y6",
                    "name": "استراليا 1",
                    "area": {
                        "name": "Australia"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2Fu5ieemi69z72c3bgczyy68lo.png"
                    }
                },
                "matches": [
                    {
                        "id": "viWAAAM_gKJfzLfDgDFwb",
                        "startDate": "2025-01-18T04:00:00.000Z",
                        "venue": {
                            "name": "Go Media Stadium"
                        },
                        "lastUpdatedAt": "2025-01-18T05:54:06.000Z",
                        "cachedAt": "2025-01-18T08:57:01.611Z",
                        "period": null,
                        "round": {
                            "name": "A-League Men",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "7-lXPOX3SLPAmvmy8YXOD",
                            "code": "AUC",
                            "short": "Auckland FC",
                            "long": "Auckland FC",
                            "full": "Auckland FC",
                            "name": "Auckland FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FPP6FUnUud0BZy6wfLA9vG.png"
                            }
                        },
                        "teamB": {
                            "id": "c33jm806py6adse5wv9wx6ch1",
                            "code": "MEL",
                            "short": "ملبورن سيتي",
                            "long": "ملبورن سيتي",
                            "full": "ملبورن سيتي",
                            "name": "ملبورن سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FCKAsoCDJb6kUAKQePJ_no.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 3,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "JhX2B7zbmJjZMUsDQbCHu",
                        "startDate": "2025-01-18T06:00:00.000Z",
                        "venue": {
                            "name": "Allianz Stadium"
                        },
                        "lastUpdatedAt": "2025-01-18T08:03:26.000Z",
                        "cachedAt": "2025-01-18T08:56:45.865Z",
                        "period": null,
                        "round": {
                            "name": "A-League Men",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "38ui5tfi8anjuh533emny2tz1",
                            "code": "SFC",
                            "short": "سيدني إف سي",
                            "long": "سيدني إف سي",
                            "full": "سيدني إف سي",
                            "name": "سيدني إف سي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F2k_QAa8ZIjldmLtaupI62.png"
                            }
                        },
                        "teamB": {
                            "id": "v046no35g7ebk8lytdjmfb43",
                            "code": "BRR",
                            "short": "بريزبان رور إف سي",
                            "long": "بريزبان رور إف سي",
                            "full": "بريزبان رور إف سي",
                            "name": "بريزبان رور إف سي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FI8qcaquxbBYmj7ibpc6cI.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 3,
                            "teamB": 4
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "XPIu-k_U1DO8-gNga2XbA",
                        "startDate": "2025-01-18T08:35:00.000Z",
                        "venue": {
                            "name": "Coopers Stadium"
                        },
                        "lastUpdatedAt": "2025-01-18T08:40:38.000Z",
                        "cachedAt": "2025-01-18T08:57:15.114Z",
                        "period": {
                            "type": "FIRST_HALF",
                            "minute": 17,
                            "extra": 0
                        },
                        "round": {
                            "name": "A-League Men",
                            "display": false
                        },
                        "status": "LIVE",
                        "teamA": {
                            "id": "6lezh5aazy0xca1800e5dqxwl",
                            "code": "AUN",
                            "short": "أديلايد يونايتد",
                            "long": "أديلايد يونايتد",
                            "full": "أديلايد يونايتد",
                            "name": "أديلايد يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FVIiUeuZSC-x3UdU1S5sHp.png"
                            }
                        },
                        "teamB": {
                            "id": "9xmhnv6im8h7c9e17oqvcx8gl",
                            "code": "MEL",
                            "short": "ميلبورن فيكتوري",
                            "long": "ميلبورن فيكتوري",
                            "full": "ميلبورن فيكتوري",
                            "name": "ميلبورن فيكتوري",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FN3_FSrlundmPvfSI0L6cH.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "1gwajyt0pk2jm5fx5mu36v114",
                    "name": "هولندا 2",
                    "area": {
                        "name": "Netherlands"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F6hzi5pltnz67q4la8yli9qfv6.png"
                    }
                },
                "matches": [
                    {
                        "id": "b0mz8ura1zbgne1u34kap7kt0",
                        "startDate": "2025-01-18T15:30:00.000Z",
                        "venue": {
                            "name": "Stadion De Geusselt"
                        },
                        "lastUpdatedAt": "2024-06-19T09:42:44.000Z",
                        "cachedAt": "2025-01-18T06:43:09.649Z",
                        "period": null,
                        "round": {
                            "name": "Eerste Divisie",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bqm1bnp1bh2apyudlz1o1whr3",
                            "code": "MAA",
                            "short": "ماستريكت",
                            "long": "ماستريكت",
                            "full": "ماستريكت",
                            "name": "ماستريكت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F6gXE5TRwbO6N662AM4rlO.png"
                            }
                        },
                        "teamB": {
                            "id": "eh54mfvjtrttgsg1wbjnvxcqz",
                            "code": "BOS",
                            "short": "دين بوش",
                            "long": "دين بوش",
                            "full": "دين بوش",
                            "name": "دين بوش",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F6kr83o36AYNALtOfw4m-P.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "dkarmrybx9vx10rg7cywumth0",
                    "name": "ألمانيا 3",
                    "area": {
                        "name": "Germany"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F36min0qztu8eydwvpv8t1is0m.png"
                    }
                },
                "matches": [
                    {
                        "id": "3JL6n1lKuKxP8ANwkYiVu",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-09T14:10:13.000Z",
                        "cachedAt": "2025-01-18T07:16:31.114Z",
                        "period": null,
                        "round": {
                            "name": "3. Liga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bdlavlqj0dshxnepyfanzwu47",
                            "code": "ABI",
                            "short": "بيليفيلد",
                            "long": "بيليفيلد",
                            "full": "بيليفيلد",
                            "name": "بيليفيلد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fcbm_oTGdsgyQirFw5UBAz.png"
                            }
                        },
                        "teamB": {
                            "id": "D5nTWSTiATMILdlVQwJkm",
                            "code": "COT",
                            "short": "كوتبوس",
                            "long": "كوتبوس",
                            "full": "كوتبوس",
                            "name": "كوتبوس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FrZ7F-f96VJMsZNx-yF8g-.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "_BBPeSLA1Pd048L8IOTCr",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-09T14:10:13.000Z",
                        "cachedAt": "2025-01-18T07:45:51.630Z",
                        "period": null,
                        "round": {
                            "name": "3. Liga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "kmxTNaNiKJzLbKeL5xrKF",
                            "code": "VFB",
                            "short": "شتوتجارت 2",
                            "long": "شتوتجارت 2",
                            "full": "شتوتجارت 2",
                            "name": "شتوتجارت 2",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fwkx5iWHRZEW1Uq3zwffKg.png"
                            }
                        },
                        "teamB": {
                            "id": "32yd2iyyibspuyakdizwy8g3n",
                            "code": "HRO",
                            "short": "هانسا روشتوك",
                            "long": "هانسا روشتوك",
                            "full": "هانسا روشتوك",
                            "name": "هانسا روشتوك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FV4PQ3KYwkYL3WSKnG4v_z.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "HQmpy_2nWrtDL_Or31-vx",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-09T14:10:13.000Z",
                        "cachedAt": "2025-01-18T07:16:04.690Z",
                        "period": null,
                        "round": {
                            "name": "3. Liga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "phapxbb6gx2vjn09uozt2et6",
                            "code": "SAB",
                            "short": "ساربوكن",
                            "long": "ساربوكن",
                            "full": "ساربوكن",
                            "name": "ساربوكن",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FxCsiOLVjVdPJATjIcu9IL.png"
                            }
                        },
                        "teamB": {
                            "id": "1e25o4gxxxnibjh9lgr9ykdfe",
                            "code": "TSV",
                            "short": "1860 ميونخ",
                            "long": "1860 ميونخ",
                            "full": "1860 ميونخ",
                            "name": "1860 ميونخ",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FRiELpue_Z0pSdcnr7crce.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "x-_caq6ttU9WU2QYc7IdP",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-09T14:10:13.000Z",
                        "cachedAt": "2025-01-18T06:32:56.855Z",
                        "period": null,
                        "round": {
                            "name": "3. Liga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9hf3qhwxy4k0908nw0xo8rj32",
                            "code": "UHG",
                            "short": "أونترهاكينج",
                            "long": "أونترهاكينج",
                            "full": "أونترهاكينج",
                            "name": "أونترهاكينج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FWJXyWJHafFUp8N5Jf5Zt-.png"
                            }
                        },
                        "teamB": {
                            "id": "25j61j3nddighxngqktjlmt8n",
                            "code": "BVB",
                            "short": "دورتموند 2",
                            "long": "دورتموند 2",
                            "full": "دورتموند 2",
                            "name": "دورتموند 2",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FTPrTy-2f8FQD9_zmDvhr3.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "onamCQnmeSjaUALT6sbZk",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-09T14:10:13.000Z",
                        "cachedAt": "2025-01-18T06:49:13.564Z",
                        "period": null,
                        "round": {
                            "name": "3. Liga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8xvajtyria7w2ejfn2ilwq28i",
                            "code": "OSN",
                            "short": "أوسنابروك",
                            "long": "أوسنابروك",
                            "full": "أوسنابروك",
                            "name": "أوسنابروك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FGAR1hK7S9NxKuIUHcNPQg.png"
                            }
                        },
                        "teamB": {
                            "id": "884uzyf1wosc7ykji6e18gifp",
                            "code": "SVS",
                            "short": "ساندهاوزن",
                            "long": "ساندهاوزن",
                            "full": "ساندهاوزن",
                            "name": "ساندهاوزن",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FwQex_S1p26Kna7HK9sPC4.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "liDCd4qyhUliKCGNNdQu7",
                        "startDate": "2025-01-18T15:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-09T14:10:13.000Z",
                        "cachedAt": "2025-01-18T07:40:31.810Z",
                        "period": null,
                        "round": {
                            "name": "3. Liga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3uen3s9ki7hwcg867jcmimjgq",
                            "code": "SVW",
                            "short": "ويهين",
                            "long": "ويهين",
                            "full": "ويهين",
                            "name": "ويهين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FLR6USY8q398VhiMAN0lAX.png"
                            }
                        },
                        "teamB": {
                            "id": "3qheqndokbtwr4smt85w4fr82",
                            "code": "VEL",
                            "short": "إس سي فيرل",
                            "long": "إس سي فيرل",
                            "full": "إس سي فيرل",
                            "name": "إس سي فيرل",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FYaYjI79fMmVYN3goh5qUO.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "c0r21rtokgnbtc0o2rldjmkxu",
                    "name": "اليونان 1",
                    "area": {
                        "name": "Greece"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F6lpgd60z890no2v46zdecrcss.png"
                    }
                },
                "matches": [
                    {
                        "id": "X-mu5GFTxZPhtKUJ9M2Or",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "أبوستولوس نيكوليديس ستاديوم"
                        },
                        "lastUpdatedAt": "2024-12-14T14:32:27.000Z",
                        "cachedAt": "2025-01-18T06:52:40.603Z",
                        "period": null,
                        "round": {
                            "name": "Super League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ApX56ow1UsCyhgESlhjoe",
                            "code": "KAL",
                            "short": "كاليثيا",
                            "long": "كاليثيا",
                            "full": "كاليثيا",
                            "name": "كاليثيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FGpGhrwkY9x2EH0ZW9Te-M.png"
                            }
                        },
                        "teamB": {
                            "id": "937i26v5naqzhwxcelwtgou3u",
                            "code": "VOL",
                            "short": "NFC Volos",
                            "long": "NFC Volos",
                            "full": "NFC Volos",
                            "name": "NFC Volos",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FCAX-Sfa8Rp9bzGSlTJHxF.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "89ovpy1rarewwzqvi30bfdr8b",
                    "name": "الدوري الروماني",
                    "area": {
                        "name": "Romania"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F17oj2qrzqlkhdjvazum10sx2i.png"
                    }
                },
                "matches": [
                    {
                        "id": "GFxj_nUox4FW8-21H6Vpx",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": {
                            "name": "Cluj Arena"
                        },
                        "lastUpdatedAt": "2025-01-17T10:55:17.000Z",
                        "cachedAt": "2025-01-18T06:50:55.687Z",
                        "period": null,
                        "round": {
                            "name": "Superliga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "h5h218n6B-JAIImI2u1a7",
                            "code": "UNC",
                            "short": "يونيفيرسيتاتي كلوج",
                            "long": "يونيفيرسيتاتي كلوج",
                            "full": "يونيفيرسيتاتي كلوج",
                            "name": "يونيفيرسيتاتي كلوج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FlKMqP4OyRZQDwknV77RZ9.png"
                            }
                        },
                        "teamB": {
                            "id": "HhYvnl-rDf_TErm3Ub-7O",
                            "code": "BUZ",
                            "short": "FC Gloria Buzau",
                            "long": "FC Gloria Buzau",
                            "full": "FC Gloria Buzau",
                            "name": "FC Gloria Buzau",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FuGAAGwscfpy8RPoGzPbjd.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "EpJgqL6ZGApcV2jDrDafj",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": {
                            "name": "Stadionul Otelul"
                        },
                        "lastUpdatedAt": "2025-01-17T12:15:03.000Z",
                        "cachedAt": "2025-01-18T06:45:55.638Z",
                        "period": null,
                        "round": {
                            "name": "Superliga",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "WjmSEOBttDB4qrH-2uk9d",
                            "code": "OG",
                            "short": "أوتيلول جالاتي",
                            "long": "أوتيلول جالاتي",
                            "full": "أوتيلول جالاتي",
                            "name": "أوتيلول جالاتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FwJ-bmtlmHTBsXe8HhjjrC.png"
                            }
                        },
                        "teamB": {
                            "id": "qoJv9SR3GcUSN6Z6ri6fd",
                            "code": "PEP",
                            "short": "بترولول",
                            "long": "بترولول",
                            "full": "بترولول",
                            "name": "بترولول",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FW8Gogvw-NklY56DExBVfH.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "75i269i1ak43magshljadydrh",
                    "name": "إيرلندا الشمالية 1",
                    "area": {
                        "name": "Northern Ireland"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F5euslv7jutsauoqt3o2lj9bvi.png"
                    }
                },
                "matches": [
                    {
                        "id": "urPaZw5P1EHI0picYWECh",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "سوليتود"
                        },
                        "lastUpdatedAt": "2024-06-26T10:03:33.000Z",
                        "cachedAt": "2025-01-18T06:44:52.445Z",
                        "period": null,
                        "round": {
                            "name": "Premiership",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "duykkqn0ga5fcpx7d1bdpdw7a",
                            "code": "CLI",
                            "short": "كيفتونفيل",
                            "long": "كيفتونفيل",
                            "full": "كيفتونفيل",
                            "name": "كيفتونفيل",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FPpJZDBLqvf3_gD-gVAz7o.png"
                            }
                        },
                        "teamB": {
                            "id": "3su2sozvkefafh80jhtq6htmt",
                            "code": "LOU",
                            "short": "لوجهجال",
                            "long": "لوجهجال",
                            "full": "لوجهجال",
                            "name": "لوجهجال",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fz7tmIZj3u-hyfOLeCUXiR.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "b2n2VNJJftf5U9mHHeCyj",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Showgrounds"
                        },
                        "lastUpdatedAt": "2024-06-26T10:03:33.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "Premiership",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bo2mfvxkf0m8xmh03xh1hv3db",
                            "code": "COL",
                            "short": "كوليراين",
                            "long": "كوليراين",
                            "full": "كوليراين",
                            "name": "كوليراين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FCgzkR0RpPHcoi6WiK0yl3.png"
                            }
                        },
                        "teamB": {
                            "id": "6v4erawbrpebt61sstbb9nc8o",
                            "code": "CRU",
                            "short": "كروسايدرز",
                            "long": "كروسايدرز",
                            "full": "كروسايدرز",
                            "name": "كروسايدرز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbUEN6MyC3dc7lVrvDFJoy.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "oHkI365ZdSH2FAcjQ92_w",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Oval"
                        },
                        "lastUpdatedAt": "2024-06-26T10:03:32.000Z",
                        "cachedAt": "2025-01-18T06:52:47.362Z",
                        "period": null,
                        "round": {
                            "name": "Premiership",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dmqfasbl5871x3lpv9wiqssmq",
                            "code": "GLE",
                            "short": "جلينتوران",
                            "long": "جلينتوران",
                            "full": "جلينتوران",
                            "name": "جلينتوران",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fee5TQXfbdJ14Ob7A5Ol2g.png"
                            }
                        },
                        "teamB": {
                            "id": "1hg5ttq2rjlbm4t1qgh4o3jnw",
                            "code": "LAR",
                            "short": "لارني",
                            "long": "لارني",
                            "full": "لارني",
                            "name": "لارني",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F2lmdmQRltiJl7nc9hzDFe.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "bM-9uRJM9EnV2p2JHFWDi",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Shamrock Park"
                        },
                        "lastUpdatedAt": "2024-06-26T10:03:32.000Z",
                        "cachedAt": "2025-01-18T06:52:47.362Z",
                        "period": null,
                        "round": {
                            "name": "Premiership",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3vbv7jss2xvjj6znosnbjpb42",
                            "code": "POR",
                            "short": "بورتداون",
                            "long": "بورتداون",
                            "full": "بورتداون",
                            "name": "بورتداون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FpTUfWiTO8EszE9-cpxQFn.png"
                            }
                        },
                        "teamB": {
                            "id": "94p0uurlgchf82q5ydhyapm7h",
                            "code": "LIN",
                            "short": "ليتفيلد",
                            "long": "ليتفيلد",
                            "full": "ليتفيلد",
                            "name": "ليتفيلد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fg140ybRmG0AW56cOdpB3_.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "10HAnzGyxUwLY67ibkKkH",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Taylors Avenue"
                        },
                        "lastUpdatedAt": "2024-06-26T10:03:29.000Z",
                        "cachedAt": "2025-01-18T06:45:05.314Z",
                        "period": null,
                        "round": {
                            "name": "Premiership",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7l20xq512qqsbzzf99flzkequ",
                            "code": "CAR",
                            "short": "كاريك رينجرز",
                            "long": "كاريك رينجرز",
                            "full": "كاريك رينجرز",
                            "name": "كاريك رينجرز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FQDkzhUUfWmucnFgNvJ9_U.png"
                            }
                        },
                        "teamB": {
                            "id": "e2vt5me7kj77z7vxcgyc5n2ve",
                            "code": "BAL",
                            "short": "باليمينا",
                            "long": "باليمينا",
                            "full": "باليمينا",
                            "name": "باليمينا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FoB1OVwgBJUh7XlDFpvHNI.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "8sdpk4aerruf515yh76ezo7vi",
                    "name": "البرتغال 2",
                    "area": {
                        "name": "Portugal"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1nbm5i9a0403zzvltn17lxinc.png"
                    }
                },
                "matches": [
                    {
                        "id": "wUlC_Muvvf61nhWe9mN9M",
                        "startDate": "2025-01-18T11:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-08T06:23:10.000Z",
                        "cachedAt": "2025-01-18T06:46:17.066Z",
                        "period": null,
                        "round": {
                            "name": "Liga Portugal 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "oWBA6Twll5qV_knCvacZb",
                            "code": "ALV",
                            "short": "ألفيركا",
                            "long": "ألفيركا",
                            "full": "ألفيركا",
                            "name": "ألفيركا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FxN8rjP7P2i6ztZvoLke9E.png"
                            }
                        },
                        "teamB": {
                            "id": "bviyo2cuobo1dmlchlmpwdrgj",
                            "code": "POR",
                            "short": "بورتو 2",
                            "long": "بورتو 2",
                            "full": "بورتو 2",
                            "name": "بورتو 2",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FqpYWkvq4UR3AMhrZN-iRd.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "KKJxpto6ylkQFVzdkbf7C",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-08T06:23:10.000Z",
                        "cachedAt": "2025-01-18T07:09:18.044Z",
                        "period": null,
                        "round": {
                            "name": "Liga Portugal 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "co1i764h6b02husae71w6scs8",
                            "code": "POR",
                            "short": "بورتيمونينسي",
                            "long": "بورتيمونينسي",
                            "full": "بورتيمونينسي",
                            "name": "بورتيمونينسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FL0vaMUtXHBHvnSU1LasFR.png"
                            }
                        },
                        "teamB": {
                            "id": "ci8y5docbhlggjvx71kxsgmwa",
                            "code": "FEL",
                            "short": "Felgueiras 1932",
                            "long": "Felgueiras 1932",
                            "full": "Felgueiras 1932",
                            "name": "Felgueiras 1932",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FSjuiz_HoGfAuZL_jSmcg9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "HvTSXvG2ZXuBBvIqQF_zJ",
                        "startDate": "2025-01-18T15:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-08T06:23:10.000Z",
                        "cachedAt": "2025-01-18T06:42:28.503Z",
                        "period": null,
                        "round": {
                            "name": "Liga Portugal 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1eqgbl6a2ulf74tjbscpo7h6f",
                            "code": "FEI",
                            "short": "فييرينسي",
                            "long": "فييرينسي",
                            "full": "فييرينسي",
                            "name": "فييرينسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FvUlTLxvYclKUKpnCvs6t-.png"
                            }
                        },
                        "teamB": {
                            "id": "b4s4r679ggaejqjn6xcweh1qx",
                            "code": "TOR",
                            "short": "تورينسي",
                            "long": "تورينسي",
                            "full": "تورينسي",
                            "name": "تورينسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FfdZcNDHxmIWX2AkdnVyto.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "af79lqrc0ntom74zq13ccjslo",
                    "name": "بلجيكا 2",
                    "area": {
                        "name": "Belgium"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F4wbzjcclyefma1ourvjsu4q2j.png"
                    }
                },
                "matches": [
                    {
                        "id": "ZV1tbC2UFwpVSHZdV4veO",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-09-30T11:51:02.000Z",
                        "cachedAt": "2025-01-18T07:02:10.650Z",
                        "period": null,
                        "round": {
                            "name": "Proximus League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9njsy633rh1tyri7l2jaju5o",
                            "code": "EUP",
                            "short": "يوبين",
                            "long": "يوبين",
                            "full": "يوبين",
                            "name": "يوبين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Ff8XTdv3qcvymzM9wNW1hQ.png"
                            }
                        },
                        "teamB": {
                            "id": "54rdbfr3tz2nmc05dv4pad47m",
                            "code": "RWD",
                            "short": "إف سي بروكسل",
                            "long": "إف سي بروكسل",
                            "full": "إف سي بروكسل",
                            "name": "إف سي بروكسل",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FIO2HMtWYva8TBqE6W4T5B.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "sbdAT19h1U-DnQB6_6Dnf",
                        "startDate": "2025-01-18T17:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-06-11T16:08:43.000Z",
                        "cachedAt": "2025-01-18T06:38:21.605Z",
                        "period": null,
                        "round": {
                            "name": "Proximus League",
                            "display": false
                        },
                        "status": "CANCELLED",
                        "teamA": {
                            "id": "a6tfw86gs2hb39n2onyd3i4nn",
                            "code": "DEI",
                            "short": "داينزي",
                            "long": "داينزي",
                            "full": "داينزي",
                            "name": "داينزي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FGAhNSHlpfCDf3_vxJMNfp.png"
                            }
                        },
                        "teamB": {
                            "id": "30lkpynopz5r9obxg9f6glpqc",
                            "code": "LOM",
                            "short": "لوميل",
                            "long": "لوميل",
                            "full": "لوميل",
                            "name": "لوميل",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FQ8Fjagl7VU8P2chLYvlt9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "6GvDAHX2Brx1MzIG0r6DJ",
                        "startDate": "2025-01-18T19:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-06-11T16:08:43.000Z",
                        "cachedAt": "2025-01-18T07:04:24.169Z",
                        "period": null,
                        "round": {
                            "name": "Proximus League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bPeZbrlNq4gIzVUQ-5cPV",
                            "code": "FRB",
                            "short": "فرانكس بوراينس",
                            "long": "فرانكس بوراينس",
                            "full": "فرانكس بوراينس",
                            "name": "فرانكس بوراينس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F95SU5AAwxCGIrm7DmwjZK.png"
                            }
                        },
                        "teamB": {
                            "id": "B-QUVcw3h0yPay9n6GeDq",
                            "code": "BEV",
                            "short": "واسلاند",
                            "long": "واسلاند",
                            "full": "واسلاند",
                            "name": "واسلاند",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FAlFHc6wAgijXtTanqXigA.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "hsglOuQki2fDwIiS2QhPY",
                        "startDate": "2025-01-18T19:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-06-11T16:08:43.000Z",
                        "cachedAt": "2025-01-18T07:04:24.169Z",
                        "period": null,
                        "round": {
                            "name": "Proximus League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "75b9wl3zixoytzcmvwavlp46i",
                            "code": "RAA",
                            "short": "RAAL La Louviere",
                            "long": "RAAL La Louviere",
                            "full": "RAAL La Louviere",
                            "name": "RAAL La Louviere",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F7DyFYBc0WMqAJT2iwW0QD.png"
                            }
                        },
                        "teamB": {
                            "id": "d011rbp4etj5styzfmpd7wa38",
                            "code": "ANF",
                            "short": "Anderlecht Futures",
                            "long": "Anderlecht Futures",
                            "full": "Anderlecht Futures",
                            "name": "Anderlecht Futures",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FHYe4SIR_4utDgPWHp1dRO.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "3frp1zxrqulrlrnk503n6l4l",
                    "name": "الدوري الإنجليزي الدرجة الثانية",
                    "area": {
                        "name": "England"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2F3frp1zxrqulrlrnk503n6l4l.png"
                    }
                },
                "matches": [
                    {
                        "id": "29BlsDdJV35A1Fvp3nC5z",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": {
                            "name": "لندن رود"
                        },
                        "lastUpdatedAt": "2024-06-26T09:01:30.000Z",
                        "cachedAt": "2025-01-18T07:23:32.520Z",
                        "period": null,
                        "round": {
                            "name": "الدوري 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5jjqm8h6qm1w4s5f93uubhdrj",
                            "code": "PET",
                            "short": "بيتربورو",
                            "long": "بيتربورو",
                            "full": "بيتربورو",
                            "name": "بيتربورو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fc7tv-ResxK6WI3ROxJ_sB.png"
                            }
                        },
                        "teamB": {
                            "id": "2fhm98swvvbztf9cy67juhpas",
                            "code": "LOR",
                            "short": "ليتون أورينت",
                            "long": "ليتون أورينت",
                            "full": "ليتون أورينت",
                            "name": "ليتون أورينت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FRvrZqyAVj5MM0QbMWmAec.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "VvkL0rk1Plasd0pC7Bnfu",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": {
                            "name": "Bloomfield Road"
                        },
                        "lastUpdatedAt": "2024-06-26T09:01:30.000Z",
                        "cachedAt": "2025-01-18T07:52:55.591Z",
                        "period": null,
                        "round": {
                            "name": "الدوري 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "f1ni8k09kpdcwmkasi69rl0bz",
                            "code": "BLA",
                            "short": "بلاكبول",
                            "long": "بلاكبول",
                            "full": "بلاكبول",
                            "name": "بلاكبول",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FVFEeKZN-a7Yn92WiRWfUC.png"
                            }
                        },
                        "teamB": {
                            "id": "5n5baro467i8s8efkra3nhgux",
                            "code": "HUD",
                            "short": "هدرسفيلد تاون",
                            "long": "هدرسفيلد تاون",
                            "full": "هدرسفيلد تاون",
                            "name": "هدرسفيلد تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F27GMyacsLXbKc-ZgIKuW5.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "IK5EET_FgPxmVZzCwLV_s",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": {
                            "name": "سيكسفيلدز ستاديوم"
                        },
                        "lastUpdatedAt": "2024-06-26T09:01:30.000Z",
                        "cachedAt": "2025-01-18T07:07:45.555Z",
                        "period": null,
                        "round": {
                            "name": "الدوري 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "761h1nqgu3ogxgvp8ubb71r00",
                            "code": "NOR",
                            "short": "نورثهامبتون",
                            "long": "نورثهامبتون",
                            "full": "نورثهامبتون",
                            "name": "نورثهامبتون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fwf9WhrGCSFRf7e64m04zX.png"
                            }
                        },
                        "teamB": {
                            "id": "b3vbyitzi3nrw9ehj1eoko219",
                            "code": "LIN",
                            "short": "لينكولن سيتي",
                            "long": "لينكولن سيتي",
                            "full": "لينكولن سيتي",
                            "name": "لينكولن سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F_aZ4zd-yHrcUjJdmxeW8y.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "PAHutceEyQhV9ICC0luT5",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "ماديجسكي ستاديوم"
                        },
                        "lastUpdatedAt": "2024-06-26T09:01:30.000Z",
                        "cachedAt": "2025-01-18T07:38:48.708Z",
                        "period": null,
                        "round": {
                            "name": "الدوري 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "egm6z8hhksfg8f6a49jigczxh",
                            "code": "REA",
                            "short": "ريدينغ",
                            "long": "ريدينغ",
                            "full": "ريدينغ",
                            "name": "ريدينغ",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FSAJrdh3z5mY6H_D4TZrOg.png"
                            }
                        },
                        "teamB": {
                            "id": "5adikbrse2tjc3zthxrx8ic2k",
                            "code": "STO",
                            "short": "ستوكبورت",
                            "long": "ستوكبورت",
                            "full": "ستوكبورت",
                            "name": "ستوكبورت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FAM2vgDFDhClEOu4DJ68V1.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "ucJVWOUF2u82_Z_dYyOQV",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "St Andrew's Trillion Trophy Stadium"
                        },
                        "lastUpdatedAt": "2024-06-26T09:01:30.000Z",
                        "cachedAt": "2025-01-18T06:40:47.443Z",
                        "period": null,
                        "round": {
                            "name": "الدوري 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8kreqtde5jdktcib0kg7dknac",
                            "code": "BIR",
                            "short": "برمنجهام سيتي",
                            "long": "برمنجهام سيتي",
                            "full": "برمنجهام سيتي",
                            "name": "برمنجهام سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fw87I_BEoFYqpdY2S4ePJJ.png"
                            }
                        },
                        "teamB": {
                            "id": "dv9l02o316cd9hbkxaho2u12f",
                            "code": "EXE",
                            "short": "إيكسيتر سيتي",
                            "long": "إيكسيتر سيتي",
                            "full": "إيكسيتر سيتي",
                            "name": "إيكسيتر سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FBjuvbMzFU-rTt8Lj8KChs.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "IScg_VN_QlR-PDYqV8UwA",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Memorial Stadium"
                        },
                        "lastUpdatedAt": "2024-06-26T09:01:30.000Z",
                        "cachedAt": "2025-01-18T06:52:36.412Z",
                        "period": null,
                        "round": {
                            "name": "الدوري 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5pfqedkme2kabtqhkln35pf3l",
                            "code": "BRR",
                            "short": "بريستول روفرز",
                            "long": "بريستول روفرز",
                            "full": "بريستول روفرز",
                            "name": "بريستول روفرز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4gb6c1Svwhqea_WushFkh.png"
                            }
                        },
                        "teamB": {
                            "id": "9db4t34qy4owglhvvgwf5l22i",
                            "code": "BAR",
                            "short": "بارنسلي",
                            "long": "بارنسلي",
                            "full": "بارنسلي",
                            "name": "بارنسلي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FrT7ytASM1IP3_PM9xhLa9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "1mYuwJoPFzdncKVoBwlt7",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "لاميكس ستاديوم"
                        },
                        "lastUpdatedAt": "2024-06-26T09:01:30.000Z",
                        "cachedAt": "2025-01-18T06:38:47.912Z",
                        "period": null,
                        "round": {
                            "name": "الدوري 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "6xhqd6it53k2s5n7veo817ga4",
                            "code": "STE",
                            "short": "ستيفيناج",
                            "long": "ستيفيناج",
                            "full": "ستيفيناج",
                            "name": "ستيفيناج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F3Vdbqf9-Ra0UTTR0qAjrP.png"
                            }
                        },
                        "teamB": {
                            "id": "dmypntcdsl5w8w8pcqs0b8mpj",
                            "code": "WIG",
                            "short": "ويجان",
                            "long": "ويجان",
                            "full": "ويجان",
                            "name": "ويجان",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FaSPfhTR3NONaoRuCI1vBC.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "KmmU3ZxmrBFeo6elylijS",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "نيو يورك ستاديوم"
                        },
                        "lastUpdatedAt": "2024-06-26T09:01:30.000Z",
                        "cachedAt": "2025-01-18T06:38:47.912Z",
                        "period": null,
                        "round": {
                            "name": "الدوري 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "6m5s30n9ej0dqfk1hfyrlkhdw",
                            "code": "ROT",
                            "short": "روثيرهام",
                            "long": "روثيرهام",
                            "full": "روثيرهام",
                            "name": "روثيرهام",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F8k50mJGtSFgCgIixKAgkq.png"
                            }
                        },
                        "teamB": {
                            "id": "2ezfenuwk3y65p8jdbj55xqt0",
                            "code": "CHA",
                            "short": "تشارلتون أثليتك",
                            "long": "تشارلتون أثليتك",
                            "full": "تشارلتون أثليتك",
                            "name": "تشارلتون أثليتك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F2ezfenuwk3y65p8jdbj55xqt0.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "3US4tDWx0LUjrfu21RMyu",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "ماكرون ستاديوم"
                        },
                        "lastUpdatedAt": "2024-06-26T09:01:30.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "الدوري 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "69t8imcdaqlgfbds2p58596my",
                            "code": "BOL",
                            "short": "بولتون واندررز",
                            "long": "بولتون واندررز",
                            "full": "بولتون واندررز",
                            "name": "بولتون واندررز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F6N6EcCoHrYmMl5AW_DsSS.png"
                            }
                        },
                        "teamB": {
                            "id": "dmz37633qbsvl7gncq5s51yjw",
                            "code": "CAM",
                            "short": "كامبريدج يونايتد",
                            "long": "كامبريدج يونايتد",
                            "full": "كامبريدج يونايتد",
                            "name": "كامبريدج يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fs-R6OkJ8fHmRmZslBT1hI.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "NHBd_9h28JPQ6qdnfWzU-",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "برودفيلد ستاديوم"
                        },
                        "lastUpdatedAt": "2024-06-26T09:01:30.000Z",
                        "cachedAt": "2025-01-18T06:39:24.659Z",
                        "period": null,
                        "round": {
                            "name": "الدوري 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "41pv4kcoqzdkswdzqhll8ellb",
                            "code": "CRA",
                            "short": "كراولي تاون",
                            "long": "كراولي تاون",
                            "full": "كراولي تاون",
                            "name": "كراولي تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F0v7Hjmu9Ftk7GYUk5lqG-.png"
                            }
                        },
                        "teamB": {
                            "id": "8mbtyq0has0uu0565fm9t5cdo",
                            "code": "BUR",
                            "short": "بيرتون ألبيون",
                            "long": "بيرتون ألبيون",
                            "full": "بيرتون ألبيون",
                            "name": "بيرتون ألبيون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FTyPQFWfGjj3y8iPOSOSC9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "b1gu8p3vaSYC2RxH-MkXh",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "One Call Stadium"
                        },
                        "lastUpdatedAt": "2024-06-26T09:01:30.000Z",
                        "cachedAt": "2025-01-18T07:14:51.151Z",
                        "period": null,
                        "round": {
                            "name": "الدوري 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4hcdmgl41o4blqpbeelu56h7y",
                            "code": "MAN",
                            "short": "مانسفيلد",
                            "long": "مانسفيلد",
                            "full": "مانسفيلد",
                            "name": "مانسفيلد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FOt1G7D9fHRaIOij-AYp79.png"
                            }
                        },
                        "teamB": {
                            "id": "jv3jh5m5t7qy5t37vwwmnj16",
                            "code": "WYC",
                            "short": "وايكومب",
                            "long": "وايكومب",
                            "full": "وايكومب",
                            "name": "وايكومب",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FLp-CgJyPdIZW0z7vfacd8.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "1zp1du9n4rj36p1ss9zbxtqfb",
                    "name": "الدوري الإيطالي - الدرجة الثالثة",
                    "area": {
                        "name": "Italy"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F25f2cmb2r8mk5rj92tzer6kvv.png"
                    }
                },
                "matches": [
                    {
                        "id": "wKHIW0p6Y4TZJ-WnGAFnx",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T12:50:47.000Z",
                        "cachedAt": "2025-01-18T06:46:48.888Z",
                        "period": null,
                        "round": {
                            "name": "Serie C Grp. A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8000d58fvjawxj34qvx6y8d9j",
                            "code": "GIA",
                            "short": "جيانا إرمينيو",
                            "long": "جيانا إرمينيو",
                            "full": "جيانا إرمينيو",
                            "name": "جيانا إرمينيو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FKp0f7rumJH_GsK9zxz9nK.png"
                            }
                        },
                        "teamB": {
                            "id": "4j7z48xwomb2hx8ojk3h6hr0r",
                            "code": "REN",
                            "short": "رينات",
                            "long": "رينات",
                            "full": "رينات",
                            "name": "رينات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FfsAgstK0h99f6oRU3Zop7.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "3Htv2jiJPRwvcRh3QPeQK",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T12:50:46.000Z",
                        "cachedAt": "2025-01-18T06:52:47.426Z",
                        "period": null,
                        "round": {
                            "name": "Serie C Grp. A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "15npxcpobt3bp5zacdhj6rjc7",
                            "code": "VTV",
                            "short": "Virtus Verona",
                            "long": "Virtus Verona",
                            "full": "Virtus Verona",
                            "name": "Virtus Verona",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FQkakRGJI0zLGdaO4upsvP.png"
                            }
                        },
                        "teamB": {
                            "id": "c3d9f8tdtojws2revrzq0bagg",
                            "code": "FER",
                            "short": "فيرالبيسالو",
                            "long": "فيرالبيسالو",
                            "full": "فيرالبيسالو",
                            "name": "فيرالبيسالو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FDxyJ63tY7yGCYRTaeenCV.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "aaxxcn14R6keeAa6C2OTH",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T12:50:44.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "Serie C Grp. A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7f99ecm9nxrzuph8fc8wpe49g",
                            "code": "ATA",
                            "short": "Atalanta U23",
                            "long": "Atalanta U23",
                            "full": "Atalanta U23",
                            "name": "Atalanta U23",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FPA1DBptAQyu9iejWqHLHv.png"
                            }
                        },
                        "teamB": {
                            "id": "jSjstlrM9SOwMKJMZT_Ru",
                            "code": "TRI",
                            "short": "ترايستينا",
                            "long": "ترايستينا",
                            "full": "ترايستينا",
                            "name": "ترايستينا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FAXSQhOzptBV9wfV2cwF4h.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "w9C0ZYL7fpJ4EVPtVg0Nu",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T12:50:46.000Z",
                        "cachedAt": "2025-01-18T06:46:17.607Z",
                        "period": null,
                        "round": {
                            "name": "Serie C Grp. A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "e31jthlv0f3mvvhude3fb6to6",
                            "code": "PRO",
                            "short": "برو فيرتشيلي",
                            "long": "برو فيرتشيلي",
                            "full": "برو فيرتشيلي",
                            "name": "برو فيرتشيلي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FWkiSN-Eyrr1PKi1IGquaz.png"
                            }
                        },
                        "teamB": {
                            "id": "ae3c1r0p8vm2zg3ew8kt9crca",
                            "code": "CTE",
                            "short": "Caldiero Terme",
                            "long": "Caldiero Terme",
                            "full": "Caldiero Terme",
                            "name": "Caldiero Terme",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fx3vEhMeNkdZaMl-Sj7zPf.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "KHvIfnV6sWAPmab57yhYu",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T12:55:33.000Z",
                        "cachedAt": "2025-01-18T06:33:53.570Z",
                        "period": null,
                        "round": {
                            "name": "Serie C Grp. B",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1vgjxh0up351qa1q54ifmyxa1",
                            "code": "SPA",
                            "short": "سبال",
                            "long": "سبال",
                            "full": "سبال",
                            "name": "سبال",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fzr9VyblYOj5OegG7pEjdJ.png"
                            }
                        },
                        "teamB": {
                            "id": "92zb8nbc1yccfx6rvx0zb4dly",
                            "code": "STL",
                            "short": "Sestri Levante",
                            "long": "Sestri Levante",
                            "full": "Sestri Levante",
                            "name": "Sestri Levante",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FYuBtixz6QQY_MojY9alKS.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "2_CWx_wgvwIxFe3Hwuf2D",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T12:55:34.000Z",
                        "cachedAt": "2025-01-18T06:46:17.607Z",
                        "period": null,
                        "round": {
                            "name": "Serie C Grp. B",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ssvUcWEZ9myu9wL_lIzd1",
                            "code": "LGS",
                            "short": "Legnago Salus",
                            "long": "Legnago Salus",
                            "full": "Legnago Salus",
                            "name": "Legnago Salus",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FtwQ5E3zQ09VKkNkA9DDdL.png"
                            }
                        },
                        "teamB": {
                            "id": "4t5jer3f32ve0pzq3c3e1n80w",
                            "code": "ARE",
                            "short": "أريتزو",
                            "long": "أريتزو",
                            "full": "أريتزو",
                            "name": "أريتزو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F-ZebA8HpcdRV8BFKlaE9t.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "GGJkiA4ZtVkvC4hPtEnQR",
                        "startDate": "2025-01-18T16:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T13:01:40.000Z",
                        "cachedAt": "2025-01-18T06:47:53.438Z",
                        "period": null,
                        "round": {
                            "name": "Serie C Grp. C",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4xb8zhua74roo43ccdt8g67fc",
                            "code": "SOR",
                            "short": "سورينتو",
                            "long": "سورينتو",
                            "full": "سورينتو",
                            "name": "سورينتو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F7zQuIeapxnEJDU2LXxpUs.png"
                            }
                        },
                        "teamB": {
                            "id": "76dsxvtz0wjgh18pqwx83bok5",
                            "code": "POT",
                            "short": "بوتينزا",
                            "long": "بوتينزا",
                            "full": "بوتينزا",
                            "name": "بوتينزا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F76dsxvtz0wjgh18pqwx83bok5.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "hPlsXHSAv7CRLhsEsXDoM",
                        "startDate": "2025-01-18T16:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T13:01:40.000Z",
                        "cachedAt": "2025-01-18T07:14:20.124Z",
                        "period": null,
                        "round": {
                            "name": "Serie C Grp. C",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4cq1gkb2yelnvz4z7jdo6q81",
                            "code": "BEN",
                            "short": "بيفينتو",
                            "long": "بيفينتو",
                            "full": "بيفينتو",
                            "name": "بيفينتو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FCYIy-rmc1yLNl-WRXGRJw.png"
                            }
                        },
                        "teamB": {
                            "id": "n1YkvKNE6utr9TUS-G41U",
                            "code": "ALT",
                            "short": "Team Altamura",
                            "long": "Team Altamura",
                            "full": "Team Altamura",
                            "name": "Team Altamura",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FZFKzIOFFUqIAE2mYvcNTJ.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "h4sNt4D34kzFWQ4CYOYc0",
                        "startDate": "2025-01-18T16:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T13:01:44.000Z",
                        "cachedAt": "2025-01-18T06:49:58.803Z",
                        "period": null,
                        "round": {
                            "name": "Serie C Grp. C",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ax9p8f1fm857nmwjg7357z395",
                            "code": "AVE",
                            "short": "أفيلينو",
                            "long": "أفيلينو",
                            "full": "أفيلينو",
                            "name": "أفيلينو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Ffe9GCcLASD1GjcD6uEIXR.png"
                            }
                        },
                        "teamB": {
                            "id": "ScrkbiyKFe1LimCLsV_33",
                            "code": "CAV",
                            "short": "كافيس",
                            "long": "كافيس",
                            "full": "كافيس",
                            "name": "كافيس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F8VS46gjJumvolnSXpsU_m.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "e9QwYyYl5VFKSY_Fbx91M",
                        "startDate": "2025-01-18T16:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T12:55:33.000Z",
                        "cachedAt": "2025-01-18T06:49:58.803Z",
                        "period": null,
                        "round": {
                            "name": "Serie C Grp. B",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "92wuohg21k9uckhku9tnku9y9",
                            "code": "RIM",
                            "short": "ريميني",
                            "long": "ريميني",
                            "full": "ريميني",
                            "name": "ريميني",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FIqxTpCzcK8WaTpNFWyPNA.png"
                            }
                        },
                        "teamB": {
                            "id": "XUq7XxqwU5jaBc9TExKX0",
                            "code": "LUC",
                            "short": "لوكيسي",
                            "long": "لوكيسي",
                            "full": "لوكيسي",
                            "name": "لوكيسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FehMLg_H3PbDDmxCCXIKa9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "QxFohlkdDp6e4ZYbDR9vy",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T13:01:40.000Z",
                        "cachedAt": "2025-01-18T06:39:54.592Z",
                        "period": null,
                        "round": {
                            "name": "Serie C Grp. C",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "SiK1mVNApejoPh0uee-mu",
                            "code": "TRA",
                            "short": "تراباني",
                            "long": "تراباني",
                            "full": "تراباني",
                            "name": "تراباني",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FRwiN6bM3H-_P6bgpi4X9k.png"
                            }
                        },
                        "teamB": {
                            "id": "8zna79nc8jxgw2cunm7ikqta6",
                            "code": "TAR",
                            "short": "تارانتو",
                            "long": "تارانتو",
                            "full": "تارانتو",
                            "name": "تارانتو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FytnvYWLyLVvNbNsu3Pu3P.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "1qd0wvt30rlswa4g6nu4na660",
                    "name": "الدوري الفرنسي الوطني",
                    "area": {
                        "name": "France"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F7gww28djs405rfga69smki84o.png"
                    }
                },
                "matches": [
                    {
                        "id": "_pfyEEeNP1G8jWKZJg0QT",
                        "startDate": "2025-01-18T18:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-18T19:59:29.000Z",
                        "cachedAt": "2025-01-18T07:07:59.957Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الفرنسي الوطني",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7gytr31zcn0gcewa7pu1ed5hz",
                            "code": "AUB",
                            "short": "أوبانيي",
                            "long": "أوبانيي",
                            "full": "أوبانيي",
                            "name": "أوبانيي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbAL137xeFQpPD7eoFielv.png"
                            }
                        },
                        "teamB": {
                            "id": "ackp3k0zn4tukl6ejvn3ajnjz",
                            "code": "NOL",
                            "short": "نيميس",
                            "long": "نيميس",
                            "full": "نيميس",
                            "name": "نيميس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fzconc-Urb_m4TxE8luN4a.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "d73xCo9UEt8YNwt7rOdaI",
                        "startDate": "2025-01-18T18:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-18T19:59:29.000Z",
                        "cachedAt": "2025-01-18T06:49:13.564Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الفرنسي الوطني",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bj8hrmj01r3zit0x8r6qm2eu2",
                            "code": "LEM",
                            "short": "لو مان",
                            "long": "لو مان",
                            "full": "لو مان",
                            "name": "لو مان",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FagD4uSQY21zOnrAdz_3eE.png"
                            }
                        },
                        "teamB": {
                            "id": "FeXnWwJx6R0rCe3WVpjOM",
                            "code": "CON",
                            "short": "كونكارنيو",
                            "long": "كونكارنيو",
                            "full": "كونكارنيو",
                            "name": "كونكارنيو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FuXvffrb0_r9JApvJUXjPf.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "lKEreTE7EdE1-9d4AhNGh",
                        "startDate": "2025-01-18T18:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-18T19:59:29.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الفرنسي الوطني",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "69b9aoly33h1gpicvxtfteoug",
                            "code": "NAN",
                            "short": "نانسي",
                            "long": "نانسي",
                            "full": "نانسي",
                            "name": "نانسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F5eAq_8ExVJMQRNI6Tq9Bb.png"
                            }
                        },
                        "teamB": {
                            "id": "g8cvbv4wrvq7uf4347yjkd35",
                            "code": "VAL",
                            "short": "فالينسيان",
                            "long": "فالينسيان",
                            "full": "فالينسيان",
                            "name": "فالينسيان",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FySP_cI9854yCZxjoT2gzp.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "XatTiIba9Nogdz66_L2ju",
                        "startDate": "2025-01-18T18:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-18T19:59:29.000Z",
                        "cachedAt": "2025-01-18T06:42:45.595Z",
                        "period": null,
                        "round": {
                            "name": "الدوري الفرنسي الوطني",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "-Ud2utJGgpwXB-KKLWzmN",
                            "code": "B-P",
                            "short": "بورج بيروناس",
                            "long": "بورج بيروناس",
                            "full": "بورج بيروناس",
                            "name": "بورج بيروناس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FTMlfwVIg8KrXmimKFTI_6.png"
                            }
                        },
                        "teamB": {
                            "id": "d9kwaceoj54pfprd6oc2hwae6",
                            "code": "SOC",
                            "short": "سوشو",
                            "long": "سوشو",
                            "full": "سوشو",
                            "name": "سوشو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FjR1iUIRN4_btXrQlxIj8s.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "bgen5kjer2ytfp7lo9949t72g",
                    "name": "الدوري الإنجليزي الدرجة الثالثة",
                    "area": {
                        "name": "England"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2Fbgen5kjer2ytfp7lo9949t72g.png"
                    }
                },
                "matches": [
                    {
                        "id": "VO6BCFHUvuXrZ79aQ0Iwy",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": {
                            "name": "كيه آر بي إس بريستفيلد"
                        },
                        "lastUpdatedAt": "2024-06-26T09:33:22.000Z",
                        "cachedAt": "2025-01-18T06:52:58.445Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2597fv0oiboak9jyryf3gt39g",
                            "code": "GIL",
                            "short": "جيلينجهام",
                            "long": "جيلينجهام",
                            "full": "جيلينجهام",
                            "name": "جيلينجهام",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FjtpWYuNjgKyGwOgLVO1el.png"
                            }
                        },
                        "teamB": {
                            "id": "6dryhu9wer42nt1dxoophpk96",
                            "code": "DON",
                            "short": "دونكاستر",
                            "long": "دونكاستر",
                            "full": "دونكاستر",
                            "name": "دونكاستر",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FKvbZiOWUOuGKbDtAzJ20H.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "PHkWFDE68WDCJhbJpKOMM",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": {
                            "name": "برنتون بارك"
                        },
                        "lastUpdatedAt": "2024-06-26T09:33:22.000Z",
                        "cachedAt": "2025-01-18T06:56:40.465Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4wqa3vdd3owvzbdpmh91uvvhp",
                            "code": "CAR",
                            "short": "كارلايل",
                            "long": "كارلايل",
                            "full": "كارلايل",
                            "name": "كارلايل",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FrylqTzdst6miDzsfOMkp9.png"
                            }
                        },
                        "teamB": {
                            "id": "2b5k2yusdx2ctd5cdv739p3il",
                            "code": "BRA",
                            "short": "برادفورد",
                            "long": "برادفورد",
                            "full": "برادفورد",
                            "name": "برادفورد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fimtze9OQsbptCSnxcopIq.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "rlRo0ZxlA_DhF-vaeIeYx",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "بلاندل بارك"
                        },
                        "lastUpdatedAt": "2024-06-26T09:33:21.000Z",
                        "cachedAt": "2025-01-18T06:51:03.307Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "6ipyteigr21t78l6fro3ig10j",
                            "code": "GRI",
                            "short": "جريمسبي",
                            "long": "جريمسبي",
                            "full": "جريمسبي",
                            "name": "جريمسبي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fgbf0HLFMKGn3dsLXXc3pR.png"
                            }
                        },
                        "teamB": {
                            "id": "2zyk4fq2f0kh5p366q9y62vny",
                            "code": "CHE",
                            "short": "تشيسترفيلد",
                            "long": "تشيسترفيلد",
                            "full": "تشيسترفيلد",
                            "name": "تشيسترفيلد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FSIQfy2ryQc8ZHLPv79QVX.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "4h0kQ2GHQuu_PGmG6apn9",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Wham Stadium"
                        },
                        "lastUpdatedAt": "2024-06-26T09:33:22.000Z",
                        "cachedAt": "2025-01-18T07:20:15.805Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5qwskbjpa17fvmtuu5qijy7cz",
                            "code": "ACC",
                            "short": "آكرينجتون",
                            "long": "آكرينجتون",
                            "full": "آكرينجتون",
                            "name": "آكرينجتون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFq7Hk0gok4gfYUo0rgX-8.png"
                            }
                        },
                        "teamB": {
                            "id": "d3mskb8nk3afyi3tn0gt8kwh8",
                            "code": "NOC",
                            "short": "نوتنجهام كاونتي",
                            "long": "نوتنجهام كاونتي",
                            "full": "نوتنجهام كاونتي",
                            "name": "نوتنجهام كاونتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F76w1o8nx12Mf_LasHPDur.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "zFeQOFUKEdipzWg4Fu3pC",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Hayes Lane"
                        },
                        "lastUpdatedAt": "2024-06-26T09:33:22.000Z",
                        "cachedAt": "2025-01-18T06:43:54.230Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "b6fvcpudsv2xhd8jd9ste749x",
                            "code": "BRO",
                            "short": "بروملي",
                            "long": "بروملي",
                            "full": "بروملي",
                            "name": "بروملي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F13P_pgHpqaadpe5ZvJehh.png"
                            }
                        },
                        "teamB": {
                            "id": "crpd0wug26fg7skfzmf11x1k2",
                            "code": "COL",
                            "short": "كولشيستر",
                            "long": "كولشيستر",
                            "full": "كولشيستر",
                            "name": "كولشيستر",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FCgW6ZIUe031WP95S7TpfD.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "8ZOWUWrqo6_LA_GG3zJxE",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "غلوب أرينا"
                        },
                        "lastUpdatedAt": "2024-06-26T09:33:37.000Z",
                        "cachedAt": "2025-01-18T06:38:47.912Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8xeuwzxnm7hdlbjjuezgfkz3w",
                            "code": "MOR",
                            "short": "موركامب",
                            "long": "موركامب",
                            "full": "موركامب",
                            "name": "موركامب",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FsE_FO2-phxT-4sZF5Wn7x.png"
                            }
                        },
                        "teamB": {
                            "id": "9ze1c55gavzeg6vw37ca1banb",
                            "code": "CRE",
                            "short": "كرو",
                            "long": "كرو",
                            "full": "كرو",
                            "name": "كرو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F1IuxFYVk8L9nZAiA2gzaT.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "rXKmpe_ehbS40VcHq4-9S",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Peninsula Stadium"
                        },
                        "lastUpdatedAt": "2024-06-26T09:33:39.000Z",
                        "cachedAt": "2025-01-18T07:51:06.715Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2dakjegmrc2cxx2hqq5wzegt",
                            "code": "SAL",
                            "short": "سالفورد سيتي",
                            "long": "سالفورد سيتي",
                            "full": "سالفورد سيتي",
                            "name": "سالفورد سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F-V6K392oVMkhySR2cVQxt.png"
                            }
                        },
                        "teamB": {
                            "id": "8rfydplrc9ki0sirqi0drcybk",
                            "code": "FLE",
                            "short": "فليتوود",
                            "long": "فليتوود",
                            "full": "فليتوود",
                            "name": "فليتوود",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F72MD9Rp6-xFxbeFCnAVVi.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "quOjXc2s3qLBkzAeFSs3c",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "County Ground"
                        },
                        "lastUpdatedAt": "2024-06-26T09:33:39.000Z",
                        "cachedAt": "2025-01-18T06:38:47.912Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9ws3x82yqn7svjq6onvtunpst",
                            "code": "SWI",
                            "short": "سويندون",
                            "long": "سويندون",
                            "full": "سويندون",
                            "name": "سويندون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F461oC3g91LxEhqC62F61n.png"
                            }
                        },
                        "teamB": {
                            "id": "2h0f9b45mwop10akb6bp7qx3",
                            "code": "BAR",
                            "short": "بارو",
                            "long": "بارو",
                            "full": "بارو",
                            "name": "بارو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FhEr_0KUsebGM3vRORres5.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "x1Qer0Rnv5ngiJxDovZJR",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "فاله بارك"
                        },
                        "lastUpdatedAt": "2024-06-26T09:34:05.000Z",
                        "cachedAt": "2025-01-18T06:38:47.912Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ejm092fnt9zoxbpuklzd52ji8",
                            "code": "PVA",
                            "short": "بورت فايل",
                            "long": "بورت فايل",
                            "full": "بورت فايل",
                            "name": "بورت فايل",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FtDyvFwK8pbzUJdGtfebiY.png"
                            }
                        },
                        "teamB": {
                            "id": "bewbbriuwh3i7a2zn19e6d0v4",
                            "code": "NEW",
                            "short": "نيوبورت",
                            "long": "نيوبورت",
                            "full": "نيوبورت",
                            "name": "نيوبورت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FOKt4DFAXM-S3YqmSBjuP8.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "39LFUmhHd5egs89RJMjMM",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Cherry Red Records Stadium"
                        },
                        "lastUpdatedAt": "2024-06-26T09:33:22.000Z",
                        "cachedAt": "2025-01-18T06:46:22.741Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7sck2yj98lv9ogljofza0c7f9",
                            "code": "AFC",
                            "short": "أي إف سي ويمبلدون",
                            "long": "أي إف سي ويمبلدون",
                            "full": "أي إف سي ويمبلدون",
                            "name": "أي إف سي ويمبلدون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fxs5iQCN8xXFzJ3sZwvACr.png"
                            }
                        },
                        "teamB": {
                            "id": "9j48z9ohucqbzpneoghrgwevs",
                            "code": "TRA",
                            "short": "ترانمير",
                            "long": "ترانمير",
                            "full": "ترانمير",
                            "name": "ترانمير",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FrZ93jC7QgbR7m_yyZSLZP.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "LRR25SA6DubREjGsOk-YV",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "بيسكوت ستاديوم"
                        },
                        "lastUpdatedAt": "2024-06-26T09:33:39.000Z",
                        "cachedAt": "2025-01-18T06:38:47.912Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1tev1lioyfaxbk2uod5uekzyj",
                            "code": "WAL",
                            "short": "والسال",
                            "long": "والسال",
                            "full": "والسال",
                            "name": "والسال",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FWa0Kit8b5o0Tkcpk4dzsz.png"
                            }
                        },
                        "teamB": {
                            "id": "8w89tsles26jm12aoelwvlttt",
                            "code": "MKD",
                            "short": "ميلتون كيانيس دونس",
                            "long": "ميلتون كيانيس دونس",
                            "full": "ميلتون كيانيس دونس",
                            "name": "ميلتون كيانيس دونس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FKS8KvZ9fsU9oLx9W6qOOY.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "6sxm2iln2w45ux498pty9miw8",
                    "name": "اسكتلندا 3",
                    "area": {
                        "name": "Scotland"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1xf68d0a8lnnq30hnnn8kr6ut.png"
                    }
                },
                "matches": [
                    {
                        "id": "mopeGo5scZWEyhwGyaCuC",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Galabank Stadium"
                        },
                        "lastUpdatedAt": "2025-01-11T08:19:36.000Z",
                        "cachedAt": "2025-01-18T06:46:22.741Z",
                        "period": null,
                        "round": {
                            "name": "League One",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1bnaw6ppy8k5kjkg7auh6robp",
                            "code": "ANA",
                            "short": "آنان أثلتيك",
                            "long": "آنان أثلتيك",
                            "full": "آنان أثلتيك",
                            "name": "آنان أثلتيك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FtbqceM9dYJ5cUzZB1s6t7.png"
                            }
                        },
                        "teamB": {
                            "id": "bqka8j85xqagebm9e11du7cea",
                            "code": "INV",
                            "short": "إنفرنيس",
                            "long": "إنفرنيس",
                            "full": "إنفرنيس",
                            "name": "إنفرنيس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Ft1Ewzfsc-vvlv5vZsLGsB.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "6321dlqv4ziuwqte4xpohijtw",
                    "name": "اسكتلندا 4",
                    "area": {
                        "name": "Scotland"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1xf68d0a8lnnq30hnnn8kr6ut.png"
                    }
                },
                "matches": [
                    {
                        "id": "khYZRdgCg6Pa9v8fePuSq",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Stair Park"
                        },
                        "lastUpdatedAt": "2024-06-27T08:45:45.000Z",
                        "cachedAt": "2025-01-18T06:41:09.343Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "921y13v1bnwzy0zn92cy5imze",
                            "code": "STR",
                            "short": "سترانراير",
                            "long": "سترانراير",
                            "full": "سترانراير",
                            "name": "سترانراير",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FSQZ7HrkYK4_IdVf_uQDof.png"
                            }
                        },
                        "teamB": {
                            "id": "938sysqwv3m693ujxa9olngtj",
                            "code": "EF",
                            "short": "إيست فايف",
                            "long": "إيست فايف",
                            "full": "إيست فايف",
                            "name": "إيست فايف",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4COJGvnJdaRExcu0rIEEB.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "oG9C77gjks964ELSERPgo",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Balmoor Stadium"
                        },
                        "lastUpdatedAt": "2024-06-27T08:45:47.000Z",
                        "cachedAt": "2025-01-18T06:41:09.343Z",
                        "period": null,
                        "round": {
                            "name": "League Two",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "cetdd6dn1sork72x4l2enu5kv",
                            "code": "PET",
                            "short": "بيترهيد",
                            "long": "بيترهيد",
                            "full": "بيترهيد",
                            "name": "بيترهيد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F5pMkhjbkadbqt67vHgN1x.png"
                            }
                        },
                        "teamB": {
                            "id": "45cz8w16lciplknu92949nk1v",
                            "code": "STI",
                            "short": "ستيرلينج أي",
                            "long": "ستيرلينج أي",
                            "full": "ستيرلينج أي",
                            "name": "ستيرلينج أي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Ff23bPtOAKE-b8EC4g7Zbu.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "b5udgm9vakjqz8dcmy5b2g0xt",
                    "name": "إنجلترا 5",
                    "area": {
                        "name": "England"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1fk5l4hkqk12i7zske6mcqju6.png"
                    }
                },
                "matches": [
                    {
                        "id": "yakkQ_uMZSbXTsqx0XCCX",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "LNER Community Stadium"
                        },
                        "lastUpdatedAt": "2024-07-10T12:56:36.000Z",
                        "cachedAt": "2025-01-18T07:18:44.959Z",
                        "period": null,
                        "round": {
                            "name": "National League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9y62b5mmv41w75z8jiynbml",
                            "code": "YOR",
                            "short": "يورك",
                            "long": "يورك",
                            "full": "يورك",
                            "name": "يورك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FN2z6qgoXxHO9rDJ3WTQbU.png"
                            }
                        },
                        "teamB": {
                            "id": "868eewpas8ksqiyprnczkpran",
                            "code": "SUU",
                            "short": "ساتون يونايتد",
                            "long": "ساتون يونايتد",
                            "full": "ساتون يونايتد",
                            "name": "ساتون يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F39O_leUgtI_J888E9Dy5G.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "ni9pZGlhCBM6i6aLsiwOO",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Laithwaite Community Stadium"
                        },
                        "lastUpdatedAt": "2024-07-10T12:56:39.000Z",
                        "cachedAt": "2025-01-18T06:42:21.282Z",
                        "period": null,
                        "round": {
                            "name": "National League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "71i5rkzu23j59fwfvjhsfync6",
                            "code": "WOK",
                            "short": "ووكينج",
                            "long": "ووكينج",
                            "full": "ووكينج",
                            "name": "ووكينج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fbn3Pxo3GITypsmoHLrcqI.png"
                            }
                        },
                        "teamB": {
                            "id": "bepuizeqy75fn7sb4szlm6iqg",
                            "code": "EFU",
                            "short": "إيبلسفليت يونايتد",
                            "long": "إيبلسفليت يونايتد",
                            "full": "إيبلسفليت يونايتد",
                            "name": "إيبلسفليت يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FtXv-Cawtp80hTeluyfbGZ.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "bvw-1WktBpHlVTRyyaafY",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "كريسينغ رود ستاديوم"
                        },
                        "lastUpdatedAt": "2024-07-10T12:56:25.000Z",
                        "cachedAt": "2025-01-18T06:42:28.268Z",
                        "period": null,
                        "round": {
                            "name": "National League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2rexv4xmujpmklht5jyi4ausw",
                            "code": "BRT",
                            "short": "براينتري تاون",
                            "long": "براينتري تاون",
                            "full": "براينتري تاون",
                            "name": "براينتري تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FuFgGOAJm08585NK128C5n.png"
                            }
                        },
                        "teamB": {
                            "id": "5q0kr3yij9disyysmkiik5xpd",
                            "code": "SOL",
                            "short": "سوليهال موورز",
                            "long": "سوليهال موورز",
                            "full": "سوليهال موورز",
                            "name": "سوليهال موورز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FVJgXQlIBk0L4AzhkbmAkP.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "7SAG3t2Gw0zVv9wc3Iriy",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Grosvenor Vale"
                        },
                        "lastUpdatedAt": "2024-07-10T12:56:25.000Z",
                        "cachedAt": "2025-01-18T06:41:09.343Z",
                        "period": null,
                        "round": {
                            "name": "National League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "28ag11cirrg9618n8heei0rpn",
                            "code": "WSN",
                            "short": "ويلدستون",
                            "long": "ويلدستون",
                            "full": "ويلدستون",
                            "name": "ويلدستون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FjTWpU1cBrbpqS3ufEAibC.png"
                            }
                        },
                        "teamB": {
                            "id": "47loqs7917u2rbhl1cqdupbre",
                            "code": "HAR",
                            "short": "هارتلبول",
                            "long": "هارتلبول",
                            "full": "هارتلبول",
                            "name": "هارتلبول",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FiTnPF0YXiPxwZMknHJR1R.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "z2uSK0O9v4wm1HFeS835W",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "روتس هول"
                        },
                        "lastUpdatedAt": "2024-07-10T12:56:25.000Z",
                        "cachedAt": "2025-01-18T06:42:28.268Z",
                        "period": null,
                        "round": {
                            "name": "National League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3gzm3yebdvvub99yk0zh3b5s1",
                            "code": "SOU",
                            "short": "ساوثيند",
                            "long": "ساوثيند",
                            "full": "ساوثيند",
                            "name": "ساوثيند",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FI2BMy22iuZE_1-jARod9v.png"
                            }
                        },
                        "teamB": {
                            "id": "azw1s2jssnjcsj170y9j0feqp",
                            "code": "BAR",
                            "short": "بارنيت",
                            "long": "بارنيت",
                            "full": "بارنيت",
                            "name": "بارنيت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FqvSC4fCW2af_WqgOnKd_w.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "DtO06rVqUCpqUfc5ALVtZ",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "باونداري بارك"
                        },
                        "lastUpdatedAt": "2024-07-10T12:56:25.000Z",
                        "cachedAt": "2025-01-18T07:38:39.609Z",
                        "period": null,
                        "round": {
                            "name": "National League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5oj03g835apcc9g551do5vm5e",
                            "code": "OLD",
                            "short": "أولدهام",
                            "long": "أولدهام",
                            "full": "أولدهام",
                            "name": "أولدهام",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F6t1ZL8AUZ4DBM5oqwJX6o.png"
                            }
                        },
                        "teamB": {
                            "id": "92koxzuu7couremakig9zf8c8",
                            "code": "ALD",
                            "short": "ألديرشوت",
                            "long": "ألديرشوت",
                            "full": "ألديرشوت",
                            "name": "ألديرشوت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fl8gftkPaeMO6yg_uZWUvf.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "IqTQ3oWhTcTbgiPiNtCAy",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Lamb Ground"
                        },
                        "lastUpdatedAt": "2024-07-10T12:56:25.000Z",
                        "cachedAt": "2025-01-18T07:20:15.805Z",
                        "period": null,
                        "round": {
                            "name": "National League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bhkipv4d6qb37yrg1g42v9mhs",
                            "code": "TAM",
                            "short": "تامورث",
                            "long": "تامورث",
                            "full": "تامورث",
                            "name": "تامورث",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FxGsf60LUqmX2SOwhmeg1u.png"
                            }
                        },
                        "teamB": {
                            "id": "bfepnu1b53yd9659qx8n05le",
                            "code": "BOS",
                            "short": "بوسطن يونايتد",
                            "long": "بوسطن يونايتد",
                            "full": "بوسطن يونايتد",
                            "name": "بوسطن يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FfibDuZQcl6tTE2R7_z6YG.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "-WVNK8zLgFRNICTMRBNwK",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "نيو لون ستاديوم"
                        },
                        "lastUpdatedAt": "2024-07-10T12:56:25.000Z",
                        "cachedAt": "2025-01-18T07:19:29.792Z",
                        "period": null,
                        "round": {
                            "name": "National League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "17zuelixesst1z59fwcix2dil",
                            "code": "FOG",
                            "short": "فوريست جرين",
                            "long": "فوريست جرين",
                            "full": "فوريست جرين",
                            "name": "فوريست جرين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FMsjjFkcHhVsIP__fIVD5M.png"
                            }
                        },
                        "teamB": {
                            "id": "dqitrs0w52z0p9f4t07z0aqzw",
                            "code": "ROC",
                            "short": "روكدايل",
                            "long": "روكدايل",
                            "full": "روكدايل",
                            "name": "روكدايل",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FU4bws1xSbJOj-PQY6_97v.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "iPpn3XZ_W52LNmggFF7rf",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "ذي شاي ستاديوم"
                        },
                        "lastUpdatedAt": "2025-01-18T02:00:08.000Z",
                        "cachedAt": "2025-01-18T07:00:01.970Z",
                        "period": null,
                        "round": {
                            "name": "National League",
                            "display": false
                        },
                        "status": "POSTPONED",
                        "teamA": {
                            "id": "qj4qe0qfco3vunuyfspv0n0m",
                            "code": "HAL",
                            "short": "هاليفاكس",
                            "long": "هاليفاكس",
                            "full": "هاليفاكس",
                            "name": "هاليفاكس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FURxDHWreoZYwzZkigkHjQ.png"
                            }
                        },
                        "teamB": {
                            "id": "ce3g99hhljq78zcbpb0vatiyk",
                            "code": "DAR",
                            "short": "داج أند ريد",
                            "long": "داج أند ريد",
                            "full": "داج أند ريد",
                            "name": "داج أند ريد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FBEqxQf-QnAcsjbRdRyLML.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "laniI_sC5mngifWtdh1XR",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "سيلفرليك ستاديوم"
                        },
                        "lastUpdatedAt": "2024-07-10T12:56:25.000Z",
                        "cachedAt": "2025-01-18T06:42:28.268Z",
                        "period": null,
                        "round": {
                            "name": "National League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1ebletdp8yd8e3gnyfm9o32od",
                            "code": "EAL",
                            "short": "إيستلي",
                            "long": "إيستلي",
                            "full": "إيستلي",
                            "name": "إيستلي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FKYdHqEyCBARI2HhAKePHM.png"
                            }
                        },
                        "teamB": {
                            "id": "4wn1tjzrlczs2gerer3tn0259",
                            "code": "ALT",
                            "short": "ألترينشام",
                            "long": "ألترينشام",
                            "full": "ألترينشام",
                            "name": "ألترينشام",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F78yqhaZjZfF-l1paa44q5.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "qzx6l5DcdfTsRZCDwhIq2",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": {
                            "name": "York Road"
                        },
                        "lastUpdatedAt": "2024-07-10T12:56:25.000Z",
                        "cachedAt": "2025-01-18T06:50:55.687Z",
                        "period": null,
                        "round": {
                            "name": "National League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "50cr3q129r1v8lv1f12en1on6",
                            "code": "MAI",
                            "short": "مايدينهيد يو",
                            "long": "مايدينهيد يو",
                            "full": "مايدينهيد يو",
                            "name": "مايدينهيد يو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FEbOYd1mws3_rWrY1LXm97.png"
                            }
                        },
                        "teamB": {
                            "id": "8nlpbzhdnevw0a9ul7x42039y",
                            "code": "AFC",
                            "short": "فلايد",
                            "long": "فلايد",
                            "full": "فلايد",
                            "name": "فلايد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FaaQUeJ08FekGcbboK11o7.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "bockl24qpr7ryjl8b6obukga",
                    "name": "إنجلترا 6",
                    "area": {
                        "name": "England"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1fk5l4hkqk12i7zske6mcqju6.png"
                    }
                },
                "matches": [
                    {
                        "id": "LNGTD-QRjl8DuiffNmo8j",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Woodside Road"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:49:13.564Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "42spofer987kfaya5xg5n9637",
                            "code": "WOR",
                            "short": "وارتيينغ",
                            "long": "وارتيينغ",
                            "full": "وارتيينغ",
                            "name": "وارتيينغ",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FqBs_AR6-rxFz8GeCMDD21.png"
                            }
                        },
                        "teamB": {
                            "id": "afoucr1n0qalryzqnj4f3l0m1",
                            "code": "WEY",
                            "short": "وايماوث",
                            "long": "وايماوث",
                            "full": "وايماوث",
                            "name": "وايماوث",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FoxvbYLcoxFkHHwkNFz5LQ.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Ytsu44465BPzeRWFJUQpx",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Clarence Park"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:49:13.564Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "69byf7hcgs4bzio76vhkgohi6",
                            "code": "ALB",
                            "short": "سانت ألبانس",
                            "long": "سانت ألبانس",
                            "full": "سانت ألبانس",
                            "name": "سانت ألبانس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fxv-8Hz77jYrGCP5m9bOh5.png"
                            }
                        },
                        "teamB": {
                            "id": "dqygd0fnj5oh5h9z537vgxmqe",
                            "code": "TOR",
                            "short": "توركواي",
                            "long": "توركواي",
                            "full": "توركواي",
                            "name": "توركواي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJDA_ikJA9FNZ1J0SCSGSa.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "emx6EExLHEt-q8fIQxvg3",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "New Windmill Ground"
                        },
                        "lastUpdatedAt": "2024-07-10T13:34:59.000Z",
                        "cachedAt": "2025-01-18T06:45:40.754Z",
                        "period": null,
                        "round": {
                            "name": "National League North",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5n49k80k3pspri7prbd0hvbvf",
                            "code": "LEA",
                            "short": "ليمينجتون",
                            "long": "ليمينجتون",
                            "full": "ليمينجتون",
                            "name": "ليمينجتون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FG5u1DYmivoqu5-TQ24Tyr.png"
                            }
                        },
                        "teamB": {
                            "id": "chv0qbbrz7m7rjwlti6hiqdij",
                            "code": "DAR",
                            "short": "دارلينجتون",
                            "long": "دارلينجتون",
                            "full": "دارلينجتون",
                            "name": "دارلينجتون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FV8VKNOL51qRQMwJeXNBSU.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "FrvMCYkvUP5IJ6s0sai_f",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Aggborough"
                        },
                        "lastUpdatedAt": "2024-07-10T13:34:58.000Z",
                        "cachedAt": "2025-01-18T06:45:40.754Z",
                        "period": null,
                        "round": {
                            "name": "National League North",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bjstn1k84kjv9m2a6563f9ezt",
                            "code": "KID",
                            "short": "كيديرمينستر",
                            "long": "كيديرمينستر",
                            "full": "كيديرمينستر",
                            "name": "كيديرمينستر",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FyW-HxWCoJRDZ3kjvW-79_.png"
                            }
                        },
                        "teamB": {
                            "id": "eknhqyecbprggeyv4zytlt4v8",
                            "code": "WAT",
                            "short": "وارينغتون تاون",
                            "long": "وارينغتون تاون",
                            "full": "وارينغتون تاون",
                            "name": "وارينغتون تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNOArEj0PjEw827ZEeVJby.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "JfSl977gWRFIeihH2LmTu",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-10T13:34:58.000Z",
                        "cachedAt": "2025-01-18T06:42:28.384Z",
                        "period": null,
                        "round": {
                            "name": "National League North",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9dac038brrzshxx80gynrr48v",
                            "code": "HER",
                            "short": "Hereford",
                            "long": "Hereford",
                            "full": "Hereford",
                            "name": "Hereford",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FWmUZCjuPccVVmwOLwQs3h.png"
                            }
                        },
                        "teamB": {
                            "id": "9196qg7a4blzkrltmyfe1l98l",
                            "code": "SOU",
                            "short": "ساوثبورت",
                            "long": "ساوثبورت",
                            "full": "ساوثبورت",
                            "name": "ساوثبورت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbYHAluMgujjUKK0hy8GGE.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "RLhdPHzY-l4BQlywiy12X",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The 1885 Arena"
                        },
                        "lastUpdatedAt": "2024-07-10T13:34:58.000Z",
                        "cachedAt": "2025-01-18T07:21:00.106Z",
                        "period": null,
                        "round": {
                            "name": "National League North",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "akof066d0gufiiwygbb4dih29",
                            "code": "CHE",
                            "short": "تشستر",
                            "long": "تشستر",
                            "full": "تشستر",
                            "name": "تشستر",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FLukU1EwppILqsNMMOgbqR.png"
                            }
                        },
                        "teamB": {
                            "id": "b5gbe26x0zrnlu8lshpjwss8u",
                            "code": "ALF",
                            "short": "ألفريتون",
                            "long": "ألفريتون",
                            "full": "ألفريتون",
                            "name": "ألفريتون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4ogHBM3onfDB8pljuCy_L.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "PF4PJhU963wzxsQJ-bGlz",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Bloomfields"
                        },
                        "lastUpdatedAt": "2024-07-10T13:34:58.000Z",
                        "cachedAt": "2025-01-18T06:45:40.754Z",
                        "period": null,
                        "round": {
                            "name": "National League North",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bdk60pcxh4g5hlr8vg7p0tvyu",
                            "code": "NEM",
                            "short": "ميدهام ماركت",
                            "long": "ميدهام ماركت",
                            "full": "ميدهام ماركت",
                            "name": "ميدهام ماركت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FYmTWSgSrjxxKO9E-FJuIL.png"
                            }
                        },
                        "teamB": {
                            "id": "7kti8xufzgpomf98040szjwig",
                            "code": "RCB",
                            "short": "رادكليف بوروف",
                            "long": "رادكليف بوروف",
                            "full": "رادكليف بوروف",
                            "name": "رادكليف بوروف",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FgP-0AbjkektObvEnvI559.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "fIjsKkCzCbQ3m0-O3zrGm",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Tameside Stadium"
                        },
                        "lastUpdatedAt": "2024-07-10T13:34:58.000Z",
                        "cachedAt": "2025-01-18T06:45:40.754Z",
                        "period": null,
                        "round": {
                            "name": "National League North",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "eczl6ajukry5alhvexk5r48kr",
                            "code": "CUR",
                            "short": "كيرزون",
                            "long": "كيرزون",
                            "full": "كيرزون",
                            "name": "كيرزون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FGg4Nn48XJv03LuDiqgfz5.png"
                            }
                        },
                        "teamB": {
                            "id": "eu9bjjefb8519k162ubh90yqw",
                            "code": "BRA",
                            "short": "براكلي تاون",
                            "long": "براكلي تاون",
                            "full": "براكلي تاون",
                            "name": "براكلي تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FgRNur3OLWibMIJoSShTdz.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "bNyRTmi210fxgqChfOh3b",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Mariners Park"
                        },
                        "lastUpdatedAt": "2024-07-10T13:34:58.000Z",
                        "cachedAt": "2025-01-18T06:45:40.754Z",
                        "period": null,
                        "round": {
                            "name": "National League North",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "adqm20gnlk6huuvgu96flnttv",
                            "code": "SSH",
                            "short": "South Shields",
                            "long": "South Shields",
                            "full": "South Shields",
                            "name": "South Shields",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FckgpzcVCsW2ppvQzvPnjF.png"
                            }
                        },
                        "teamB": {
                            "id": "17iseplhtnvwdj5ag6cq8b7pz",
                            "code": "OFC",
                            "short": "أكسفورد سيتي",
                            "long": "أكسفورد سيتي",
                            "full": "أكسفورد سيتي",
                            "name": "أكسفورد سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fx6ycNm2-e0hm6fgxSNjqX.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "6-92Ttj3kWJ2FsTNysynz",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Victory Park"
                        },
                        "lastUpdatedAt": "2024-07-10T13:34:58.000Z",
                        "cachedAt": "2025-01-18T07:12:43.320Z",
                        "period": null,
                        "round": {
                            "name": "National League North",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "e0g7tssxpzu2310rn31tom3w0",
                            "code": "CHO",
                            "short": "شورلي",
                            "long": "شورلي",
                            "full": "شورلي",
                            "name": "شورلي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FpWGvAqgT8J8ZfsNNP2USm.png"
                            }
                        },
                        "teamB": {
                            "id": "8mgwfz9q3fsypynyeh0y3785e",
                            "code": "SCU",
                            "short": "سكونثورب",
                            "long": "سكونثورب",
                            "full": "سكونثورب",
                            "name": "سكونثورب",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FF-W3otJk5KsrGGpo4QqDo.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "lbxRO5RZuSJ4eRpj4iHHM",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Brewery Field, Spennymoor"
                        },
                        "lastUpdatedAt": "2024-07-10T13:34:58.000Z",
                        "cachedAt": "2025-01-18T06:42:28.384Z",
                        "period": null,
                        "round": {
                            "name": "National League North",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1ze56ysq0na5o83ly4xua2bks",
                            "code": "SPT",
                            "short": "سبينيمور تاون إف سي",
                            "long": "سبينيمور تاون إف سي",
                            "full": "سبينيمور تاون إف سي",
                            "name": "سبينيمور تاون إف سي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FIHcduO2oaJYqykpPUJxNv.png"
                            }
                        },
                        "teamB": {
                            "id": "49v446rnwcwjaxh6rbe760m0q",
                            "code": "RUO",
                            "short": "رايشال",
                            "long": "رايشال",
                            "full": "رايشال",
                            "name": "رايشال",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FREfdwgNhhsZaN8cDaepe4.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "ssGHfI8yCpp97FbPF4T8-",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Walks"
                        },
                        "lastUpdatedAt": "2024-07-10T13:34:59.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "National League North",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "avhn3szdu9e8seb8m8mbz3upl",
                            "code": "KIL",
                            "short": "كينغز لين",
                            "long": "كينغز لين",
                            "full": "كينغز لين",
                            "name": "كينغز لين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fxp-huTjNWnJd-H4nLOuoK.png"
                            }
                        },
                        "teamB": {
                            "id": "94hvwr1tqq3o6yp6ex4dhnsb0",
                            "code": "MAR",
                            "short": "مارين",
                            "long": "مارين",
                            "full": "مارين",
                            "name": "مارين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FsHpcz8meJeoEdgg8a7UCL.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "SC8lSXV2p7YekhxvU0NBR",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Silverlands"
                        },
                        "lastUpdatedAt": "2024-07-10T13:34:58.000Z",
                        "cachedAt": "2025-01-18T06:37:52.787Z",
                        "period": null,
                        "round": {
                            "name": "National League North",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "786pnc5n2iakr9xooadgxlrf9",
                            "code": "BUX",
                            "short": "بكستون",
                            "long": "بكستون",
                            "full": "بكستون",
                            "name": "بكستون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Frra55g6LBE2t3AWR_cc62.png"
                            }
                        },
                        "teamB": {
                            "id": "9uhqh0xnqjng9lpsbbs5op4vd",
                            "code": "PET",
                            "short": "Peterborough Sports",
                            "long": "Peterborough Sports",
                            "full": "Peterborough Sports",
                            "name": "Peterborough Sports",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FW07dZ7beVs8t4Uix3_Lgm.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "VupiblIS45eD_vD7xsdu3",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Meadow, Chesham"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:44:57.789Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7dzfjinlt32jdfda6jn4marhc",
                            "code": "CHE",
                            "short": "تشيشام يونايتد",
                            "long": "تشيشام يونايتد",
                            "full": "تشيشام يونايتد",
                            "name": "تشيشام يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FU206Z29iRQ-to_lfZNfIa.png"
                            }
                        },
                        "teamB": {
                            "id": "67ajcjd6d48rgsf8r57qewxx0",
                            "code": "MAI",
                            "short": "مايدستون",
                            "long": "مايدستون",
                            "full": "مايدستون",
                            "name": "مايدستون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FTEimG0uItqip1CQIMHNIq.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "J3uYgYxBRC5v2_JohunXk",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Truro Sports Hub"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5zgcrn3s8l0yatcbq54emctex",
                            "code": "TRC",
                            "short": "ترورو سيتي",
                            "long": "ترورو سيتي",
                            "full": "ترورو سيتي",
                            "name": "ترورو سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fsiz7x09VSNJJgdg84zmXo.png"
                            }
                        },
                        "teamB": {
                            "id": "6dzesw0fw99ce4zcsjto5i88",
                            "code": "AVE",
                            "short": "أفيلي",
                            "long": "أفيلي",
                            "full": "أفيلي",
                            "name": "أفيلي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FfrpTg9Tweg3_5rHqnEFEM.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "7LJxOUsEv2xdEbUlY-_6N",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Melbourne Community Stadium"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:41:09.343Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8nd7rqpyxsujb6oflukaf8y27",
                            "code": "CHF",
                            "short": "تشيلمسفورد",
                            "long": "تشيلمسفورد",
                            "full": "تشيلمسفورد",
                            "name": "تشيلمسفورد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FOUYdSuJVmA2Y6x29Puhlc.png"
                            }
                        },
                        "teamB": {
                            "id": "815xv6x834m9suw8suhioc0bd",
                            "code": "HOR",
                            "short": "هورنتشيرتش",
                            "long": "هورنتشيرتش",
                            "full": "هورنتشيرتش",
                            "name": "هورنتشيرتش",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FaGIS-iTIaf8KiC36YUHO9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "9zWS-vQ83e-GT2JmVwcrh",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "J Hearnden Skip Hire Community Stadium"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:49:10.338Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9l2o1wwnkpf0bwbr948wh50kw",
                            "code": "WEL",
                            "short": "ويلينج",
                            "long": "ويلينج",
                            "full": "ويلينج",
                            "name": "ويلينج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FK-diuIaZCJGaQr7zubY3D.png"
                            }
                        },
                        "teamB": {
                            "id": "445y92nkbkin98swvnc76k318",
                            "code": "BOR",
                            "short": "بوريهام وود",
                            "long": "بوريهام وود",
                            "full": "بوريهام وود",
                            "name": "بوريهام وود",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FI50laJtf0I48gYhxZykVM.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Im5p3AAkUm045KSgifKYU",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Cherrywood Road"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:41:09.343Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "en2fp368g7ys97mooxnatsym8",
                            "code": "FAR",
                            "short": "فارنبورو",
                            "long": "فارنبورو",
                            "full": "فارنبورو",
                            "name": "فارنبورو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4SZFqf56Uec1Za58ViuZj.png"
                            }
                        },
                        "teamB": {
                            "id": "5kb7a9lyph0a8tor3bnhqkpzy",
                            "code": "HEH",
                            "short": "هاميل هيمبستيد",
                            "long": "هاميل هيمبستيد",
                            "full": "هاميل هيمبستيد",
                            "name": "هاميل هيمبستيد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FMVX_cWFvgkyKUn8nl4UJV.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "5H88c7qQa0Gv3e7ERrVsL",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Meadowbank"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4jnfgi52hgs7onvfae04ucg1p",
                            "code": "DOR",
                            "short": "دوركينغ وانديررز",
                            "long": "دوركينغ وانديررز",
                            "full": "دوركينغ وانديررز",
                            "name": "دوركينغ وانديررز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FsF-hpI3ShbE4uC68RN3Hu.png"
                            }
                        },
                        "teamB": {
                            "id": "9y744cxejrp4e8r1tn73jxmeq",
                            "code": "WSM",
                            "short": "ويستون سوبر مار",
                            "long": "ويستون سوبر مار",
                            "full": "ويستون سوبر مار",
                            "name": "ويستون سوبر مار",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FlK5jBB3nQ2-HssDzbwYoa.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "UJOtqknW9of7nn5s3_lpW",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Hardenhuish Park"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:40:32.513Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "37wb4yzh3drxh1tkx0pvyws3f",
                            "code": "CHT",
                            "short": "تشيبينهام تاون",
                            "long": "تشيبينهام تاون",
                            "full": "تشيبينهام تاون",
                            "name": "تشيبينهام تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FQ9OcOKqg7FzBtT7ZD9woG.png"
                            }
                        },
                        "teamB": {
                            "id": "dk552o3kulh14emtqf5sysggb",
                            "code": "SAL",
                            "short": "Salisbury",
                            "long": "Salisbury",
                            "full": "Salisbury",
                            "name": "Salisbury",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fy4UKHaYZSI-2wZrNy9SIh.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "7uU0t64XpSjmFWt9E73QP",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Queen Elizabeth II Stadium"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "332lr2989i6fothshkeaibc3g",
                            "code": "ENT",
                            "short": "انفيلد تاون",
                            "long": "انفيلد تاون",
                            "full": "انفيلد تاون",
                            "name": "انفيلد تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FL4mtggyOR9BQw7TCo4HAl.png"
                            }
                        },
                        "teamB": {
                            "id": "fihjd1zfh4cquqh4q1dptdvp",
                            "code": "BAT",
                            "short": "باث سيتي",
                            "long": "باث سيتي",
                            "full": "باث سيتي",
                            "name": "باث سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FYKH6hzMfTbQ8qVIN5k9Dd.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "3TeCZkJycz3DITvoHRtO-",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Arbour Park"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:41:09.569Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3wqyde79wzqjwtifiu1owjlgf",
                            "code": "SLO",
                            "short": "سلاو",
                            "long": "سلاو",
                            "full": "سلاو",
                            "name": "سلاو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FCfnhS7BmVsxiAo-XzgzxI.png"
                            }
                        },
                        "teamB": {
                            "id": "8ngf84mp667i5nx9hrkb9qh8r",
                            "code": "EAB",
                            "short": "إيستبورن بورو",
                            "long": "إيستبورن بورو",
                            "full": "إيستبورن بورو",
                            "name": "إيستبورن بورو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FEYBLnYpy2L9pP4K32QYm3.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "0O86GSzVAVeSz7iS8ihki",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Beveree Stadium"
                        },
                        "lastUpdatedAt": "2024-07-10T13:09:53.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "National League South",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1y80bnyltwcvl1z5awfuz5uci",
                            "code": "HAR",
                            "short": "هامبتون آند ريتشموند",
                            "long": "هامبتون آند ريتشموند",
                            "full": "هامبتون آند ريتشموند",
                            "name": "هامبتون آند ريتشموند",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FVIjqrKlC0bb_qJf6tXnLa.png"
                            }
                        },
                        "teamB": {
                            "id": "af1nsrnv3f2ad2deukbv2vr62",
                            "code": "TOA",
                            "short": "تونبريدج أنجلز",
                            "long": "تونبريدج أنجلز",
                            "full": "تونبريدج أنجلز",
                            "name": "تونبريدج أنجلز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F_2onhycttItMsSHHrcviR.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "cse5oqqt2pzfcy8uz6yz3tkbj",
                    "name": "دوري أبطال إفريقيا",
                    "area": {
                        "name": "International"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F7yasa43laq1nb2e6f8bfuvxed.png"
                    }
                },
                "matches": [
                    {
                        "id": "dTGlga0bJLI12jPpkFBFx",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-10-07T13:28:03.000Z",
                        "cachedAt": "2025-01-18T06:50:49.038Z",
                        "period": null,
                        "round": {
                            "name": "CAF Champions League Grp. A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "egds8x98qpscniqorqg52obs6",
                            "code": "TPM",
                            "short": "تي بي مازيمبي",
                            "long": "تي بي مازيمبي",
                            "full": "تي بي مازيمبي",
                            "name": "تي بي مازيمبي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fegds8x98qpscniqorqg52obs6.png"
                            }
                        },
                        "teamB": {
                            "id": "DNedNhp6Kgk6kielN5qY_",
                            "code": "ALH",
                            "short": "الهلال أم درمان",
                            "long": "الهلال أم درمان",
                            "full": "الهلال أم درمان",
                            "name": "الهلال أم درمان",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJbebRJfk747El71hQXl_B.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "8WV9b9aO3QhyLqMZ-tUXR",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-10-07T13:28:01.000Z",
                        "cachedAt": "2025-01-18T07:23:39.179Z",
                        "period": null,
                        "round": {
                            "name": "CAF Champions League Grp. A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "es0todg3ftqeg5ml6lfq55rof",
                            "code": "YOA",
                            "short": "يانج افريكانز",
                            "long": "يانج افريكانز",
                            "full": "يانج افريكانز",
                            "name": "يانج افريكانز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FlXMJlP9DGCANVcdaidabd.png"
                            }
                        },
                        "teamB": {
                            "id": "3hjibr4pt10o0ifk7tbl7si6i",
                            "code": "MCA",
                            "short": "إم سي ألجير",
                            "long": "إم سي ألجير",
                            "full": "إم سي ألجير",
                            "name": "إم سي ألجير",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FHhHepXugkqltK-ifYZiM4.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "6_QQuobcbIZ_1bIhfojV0",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-10-07T13:28:21.000Z",
                        "cachedAt": "2025-01-18T07:39:27.064Z",
                        "period": null,
                        "round": {
                            "name": "CAF Champions League Grp. C",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8vldgq3nu5tcnv2xyq01pfru7",
                            "code": "CRB",
                            "short": "شباب بلوزداد",
                            "long": "شباب بلوزداد",
                            "full": "شباب بلوزداد",
                            "name": "شباب بلوزداد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F8vldgq3nu5tcnv2xyq01pfru7.png"
                            }
                        },
                        "teamB": {
                            "id": "txTadS6_Mf6AmcaBiTEDX",
                            "code": null,
                            "short": "استاد أبيدجان",
                            "long": "استاد أبيدجان",
                            "full": "استاد أبيدجان",
                            "name": "استاد أبيدجان",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fdefault.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "6mVYntyjXkjoWHd_edUtx",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-10-07T13:28:21.000Z",
                        "cachedAt": "2025-01-18T06:39:00.281Z",
                        "period": null,
                        "round": {
                            "name": "CAF Champions League Grp. C",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1q2hx9pw8c7x88utqunk4e6xl",
                            "code": "ALA",
                            "short": "الأهلي",
                            "long": "الأهلي",
                            "full": "الأهلي",
                            "name": "الأهلي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fo0K-aXi0FsiLx9BJ3AgTv.png"
                            }
                        },
                        "teamB": {
                            "id": "asatsyoargv5n2y7o04swilai",
                            "code": "ORP",
                            "short": "أورلاندو بايريتس",
                            "long": "أورلاندو بايريتس",
                            "full": "أورلاندو بايريتس",
                            "name": "أورلاندو بايريتس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F2mt4sm2H6GE45dtr2emV8.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "KYBoAj95IZmsC093tpgOw",
                        "startDate": "2025-01-18T19:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-10-07T13:28:21.000Z",
                        "cachedAt": "2025-01-18T06:46:10.206Z",
                        "period": null,
                        "round": {
                            "name": "CAF Champions League Grp. D",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3s830ae09zdviu2cnqxixflq1",
                            "code": "ESP",
                            "short": "الترجي",
                            "long": "الترجي",
                            "full": "الترجي",
                            "name": "الترجي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FEF2BiqfSLna4ypEMUibdi.png"
                            }
                        },
                        "teamB": {
                            "id": "4q8yahm07qkefolddb25xg4c6",
                            "code": "SAG",
                            "short": "ساجرادا اسبيرانسا",
                            "long": "ساجرادا اسبيرانسا",
                            "full": "ساجرادا اسبيرانسا",
                            "name": "ساجرادا اسبيرانسا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJTRinfUQsKgGomm5Tiq87.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "VEkLUTQNLPCWLzRqLrw3x",
                        "startDate": "2025-01-18T19:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-10-07T13:28:01.000Z",
                        "cachedAt": "2025-01-18T06:52:25.564Z",
                        "period": null,
                        "round": {
                            "name": "CAF Champions League Grp. D",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "a5hh43fi88rchrm37263600hu",
                            "code": "PYR",
                            "short": "بيراميدز",
                            "long": "بيراميدز",
                            "full": "بيراميدز",
                            "name": "بيراميدز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJTf73VVwEf8AlNOdmNtN5.png"
                            }
                        },
                        "teamB": {
                            "id": "bXA-5u3IVgob9DZ0OFUPe",
                            "code": "DAC",
                            "short": "ديوليبا أي سي",
                            "long": "ديوليبا أي سي",
                            "full": "ديوليبا أي سي",
                            "name": "ديوليبا أي سي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FDurXQSu82mQCUQWrt0Q2E.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "3428tckxcirwwh3o3jgc1m8ji",
                    "name": "أذربيجان 1",
                    "area": {
                        "name": "Azerbaijan"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F52sufqqq7vid3xa6iljx6obcz.png"
                    }
                },
                "matches": [
                    {
                        "id": "Q71KgMI0PGuC8TED8aauE",
                        "startDate": "2025-01-18T12:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-14T07:29:21.000Z",
                        "cachedAt": "2025-01-18T06:52:47.377Z",
                        "period": null,
                        "round": {
                            "name": "Premier League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8oxa17y70f9muh5ytwsbikqeq",
                            "code": "ZIR",
                            "short": "زيره",
                            "long": "زيره",
                            "full": "زيره",
                            "name": "زيره",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F9z139vmssBLtxMtWPX70I.png"
                            }
                        },
                        "teamB": {
                            "id": "ADdjI2zMVg7wfhxTm6scp",
                            "code": "ARA",
                            "short": "Araz PFK",
                            "long": "Araz PFK",
                            "full": "Araz PFK",
                            "name": "Araz PFK",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FyuE2vxW6C9o5GuPYIMMP6.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "MCndHpC3GZGHKgbxFWMHO",
                        "startDate": "2025-01-18T14:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-14T07:29:21.000Z",
                        "cachedAt": "2025-01-18T07:04:24.169Z",
                        "period": null,
                        "round": {
                            "name": "Premier League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "KtYXx9Sm0d-Si6qo_mFub",
                            "code": "SUM",
                            "short": "سومقايت",
                            "long": "سومقايت",
                            "full": "سومقايت",
                            "name": "سومقايت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fzr2IG18_r-C2oiHClsbOC.png"
                            }
                        },
                        "teamB": {
                            "id": "gYR1o7fcO5rJRGjHxHagc",
                            "code": "SHA",
                            "short": "Sabail",
                            "long": "Sabail",
                            "full": "Sabail",
                            "name": "Sabail",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F9fhqNpHSKEMmE6_mDVmSO.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "yv73ms6v1995b5wny16jcfi3",
                    "name": "جنوب إفريقيا 1",
                    "area": {
                        "name": "South Africa"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1kiwby3xmt97m3ejw76qs4i6k.png"
                    }
                },
                "matches": [
                    {
                        "id": "cqfA3duInYROzDFgxWS2x",
                        "startDate": "2025-01-18T13:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-09-20T07:55:32.000Z",
                        "cachedAt": "2025-01-18T06:48:50.913Z",
                        "period": null,
                        "round": {
                            "name": "Premiership",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "s7xf6mvsygysn88hs5bx1vzj",
                            "code": "LAM",
                            "short": "لامونتفيل جي آروز",
                            "long": "لامونتفيل جي آروز",
                            "full": "لامونتفيل جي آروز",
                            "name": "لامونتفيل جي آروز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fs7xf6mvsygysn88hs5bx1vzj.png"
                            }
                        },
                        "teamB": {
                            "id": "9fjzy739uj2borv29vzra2vl6",
                            "code": "TSG",
                            "short": "TS Galaxy",
                            "long": "TS Galaxy",
                            "full": "TS Galaxy",
                            "name": "TS Galaxy",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FpBWsnQ8xzHucmZ862Kjmq.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "UWaq4wFmGp_0aO9j519UH",
                        "startDate": "2025-01-18T18:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-09-20T07:55:32.000Z",
                        "cachedAt": "2025-01-18T06:33:53.570Z",
                        "period": null,
                        "round": {
                            "name": "Premiership",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4cz716ugykgw3dl82z43evgai",
                            "code": "CHI",
                            "short": "تشيبا يونايتد",
                            "long": "تشيبا يونايتد",
                            "full": "تشيبا يونايتد",
                            "name": "تشيبا يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJfcXFKfJV7ZFEYLIhhh4H.png"
                            }
                        },
                        "teamB": {
                            "id": "4t8n4gm2xoifc6e5qxkfohgfp",
                            "code": "MGA",
                            "short": "ميلانو يونايتد",
                            "long": "ميلانو يونايتد",
                            "full": "ميلانو يونايتد",
                            "name": "ميلانو يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FzUMkchBJ7cGKEtOfidqTC.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "3oa9e03e7w9nr8kqwqc3tlqz9",
                    "name": "Super League",
                    "area": {
                        "name": "India"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2Fpu2isxryiewd7pvejah6oqex.png"
                    }
                },
                "matches": [
                    {
                        "id": "sDK1UWWydLHA0pvcMbFrd",
                        "startDate": "2025-01-18T11:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-10-16T11:30:37.000Z",
                        "cachedAt": "2025-01-18T06:37:04.676Z",
                        "period": null,
                        "round": {
                            "name": "Indian",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "d65t4cxgbtgc2ztx2n88b8tii",
                            "code": "HYD",
                            "short": "Hyderabad FC",
                            "long": "Hyderabad FC",
                            "full": "Hyderabad FC",
                            "name": "Hyderabad FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4P7WPNvCyW1cA79xrhx9E.png"
                            }
                        },
                        "teamB": {
                            "id": "12ksg0e6d70senzilsic40fzl",
                            "code": "BEN",
                            "short": "Bengaluru FC",
                            "long": "Bengaluru FC",
                            "full": "Bengaluru FC",
                            "name": "Bengaluru FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FQNxKNp1tqHO44y1sga1Do.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "YN3OBEIxaoMg9eLVrM9CK",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-10-16T11:30:37.000Z",
                        "cachedAt": "2025-01-18T07:10:03.036Z",
                        "period": null,
                        "round": {
                            "name": "Indian",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5yvw8xpbzap5lhlze04odtgk4",
                            "code": "KBF",
                            "short": "كراله بلاسترس فك",
                            "long": "كراله بلاسترس فك",
                            "full": "كراله بلاسترس فك",
                            "name": "كراله بلاسترس فك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F-eI0h9hA8-nNpiv9QdojT.png"
                            }
                        },
                        "teamB": {
                            "id": "7xo09xnh3y03lyai6azr77fo0",
                            "code": "NUF",
                            "short": "نورث ايست يونايتد",
                            "long": "نورث ايست يونايتد",
                            "full": "نورث ايست يونايتد",
                            "name": "نورث ايست يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FX_9sIrycy3qIzxmMNtN5g.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "f4jc2cc5nq7flaoptpi5ua4k4",
                    "name": "الرابطة التونسية المحترفة الأولى",
                    "area": {
                        "name": "Tunisia"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F2um1icx6ftp1auliaxyw0ou6y.png"
                    }
                },
                "matches": [
                    {
                        "id": "pJ4b3pkjtmfIE81NiYyjD",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-15T11:11:45.000Z",
                        "cachedAt": "2025-01-18T06:49:24.332Z",
                        "period": null,
                        "round": {
                            "name": "1. Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "15yc5clzoxt89y8iis8n09r6k",
                            "code": "SLI",
                            "short": "AS Slimane",
                            "long": "AS Slimane",
                            "full": "AS Slimane",
                            "name": "AS Slimane",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FmMJiFmPms_vsnXY_z2FHF.png"
                            }
                        },
                        "teamB": {
                            "id": "5gn5kjewqnr9t45abrezl7gjd",
                            "code": "EME",
                            "short": "نجم المتلوي",
                            "long": "نجم المتلوي",
                            "full": "نجم المتلوي",
                            "name": "نجم المتلوي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FHeE0oTpTxu4rWT32KUrVu.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "I2RWgHce-l_JOQ_MizhqX",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-15T11:11:45.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "1. Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1p5jtz8tz3vfj55our9bsuzz0",
                            "code": "OBE",
                            "short": "الأولمبي الباجي",
                            "long": "الأولمبي الباجي",
                            "full": "الأولمبي الباجي",
                            "name": "الأولمبي الباجي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fv34txn3XqTmlz-QxT9t_R.png"
                            }
                        },
                        "teamB": {
                            "id": "8uspwtlw2da5l8x4ga4mtq8fo",
                            "code": "EDS",
                            "short": "النجم الساحلي",
                            "long": "النجم الساحلي",
                            "full": "النجم الساحلي",
                            "name": "النجم الساحلي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fgxfqh4HOirhOClKacXhrM.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "1eruend45vd20g9hbrpiggs5u",
                    "name": "الدوري المغربي الممتاز",
                    "area": {
                        "name": "Morocco"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F2xdcc39z1k79pnjbtn9x31wdh.png"
                    }
                },
                "matches": [
                    {
                        "id": "JCe0uF3HUCEK35xRL8K97",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-14T10:15:46.000Z",
                        "cachedAt": "2025-01-18T06:50:55.687Z",
                        "period": null,
                        "round": {
                            "name": "الدوري المغربي الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "a8fnw9es9d983nknldpg7q3k0",
                            "code": "ITT",
                            "short": "إتحاد طنجة",
                            "long": "إتحاد طنجة",
                            "full": "إتحاد طنجة",
                            "name": "إتحاد طنجة",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fu2XKr-bluNPcfNzgSjQJH.png"
                            }
                        },
                        "teamB": {
                            "id": "bsm0uwfbi4g8vl53hf08r103t",
                            "code": "FUS",
                            "short": "اتحاد الفتح الرياضي الرباطي",
                            "long": "اتحاد الفتح الرياضي الرباطي",
                            "full": "اتحاد الفتح الرياضي الرباطي",
                            "name": "اتحاد الفتح الرياضي الرباطي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fbsm0uwfbi4g8vl53hf08r103t.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "1VqcVoeLukywkzH0P06PD",
                        "startDate": "2025-01-18T17:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-14T10:15:53.000Z",
                        "cachedAt": "2025-01-18T06:52:47.362Z",
                        "period": null,
                        "round": {
                            "name": "الدوري المغربي الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "85v5r4b0lzloisd89599q5z6e",
                            "code": "CHA",
                            "short": "Chabab Mohammedia",
                            "long": "Chabab Mohammedia",
                            "full": "Chabab Mohammedia",
                            "name": "Chabab Mohammedia",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FkqQpWcvO-oWDD_T7NSTet.png"
                            }
                        },
                        "teamB": {
                            "id": "a2xjb7e4c247foutrirrful0p",
                            "code": "RCZ",
                            "short": "Renaissance Club Zemamra",
                            "long": "Renaissance Club Zemamra",
                            "full": "Renaissance Club Zemamra",
                            "name": "Renaissance Club Zemamra",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F3qAL6xugOEJPgaLn7FQJv.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "R23syiTMkdV8D_QMKIKt4",
                        "startDate": "2025-01-18T19:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-14T10:15:59.000Z",
                        "cachedAt": "2025-01-18T06:30:34.669Z",
                        "period": null,
                        "round": {
                            "name": "الدوري المغربي الممتاز",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "e55h3csjd3rnqnv3vnu8vpuk0",
                            "code": "UTS",
                            "short": "إتحاد تواركة",
                            "long": "إتحاد تواركة",
                            "full": "إتحاد تواركة",
                            "name": "إتحاد تواركة",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FcxrMejBulhtzWvH0xQ7w-.png"
                            }
                        },
                        "teamB": {
                            "id": "c6lk3361debcflcdqom3ttpt5",
                            "code": "SAL",
                            "short": "Salmi",
                            "long": "Salmi",
                            "full": "Salmi",
                            "name": "Salmi",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F2dEomAbopg1w4R8bn8Rud.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "3iwftmprsznl6yribr11a8l9m",
                    "name": "ألمانيا 4",
                    "area": {
                        "name": "Germany"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F36min0qztu8eydwvpv8t1is0m.png"
                    }
                },
                "matches": [
                    {
                        "id": "LyXxB5SIy21ofGkvhWZZm",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-17T07:07:31.000Z",
                        "cachedAt": "2025-01-18T08:05:53.895Z",
                        "period": null,
                        "round": {
                            "name": "Regionalliga West",
                            "display": false
                        },
                        "status": "POSTPONED",
                        "teamA": {
                            "id": "WsAAC0TD2bfck4diaiw6U",
                            "code": "RDH",
                            "short": "SV Roedinghausen",
                            "long": "SV Roedinghausen",
                            "full": "SV Roedinghausen",
                            "name": "SV Roedinghausen",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FvH35DexwytL7zCQW6Nd-a.png"
                            }
                        },
                        "teamB": {
                            "id": "mrtFrdzFDaH9RHbRjdniY",
                            "code": "FOK",
                            "short": "فورتونا كولن",
                            "long": "فورتونا كولن",
                            "full": "فورتونا كولن",
                            "name": "فورتونا كولن",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fyua9e3o0STizyMxmzQUZo.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "78wml3z5wrfxe5iky50tiotgu",
                    "name": "إنجلترا 7",
                    "area": {
                        "name": "England"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1fk5l4hkqk12i7zske6mcqju6.png"
                    }
                },
                "matches": [
                    {
                        "id": "NKir9KjxzdDNrmHMnUMQ5",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Top Field"
                        },
                        "lastUpdatedAt": "2024-07-19T14:38:58.000Z",
                        "cachedAt": "2025-01-18T06:37:52.787Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division Central",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "eb2fyw96y1heljlfgex61rky3",
                            "code": "HCT",
                            "short": "هيتشين تاون",
                            "long": "هيتشين تاون",
                            "full": "هيتشين تاون",
                            "name": "هيتشين تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FssqIWo1C8B-mRQG3W4ixq.png"
                            }
                        },
                        "teamB": {
                            "id": "uFs5Ys4QMSOq__Pv02dZH",
                            "code": "BWT",
                            "short": "بايغليسويد تاون",
                            "long": "بايغليسويد تاون",
                            "full": "بايغليسويد تاون",
                            "name": "بايغليسويد تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FYios2w2vmHaPxXCd02aDU.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "I6AkMyOL9G2Rlnww_wyyq",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Lye Meadow"
                        },
                        "lastUpdatedAt": "2024-07-19T14:38:58.000Z",
                        "cachedAt": "2025-01-18T06:45:40.838Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division Central",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4y4ptx8s2vxqjjivh1sz1y411",
                            "code": "ALV",
                            "short": "Alvechurch",
                            "long": "Alvechurch",
                            "full": "Alvechurch",
                            "name": "Alvechurch",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNt2DMqSfbDIlubfBNhTrH.png"
                            }
                        },
                        "teamB": {
                            "id": "bw6jufnjtuyhrm0y4mbvverzb",
                            "code": "BAR",
                            "short": "بارويل إف سي",
                            "long": "بارويل إف سي",
                            "full": "بارويل إف سي",
                            "name": "بارويل إف سي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F7pKccD0s94v5KfVTs2euj.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "sBhkMwusk3bvqLkcFlcpf",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Crown Meadow"
                        },
                        "lastUpdatedAt": "2024-07-19T14:38:58.000Z",
                        "cachedAt": "2025-01-18T06:41:09.343Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division Central",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "NQz8xWLu0pH6-WvzAqa_z",
                            "code": "LOT",
                            "short": "لويستوفت تاون",
                            "long": "لويستوفت تاون",
                            "full": "لويستوفت تاون",
                            "name": "لويستوفت تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FRuRHlxRmjhsszXZ0P1TNA.png"
                            }
                        },
                        "teamB": {
                            "id": "626dm543l8c569hx6bmk7u44m",
                            "code": "SRB",
                            "short": "ستوبريدج",
                            "long": "ستوبريدج",
                            "full": "ستوبريدج",
                            "name": "ستوبريدج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FS4s79UTVvy-nANrgR4np8.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "snKsr6oWXihnPgD9wN0dE",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Valley, Redditch"
                        },
                        "lastUpdatedAt": "2024-07-19T14:38:58.000Z",
                        "cachedAt": "2025-01-18T07:02:43.131Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division Central",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "f0sm9x4lrlxdnpq4x7sdmp8o9",
                            "code": "RED",
                            "short": "ريدبيتش يونايتد",
                            "long": "ريدبيتش يونايتد",
                            "full": "ريدبيتش يونايتد",
                            "name": "ريدبيتش يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fsjtt1s304mRwcsar9yNL4.png"
                            }
                        },
                        "teamB": {
                            "id": "7jd639hu1ddaphlhm2j8j1ovw",
                            "code": "KET",
                            "short": "كيتيرينج",
                            "long": "كيتيرينج",
                            "full": "كيتيرينج",
                            "name": "كيتيرينج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fx9-VGXsKxSwcJdO0hVO1I.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "oSQC96z0YLRiAbJ4bLmWp",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Garden Walk"
                        },
                        "lastUpdatedAt": "2024-07-19T14:38:58.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division Central",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5859ptzyzz8ry9bajxfsklaff",
                            "code": "ROY",
                            "short": "Royston Town",
                            "long": "Royston Town",
                            "full": "Royston Town",
                            "name": "Royston Town",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F5h2PVDyW3CjKsQZS6Yuzk.png"
                            }
                        },
                        "teamB": {
                            "id": "aNCcN__aiD3f3iS9hJQyf",
                            "code": "HAR",
                            "short": "Harborough Town FC",
                            "long": "Harborough Town FC",
                            "full": "Harborough Town FC",
                            "name": "Harborough Town FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FkOAybkhOU4wgPbNd8yd4B.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "fPA35p0_SjwVuhlvqoBho",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Spencer Stadium"
                        },
                        "lastUpdatedAt": "2024-07-19T14:38:58.000Z",
                        "cachedAt": "2025-01-18T07:15:12.989Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division Central",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2q6two1lod8drpjc1lfa2113b",
                            "code": "BBU",
                            "short": "بانبوري يونايتد",
                            "long": "بانبوري يونايتد",
                            "full": "بانبوري يونايتد",
                            "name": "بانبوري يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fpxy8rN8Io35WTMsz72MGC.png"
                            }
                        },
                        "teamB": {
                            "id": "bgp76m54fwovls69n9ni4kxbs",
                            "code": "BST",
                            "short": "بيشوب ستورتفورد",
                            "long": "بيشوب ستورتفورد",
                            "full": "بيشوب ستورتفورد",
                            "name": "بيشوب ستورتفورد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fo3D6PvL0uWIP9_Q5dAzuX.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "OcJSUHPZMH_gBLEhcjang",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Victoria Ground"
                        },
                        "lastUpdatedAt": "2024-07-19T14:38:58.000Z",
                        "cachedAt": "2025-01-18T06:41:09.343Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division Central",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "db508w2o5neav1tt6by02xt6i",
                            "code": "BRS",
                            "short": "Bromsgrove Sporting",
                            "long": "Bromsgrove Sporting",
                            "full": "Bromsgrove Sporting",
                            "name": "Bromsgrove Sporting",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FjQ35tfS8F_dky_XBGgTqo.png"
                            }
                        },
                        "teamB": {
                            "id": "4108w47iqgpw35bpuruedofhl",
                            "code": "LEI",
                            "short": "ليستون",
                            "long": "ليستون",
                            "full": "ليستون",
                            "name": "ليستون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F3o9tf46YIfyJUoj5h24Nb.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "jpj8aHLUjI67teTMIMMee",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "New Bucks Head"
                        },
                        "lastUpdatedAt": "2024-07-19T14:38:40.000Z",
                        "cachedAt": "2025-01-18T06:42:28.384Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division Central",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dln2nsuuj03wqt69o238le513",
                            "code": "TEL",
                            "short": "تيلفورد",
                            "long": "تيلفورد",
                            "full": "تيلفورد",
                            "name": "تيلفورد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F54dgxb23AfyetJmxwxZ-j.png"
                            }
                        },
                        "teamB": {
                            "id": "21z08xokkmpgtmy2cmbepgz4e",
                            "code": "SAF",
                            "short": "ستام فورد",
                            "long": "ستام فورد",
                            "full": "ستام فورد",
                            "name": "ستام فورد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F23EFMrA3IncmCptRWtuXT.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "OMJLn7GVX1WeXDIKbcvwl",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Westwood Road"
                        },
                        "lastUpdatedAt": "2024-07-19T14:38:58.000Z",
                        "cachedAt": "2025-01-18T07:40:31.811Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division Central",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dkeyuef7yja5pp8rds3cemdq8",
                            "code": "STI",
                            "short": "St. Ives Town FC",
                            "long": "St. Ives Town FC",
                            "full": "St. Ives Town FC",
                            "name": "St. Ives Town FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fum5QeJ_c3nNt37RcJfeRz.png"
                            }
                        },
                        "teamB": {
                            "id": "TCQrZBgx873zcHv6RFNbd",
                            "code": "BED",
                            "short": "بيدفورد",
                            "long": "بيدفورد",
                            "full": "بيدفورد",
                            "name": "بيدفورد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFGbRkb1zHpU8mRSddae50.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "A6aiv4my46LVoLoAEG6S6",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "King's Marsh"
                        },
                        "lastUpdatedAt": "2024-07-19T14:38:40.000Z",
                        "cachedAt": "2025-01-18T06:40:38.425Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division Central",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8jrxbwibc3swgm4d9ujw45m9b",
                            "code": "AFC",
                            "short": "إيه إف سي سادبري",
                            "long": "إيه إف سي سادبري",
                            "full": "إيه إف سي سادبري",
                            "name": "إيه إف سي سادبري",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FaCxoHpO42KIpvRh0UXlAf.png"
                            }
                        },
                        "teamB": {
                            "id": "2c6kjyegck72ijdwzdqul55oi",
                            "code": "HAL",
                            "short": "هاليسوين",
                            "long": "هاليسوين",
                            "full": "هاليسوين",
                            "name": "هاليسوين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbNZYq7LMs3XzH8lbcjjKT.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Z5C_k7zxlf2nmmU3t_CJ5",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Sir Halley Stewart Field"
                        },
                        "lastUpdatedAt": "2024-07-19T14:38:58.000Z",
                        "cachedAt": "2025-01-18T06:44:57.867Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division Central",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5FxgN6xSkADg8W2qeTAiJ",
                            "code": "SPA",
                            "short": "سبالدينغ يونايتد",
                            "long": "سبالدينغ يونايتد",
                            "full": "سبالدينغ يونايتد",
                            "name": "سبالدينغ يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fuzwrq5-WtiUc7ErpRXMkb.png"
                            }
                        },
                        "teamB": {
                            "id": "b6q6hxbmxpquftg54ctcwlhzc",
                            "code": "STR",
                            "short": "Stratford Town",
                            "long": "Stratford Town",
                            "full": "Stratford Town",
                            "name": "Stratford Town",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FGq6t-YCNpw0vKi1GWDXib.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "oAWdwR4ElGKeCUSPXrUsk",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Elmbridge Sports Hub"
                        },
                        "lastUpdatedAt": "2024-07-19T15:09:20.000Z",
                        "cachedAt": "2025-01-18T06:45:40.838Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division South",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "csjsc6rlphtmjrphvhacocr91",
                            "code": "WAH",
                            "short": "والتون أند هيرشام",
                            "long": "والتون أند هيرشام",
                            "full": "والتون أند هيرشام",
                            "name": "والتون أند هيرشام",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fdefault.png"
                            }
                        },
                        "teamB": {
                            "id": "eg20s76i1ozbw9zjdqtjfxksg",
                            "code": "HUT",
                            "short": "هيونجيرفورد",
                            "long": "هيونجيرفورد",
                            "full": "هيونجيرفورد",
                            "name": "هيونجيرفورد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FwbI_iWYK3VF8ANm4t4PlT.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "CAVPTZJM3HScT4uKmXuSF",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Charters Community Stadium, Winchester"
                        },
                        "lastUpdatedAt": "2024-07-19T15:09:22.000Z",
                        "cachedAt": "2025-01-18T06:45:40.838Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division South",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ahr8owsyqlm3g6t19godo3dmb",
                            "code": "WIC",
                            "short": "وينتشستر سيتي",
                            "long": "وينتشستر سيتي",
                            "full": "وينتشستر سيتي",
                            "name": "وينتشستر سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbATdCIbGTW_Ilq7GGPRDU.png"
                            }
                        },
                        "teamB": {
                            "id": "mHfDZUD6aYEw8eUmYrNOP",
                            "code": "FRO",
                            "short": "فروم تاون",
                            "long": "فروم تاون",
                            "full": "فروم تاون",
                            "name": "فروم تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FmgHzkMv010cFKad_bJ3SK.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "_4rf6l5ps6G2N7LE4csmZ",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "West Leigh Park"
                        },
                        "lastUpdatedAt": "2024-07-19T15:10:46.000Z",
                        "cachedAt": "2025-01-18T06:45:40.838Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division South",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "879qdeuhqis9ma0zmtan81vh4",
                            "code": "HAV",
                            "short": "هافانت أند دبليو",
                            "long": "هافانت أند دبليو",
                            "full": "هافانت أند دبليو",
                            "name": "هافانت أند دبليو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FqHdnTNFoa8ffi3fX3Pi1N.png"
                            }
                        },
                        "teamB": {
                            "id": "eyb1box7vynoi1c4px82tuwda",
                            "code": "MET",
                            "short": "ميرثاير تايدفيل",
                            "long": "ميرثاير تايدفيل",
                            "full": "ميرثاير تايدفيل",
                            "name": "ميرثاير تايدفيل",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FtqzgpM9X-wuAbCmODNpXn.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "TA-w7-9eO36yOfXCXWhoM",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Snows Stadium"
                        },
                        "lastUpdatedAt": "2024-07-19T15:08:59.000Z",
                        "cachedAt": "2025-01-18T06:46:47.098Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division South",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2pc1hy076rm36d2fp3rvnu2yr",
                            "code": "AFC",
                            "short": "توتين",
                            "long": "توتين",
                            "full": "توتين",
                            "name": "توتين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fg6-CLR6kB_mGEDb72kT83.png"
                            }
                        },
                        "teamB": {
                            "id": "8i4vfcp3rxy8msapwg58lwwpm",
                            "code": "GOB",
                            "short": "جوسبورت بورو",
                            "long": "جوسبورت بورو",
                            "full": "جوسبورت بورو",
                            "name": "جوسبورت بورو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F_42eXlRWVKF5r4b9RHFdG.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "4BqZ9DLhG_cD_iNjGcqXO",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Webbswood Stadium"
                        },
                        "lastUpdatedAt": "2024-07-19T15:08:59.000Z",
                        "cachedAt": "2025-01-18T06:50:55.687Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division South",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5tghyxr60off8jz9nhgid94n9",
                            "code": "SWS",
                            "short": "سويندون سوبرمارين",
                            "long": "سويندون سوبرمارين",
                            "full": "سويندون سوبرمارين",
                            "name": "سويندون سوبرمارين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FVyp2zFSj8rEcj3VdKKR-N.png"
                            }
                        },
                        "teamB": {
                            "id": "DUho6GgUXATgIAqLEILLn",
                            "code": "CHT",
                            "short": "Chertsey Town",
                            "long": "Chertsey Town",
                            "full": "Chertsey Town",
                            "name": "Chertsey Town",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fz352WR4A8Yo-fwZnYauK_.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "DvLCmLMJ467eo_P2LLzWA",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Meadow Park, Gloucester"
                        },
                        "lastUpdatedAt": "2024-07-19T15:08:59.000Z",
                        "cachedAt": "2025-01-18T06:45:14.983Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division South",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "au7y5gatcipn3qo0fyt4jm43o",
                            "code": "GCC",
                            "short": "جلوسيستور سيتي",
                            "long": "جلوسيستور سيتي",
                            "full": "جلوسيستور سيتي",
                            "name": "جلوسيستور سيتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FVfdIBwEEUESeDvK3t2FCg.png"
                            }
                        },
                        "teamB": {
                            "id": "bzp7zj6vvxfsnxr4cb1qtowja",
                            "code": "SHO",
                            "short": "شولينغ",
                            "long": "شولينغ",
                            "full": "شولينغ",
                            "name": "شولينغ",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F3mp7K9YH3FjZN0Pw72UMj.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "t5CbBmRNVGqqsmiQd5xI1",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Avenue Stadium"
                        },
                        "lastUpdatedAt": "2024-07-19T15:08:59.000Z",
                        "cachedAt": "2025-01-18T06:45:40.838Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division South",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3wtachtmf1eqgty6wn077wyk8",
                            "code": "DOT",
                            "short": "دورتشستر تاون",
                            "long": "دورتشستر تاون",
                            "full": "دورتشستر تاون",
                            "name": "دورتشستر تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F_1w1rCHr5AmCPu70HlQb0.png"
                            }
                        },
                        "teamB": {
                            "id": "31gkf079yuu23csh565yga4mg",
                            "code": "BRT",
                            "short": "Bracknell Town",
                            "long": "Bracknell Town",
                            "full": "Bracknell Town",
                            "name": "Bracknell Town",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FZEQ25f7ApKpKWp_D9Zs6G.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "xe5T6lpzb5JkqaX1fzRn_",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Tatnam Ground"
                        },
                        "lastUpdatedAt": "2024-07-19T15:08:59.000Z",
                        "cachedAt": "2025-01-18T06:45:40.838Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division South",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "6uhttnezqis6fqwgmgp5ymoo3",
                            "code": "PTF",
                            "short": "بوول تاون",
                            "long": "بوول تاون",
                            "full": "بوول تاون",
                            "name": "بوول تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFLTEREy7X6RHIZS_ct2hg.png"
                            }
                        },
                        "teamB": {
                            "id": "a4h9wrxlzs9iih49l9qjqgu0k",
                            "code": "BAS",
                            "short": "باسينغستوك",
                            "long": "باسينغستوك",
                            "full": "باسينغستوك",
                            "name": "باسينغستوك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FR06QYh3nUV43RQt02zblt.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "sT-Q1YoEoKEcCERE1na8I",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Alfred Davis Memorial Ground"
                        },
                        "lastUpdatedAt": "2024-07-19T15:08:59.000Z",
                        "cachedAt": "2025-01-18T06:45:40.838Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division South",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "gZ-IUyunj7HeHJ5WgHRKq",
                            "code": "MAR",
                            "short": "Marlow",
                            "long": "Marlow",
                            "full": "Marlow",
                            "name": "Marlow",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FdIC7xRzAEHudUNno4j99g.png"
                            }
                        },
                        "teamB": {
                            "id": "2nls1lqurox9dbpa4cp3qf127",
                            "code": "PLY",
                            "short": "Plymouth Parkway",
                            "long": "Plymouth Parkway",
                            "full": "Plymouth Parkway",
                            "name": "Plymouth Parkway",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FlPndn8zm7CnV_6na-Me9j.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "X4__D9MPfdKHPdEBCnkvP",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Powerday Stadium"
                        },
                        "lastUpdatedAt": "2024-07-19T15:08:59.000Z",
                        "cachedAt": "2025-01-18T07:45:23.984Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division South",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5n66q899l5l5k3hmdhogr3fph",
                            "code": "HAT",
                            "short": "Hanwell Town",
                            "long": "Hanwell Town",
                            "full": "Hanwell Town",
                            "name": "Hanwell Town",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FWKquZDM25lyqcIDJpN6bR.png"
                            }
                        },
                        "teamB": {
                            "id": "bq7z1xp1lzmwdyisczluxn3q4",
                            "code": "TIV",
                            "short": "تيفيرتون",
                            "long": "تيفيرتون",
                            "full": "تيفيرتون",
                            "name": "تيفيرتون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbDCJwdsilFzCtDUJcoYc5.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "MXqpRQDt2gBDGt1Q_shXi",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Wordsworth Drive"
                        },
                        "lastUpdatedAt": "2024-07-19T15:09:19.000Z",
                        "cachedAt": "2025-01-18T06:44:57.867Z",
                        "period": null,
                        "round": {
                            "name": "Southern Premier Division South",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8tc0lnujpa3r9dgs1gdzx1edw",
                            "code": "TAT",
                            "short": "تونتون تاون",
                            "long": "تونتون تاون",
                            "full": "تونتون تاون",
                            "name": "تونتون تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fv1VUuaxNG4D7OaKAPJs7V.png"
                            }
                        },
                        "teamB": {
                            "id": "FWT_JlEb0C_QZHTDI7k7N",
                            "code": "WIT",
                            "short": "ويمبورن تاون",
                            "long": "ويمبورن تاون",
                            "full": "ويمبورن تاون",
                            "name": "ويمبورن تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FzqAbl0Rmut0SHZ9xgbA4w.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "lHhaQPRnt4Nye1f_D08Ev",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Northolme"
                        },
                        "lastUpdatedAt": "2024-07-18T18:17:25.000Z",
                        "cachedAt": "2025-01-18T06:45:40.838Z",
                        "period": null,
                        "round": {
                            "name": "Northern Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "69pjgkfpvu6wpkfodzrjtgfqe",
                            "code": "GAI",
                            "short": "جاينسبورو",
                            "long": "جاينسبورو",
                            "full": "جاينسبورو",
                            "name": "جاينسبورو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FZUwbyvt_q7bVH7sutWuhr.png"
                            }
                        },
                        "teamB": {
                            "id": "7s3vvybkimvx704zatm7jovtg",
                            "code": "MAC",
                            "short": "ماكسفيلد",
                            "long": "ماكسفيلد",
                            "full": "ماكسفيلد",
                            "name": "ماكسفيلد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FkzBBcATod6MCftGBD5sKo.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "HCRZmlU7K4WC4lx3i_daF",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Hurst Cross"
                        },
                        "lastUpdatedAt": "2024-07-18T18:17:25.000Z",
                        "cachedAt": "2025-01-18T06:45:40.838Z",
                        "period": null,
                        "round": {
                            "name": "Northern Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8hlt669dlujour7d1o04jcduv",
                            "code": "ATU",
                            "short": "آشتون يونايتد",
                            "long": "آشتون يونايتد",
                            "full": "آشتون يونايتد",
                            "name": "آشتون يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FgsIwKc2aNtxyAiOJXzdc9.png"
                            }
                        },
                        "teamB": {
                            "id": "cjwwpepmelf7dalsjpi4sf2g1",
                            "code": "WHI",
                            "short": "ويتبي",
                            "long": "ويتبي",
                            "full": "ويتبي",
                            "name": "ويتبي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FeO0xrYCmFX6FRk7lsbaXi.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "oy2fmf04U1Z8Cfhkytjel",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "IP Truck Parts Stadium"
                        },
                        "lastUpdatedAt": "2024-07-18T18:17:24.000Z",
                        "cachedAt": "2025-01-18T06:44:57.867Z",
                        "period": null,
                        "round": {
                            "name": "Northern Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "i2Iyaaw1yDBgxFizlPv69",
                            "code": "PCC",
                            "short": "بريسكوت كابلز",
                            "long": "بريسكوت كابلز",
                            "full": "بريسكوت كابلز",
                            "name": "بريسكوت كابلز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F62fIxF2eA6Pf00jFwkKSi.png"
                            }
                        },
                        "teamB": {
                            "id": "cht6tk02wdayxe1byqherg83x",
                            "code": "WOR",
                            "short": "وركسوب",
                            "long": "وركسوب",
                            "full": "وركسوب",
                            "name": "وركسوب",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FcA1zkkol0QCPAOQrU3Xjf.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "w1_r57tZOzmZ8eFSU4hBo",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "New Manor Ground"
                        },
                        "lastUpdatedAt": "2024-07-18T18:17:24.000Z",
                        "cachedAt": "2025-01-18T06:44:57.867Z",
                        "period": null,
                        "round": {
                            "name": "Northern Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "efehwixe4lsa7hg2ot12shdgq",
                            "code": "ILK",
                            "short": "Ilkeston Town",
                            "long": "Ilkeston Town",
                            "full": "Ilkeston Town",
                            "name": "Ilkeston Town",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F0TSBx-ooNS-leyaybxVeu.png"
                            }
                        },
                        "teamB": {
                            "id": "cj9xpjt804rm6atz5u4pa2dup",
                            "code": "MT",
                            "short": "Morpeth Town FC",
                            "long": "Morpeth Town FC",
                            "full": "Morpeth Town FC",
                            "name": "Morpeth Town FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FT3anZtFHu-yogpMq_FDfA.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "1UEXFoqsp-dcEEYdJaZKM",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Raygar Stadium"
                        },
                        "lastUpdatedAt": "2024-07-18T18:17:24.000Z",
                        "cachedAt": "2025-01-18T06:44:57.867Z",
                        "period": null,
                        "round": {
                            "name": "Northern Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "eqkna4eioptefjo0rx4j7ndnn",
                            "code": "MIS",
                            "short": "ميكليوفر سبورتس",
                            "long": "ميكليوفر سبورتس",
                            "full": "ميكليوفر سبورتس",
                            "name": "ميكليوفر سبورتس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FTg-Sqy0NohL-qvfle4jx9.png"
                            }
                        },
                        "teamB": {
                            "id": "8dcm7b7z8t21xh010rssjmqga",
                            "code": "WRY",
                            "short": "Warrington Rylands",
                            "long": "Warrington Rylands",
                            "full": "Warrington Rylands",
                            "name": "Warrington Rylands",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FQ6HJkBWyJo4zRfLuzTIoD.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Yp0SwCOFdGJc18BdzDUAu",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Bishopton Road West"
                        },
                        "lastUpdatedAt": "2024-07-18T18:17:24.000Z",
                        "cachedAt": "2025-01-18T06:44:57.867Z",
                        "period": null,
                        "round": {
                            "name": "Northern Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dKJ8aFrnr_37jUfhClqMJ",
                            "code": "STO",
                            "short": "Stockton Town",
                            "long": "Stockton Town",
                            "full": "Stockton Town",
                            "name": "Stockton Town",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FsK0jVosxyCdaObY8HM16Z.png"
                            }
                        },
                        "teamB": {
                            "id": "gjfxb62k9q5625py01fdddzk",
                            "code": "BAM",
                            "short": "بامبر بريدج",
                            "long": "بامبر بريدج",
                            "full": "بامبر بريدج",
                            "name": "بامبر بريدج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F83HqbWVQv7YWU-PhOjvCb.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "c-p_v1CXc0FzCbIDSdmu6",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Green Energy Sports Ground"
                        },
                        "lastUpdatedAt": "2024-07-18T18:17:25.000Z",
                        "cachedAt": "2025-01-18T06:45:40.838Z",
                        "period": null,
                        "round": {
                            "name": "Northern Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "Dzp-cJvrpHksQriv5CU2u",
                            "code": "HEB",
                            "short": "Hebburn Town",
                            "long": "Hebburn Town",
                            "full": "Hebburn Town",
                            "name": "Hebburn Town",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FLfpnFH4T1mrtLL8mrjwQK.png"
                            }
                        },
                        "teamB": {
                            "id": "77nchm7qeyg9ss227wkz97qwn",
                            "code": "HFC",
                            "short": "هايد يونايتد",
                            "long": "هايد يونايتد",
                            "full": "هايد يونايتد",
                            "name": "هايد يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FSfvMZ_TzTsxvB3wYN9CQj.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "AeAmR6VqiPlAAn4P02hgA",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Harrison Park"
                        },
                        "lastUpdatedAt": "2024-07-18T18:17:24.000Z",
                        "cachedAt": "2025-01-18T06:44:57.867Z",
                        "period": null,
                        "round": {
                            "name": "Northern Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "l20rvJebWwe28C2Fvs7_g",
                            "code": "LET",
                            "short": "ليك تاون",
                            "long": "ليك تاون",
                            "full": "ليك تاون",
                            "name": "ليك تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FwtqWb6mLczcC_5nzFCbxp.png"
                            }
                        },
                        "teamB": {
                            "id": "126hon8yqrfmdxd9bgu66fnad",
                            "code": "LAN",
                            "short": "لانكاستر",
                            "long": "لانكاستر",
                            "full": "لانكاستر",
                            "name": "لانكاستر",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FV1zpR-sYtdhDzZ1_zvlCI.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "dRoDUIqZHowwjc34q-sgB",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Maurice Rebak Stadium"
                        },
                        "lastUpdatedAt": "2024-07-19T13:55:14.000Z",
                        "cachedAt": "2025-01-18T06:45:40.773Z",
                        "period": null,
                        "round": {
                            "name": "Isthmian Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "c97myrg0dq0u6ov9v1qlv87ta",
                            "code": "WIF",
                            "short": "وينجات آند فينتشلي",
                            "long": "وينجات آند فينتشلي",
                            "full": "وينجات آند فينتشلي",
                            "name": "وينجات آند فينتشلي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FyEs-1vSO_DJ1k-m-aa4MV.png"
                            }
                        },
                        "teamB": {
                            "id": "aqmiwextp48byc7ldaxt3iol6",
                            "code": "DAR",
                            "short": "دارتفورد",
                            "long": "دارتفورد",
                            "full": "دارتفورد",
                            "name": "دارتفورد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FIOcWLM7lVSHfajCjB3iHa.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "xOgUhzfAHyk8qUkkPthEU",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Dripping Pan"
                        },
                        "lastUpdatedAt": "2024-07-19T13:55:14.000Z",
                        "cachedAt": "2025-01-18T06:44:57.867Z",
                        "period": null,
                        "round": {
                            "name": "Isthmian Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ctvyp684x5638qra472tp0c5t",
                            "code": "LEW",
                            "short": "ليوس",
                            "long": "ليوس",
                            "full": "ليوس",
                            "name": "ليوس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FX5S1i5Kmp8nrzfFfelLpO.png"
                            }
                        },
                        "teamB": {
                            "id": "6bmlputpgfbvnjobu0n0rgsre",
                            "code": "HSH",
                            "short": "هورشام",
                            "long": "هورشام",
                            "full": "هورشام",
                            "name": "هورشام",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FEaU2ebEFrf791vtP8L2B-.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "K2KvgCXKEpqAQl43OcgIZ",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "أوكويل ستاديوم"
                        },
                        "lastUpdatedAt": "2024-07-19T13:55:12.000Z",
                        "cachedAt": "2025-01-18T06:49:13.564Z",
                        "period": null,
                        "round": {
                            "name": "Isthmian Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "g6b61AzgJRUufVRku0xUH",
                            "code": "CHI",
                            "short": "Chichester City FC",
                            "long": "Chichester City FC",
                            "full": "Chichester City FC",
                            "name": "Chichester City FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FIbzCnL9bCR7_k-w7aOnuS.png"
                            }
                        },
                        "teamB": {
                            "id": "EluKQW3PNvwwxuqjTNr9t",
                            "code": "BOW",
                            "short": "بويرز أند بيتسي",
                            "long": "بويرز أند بيتسي",
                            "full": "بويرز أند بيتسي",
                            "name": "بويرز أند بيتسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FpiUgNK43bnUVaLNfVJ3yU.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Fe48Lr0YBglyvs6tcJN5t",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Silver Jubilee Park"
                        },
                        "lastUpdatedAt": "2024-07-19T13:55:14.000Z",
                        "cachedAt": "2025-01-18T06:49:48.109Z",
                        "period": null,
                        "round": {
                            "name": "Isthmian Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "6h0fi2gx5khva594x8mie6jd8",
                            "code": "HEN",
                            "short": "هيندون",
                            "long": "هيندون",
                            "full": "هيندون",
                            "name": "هيندون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FHneQZEKcI26sZcZvNUbUh.png"
                            }
                        },
                        "teamB": {
                            "id": "77d2m4zxel245hyjdq0ac1fmf",
                            "code": "CAA",
                            "short": "كارلشالتون أثلتيك",
                            "long": "كارلشالتون أثلتيك",
                            "full": "كارلشالتون أثلتيك",
                            "name": "كارلشالتون أثلتيك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FZt3fCsIa3MlGv4JYxagM_.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "FR3oHv0JrEFT3G5RJ2gCn",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "AGP Arena"
                        },
                        "lastUpdatedAt": "2024-07-19T13:54:57.000Z",
                        "cachedAt": "2025-01-18T07:14:20.124Z",
                        "period": null,
                        "round": {
                            "name": "Isthmian Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "75bay7mewk67apl0buccz58xf",
                            "code": "BIL",
                            "short": "بيليريكاي",
                            "long": "بيليريكاي",
                            "full": "بيليريكاي",
                            "name": "بيليريكاي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FyMS2EBeOWhBzklCKZU2e0.png"
                            }
                        },
                        "teamB": {
                            "id": "e59pw4e5qwqpujo6jrhdhst6g",
                            "code": "DUH",
                            "short": "دالويش هامليت",
                            "long": "دالويش هامليت",
                            "full": "دالويش هامليت",
                            "name": "دالويش هامليت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FLSfYYG9qlo5LYAEwpiTG_.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "1xLW0pAI-44cVVGc0biuY",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Cheshunt Stadium"
                        },
                        "lastUpdatedAt": "2024-07-19T13:54:57.000Z",
                        "cachedAt": "2025-01-18T06:45:40.773Z",
                        "period": null,
                        "round": {
                            "name": "Isthmian Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4d0at1lv27jen0qldbg8i3ou",
                            "code": "CHE",
                            "short": "Cheshunt",
                            "long": "Cheshunt",
                            "full": "Cheshunt",
                            "name": "Cheshunt",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FmxQM-RM0lCjmV4vR4KTIJ.png"
                            }
                        },
                        "teamB": {
                            "id": "a6r90f2ml45vuhgyi4v858myd",
                            "code": "WHI",
                            "short": "وايتهاوك",
                            "long": "وايتهاوك",
                            "full": "وايتهاوك",
                            "name": "وايتهاوك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNVwxLWH6h4TxH4r_VEj3A.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "93Xb-nb4Fp9V55FAGrFjq",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Fullicks Stadium"
                        },
                        "lastUpdatedAt": "2024-07-19T13:55:12.000Z",
                        "cachedAt": "2025-01-18T06:44:57.867Z",
                        "period": null,
                        "round": {
                            "name": "Isthmian Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "eg2c2a8z92iwgwh7c3rd06q2d",
                            "code": "FOI",
                            "short": "فولكيستون إينفيكتا",
                            "long": "فولكيستون إينفيكتا",
                            "full": "فولكيستون إينفيكتا",
                            "name": "فولكيستون إينفيكتا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FCfem49LRrc0mOP3HI4sAg.png"
                            }
                        },
                        "teamB": {
                            "id": "2d17xs6a6jtiltgyzflfvu5l5",
                            "code": "CAN",
                            "short": "كانفي",
                            "long": "كانفي",
                            "full": "كانفي",
                            "name": "كانفي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FsIMbn3ux_1gR65hwFLaR3.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "WChE7qKvSFtnYfhgjrKUu",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Badgers Sports Ground"
                        },
                        "lastUpdatedAt": "2024-07-19T13:55:11.000Z",
                        "cachedAt": "2025-01-18T06:44:57.867Z",
                        "period": null,
                        "round": {
                            "name": "Isthmian Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "N2EiqErdOSEqylpLmTavS",
                            "code": "CVP",
                            "short": "Cray Valley Paper Mills",
                            "long": "Cray Valley Paper Mills",
                            "full": "Cray Valley Paper Mills",
                            "name": "Cray Valley Paper Mills",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fbl2Ya-CYw1LdAX1h3L02k.png"
                            }
                        },
                        "teamB": {
                            "id": "8c2o9xqznoyi4zjzj2l2oabp7",
                            "code": "BRE",
                            "short": "بوجنور ريجيس تاون",
                            "long": "بوجنور ريجيس تاون",
                            "full": "بوجنور ريجيس تاون",
                            "name": "بوجنور ريجيس تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F9oN0jvrVWg3TWafHGW0oX.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "7W1_V8QUuSEuMV8_oJJ82",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Parkside"
                        },
                        "lastUpdatedAt": "2024-07-19T13:55:12.000Z",
                        "cachedAt": "2025-01-18T06:47:34.090Z",
                        "period": null,
                        "round": {
                            "name": "Isthmian Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "cobziyzkj4njpuotxtynh12zu",
                            "code": "HUN",
                            "short": "Hashtag United",
                            "long": "Hashtag United",
                            "full": "Hashtag United",
                            "name": "Hashtag United",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FlRYyAFnFtv9k-UYiLMRKF.png"
                            }
                        },
                        "teamB": {
                            "id": "e9xja7dncj3zddav8sng6k5oc",
                            "code": "DOV",
                            "short": "دوفر",
                            "long": "دوفر",
                            "full": "دوفر",
                            "name": "دوفر",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FsqCdI5u79Y6k1JGuT7s--.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "EAeibt2-wN7pW1vvtFb1U",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The Pilot Field"
                        },
                        "lastUpdatedAt": "2024-07-19T13:55:14.000Z",
                        "cachedAt": "2025-01-18T06:38:48.870Z",
                        "period": null,
                        "round": {
                            "name": "Isthmian Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dfpv2s7zg9q2cyrbq8s7ua7rj",
                            "code": "HAS",
                            "short": "هاستينجز",
                            "long": "هاستينجز",
                            "full": "هاستينجز",
                            "name": "هاستينجز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbNTKUcNpNi4tfURpBTK39.png"
                            }
                        },
                        "teamB": {
                            "id": "32jlpgkzm9uwwa3katign0f21",
                            "code": "CRW",
                            "short": "كراي وانديررز",
                            "long": "كراي وانديررز",
                            "full": "كراي وانديررز",
                            "name": "كراي وانديررز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F9ESrn0eFOEtnxV8dcmM-d.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "ecB1PkWARvnOTQHb0obbI",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Broadhurst Park"
                        },
                        "lastUpdatedAt": "2024-07-18T18:17:25.000Z",
                        "cachedAt": "2025-01-18T06:49:13.564Z",
                        "period": null,
                        "round": {
                            "name": "Northern Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7llwd7easfjo7dmqdabb82m1p",
                            "code": "FCU",
                            "short": "إف سي يونايتد",
                            "long": "إف سي يونايتد",
                            "full": "إف سي يونايتد",
                            "name": "إف سي يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fui8NU-Wta_HoSAtsehkta.png"
                            }
                        },
                        "teamB": {
                            "id": "4uv0bwg62mr64re8okqeut2g9",
                            "code": "BLS",
                            "short": "بلايث سبارتانس",
                            "long": "بلايث سبارتانس",
                            "full": "بلايث سبارتانس",
                            "name": "بلايث سبارتانس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbyQyxkC3Ggj-NOx-Nm1fe.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "POwib5ppZLgDTETuTnXF5",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Nethermoor Park, Guiseley"
                        },
                        "lastUpdatedAt": "2024-07-18T18:17:25.000Z",
                        "cachedAt": "2025-01-18T06:38:48.870Z",
                        "period": null,
                        "round": {
                            "name": "Northern Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "62od12kfpmvbst8xu69i3kvgd",
                            "code": "GUI",
                            "short": "جويسيلي",
                            "long": "جويسيلي",
                            "full": "جويسيلي",
                            "name": "جويسيلي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FZbujYPL4zkPxK_mbKhOlH.png"
                            }
                        },
                        "teamB": {
                            "id": "5kpj84ptjduoztv20zcqd52l3",
                            "code": "BAS",
                            "short": "Basford United",
                            "long": "Basford United",
                            "full": "Basford United",
                            "name": "Basford United",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FV4y6O-5XdGxcM4tLvZHAv.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "4jeK4_JFlkwQva7e8liqJ",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Borough Park"
                        },
                        "lastUpdatedAt": "2024-07-18T18:17:24.000Z",
                        "cachedAt": "2025-01-18T06:49:13.564Z",
                        "period": null,
                        "round": {
                            "name": "Northern Premier Division",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "azl26rnnit4vewyw4qibx6ubm",
                            "code": "WOR",
                            "short": "وركنغتون",
                            "long": "وركنغتون",
                            "full": "وركنغتون",
                            "name": "وركنغتون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FDkJBWys85nF-Mcost72ak.png"
                            }
                        },
                        "teamB": {
                            "id": "brd1jsr5chsi50iyw7uqvj5wf",
                            "code": "MLT",
                            "short": "ماتلوك تاون",
                            "long": "ماتلوك تاون",
                            "full": "ماتلوك تاون",
                            "name": "ماتلوك تاون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FXMgOqYsEnms5hh9hQ95ef.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "aho73e5udydy96iun3tkzdzsi",
                    "name": "فيتنام 1",
                    "area": {
                        "name": "Vietnam"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F747si8rr6manolqh31d1vz17q.png"
                    }
                },
                "matches": [
                    {
                        "id": "U-hQsci4mZJSR_q--wuiZ",
                        "startDate": "2025-01-18T11:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-12-13T10:30:42.000Z",
                        "cachedAt": "2025-01-18T08:29:24.692Z",
                        "period": null,
                        "round": {
                            "name": "V-League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9v4yyr40xf997aabj1fja74o5",
                            "code": "TCH",
                            "short": "إل إس ثانه هوا",
                            "long": "إل إس ثانه هوا",
                            "full": "إل إس ثانه هوا",
                            "name": "إل إس ثانه هوا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJBq-ZPBHEf7FhelfwFVRC.png"
                            }
                        },
                        "teamB": {
                            "id": "5tgr12bwzhe1fd5kefldfjml9",
                            "code": "HLH",
                            "short": "Hong Linh Ha Tinh",
                            "long": "Hong Linh Ha Tinh",
                            "full": "Hong Linh Ha Tinh",
                            "name": "Hong Linh Ha Tinh",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FRnYlV_ziPHaDy0-nJkIB5.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "NenHgkntIlJYVvbyMHHML",
                        "startDate": "2025-01-18T12:15:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-12-13T10:30:42.000Z",
                        "cachedAt": "2025-01-18T07:29:24.572Z",
                        "period": null,
                        "round": {
                            "name": "V-League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9opgrlgkvrfhv5m4gbwfywj3b",
                            "code": "CAN",
                            "short": "Cong An Ha Noi",
                            "long": "Cong An Ha Noi",
                            "full": "Cong An Ha Noi",
                            "name": "Cong An Ha Noi",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fi9Cs2QEI2dUAQOFpEjN-x.png"
                            }
                        },
                        "teamB": {
                            "id": "2x5ud25weyz16rn929qk2gym2",
                            "code": "SOL",
                            "short": "سونج لام آن",
                            "long": "سونج لام آن",
                            "full": "سونج لام آن",
                            "name": "سونج لام آن",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FGouhuA8LddhffOQnJCxoX.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "cesdwwnxbc5fmajgroc0hqzy2",
                    "name": "مباريات ودية",
                    "area": {
                        "name": "International"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F7yasa43laq1nb2e6f8bfuvxed.png"
                    }
                },
                "matches": [
                    {
                        "id": "1ugslJbhCd0bvBi1aXhcV",
                        "startDate": "2025-01-18T20:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-12-23T10:42:33.000Z",
                        "cachedAt": "2025-01-18T07:32:50.070Z",
                        "period": null,
                        "round": {
                            "name": "مباريات دولية ودية - منتخبات",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9vh2u1p4ppm597tjfahst2m3n",
                            "code": "أمر",
                            "short": "الولايات المتحدة الأمريكية",
                            "long": "الولايات المتحدة الأمريكية",
                            "full": "الولايات المتحدة الأمريكية",
                            "name": "الولايات المتحدة الأمريكية",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fe461ztKoUaa0f4z9d2KHV.png"
                            }
                        },
                        "teamB": {
                            "id": "2pguid8qwn158n8a58waenbbq",
                            "code": "VEN",
                            "short": "فنزويلا",
                            "long": "فنزويلا",
                            "full": "فنزويلا",
                            "name": "فنزويلا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FQyxvUyYD8RAUfgzl7jzf1.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "1zcp6rnjil25rnsv1ttcz3dhx",
                    "name": "دوري السوبر الألباني",
                    "area": {
                        "name": "Albania"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F17zsm8shejejls2on1ffil3op.png"
                    }
                },
                "matches": [
                    {
                        "id": "-0SFWO4A60DD9asL2WdOn",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T14:23:23.000Z",
                        "cachedAt": "2025-01-18T06:46:15.991Z",
                        "period": null,
                        "round": {
                            "name": "Kategoria Superiore",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2f2pcb72rvijnkapexty1acgi",
                            "code": "LAC",
                            "short": "لاسي",
                            "long": "لاسي",
                            "full": "لاسي",
                            "name": "لاسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F03EF3c3ClIz-TnkbiVR8_.png"
                            }
                        },
                        "teamB": {
                            "id": "16k5p7m6ixes1jqs4ma64k1j6",
                            "code": "BYL",
                            "short": "بايليس",
                            "long": "بايليس",
                            "full": "بايليس",
                            "name": "بايليس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fh413d4x5pTeHxW6nm0DGX.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "UZMBhkt1XOyARNRTpoKny",
                        "startDate": "2025-01-18T15:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-15T14:23:23.000Z",
                        "cachedAt": "2025-01-18T06:49:22.719Z",
                        "period": null,
                        "round": {
                            "name": "Kategoria Superiore",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "e5a3ui266dzcn56sbub3j027x",
                            "code": "TIR",
                            "short": "ك إف تيرانا",
                            "long": "ك إف تيرانا",
                            "full": "ك إف تيرانا",
                            "name": "ك إف تيرانا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FkFL2XI9pDyJjX0vaMnTaN.png"
                            }
                        },
                        "teamB": {
                            "id": "che78z4iaseye3rm58s8rbhyx",
                            "code": "EGN",
                            "short": "إيجناتيا",
                            "long": "إيجناتيا",
                            "full": "إيجناتيا",
                            "name": "إيجناتيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fuq7IJ1XfWK4rzdb7TlRbC.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "e1kxdivp5g4cpldgpwvnzl1vv",
                    "name": "المكسيك 2",
                    "area": {
                        "name": "Mexico"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F5trdr3jf42i20zj1hnkvcytr6.png"
                    }
                },
                "matches": [
                    {
                        "id": "NJAAZ7nPAXq5fNu2r0vC9",
                        "startDate": "2025-01-18T01:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-18T02:58:28.000Z",
                        "cachedAt": "2025-01-18T08:00:13.618Z",
                        "period": null,
                        "round": {
                            "name": "Liga de Expansion MX Clausura",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "1r6db93k6jes2kv6o0f6rusx5",
                            "code": "TEP",
                            "short": "Tepatitlan FC",
                            "long": "Tepatitlan FC",
                            "full": "Tepatitlan FC",
                            "name": "Tepatitlan FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FLAaxCrb-9Z81lOhJnmvIF.png"
                            }
                        },
                        "teamB": {
                            "id": "8rjclwo9p6pwa6v3y6i1sngbu",
                            "code": "CAN",
                            "short": "Cancun FC",
                            "long": "Cancun FC",
                            "full": "Cancun FC",
                            "name": "Cancun FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F7kvrdvlDr5LH04usppEZL.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 1,
                            "teamB": 1
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "6pIiZl0o-X5Hno8yakf-l",
                        "startDate": "2025-01-18T01:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-18T03:02:17.000Z",
                        "cachedAt": "2025-01-18T08:01:33.789Z",
                        "period": null,
                        "round": {
                            "name": "Liga de Expansion MX Clausura",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "4ghsMcplXnYRZSTJak0kt",
                            "code": "OAX",
                            "short": "Alebrijes Oaxaca",
                            "long": "Alebrijes Oaxaca",
                            "full": "Alebrijes Oaxaca",
                            "name": "Alebrijes Oaxaca",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJFh9C4zN9ljQvlsijdXt4.png"
                            }
                        },
                        "teamB": {
                            "id": "5ivtc1gd8ic11uojuvypoozu2",
                            "code": "MDZ",
                            "short": "إيستوديانتيس تيكوس",
                            "long": "إيستوديانتيس تيكوس",
                            "full": "إيستوديانتيس تيكوس",
                            "name": "إيستوديانتيس تيكوس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFZbXjTYHd2Hb62Vw7XmzP.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 0,
                            "teamB": 1
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "llFNw4OXh80zQz-j_hPC7",
                        "startDate": "2025-01-18T03:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-18T04:55:44.000Z",
                        "cachedAt": "2025-01-18T08:00:24.788Z",
                        "period": null,
                        "round": {
                            "name": "Liga de Expansion MX Clausura",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "b8v11vsx233o49n8jg3ya8opc",
                            "code": "MOM",
                            "short": "موناركاس ميريدا",
                            "long": "موناركاس ميريدا",
                            "full": "موناركاس ميريدا",
                            "name": "موناركاس ميريدا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FKQTP8CBqBcbrG5FHwy6v_.png"
                            }
                        },
                        "teamB": {
                            "id": "d7MtsQtS1A_nejPr7SvAO",
                            "code": "TAM",
                            "short": "جايبوس تامبيكو ماديرو",
                            "long": "جايبوس تامبيكو ماديرو",
                            "full": "جايبوس تامبيكو ماديرو",
                            "name": "جايبوس تامبيكو ماديرو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fpoae0RSREmclM8P_6Gix6.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 1,
                            "teamB": 2
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "nOrCKK3bgHoM7ybcNx7wU",
                        "startDate": "2025-01-18T03:05:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-18T05:03:10.000Z",
                        "cachedAt": "2025-01-18T08:05:37.701Z",
                        "period": null,
                        "round": {
                            "name": "Liga de Expansion MX Clausura",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "3yydy4z5h0gwpg2f9ctp98jmy",
                            "code": "TAP",
                            "short": "تاباتيو",
                            "long": "تاباتيو",
                            "full": "تاباتيو",
                            "name": "تاباتيو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F-C-CH0FkL-ScEIov5Ynm9.png"
                            }
                        },
                        "teamB": {
                            "id": "9rxhvtj7237l0p30ocyms8rwo",
                            "code": "ATM",
                            "short": "موريليا",
                            "long": "موريليا",
                            "full": "موريليا",
                            "name": "موريليا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F7yxADnd18W2WM5RzSzw9-.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 1,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "eo8sb5ohs5xw2s96ihfhbvgvy",
                    "name": "Paulista A1",
                    "area": {
                        "name": "Brazil"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F2vufyvpoxd9lfl9f6vpp7tz6y.png"
                    }
                },
                "matches": [
                    {
                        "id": "BjbVeQrTRPSvf0gVEmYrO",
                        "startDate": "2025-01-18T19:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-12-04T14:49:07.000Z",
                        "cachedAt": "2025-01-18T07:02:43.094Z",
                        "period": null,
                        "round": {
                            "name": "Paulista A1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9viv0cf5v7ngdxd4e4r2wxzb2",
                            "code": "IDL",
                            "short": "Inter de Limeira",
                            "long": "Inter de Limeira",
                            "full": "Inter de Limeira",
                            "name": "Inter de Limeira",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Flpvs2Ca9xh-llfGaUnhrJ.png"
                            }
                        },
                        "teamB": {
                            "id": "15akzajbqir3ko16ly444nz1i",
                            "code": "GUA",
                            "short": "جواراني",
                            "long": "جواراني",
                            "full": "جواراني",
                            "name": "جواراني",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fhk6XO753zb5OZh3u-QaS1.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "craznzmzk01hn9gjbj3g3mjah",
                    "name": "Mineiro",
                    "area": {
                        "name": "Brazil"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F2vufyvpoxd9lfl9f6vpp7tz6y.png"
                    }
                },
                "matches": [
                    {
                        "id": "i4KSjoBPAPOpo80oOuZic",
                        "startDate": "2025-01-18T20:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-12-08T12:17:00.000Z",
                        "cachedAt": "2025-01-18T06:52:47.377Z",
                        "period": null,
                        "round": {
                            "name": "Mineiro",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "_BfwfvaXfIcHeV00hrhbD",
                            "code": "POA",
                            "short": "Pouso Alegre",
                            "long": "Pouso Alegre",
                            "full": "Pouso Alegre",
                            "name": "Pouso Alegre",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FtGq8B0P7jjcI6QSgdh_m6.png"
                            }
                        },
                        "teamB": {
                            "id": "9snrf8lxwl8ih0ko7xaz88xrd",
                            "code": "ATH",
                            "short": "Athletic Club",
                            "long": "Athletic Club",
                            "full": "Athletic Club",
                            "name": "Athletic Club",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbvrkgVfkPBHu4PtFWRy5i.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "4sdxtqddcbnckfbb59m1xdalj",
                    "name": "Baiano",
                    "area": {
                        "name": "Brazil"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F2vufyvpoxd9lfl9f6vpp7tz6y.png"
                    }
                },
                "matches": [
                    {
                        "id": "U2be-NirppmreKg3MjraT",
                        "startDate": "2025-01-18T19:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-11-16T08:21:39.000Z",
                        "cachedAt": "2025-01-18T07:10:36.699Z",
                        "period": null,
                        "round": {
                            "name": "Baiano",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "b1ioi8h1faiwe8yst5pjto4ok",
                            "code": "JUA",
                            "short": "Juazeirense",
                            "long": "Juazeirense",
                            "full": "Juazeirense",
                            "name": "Juazeirense",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F_e0S2-31RShvc4fPPPfkm.png"
                            }
                        },
                        "teamB": {
                            "id": "HSLkEqyRI9021hCYFkNDG",
                            "code": "BAR",
                            "short": "Barcelona de Ilheus",
                            "long": "Barcelona de Ilheus",
                            "full": "Barcelona de Ilheus",
                            "name": "Barcelona de Ilheus",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FRcczz5Uxc2an6kGuPsMFh.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "b0dgf9ig6lyl992efpblsg3o5",
                    "name": "Carioca Taca Guanabara",
                    "area": {
                        "name": "Brazil"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F2vufyvpoxd9lfl9f6vpp7tz6y.png"
                    }
                },
                "matches": [
                    {
                        "id": "3jRLWk4RiQkuaPZ5gCVlz",
                        "startDate": "2025-01-18T19:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-11-28T07:20:43.000Z",
                        "cachedAt": "2025-01-18T07:17:49.618Z",
                        "period": null,
                        "round": {
                            "name": "Carioca Taca Guanabara",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3r4ytswq0pib2wu4i3ho8a0fe",
                            "code": "SAC",
                            "short": "Sampaio Correa RJ",
                            "long": "Sampaio Correa RJ",
                            "full": "Sampaio Correa RJ",
                            "name": "Sampaio Correa RJ",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F7fRQP03ttGt2A76MfaK8t.png"
                            }
                        },
                        "teamB": {
                            "id": "2x94b2pn1o1tb5l1bbu8x9yu9",
                            "code": "BRJ",
                            "short": "بوتافوجو",
                            "long": "بوتافوجو",
                            "full": "بوتافوجو",
                            "name": "بوتافوجو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F83rA2GDR3PO9XgAR7fR0z.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "8kt53kt3mfo29gldhkl05u25b",
                    "name": "كأس اسكتلندا 1",
                    "area": {
                        "name": "Scotland"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1xf68d0a8lnnq30hnnn8kr6ut.png"
                    }
                },
                "matches": [
                    {
                        "id": "s6KyW_ETi_dXryUCuFWDW",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "McDiarmid Park"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:35.000Z",
                        "cachedAt": "2025-01-18T06:43:04.894Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ez46dadmx0virt38cgeq2n6pf",
                            "code": "JOH",
                            "short": "سانت جونستون",
                            "long": "سانت جونستون",
                            "full": "سانت جونستون",
                            "name": "سانت جونستون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F8OYTdiGrjTwdotKkvXEIT.png"
                            }
                        },
                        "teamB": {
                            "id": "759fhii7hsnldanli06j5jmf6",
                            "code": "MOT",
                            "short": "ماذرويل",
                            "long": "ماذرويل",
                            "full": "ماذرويل",
                            "name": "ماذرويل",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FpP93FXnzYycoJEgiJgRQ9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "GF5WotcfiJ2MnAWHPW8dv",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Albyn Park"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:37.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "b9uIo7IH4D1SXywjtzP9t",
                            "code": "BAT",
                            "short": "Broxburn Athletic",
                            "long": "Broxburn Athletic",
                            "full": "Broxburn Athletic",
                            "name": "Broxburn Athletic",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4El-JSYxCx2uQzTxnRd-F.png"
                            }
                        },
                        "teamB": {
                            "id": "67w07p12d1dpxb6dhc51nbo2s",
                            "code": "Ayr",
                            "short": "آير",
                            "long": "آير",
                            "full": "آير",
                            "name": "آير",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJqN5iNFYc9L8QaGs441Lt.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "UmXgffuUzdxARMoEDIY-h",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Palmerston Park"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:35.000Z",
                        "cachedAt": "2025-01-18T07:14:46.534Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "d2im10yhwv15k8322rvfpqwun",
                            "code": "QOS",
                            "short": "كوين أوف ساوث",
                            "long": "كوين أوف ساوث",
                            "full": "كوين أوف ساوث",
                            "name": "كوين أوف ساوث",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F6L3BopVbRBHszHLG7w1G8.png"
                            }
                        },
                        "teamB": {
                            "id": "muo4d1nfi1vgyvz5n07tjmoo",
                            "code": "MIR",
                            "short": "سانت ميرين",
                            "long": "سانت ميرين",
                            "full": "سانت ميرين",
                            "name": "سانت ميرين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fv9KMC5w2M2mvTm7e4QcHm.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "_b4Du-OeV7zyghQcPrdt4",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Easter Road Stadium"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:35.000Z",
                        "cachedAt": "2025-01-18T07:45:58.090Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "c9ky1957qli8v2lylfga7io8b",
                            "code": "HIB",
                            "short": "هايبيرنيان",
                            "long": "هايبيرنيان",
                            "full": "هايبيرنيان",
                            "name": "هايبيرنيان",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F_B6zF7rSi6ZzWs2CoVA_4.png"
                            }
                        },
                        "teamB": {
                            "id": "XhNFsqu_t3ypU9efBUjJl",
                            "code": "CLY",
                            "short": "كلايدبانك",
                            "long": "كلايدبانك",
                            "full": "كلايدبانك",
                            "name": "كلايدبانك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F_r4lY8l72uaCS1LxZZNF7.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Ozhz_z31_xB_6mdZuL1MJ",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Balmoral Stadium"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:37.000Z",
                        "cachedAt": "2025-01-18T06:41:09.343Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5h4rnp2esggfyybvay8y0g8rg",
                            "code": "CRA",
                            "short": "كوف رينجرز",
                            "long": "كوف رينجرز",
                            "full": "كوف رينجرز",
                            "name": "كوف رينجرز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fo5uUN29TVFbS1aa_8WHbD.png"
                            }
                        },
                        "teamB": {
                            "id": "riezqp7jg324sfdljr5u1h52",
                            "code": "FOR",
                            "short": "فورفار",
                            "long": "فورفار",
                            "full": "فورفار",
                            "name": "فورفار",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Friezqp7jg324sfdljr5u1h52.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "5LFFSMVnTLQE0VniqjqVz",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "هامبدن بارك"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:37.000Z",
                        "cachedAt": "2025-01-18T06:45:40.749Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "69zo23fch5gs3engsrhq24yme",
                            "code": "QP",
                            "short": "كوينز بارك",
                            "long": "كوينز بارك",
                            "full": "كوينز بارك",
                            "name": "كوينز بارك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FomrcZFxmG8dTb8JKVvPe0.png"
                            }
                        },
                        "teamB": {
                            "id": "bp2ulamts479kyvoc1ksuxkcw",
                            "code": "MON",
                            "short": "مونتروز",
                            "long": "مونتروز",
                            "full": "مونتروز",
                            "name": "مونتروز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFwtLKEfUB46shSYQbOP2S.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "RMHFiFhhw-w1Hra539GWQ",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "KDM Group East End Park"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:35.000Z",
                        "cachedAt": "2025-01-18T06:49:58.803Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ii6qsv85a15vp2x67l6so95u",
                            "code": "DUN",
                            "short": "دونفرملاين",
                            "long": "دونفرملاين",
                            "full": "دونفرملاين",
                            "name": "دونفرملاين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Ff19-aPCTZmT53W1a0yHDB.png"
                            }
                        },
                        "teamB": {
                            "id": "9dw8ynebxu38mp1ad0m1pwg52",
                            "code": "STE",
                            "short": "ستينهاوسيموير",
                            "long": "ستينهاوسيموير",
                            "full": "ستينهاوسيموير",
                            "name": "ستينهاوسيموير",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FAK18jL7g6ewmOU8pQOs3-.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "R0xUXiM0aq1gNcBwhHRII",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Global Energy Stadium"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:37.000Z",
                        "cachedAt": "2025-01-18T06:41:09.343Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "87coxipr6ls77tnlba3eselx0",
                            "code": "ROS",
                            "short": "روس كاونتي",
                            "long": "روس كاونتي",
                            "full": "روس كاونتي",
                            "name": "روس كاونتي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F99CWltP6x8FiVkcvRLy3j.png"
                            }
                        },
                        "teamB": {
                            "id": "besu5lkqmra07drq1czpr0tk4",
                            "code": "LIV",
                            "short": "ليفنجستون",
                            "long": "ليفنجستون",
                            "full": "ليفنجستون",
                            "name": "ليفنجستون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FVfqJEysE2lww97puFCKM3.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "0hAPxEkF56QMXF2uKJDQQ",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "Borough Briggs"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:37.000Z",
                        "cachedAt": "2025-01-18T06:41:09.343Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "41vjoddkfdbt8zd6lfslyzjgp",
                            "code": "ELG",
                            "short": "إيلجين",
                            "long": "إيلجين",
                            "full": "إيلجين",
                            "name": "إيلجين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FobhJHtxjblnOVvHLTJ2iv.png"
                            }
                        },
                        "teamB": {
                            "id": "841zp0njrq63yv4fvw6lgf60q",
                            "code": "ABE",
                            "short": "أبردين",
                            "long": "أبردين",
                            "full": "أبردين",
                            "name": "أبردين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FsaOIIte70U3PrtA3XCCVW.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "T6fY5_M9FRo_sa_jBrF_F",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "The moreroom.com Stadium"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:37.000Z",
                        "cachedAt": "2025-01-18T06:41:09.343Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "26xa6n3u3blwn5ghs65rqqtbo",
                            "code": "DUM",
                            "short": "دومبارتون",
                            "long": "دومبارتون",
                            "full": "دومبارتون",
                            "name": "دومبارتون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FQQAuKszJTrcc26oPaXy7W.png"
                            }
                        },
                        "teamB": {
                            "id": "7owtsl6rlpitz290bh725b8th",
                            "code": "AIR",
                            "short": "آيردري",
                            "long": "آيردري",
                            "full": "آيردري",
                            "name": "آيردري",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FDVUmADkPJqA92mUFReV53.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "vpDVZmI0R1kjUUQ037CsL",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": {
                            "name": "ZLX Stadium"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:37.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "esrhmpplvk6qlzg3g6z1db87h",
                            "code": "HAM",
                            "short": "هاميلتون",
                            "long": "هاميلتون",
                            "full": "هاميلتون",
                            "name": "هاميلتون",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FmPD3G46K7Tfg23hP4RQYa.png"
                            }
                        },
                        "teamB": {
                            "id": "vbJDSjiCr1J-RXx0joaJw",
                            "code": "MBA",
                            "short": "Musselburgh Athletic",
                            "long": "Musselburgh Athletic",
                            "full": "Musselburgh Athletic",
                            "name": "Musselburgh Athletic",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNViTDdRO9ERO28NrQSQx4.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "gGbF2eRN4p3RdOPzVcMko",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": {
                            "name": "سيلتيك بارك"
                        },
                        "lastUpdatedAt": "2024-12-02T22:00:37.000Z",
                        "cachedAt": "2025-01-18T07:08:35.630Z",
                        "period": null,
                        "round": {
                            "name": "FA Cup",
                            "display": true
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dvnjvad3p09dugr79gktlrtll",
                            "code": "CEL",
                            "short": "سيلتيك",
                            "long": "سيلتيك",
                            "full": "سيلتيك",
                            "name": "سيلتيك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F8UxaQpw2CLkIbVb6i3Avz.png"
                            }
                        },
                        "teamB": {
                            "id": "enzoyc121va61wtmjf4cm7p3d",
                            "code": "KIL",
                            "short": "كيلمارنوك",
                            "long": "كيلمارنوك",
                            "full": "كيلمارنوك",
                            "name": "كيلمارنوك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FqIP59dFxLc-kkYVybZ1Dt.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "9p3nnxhdjahfn8qswpzy8oyc3",
                    "name": "A-League Women",
                    "area": {
                        "name": "Australia"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2Fu5ieemi69z72c3bgczyy68lo.png"
                    }
                },
                "matches": [
                    {
                        "id": "9dYjd_5liK2WDB21VnAN3",
                        "startDate": "2025-01-18T06:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-18T07:56:06.000Z",
                        "cachedAt": "2025-01-18T08:56:44.325Z",
                        "period": null,
                        "round": {
                            "name": "A-League Women",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "3xwecbfhkevrgr74iwq00yege",
                            "code": "CAU",
                            "short": "Canberra United FC",
                            "long": "Canberra United FC",
                            "full": "Canberra United FC",
                            "name": "Canberra United FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FjyVnvtG7EaGbanzt6iv9D.png"
                            }
                        },
                        "teamB": {
                            "id": "loj22mimups3h7xbyfjtwsi9",
                            "code": "WSW",
                            "short": "Western Sydney Wanderers FC",
                            "long": "Western Sydney Wanderers FC",
                            "full": "Western Sydney Wanderers FC",
                            "name": "Western Sydney Wanderers FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Floj22mimups3h7xbyfjtwsi9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 1,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "3llfgZ9vL60dVT6W191PN",
                        "startDate": "2025-01-18T07:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-18T08:56:07.000Z",
                        "cachedAt": "2025-01-18T08:56:55.926Z",
                        "period": null,
                        "round": {
                            "name": "A-League Women",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "trkzv6lll4lsq6r4bafwzxp8",
                            "code": "MEV",
                            "short": "Melbourne Victory",
                            "long": "Melbourne Victory",
                            "full": "Melbourne Victory",
                            "name": "Melbourne Victory",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FnSQ0y0hpLCnnmlULNg5bq.png"
                            }
                        },
                        "teamB": {
                            "id": "5m9xyscemfdaoshwv8w2nfij8",
                            "code": "PEG",
                            "short": "Perth Glory",
                            "long": "Perth Glory",
                            "full": "Perth Glory",
                            "name": "Perth Glory",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4XtkPdSo4PzjlEYB2PQZD.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 1,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "960sty6j8g82423zpmtu7eaee",
                    "name": "جويانو",
                    "area": {
                        "name": "Brazil"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F2vufyvpoxd9lfl9f6vpp7tz6y.png"
                    }
                },
                "matches": [
                    {
                        "id": "JFARRJwRghhACRFD19JhW",
                        "startDate": "2025-01-18T19:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-11-29T10:00:35.000Z",
                        "cachedAt": "2025-01-18T06:52:47.377Z",
                        "period": null,
                        "round": {
                            "name": "Goiano",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "5umkgpd22oex45aoco3wqgddl",
                            "code": "GOI",
                            "short": "جوياس",
                            "long": "جوياس",
                            "full": "جوياس",
                            "name": "جوياس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNITfpuWpempeLxB3-xOtP.png"
                            }
                        },
                        "teamB": {
                            "id": "yRMgIIRyFyKTtClt7a1vb",
                            "code": "CRA",
                            "short": "كراك",
                            "long": "كراك",
                            "full": "كراك",
                            "name": "كراك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FjjN1zFFttcMXS-uApOMUL.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "3za3jptdvgw580jjr9nhhhn6i",
                    "name": "قبرص 2",
                    "area": {
                        "name": "Cyprus"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F3om8cj5nhmq1rzzkykubm5icj.png"
                    }
                },
                "matches": [
                    {
                        "id": "s29sxPhM9cxXcXI1oyqer",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-13T16:34:14.000Z",
                        "cachedAt": "2025-01-18T07:12:06.446Z",
                        "period": null,
                        "round": {
                            "name": "2. Division Promotion Group",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bq2f4qok18jsefzb9ynynf1lh",
                            "code": "KRA",
                            "short": "Krasava Ypsonas FC",
                            "long": "Krasava Ypsonas FC",
                            "full": "Krasava Ypsonas FC",
                            "name": "Krasava Ypsonas FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FoGkZl0FB3EGToh9oxqSMi.png"
                            }
                        },
                        "teamB": {
                            "id": "6a7nsk6v804gx1efvbgfw42zh",
                            "code": "PAE",
                            "short": "باييك",
                            "long": "باييك",
                            "full": "باييك",
                            "name": "باييك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FShYzIykxK0ekomhaDqPeW.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "2xN3L3oUwialgf-uH4EP4",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-13T16:34:14.000Z",
                        "cachedAt": "2025-01-18T07:07:45.555Z",
                        "period": null,
                        "round": {
                            "name": "2. Division Promotion Group",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dl3gropyt4wp6ukro9c8dhxmh",
                            "code": "AKC",
                            "short": "أكريتاس كلوراكاس",
                            "long": "أكريتاس كلوراكاس",
                            "full": "أكريتاس كلوراكاس",
                            "name": "أكريتاس كلوراكاس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FH34ZFerQPafs7jkC84xtg.png"
                            }
                        },
                        "teamB": {
                            "id": "712d7rsbz9bs8r6g4gzly9j82",
                            "code": "AEZ",
                            "short": "AEZ Zakakiou",
                            "long": "AEZ Zakakiou",
                            "full": "AEZ Zakakiou",
                            "name": "AEZ Zakakiou",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FMrmzvig1PwotddpBYWjK5.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "3C1d2eLh8MEF58HV4BDWW",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-13T16:34:14.000Z",
                        "cachedAt": "2025-01-18T07:07:45.555Z",
                        "period": null,
                        "round": {
                            "name": "2. Division Promotion Group",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2csnjj9himmqzpbridbvcnnwp",
                            "code": "ONI",
                            "short": "أو إل نيفوسيا",
                            "long": "أو إل نيفوسيا",
                            "full": "أو إل نيفوسيا",
                            "name": "أو إل نيفوسيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F--NT-kTzNgDF42CkhJbC9.png"
                            }
                        },
                        "teamB": {
                            "id": "6hg7aj2jsf4it6n34upxf004n",
                            "code": "ASI",
                            "short": "آسيل لايسي",
                            "long": "آسيل لايسي",
                            "full": "آسيل لايسي",
                            "name": "آسيل لايسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F7M-dRNyeDZVPwSQ-h1UCt.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "P1OJGI3C48_Q_YldIpIN2",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-13T16:35:39.000Z",
                        "cachedAt": "2025-01-18T06:38:46.450Z",
                        "period": null,
                        "round": {
                            "name": "2. Division Relegation Group",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "hi8TJUnIcDvXaYG9uUnHN",
                            "code": "SPK",
                            "short": "Spartakos Kitiou",
                            "long": "Spartakos Kitiou",
                            "full": "Spartakos Kitiou",
                            "name": "Spartakos Kitiou",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fdefault.png"
                            }
                        },
                        "teamB": {
                            "id": "rh4i22unb10eru99zne4br5w",
                            "code": "OTA",
                            "short": "اوثولوس اثينو",
                            "long": "اوثولوس اثينو",
                            "full": "اوثولوس اثينو",
                            "name": "اوثولوس اثينو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FN0r1vi1g8yM4M8cn2RfkJ.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Oar7KAOwZn3n9jFDo6smM",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-13T16:35:39.000Z",
                        "cachedAt": "2025-01-18T07:09:18.044Z",
                        "period": null,
                        "round": {
                            "name": "2. Division Relegation Group",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "97ud9hi6d60g49aq04hv85mfa",
                            "code": "DOX",
                            "short": "دوكسا كاتوكوبيا",
                            "long": "دوكسا كاتوكوبيا",
                            "full": "دوكسا كاتوكوبيا",
                            "name": "دوكسا كاتوكوبيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FnBb2hAbQ1HBYb_p_y2axi.png"
                            }
                        },
                        "teamB": {
                            "id": "17eBrSAk-bmBqIYLDRjmp",
                            "code": "PEY",
                            "short": "Peyia 2014",
                            "long": "Peyia 2014",
                            "full": "Peyia 2014",
                            "name": "Peyia 2014",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FabxHGSFi7rNG9JhiTQFlV.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "FD3vc4PWLodd8KS0Pk_rm",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-13T16:35:39.000Z",
                        "cachedAt": "2025-01-18T06:49:22.719Z",
                        "period": null,
                        "round": {
                            "name": "2. Division Relegation Group",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dp2kv4umbuvvc6o7yf2gfd6yn",
                            "code": "MEA",
                            "short": "ميب نيسو",
                            "long": "ميب نيسو",
                            "full": "ميب نيسو",
                            "name": "ميب نيسو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FDDnDeh2Ox4JpN1BUNepsE.png"
                            }
                        },
                        "teamB": {
                            "id": "rCYhgqiTOsnG_6LFcvqkb",
                            "code": "AND",
                            "short": "أناغينيسي ديراينيا",
                            "long": "أناغينيسي ديراينيا",
                            "full": "أناغينيسي ديراينيا",
                            "name": "أناغينيسي ديراينيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FKNUEzW9uPiKRclYd-yvz4.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "rL6QA0pGZF-T0RFVkVZBI",
                        "startDate": "2025-01-18T12:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-13T16:35:39.000Z",
                        "cachedAt": "2025-01-18T06:42:49.415Z",
                        "period": null,
                        "round": {
                            "name": "2. Division Relegation Group",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "x7W3A04Y8MPqYtZPonYDk",
                            "code": "HAL",
                            "short": "هالكانوراس إيداليو",
                            "long": "هالكانوراس إيداليو",
                            "full": "هالكانوراس إيداليو",
                            "name": "هالكانوراس إيداليو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F6InALFZIfYaHR5uLcQtu-.png"
                            }
                        },
                        "teamB": {
                            "id": "3gnfvp7psp49w38j0jhr8afm6",
                            "code": "ANP",
                            "short": "آييا نابا",
                            "long": "آييا نابا",
                            "full": "آييا نابا",
                            "name": "آييا نابا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F0DDTH_wbpizlh_fOSgftv.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "btouq8t23agr62ij7e0ju5p6n",
                    "name": "قبرص 1",
                    "area": {
                        "name": "Cyprus"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F3om8cj5nhmq1rzzkykubm5icj.png"
                    }
                },
                "matches": [
                    {
                        "id": "hVpwWZGrznxFNIhY78S3J",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-10T12:14:51.000Z",
                        "cachedAt": "2025-01-18T06:52:42.419Z",
                        "period": null,
                        "round": {
                            "name": "Cyprus League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2qg4xmt2ucl2o5osmurwagw5g",
                            "code": "APO",
                            "short": "ابولون ليماسول",
                            "long": "ابولون ليماسول",
                            "full": "ابولون ليماسول",
                            "name": "ابولون ليماسول",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fygag_BiOWwtKYUrzEALuT.png"
                            }
                        },
                        "teamB": {
                            "id": "9zcbg0aj4dyrayb1hurpjwd4c",
                            "code": "KPP",
                            "short": "Karmiotissa Pano Polemidion",
                            "long": "Karmiotissa Pano Polemidion",
                            "full": "Karmiotissa Pano Polemidion",
                            "name": "Karmiotissa Pano Polemidion",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fe5Gt2P8-tGuegRPEPeJkg.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "vmsDdetcUh2y6pa0iLJtH",
                        "startDate": "2025-01-18T17:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-10T12:14:50.000Z",
                        "cachedAt": "2025-01-18T06:36:04.155Z",
                        "period": null,
                        "round": {
                            "name": "Cyprus League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "amj59k1dx265x2bsgv5tbeaum",
                            "code": "SAL",
                            "short": "نيا سالاميس",
                            "long": "نيا سالاميس",
                            "full": "نيا سالاميس",
                            "name": "نيا سالاميس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFNq8ld-fAebxLJSFdpA8H.png"
                            }
                        },
                        "teamB": {
                            "id": "9jwzj3xdnav8glojgp3xhj71t",
                            "code": "ANO",
                            "short": "أنورثوسيس",
                            "long": "أنورثوسيس",
                            "full": "أنورثوسيس",
                            "name": "أنورثوسيس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FrCxAoM-6U5hImlutOfRDm.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "7dfd12g9pk1y688q8km7tyspy",
                    "name": "Premier League U18",
                    "area": {
                        "name": "England"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1fk5l4hkqk12i7zske6mcqju6.png"
                    }
                },
                "matches": [
                    {
                        "id": "h7pzomUqLBEpMGLOkw2V1",
                        "startDate": "2025-01-18T12:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-15T13:30:25.000Z",
                        "cachedAt": "2025-01-18T06:35:36.465Z",
                        "period": null,
                        "round": {
                            "name": "Premier League U18",
                            "display": false
                        },
                        "status": "POSTPONED",
                        "teamA": {
                            "id": "etosnmjbp7yimtj3jwedbaa7v",
                            "code": "WOL",
                            "short": "Wolverhampton Wanderers U18",
                            "long": "Wolverhampton Wanderers U18",
                            "full": "Wolverhampton Wanderers U18",
                            "name": "Wolverhampton Wanderers U18",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FX864YTeIl79WH0pMmJ9IG.png"
                            }
                        },
                        "teamB": {
                            "id": "9dx3okqm6gfof56f9ajegsr6l",
                            "code": "EVE",
                            "short": "Everton U18",
                            "long": "Everton U18",
                            "full": "Everton U18",
                            "name": "Everton U18",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FoT-C2c9n-04BKtO9xlPuk.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "bXIBUptjBSL8dTr1XALey",
                        "startDate": "2025-01-18T12:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-15T13:30:22.000Z",
                        "cachedAt": "2025-01-18T06:47:53.438Z",
                        "period": null,
                        "round": {
                            "name": "Premier League U18",
                            "display": false
                        },
                        "status": "POSTPONED",
                        "teamA": {
                            "id": "2tp82ewhdsivjr0azggb63yv",
                            "code": "MUN",
                            "short": "Manchester United U18",
                            "long": "Manchester United U18",
                            "full": "Manchester United U18",
                            "name": "Manchester United U18",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FXuoLh0tebLRQqo1R00PMH.png"
                            }
                        },
                        "teamB": {
                            "id": "11jpmlhjt06osr591qx876qxh",
                            "code": "DCO",
                            "short": "Derby County U18",
                            "long": "Derby County U18",
                            "full": "Derby County U18",
                            "name": "Derby County U18",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFx2fhtvzffGze8vRtl0jp.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "joG1s9k0mljTqDJCrfcek",
                        "startDate": "2025-01-18T12:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-15T13:29:10.000Z",
                        "cachedAt": "2025-01-18T06:57:58.227Z",
                        "period": null,
                        "round": {
                            "name": "Premier League U18",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "f0pbqtl8qypz0hdba1sss8ssx",
                            "code": "LEC",
                            "short": "Leicester City U18",
                            "long": "Leicester City U18",
                            "full": "Leicester City U18",
                            "name": "Leicester City U18",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F90fE-cr7glWw0wKTBMjIG.png"
                            }
                        },
                        "teamB": {
                            "id": "bxunj0edon1mhlo4dccr0dtxx",
                            "code": "CPA",
                            "short": "Crystal Palace U18",
                            "long": "Crystal Palace U18",
                            "full": "Crystal Palace U18",
                            "name": "Crystal Palace U18",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F6I8yEc5CsdmyPtvspTvdN.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "phHh333PSK5VnGvkhSKxn",
                    "name": "احتياطيو إنجلترا 1",
                    "area": {
                        "name": "England"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1fk5l4hkqk12i7zske6mcqju6.png"
                    }
                },
                "matches": [
                    {
                        "id": "SvoDKKYD2AI3kZDBZ7dAZ",
                        "startDate": "2025-01-18T12:00:00.000Z",
                        "venue": {
                            "name": "Motspur Park"
                        },
                        "lastUpdatedAt": "2024-08-04T12:47:01.000Z",
                        "cachedAt": "2025-01-18T07:20:15.805Z",
                        "period": null,
                        "round": {
                            "name": "Premier League 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "YN7Q3RXHtpGpXLI0zxWo6",
                            "code": "FUL",
                            "short": "Fulham Academy",
                            "long": "Fulham Academy",
                            "full": "Fulham Academy",
                            "name": "Fulham Academy",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FCjQitf5ki3Eczk-SRZyjN.png"
                            }
                        },
                        "teamB": {
                            "id": "N-Y8WYbF6MXxUIrGGzsVs",
                            "code": "ARS",
                            "short": "Arsenal Academy",
                            "long": "Arsenal Academy",
                            "full": "Arsenal Academy",
                            "name": "Arsenal Academy",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fxge6wBUklUKhn-kCVG5A8.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "yrhzcz4SdBC4NWQXy-Ge1",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": {
                            "name": "لاميكس ستاديوم"
                        },
                        "lastUpdatedAt": "2024-08-04T12:47:04.000Z",
                        "cachedAt": "2025-01-18T06:47:53.438Z",
                        "period": null,
                        "round": {
                            "name": "Premier League 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "mpjkmSLnRgPbJSbHKMI4u",
                            "code": "TOT",
                            "short": "Tottenham Hotspur Academy",
                            "long": "Tottenham Hotspur Academy",
                            "full": "Tottenham Hotspur Academy",
                            "name": "Tottenham Hotspur Academy",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FKazeZKJXvMIiUOtp7tDZK.png"
                            }
                        },
                        "teamB": {
                            "id": "zo0yUpbm5Twf4E0Ed8HcB",
                            "code": "NAC",
                            "short": "Norwich City Academy",
                            "long": "Norwich City Academy",
                            "full": "Norwich City Academy",
                            "name": "Norwich City Academy",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FBTWUqUkyugNKXzgWVo6dH.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "e0GOHxF0JRaHRWzq6qIVM",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": {
                            "name": "Leigh Sports Village"
                        },
                        "lastUpdatedAt": "2025-01-17T12:49:09.000Z",
                        "cachedAt": "2025-01-18T07:49:17.328Z",
                        "period": null,
                        "round": {
                            "name": "Premier League 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "Sd28iW4N5Q2AJKooxRwOq",
                            "code": "MUA",
                            "short": "Manchester United Academy",
                            "long": "Manchester United Academy",
                            "full": "Manchester United Academy",
                            "name": "Manchester United Academy",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fiitth2SuWINAAbuJdqe7I.png"
                            }
                        },
                        "teamB": {
                            "id": "3xf38XYd7U5_iUuYlmkYC",
                            "code": "AVA",
                            "short": "Aston Villa Academy",
                            "long": "Aston Villa Academy",
                            "full": "Aston Villa Academy",
                            "name": "Aston Villa Academy",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fg5SZINOPcEJKEyOQNBCR0.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "KhgnFOEQT-TPnfyet8PsM",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": {
                            "name": "Liverpool Academy"
                        },
                        "lastUpdatedAt": "2025-01-16T10:24:28.000Z",
                        "cachedAt": "2025-01-18T06:51:03.307Z",
                        "period": null,
                        "round": {
                            "name": "Premier League 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "BfgR1oYGCgfhlMavnmDlg",
                            "code": "LFA",
                            "short": "Liverpool Academy",
                            "long": "Liverpool Academy",
                            "full": "Liverpool Academy",
                            "name": "Liverpool Academy",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FiAMPEXHgzYQAOfffHjSu0.png"
                            }
                        },
                        "teamB": {
                            "id": "VKJ9RDi3zZQxp30yX2Dc6",
                            "code": "WBA",
                            "short": "West Bromwich Albion Academy",
                            "long": "West Bromwich Albion Academy",
                            "full": "West Bromwich Albion Academy",
                            "name": "West Bromwich Albion Academy",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FH2TlkvIBGYCJ1oITnWrFd.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "6vq8j5p3av14nr3iuyi4okhjt",
                    "name": "دوري السوبر الإنجليزي للسيدات",
                    "area": {
                        "name": "England"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2F6vq8j5p3av14nr3iuyi4okhjt.png"
                    }
                },
                "matches": [
                    {
                        "id": "ms3XHanJoRzG5vksFp6w8",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": {
                            "name": "Walton Hall Park"
                        },
                        "lastUpdatedAt": "2024-07-22T14:13:15.000Z",
                        "cachedAt": "2025-01-18T07:09:01.581Z",
                        "period": null,
                        "round": {
                            "name": "WSL",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7kt37xy93vjy6wac8vq6fqz3g",
                            "code": "EVE",
                            "short": "Everton Women",
                            "long": "Everton Women",
                            "full": "Everton Women",
                            "name": "Everton Women",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FnCwwWnGUDBU_jPsOA5y9V.png"
                            }
                        },
                        "teamB": {
                            "id": "8l30dsub3sutr6j3ruvk650xc",
                            "code": "AVL",
                            "short": "Aston Villa Women",
                            "long": "Aston Villa Women",
                            "full": "Aston Villa Women",
                            "name": "Aston Villa Women",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FzN6UJAAdxaxh5redlkldB.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "1n990e5dpi9xwruwf6uslknkq",
                    "name": "كأس فنلندا 2",
                    "area": {
                        "name": "Finland"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F2u07e54v5dprsugdvddpq5ync.png"
                    }
                },
                "matches": [
                    {
                        "id": "wkv1QJdJ1Blqcg0DfEkEc",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-13T09:26:14.000Z",
                        "cachedAt": "2025-01-18T06:38:12.442Z",
                        "period": null,
                        "round": {
                            "name": "League Cup Grp. B",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "J-Mlq22glv-0xIWikI-qI",
                            "code": "KUP",
                            "short": "كوبس",
                            "long": "كوبس",
                            "full": "كوبس",
                            "name": "كوبس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FDBu9rTSBxnYXIdCYQYfF1.png"
                            }
                        },
                        "teamB": {
                            "id": "7D9wfUcADOPjQyDcAWbAe",
                            "code": "ILV",
                            "short": "إيلفيس",
                            "long": "إيلفيس",
                            "full": "إيلفيس",
                            "name": "إيلفيس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FwbvMdjEhqEXuxr8hVw-Jg.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "2aso72utuctat2ecs6nahjss6",
                    "name": "Division 1",
                    "area": {
                        "name": "France"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F7gww28djs405rfga69smki84o.png"
                    }
                },
                "matches": [
                    {
                        "id": "rwhRJqNYfj3lfineV7Kjh",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-19T07:31:20.000Z",
                        "cachedAt": "2025-01-18T06:52:23.327Z",
                        "period": null,
                        "round": {
                            "name": "Feminine",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bdfjkux9o0vtsdig5zsbhtysq",
                            "code": "PAR",
                            "short": "باريس للسيدات",
                            "long": "باريس للسيدات",
                            "full": "باريس للسيدات",
                            "name": "باريس للسيدات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FEfwJE5YyKNb35zFovOGiG.png"
                            }
                        },
                        "teamB": {
                            "id": "drnln5nhp7dqype6j3upkoiqp",
                            "code": "GUI",
                            "short": "Guingamp",
                            "long": "Guingamp",
                            "full": "Guingamp",
                            "name": "Guingamp",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJfjVrjfNRn4qRDbFkctJ9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "-OJ0o0Z_QHTazYiSpZhDG",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-19T07:31:20.000Z",
                        "cachedAt": "2025-01-18T07:45:07.352Z",
                        "period": null,
                        "round": {
                            "name": "Feminine",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "oLzYXS9H3PTIb3-dBg3NM",
                            "code": "NAN",
                            "short": "Nantes",
                            "long": "Nantes",
                            "full": "Nantes",
                            "name": "Nantes",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FoVG1a1OBpe2IPIU7ZZzcz.png"
                            }
                        },
                        "teamB": {
                            "id": "86c88s72zckr0kdwv0mu7kn3d",
                            "code": "SRS",
                            "short": "Reims",
                            "long": "Reims",
                            "full": "Reims",
                            "name": "Reims",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FegERgB9_kcD5vX1yVW8NU.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Jm2vEw2J1hCDQPP38Ujv4",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-19T07:31:20.000Z",
                        "cachedAt": "2025-01-18T06:44:47.602Z",
                        "period": null,
                        "round": {
                            "name": "Feminine",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2w4xxgpg4t4h5b3yl74egastz",
                            "code": "MON",
                            "short": "Montpellier",
                            "long": "Montpellier",
                            "full": "Montpellier",
                            "name": "Montpellier",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fb1_wDOTI6X6LeYNDKxbws.png"
                            }
                        },
                        "teamB": {
                            "id": "2gmv49xieg3zee2hx0lhcp17u",
                            "code": "LEH",
                            "short": "Le Havre",
                            "long": "Le Havre",
                            "full": "Le Havre",
                            "name": "Le Havre",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F-IU3GLiFPV7AgHhhaLIG_.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "FYiAhqEcP2ghdCRpihhK6",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-19T07:31:17.000Z",
                        "cachedAt": "2025-01-18T06:52:41.545Z",
                        "period": null,
                        "round": {
                            "name": "Feminine",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "axvm5zg0mk4bp06wpec9vw27e",
                            "code": "DIJ",
                            "short": "Dijon Foot",
                            "long": "Dijon Foot",
                            "full": "Dijon Foot",
                            "name": "Dijon Foot",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FjXyzQHHFXJlF5ypHKeeyM.png"
                            }
                        },
                        "teamB": {
                            "id": "1k0lKvwzbimBZ0LhtjiAF",
                            "code": "STR",
                            "short": "Strasbourg",
                            "long": "Strasbourg",
                            "full": "Strasbourg",
                            "name": "Strasbourg",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F5gC9VfeQ_Im3tAwqknvPn.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "cn6YfWAgyPiNjzNuzdsEH",
                        "startDate": "2025-01-18T20:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-19T07:31:20.000Z",
                        "cachedAt": "2025-01-18T07:14:20.124Z",
                        "period": null,
                        "round": {
                            "name": "Feminine",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ad9ip2f3tijbv4nqaayyqqkee",
                            "code": "PSG",
                            "short": "باريس سان جيرمان للسيدات",
                            "long": "باريس سان جيرمان للسيدات",
                            "full": "باريس سان جيرمان للسيدات",
                            "name": "باريس سان جيرمان للسيدات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F1iccTIvf8FHCylooZJ45_.png"
                            }
                        },
                        "teamB": {
                            "id": "e5hsx8fzufp57tv4oehbz0qht",
                            "code": "LYO",
                            "short": "ليون للسيدات",
                            "long": "ليون للسيدات",
                            "full": "ليون للسيدات",
                            "name": "ليون للسيدات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4uuNNXra0g3WH1dboeKib.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "4k8p8nmee0yjb7j7177474sx6",
                    "name": "اليونان 2",
                    "area": {
                        "name": "Greece"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F6lpgd60z890no2v46zdecrcss.png"
                    }
                },
                "matches": [
                    {
                        "id": "cWwFr96cdGjitMX2AmuQa",
                        "startDate": "2025-01-18T11:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-14T07:36:46.000Z",
                        "cachedAt": "2025-01-18T06:52:47.375Z",
                        "period": null,
                        "round": {
                            "name": "Super League 2 Grp. A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "Qq4tZ8SaBUyufPn6pq6zo",
                            "code": "DIA",
                            "short": "دياجوراس رودوس",
                            "long": "دياجوراس رودوس",
                            "full": "دياجوراس رودوس",
                            "name": "دياجوراس رودوس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FhuDbYF2E8nSLFDy6lOXxK.png"
                            }
                        },
                        "teamB": {
                            "id": "1kij1j9oyr97sxtd0hvgnre10",
                            "code": "GIA",
                            "short": "باس جيانينا",
                            "long": "باس جيانينا",
                            "full": "باس جيانينا",
                            "name": "باس جيانينا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FcskP-JCeCVPZJssBMUMnh.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "zh_9sf0Ks2XXiOKAI82Ac",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-14T07:36:46.000Z",
                        "cachedAt": "2025-01-18T06:52:47.375Z",
                        "period": null,
                        "round": {
                            "name": "Super League 2 Grp. A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3e1v5aemi3afarlqm4raxf7fc",
                            "code": "LAR",
                            "short": "لاريسا",
                            "long": "لاريسا",
                            "full": "لاريسا",
                            "name": "لاريسا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FP_164FB0GA3LLlmnbLx8M.png"
                            }
                        },
                        "teamB": {
                            "id": "2vv8g6589h8h6q0fvchjosxrl",
                            "code": "KAM",
                            "short": "Kampaniakos Chalastras",
                            "long": "Kampaniakos Chalastras",
                            "full": "Kampaniakos Chalastras",
                            "name": "Kampaniakos Chalastras",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F6dsmF9n0a_diKr0e_V0tV.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "sBFs0FJjYXzFKwqwFsYYC",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-14T07:36:46.000Z",
                        "cachedAt": "2025-01-18T06:52:47.426Z",
                        "period": null,
                        "round": {
                            "name": "Super League 2 Grp. A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "d67ukmmlv9re2azl14m0h6m1g",
                            "code": "PAO",
                            "short": "PAOK Thessaloniki FC B",
                            "long": "PAOK Thessaloniki FC B",
                            "full": "PAOK Thessaloniki FC B",
                            "name": "PAOK Thessaloniki FC B",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FxGEMppNjwYxRt4XZCOdsv.png"
                            }
                        },
                        "teamB": {
                            "id": "5LZQcAzui1UBowm9ukQXJ",
                            "code": "KAV",
                            "short": "كافالا",
                            "long": "كافالا",
                            "full": "كافالا",
                            "name": "كافالا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fn3xa_qf4iO6KLUpnnbMRt.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "4pohvulrkgzx38eoqse6b5cdg",
                    "name": "الهند 1",
                    "area": {
                        "name": "India"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2Fpu2isxryiewd7pvejah6oqex.png"
                    }
                },
                "matches": [
                    {
                        "id": "9HbeqF8G6xs4xmLeo0_rY",
                        "startDate": "2025-01-18T11:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-10-24T12:24:54.000Z",
                        "cachedAt": "2025-01-18T06:34:49.657Z",
                        "period": null,
                        "round": {
                            "name": "I-League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "fgIVxk-ZKEuDfVOgZTVca",
                            "code": "SDE",
                            "short": "Sreenidi Deccan FC",
                            "long": "Sreenidi Deccan FC",
                            "full": "Sreenidi Deccan FC",
                            "name": "Sreenidi Deccan FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F91o-uFIhFirOy9nZswBSI.png"
                            }
                        },
                        "teamB": {
                            "id": "95tq3rb1m0mybpacmti1km0fl",
                            "code": "LAJ",
                            "short": "لاجونغ",
                            "long": "لاجونغ",
                            "full": "لاجونغ",
                            "name": "لاجونغ",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FIDGV4nknVePyBdu57UB4W.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "0L_A34mc4j9YxE_CNErnJ",
                        "startDate": "2025-01-18T13:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-10-24T12:24:54.000Z",
                        "cachedAt": "2025-01-18T06:47:27.395Z",
                        "period": null,
                        "round": {
                            "name": "I-League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dxnec9qy01sniauygt93zs4r8",
                            "code": "IKA",
                            "short": "Inter Kashi",
                            "long": "Inter Kashi",
                            "full": "Inter Kashi",
                            "name": "Inter Kashi",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJ9aOCdyAufZ0KZqH7h7DZ.png"
                            }
                        },
                        "teamB": {
                            "id": "52oiz34tuvh22386o5gcgafiz",
                            "code": "AZW",
                            "short": "Aizawl FC",
                            "long": "Aizawl FC",
                            "full": "Aizawl FC",
                            "name": "Aizawl FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F6o57BSTExvdOiO3ppg_5c.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "117yqo02rs8dykkxpm274w3bd",
                    "name": "إندونيسيا 1",
                    "area": {
                        "name": "Indonesia"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fcompetition%2Fbadge%2Fsmall%2F117yqo02rs8dykkxpm274w3bd.png"
                    }
                },
                "matches": [
                    {
                        "id": "-splb22RHF_dZAis79Rdj",
                        "startDate": "2025-01-18T08:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-18T08:30:19.000Z",
                        "cachedAt": "2025-01-18T08:55:50.373Z",
                        "period": {
                            "type": "FIRST_HALF",
                            "minute": 26,
                            "extra": 0
                        },
                        "round": {
                            "name": "Liga 1",
                            "display": false
                        },
                        "status": "LIVE",
                        "teamA": {
                            "id": "6cemtkxnihjl7vkiuibivwbqb",
                            "code": "PSM",
                            "short": "بي أس أم ماكاسار",
                            "long": "بي أس أم ماكاسار",
                            "full": "بي أس أم ماكاسار",
                            "name": "بي أس أم ماكاسار",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fxs2bqAIxaneDe-P7ad5uw.png"
                            }
                        },
                        "teamB": {
                            "id": "4ghyfv0uu6fhx2mpdzxsjigxe",
                            "code": null,
                            "short": "PSBS Biak Numfor",
                            "long": "PSBS Biak Numfor",
                            "full": "PSBS Biak Numfor",
                            "name": "PSBS Biak Numfor",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4ghyfv0uu6fhx2mpdzxsjigxe.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "ws66wVzzblJqao_zfoWGR",
                        "startDate": "2025-01-18T12:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-30T12:04:53.000Z",
                        "cachedAt": "2025-01-18T06:42:52.879Z",
                        "period": null,
                        "round": {
                            "name": "Liga 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "32qnpiwdz8himhp4fjkwxfg8j",
                            "code": "PEJ",
                            "short": "بيليتا جايا",
                            "long": "بيليتا جايا",
                            "full": "بيليتا جايا",
                            "name": "بيليتا جايا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FR2f_xIV6EzVsWKyqAhPFH.png"
                            }
                        },
                        "teamB": {
                            "id": "c7nwkr3yxymdlhx1ju43zz1sl",
                            "code": "BAP",
                            "short": "Barito Putera",
                            "long": "Barito Putera",
                            "full": "Barito Putera",
                            "name": "Barito Putera",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Flqpm8IOdK-4BxYJ6xaXlp.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "4nidzmunvpvxk1ir9b6m8mpay",
                    "name": "وديات الأندية",
                    "area": {
                        "name": "International"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F7yasa43laq1nb2e6f8bfuvxed.png"
                    }
                },
                "matches": [
                    {
                        "id": "ytWMC3c_QxpSylpSrx8ov",
                        "startDate": "2025-01-18T11:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-12-19T05:55:14.000Z",
                        "cachedAt": "2025-01-18T07:08:42.052Z",
                        "period": null,
                        "round": {
                            "name": "مباريات ودية - أندية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "cftj6g399tknheudaxsdpfdgb",
                            "code": "VFF",
                            "short": "فيبورغ",
                            "long": "فيبورغ",
                            "full": "فيبورغ",
                            "name": "فيبورغ",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FtwxOXxobIcTwylJxo3bnG.png"
                            }
                        },
                        "teamB": {
                            "id": "36g6ifzjliec1jqnbtf7yesme",
                            "code": "AaB",
                            "short": "آب",
                            "long": "آب",
                            "full": "آب",
                            "name": "آب",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FkO2nOt_e09uPqYWld7pB7.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "8CGrPxa8brV8K1ErxEh14",
                        "startDate": "2025-01-18T11:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-01T08:46:30.000Z",
                        "cachedAt": "2025-01-18T06:47:46.140Z",
                        "period": null,
                        "round": {
                            "name": "مباريات ودية - أندية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "b3r6d8ydtmtjckam6pku9y400",
                            "code": "FCK",
                            "short": "إف سي كوبنهاجن",
                            "long": "إف سي كوبنهاجن",
                            "full": "إف سي كوبنهاجن",
                            "name": "إف سي كوبنهاجن",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F6fI5Od-fvYeXN0W0P6Y6t.png"
                            }
                        },
                        "teamB": {
                            "id": "anga7587r1zv4ey71ge9zxol3",
                            "code": "LYN",
                            "short": "لاينجبي",
                            "long": "لاينجبي",
                            "full": "لاينجبي",
                            "name": "لاينجبي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FAN4yoTnxlNbW2qMeHzSOT.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "RJEYYaxNav0Y7YkA44bHW",
                        "startDate": "2025-01-18T11:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-08T07:14:31.000Z",
                        "cachedAt": "2025-01-18T07:09:08.068Z",
                        "period": null,
                        "round": {
                            "name": "مباريات ودية - أندية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "-e2Ws3-hdfNQ5-1l25T__",
                            "code": "HOB",
                            "short": "هوبرو",
                            "long": "هوبرو",
                            "full": "هوبرو",
                            "name": "هوبرو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FHInwhghTdfCKp_MgETWYE.png"
                            }
                        },
                        "teamB": {
                            "id": "9w3sjm5ml4sjr2v81oxzdrt8v",
                            "code": "RAN",
                            "short": "رانديرز إف سي",
                            "long": "رانديرز إف سي",
                            "full": "رانديرز إف سي",
                            "name": "رانديرز إف سي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FxYG8qBN81zXlggv7dDw26.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "AcW1xp3ftjc4UIi0sVdwM",
                        "startDate": "2025-01-18T12:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-12-18T08:46:21.000Z",
                        "cachedAt": "2025-01-18T06:41:56.299Z",
                        "period": null,
                        "round": {
                            "name": "مباريات ودية - أندية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9qsmopgutr7ut5g6workk8w4i",
                            "code": "BIF",
                            "short": "بروندبي آي إف",
                            "long": "بروندبي آي إف",
                            "full": "بروندبي آي إف",
                            "name": "بروندبي آي إف",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FMIaToS5wmmu_7P8qHQXLw.png"
                            }
                        },
                        "teamB": {
                            "id": "8gxd9ry2580pu1b1dd5ny9ymy",
                            "code": "HIF",
                            "short": "هفيدوفر",
                            "long": "هفيدوفر",
                            "full": "هفيدوفر",
                            "name": "هفيدوفر",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FircRE4y4wvYWskcBBeyJM.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "5ghS9PbxitVg_rtaxxetT",
                        "startDate": "2025-01-18T12:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-14T07:16:55.000Z",
                        "cachedAt": "2025-01-18T07:31:05.295Z",
                        "period": null,
                        "round": {
                            "name": "مباريات ودية - أندية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "77tfx9me4aaqhzv78bmgsy9bg",
                            "code": "FCN",
                            "short": "إف سي نوردسيايلاند",
                            "long": "إف سي نوردسيايلاند",
                            "full": "إف سي نوردسيايلاند",
                            "name": "إف سي نوردسيايلاند",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FepUz-4Ys2oUs0PcIDMkTJ.png"
                            }
                        },
                        "teamB": {
                            "id": "VPZoZmsO4oQ6-T_XK03lH",
                            "code": "FCF",
                            "short": "فريدريسيا",
                            "long": "فريدريسيا",
                            "full": "فريدريسيا",
                            "name": "فريدريسيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FCdchrc5V5prm-dOwwLXBL.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "dBuF4k0WVzRDPxJVSENzA",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-12-13T10:11:12.000Z",
                        "cachedAt": "2025-01-18T06:43:04.894Z",
                        "period": null,
                        "round": {
                            "name": "مباريات ودية - أندية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "c165yjiny1qnmfdvefxvflnkc",
                            "code": "VB",
                            "short": "فييلي",
                            "long": "فييلي",
                            "full": "فييلي",
                            "name": "فييلي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FtZ9aCyhJzenzI5wqXOZQ8.png"
                            }
                        },
                        "teamB": {
                            "id": "ajtb177oqwawkdwbqhldmq6mx",
                            "code": "B93",
                            "short": "بي 93",
                            "long": "بي 93",
                            "full": "بي 93",
                            "name": "بي 93",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F01HpKVtKly9yIbVeNaXU4.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "XLbp3nPOEO23lwsG0N9Yd",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-12-23T11:43:41.000Z",
                        "cachedAt": "2025-01-18T06:50:55.687Z",
                        "period": null,
                        "round": {
                            "name": "مباريات ودية - أندية",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "eljjik2vvlpy6d649mgwwivam",
                            "code": "RW",
                            "short": "رابيد فيينا",
                            "long": "رابيد فيينا",
                            "full": "رابيد فيينا",
                            "name": "رابيد فيينا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F7azh_GcCpmtDssIxbKNHt.png"
                            }
                        },
                        "teamB": {
                            "id": "11DRwWwCeLyd-1NvixEdz",
                            "code": "STP",
                            "short": "سانت بولتين",
                            "long": "سانت بولتين",
                            "full": "سانت بولتين",
                            "name": "سانت بولتين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFL-hBHQCMeB2lb_Q0EK6S.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "duuc1qczfnawwncru1ly6o66",
                    "name": "دوري نجوم العراق",
                    "area": {
                        "name": "Iraq"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1uzblzx1s42jn6zk6hivjzby8.png"
                    }
                },
                "matches": [
                    {
                        "id": "df5VBUeM5dE7BR1SGJjbc",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-14T10:47:38.000Z",
                        "cachedAt": "2025-01-18T06:39:23.109Z",
                        "period": null,
                        "round": {
                            "name": "Stars League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "96ko8g5mdy9axwd0oy0am6qdf",
                            "code": "KAR",
                            "short": "كاربالا",
                            "long": "كاربالا",
                            "full": "كاربالا",
                            "name": "كاربالا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F0VM_eR4RoOT9fn09cYLoI.png"
                            }
                        },
                        "teamB": {
                            "id": "3tf8o60hef1owz6ya9qg0wc8d",
                            "code": "ALS",
                            "short": "الشرطة",
                            "long": "الشرطة",
                            "full": "الشرطة",
                            "name": "الشرطة",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FeCQHicpC7TDr0DK7j4kGi.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "scyHdX3NPLLf_k6Q0TuJj",
                        "startDate": "2025-01-18T16:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-14T10:47:38.000Z",
                        "cachedAt": "2025-01-18T06:46:17.607Z",
                        "period": null,
                        "round": {
                            "name": "Stars League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "n8hjroixjb18vav5jwpn933s",
                            "code": "ALQ",
                            "short": "القوة الجوية",
                            "long": "القوة الجوية",
                            "full": "القوة الجوية",
                            "name": "القوة الجوية",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FEoyBMqE4HhyToLqxHr_dC.png"
                            }
                        },
                        "teamB": {
                            "id": "bxooz5vx33sur1hkgmvdx9wmi",
                            "code": "QAS",
                            "short": "Al-Qasim",
                            "long": "Al-Qasim",
                            "full": "Al-Qasim",
                            "name": "Al-Qasim",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FVyHzd9Kc4azSrEYw_5bkz.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "2xg0qvif1rh7du6wmk2eleku3",
                    "name": "اسرائيل 1",
                    "area": {
                        "name": "Israel"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F4bnqn6mt5vyslpxfuqdrcmpgp.png"
                    }
                },
                "matches": [
                    {
                        "id": "U6sdnT0M3DVRktFa_102S",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-06-24T05:59:45.000Z",
                        "cachedAt": "2025-01-18T06:46:15.334Z",
                        "period": null,
                        "round": {
                            "name": "Ligat HaAl",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "e2ryr6aied781hzc7hx9yntk8",
                            "code": "IKS",
                            "short": "إيروني كريات شمونة",
                            "long": "إيروني كريات شمونة",
                            "full": "إيروني كريات شمونة",
                            "name": "إيروني كريات شمونة",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FgFwsJ3w-2Q9GvNDriOIHw.png"
                            }
                        },
                        "teamB": {
                            "id": "cx0rucvdzkg1yd00vrueu2u7",
                            "code": "BEI",
                            "short": "بيطار جيروسالم",
                            "long": "بيطار جيروسالم",
                            "full": "بيطار جيروسالم",
                            "name": "بيطار جيروسالم",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FuMx7TVVLSh7t1d03BvvLb.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "T1C21kJQnJcWKy2sUztsr",
                        "startDate": "2025-01-18T15:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-06-24T05:59:45.000Z",
                        "cachedAt": "2025-01-18T07:02:14.852Z",
                        "period": null,
                        "round": {
                            "name": "Ligat HaAl",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "54hbubv11m3ygghs51uperow9",
                            "code": "BSA",
                            "short": "أبناء سخنين",
                            "long": "أبناء سخنين",
                            "full": "أبناء سخنين",
                            "name": "أبناء سخنين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNbgIRI7O4Yh1Z2vbTbs7y.png"
                            }
                        },
                        "teamB": {
                            "id": "bglyqy0awtu6lzvpab390rir2",
                            "code": "MHA",
                            "short": "مكابي حيفا",
                            "long": "مكابي حيفا",
                            "full": "مكابي حيفا",
                            "name": "مكابي حيفا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FyyiPWT5EfWfZ8sFWQhZYZ.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "fmQaUB7Oj0IFl21NGkFgU",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-06-24T05:59:49.000Z",
                        "cachedAt": "2025-01-18T06:42:28.528Z",
                        "period": null,
                        "round": {
                            "name": "Ligat HaAl",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "bvgvmydv5tuf6lxvwvuwbrfje",
                            "code": "MBR",
                            "short": "Maccabi Bnei Raina",
                            "long": "Maccabi Bnei Raina",
                            "full": "Maccabi Bnei Raina",
                            "name": "Maccabi Bnei Raina",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Ftv4rfq5E4cBmGSytWFSQy.png"
                            }
                        },
                        "teamB": {
                            "id": "salasr5qer65t60k1e4c0vxf",
                            "code": "MAP",
                            "short": "ماكابي بيتاخ تيكفا",
                            "long": "ماكابي بيتاخ تيكفا",
                            "full": "ماكابي بيتاخ تيكفا",
                            "name": "ماكابي بيتاخ تيكفا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FIYXJ6wF-EPb0OkBPAc4pm.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "xX5h544EOaOGQFMfXcfNv",
                        "startDate": "2025-01-18T18:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-06-24T05:59:45.000Z",
                        "cachedAt": "2025-01-18T06:52:47.343Z",
                        "period": null,
                        "round": {
                            "name": "Ligat HaAl",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ealjallt13942jb2q2hk4buxa",
                            "code": "MTA",
                            "short": "مكابي تل أبيب",
                            "long": "مكابي تل أبيب",
                            "full": "مكابي تل أبيب",
                            "name": "مكابي تل أبيب",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Feg77ufkN4KXIaNnVmtS3N.png"
                            }
                        },
                        "teamB": {
                            "id": "6j9xcfzg0gp8j84yaoidmspaw",
                            "code": "MAN",
                            "short": "ماكابي نتانيا",
                            "long": "ماكابي نتانيا",
                            "full": "ماكابي نتانيا",
                            "name": "ماكابي نتانيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FnR0jBf25r5iUaNBJsNLeO.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "81txfenlgw75nq3u2nfdkj92o",
                    "name": "Serie A Femminile",
                    "area": {
                        "name": "Italy"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F25f2cmb2r8mk5rj92tzer6kvv.png"
                    }
                },
                "matches": [
                    {
                        "id": "GCUss7qnhzH0tL7v8LGsD",
                        "startDate": "2025-01-18T17:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-08T15:19:22.000Z",
                        "cachedAt": "2025-01-18T06:34:19.394Z",
                        "period": null,
                        "round": {
                            "name": "Serie A Femminile",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "7s17rgnqloyua7rco81zyqwcu",
                            "code": "NAP",
                            "short": "S.S.D. Napoli Femminile",
                            "long": "S.S.D. Napoli Femminile",
                            "full": "S.S.D. Napoli Femminile",
                            "name": "S.S.D. Napoli Femminile",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fv1GcGyWFDLVmtA-UT2e_A.png"
                            }
                        },
                        "teamB": {
                            "id": "8QAhpwL35HeJxp8WAErbq",
                            "code": "LAZ",
                            "short": "Lazio",
                            "long": "Lazio",
                            "full": "Lazio",
                            "name": "Lazio",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FKuL4POJg4347kC67lNwu7.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "7ut48s80k421xixh6ev5i6h62",
                    "name": "Liga MX Femenil",
                    "area": {
                        "name": "Mexico"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F5trdr3jf42i20zj1hnkvcytr6.png"
                    }
                },
                "matches": [
                    {
                        "id": "z7Hk5qUijh0sm3HgM-bhh",
                        "startDate": "2025-01-18T03:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-18T06:00:51.000Z",
                        "cachedAt": "2025-01-18T08:00:24.788Z",
                        "period": null,
                        "round": {
                            "name": "Clausura",
                            "display": false
                        },
                        "status": "RESULT",
                        "teamA": {
                            "id": "59pcxo6gjhl89dir02c9n1j6y",
                            "code": "TIJ",
                            "short": "Club Tijuana",
                            "long": "Club Tijuana",
                            "full": "Club Tijuana",
                            "name": "Club Tijuana",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FntIaNUK19UUxD1zgK9l0m.png"
                            }
                        },
                        "teamB": {
                            "id": "d4roblxk51drf8vfu33hiafe2",
                            "code": "TOL",
                            "short": "Toluca",
                            "long": "Toluca",
                            "full": "Toluca",
                            "name": "Toluca",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fd4roblxk51drf8vfu33hiafe2.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": {
                            "teamA": 3,
                            "teamB": 1
                        },
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "agpweohvn9tugnyl6ry4rhivp",
                    "name": "الدوري الهولندي",
                    "area": {
                        "name": "Netherlands"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F6hzi5pltnz67q4la8yli9qfv6.png"
                    }
                },
                "matches": [
                    {
                        "id": "l9mk0yHMcm0MQQ7DqpTh9",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-20T14:51:48.000Z",
                        "cachedAt": "2025-01-18T07:23:32.520Z",
                        "period": null,
                        "round": {
                            "name": "Eredivisie Vrouwen",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "ZbXPaMndyOLsxhx71gbbL",
                            "code": "TEL",
                            "short": "Telstar",
                            "long": "Telstar",
                            "full": "Telstar",
                            "name": "Telstar",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FBftQ5S09DLBWwsersdgad.png"
                            }
                        },
                        "teamB": {
                            "id": "p1DBPWYwf390OL9Zg0gxI",
                            "code": "ZWO",
                            "short": "PEC Zwolle",
                            "long": "PEC Zwolle",
                            "full": "PEC Zwolle",
                            "name": "PEC Zwolle",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FMIRMqYltXWtNiNTA0-96d.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "JJuImy6Zet5vvIzyjRU2t",
                        "startDate": "2025-01-18T15:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-20T14:51:48.000Z",
                        "cachedAt": "2025-01-18T07:13:22.277Z",
                        "period": null,
                        "round": {
                            "name": "Eredivisie Vrouwen",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "qtvG1Pcof2vOoKNOrwiOh",
                            "code": "PSV",
                            "short": "PSV",
                            "long": "PSV",
                            "full": "PSV",
                            "name": "PSV",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FfdDZSbE4B5fm29f_4YsSq.png"
                            }
                        },
                        "teamB": {
                            "id": "My_DXwB7G8k8wk4H8pO6W",
                            "code": "EXC",
                            "short": "Excelsior",
                            "long": "Excelsior",
                            "full": "Excelsior",
                            "name": "Excelsior",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FnjrWqNFSzXjt5zTUpD3aa.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "XTfvpfIhyxz33tq92I6vm",
                        "startDate": "2025-01-18T15:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-20T14:51:47.000Z",
                        "cachedAt": "2025-01-18T07:20:15.805Z",
                        "period": null,
                        "round": {
                            "name": "Eredivisie Vrouwen",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dHFB6zOkUMgxm3gnf05Wg",
                            "code": "FCT",
                            "short": "FC Twente",
                            "long": "FC Twente",
                            "full": "FC Twente",
                            "name": "FC Twente",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F_7bP3QgB5MzFvXTZY1Aq9.png"
                            }
                        },
                        "teamB": {
                            "id": "b8dlg2nlbrcm3f1vbb8bnqpec",
                            "code": "FSI",
                            "short": "Fortuna Sittard",
                            "long": "Fortuna Sittard",
                            "full": "Fortuna Sittard",
                            "name": "Fortuna Sittard",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F73D06yo8YEeR2u99wrLbm.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "913mb508il6jzwtlj28fl892h",
                    "name": "Tweede Divisie",
                    "area": {
                        "name": "Netherlands"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F6hzi5pltnz67q4la8yli9qfv6.png"
                    }
                },
                "matches": [
                    {
                        "id": "dlvkj_tuuPRNVxGPF5YYd",
                        "startDate": "2025-01-18T13:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-12T05:58:59.000Z",
                        "cachedAt": "2025-01-18T07:04:24.239Z",
                        "period": null,
                        "round": {
                            "name": "Tweede Divisie",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4n023mlm2lkfv4pmth3wd0lay",
                            "code": "KON",
                            "short": "كونينكليكي",
                            "long": "كونينكليكي",
                            "full": "كونينكليكي",
                            "name": "كونينكليكي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4n023mlm2lkfv4pmth3wd0lay.png"
                            }
                        },
                        "teamB": {
                            "id": "oJ9oYv7TaitjgkSSG12HA",
                            "code": "ACV",
                            "short": "أي سي في",
                            "long": "أي سي في",
                            "full": "أي سي في",
                            "name": "أي سي في",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FEzPa0TG31Nvw6suQ30_V9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "VThJrLa7OumYiNI9gIdm1",
                        "startDate": "2025-01-18T13:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-12T05:58:59.000Z",
                        "cachedAt": "2025-01-18T06:46:17.066Z",
                        "period": null,
                        "round": {
                            "name": "Tweede Divisie",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "c8xvzq0onty36h7h2vpre8man",
                            "code": "BAD",
                            "short": "باريندريكت",
                            "long": "باريندريكت",
                            "full": "باريندريكت",
                            "name": "باريندريكت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fc8xvzq0onty36h7h2vpre8man.png"
                            }
                        },
                        "teamB": {
                            "id": "wswR83w8d1PqMSN0vmwPZ",
                            "code": "MAA",
                            "short": "إيكسلسيور ماسلويس",
                            "long": "إيكسلسيور ماسلويس",
                            "full": "إيكسلسيور ماسلويس",
                            "name": "إيكسلسيور ماسلويس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fmkg47k7dlsAvRzINJrcr_.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "yho6bPStCIeG8-GlnUPU2",
                        "startDate": "2025-01-18T13:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-12T05:58:59.000Z",
                        "cachedAt": "2025-01-18T06:46:17.066Z",
                        "period": null,
                        "round": {
                            "name": "Tweede Divisie",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "OC6_W88Je50BJ70Lp1cZW",
                            "code": "SVV",
                            "short": "سكيفينينجين",
                            "long": "سكيفينينجين",
                            "full": "سكيفينينجين",
                            "name": "سكيفينينجين",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FaSvpfwV6bzrkhuTDOZKHr.png"
                            }
                        },
                        "teamB": {
                            "id": "J0nGkcecT-RHSIXpczaCo",
                            "code": "ALE",
                            "short": "Jong Almere City FC",
                            "long": "Jong Almere City FC",
                            "full": "Jong Almere City FC",
                            "name": "Jong Almere City FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F1ItvTfyR3kuZQeX45CCPW.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Vm2mLguZ9r3Y_X_ff8fDC",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-12T05:59:20.000Z",
                        "cachedAt": "2025-01-18T06:35:36.465Z",
                        "period": null,
                        "round": {
                            "name": "Tweede Divisie",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4t67k1iosj2cdk9dm1tvat4fz",
                            "code": "RIB",
                            "short": "راينسبورجسي بويز",
                            "long": "راينسبورجسي بويز",
                            "full": "راينسبورجسي بويز",
                            "name": "راينسبورجسي بويز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4t67k1iosj2cdk9dm1tvat4fz.png"
                            }
                        },
                        "teamB": {
                            "id": "0yYp1M-EqacJfRS-HNE-Q",
                            "code": "GVV",
                            "short": "فينيندال",
                            "long": "فينيندال",
                            "full": "فينيندال",
                            "name": "فينيندال",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F58Tp-uROSDbHqNJ-kCQB9.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "PQdytVsurRaN09sdPSnZw",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-12T05:59:20.000Z",
                        "cachedAt": "2025-01-18T06:46:17.066Z",
                        "period": null,
                        "round": {
                            "name": "Tweede Divisie",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3fop1w4uj3bxr7foyir3tn3j6",
                            "code": "SPA",
                            "short": "سباكينبورج",
                            "long": "سباكينبورج",
                            "full": "سباكينبورج",
                            "name": "سباكينبورج",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F3fop1w4uj3bxr7foyir3tn3j6.png"
                            }
                        },
                        "teamB": {
                            "id": "8HX9XNagauGxcdefGWCfO",
                            "code": "HHC",
                            "short": "إتش إتش سي",
                            "long": "إتش إتش سي",
                            "full": "إتش إتش سي",
                            "name": "إتش إتش سي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FystwNHxL20WW7c0-59mCJ.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Lw74-pUOvzyYgaO7mm9PR",
                        "startDate": "2025-01-18T14:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-12T05:58:59.000Z",
                        "cachedAt": "2025-01-18T06:45:49.529Z",
                        "period": null,
                        "round": {
                            "name": "Tweede Divisie",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "FBlykgAOTqH_X6RvItyNt",
                            "code": "SPR",
                            "short": "Jong Sparta Rotterdam",
                            "long": "Jong Sparta Rotterdam",
                            "full": "Jong Sparta Rotterdam",
                            "name": "Jong Sparta Rotterdam",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FRIN_JQM7aKb4CHFnjm6bC.png"
                            }
                        },
                        "teamB": {
                            "id": "AN9CxWD3uc1VgiDwYhn1P",
                            "code": "VOL",
                            "short": "RKAV Volendam",
                            "long": "RKAV Volendam",
                            "full": "RKAV Volendam",
                            "name": "RKAV Volendam",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fj72rnWZqtfdAVocGkrW-2.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "9HGGyujyMdOXFNNzK_7G-",
                        "startDate": "2025-01-18T14:15:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-16T10:56:10.000Z",
                        "cachedAt": "2025-01-18T07:38:39.609Z",
                        "period": null,
                        "round": {
                            "name": "Tweede Divisie",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dijso2y82a0ia2hjosumslmai",
                            "code": "AFC",
                            "short": "أي إف سي",
                            "long": "أي إف سي",
                            "full": "أي إف سي",
                            "name": "أي إف سي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fj9L4N3BguTAe3YKs1EkkX.png"
                            }
                        },
                        "teamB": {
                            "id": "1hzjfy8xpn4zfpdm1agvnqdp6",
                            "code": "KAT",
                            "short": "كاتفيك",
                            "long": "كاتفيك",
                            "full": "كاتفيك",
                            "name": "كاتفيك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F1hzjfy8xpn4zfpdm1agvnqdp6.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "4yzidekywejmxxp77gqmdgopg",
                    "name": "البرتغال 3",
                    "area": {
                        "name": "Portugal"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F1nbm5i9a0403zzvltn17lxinc.png"
                    }
                },
                "matches": [
                    {
                        "id": "2fS47jwfL9qwIHLzo1D6k",
                        "startDate": "2025-01-18T11:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-13T05:23:19.000Z",
                        "cachedAt": "2025-01-18T06:39:32.330Z",
                        "period": null,
                        "round": {
                            "name": "Liga 3 Zona A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "6a42k7iu4xx82sel1z5bhwee9",
                            "code": "BRA",
                            "short": "براغا 2",
                            "long": "براغا 2",
                            "full": "براغا 2",
                            "name": "براغا 2",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fdap1pUVCw-KhYSauZNXt4.png"
                            }
                        },
                        "teamB": {
                            "id": "f32f7fn4zmbmv2p73n8z9uwq2",
                            "code": "VIF",
                            "short": "فيلافيردينس",
                            "long": "فيلافيردينس",
                            "full": "فيلافيردينس",
                            "name": "فيلافيردينس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FRlda8PN9oWySloH9K9vLQ.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "JYBLOWE2K2sgkr9R2HsV1",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-13T05:23:19.000Z",
                        "cachedAt": "2025-01-18T06:44:52.445Z",
                        "period": null,
                        "round": {
                            "name": "Liga 3 Zona A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "axnshgnuwsxkjni5hq4r26iie",
                            "code": "AMA",
                            "short": "امارانت",
                            "long": "امارانت",
                            "full": "امارانت",
                            "name": "امارانت",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FomqItPuy2-mZFfqm_2Wq2.png"
                            }
                        },
                        "teamB": {
                            "id": "JaFtrQZBVyhiyOm5w__EU",
                            "code": "ADF",
                            "short": "أي دي فافي",
                            "long": "أي دي فافي",
                            "full": "أي دي فافي",
                            "name": "أي دي فافي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F_TR0sgtg0XSC0wwkkZcPs.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "eZaDfmW5ucDAF3kYPVmE0",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-17T13:04:18.000Z",
                        "cachedAt": "2025-01-18T06:44:52.444Z",
                        "period": null,
                        "round": {
                            "name": "Liga 3 Zona B",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "P4If2Rar7CvSICmFsvddC",
                            "code": "ACC",
                            "short": "Academica Coimbra SF",
                            "long": "Academica Coimbra SF",
                            "full": "Academica Coimbra SF",
                            "name": "Academica Coimbra SF",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fdefault.png"
                            }
                        },
                        "teamB": {
                            "id": "vm4r-fPEG2FBhBSzrRf3Q",
                            "code": "SUD",
                            "short": "ديزيمبرو.1",
                            "long": "ديزيمبرو.1",
                            "full": "ديزيمبرو.1",
                            "name": "ديزيمبرو.1",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4lIX3NFsAg1IMh0cFQsMl.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "A9cycca_-6qL_YGMdwkDX",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-15T12:12:22.000Z",
                        "cachedAt": "2025-01-18T06:44:59.564Z",
                        "period": null,
                        "round": {
                            "name": "Liga 3 Zona B",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "0tMd-V1TKC_EnJFrL9uGn",
                            "code": "LIS",
                            "short": "سبورتنج 2",
                            "long": "سبورتنج 2",
                            "full": "سبورتنج 2",
                            "name": "سبورتنج 2",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fkw_mSfd0DzQc5SjXKGB_b.png"
                            }
                        },
                        "teamB": {
                            "id": "6x8hnvh0kwd576v1ustzv6r30",
                            "code": "BEL",
                            "short": "CF Os Belenenses",
                            "long": "CF Os Belenenses",
                            "full": "CF Os Belenenses",
                            "name": "CF Os Belenenses",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FWgdHGKC7qLjdcwdtP60Rg.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "LWJGESocEZL11TZiAdqfZ",
                        "startDate": "2025-01-18T15:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-13T05:23:23.000Z",
                        "cachedAt": "2025-01-18T06:46:22.741Z",
                        "period": null,
                        "round": {
                            "name": "Liga 3 Zona A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3huujbewxi3af19b6vv5ijtas",
                            "code": "LOU",
                            "short": "Lusitania Lourosa",
                            "long": "Lusitania Lourosa",
                            "full": "Lusitania Lourosa",
                            "name": "Lusitania Lourosa",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FdB4UTDaXExdf7QfpeXpJz.png"
                            }
                        },
                        "teamB": {
                            "id": "4oahpdkygcd259ehwsdwdcc3o",
                            "code": "SAN",
                            "short": "سانخوانينسي",
                            "long": "سانخوانينسي",
                            "full": "سانخوانينسي",
                            "name": "سانخوانينسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F1w1uvrmyj1IyzkQR52g-2.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "BLQg9SdkwWt67K9YGiptI",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-13T05:23:23.000Z",
                        "cachedAt": "2025-01-18T06:34:49.657Z",
                        "period": null,
                        "round": {
                            "name": "Liga 3 Zona A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "eodlb0ahzy621huo1tw0p0kzl",
                            "code": "ANA",
                            "short": "أناديا",
                            "long": "أناديا",
                            "full": "أناديا",
                            "name": "أناديا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FYQl3eyrfctVkQ0dxnAy0e.png"
                            }
                        },
                        "teamB": {
                            "id": "NwtQTA_QXxedFsjAF1f5e",
                            "code": "SCJ",
                            "short": "ساو جواو فير",
                            "long": "ساو جواو فير",
                            "full": "ساو جواو فير",
                            "name": "ساو جواو فير",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FXLAfTYhrTbGxx-rRJ_bs6.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "D0ijxBRS1TXH0KsXr1BEF",
                        "startDate": "2025-01-18T20:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-13T05:23:23.000Z",
                        "cachedAt": "2025-01-18T06:30:05.763Z",
                        "period": null,
                        "round": {
                            "name": "Liga 3 Zona A",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dse1tfjrdzsckmtz1qpzlbaxi",
                            "code": "VAR",
                            "short": "فارزيم",
                            "long": "فارزيم",
                            "full": "فارزيم",
                            "name": "فارزيم",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJwti4djpnWFZbyjYNni9g.png"
                            }
                        },
                        "teamB": {
                            "id": "cud4wllxnak5zcd7oei6xrj25",
                            "code": "TRO",
                            "short": "تروفينسي",
                            "long": "تروفينسي",
                            "full": "تروفينسي",
                            "name": "تروفينسي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F0t6eWRkzaLz_XRDfYsMHM.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "LgVsUiJe7iLksVQDLtRaD",
                    "name": "سنغافورة 1",
                    "area": {
                        "name": "Singapore"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2Fi5ym1phxb6fliphj1xd6pydv.png"
                    }
                },
                "matches": [
                    {
                        "id": "ZtNsKEca-CVMJJr5KryW-",
                        "startDate": "2025-01-18T10:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-04-13T13:02:35.000Z",
                        "cachedAt": "2025-01-18T08:56:51.733Z",
                        "period": null,
                        "round": {
                            "name": "Premier League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "hXw90sPhBnV8-TZm1fzUm",
                            "code": "YOL",
                            "short": "يونغ ليونز",
                            "long": "يونغ ليونز",
                            "full": "يونغ ليونز",
                            "name": "يونغ ليونز",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fh5EdtW6blOwwmNDWi_HFC.png"
                            }
                        },
                        "teamB": {
                            "id": "ydvBgWDVWtRRYvveMiRkj",
                            "code": "TAP",
                            "short": "تانجونغ باغار",
                            "long": "تانجونغ باغار",
                            "full": "تانجونغ باغار",
                            "name": "تانجونغ باغار",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJAMBCpsIpjeqemZSOAohQ.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "zw5GR1FWiKEEEVQ_sZXKh",
                        "startDate": "2025-01-18T12:15:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-04-13T13:02:56.000Z",
                        "cachedAt": "2025-01-18T06:46:47.098Z",
                        "period": null,
                        "round": {
                            "name": "Premier League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "Okukk0FXj_NKfICxkqT8W",
                            "code": "BRD",
                            "short": "بروناي دي بي إم إم",
                            "long": "بروناي دي بي إم إم",
                            "full": "بروناي دي بي إم إم",
                            "name": "بروناي دي بي إم إم",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FAhjgO2PmAPBtUmUwW_09q.png"
                            }
                        },
                        "teamB": {
                            "id": "xDZLQ5v8wk1I8SihW2gEo",
                            "code": "GEI",
                            "short": "غايلانغ يونايتد إف سي",
                            "long": "غايلانغ يونايتد إف سي",
                            "full": "غايلانغ يونايتد إف سي",
                            "name": "غايلانغ يونايتد إف سي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fdefault.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "5k620c7y6dlbmcm88dt3eb7t",
                    "name": "Liga F",
                    "area": {
                        "name": "Spain"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F49ih1pwv3ahshdf8uzrimi54c.png"
                    }
                },
                "matches": [
                    {
                        "id": "xTZE3l7pUXK9iaEbO3Iec",
                        "startDate": "2025-01-18T11:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-08-20T09:47:34.000Z",
                        "cachedAt": "2025-01-18T06:48:57.503Z",
                        "period": null,
                        "round": {
                            "name": "Liga F",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "e7p3lxg97gac51s71hotzi0a5",
                            "code": "FLB",
                            "short": "ليفانتي بادالونا للسيدات",
                            "long": "ليفانتي بادالونا للسيدات",
                            "full": "ليفانتي بادالونا للسيدات",
                            "name": "ليفانتي بادالونا للسيدات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fjr2IqcJQ7-YfVfUQInY_5.png"
                            }
                        },
                        "teamB": {
                            "id": "8zt8rrm6v5nccv01v6pef0r1o",
                            "code": "AMA",
                            "short": "أتلتيكو مدريد للسيدات",
                            "long": "أتلتيكو مدريد للسيدات",
                            "full": "أتلتيكو مدريد للسيدات",
                            "name": "أتلتيكو مدريد للسيدات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FAFTmZnGz9A9oiq3C8VpVx.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "NI5csU3y6kCNFHD-Gf1xw",
                        "startDate": "2025-01-18T11:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-08-20T09:47:34.000Z",
                        "cachedAt": "2025-01-18T06:52:47.334Z",
                        "period": null,
                        "round": {
                            "name": "Liga F",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "2yt41edbtlrasj4t5nv3w64re",
                            "code": "GDF",
                            "short": "غرناطة للسيدات",
                            "long": "غرناطة للسيدات",
                            "full": "غرناطة للسيدات",
                            "name": "غرناطة للسيدات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fdp1P76OzivOWL_mZi1FHG.png"
                            }
                        },
                        "teamB": {
                            "id": "9ouh98eyf6u69lbxc13mllm7f",
                            "code": "GRA",
                            "short": "تينيريفي للسيدات",
                            "long": "تينيريفي للسيدات",
                            "full": "تينيريفي للسيدات",
                            "name": "تينيريفي للسيدات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbBcTKBG2M2UrSa-LMROFw.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "5tYz5jjCb9Ka5A4bnEOu3",
                        "startDate": "2025-01-18T15:15:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-08-20T09:47:34.000Z",
                        "cachedAt": "2025-01-18T07:00:54.253Z",
                        "period": null,
                        "round": {
                            "name": "Liga F",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1azk57wev30h044w949j46kpu",
                            "code": "ATB",
                            "short": "أتلتيك بيلباو للسيدات",
                            "long": "أتلتيك بيلباو للسيدات",
                            "full": "أتلتيك بيلباو للسيدات",
                            "name": "أتلتيك بيلباو للسيدات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FuSjvvCGR7PWcsn2mYst1G.png"
                            }
                        },
                        "teamB": {
                            "id": "bop6aslxmwvzsapdxsw3xbvfg",
                            "code": "BAR",
                            "short": "برشلونة للسيدات",
                            "long": "برشلونة للسيدات",
                            "full": "برشلونة للسيدات",
                            "name": "برشلونة للسيدات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FtoZCug6DR6edDTx1SvZQL.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "CjZwAsPVUVYQ6yPrIF8De",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-08-20T09:47:52.000Z",
                        "cachedAt": "2025-01-18T07:07:45.555Z",
                        "period": null,
                        "round": {
                            "name": "Liga F",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "4vvf3sulx3a61fiyaarjdndjs",
                            "code": "MRF",
                            "short": "مدريد للسيدات",
                            "long": "مدريد للسيدات",
                            "full": "مدريد للسيدات",
                            "name": "مدريد للسيدات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F-Ic-H-yUFzcDs1awZpYPU.png"
                            }
                        },
                        "teamB": {
                            "id": "cd1ottifbgcfrn6pdrdpwt7z0",
                            "code": "VAL",
                            "short": "فالنسيا للسيدات",
                            "long": "فالنسيا للسيدات",
                            "full": "فالنسيا للسيدات",
                            "name": "فالنسيا للسيدات",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FAVBXPDjxVEVlGMyrsZi-Q.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "4ad9sdnscsipc990sp5l5n1wq",
                    "name": "إسبانيا 3",
                    "area": {
                        "name": "Spain"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F49ih1pwv3ahshdf8uzrimi54c.png"
                    }
                },
                "matches": [
                    {
                        "id": "NmgHCkd0bnPKLoCmbCrgk",
                        "startDate": "2025-01-18T14:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-23T14:16:00.000Z",
                        "cachedAt": "2025-01-18T07:04:24.700Z",
                        "period": null,
                        "round": {
                            "name": "Primera Federacion - Group 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1yv0nsv98q2g8jwxeu0ji6ic0",
                            "code": "CAC",
                            "short": "AD Ceuta FC",
                            "long": "AD Ceuta FC",
                            "full": "AD Ceuta FC",
                            "name": "AD Ceuta FC",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FwwYiA1wIlPgULqhDyyW4J.png"
                            }
                        },
                        "teamB": {
                            "id": "A92YqtlHZWnQ12FNvQkJF",
                            "code": "SEB",
                            "short": "إشبيلية ب",
                            "long": "إشبيلية ب",
                            "full": "إشبيلية ب",
                            "name": "إشبيلية ب",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FobbhteGzwqdgC6JGLPcrU.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "b3oEF0YWnP9dJoUL2cWrG",
                        "startDate": "2025-01-18T17:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-23T13:02:39.000Z",
                        "cachedAt": "2025-01-18T07:06:08.967Z",
                        "period": null,
                        "round": {
                            "name": "Primera Federacion - Group 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "dejkjj1txyodk9z3aneh72ajj",
                            "code": "GSE",
                            "short": "سيجوفيانا",
                            "long": "سيجوفيانا",
                            "full": "سيجوفيانا",
                            "name": "سيجوفيانا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FBdl1qsUr2JxetwrO1Jrkb.png"
                            }
                        },
                        "teamB": {
                            "id": "2u27ga05xdj0odh4wd36ekciy",
                            "code": "ARE",
                            "short": "CD Arenteiro",
                            "long": "CD Arenteiro",
                            "full": "CD Arenteiro",
                            "name": "CD Arenteiro",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FcTs4a1ZRU_6rwYmx4xi0O.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "KbUgMXeika_sviu4D89XM",
                        "startDate": "2025-01-18T17:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-23T13:02:39.000Z",
                        "cachedAt": "2025-01-18T07:02:14.852Z",
                        "period": null,
                        "round": {
                            "name": "Primera Federacion - Group 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "8drpno9gdt807yn09qdud0kzb",
                            "code": "RSD",
                            "short": "ريال سوسيداد بي",
                            "long": "ريال سوسيداد بي",
                            "full": "ريال سوسيداد بي",
                            "name": "ريال سوسيداد بي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fd7Cq3BiQIDgZc4YqWqy3w.png"
                            }
                        },
                        "teamB": {
                            "id": "can2d5xm62diwps65shzbuo0s",
                            "code": "GIM",
                            "short": "جيمناستيك",
                            "long": "جيمناستيك",
                            "full": "جيمناستيك",
                            "name": "جيمناستيك",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FaohFK44yHmZJtN79jo_EM.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "lo6IXVK6IViTc0YWAr846",
                        "startDate": "2025-01-18T17:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-23T14:15:59.000Z",
                        "cachedAt": "2025-01-18T06:49:48.037Z",
                        "period": null,
                        "round": {
                            "name": "Primera Federacion - Group 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "9k1p1xqdeomcn74rikn52viet",
                            "code": "SAN",
                            "short": "أتلتيكو سانلوكوينو سي إف",
                            "long": "أتلتيكو سانلوكوينو سي إف",
                            "full": "أتلتيكو سانلوكوينو سي إف",
                            "name": "أتلتيكو سانلوكوينو سي إف",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F9k1p1xqdeomcn74rikn52viet.png"
                            }
                        },
                        "teamB": {
                            "id": "8ga3uecrob7wx8wxq5qk6aely",
                            "code": "YEC",
                            "short": "ييكلانو",
                            "long": "ييكلانو",
                            "full": "ييكلانو",
                            "name": "ييكلانو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F-z35JLLuNW3A0a0iRyr4N.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "m_iv8h_629PnFx7w5oB1B",
                        "startDate": "2025-01-18T19:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-23T14:15:59.000Z",
                        "cachedAt": "2025-01-18T06:43:04.894Z",
                        "period": null,
                        "round": {
                            "name": "Primera Federacion - Group 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "fh1a9w232smtl4ryzv22tili",
                            "code": "MUR",
                            "short": "مورسيا",
                            "long": "مورسيا",
                            "full": "مورسيا",
                            "name": "مورسيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FR-ZwQEjZfOrvUxXha9FD8.png"
                            }
                        },
                        "teamB": {
                            "id": "2ac6xqfb366lxbahotwd3e3u6",
                            "code": "HER",
                            "short": "هيركوليس",
                            "long": "هيركوليس",
                            "full": "هيركوليس",
                            "name": "هيركوليس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FqaoK1xloF96HHCFFTBi1Z.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "cegl2ivkc25blcatxp4jmk1ec",
                    "name": "إسبانيا 4",
                    "area": {
                        "name": "Spain"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F49ih1pwv3ahshdf8uzrimi54c.png"
                    }
                },
                "matches": [
                    {
                        "id": "M6oU5hpyffnvJ1LKFbaha",
                        "startDate": "2025-01-18T14:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-13T18:03:02.000Z",
                        "cachedAt": "2025-01-18T06:52:57.188Z",
                        "period": null,
                        "round": {
                            "name": "Segunda Federacion - Group 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3ntfustrdukhg6njybuvc42qg",
                            "code": "RAS",
                            "short": "راسينج سانتاندير بي",
                            "long": "راسينج سانتاندير بي",
                            "full": "راسينج سانتاندير بي",
                            "name": "راسينج سانتاندير بي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Frc9gIECEgxpjNKnzT3DWw.png"
                            }
                        },
                        "teamB": {
                            "id": "LIMvvRdEM9Pwh8FFiNVoB",
                            "code": "SAL",
                            "short": "Salamanca CF UDS",
                            "long": "Salamanca CF UDS",
                            "full": "Salamanca CF UDS",
                            "name": "Salamanca CF UDS",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fdefault.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "lBeYPJBaqhO883uGGDqww",
                        "startDate": "2025-01-18T15:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-24T11:21:24.000Z",
                        "cachedAt": "2025-01-18T06:44:59.320Z",
                        "period": null,
                        "round": {
                            "name": "Segunda Federacion - Group 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "TW8Z0Z-V1pKQL2Ddp2r9R",
                            "code": "EJE",
                            "short": "إيجيا",
                            "long": "إيجيا",
                            "full": "إيجيا",
                            "name": "إيجيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNDmVhRuHO9eB5nA4pYOpZ.png"
                            }
                        },
                        "teamB": {
                            "id": "2WB8oaMMvgQfotcGMBa2j",
                            "code": "CDB",
                            "short": "Real Sociedad C",
                            "long": "Real Sociedad C",
                            "full": "Real Sociedad C",
                            "name": "Real Sociedad C",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FNp6HXg1Lu6ihkpMpiY4Da.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "4HFz8FZe1uQ8Wnf_WKvEc",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-13T18:03:03.000Z",
                        "cachedAt": "2025-01-18T07:20:15.805Z",
                        "period": null,
                        "round": {
                            "name": "Segunda Federacion - Group 1",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "266uucawwa794vbh20s68uu76",
                            "code": "NUM",
                            "short": "نومانسيا",
                            "long": "نومانسيا",
                            "full": "نومانسيا",
                            "name": "نومانسيا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fo2vzvnCA9naGrtPfBk7Fh.png"
                            }
                        },
                        "teamB": {
                            "id": "6umv7uyng9xcmuymgjzn1g1bn",
                            "code": "COR",
                            "short": "كوروكسو إف سي",
                            "long": "كوروكسو إف سي",
                            "full": "كوروكسو إف سي",
                            "name": "كوروكسو إف سي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FiaYagVl9138OhkJ3R7QSA.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "go5q-O_qfLIfQdazO8b2l",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-24T11:21:24.000Z",
                        "cachedAt": "2025-01-18T06:46:22.741Z",
                        "period": null,
                        "round": {
                            "name": "Segunda Federacion - Group 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "1hv0ddeioqf2xnlzj4eroowjm",
                            "code": "TUD",
                            "short": "توديلانو",
                            "long": "توديلانو",
                            "full": "توديلانو",
                            "name": "توديلانو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FC-yVERWvE-4pf9uKsG2iD.png"
                            }
                        },
                        "teamB": {
                            "id": "Lk5DM7OnFFGfEMgHuRb2O",
                            "code": "CDS",
                            "short": "CD Subiza",
                            "long": "CD Subiza",
                            "full": "CD Subiza",
                            "name": "CD Subiza",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FtpvydUyqNCjF4opnrYLsS.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "OKLug1fVF-MMBCzbuFqYl",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-24T11:33:53.000Z",
                        "cachedAt": "2025-01-18T06:46:22.741Z",
                        "period": null,
                        "round": {
                            "name": "Segunda Federacion - Group 3",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "etKExw1kGZq6o0dcrHv1v",
                            "code": "VAL",
                            "short": "فالنسيا بي",
                            "long": "فالنسيا بي",
                            "full": "فالنسيا بي",
                            "name": "فالنسيا بي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2Fp7-RyaXmnt-LsahTWsOWl.png"
                            }
                        },
                        "teamB": {
                            "id": "e4ipcv4qs1wfkfb9vbr7q4og7",
                            "code": "ALZ",
                            "short": "آلزيرا",
                            "long": "آلزيرا",
                            "full": "آلزيرا",
                            "name": "آلزيرا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FbjtrzHfGMmSANooMyg2S5.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "tF6F11y7eTIKgSsOIxgu5",
                        "startDate": "2025-01-18T16:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-24T12:11:02.000Z",
                        "cachedAt": "2025-01-18T06:46:22.741Z",
                        "period": null,
                        "round": {
                            "name": "Segunda Federacion - Group 5",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "TZ5wIClwEdtvIfw7rA014",
                            "code": "SSR",
                            "short": "إس إس رييس",
                            "long": "إس إس رييس",
                            "full": "إس إس رييس",
                            "name": "إس إس رييس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FSNgTG5JzYXtnP7QDrDhdJ.png"
                            }
                        },
                        "teamB": {
                            "id": "Gbgo-aHuejN3UNucfwvrJ",
                            "code": "CDM",
                            "short": "سي دي موستوليس",
                            "long": "سي دي موستوليس",
                            "full": "سي دي موستوليس",
                            "name": "سي دي موستوليس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FJz4vV1Yzru9_zjWGvSNZK.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "4I6zu6VQzVVGASUNXosLO",
                        "startDate": "2025-01-18T17:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-24T11:33:34.000Z",
                        "cachedAt": "2025-01-18T06:46:47.098Z",
                        "period": null,
                        "round": {
                            "name": "Segunda Federacion - Group 3",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "3p658ija2vbb3r1w1wc2400uo",
                            "code": "ATL",
                            "short": "أت. باليريس",
                            "long": "أت. باليريس",
                            "full": "أت. باليريس",
                            "name": "أت. باليريس",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FaZm9jrQxcBnPq_VzTfkEG.png"
                            }
                        },
                        "teamB": {
                            "id": "cqjr21ihszcc80l2kj0x3igpm",
                            "code": "LLE",
                            "short": "لييدا",
                            "long": "لييدا",
                            "full": "لييدا",
                            "name": "لييدا",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FFiqDfNWSd3v5EuuBkiStl.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "cTcy1Duv2FrbL9Vn1BqbH",
                        "startDate": "2025-01-18T17:30:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2025-01-17T13:22:11.000Z",
                        "cachedAt": "2025-01-18T06:52:57.188Z",
                        "period": null,
                        "round": {
                            "name": "Segunda Federacion - Group 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "w6QzECj2F9thnUj4QPX22",
                            "code": "EIB",
                            "short": "آيبار بي",
                            "long": "آيبار بي",
                            "full": "آيبار بي",
                            "name": "آيبار بي",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FzJLVB9eLf31FJwRkTwgm_.png"
                            }
                        },
                        "teamB": {
                            "id": "9fjpcl4jmz24ds108o5lo024s",
                            "code": "BAR",
                            "short": "بارباسترو",
                            "long": "بارباسترو",
                            "full": "بارباسترو",
                            "name": "بارباسترو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F3Hps04SPCrWcLSVG9GYPY.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },
                    {
                        "id": "Y3CwBySpxWWtz9_g0I44j",
                        "startDate": "2025-01-18T18:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-07-24T11:21:23.000Z",
                        "cachedAt": "2025-01-18T08:04:25.683Z",
                        "period": null,
                        "round": {
                            "name": "Segunda Federacion - Group 2",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "d6nvkgtwizny6pz1ymw1ytb0q",
                            "code": "UTE",
                            "short": "Utebo",
                            "long": "Utebo",
                            "full": "Utebo",
                            "name": "Utebo",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F21434lRH24HeSauipnvR6.png"
                            }
                        },
                        "teamB": {
                            "id": "Qief2Fx1-2Fhgj97BdfTm",
                            "code": "ANG",
                            "short": "أنغويانو",
                            "long": "أنغويانو",
                            "full": "أنغويانو",
                            "name": "أنغويانو",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F1Fy0uMKAIiKXwXZpH8J4W.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    }
                ]
            },
            {
                "competition": {
                    "id": "iu1vi94p4p28oozl1h9bvplr",
                    "name": "تايلندا 1",
                    "area": {
                        "name": "Thailand"
                    },
                    "image": {
                        "url": "/api/image/competition/small.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fflags%2Fareas%2F50%2F71wqq15l0mvpl4lneayzzh44g.png"
                    }
                },
                "matches": [
                    {
                        "id": "kJ2LMgjcDa8o9av0-zCp1",
                        "startDate": "2025-01-18T11:00:00.000Z",
                        "venue": null,
                        "lastUpdatedAt": "2024-06-29T11:45:25.000Z",
                        "cachedAt": "2025-01-18T06:50:55.687Z",
                        "period": null,
                        "round": {
                            "name": "Thai League",
                            "display": false
                        },
                        "status": "FIXTURE",
                        "teamA": {
                            "id": "brl5p6f98sfr4bac3o1ms7rc",
                            "code": "CHI",
                            "short": "شنغري يونايتد",
                            "long": "شنغري يونايتد",
                            "full": "شنغري يونايتد",
                            "name": "شنغري يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2FARbYz-w5FldfjAtjfQCqu.png"
                            }
                        },
                        "teamB": {
                            "id": "drq4soebshygrssltwdwl142z",
                            "code": "BGP",
                            "short": "بانكوك جلاس باثوم يونايتد",
                            "long": "بانكوك جلاس باثوم يونايتد",
                            "full": "بانكوك جلاس باثوم يونايتد",
                            "name": "بانكوك جلاس باثوم يونايتد",
                            "image": {
                                "url": "/api/image/team/medium.png?url=https%3A%2F%2Fcdn.sportfeeds.io%2Fsdl%2Fimages%2Fteam%2Fcrest%2Fmedium%2F4fgGlvEtxZIAf7-2pu-DV.png"
                            }
                        },
                        "redCards": {
                            "teamA": 0,
                            "teamB": 0
                        },
                        "score": null,
                        "agg": null,
                        "penalty": null,
                        "tvChannel": null,
                        "bettingOddsDetailsList": []
                    },

                ]
            }
        ],
        "bettingAccasDetails": null,
        "bettingOffersDetails": null,
        "serverDate": "2025-01-18T08:57:29.319Z"
    }

    return (
        <div className="h-screen w-screen overflow-x-hidden flex flex-col justify-start items-center gap-2">




            <div className=" gap-2 flex sm:flex-row flex-col justify-center items-center p-2">
                <Navbar />
            </div>


            <nav className=" gap-1  flex sm:flex-row flex-col justify-center items-center">
                {[...Array(3)].map((_, index) => (
                    <iframe
                        key={index}
                        src="https://giphy.com/embed/DqILdGsqAUkms"
                        width="300"
                        height="100"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                ))}
            </nav>


            <section className=" flex flex-col p-2 h-screen">
                <article key={"main"} className="flex flex-row justify-center items-center">
                    <GradientText
                        colors={["#f8fafc", "#4079ff", "#86efac", "#4079ff", "#5eead4"]}
                        animationSpeed={6}
                        showBorder={false}
                        className="text-2xl font-extrabold p-2  text-center"
                    >
                        {new Date(data.serverDate).toLocaleString('ar-SA', {
                            weekday: 'long',
                        })
                        }
                        ,
                        {
                            new Date(data.serverDate).toLocaleString().split(",")[0]
                        }
                    </GradientText>


                </article>

                {data.liveScores.map((liveScore, index) => (
                    <article key={Math.random()} className="mb-4">
                        <GradientText
                            colors={[`#f8fa${index}${index}`, `#4079${index}${index}`,`#${index}${index}efac` ,"#4079ff", "#5eead4"]}
                            animationSpeed={6}
                            showBorder={false}
                            className="text-2xl font-extrabold p-2"
                        >
                            {liveScore.matches[0].round.name}
                        </GradientText>

                        {liveScore.matches.map((match) => (
                            <Link href={"/Watch/1"}>
                                <article key={Math.random()} className="p-4 border-b border-green-400">
                                    <div className="flex sm:flex-row flex-col flex-wrap justify-between items-center sm:gap-2">
                                        <div className='flex flex-row gap-1 justify-start items-center flex-1'>
                                            <img
                                                className="w-15 h-15"
                                                src={`https://www.goal.com${match.teamA.image.url}`}
                                                alt={match.teamA.name}
                                            />
                                            <p className="text-2xl font-extrabold">{match.teamA.name}</p>
                                        </div>
                                        <span className='text-2xl font-extrabold'>vs</span>
                                        <br className='hidden sm:block' />
                                        <div className='flex flex-row gap-1 justify-end items-center flex-1'>
                                            <p className="text-2xl font-extrabold">{match.teamB.name}</p>
                                            <img
                                                className="w-15 h-15"
                                                src={`https://www.goal.com${match.teamB.image.url}`}
                                                alt={match.teamB.name}
                                            />
                                        </div>
                                    </div>
                                    <p className='flex flex-col justify-center items-center text-xl font-extrabold'>{new Date(match.startDate).toLocaleString("en-SA", {
                                        timeZone: "Asia/Riyadh",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                    }).replace("AM", "ص").replace("PM", "م")}</p>
                                </article>
                            </Link>
                        ))}
                    </article>
                ))}
            </section>
        </div>

    );
}


