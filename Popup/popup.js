const buildwithURL = "https://humadosya.netlify.app/";
const netcraft = "http://egehan.pythonanywhere.com/";
const wayBackMachine = "https://vastseasaver.web.app/";
const nsLookup = "https://vastseablog.com/";
const openSoda = "https://opensoda.vercel.app";

function getCurrentTab(callback) {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {  //should only return 1 (the current windows that is active).
      callback(tabs[0])
  });
}

function newTabAndSearch(siteSearch, domainOnly) {
  getCurrentTab((tabToQuarry) => {
      if (tabToQuarry.url != "about:newtab"){  //ensure that tabToQuarry is not a new tab (blank url).
        if (domainOnly == true){  //if true, only quarry url domain.
          browser.tabs.create({  //create new tab
            url: siteSearch  
            });
        } else {
          browser.tabs.create({  //create new tab
            url: siteSearch 
            });
        }
      }
  });
}

//Adds listeners to see if button is click:
document.getElementById("buildwith").addEventListener("click", () => newTabAndSearch(buildwithURL));
document.getElementById("netcraft").addEventListener("click", () => newTabAndSearch(netcraft));
document.getElementById("nsLookup").addEventListener("click", () => newTabAndSearch(nsLookup));
document.getElementById("WayBackMachine").addEventListener("click", () => newTabAndSearch(wayBackMachine));
document.getElementById("openSoda").addEventListener("click", () => newTabAndSearch(openSoda);

document.getElementById("all").addEventListener("click", () => {
  newTabAndSearch(buildwithURL)
  newTabAndSearch(netcraft)
  newTabAndSearch(nsLookup)
  newTabAndSearch(wayBackMachine)
  newTabAndSearch(openSoda)
});
