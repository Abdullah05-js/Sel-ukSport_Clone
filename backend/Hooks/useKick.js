import puppeteer from 'puppeteer';

export default async function useKick(channel,pid) {
try {
        const browser = await puppeteer.launch({ headless: true,args: ["--no-sandbox"]}); 
        const page = await browser.newPage();
        
      
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
        
    
        await page.goto(`https://kick.com/api/v2/channels/${channel}/livestream`, { waitUntil: 'networkidle2' });
    
    
        const content = await page.evaluate(() => document.body.innerText);
        
        await browser.close();
        return JSON.parse(content);
} catch (error) {
    console.log(error);
    return process.kill(pid,"SIGTERM")
}
}