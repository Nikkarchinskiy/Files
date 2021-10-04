

    try {
        let year = prompt("please enter the year");

        if (year === null) {
            console.log('you click on cancel please refresh page and try later');
        } else {
            if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
               console.log("leap year");
            } else {
                console.log("Not-Leap Year");
            }
        }
    } catch(err) {
        console.log(err);
    }
    