let api = "https://content.guardianapis.com/search?api-key=9fe99422-f5d1-421f-9306-fe3b42ef2715";

fetch(api).then(res => res.json()).then(data => console.log(data)).catch(err = console.log(err));