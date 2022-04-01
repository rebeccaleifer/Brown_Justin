/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

/*---------------------------------------------------------*/
/*
    Author: Justin Brown
    Shows json data for missing persons on button click
*/

//Builds data table on click event
function showData()
{
    //JSON Data for missing persons
    let data =  [
        {
        "date_missing": "10/30/2009",
        "last_name": "Sharmarice",
        "first_name": "Halima",
        "age_at_missing": "14",
        "city": "Granger",
        "state": "UT",
        "gender": "F",
        "race": "W"
    },

    {
        "date_missing": "10/16/2015",
        "last_name": "Martinez",
        "first_name": "Kimberly",
        "age_at_missing": "16",
        "city": "West Valley City",
        "state": "UT",
        "gender": "F",
        "race": "M"
    },

    {
        "date_missing": "07/23/2004",
        "last_name": "Gomez",
        "first_name": "Brenda",
        "age_at_missing": "3",
        "city": "Logan",
        "state": "UT",
        "gender": "F",
        "race": "H"
    },

    {
        "date_missing": "05/25/2003",
        "last_name": "Bishop",
        "first_name": "Acacia",
        "age_at_missing": "1",
        "city": "Salt Lake City",
        "state": "UT",
        "gender": "F",
        "race": "W"
    },

    {
        "date_missing": "08/03/2020",
        "last_name": "Salazar",
        "first_name": "Maria",
        "age_at_missing": "14",
        "city": "Snowville",
        "state": "UT",
        "gender": "F",
        "race": "H"
    },

    {
        "date_missing": "04/09/2020",
        "last_name": "Hernandez-Soto",
        "first_name": "Peggy",
        "age_at_missing": "6",
        "city": "Ogden",
        "state": "UT",
        "gender": "F",
        "race": "H"
    },

    {
        "date_missing": "06/24/2021",
        "last_name": "Jimenez",
        "first_name": "Lucero",
        "age_at_missing": "14",
        "city": "West Valley City",
        "state": "UT",
        "gender": "F",
        "race": "H"
    },

    {
        "date_missing": "11/08/2013",
        "last_name": "Colindres-Avila",
        "first_name": "Yuris",
        "age_at_missing": "17",
        "city": "West Valley City",
        "state": "UT",
        "gender": "F",
        "race": "M"
    },

    {
        "date_missing": "07/15/2021",
        "last_name": "Harris",
        "first_name": "Kandis",
        "age_at_missing": "16",
        "city": "Salt Lake City",
        "state": "UT",
        "gender": "F",
        "race": "W"
    },

    {
        "date_missing": "07/30/2006",
        "last_name": "Seal",
        "first_name": "Jaydan",
        "age_at_missing": "1",
        "city": "Garleys Wash",
        "state": "UT",
        "gender": "M",
        "race": "W"
    },

    {
        "date_missing": "06/13/2018",
        "last_name": "Lizarraga",
        "first_name": "Jose",
        "age_at_missing": "13",
        "city": "West Valley City",
        "state": "UT",
        "gender": "M",
        "race": "H"
    },

    {
        "date_missing": "04/23/2020",
        "last_name": "Cortez Trujillo",
        "first_name": "Eztli",
        "age_at_missing": "21",
        "city": "North Ogden",
        "state": "UT",
        "gender": "M",
        "race": "H"
    },

    {
        "date_missing": "10/25/2017",
        "last_name": "Fowles",
        "first_name": "Juan",
        "age_at_missing": "15",
        "city": "Lehi",
        "state": "UT",
        "gender": "M",
        "race": "M"
    },

    {
        "date_missing": "08/20/2012",
        "last_name": "Garcia",
        "first_name": "Isai",
        "age_at_missing": "17",
        "city": "West Valley City",
        "state": "UT",
        "gender": "M",
        "race": "M"
    },

    {
        "date_missing": "09/01/2015",
        "last_name": "Smith",
        "first_name": "Macin",
        "age_at_missing": "17",
        "city": "St. George",
        "state": "UT",
        "gender": "M",
        "race": "W"
    },

    {
        "date_missing": "01/26/2006",
        "last_name": "Sisco-Ramirez",
        "first_name": "Jose",
        "age_at_missing": "4",
        "city": "West Valley City",
        "state": "UT",
        "gender": "M",
        "race": "M"
    }
    ] ;

    //Makes button disappear
    document.getElementById("data-btn").style.display = "none";
    //Creates caption element
    let caption = document.createElement("h2");
    //Sets text for caption
    caption.innerHTML = "Missing Persons Cases Found State of Utah";
    //Creates table element
    let table = document.createElement("table");
    //sets table id
    table.id = "data-table";
    //Creates thead and tr elements
    let tableHead = document.createElement("thead");
    let tableRow = document.createElement("tr");
    //appends caption and table to data-output div in html page so it is visible
    document.getElementById("data-output").appendChild(caption);
    document.getElementById("data-output").appendChild(table);
    //Appends thead to table and tr to thead
    table.appendChild(tableHead);
    tableHead.appendChild(tableRow);
    //for each key in first data object, creates header row
    for (key in data[0])
    {
        //Creates td element
        let col = document.createElement("td");
        //Sets text of td to the name of the key
        col.innerHTML = key;
        //Appends td to tr
        tableRow.appendChild(col);
    }
    //Creates tbody element
    let tableBody = document.createElement("tbody");
    //Appends table body to table
    table.appendChild(tableBody);
    //For each data object in the data object array (or for each person), creates row and adds respective columns
    data.forEach((person) =>
    {
        //Creates tr element
        let row = document.createElement("tr");
        //Creates 8 td elements
        let col1 = document.createElement("td");
        let col2 = document.createElement("td");
        let col3 = document.createElement("td");
        let col4 = document.createElement("td");
        let col5 = document.createElement("td");
        let col6 = document.createElement("td");
        let col7 = document.createElement("td");
        let col8 = document.createElement("td");

        //Sets each column's text to it's respective data value
        col1.innerHTML = person.date_missing;
        col2.innerHTML = person.last_name;
        col3.innerHTML = person.first_name;
        col4.innerHTML = person.age_at_missing;
        col5.innerHTML = person.city;
        col6.innerHTML = person.state;
        col7.innerHTML = person.gender;
        col8.innerHTML = person.race;

        //Appends each column to the row
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        row.appendChild(col7);
        row.appendChild(col8);
        
        //Appends the row to the tbody
        tableBody.appendChild(row);
    })
}