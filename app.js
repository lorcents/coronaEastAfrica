 
    const keFunction = () => {
        fetch("https://api.covid19api.com/summary")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            const countryDetails = data.Countries.find(
              (country) => country.Country === "Kenya"
            );
            const cases = countryDetails.TotalConfirmed;
            const recovery = countryDetails.TotalRecovered;
            const deaths = countryDetails.TotalDeaths;
            
            document.getElementById("cases").innerHTML=cases.toLocaleString("en");
            document.getElementById("recovery").innerHTML=recovery.toLocaleString("en");
            document.getElementById("deaths").innerHTML=deaths.toLocaleString("en");
            document.getElementById("country").innerHTML="KENYA";
            
 });
};


const tzFunction = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const countryDetails = data.Countries.find(
          (country) => country.Country === "Tanzania, United Republic of"
        );
        const cases = countryDetails.TotalConfirmed;
        const recovery = countryDetails.TotalRecovered;
        const deaths = countryDetails.TotalDeaths;
        
        document.getElementById("cases").innerHTML=cases.toLocaleString("en");
        document.getElementById("recovery").innerHTML=recovery.toLocaleString("en");
        document.getElementById("deaths").innerHTML=deaths.toLocaleString("en");
        document.getElementById("country").innerHTML="TANZANIA";
        
});
};

  

const ugFunction = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const countryDetails = data.Countries.find(
          (country) => country.Country === "Uganda"
        );
        const cases = countryDetails.TotalConfirmed;
        const recovery = countryDetails.TotalRecovered;
        const deaths = countryDetails.TotalDeaths;
        
        document.getElementById("cases").innerHTML=cases.toLocaleString("en");
        document.getElementById("recovery").innerHTML=recovery.toLocaleString("en");
        document.getElementById("deaths").innerHTML=deaths.toLocaleString("en");
        document.getElementById("country").innerHTML="UGANDA";
        
});
};
