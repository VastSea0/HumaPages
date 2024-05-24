const buildwithURL = "https://humadosya.netlify.app/";
const netcraft = "http://egehan.pythonanywhere.com/";
const wayBackMachine = "https://vastseasaver.web.app/";
const nsLookup = "https://vastseablog.com/";
const openSoda = "https://opensoda.vercel.app";

function getCurrentTab(callback) {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {   
      callback(tabs[0])
  });
}

function newTabAndSearch(siteSearch, domainOnly) {
  getCurrentTab((tabToQuarry) => {
      if (tabToQuarry.url != "about:newtab"){   
        if (domainOnly == true){   
          browser.tabs.create({  //yeni sekme oluştur
            url: siteSearch  
            });
        } else {
          browser.tabs.create({  //yeni sekme oluştur
            url: siteSearch 
            });
        }
      }
  });
}

//Dinleyicileri ekle
document.getElementById("buildwith").addEventListener("click", () => newTabAndSearch(buildwithURL));
document.getElementById("netcraft").addEventListener("click", () => newTabAndSearch(netcraft));
document.getElementById("nsLookup").addEventListener("click", () => newTabAndSearch(nsLookup));
document.getElementById("WayBackMachine").addEventListener("click", () => newTabAndSearch(wayBackMachine));
document.getElementById("openSoda").addEventListener("click", () => newTabAndSearch(openSoda));

document.getElementById("all").addEventListener("click", () => {
  newTabAndSearch(buildwithURL)
  newTabAndSearch(netcraft)
  newTabAndSearch(nsLookup)
  newTabAndSearch(wayBackMachine)
  newTabAndSearch(openSoda)
});
