import Matches from "../db/Schemas/Matches.js";
const UseFetchMatches = async () => {
    const date = new Date();
    const TargetDate = date.toISOString().split("T")[0];
    console.log(`https://www.goal.com/api/live-scores/refresh?edition=ar&date=${TargetDate}&tzoffset=180`);
    try {
        const response = await fetch(`https://www.goal.com/api/live-scores/refresh?edition=ar&date=${TargetDate}&tzoffset=180`);
        const result = await response.json();
        await Matches.deleteMany();
        const targetMatches = result.liveScores.filter((liveScore) => {
            return liveScore.competition.id === "4oogyu6o156iphvdvphwpck10" ||  liveScore.competition.id === "4c1nfi2j1m731hcay25fcgndq"  || liveScore.competition.id === "482ofyysbdbeoxauk19yg7tdt" || liveScore.competition.id === "2kwbbcootiqqgmrzs6o5inle5" || liveScore.competition.id === "34pl8szyvrbwcmfkuocjm3r6t" || liveScore.competition.id === "1r097lpxe0xn03ihb7wi98kao" || liveScore.competition.id === "6by3h89i2eykc341oz7lv1ddd" || liveScore.competition.id === "dm5ka0os1e3dxcp3vh05kmp33" || liveScore.competition.id === "akmkihra9ruad09ljapsm84b3"
        });
        const newMatchesList = new Matches({
            liveScores: targetMatches,
            serverDate: result.serverDate,
        })
        await newMatchesList.save()
    } catch (error) {
        console.log(error);
    }
}

export default UseFetchMatches;
