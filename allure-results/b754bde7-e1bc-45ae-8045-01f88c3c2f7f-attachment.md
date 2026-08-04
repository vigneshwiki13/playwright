# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\MoreValidation.spec.js >> Navigation
- Location: tests\UI\MoreValidation.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#displayed-text')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#displayed-text')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]:
        - img [ref=e16]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/%3Fzx%3D1779789484938&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e23]
  - search [ref=e31]:
    - generic [ref=e33]:
      - generic [ref=e35]:
        - button "Add files and tools" [ref=e40] [cursor=pointer]:
          - img [ref=e42]
        - combobox "Search" [active] [ref=e45]
        - generic [ref=e46]:
          - generic [ref=e47]:
            - button "Search by voice" [ref=e50] [cursor=pointer]:
              - img [ref=e51]
            - button "Search by image" [ref=e55] [cursor=pointer]:
              - img [ref=e56]
          - link "AI Mode" [ref=e58] [cursor=pointer]:
            - generic [ref=e60]:
              - img [ref=e62]
              - generic [ref=e69]: AI Mode
      - generic [ref=e71]:
        - button "Google Search" [ref=e72] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e73] [cursor=pointer]
  - generic [ref=e76]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e77] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_ajSVUXKEBmUfzj8xkaPnYkFwBMg%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjFqtzZwoGWAxUUR2wGHUOIGaAQ2ZgBCCw
    - link "বাংলা" [ref=e78] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_ajSVUXKEBmUfzj8xkaPnYkFwBMg%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjFqtzZwoGWAxUUR2wGHUOIGaAQ2ZgBCC0
    - link "తెలుగు" [ref=e79] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_ajSVUXKEBmUfzj8xkaPnYkFwBMg%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjFqtzZwoGWAxUUR2wGHUOIGaAQ2ZgBCC4
    - link "मराठी" [ref=e80] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_ajSVUXKEBmUfzj8xkaPnYkFwBMg%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjFqtzZwoGWAxUUR2wGHUOIGaAQ2ZgBCC8
    - link "தமிழ்" [ref=e81] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_ajSVUXKEBmUfzj8xkaPnYkFwBMg%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjFqtzZwoGWAxUUR2wGHUOIGaAQ2ZgBCDA
    - link "ગુજરાતી" [ref=e82] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_ajSVUXKEBmUfzj8xkaPnYkFwBMg%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjFqtzZwoGWAxUUR2wGHUOIGaAQ2ZgBCDE
    - link "ಕನ್ನಡ" [ref=e83] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_ajSVUXKEBmUfzj8xkaPnYkFwBMg%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjFqtzZwoGWAxUUR2wGHUOIGaAQ2ZgBCDI
    - link "മലയാളം" [ref=e84] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_ajSVUXKEBmUfzj8xkaPnYkFwBMg%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjFqtzZwoGWAxUUR2wGHUOIGaAQ2ZgBCDM
    - link "ਪੰਜਾਬੀ" [ref=e85] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_ajSVUXKEBmUfzj8xkaPnYkFwBMg%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjFqtzZwoGWAxUUR2wGHUOIGaAQ2ZgBCDQ
  - contentinfo [ref=e87]:
    - generic [ref=e88]: India
    - generic [ref=e89]:
      - generic [ref=e90]:
        - link "Advertising" [ref=e91] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e92] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e93] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e94]:
        - link "Privacy" [ref=e95] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e96] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e100] [cursor=pointer]:
          - generic [ref=e101]: Settings
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | 
  3  | test("Navigation",async({page})=>
  4  |     {
  5  |         await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  6  |         await page.goto("https://www.google.com/?zx=1779789484938");
  7  |         await page.goBack();
  8  |         // await page.goForward();
  9  | 
> 10 |         await expect(page.locator("#displayed-text")).toBeVisible();
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  11 |         await page.locator("#hide-textbox").click();
  12 |         await expect(page.locator("#displayed-text")).toBeHidden();
  13 | // await page.pause();
  14 | // Js or dialog
  15 |         await page.locator("#confirmbtn").click();
  16 |         page.on('dialog',dialog=>dialog.dismiss())
  17 |     await page.locator("#alertbtn").click()        
  18 |         await page.locator("#mousehover").hover()
  19 | 
  20 | // Frames
  21 |         const framePage = await page.frameLocator("#courses-iframe");
  22 |         const allAccessPlanBtn = await framePage.locator("li a[href='lifetime-access']:visible").click()
  23 |         let text = await framePage.locator(".text h2").textContent();
  24 |         console.log(text.split(" ")[1])
  25 | 
  26 | 
  27 | 
  28 | 
  29 | 
  30 |     })
```